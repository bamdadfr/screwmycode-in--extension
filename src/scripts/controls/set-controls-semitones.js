import { setState } from '../state/set-state'

export function setControlsSemitones () {

    const tone = document.createElement ('span')

    tone.id = 'screwmycode-ext__tone'

    tone.style = 'cursor: pointer;'

    tone.innerHTML = 'st'

    tone.onclick = async () => {

        await setState ('speed', 1)

    }

    return tone

}