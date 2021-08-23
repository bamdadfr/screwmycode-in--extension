import { getBrowser } from '../browser/get-browser'
import { setPercentage } from './set-percentage'

/**
 * @description handle the `percentage` element
 */
export async function handlePercentage () {

    // on load
    await setPercentage ()

    // on change
    const browser = await getBrowser ()

    browser.storage.onChanged.addListener (async () => await setPercentage ())

}