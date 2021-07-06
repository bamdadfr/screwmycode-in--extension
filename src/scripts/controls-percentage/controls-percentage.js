import speedToPercentage from 'speed-to-percentage'
import { StateSet } from '../state-set/state-set'
import { StateOnChange } from '../state-on-change/state-on-change'
import { State } from '../state/state'

/**
 * @function
 * @name ControlsPercentage
 * @description controls: create the `percentage` sub component
 * @returns {Promise<HTMLSpanElement>} - percentage HTML span element
 */
export async function ControlsPercentage () {

    const percentage = document.createElement ('span')

    percentage.id = 'screwmycode-ext__percent'

    percentage.style = 'cursor: pointer;'

    percentage.onclick = async () => {

        const state = await State ()

        if (state.isActive) {

            await StateSet ('speed', 1)

        }

    }

    await StateOnChange (
        ({ speed }) => {

            percentage.innerHTML = `${speedToPercentage (speed)} %`

        },
        () => {

            percentage.innerHTML = '%'

        },
    )

    return percentage

}