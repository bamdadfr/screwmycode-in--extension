import { getBrowser } from '../browser/get-browser'
import { getState } from './get-state'

/**
 * @description state wrapper for `onChange` and `onOff` events
 * @param {Function} onChange trigger on browser state change
 * @param {Function} onOff trigger on isActive === false
 */
export async function onNewState (onChange, onOff) {

    const browser = await getBrowser ()
    const { isActive, speed } = await getState ()

    // mount and dismount
    if (isActive) {

        onChange ({ speed })

    } else {

        onOff ()

    }

    // change
    browser.storage.onChanged.addListener ((changes) => {

        const isActive = changes?.isActive?.newValue
        const speed = changes?.speed?.newValue

        if (isActive) return onChange ({ speed })

        onOff ()

    })

}