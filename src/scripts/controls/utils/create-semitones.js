import speedToSemitones from 'speed-to-semitones'
import { setState } from '../../state/set-state'
import { getState } from '../../state/get-state'
import { SPEED } from '../../constants'
import { getBrowser } from '../../browser/get-browser'

/**
 * @returns {Promise<HTMLSpanElement>} controls semitones value
 */
export async function createSemitones () {

    const tone = document.createElement ('span')

    tone.id = 'screwmycode-ext__tone'

    tone.style = 'cursor: pointer;'

    const setValue = async () => {

        const { isActive, speed } = await getState ()

        tone.innerHTML = isActive
            ? `${speedToSemitones (speed, 1)} st`
            : 'st'
    
    }

    // on load
    await setValue ()

    // on click, reset value
    tone.addEventListener (
        'click',
        async () => await setState ('speed', SPEED.default),
    )

    const browser = getBrowser ()

    // on change
    browser.storage.onChanged.addListener (() => setValue ())

    return tone

}