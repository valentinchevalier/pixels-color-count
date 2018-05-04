!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(1))&&r.__esModule?r:{default:r};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"getColorFromArray",value:function(e,t){return a.default.rgbaToHex({r:e[t],g:e[t+1],b:e[t+2],a:e[t+3]})}},{key:"countColors",value:function(e){for(var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.9,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=[],i=function(i){var u=t.getColorFromArray(e,i),c=o.find(function(e){return a.default.hexSimilarity(e.color,u)>=n});c?c.count+=1:o.push({color:u,count:1}),r(i/4)},u=0;u<e.length;u+=4)i(u);return o}}],(n=null)&&o(t.prototype,n),r&&o(t,r),e}();t.default=i},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,a=[{key:"rgbaToCSS",value:function(e){return"rgba(".concat(e.r,", ").concat(e.g,", ").concat(e.b,", ").concat(e.a,")")}},{key:"rgbaToHex",value:function(e){return"#".concat(this.integerToHex(e.r)).concat(this.integerToHex(e.g)).concat(this.integerToHex(e.b)).concat(this.integerToHex(e.a))}},{key:"integerToHex",value:function(e){var t=e.toString(16);return 1===t.length?"0".concat(t):t}},{key:"hexToRgba",value:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16),a:parseInt(t[4],16)}:null}},{key:"euclideanDistanceSquare",value:function(e,t){for(var n=0,r=0;r<e.length;r+=1){var a=e[r]-t[r];n+=a*a}return n}},{key:"hexSimilarity",value:function(e,t){return this.rgbSimilarity(this.hexToRgba(e),this.hexToRgba(t))}},{key:"rgbSimilarity",value:function(e,t){this.RGB_MAX_DISTANCE_SQUARE||(this.RGB_MAX_DISTANCE_SQUARE=this.euclideanDistanceSquare([255,255,255],[0,0,0]));var n=this.euclideanDistanceSquare([e.r,e.g,e.b],[t.r,t.g,t.b]);return 1-Math.sqrt(n/this.RGB_MAX_DISTANCE_SQUARE)}}],(n=null)&&r(t.prototype,n),a&&r(t,a),e}();t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);self.addEventListener("message",({data:e})=>{const{imageData:t,similarityThreshold:n}=e,r=t.length/4/100,o=a.a.countColors(t,n,e=>{e%r==0&&self.postMessage({type:"progress",percentage:e/r+1})});self.postMessage({processedData:o})})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ltYWdlLXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbG9yLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hbmFseXNlLXBpY3R1cmUud29ya2VyLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsInZhbHVlIiwibiIsIl9fZXNNb2R1bGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJfY29sb3JVdGlscyIsIkltYWdlUHJvY2Vzc2luZyIsImRhdGEiLCJzdGFydEluZGV4IiwiQ29sb3JVdGlscyIsInJnYmFUb0hleCIsImciLCJiIiwiYSIsImltYWdlRGF0YSIsIl90aGlzIiwidGhpcyIsInNpbWlsYXJpdHlUaHJlc2hvbGQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJvblByb2dyZXNzIiwicmVzdWx0IiwiX2xvb3AiLCJoZXhDb2xvciIsImdldENvbG9yRnJvbUFycmF5IiwiZXhpc3RpbmdDb2xvciIsImZpbmQiLCJoZXhTaW1pbGFyaXR5IiwiY29sb3IiLCJjb3VudCIsInB1c2giLCJyZ2JhQ29sb3IiLCJjb25jYXQiLCJpbnRlZ2VyVG9IZXgiLCJoZXgiLCJ0b1N0cmluZyIsImV4ZWMiLCJwYXJzZUludCIsImxpc3QxIiwibGlzdDIiLCJzdW0iLCJvZmZzZXQiLCJoZXgxIiwiaGV4MiIsInJnYlNpbWlsYXJpdHkiLCJoZXhUb1JnYmEiLCJyZ2IxIiwicmdiMiIsIlJHQl9NQVhfRElTVEFOQ0VfU1FVQVJFIiwiZXVjbGlkZWFuRGlzdGFuY2VTcXVhcmUiLCJkaXN0YW5jZSIsIk1hdGgiLCJzcXJ0IiwiX2ltYWdlX3Byb2Nlc3NpbmdfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIl9pbWFnZV9wcm9jZXNzaW5nX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwic3RlcCIsInByb2Nlc3NlZERhdGEiLCJjb3VudENvbG9ycyIsImluZGV4IiwicG9zdE1lc3NhZ2UiLCJ0eXBlIiwicGVyY2VudGFnZSJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsS0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxJQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFlBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQUtBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEdBQ0FLLGNBQUEsRUFDQUMsWUFBQSxFQUNBQyxJQUFBTixLQU1BWixFQUFBbUIsRUFBQSxTQUFBakIsR0FDQVksT0FBQUMsZUFBQWIsRUFBQSxjQUFpRGtCLE9BQUEsS0FJakRwQixFQUFBcUIsRUFBQSxTQUFBbEIsR0FDQSxJQUFBUyxFQUFBVCxLQUFBbUIsV0FDQSxXQUEyQixPQUFBbkIsRUFBQSxTQUMzQixXQUFpQyxPQUFBQSxHQUVqQyxPQURBSCxFQUFBVSxFQUFBRSxFQUFBLElBQUFBLEdBQ0FBLEdBSUFaLEVBQUFhLEVBQUEsU0FBQVUsRUFBQUMsR0FB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RUFBQUcsb0JBQ0FBLEdBQ0dWLEVBR0htRCxFQURBNUMsRUFBQUssT0FBQSxFQUNBLElBRUF3QyxFQUFBSixFQUFBMUMsRUFBQStDLFlBQUE5QyxFQUFBRyxFQUFBNEMsSUFDQUEsRUFBQUgsR0FBQSxHQUNBRixLQUFBTSxhQUF3QkMsS0FBQSxXQUFBQyxXQUFBSCxFQUFBSCxFQUFBLE1BSXhCRixLQUFBTSxhQUFvQkgiLCJmaWxlIjoiZDNlMzQ2YmQwZjczMTRkODQxMGEud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsImltcG9ydCBDb2xvclV0aWxzIGZyb20gJy4vY29sb3ItdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVByb2Nlc3Npbmcge1xuICBzdGF0aWMgZ2V0Q29sb3JGcm9tQXJyYXkoZGF0YSwgc3RhcnRJbmRleCkge1xuICAgIHJldHVybiBDb2xvclV0aWxzLnJnYmFUb0hleCh7XG4gICAgICByOiBkYXRhW3N0YXJ0SW5kZXhdLFxuICAgICAgZzogZGF0YVtzdGFydEluZGV4ICsgMV0sXG4gICAgICBiOiBkYXRhW3N0YXJ0SW5kZXggKyAyXSxcbiAgICAgIGE6IGRhdGFbc3RhcnRJbmRleCArIDNdLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNvdW50Q29sb3JzKGltYWdlRGF0YSwgc2ltaWxhcml0eVRocmVzaG9sZCA9IDAuOSwgb25Qcm9ncmVzcyA9ICgpID0+IHt9KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlRGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgY29uc3QgaGV4Q29sb3IgPSB0aGlzLmdldENvbG9yRnJvbUFycmF5KGltYWdlRGF0YSwgaSk7XG5cbiAgICAgIGNvbnN0IGV4aXN0aW5nQ29sb3IgPSByZXN1bHQuZmluZChkYXRhID0+IENvbG9yVXRpbHNcbiAgICAgICAgLmhleFNpbWlsYXJpdHkoZGF0YS5jb2xvciwgaGV4Q29sb3IpID49IHNpbWlsYXJpdHlUaHJlc2hvbGQpO1xuXG4gICAgICBpZiAoIWV4aXN0aW5nQ29sb3IpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGNvbG9yOiBoZXhDb2xvcixcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleGlzdGluZ0NvbG9yLmNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgICBvblByb2dyZXNzKGkgLyA0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclV0aWxzIHtcbiAgc3RhdGljIHJnYmFUb0NTUyhyZ2JhQ29sb3IpIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZ2JhQ29sb3Iucn0sICR7cmdiYUNvbG9yLmd9LCAke3JnYmFDb2xvci5ifSwgJHtyZ2JhQ29sb3IuYX0pYDtcbiAgfVxuXG4gIHN0YXRpYyByZ2JhVG9IZXgocmdiYUNvbG9yKSB7XG4gICAgcmV0dXJuIGAjJHt0aGlzLmludGVnZXJUb0hleChyZ2JhQ29sb3Iucil9JHt0aGlzLmludGVnZXJUb0hleChyZ2JhQ29sb3IuZyl9JHt0aGlzLmludGVnZXJUb0hleChyZ2JhQ29sb3IuYil9JHt0aGlzLmludGVnZXJUb0hleChyZ2JhQ29sb3IuYSl9YDtcbiAgfVxuXG4gIHN0YXRpYyBpbnRlZ2VyVG9IZXgoYykge1xuICAgIGNvbnN0IGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICAgIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gYDAke2hleH1gIDogaGV4O1xuICB9XG5cbiAgc3RhdGljIGhleFRvUmdiYShoZXgpIHtcbiAgICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KT8kL2kuZXhlYyhoZXgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcbiAgICAgIGE6IHBhcnNlSW50KHJlc3VsdFs0XSwgMTYpLFxuICAgIH0gOiBudWxsO1xuICB9XG5cblxuICBzdGF0aWMgZXVjbGlkZWFuRGlzdGFuY2VTcXVhcmUobGlzdDEsIGxpc3QyKSB7XG4gICAgbGV0IHN1bSA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QxLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBsaXN0MVtpXSAtIGxpc3QyW2ldO1xuICAgICAgc3VtICs9IG9mZnNldCAqIG9mZnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VtO1xuICB9XG4gIHN0YXRpYyBoZXhTaW1pbGFyaXR5KGhleDEsIGhleDIpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2JTaW1pbGFyaXR5KHRoaXMuaGV4VG9SZ2JhKGhleDEpLCB0aGlzLmhleFRvUmdiYShoZXgyKSk7XG4gIH1cblxuICBzdGF0aWMgcmdiU2ltaWxhcml0eShyZ2IxLCByZ2IyKSB7XG4gICAgaWYgKCF0aGlzLlJHQl9NQVhfRElTVEFOQ0VfU1FVQVJFKSB7XG4gICAgICB0aGlzLlJHQl9NQVhfRElTVEFOQ0VfU1FVQVJFID0gdGhpcy5ldWNsaWRlYW5EaXN0YW5jZVNxdWFyZShbMjU1LCAyNTUsIDI1NV0sIFswLCAwLCAwXSk7XG4gICAgfVxuICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5ldWNsaWRlYW5EaXN0YW5jZVNxdWFyZShbXG4gICAgICByZ2IxLnIsXG4gICAgICByZ2IxLmcsXG4gICAgICByZ2IxLmIsXG4gICAgXSwgW1xuICAgICAgcmdiMi5yLFxuICAgICAgcmdiMi5nLFxuICAgICAgcmdiMi5iLFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoZGlzdGFuY2UgLyB0aGlzLlJHQl9NQVhfRElTVEFOQ0VfU1FVQVJFKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5pbXBvcnQgSW1hZ2VQcm9jZXNzaW5nIGZyb20gJy4vaW1hZ2UtcHJvY2Vzc2luZyc7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgaW1hZ2VEYXRhLFxuICAgIHNpbWlsYXJpdHlUaHJlc2hvbGQsXG4gIH0gPSBkYXRhO1xuXG4gIGNvbnN0IHRvdGFsUGl4ZWxzID0gaW1hZ2VEYXRhLmxlbmd0aCAvIDQ7XG4gIGNvbnN0IHN0ZXAgPSB0b3RhbFBpeGVscyAvIDEwMDtcblxuICBjb25zdCBwcm9jZXNzZWREYXRhID0gSW1hZ2VQcm9jZXNzaW5nLmNvdW50Q29sb3JzKGltYWdlRGF0YSwgc2ltaWxhcml0eVRocmVzaG9sZCwgKGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ICUgc3RlcCA9PT0gMCkge1xuICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IHR5cGU6ICdwcm9ncmVzcycsIHBlcmNlbnRhZ2U6IChpbmRleCAvIHN0ZXApICsgMSB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHNlbGYucG9zdE1lc3NhZ2UoeyBwcm9jZXNzZWREYXRhIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9