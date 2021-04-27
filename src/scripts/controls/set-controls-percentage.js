import speedToPercentage from 'speed-to-percentage'
import { setState } from '../state/set-state'
import { getBrowser } from '../browser/get-browser'

export async function setControlsPercentage () {

    const percentage = document.createElement ('span')

    percentage.id = 'screwmycode-ext__percent'

    percentage.style = 'cursor: pointer;'

    percentage.innerHTML = '%'

    percentage.onclick = async () => {

        await setState ('speed', 1)

    }

    const browser = await getBrowser ()

    browser.storage.onChanged.addListener ((changes) => {

        percentage.innerHTML = `${speedToPercentage (changes.speed.newValue)} %`

    })

    return percentage

}