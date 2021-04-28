import { Browser } from '../browser/browser'

export async function StateOnChanged (callback) {

    const browser = await Browser ()

    return browser.storage.onChanged.addListener (callback)

}