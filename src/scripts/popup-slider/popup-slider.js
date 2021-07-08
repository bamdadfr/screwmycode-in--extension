import { StateOnChange } from '../state-on-change/state-on-change'
import { StateSet } from '../state-set/state-set'

/**
 * @function
 * @name PopupSlider
 * @description popup: handle the `slider` element
 * @returns {Promise<void>}
 */
export async function PopupSlider () {

    const slider = document.getElementsByClassName ('smc-slider')[0]

    slider.oninput = async (event) => {

        const value = parseFloat (event.target.value)

        await StateSet ('speed', value)

    }

    await StateOnChange (
        ({ speed }) => {

            slider.value = speed

            slider.classList.add ('smc-hoverable')

            slider.disabled = false

        },
        () => {

            slider.value = 1

            slider.classList.remove ('smc-hoverable')

            slider.disabled = true

        },
    )

}