import speedToPercentage from 'speed-to-percentage'
import { StateOnChange } from '../state-on-change/state-on-change'

export async function PopupPercentage () {

    const percentage = document.getElementById ('newPercent')

    await StateOnChange (
        ({ speed }) => {

            percentage.innerHTML = `${speedToPercentage (speed)} %`

        },
        () => {

            percentage.innerHTML = 'off'

        },
    )

}