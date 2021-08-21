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

        // todo remove after dev
        console.log ('run')

        const { isActive, speed } = changes

        if (isActive.newValue === true) {

            onChange ({ 'speed': speed.newValue })

            return

        }

        onOff ()

    })

}