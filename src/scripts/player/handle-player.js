import { onNewState } from '../state/on-new-state'

/**
 * @description handle data stream from youtube player
 */
export async function handlePlayer () {

    const player = document.getElementsByClassName ('video-stream html5-main-video')[0]

    // todo overwrite old listener when player changes
    await onNewState (
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