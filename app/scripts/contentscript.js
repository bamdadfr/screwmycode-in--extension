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

const init = async () => {

    const storage = await getState ()

    // init
    if (storage.isActive) {

        updateVideo (storage.speed)
    
    }

    getBrowser ().storage.onChanged.addListener ((changes) => {

        // console.log (changes)

        // activate
        if (changes.isActive.newValue !== changes.isActive.oldValue) {

            if (changes.isActive.newValue === false) {

                disableVideo ()
            
            } else {

                updateVideo (changes.speed.newValue)
            
            }
            
        }
        
        // update speed
        if (changes.speed.newValue !== changes.speed.oldValue && changes.isActive.newValue === true) {

            updateVideo (changes.speed.newValue)
        
        }
        
    })

}

const test = async () => {
    
    const storage = await getState ()
    
    if (storage.isReady && typeof video !== 'undefined') {
        
        video.oncanplay = () => {
            
            // eslint-disable-next-line no-console
            console.warn ('init')
            
            init ()
            
        }
        
    }
    
}

test ()

export default test

export {
    video,
}