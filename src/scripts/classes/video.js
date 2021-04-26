export const updateVideo = (dom, speed) => {
    
    dom.mozPreservesPitch = false

    dom.playbackRate = speed

}

export const disableVideo = (dom) => {

    dom.mozPreservesPitch = true

    dom.playbackRate = 1

}
