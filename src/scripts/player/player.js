import { StateOnChange } from '../state-on-change/state-on-change'

/**
 * @function
 * @name Player
 * @description content: handle data stream from youtube player
 * @return {Promise<void>}
 */
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