import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'

export function YoutubeControlsIncrease () {

    const up = document.createElement ('span')

    up.innerHTML = 'up'

    up.style = 'cursor: pointer;'

    up.onclick = async () => {

        const state = await State ()

        await StateSet ('speed', state.speed + 0.1)

    }

    return up

}