import { getState } from '../state/get-state'
import { getVideoId } from '../utils/get-video-id'
import { getBrowser } from '../browser/get-browser'

/**
 * @description handle the `share` element
 */
export async function handleShare () {

    const share = document.getElementsByClassName ('smc-share')[0]
    const browser = await getBrowser ()
    const id = await getVideoId ()

    share.addEventListener ('click', async () => {

        const { speed } = await getState ()

        browser.tabs.create ({
            'url': `https://screwmycode.in/youtube/${id}/${speed}`,
        })

    })

}