import { Browser } from '../browser/browser'
import { State } from '../state/state'

/**
 * @function
 * @name StateOnChange
 * @description event listener wrapper around state for `onChange` and `onOff` callbacks
 * @param {Function} onChangeCallback - triggers on browser state change
 * @param {Function} onOffCallback - triggers on isActive === false
 * @returns {Promise<void>}
 */
export async function StateOnChange (
    onChangeCallback,
    onOffCallback,
) {

    const browser = await Browser ()
    const state = await State ()

    // onMount
    if (state.isActive) {

        onChangeCallback ({
            'speed': state.speed,
        })

    } else {

        onOffCallback ()

    }

    // onChange
    browser.storage.onChanged.addListener ((changes) => {

        if (changes.isActive.newValue === true) {

            onChangeCallback ({
                'speed': changes.speed.newValue,
            })

            return

        }

        onOffCallback ()

    })

}