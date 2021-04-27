import { Browser } from '../browser/browser'

export async function StateGet () {

    return await Browser.get ().storage.local.get ()

}