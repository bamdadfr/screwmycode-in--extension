import speedToSemitones from 'speed-to-semitones'
import { StateSet } from '../state-set/state-set'
import { StateOnChange } from '../state-on-change/state-on-change'

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

        await StateSet ('speed', 1)

    }

    await StateOnChange (
        ({ speed }) => {

            tone.innerHTML = `${speedToSemitones (speed)} st`

        },
        () => {

            tone.innerHTML = 'st'

        },
    )

    return tone

}