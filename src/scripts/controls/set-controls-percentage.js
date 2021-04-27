import speedToPercentage from 'speed-to-percentage'
import { Browser } from '../browser/browser'
import { State } from '../state/state'

export async function setControlsPercentage () {

    const percentage = document.createElement ('span')

    percentage.id = 'screwmycode-ext__percent'

    percentage.style = 'cursor: pointer;'

    percentage.innerHTML = '%'

    // onClick
    percentage.onclick = async () => {

        await State.set ('speed', 1)

    }

    // watch state
    const browser = await Browser.get ()

    browser.storage.onChanged.addListener ((changes) => {

        percentage.innerHTML = `${speedToPercentage (changes.speed.newValue)} %`

    })

    return percentage

}