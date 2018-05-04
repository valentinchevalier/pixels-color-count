const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');

const extractSASS = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      },
      {
        test: /\.(scss|css)$/,
        use: extractSASS.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }],
        }),
      },
      {
        test: /\.font\.js$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'webfonts-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
          },
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
          },
        }],
      },
    ],
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true
    }),
    extractSASS,
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new WebpackPwaManifest({
      name: 'Pixel colors count',
      short_name: 'Colors count',
      theme_color: '#000000',
      background_color: '#ffffff',
      description: 'App d\'analyse des couleurs d\'une image',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: 'icons'
        }
      ]
    })
  ],
};
