const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

test('normalizedURL', () =>{
    expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})