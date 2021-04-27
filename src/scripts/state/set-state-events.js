import { getBrowser } from '../browser/get-browser'
import { setYoutubeSpeed } from '../youtube/set-youtube-speed'

export async function setStateEvents () {

    const browser = await getBrowser ()

    browser.storage.onChanged.addListener ((changes) => {

        if (changes.isActive.newValue === false) {

            setYoutubeSpeed ({
                'speed': 1,
                'disable': true,
            })

            return

        }

        if (changes.speed.newValue !== changes.speed.oldValue) {

            // update youtube with new speed
            setYoutubeSpeed ({
                'speed': changes.speed.newValue,
            })

            // update controls with new speed

        }

    })

}