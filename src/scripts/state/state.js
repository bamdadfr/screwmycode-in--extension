import { StateSet } from '../state-set/state-set'
import { Browser } from '../browser/browser'

/**
 * @function
 * @name State
 * @description return browser state and mount if needed
 * @returns {Promise<*>} - state
 */
export async function State () {

    const state = await Browser ().storage.local.get ()

    if (typeof state.isActive === 'undefined') {

        await StateSet ('isActive', false)

    }

    if (typeof state.speed === 'undefined') {

        await StateSet ('speed', 1)

    }

    return state

}