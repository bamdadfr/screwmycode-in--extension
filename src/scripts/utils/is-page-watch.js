/**
 * @param {string} url href string
 * @returns {boolean} page is /watch ?
 */
export function isPageWatch (url) {

    return /youtube(\.com)?\/watch\?v=/.exec (url) !== null

}