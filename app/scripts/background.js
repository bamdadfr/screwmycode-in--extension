
import { getBrowser, setState, getState } from './functions/browser'

getBrowser ().storage.onChanged.addListener ((changes) => {

    // Object.keys (changes).forEach (key => {

    //     console.log (key, changes[key])
    
    // })

})

// on page update
const filter = {
    'urls': [
        'https://www.youtube.com/watch?*',
    ],
}
 
async function handleUpdated (tabId, changeInfo, tabInfo) {

    // console.log (changeInfo, tabInfo)

    if (changeInfo.status === 'complete') {

        setState ('isReady', true)
    
    }

}

getBrowser ().tabs.onUpdated.addListener (handleUpdated, filter)

// init
const init = async () => {

    const storage = await getState ()

    if (typeof storage.isReady === 'undefined') {

        setState ('isReady', false)
    
    }

    if (typeof storage.isActive === 'undefined') {

        setState ('isActive', false)

    }

    if (typeof storage.speed === 'undefined') {

        setState ('speed', 1)
    
    }

}

init ()