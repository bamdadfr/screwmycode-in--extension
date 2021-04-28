import { StateOnSpeedChange } from '../state-on-speed-change/state-on-speed-change'

export async function Player () {

    const player = document.getElementsByClassName ('video-stream html5-main-video')[0]

    await StateOnSpeedChange (
        (speed) => {

            player.mozPreservesPitch = false

            player.playbackRate = speed

        },
        () => {

            player.mozPreservesPitch = true

            player.playbackRate = 1

        },
    )

}