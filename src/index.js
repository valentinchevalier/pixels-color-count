import $ from 'jquery';
import './style.scss';
import AnalysePixels from './js/analyse-pixels';

$(document).ready(() => {
  AnalysePixels.init();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('SW registered: ', registration);
      }).catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
});
