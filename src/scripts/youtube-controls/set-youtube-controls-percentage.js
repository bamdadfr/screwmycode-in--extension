import speedToPercentage from 'speed-to-percentage'
import { Browser } from '../browser/browser'
import { State } from '../state/state'

export async function setYoutubeControlsPercentage () {

    const percentage = document.createElement ('span')
    const defaultValue = '%'

    percentage.id = 'screwmycode-ext__percent'

    percentage.style = 'cursor: pointer;'

    percentage.innerHTML = defaultValue

    // onClick
    percentage.onclick = async () => {

        await State.set ('speed', 1)

    }

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