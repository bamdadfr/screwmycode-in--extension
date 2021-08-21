import speedToSemitones from 'speed-to-semitones'
import { setState } from '../../state/set-state'
import { onNewState } from '../../state/on-new-state'
import { getState } from '../../state/get-state'

/**
 * @returns {Promise<HTMLSpanElement>} controls semitones value
 */
export async function createSemitones () {

    const tone = document.createElement ('span')

    tone.id = 'screwmycode-ext__tone'

    tone.style = 'cursor: pointer;'

    tone.addEventListener ('click', async () => {

        const { isActive } = await getState ()

        if (isActive) await setState ('speed', 1)

    })

    await onNewState (
        ({ speed }) => {

            tone.innerHTML = `${speedToSemitones (speed, 1)} st`

        },
        () => {

            tone.innerHTML = 'st'

        },
    )

    return tone

}