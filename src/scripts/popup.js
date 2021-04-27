import { setState } from './state/set-state'
import { getState } from './state/get-state'

const checkbox = document.getElementById ('checkbox')

checkbox.oninput = async (event) => {

    await setState ('isActive', event.target.checked)

}

async function init () {

    const state = await getState ()

    if (state.isActive) {

        checkbox.checked = true

    }

}

init ()