import { getBrowser, getState } from './functions/browser'
import Keyboard from './classes/keyboard'

const video = document.getElementsByClassName ('video-stream html5-main-video')[0]
// eslint-disable-next-line no-unused-vars
const keyboard = new Keyboard (document)

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