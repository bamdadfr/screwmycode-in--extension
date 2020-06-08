import { getBrowser, getState, setState } from './functions/browser'
import Keyboard from './classes/keyboard'

const video = document.getElementsByClassName ('video-stream html5-main-video')[0]
const keyboard = new Keyboard (document)
// DEV
const volumeSlider = document.getElementsByClassName ('ytp-time-display notranslate')[0]

const inject = () => {

    const spacer = document.createElement ('span')

    spacer.style = 'margin-right: 5px'

    const div = document.createElement ('div')

    div.classList.add ('ytp-time-display')

    div.classList.add ('notranslate')

    const screw = document.createElement ('span')

    screw.innerHTML = 'screw'
    
    const down = document.createElement ('span')
    
    down.innerHTML = 'down'
    
    down.onclick = async () => {

        const storage = await getState ()

        setState ('speed', storage.speed - keyboard.inc)
        
    }
    
    const up = document.createElement ('span')
    
    up.innerHTML = 'up'
    
    up.onclick = async () => {

        const storage = await getState ()

        setState ('speed', storage.speed + keyboard.inc)
        
    }
    
    // div.appendChild (screw)

    div.appendChild (spacer)

    div.appendChild (down)

    div.appendChild (spacer.cloneNode ())

    div.appendChild (up)

    // add span to document
    // volumeSlider.parentNode.insertBefore (span, volumeSlider)
    volumeSlider.parentNode.appendChild (div)

}

inject ()

// END DEV

const disableVideo = () => {

    video.mozPreservesPitch = true
                
    video.playbackRate = 1

}

const updateVideo = async (speed) => {

    video.mozPreservesPitch = false

    video.playbackRate = speed

}

const setEvent = () => {

    getBrowser ().storage.onChanged.addListener ((changes) => {

        // runtime
        switch (changes.isActive.newValue) {

            case true:
                updateVideo (changes.speed.newValue)

                break

            default:
                disableVideo ()
        
        }

        // first run
        if (changes.speed.newValue !== changes.speed.oldValue && changes.isActive.newValue === true) {

            updateVideo (changes.speed.newValue)
        
        }
        
    })

}

const init = async () => {

    const storage = await getState ()

    // init
    if (storage.isActive) updateVideo (storage.speed)

    setEvent ()

}

video.oncanplay = () => {
            
    // eslint-disable-next-line no-console
    console.warn ('init')
            
    init ()
            
}