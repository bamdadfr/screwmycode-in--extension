import { getYoutubePlayer } from './get-youtube-player'

export function setYoutubeSpeed ({
    speed = 1,
    disable = false,
}) {

    const player = getYoutubePlayer ()

    player.mozPreservesPitch = disable

    player.playbackRate = speed

}