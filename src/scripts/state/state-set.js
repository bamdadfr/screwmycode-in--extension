import { StateGet } from './state-get'
import { Browser } from '../browser/browser'

export async function StateSet (type, payload) {

    const state = await StateGet ()
    const set = await Browser.get ().storage.local.set

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