import { getState } from '../state/get-state'

/**
 * @description update `speed` query parameter with state value
 */
export async function setHistory () {

    const { speed, isActive } = await getState ()
    const url = new URL (window.location)

    // stateless
    if (!isActive || speed === 1) {

        url.searchParams.delete ('speed')

        window.history.replaceState ({}, '', url.toString ())

        return

    }

    // stateful
    const querySpeed = url.searchParams.get ('speed')

    if (parseFloat (speed) === parseFloat (querySpeed)) return

    url.searchParams.set ('speed', speed)

    window.history.replaceState ({}, '', url.toString ())

}