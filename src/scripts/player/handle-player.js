import { getState } from '../state/get-state'
import { getBrowser } from '../browser/get-browser'
import { RETRY, SPEED } from '../constants'
import { createControls } from '../controls/create-controls'

/**
 * @description handle data stream from youtube player
 */
export async function handlePlayer () {

    const player = document.getElementsByClassName ('video-stream html5-main-video')[0]
    const retry = () => setTimeout (() => handlePlayer (), RETRY)

    // retry if player not defined
    if (!player) {

        retry ()

        return
    
    }

    // retry if player not ready
    if (!player.readyState) {

        retry ()

        return
    
    }

    const setSpeed = (speed = 1) => {

        player.mozPreservesPitch = speed === 1

        player.playbackRate = speed

    }

    const { isActive, speed } = await getState ()
    const browser = getBrowser ()

    // on load
    await createControls ()

    setSpeed (isActive ? speed : SPEED.default)

    // on play
    player.addEventListener ('play', () => {

        setSpeed (isActive ? speed : SPEED.default)

    })

    // on change
    browser.storage.onChanged.addListener ((changes) => {

        const isActive = changes?.isActive?.newValue
        const speed = changes?.speed?.newValue

        if (speed) setSpeed (isActive ? speed : SPEED.default)

    })

}