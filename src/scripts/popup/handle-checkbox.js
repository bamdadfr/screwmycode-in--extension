import { getState } from '../state/get-state'
import { setState } from '../state/set-state'

/**
 * @description handle the `checkbox` element
 */
export async function handleCheckbox () {

    const checkbox = document.getElementsByClassName ('smc-checkbox')[0]

    // enum
    const value = {
        'on': 'yes',
        'off': 'no',
    }

    // dom modifiers
    const disable = () => {

        checkbox.innerHTML = value.off

        checkbox.classList.remove ('smc-checkbox-active')

    }

    const enable = () => {

        checkbox.innerHTML = value.on

        checkbox.classList.add ('smc-checkbox-active')

    }

    // mount
    const { isActive } = await getState ()

    if (isActive) {

        enable ()

    } else {

        disable ()

    }

    // change
    checkbox.addEventListener ('click', async () => {

        if (checkbox.innerHTML === value.on) {

            disable ()

            await setState ('isActive', false)

            return

        }

        enable ()

        await setState ('isActive', true)

    })

}