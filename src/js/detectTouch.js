import detectIt from 'detect-it';


export default function() {
    // Определение тач устройств

    if (detectIt.hasTouch) {
        document.body.classList.remove('no-touch');
        document.body.classList.add('touch');
    }
}