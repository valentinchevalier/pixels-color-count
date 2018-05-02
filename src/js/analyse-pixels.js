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
      const { files } = tgt;

      if (FileReader && files && files.length) {
        const fileReader = new FileReader();

        fileReader.onload = () => {
          this.displayImage.src = fileReader.result;
          this.imageToAnalyse.src = fileReader.result;
        };
        fileReader.readAsDataURL(files[0]);

        this.imageToAnalyse.onload = () => {
          this.startAnalysing();
        };
      }
    });
  }

  static startLoading() {
    this.results.innerHTML = '';
    this.body.classList.add('loading');
  }

  static stopLoading() {
    this.body.classList.remove('loading');
  }

  static startAnalysing() {
    const context = this.canvas.getContext('2d');

    const {
      width,
      height,
    } = this.imageToAnalyse;

    this.sizeBlock.innerHTML = `Taille de l'image : ${height}x${width} pixels.`;

    this.canvas.height = height;
    this.canvas.width = width;

    context.drawImage(this.imageToAnalyse, 0, 0);

    const imageData = context.getImageData(0, 0, width, height).data;
    // canvas.style.display = 'none';

    this.startTime = performance.now();
    this.analysedData = this.analyseImage(imageData);
    this.endTime = performance.now();
    this.displayResults();

    this.stopLoading();
  }

  static displayResults() {
    const time = (this.endTime - this.startTime) / 1000;

    this.timeBlock.innerHTML = `Temps de calcul : ${time.toFixed(3)} seconds.`;

    this.analysedData.sortedColors.forEach((key) => {
      const rgba = this.getColorFromKey(key);
      const li = document.createElement('li');
      li.innerHTML = `<span class="color" style="background: rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a});"></span> ${this.analysedData.colors[key]}`;

      this.results.appendChild(li);
    });
  }

  static analyseImage(imageData) {
    const colors = {};

    for (let i = 0; i < imageData.length; i += 4) {
      const color = this.getColor(imageData, i);
      const colorKey = this.getColorKey(color);

      if (colors[colorKey]) {
        colors[colorKey] += 1;
      } else {
        colors[colorKey] = 1;
      }
    }
    const sortedColors = Object.keys(colors).sort((a, b) => -(colors[a] - colors[b]));

    return {
      colors,
      sortedColors,
    };
  }

  static getColor(data, index) {
    return {
      r: data[index],
      g: data[index + 1],
      b: data[index + 2],
      a: data[index + 3],
    };
  }

  static getColorKey(color) {
    return `${color.r}-${color.g}-${color.b}-${color.a}`;
  }

  static getColorFromKey(key) {
    const values = key.split('-');

    return this.getColor(values, 0);
  }
}

/*
//var canvas = document.getElementById('canvas');
//var ctx = canvas.getContext('2d');
//ctx.rect(10, 10, 100, 100);
//ctx.fill();

//console.log(ctx.getImageData(50, 50, 100, 100));
//ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }
*/

/* var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
img.onload = function() {
dessiner(this);
};

function dessiner(img) {
var canevas = document.getElementById('canvas');
var ctx = canevas.getContext('2d');
ctx.drawImage(img, 0, 0);
img.style.display = 'none';
var imageData = ctx.getImageData(0, 0, canevas.width, canevas.height);
var data = imageData.data;

var inversion = function() {
  for (var i = 0; i < data.length; i += 4) {
    data[i]     = 255 - data[i];     // rouge
    data[i + 1] = 255 - data[i + 1]; // vert
    data[i + 2] = 255 - data[i + 2]; // bleu
  }
  ctx.putImageData(imageData, 0, 0);
};

var niveaudegris = function() {
  for (var i = 0; i < data.length; i += 4) {
    var moy = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i]     = moy; // rouge
    data[i + 1] = moy; // vert
    data[i + 2] = moy; // bleu
  }
  ctx.putImageData(imageData, 0, 0);
};

var btninversion = document.getElementById('btninversion');
btninversion.addEventListener('click', inversion);
var btnniveaudegris = document.getElementById('btnniveaudegris');
btnniveaudegris.addEventListener('click', niveaudegris);
} */
