import { State } from '../state/state'

export function setYoutubeControlsDown () {

    const down = document.createElement ('span')

    down.innerHTML = 'down'

    down.style = 'cursor: pointer;'

    down.onclick = async () => {

        const state = await State.get ()

        await State.set ('speed', state.speed - 0.1)

    }

    return down

}