export default class ColorUtils {
  static rgbaToCSS(rgbaColor) {
    return `rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${rgbaColor.a})`;
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
}
