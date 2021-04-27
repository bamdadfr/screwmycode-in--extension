import { State } from '../state/state'

export function YoutubeControlsSetUp () {

    const up = document.createElement ('span')

    up.innerHTML = 'up'

    up.style = 'cursor: pointer;'

    up.onclick = async () => {

        const state = await State.get ()

        await State.set ('speed', state.speed + 0.1)

    }

    return up

}