import speedToSemitones from 'speed-to-semitones'
import { StateOnSpeedChange } from '../state-on-speed-change/state-on-speed-change'

export async function PopupSemitones () {

    const semitones = document.getElementById ('newTone')

    await StateOnSpeedChange (
        (speed) => {

            semitones.innerHTML = `${speedToSemitones (speed)} st`

        },
        () => {

            semitones.innerHTML = 'off'

        },
    )

}