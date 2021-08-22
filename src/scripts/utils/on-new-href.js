import { INTERVAL } from '../constants'

const defaultOptions = {
    'executeOnLoad': true,
}

/**
 * @description run a callback on a given interval
 *      only when `window.location.href` has changed
 * @param {Function} callback callback function
 * @param {object} [options] optional parameters
 * @param {boolean} [options.executeOnLoad] execute callback on load?
 */
export function onNewHref (
    callback,
    {
        executeOnLoad,
    } = defaultOptions,
) {

    let href = window.location.href

    setInterval (() => {

        const newHref = window.location.href

        if (href === newHref) return

        href = newHref

        callback (href)

    }, INTERVAL)

    if (executeOnLoad) callback (href)

}