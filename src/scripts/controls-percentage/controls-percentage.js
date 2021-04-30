import speedToPercentage from 'speed-to-percentage'
import { StateSet } from '../state-set/state-set'
import { StateOnChange } from '../state-on-change/state-on-change'

export async function ControlsPercentage () {

    const percentage = document.createElement ('span')

    percentage.id = 'screwmycode-ext__percent'

    percentage.style = 'cursor: pointer;'

    percentage.onclick = async () => {

        await StateSet ('speed', 1)

    }

    await StateOnChange (
        ({ speed }) => {

            percentage.innerHTML = `${speedToPercentage (speed)} %`

        },
        () => {

            percentage.innerHTML = '%'

        },
    )

    return percentage

}