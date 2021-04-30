import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'

/**
 * @function
 * @name ControlsDecrease
 * @description controls: create the `decrease` sub component
 * @return {HTMLSpanElement}
 */
export function ControlsDecrease () {

    const down = document.createElement ('span')

    down.innerHTML = 'down'

    down.style = 'cursor: pointer;'

    down.onclick = async () => {

        const state = await State ()

        await StateSet ('speed', state.speed - 0.1)

    }

    return down

}