import { getBrowser } from '../browser/get-browser'
import { SPEED, STEP } from '../constants'
import { getState } from './get-state'

/**
 * @param {string} type action
 * @param {*} payload new state
 */
export async function setState (type, payload) {

    const state = await getState ()
    const set = await getBrowser ().storage.local.set

    switch (type) {

        case 'isActive':
            await set ({
                ...state,
                'isActive': payload,
            })

            break

        case 'speed':

            if (payload < SPEED.min) payload = SPEED.min

            if (payload > SPEED.max) payload = SPEED.max

            payload = parseFloat (payload.toFixed (3))

            if (Number.isNaN (payload)) payload = 1

            await set ({
                ...state,
                'speed': payload,
            })

            break

        case 'step':

            if (payload < STEP.min) payload = STEP.min

            if (payload > STEP.max) payload = STEP.max

            payload = parseFloat (payload)

            if (Number.isNaN (payload)) payload = STEP.init

            await set ({
                ...state,
                'step': payload,
            })

            break

        default:
            throw new Error ('state error')

    }

}