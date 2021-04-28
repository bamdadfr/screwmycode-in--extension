import { Browser } from '../browser/browser'
import { State } from '../state/state'

export async function StateOnSpeedChange (
    onChangeCallback,
    onOffCallback,
) {

    const browser = await Browser ()
    const state = await State ()

    // init
    if (state.isActive) {

        onChangeCallback (state.speed)

    } else {

        onOffCallback ()

    }

    // onChange
    browser.storage.onChanged.addListener ((changes) => {

        if (changes.isActive.newValue === true) {

            onChangeCallback (changes.speed.newValue)

            return

        }

        onOffCallback ()

    })

}