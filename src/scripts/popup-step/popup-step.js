import { ConstantSpeedStep } from '../constant-speed-step/constant-speed-step'
import { StateSet } from '../state-set/state-set'
import { State } from '../state/state'

/**
 * @function
 * @name PopupStep
 * @description popup: handle the 'step' element
 * @returns {Promise<void>}
 */
export async function PopupStep () {

    const step = document.getElementsByClassName ('smc-step')[0]
    const state = await State ()

    step.value = state.step

    step.step = ConstantSpeedStep.init

    step.min = ConstantSpeedStep.min

    step.max = ConstantSpeedStep.max

    step.onchange = async (e) => {

        const inputValue = e.target.value
        let finalValue = inputValue

        switch (inputValue) {

            case inputValue < step.min:
                finalValue = step.min

                break

            case inputValue > step.max:
                finalValue = step.max

                break

            default:

        }

        step.value = finalValue

        await StateSet ('step', finalValue)

    }

}