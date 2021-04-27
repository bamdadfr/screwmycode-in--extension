import speedToSemitones from 'speed-to-semitones'
import { State } from '../state/state'
import { StateOnChanged } from '../state-on-changed/state-on-changed'

export async function PopupSemitones () {

    const semitones = document.getElementById ('newTone')
    const state = await State ()

    // init
    if (state.isActive) {

        semitones.innerHTML = `${speedToSemitones (state.speed)} st`

    }

    // on stage change
    await StateOnChanged ((changes) => {

        if (changes.isActive.newValue === true) {

            semitones.innerHTML = `${speedToSemitones (changes.speed.newValue)} st`

            return

        }

        semitones.innerHTML = 'off'

    })

}