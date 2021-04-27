import { Browser } from '../browser/browser'

export async function YoutubeSet () {

    const player = document.getElementsByClassName ('video-stream html5-main-video')[0]
    const browser = await Browser.get ()

    browser.storage.onChanged.addListener ((changes) => {

        if (changes.isActive.newValue === false) {

            player.mozPreservesPitch = true

            player.playbackRate = 1

            return

        }

        if (changes.speed.newValue !== changes.speed.oldValue) {

            // update youtube with new speed
            player.mozPreservesPitch = false

            player.playbackRate = changes.speed.newValue

            // update controls with new speed

        }

    })

}