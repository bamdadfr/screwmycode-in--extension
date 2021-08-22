import { getBrowser } from '../browser/get-browser'

/**
 * @description return browser state and mount if needed
 * @returns {Promise<*>} state
 */
export async function getState () {

    return await getBrowser ().storage.local.get ()

}