/* eslint-disable no-undef */
const init = async () => {

    const video = document.querySelector ('video')
    const storage = await browser.storage.local.get ()

    // init
    if (storage.isActive) {

        video.mozPreservesPitch = false

        video.playbackRate = storage.speed
    
    }

    browser.storage.onChanged.addListener ((changes) => {

        // console.log (changes)

        // activate
        if (changes.isActive.newValue !== changes.isActive.oldValue) {

            if (changes.isActive.newValue === false) {

                video.mozPreservesPitch = true
                
                video.playbackRate = 1
                
            } else {

                video.mozPreservesPitch = false
                
                video.playbackRate = changes.speed.newValue
            
            }
            
        }
        
        // update speed
        if (changes.speed.newValue !== changes.speed.oldValue && changes.isActive.newValue === true) {

            video.mozPreservesPitch = false

            video.playbackRate = changes.speed.newValue
        
        }
        
    })

}

setTimeout (() => {

    init ()

}, 1000)

