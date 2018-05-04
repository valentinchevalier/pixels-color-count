export default class ColorUtils {
  static rgbaToCSS(rgbaColor) {
    const alpha = rgbaColor.a / 255;
    return `rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${alpha.toFixed(2)})`;
  }

  static rgbaToHex(rgbaColor) {
    return `#${this.integerToHex(rgbaColor.r)}${this.integerToHex(rgbaColor.g)}${this.integerToHex(rgbaColor.b)}${this.integerToHex(rgbaColor.a)}`;
  }

  static integerToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  static hexToRgba(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: parseInt(result[4], 16),
    } : null;
  }

  static euclideanDistanceSquare(list1, list2) {
    let sum = 0;

    for (let i = 0; i < list1.length; i += 1) {
      const offset = list1[i] - list2[i];
      sum += offset * offset;
    }

    return sum;
  }

  static hexSimilarity(hex1, hex2) {
    return this.rgbSimilarity(this.hexToRgba(hex1), this.hexToRgba(hex2));
  }

  static rgbSimilarity(rgb1, rgb2) {
    if (!this.RGB_MAX_DISTANCE_SQUARE) {
      this.RGB_MAX_DISTANCE_SQUARE =
        this.euclideanDistanceSquare([255, 255, 255, 255], [0, 0, 0, 0]);
    }
    const distance = this.euclideanDistanceSquare([
      rgb1.r,
      rgb1.g,
      rgb1.b,
      rgb1.a,
    ], [
      rgb2.r,
      rgb2.g,
      rgb2.b,
      rgb2.a,
    ]);

    return 1 - Math.sqrt(distance / this.RGB_MAX_DISTANCE_SQUARE);
  }
}
