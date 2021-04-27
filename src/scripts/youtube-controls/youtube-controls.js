import { YoutubeControlsContainer } from '../youtube-controls-container/youtube-controls-container'
import { YoutubeControlsPercentage } from '../youtube-controls-percentage/youtube-controls-percentage'
import { YoutubeControlsSemitones } from '../youtube-controls-semitones/youtube-controls-semitones'
import { YoutubeControlsIncrease } from '../youtube-controls-increase/youtube-controls-increase'
import { YoutubeControlsDecrease } from '../youtube-controls-decrease/youtube-controls-decrease'
import { YoutubeControlsSpacer } from '../youtube-controls-spacer/youtube-controls-spacer'

export async function YoutubeControls () {

    const parent = document.getElementsByClassName ('ytp-time-display notranslate')[0]
    const container = YoutubeControlsContainer ()
    const percentage = await YoutubeControlsPercentage ()
    const semitones = await YoutubeControlsSemitones ()
    const up = YoutubeControlsIncrease ()
    const down = YoutubeControlsDecrease ()
    const spacer = YoutubeControlsSpacer ()

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