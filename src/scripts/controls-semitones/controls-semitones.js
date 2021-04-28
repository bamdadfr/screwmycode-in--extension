import speedToSemitones from 'speed-to-semitones'
import { StateSet } from '../state-set/state-set'
import { StateOnSpeedChange } from '../state-on-speed-change/state-on-speed-change'

export async function ControlsSemitones () {

    const tone = document.createElement ('span')

    tone.id = 'screwmycode-ext__tone'

    tone.style = 'cursor: pointer;'

    tone.onclick = async () => {

        await StateSet ('speed', 1)

    }

    await StateOnSpeedChange (
        (speed) => {

            tone.innerHTML = `${speedToSemitones (speed)} st`

        },
        () => {

            tone.innerHTML = 'st'

        },
    )

    return tone

}