import speedToSemitones from 'speed-to-semitones'
import { onNewState } from '../state/on-new-state'

/**
 * @description handle the `semitones` element
 */
export async function handleSemitones () {

    const semitones = document.getElementsByClassName ('smc-semitones')[0]

    await onNewState (
        ({ speed }) => {

            semitones.innerHTML = `${speedToSemitones (speed, 1)} st`

        },
        () => {

            semitones.innerHTML = 'off'

        },
    )

}