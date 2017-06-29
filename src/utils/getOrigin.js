import URL from 'url-parse';

const currentScript = document.currentScript || (function () {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();

function getOrigin() {
    return new URL(currentScript.src).origin;
}

export default getOrigin;
