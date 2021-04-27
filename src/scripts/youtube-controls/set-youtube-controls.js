import { setYoutubeControlsContainer } from './set-youtube-controls-container'
import { setYoutubeControlsPercentage } from './set-youtube-controls-percentage'
import { setYoutubeControlsSemitones } from './set-youtube-controls-semitones'
import { setYoutubeControlsUp } from './set-youtube-controls-up'
import { setYoutubeControlsDown } from './set-youtube-controls-down'
import { setYoutubeControlsSpacer } from './set-youtube-controls-spacer'

export async function setYoutubeControls (parent) {

    const container = setYoutubeControlsContainer ()
    const percentage = await setYoutubeControlsPercentage ()
    const semitones = await setYoutubeControlsSemitones ()
    const up = setYoutubeControlsUp ()
    const down = setYoutubeControlsDown ()
    const spacer = setYoutubeControlsSpacer ()

    // rendering
    container.appendChild (down)

    container.appendChild (spacer)

    container.appendChild (up)

    container.appendChild (spacer.cloneNode ())

    container.appendChild (percentage)

    container.appendChild (spacer.cloneNode ())

    container.appendChild (semitones)

    parent.parentNode.appendChild (container)

}