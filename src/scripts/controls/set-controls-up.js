import { getState } from '../state/get-state'
import { setState } from '../state/set-state'

export function setControlsUp () {

    const up = document.createElement ('span')

    up.innerHTML = 'up'

    up.style = 'cursor: pointer;'

    up.onclick = async () => {

        const state = await getState ()

        await setState ('speed', state.speed + 0.1)

    }

    return up

}