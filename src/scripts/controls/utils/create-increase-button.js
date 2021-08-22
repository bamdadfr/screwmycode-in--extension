import { getState } from '../../state/get-state'
import { setState } from '../../state/set-state'

/**
 * @returns {HTMLSpanElement} controls increase button
 */
export function createIncreaseButton () {

    const increase = document.createElement ('span')

    increase.innerHTML = 'up'

    increase.style = 'cursor: pointer;'

    increase.addEventListener ('click', async () => {

        const { isActive, speed, step } = await getState ()

        if (isActive) await setState ('speed', speed + step)

    })

    return increase

}