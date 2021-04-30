import { StateOnChange } from '../state-on-change/state-on-change'

export async function Player () {

    const player = document.getElementsByClassName ('video-stream html5-main-video')[0]

    await StateOnChange (
        ({ speed }) => {

            player.mozPreservesPitch = false

            player.playbackRate = speed

        },
        () => {

            player.mozPreservesPitch = true

            player.playbackRate = 1

        },
    )

}