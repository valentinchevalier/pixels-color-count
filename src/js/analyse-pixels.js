import Perf from './perf';
import ColorUtils from './color-utils';
import Worker from './analyse-picture.worker';

export default class AnalysePixels {
  static init() {
    this.$body = document.querySelector('body');
    this.$form = document.getElementById('analyseForm');
    this.$inputImage = document.getElementById('uploadImage');
    this.$inputThreshold = document.getElementById('threshold');
    this.$imageDisplay = document.getElementById('display-image');
    this.$imageAnalyse = document.getElementById('analyse-image');
    this.$imageContainer = document.querySelector('.image-container');
    this.$sizeBlock = document.getElementById('size-block');
    this.$canvas = document.getElementById('canvas');
    this.$progressBar = document.getElementById('progressBar');
    this.$progressScan = document.querySelector('.progress-scan');
    this.$results = document.querySelector('.resultats');

    this.$form.addEventListener('submit', (submitEvent) => {
      submitEvent.preventDefault();

      this.threshold = this.$inputThreshold.value ? Math.round(this.$inputThreshold.value) : 90;

      if (this.threshold < 0 || this.threshold > 100) {
        return;
      }

      this.threshold = this.threshold / 100;

      this.startAnalysing();
    });

    this.$inputImage.addEventListener('change', () => {
      this.loadImage();
    });
  }

  static startLoading() {
    this.$results.innerHTML = '';
    this.$body.classList.add('is-loading');
    this.setProgress(0);
  }

  static stopLoading() {
    this.$body.classList.remove('is-loading');
    this.setProgress(0);
  }

  static setProgress(percentage) {
    const percentString = `${percentage}%`;
    this.$progressBar.style.width = percentString;
    this.$progressBar.innerHTML = percentString;
    this.$progressScan.style.height = percentString;
  }

  static startAnalysing() {
    this.startLoading();

    const imageData = this.getImageData();

    const worker = new Worker();

    const analysePerf = new Perf('Temps de calcul');
    analysePerf.startExecution();

    worker.postMessage({
      imageData,
      similarityThreshold: this.threshold,
    });

    worker.addEventListener('message', ({ data }) => {
      if (data.type && data.type === 'progress') {
        this.setProgress(data.percentage);
        return;
      }

      analysePerf.stopExecution();
      analysePerf.log();

      const analysedColors = data.processedData;

      const displayPerf = new Perf('Temps d\'affichage des résultats');
      displayPerf.startExecution();
      this.displayResults(analysedColors);
      displayPerf.stopExecution();
      displayPerf.log();

      this.stopLoading();
      worker.terminate();
    });
  }

  static getImageData() {
    const context = this.$canvas.getContext('2d');
    const {
      width,
      height,
    } = this.$imageAnalyse;

    this.$canvas.height = height;
    this.$canvas.width = width;

    context.drawImage(this.$imageAnalyse, 0, 0);
    const imageData = context.getImageData(0, 0, width, height).data;
    return imageData;
  }

  static displayResults(analysedColors) {
    const fragment = document.createDocumentFragment();

    const colorsToDisplay = analysedColors
      .sort((a, b) => b.count - a.count)
      .splice(0, 1000);

    colorsToDisplay.forEach((colorData) => {
      const cssColor = ColorUtils.rgbaToCSS(ColorUtils.hexToRgba(colorData.color));
      const li = document.createElement('li');
      li.innerHTML = `<span class="color" style="background: ${cssColor};"><span class="color-text">${cssColor}</span></span> ${colorData.count}`;

      fragment.appendChild(li);
    });

    this.$results.appendChild(fragment);
  }

  static loadImage() {
    const {
      files,
    } = this.$inputImage;

    if (FileReader && files && files.length) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        this.$imageDisplay.src = fileReader.result;
        this.$imageAnalyse.src = fileReader.result;
      };
      fileReader.readAsDataURL(files[0]);

      this.$imageAnalyse.onload = () => {
        this.displayImage();
        this.displayImageSize();
      };
    }
  }

  static displayImage() {
    this.$imageContainer.classList.remove('hidden');
  }

  static displayImageSize() {
    this.$sizeBlock.innerHTML = `Taille de l'image : ${this.$imageAnalyse.height}x${this.$imageAnalyse.width} pixels.`;
  }
}
