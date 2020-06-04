import { getBrowser, getState } from './functions/browser'

const video = document.getElementsByClassName ('video-stream html5-main-video')[0]

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
        if (changes.isActive.newValue === true) {

            updateVideo (changes.speed.newValue)
        
        } else {

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
    if (storage.isActive) {

        updateVideo (storage.speed)
    
    }

    setEvent ()

}

video.oncanplay = () => {
            
    // eslint-disable-next-line no-console
    console.warn ('init')
            
    init ()
            
}