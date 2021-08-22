import { getState } from '../state/get-state'
import { getBrowser } from '../browser/get-browser'
import { RETRY, SPEED } from '../constants'
import { createControls } from '../controls/create-controls'

/**
 * @description handle data stream from youtube player
 * @returns {undefined}
 */
export async function handlePlayer () {

    const player = document.getElementsByClassName ('video-stream html5-main-video')[0]
    const retry = () => setTimeout (() => handlePlayer (), RETRY)

    // retry if player not defined
    if (!player) return retry ()

    // retry if player not ready
    if (!player.readyState) return retry ()

    const setSpeed = async () => {

        const { isActive, speed } = await getState ()

        player.mozPreservesPitch = !isActive

        player.playbackRate = isActive ? speed : SPEED.default

    }

    const browser = getBrowser ()

    // on load
    await createControls ()

    await setSpeed ()

    // on play
    player.addEventListener ('play', () => {

        setSpeed ()

    })

    // on change
    browser.storage.onChanged.addListener (() => setSpeed ())

}