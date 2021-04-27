import speedToPercentage from 'speed-to-percentage'
import { Browser } from '../browser/browser'
import { State } from '../state/state'

export async function YoutubeControlsSetPercentage () {

    const percentage = document.createElement ('span')
    const defaultValue = '%'

    percentage.id = 'screwmycode-ext__percent'

    percentage.style = 'cursor: pointer;'

    percentage.innerHTML = defaultValue

    // onClick
    percentage.onclick = async () => {

        await State.set ('speed', 1)

    }

    // init
    await (async () => {

        const state = await State.get ()

        if (state.isActive) {

            percentage.innerHTML = `${speedToPercentage (state.speed)} %`

        }

    }) ()

    // watch state
    const browser = await Browser.get ()

    browser.storage.onChanged.addListener ((changes) => {

        if (changes.isActive.newValue === true) {

            percentage.innerHTML = `${speedToPercentage (changes.speed.newValue)} %`

            return

        }

        percentage.innerHTML = defaultValue

    })

    return percentage

}