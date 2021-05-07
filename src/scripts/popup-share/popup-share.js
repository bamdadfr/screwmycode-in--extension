import { State } from '../state/state'
import { UtilsGetId } from '../utils-get-id/utils-get-id'
import { Browser } from '../browser/browser'

export async function PopupShare () {

    const share = document.getElementsByClassName ('smc-share')[0]
    const browser = await Browser ()
    const { speed } = await State ()
    const baseUrl = 'https://screwmycode.in/youtube/'
    const speedUrl = 'speed='
    const id = await UtilsGetId ()
    const url = `${baseUrl}${id}?${speedUrl}${speed}`

    share.onclick = () => {

        browser.tabs.create ({
            'url': url,
        })

    }

}