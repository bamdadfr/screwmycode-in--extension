import { getBrowser } from '../browser/get-browser'

export async function getState () {

    return await getBrowser ().storage.local.get ()

}