import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'

/**
 * @function
 * @name ControlsDecrease
 * @description controls: create the `decrease` sub component
 * @returns {HTMLSpanElement} - decrease HTML span element
 */
export function ControlsDecrease () {

    const down = document.createElement ('span')

    down.innerHTML = 'down'

    down.style = 'cursor: pointer;'

    down.onclick = async () => {

        const state = await State ()

        if (state.isActive) {

            await StateSet ('speed', state.speed - state.step)

        }

    }

    return down

}