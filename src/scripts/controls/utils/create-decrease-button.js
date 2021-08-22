import { getState } from '../../state/get-state'
import { setState } from '../../state/set-state'

/**
 * @returns {HTMLSpanElement} controls decrease button
 */
export function createDecreaseButton () {

    const decrease = document.createElement ('span')

    decrease.innerText = 'down'

    decrease.style = 'cursor: pointer;'

    decrease.addEventListener ('click', async () => {

        const { isActive, speed, step } = await getState ()

        if (isActive) await setState ('speed', speed - step)

    })

    return decrease

}