import speedToPercentage from 'speed-to-percentage'
import { State } from '../state/state'
import { StateOnChanged } from '../state-on-changed/state-on-changed'

export async function PopupPercentage () {

    const percentage = document.getElementById ('newPercent')
    const state = await State ()

    // init
    if (state.isActive) {

        percentage.innerHTML = `${speedToPercentage (state.speed)} %`

    }

    // on stage change
    await StateOnChanged ((changes) => {

        if (changes.isActive.newValue === true) {

            percentage.innerHTML = `${speedToPercentage (changes.speed.newValue)} %`

            return

        }

        percentage.innerHTML = 'off'

    })

}