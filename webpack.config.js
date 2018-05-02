const path = require('path');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const GoogleFonts = require('./webpack.google-fonts');

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
    rules: [{
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
        test: /\.(scss|css)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: {
                safe: true
              }
            }
          }, {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          }
        ]
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].bundle.css",
      chunkFilename: "[id].css"
    })
  ],
  // stats: {
  //   assets: false,
  //   children: false,
  // },
};
