import speedToPercentage from 'speed-to-percentage'
import { setState } from '../../state/set-state'
import { onNewState } from '../../state/on-new-state'
import { getState } from '../../state/get-state'

/**
 * @returns {Promise<HTMLSpanElement>} controls percentage value
 */
export async function createPercentage () {

    const percentage = document.createElement ('span')

    percentage.id = 'screwmycode-ext__percent'

    percentage.style = 'cursor: pointer;'

    percentage.addEventListener ('click', async () => {

        const { isActive } = await getState ()

        if (isActive) await setState ('speed', 1)

    })

    await onNewState (
        ({ speed }) => {

            percentage.innerHTML = `${speedToPercentage (speed)} %`

        },
        () => {

            percentage.innerHTML = '%'

        },
    )

    return percentage

}