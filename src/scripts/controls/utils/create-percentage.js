import speedToPercentage from 'speed-to-percentage'
import { setState } from '../../state/set-state'
import { getState } from '../../state/get-state'
import { SPEED } from '../../constants'
import { getBrowser } from '../../browser/get-browser'

/**
 * @returns {Promise<HTMLSpanElement>} controls percentage value
 */
export async function createPercentage () {

    const percentage = document.createElement ('span')

    percentage.id = 'screwmycode-ext__percent'

    percentage.style = 'cursor: pointer;'

    const setValue = async () => {

        const { isActive, speed } = await getState ()

        percentage.innerHTML = isActive
            ? `${speedToPercentage (speed, 1)} %`
            : '%'

    }

    // on load
    await setValue ()

    // on click, reset value
    percentage.addEventListener (
        'click',
        async () => await setState ('speed', SPEED.default),
    )

    const browser = getBrowser ()

    // on change
    browser.storage.onChanged.addListener (() => setValue ())

    return percentage

}