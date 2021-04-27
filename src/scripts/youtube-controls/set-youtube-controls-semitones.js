import speedToSemitones from 'speed-to-semitones'
import { Browser } from '../browser/browser'
import { State } from '../state/state'

export async function setYoutubeControlsSemitones () {

    const tone = document.createElement ('span')
    const defaultValue = 'st'

    tone.id = 'screwmycode-ext__tone'

    tone.style = 'cursor: pointer;'

    tone.innerHTML = defaultValue

    // onClick
    tone.onclick = async () => {

        await State.set ('speed', 1)

    }

    // watch state
    const browser = await Browser.get ()

    browser.storage.onChanged.addListener ((changes) => {

        if (changes.isActive.newValue === true) {

            tone.innerHTML = `${speedToSemitones (changes.speed.newValue)} st`

            return
        
        }

        tone.innerHTML = defaultValue

    })

    return tone

}