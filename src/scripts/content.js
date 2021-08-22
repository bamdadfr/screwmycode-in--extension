import { handlePlayer } from './player/handle-player'
import { initializeState } from './state/initialize-state'
import { isPageWatch } from './utils/is-page-watch'
import { INTERVAL } from './constants'

let isLoaded = false
let interval = undefined

window.addEventListener ('load', async () => {

    await initializeState ()

    // repeat loader until player is handled
    interval = setInterval (async () => {

        if (!isPageWatch (window.location.href)) return

        if (isLoaded) return clearInterval (interval)

        isLoaded = true

        await handlePlayer ()
    
    }, INTERVAL)

}, { 'once': true })