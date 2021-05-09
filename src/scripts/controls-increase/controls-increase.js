import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'
import { ConstantSpeedStep } from '../constant-speed-step/constant-speed-step'

/**
 * @function
 * @name ControlsIncrease
 * @description controls: create the `increase` sub component
 * @return {HTMLSpanElement}
 */
export function ControlsIncrease () {

    const up = document.createElement ('span')

    up.innerHTML = 'up'

    up.style = 'cursor: pointer;'

    up.onclick = async () => {

        const state = await State ()

        if (state.isActive) {

            await StateSet ('speed', state.speed + ConstantSpeedStep)

        }

    }

    return up

}