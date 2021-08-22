import { handlePlayer } from './player/handle-player'
import { initializeState } from './state/initialize-state'
import { onNewHref } from './utils/on-new-href'
import { isPageWatch } from './utils/is-page-watch'

let isLoaded = false

window.addEventListener ('load', async () => {

    await initializeState ()

    onNewHref (async () => {

        if (!isPageWatch (window.location.href)) return

        if (isLoaded) return

        isLoaded = true

        await handlePlayer ()
    
    })

}, { 'once': true })