export function YoutubeControlsSetContainer () {

    const container = document.createElement ('div')

    container.classList.add ('ytp-time-display', 'notranslate')

    container.id = 'screwmycode-ext__container'

    container.style = 'user-select: none;'

    return container

}