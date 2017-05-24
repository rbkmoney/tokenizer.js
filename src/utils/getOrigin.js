function getScriptUrl() {
    const scripts = document.getElementsByTagName('script');
    const element = scripts[scripts.length - 1];
    return element.src;
}

function getOrigin() {
    const parser = document.createElement('a');
    parser.href = getScriptUrl();
    const pathArray = parser.href.split('/');
    const protocol = pathArray[0];
    const host = pathArray[2];
    return `${protocol}//${host}`;
}

export default getOrigin;