import { handlePlayer } from './player/handle-player'
import { initializeState } from './state/initialize-state'
import { onNewHref } from './utils/on-new-href'
import { isPageWatch } from './utils/is-page-watch'
import { createControls } from './controls/create-controls'

window.addEventListener ('load', async () => {

    await initializeState ()

    onNewHref (async () => {

        if (!isPageWatch (window.location.href)) return

        await handlePlayer ()

        await createControls ()
    
    })

})