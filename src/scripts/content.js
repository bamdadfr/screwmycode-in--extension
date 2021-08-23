import { handlePlayer } from './player/handle-player'
import { initializeState } from './state/initialize-state'
import { isPageWatch } from './utils/is-page-watch'
import { INTERVAL } from './constants'
import { setState } from './state/set-state'
import { handleHistory } from './history/handle-history';

(async () => {

    const params = new URLSearchParams (document.location.search.substring (1))
    const speed = params.get ('speed')

    if (speed) await setState ('speed', speed)

}) ()

window.addEventListener ('load', async () => {

    let isLoaded = false

    await initializeState ()

    // repeat loader until player is handled
    const interval = setInterval (async () => {

        if (!isPageWatch (window.location.href)) return

        if (isLoaded) return clearInterval (interval)

        isLoaded = true

        await handleHistory ()

        await handlePlayer ()

    }, INTERVAL)

}, { 'once': true })