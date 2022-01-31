import {getState} from '../state/get-state';
import {SPEED} from '../constants';
import {getPlayer} from './get-player';

/**
 *
 */
export async function setSpeed() {
  const player = getPlayer();
  const {isActive, speed} = await getState();
  player.mozPreservesPitch = !isActive;
  player.playbackRate = isActive ? speed : SPEED.default;
}
