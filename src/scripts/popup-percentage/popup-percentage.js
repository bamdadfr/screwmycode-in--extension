import speedToPercentage from 'speed-to-percentage'
import { StateOnChange } from '../state-on-change/state-on-change'

/**
 * @function
 * @name PopupPercentage
 * @description popup: handle the `percentage` element
 * @returns {Promise<void>}
 */
export async function PopupPercentage () {

    const percentage = document.getElementsByClassName ('smc-percentage')[0]

    await StateOnChange (
        ({ speed }) => {

            percentage.innerHTML = `${speedToPercentage (speed)} %`

        },
        () => {

            percentage.innerHTML = 'off'

        },
    )

}