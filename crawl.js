const { JSDOM } = require('jsdom')

function normalizeURL(url){
    const myURL = new URL(url);
    let normalizeURL = myURL.host + (myURL.pathname[myURL.pathname.length-1] === '/' ? myURL.pathname.slice(0,myURL.pathname.length-1) : myURL.pathname)
    return normalizeURL
}

function getURLsFromHTML(html){
    const dom = new JSDOM(html)
    const aTagList = dom.window.document.querySelectorAll('a')
}

module.exports = {
    normalizeURL
}
  