import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import detectIt from 'detect-it';

const isTouch = detectIt.hasTouch;

let state = {
    scrollLocked: false,
    lockedOnMobile: false,
    scrollAllowedOn: null
};

let windTop = 0;

function setState(newState) {
    state = {
        ...state,
        ...newState
    };
}

function lockScrollDesktop() {
    windTop = window.scrollY;
    document.documentElement.classList.add('no-scroll');
    document.documentElement.style.top = -windTop + 'px';
}

function unlockScrollDesktop() {
    document.documentElement.classList.remove('no-scroll');
    document.documentElement.style.top = 0;
    window.scrollTo(0, windTop);
}

function lockScroll(element, isMobile = isTouch) {
    const { scrollLocked } = state;
    if (scrollLocked) return;
    if (isMobile) {
        disableBodyScroll(element);
        setState({
            scrollLocked: true,
            lockedOnMobile: true,
            scrollAllowedOn: element
        });
        return;
    } else {
        lockScrollDesktop();
        setState({
            scrollLocked: true
        });
        return;
    }
}

function unlockScroll() {
    const { scrollLocked, lockedOnMobile, scrollAllowedOn } = state;

    if (!scrollLocked) return;

    if (lockedOnMobile) {
        enableBodyScroll(scrollAllowedOn);
    } else {
        unlockScrollDesktop();
    }

    setState({
        scrollLocked: false,
        lockedOnMobile: false,
        scrollAllowedOn: null
    });
}

export { lockScroll, unlockScroll };
