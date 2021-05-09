/**
 * @function
 * @name ControlsContainer
 * @description controls: create the `div` sub component
 * @return {HTMLDivElement}
 */
export function ControlsContainer () {

    const container = document.createElement ('div')

    container.classList.add ('ytp-time-display', 'notranslate')

    container.id = 'screwmycode-ext__container'

    container.style = 'user-select: none;'

    return container

}