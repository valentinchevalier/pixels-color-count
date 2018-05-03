/* eslint-disable no-restricted-globals */
import ImageProcessing from './image-processing';

self.addEventListener('message', ({ data }) => {
  const {
    imageData,
  } = data;

  const processedData = ImageProcessing.countColors(imageData);

  self.postMessage({ processedData });
});
