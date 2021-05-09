import { State } from './state/state'
import { Player } from './player/player'
import { Controls } from './controls/controls'

/**
 * @function
 * @name ContentOnLoad
 * @description content: on load
 * @return {Promise<void>}
 */
async function ContentOnLoad () {

    await State ()

    const player = await Player ()

    await Controls ()

    player.addEventListener ('canplay', ContentOnLoad)

}

window.addEventListener ('load', ContentOnLoad)