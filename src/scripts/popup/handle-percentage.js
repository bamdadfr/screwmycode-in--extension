import speedToPercentage from 'speed-to-percentage'
import { onNewState } from '../state/on-new-state'

/**
 * @description handle the `percentage` element
 */
export async function handlePercentage () {

    const percentage = document.getElementsByClassName ('smc-percentage')[0]

    await onNewState (
        ({ speed }) => {

            percentage.innerText = `${speedToPercentage (speed)} %`

        },
        () => {

            percentage.innerText = 'off'

        },
    )

}