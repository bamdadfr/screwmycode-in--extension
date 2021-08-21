import { getState } from './get-state'
import { setState } from './set-state'
import { STEP } from '../constants'

/**
 * @description initialize state
 */
export async function initializeState () {

    const state = await getState ()

    if (!state?.isActive) await setState ('isActive', false)

    if (!state?.speed) await setState ('speed', 1)

    if (!state?.step) await setState ('step', STEP.init)

}