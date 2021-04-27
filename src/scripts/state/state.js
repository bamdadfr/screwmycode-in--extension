import { StateSet } from '../state-set/state-set'
import { Browser } from '../browser/browser'

export async function State () {

    const state = await Browser ().storage.local.get ()

    if (typeof state.isReady === 'undefined') {

        await StateSet ('isReady', false)

        await StateSet ('isActive', false)

        await StateSet ('speed', 1)

        return

    }

    return state

}