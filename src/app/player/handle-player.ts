import {RETRY} from '../constants';
import {createControls} from '../controls/create-controls';
import {getPlayer} from './get-player';
import {setSpeed} from './set-speed';
import {setHistory} from '../history/set-history';
import {Browser} from '../common/browser';

export async function handlePlayer(): Promise<void | NodeJS.Timeout> {
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

  const browser = Browser.get();

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
