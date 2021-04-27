import { State } from './state/state'
import { Player } from './player/player'
import { Controls } from './controls/controls'

window.onload = async () => {

    await State ()

    await Player ()

    await Controls ()

}