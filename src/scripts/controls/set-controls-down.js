import { getState } from '../state/get-state'
import { setState } from '../state/set-state'

export function setControlsDown () {

    const down = document.createElement ('span')

    down.innerHTML = 'down'

    down.style = 'cursor: pointer;'

    down.onclick = async () => {

        const state = await getState ()

        await setState ('speed', state.speed - 0.1)

    }

    return down

}