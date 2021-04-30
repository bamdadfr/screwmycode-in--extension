import { StateOnChange } from '../state-on-change/state-on-change'
import { StateSet } from '../state-set/state-set'

export async function PopupSlider () {

    const slider = document.getElementsByClassName ('slider')[0]

    slider.oninput = async (event) => {

        const value = parseFloat (event.target.value)

        await StateSet ('speed', value)

    }

    await StateOnChange (
        ({ speed }) => {

            slider.value = speed

            slider.disabled = false

        },
        () => {

            slider.value = 1

            slider.disabled = true

        },
    )

}