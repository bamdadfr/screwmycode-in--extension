import { getBrowser } from '../browser/get-browser'
import { SPEED, STEP } from '../constants'
import { clampValue } from '../utils/clamp-value'

/**
 * @param {string} type action
 * @param {*} payload new state
 */
export async function setState (type, payload) {

    const browser = await getBrowser ()
    const { set } = browser?.storage?.local

    switch (type) {

        case 'isActive':

            await set ({ 'isActive': payload })

            break

        case 'speed':

            await set ({
                'speed': clampValue (
                    payload,
                    {
                        'min': SPEED.min,
                        'max': SPEED.max,
                        'def': SPEED.default,
                    },
                ),
            })

            break

        case 'step':

            await set ({
                'step': clampValue (
                    payload,
                    {
                        'min': STEP.min,
                        'max': STEP.max,
                        'def': STEP.default,
                    },
                ),
            })

            break

        default:

            throw new Error ('state error')

    }

}