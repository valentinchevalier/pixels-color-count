import ColorUtils from './color-utils';

export default class ImageProcessing {
  static getColorFromArray(data, startIndex) {
    return ColorUtils.rgbaToHex({
      r: data[startIndex],
      g: data[startIndex + 1],
      b: data[startIndex + 2],
      a: data[startIndex + 3],
    });
  }

  static countColors(imageData, similarityThreshold = 0.9, onProgress = () => {}) {
    const result = [];

    for (let i = 0; i < imageData.length; i += 4) {
      const hexColor = this.getColorFromArray(imageData, i);

      const existingColor = result.find(data => ColorUtils
        .hexSimilarity(data.color, hexColor) >= similarityThreshold);

      if (!existingColor) {
        result.push({
          color: hexColor,
          count: 1,
        });
      } else {
        existingColor.count += 1;
      }
      onProgress(i / 4);
    }

    return result;
  }
}
