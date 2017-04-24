import URL from 'url-parse';

function getScriptUrl() {
    const scripts = document.getElementsByTagName('script');
    const element = scripts[scripts.length - 1];
    return element.src;
}

function getOrigin() {
    const parsedUrl = new URL(getScriptUrl());
    return parsedUrl.origin;
}

export default getOrigin;