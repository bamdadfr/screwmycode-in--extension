import { Browser } from '../browser/browser'
import { State } from '../state/state'

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