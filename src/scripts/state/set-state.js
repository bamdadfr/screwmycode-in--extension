import { getState } from './get-state'
import { getBrowser } from '../browser/get-browser'

export async function setState (type, payload) {

    const state = await getState ()
    const set = await getBrowser ().storage.local.set

    switch (type) {

        case 'isReady':
            await set ({
                ...state,
                'isReady': payload,
            })

            break

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

            await set ({
                ...state,
                'speed': payload,
            })

            break

        default:
            return null

    }

}