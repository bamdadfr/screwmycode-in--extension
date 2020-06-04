
import { setState, getState } from './functions/browser'

// init
const init = async () => {

    const storage = await getState ()

    if (typeof storage.isReady === 'undefined') setState ('isReady', false)

    if (typeof storage.isActive === 'undefined') setState ('isActive', false)

    if (typeof storage.speed === 'undefined') setState ('speed', 1)
    
}

init ()