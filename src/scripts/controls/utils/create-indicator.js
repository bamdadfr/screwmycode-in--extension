import { setState } from '../../state/set-state'
import { SPEED } from '../../constants'
import { getBrowser } from '../../browser/get-browser'

/**
 * @param {object} options options
 * @param {string} options.id HTML id
 * @param {function(): void} options.getValue getter for new value
 * @description indicator blueprint for semitones and percentage
 * @returns {HTMLSpanElement} indicator
 */
export async function createIndicator ({
    id,
    getValue,
}) {

    // declaration
    const indicator = document.createElement ('span')

    indicator.id = id

    indicator.style.cursor = 'pointer'

    // setter
    const setValue = (value) => {

        indicator.innerText = value.toString ()
    
    }

    // on load
    setValue (await getValue ())

    // on click, reset value
    indicator.addEventListener ('click', async () => {

        await setState ('speed', SPEED.default)
    
    })

    // on change
    const browser = await getBrowser ()

    browser.storage.onChanged.addListener (async () => setValue (await getValue ()))

    return indicator

}