import { Browser } from '../browser/browser'

export async function UtilsGetId () {

    const browser = await Browser ()

    const currentTab = await browser.tabs.query ({
        'active': true,
        'currentWindow': true,
    })

    const currentUrl = currentTab[0].url
    const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = currentUrl.match (regex)

    if (match && match[2].length === 11) {

        return match[2]

    }

    return null

}