import speedToSemitones from 'speed-to-semitones'
import { StateOnChange } from '../state-on-change/state-on-change'

/**
 * @function
 * @name PopupSemitones
 * @description popup: handle the `semitones` element
 * @return {Promise<void>}
 */
export async function PopupSemitones () {

    const semitones = document.getElementById ('newTone')

    await StateOnChange (
        ({ speed }) => {

            semitones.innerHTML = `${speedToSemitones (speed)} st`

        },
        () => {

            semitones.innerHTML = 'off'

        },
    )

}