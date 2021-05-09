import speedToSemitones from 'speed-to-semitones'
import { StateSet } from '../state-set/state-set'
import { StateOnChange } from '../state-on-change/state-on-change'
import { State } from '../state/state'

/**
 * @function
 * @name ControlsSemitones
 * @description controls: create the `semitones` sub component
 * @return {Promise<HTMLSpanElement>}
 */
export async function ControlsSemitones () {

    const tone = document.createElement ('span')

    tone.id = 'screwmycode-ext__tone'

    tone.style = 'cursor: pointer;'

    tone.onclick = async () => {

        const state = await State ()

        if (state.isActive) {

            await StateSet ('speed', 1)

        }

    }

    await StateOnChange (
        ({ speed }) => {

            tone.innerHTML = `${speedToSemitones (speed, 1)} st`

        },
        () => {

            tone.innerHTML = 'st'

        },
    )

    return tone

}