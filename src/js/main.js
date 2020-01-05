import polyfills from './polyfills';
import detectTouch from './detectTouch';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
