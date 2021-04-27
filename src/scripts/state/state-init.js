import { StateGet } from './state-get'
import { StateSet } from './state-set'

export async function StateInit () {

    const state = await StateGet ()

    if (typeof state.isReady === 'undefined') {

        await StateSet ('isReady', false)

        await StateSet ('isActive', false)

        await StateSet ('speed', 1)

    }

}