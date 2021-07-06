import { State } from './state/state'
import { Player } from './player/player'
import { Controls } from './controls/controls'

/**
 * @function
 * @name ContentOnLoad
 * @description content: on load
 * @returns {Promise<void>}
 */
async function ContentOnLoad () {

    await State ()

    await Player ()

    await Controls ()

}

window.addEventListener ('load', ContentOnLoad)