import {getBrowser} from '../browser/get-browser';
import {RETRY} from '../constants';
import {createControls} from '../controls/create-controls';
import {getPlayer} from './get-player';
import {setSpeed} from './set-speed';
import {setHistory} from '../history/set-history';

/**
 * @description handle data stream from youtube player
 * @returns {undefined}
 */
export async function handlePlayer() {
  const player = getPlayer();
  const retry = () => setTimeout(() => handlePlayer(), RETRY);

  // retry if player not defined
  if (!player) {
    return retry();
  }

  // retry if player not ready
  if (!player.readyState) {
    return retry();
  }

  const browser = getBrowser();

  // on load
  await createControls();

  await setSpeed();

  // on play
  player.addEventListener('play', async () => {
    await setSpeed();

    setTimeout(async () => {
      await setHistory();
    }, 2000);
  });

  // on change
  browser.storage.onChanged.addListener(async () => await setSpeed());
}
