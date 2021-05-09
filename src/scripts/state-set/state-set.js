import { Browser } from '../browser/browser'

/**
 * @function
 * @name StateSet
 * @description performs mutations in browser state with a reducer approach
 * @param {String} type - action / mutation to perform
 * @param {(Boolean, Number)} payload - state
 * @return {Promise<null>}
 */
export async function StateSet (type, payload) {

    const state = await Browser ().storage.local.get ()
    const set = await Browser ().storage.local.set

    // reducer
    switch (type) {

        case 'isActive':
            await set ({
                ...state,
                'isActive': payload,
            })

            break

        case 'speed':

            if (payload < 0.5) {

                payload = 0.5

            } else if (payload > 1.5) {

                payload = 1.5

            }

            payload = parseFloat (payload.toFixed (3))

            if (Number.isNaN (payload)) payload = 1

            await set ({
                ...state,
                'speed': payload,
            })

            break

        default:
            return null

    }

}