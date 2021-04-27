import speedToSemitones from 'speed-to-semitones'
import { Browser } from '../browser/browser'
import { State } from '../state/state'

export async function YoutubeControlsSetSemitones () {

    const tone = document.createElement ('span')
    const defaultValue = 'st'

    tone.id = 'screwmycode-ext__tone'

    tone.style = 'cursor: pointer;'

    tone.innerHTML = defaultValue

    // onClick
    tone.onclick = async () => {

        await State.set ('speed', 1)

    }

    // init
    await (async () => {

        const state = await State.get ()

        if (state.isActive) {

            tone.innerHTML = `${speedToSemitones (state.speed)} st`
        
        }

    }) ()

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