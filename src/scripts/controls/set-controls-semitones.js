import speedToSemitones from 'speed-to-semitones'
import { Browser } from '../browser/browser'
import { State } from '../state/state'

export async function setControlsSemitones () {

    const tone = document.createElement ('span')

    tone.id = 'screwmycode-ext__tone'

    tone.style = 'cursor: pointer;'

    tone.innerHTML = 'st'

    // onClick
    tone.onclick = async () => {

        await State.set ('speed', 1)

    }

    // watch state
    const browser = await Browser.get ()

    browser.storage.onChanged.addListener ((changes) => {

        tone.innerHTML = `${speedToSemitones (changes.speed.newValue)} st`

    })

    return tone

}