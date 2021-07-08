import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'

/**
 * @function
 * @name PopupCheckbox
 * @description popup: handle the `checkbox` element
 * @returns {Promise<void>}
 */
export async function PopupCheckbox () {

    const checkbox = document.getElementsByClassName ('smc-checkbox')[0]

    const value = {
        'on': 'yes',
        'off': 'no',
    }

    /**
     * @function
     * @name disable
     * @description HTML manipulation when disabling the 'checkbox'
     * @returns {void}
     */
    function disable () {

        checkbox.innerHTML = value.off

        checkbox.classList.remove ('smc-checkbox-active')

    }

    /**
     * @function
     * @name enable
     * @description HTML manipulation when enabling the 'checkbox'
     * @returns {void}
     */
    function enable () {

        checkbox.innerHTML = value.on

        checkbox.classList.add ('smc-checkbox-active')

    }

    checkbox.onclick = async () => {

        if (checkbox.innerHTML === value.on) {

            disable ()

            await StateSet ('isActive', false)

            return

        }

        enable ()

        await StateSet ('isActive', true)

    }

    // onMount
    const state = await State ()

    if (state.isActive) {

        enable ()

    } else {

        disable ()

    }

}