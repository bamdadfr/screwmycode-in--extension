import { initState } from './state/init-state'
import { getYoutubeControls } from './youtube/get-youtube-controls'
import { setControls } from './controls/set-controls'

window.onload = async () => {

    await initState ()

    // const player = new Player (getYoutubeControls ())
    //
    // player.init ()

    await setControls (getYoutubeControls ())

}