import { getBrowser } from '../browser/get-browser'

/**
 * @param {function(): void} set setter function
 */
export async function handleIndicator (set) {

    // on load
    await set ()

    // on change
    const browser = await getBrowser ()

    browser.storage.onChanged.addListener (async () => await set ())

}