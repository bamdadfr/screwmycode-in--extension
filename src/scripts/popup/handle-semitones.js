import { getBrowser } from '../browser/get-browser'
import { setSemitones } from './set-semitones'

/**
 * @description handle the `semitones` element
 */
export async function handleSemitones () {

    // on load
    await setSemitones ()

    // on change
    const browser = await getBrowser ()

    browser.storage.onChanged.addListener (async () => await setSemitones ())

}