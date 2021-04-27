import { YoutubeControlsSetContainer } from './youtube-controls-set-container'
import { YoutubeControlsSetPercentage } from './youtube-controls-set-percentage'
import { YoutubeControlsSetSemitones } from './youtube-controls-set-semitones'
import { YoutubeControlsSetUp } from './youtube-controls-set-up'
import { YoutubeControlsSetDown } from './youtube-controls-set-down'
import { YoutubeControlsSetSpacer } from './youtube-controls-set-spacer'

export async function YoutubeControlsSet (parent) {

    const container = YoutubeControlsSetContainer ()
    const percentage = await YoutubeControlsSetPercentage ()
    const semitones = await YoutubeControlsSetSemitones ()
    const up = YoutubeControlsSetUp ()
    const down = YoutubeControlsSetDown ()
    const spacer = YoutubeControlsSetSpacer ()

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