import { StateSet } from '../state-set/state-set'
import { Browser } from '../browser/browser'
import { ConstantSpeedStep } from '../constant-speed-step/constant-speed-step'

/**
 * @function
 * @name State
 * @description return browser state and mount if needed
 * @returns {Promise<*>} - state
 */
export async function State () {

    const state = await Browser ().storage.local.get ()

    if (!state.isActive) await StateSet ('isActive', false)

    if (!state.speed) await StateSet ('speed', 1)

    if (!state.step) await StateSet ('step', ConstantSpeedStep.init)

    return state

}