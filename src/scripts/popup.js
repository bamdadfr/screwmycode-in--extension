import { State } from './state/state'

const checkbox = document.getElementById ('checkbox')

checkbox.oninput = async (event) => {

    await State.set ('isActive', event.target.checked)

}

// init
(async () => {

    const state = await State.get ()

    if (state.isActive) {

        checkbox.checked = true

    }

}) ()