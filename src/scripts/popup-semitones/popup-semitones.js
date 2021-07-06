import speedToSemitones from 'speed-to-semitones'
import { StateOnChange } from '../state-on-change/state-on-change'

/**
 * @function
 * @name PopupSemitones
 * @description popup: handle the `semitones` element
 * @returns {Promise<void>}
 */
export async function PopupSemitones () {

    const semitones = document.getElementsByClassName ('smc-semitones')[0]

    await StateOnChange (
        ({ speed }) => {

            semitones.innerHTML = `${speedToSemitones (speed, 1)} st`

        },
        () => {

            semitones.innerHTML = 'off'

        },
    )

}