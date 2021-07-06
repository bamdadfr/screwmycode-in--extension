import { ConstantControlsContainer } from '../constant-controls-container/constant-controls-container'

/**
 * @function
 * @name ControlsContainer
 * @description controls: create the `div` sub component
 * @returns {HTMLDivElement} - container HTML div element
 */
export function ControlsContainer () {

    const container = document.createElement ('div')

    container.classList.add ('ytp-time-display', 'notranslate')

    container.id = ConstantControlsContainer

    container.style = 'user-select: none;'

    return container

}