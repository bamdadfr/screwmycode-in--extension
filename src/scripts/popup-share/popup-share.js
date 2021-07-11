import { State } from '../state/state'
import { UtilsGetId } from '../utils-get-id/utils-get-id'
import { Browser } from '../browser/browser'

/**
 * @function
 * @name PopupShare
 * @description popup: handle the `share` element
 * @returns {Promise<void>}
 */
export async function PopupShare () {

    const share = document.getElementsByClassName ('smc-share')[0]
    const browser = await Browser ()
    const id = await UtilsGetId ()

    share.onclick = async () => {

        const { speed } = await State ()

        browser.tabs.create ({
            'url': `https://screwmycode.in/youtube/${id}/${speed}`,
        })

    }

}