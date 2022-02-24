import {HistoryController} from './controllers/history.controller';
import {State} from './common/state';
import {PlayerController} from './controllers/player.controller';
import {ControlsController} from './controllers/controls.controller';
import {ControlsView} from './views/controls.view';

window.addEventListener('load', async () => {
  const state = new State();
  await state.isReady;

  const player = new PlayerController(state);
  await player.isReady;
  state.attach(player);

  const controls = new ControlsView(state);
  // eslint-disable-next-line no-new
  new ControlsController(state, controls);
  state.attach(controls);

  const history = new HistoryController(state);
  await history.isReady;
  state.attach(history);
});
