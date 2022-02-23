import {handlePlayer} from './player/handle-player';
import {isPageWatch} from './utils/is-page-watch';
import {INTERVAL} from './constants';
import {handleHistory} from './history/handle-history';
import {State, StateKeys} from './common/state';

(async () => {
  const params = new URLSearchParams(document.location.search.substring(1));
  const speedParameter = params.get('speed');

  if (!speedParameter) {
    return;
  }

  await State.set(StateKeys.speed, parseFloat(speedParameter));
})();

window.addEventListener('load', async () => {
  let isLoaded = false;

  await State.initialize();

  // repeat loader until player is handled
  const interval: NodeJS.Timer = setInterval(async () => {
    if (!isPageWatch()) {
      return;
    }

    if (isLoaded) {
      return clearInterval(interval);
    }

    isLoaded = true;
    await handleHistory();
    await handlePlayer();
  }, INTERVAL);
}, {once: true});
