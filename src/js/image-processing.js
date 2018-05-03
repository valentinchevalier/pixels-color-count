import ColorUtils from './color-utils';

export default class ImageProcessing {
  static getColorFromArray(data, startIndex) {
    return {
      r: data[startIndex],
      g: data[startIndex + 1],
      b: data[startIndex + 2],
      a: data[startIndex + 3],
    };
  }

  static countColors(imageData) {
    const colors = {};

    for (let i = 0; i < imageData.length; i += 4) {
      const hexColor = ColorUtils.rgbaToHex(this.getColorFromArray(imageData, i));

      if (colors[hexColor]) {
        colors[hexColor] += 1;
      } else {
        colors[hexColor] = 1;
      }
    }

    return Object.keys(colors).map(key => ({
      color: key,
      count: colors[key],
    }));
  }
}

