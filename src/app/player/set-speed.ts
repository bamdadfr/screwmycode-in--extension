import {SPEED} from '../constants';
import {getPlayer} from './get-player';
import {State} from '../common/state';

export async function setSpeed(): Promise<void> {
  const player = getPlayer();
  const {isActive, speed} = await State.get();

  player.mozPreservesPitch = !isActive;
  player.preservesPitch = !isActive;
  player.playbackRate = isActive ? speed : SPEED.default;
}
