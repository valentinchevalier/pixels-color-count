import './style.scss';
import AnalysePixels from './js/analyse-pixels';

function domReady(callback) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

domReady(() => {
  AnalysePixels.init();

  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('sw.js').then((registration) => {
  //       console.log('SW registered: ', registration);
  //     }).catch((registrationError) => {
  //       console.log('SW registration failed: ', registrationError);
  //     });
  //   });
  // }
});
