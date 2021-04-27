import { State } from './state/state'
import { Controls } from './controls/controls'
import { Youtube } from './youtube/youtube'

window.onload = async () => {

    await State.init ()

    const youtubeControls = document.getElementsByClassName ('ytp-time-display notranslate')[0]

    // await setControls (youtubeControls)
    await Controls.set (youtubeControls)

    const youtubePlayer = document.getElementsByClassName ('video-stream html5-main-video')[0]

    // await setYoutube (youtubePlayer)
    await Youtube.set (youtubePlayer)

}