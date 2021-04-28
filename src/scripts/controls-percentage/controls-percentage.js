import speedToPercentage from 'speed-to-percentage'
import { StateSet } from '../state-set/state-set'
import { StateOnSpeedChange } from '../state-on-speed-change/state-on-speed-change'

export async function ControlsPercentage () {

    const percentage = document.createElement ('span')

    percentage.id = 'screwmycode-ext__percent'

    percentage.style = 'cursor: pointer;'

    percentage.onclick = async () => {

        await StateSet ('speed', 1)

    }

    await StateOnSpeedChange (
        (speed) => {

            percentage.innerHTML = `${speedToPercentage (speed)} %`

        },
        () => {

            percentage.innerHTML = '%'

        },
    )

    return percentage

}