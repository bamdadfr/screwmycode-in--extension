import { State } from './state/state'
import { Youtube } from './youtube/youtube'
import { YoutubeControls } from './youtube-controls/youtube-controls'

window.onload = async () => {

    await State ()

    await Youtube ()

    await YoutubeControls ()

}