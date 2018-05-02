import Perf from './perf';
import ColorUtils from './color-utils';

export default class AnalysePixels {
  static init() {
    this.displayImage = document.getElementById('display-image');
    this.imageToAnalyse = document.getElementById('analyse-image');
    this.canvas = document.getElementById('canvas');
    this.body = document.querySelector('body');
    this.timeBlock = document.getElementById('time-block');
    this.sizeBlock = document.getElementById('size-block');
    this.results = document.querySelector('.resultats');
    this.fileInput = document.getElementById('upload-image');

    this.fileInput.addEventListener('change', (evt) => {
      this.startLoading();
      const tgt = evt.target || window.event.srcElement;
      const {
        files,
      } = tgt;

      if (FileReader && files && files.length) {
        const fileReader = new FileReader();

        fileReader.onload = () => {
          this.displayImage.src = fileReader.result;
          this.imageToAnalyse.src = fileReader.result;
        };
        fileReader.readAsDataURL(files[0]);

        this.imageToAnalyse.onload = () => {
          this.startAnalysing();
          this.sizeBlock.innerHTML = `Taille de l'image : ${this.imageToAnalyse.height}x${this.imageToAnalyse.width} pixels.`;
        };
      }
    });
  }

  static startLoading() {
    this.results.innerHTML = '';
    this.sizeBlock.innerHTML = '';
    this.timeBlock.innerHTML = '';
    this.body.classList.add('is-loading');
  }

  static stopLoading() {
    this.body.classList.remove('is-loading');
  }

  static startAnalysing() {
    const context = this.canvas.getContext('2d');
    const {
      width,
      height,
    } = this.imageToAnalyse;

    this.canvas.height = height;
    this.canvas.width = width;

    context.drawImage(this.imageToAnalyse, 0, 0);

    const imageData = context.getImageData(0, 0, width, height).data;

    const analysePerf = new Perf();
    analysePerf.startExecution();
    const analysedColors = this.countColors(imageData);
    analysePerf.stopExecution();

    this.timeBlock.innerHTML = `Temps de calcul : ${analysePerf.getExecutionDuration()} secondes.`;
    console.info(`Temps de calcul : ${analysePerf.getExecutionDuration()} secondes.`);

    const displayPerf = new Perf();
    displayPerf.startExecution();
    this.displayResults(analysedColors);
    displayPerf.stopExecution();

    console.info(`Temps d'affichage des résultats : ${displayPerf.getExecutionDuration()} secondes.`);
    this.stopLoading();
  }

  static displayResults(analysedColors) {
    const fragment = document.createDocumentFragment();

    const colorsToDisplay = analysedColors
      .sort((a, b) => b.count - a.count)
      .splice(0, 1000);

    colorsToDisplay.forEach((colorData) => {
      const cssColor = ColorUtils.rgbaToCSS(ColorUtils.hexToRgba(colorData.color));
      const li = document.createElement('li');
      li.innerHTML = `<span class="color tooltip" style="background: ${cssColor};"><span class="tooltip-text">${cssColor}</span></span> ${colorData.count}`;

      fragment.appendChild(li);
    });

    this.results.appendChild(fragment);
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

  static getColorFromArray(data, startIndex) {
    return {
      r: data[startIndex],
      g: data[startIndex + 1],
      b: data[startIndex + 2],
      a: data[startIndex + 3],
    };
  }
}
