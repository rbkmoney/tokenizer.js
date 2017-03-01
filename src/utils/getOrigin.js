function getScriptUrl() {
    const scripts = document.getElementsByTagName('script');
    const element = scripts[scripts.length - 1];
    return element.src;
}

function getOrigin() {
    const parser = document.createElement('a');
    parser.href = getScriptUrl();
    return parser.origin;
}

export default getOrigin;