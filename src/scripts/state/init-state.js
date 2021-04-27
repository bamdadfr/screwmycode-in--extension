import { setState } from './set-state'
import { getState } from './get-state'

export async function initState () {

    const state = await getState ()

    if (typeof state.isReady === 'undefined') {

        await setState ('isReady', false)

        await setState ('isActive', false)

        await setState ('speed', 1)

    }

}