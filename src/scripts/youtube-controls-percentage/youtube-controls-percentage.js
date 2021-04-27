import speedToPercentage from 'speed-to-percentage'
import { Browser } from '../browser/browser'
import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'

export async function YoutubeControlsPercentage () {

    const percentage = document.createElement ('span')
    const defaultValue = '%'

    percentage.id = 'screwmycode-ext__percent'

    percentage.style = 'cursor: pointer;'

    percentage.innerHTML = defaultValue

    // onClick
    percentage.onclick = async () => {

        await StateSet ('speed', 1)

    }

    // init
    await (async () => {

        const state = await State ()

        if (state.isActive) {

            percentage.innerHTML = `${speedToPercentage (state.speed)} %`

        }

    }) ()

    // watch state
    const browser = await Browser ()

    browser.storage.onChanged.addListener ((changes) => {

        if (changes.isActive.newValue === true) {

            percentage.innerHTML = `${speedToPercentage (changes.speed.newValue)} %`

            return

        }

        percentage.innerHTML = defaultValue

    })

    return percentage

}