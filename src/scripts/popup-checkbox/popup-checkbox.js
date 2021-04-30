import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'

/**
 * @function
 * @name PopupCheckbox
 * @description popup: handle the `checkbox` element
 * @return {Promise<void>}
 */
export async function PopupCheckbox () {

    const checkbox = document.getElementById ('checkbox')

    checkbox.oninput = async (event) => {

        await StateSet ('isActive', event.target.checked)

    }

    // onMount
    const state = await State ()

    if (state.isActive) {

        checkbox.checked = true

    }

}