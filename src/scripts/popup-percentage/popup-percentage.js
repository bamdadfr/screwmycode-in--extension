import speedToPercentage from 'speed-to-percentage'
import { StateOnSpeedChange } from '../state-on-speed-change/state-on-speed-change'

export async function PopupPercentage () {

    const percentage = document.getElementById ('newPercent')

    await StateOnSpeedChange (
        (speed) => {

            percentage.innerHTML = `${speedToPercentage (speed)} %`

        },
        () => {

            percentage.innerHTML = 'off'

        },
    )

}