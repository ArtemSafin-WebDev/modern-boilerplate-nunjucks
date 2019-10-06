import polyfills from './polyfills';
import detectTouch from './detectTouch';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
});
