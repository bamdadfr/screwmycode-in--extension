import { State } from '../state/state'

export async function PopupCheckbox () {

    const checkbox = document.getElementById ('checkbox')

    checkbox.oninput = async (event) => {

        await State.set ('isActive', event.target.checked)

    }

    const state = await State.get ()

    if (state.isActive) {

        checkbox.checked = true

    }

}