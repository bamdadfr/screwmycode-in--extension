import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'
import { ConstantSpeedStep } from '../constant-speed-step/constant-speed-step'

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

        if (state.isActive) {

            await StateSet ('speed', state.speed - ConstantSpeedStep)

        }

    }

    return down

}