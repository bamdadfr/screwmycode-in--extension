import speedToSemitones from 'speed-to-semitones'
import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'
import { StateOnChanged } from '../state-on-changed/state-on-changed'

export async function ControlsSemitones () {

    const tone = document.createElement ('span')
    const defaultValue = 'st'

    tone.id = 'screwmycode-ext__tone'

    tone.style = 'cursor: pointer;'

    tone.innerHTML = defaultValue

    // onClick
    tone.onclick = async () => {

        await StateSet ('speed', 1)

    }

    // init
    const state = await State ()

    if (state.isActive) {

        tone.innerHTML = `${speedToSemitones (state.speed)} st`

    }

    // on state change
    await StateOnChanged (async (changes) => {

        if (changes.isActive.newValue === true) {

            tone.innerHTML = `${speedToSemitones (changes.speed.newValue)} st`

            return

        }

        tone.innerHTML = defaultValue

    })

    return tone

}