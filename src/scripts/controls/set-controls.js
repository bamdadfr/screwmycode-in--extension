import { setControlsContainer } from './set-controls-container'
import { setControlsPercentage } from './set-controls-percentage'
import { setControlsSemitones } from './set-controls-semitones'
import { setControlsUp } from './set-controls-up'
import { setControlsDown } from './set-controls-down'
import { setControlsSpacer } from './set-controls-spacer'

export async function setControls (parent) {

    const container = setControlsContainer ()
    const percentage = await setControlsPercentage ()
    const semitones = await setControlsSemitones ()
    const up = setControlsUp ()
    const down = setControlsDown ()
    const spacer = setControlsSpacer ()

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