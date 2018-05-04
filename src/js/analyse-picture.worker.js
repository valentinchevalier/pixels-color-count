/* eslint-disable no-restricted-globals */
import ImageProcessing from './image-processing';

self.addEventListener('message', ({ data }) => {
  const {
    imageData,
    similarityThreshold,
  } = data;

  const totalPixels = imageData.length / 4;
  const step = totalPixels / 100;

  const processedData = ImageProcessing.countColors(imageData, similarityThreshold, (index) => {
    if (index % step === 0) {
      self.postMessage({ type: 'progress', percentage: (index / step) + 1 });
    }
  });

  self.postMessage({ processedData });
});
