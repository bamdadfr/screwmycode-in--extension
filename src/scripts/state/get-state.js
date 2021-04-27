import { Browser } from '../browser/browser'

export async function getState () {

    return await Browser.get ().storage.local.get ()

}