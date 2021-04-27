import speedToPercentage from 'speed-to-percentage'
import { State } from '../state/state'
import { StateSet } from '../state-set/state-set'
import { StateOnChanged } from '../state-on-changed/state-on-changed'

export async function ControlsPercentage () {

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
    const state = await State ()

    if (state.isActive) {

        percentage.innerHTML = `${speedToPercentage (state.speed)} %`

    }

    // on state change
    await StateOnChanged ((changes) => {

        if (changes.isActive.newValue === true) {

            percentage.innerHTML = `${speedToPercentage (changes.speed.newValue)} %`

            return

        }

        percentage.innerHTML = defaultValue

    })

    return percentage

}