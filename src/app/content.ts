import {State} from './common/state';
import {ControlsController} from './controllers/controls.controller';
import {HistoryController} from './controllers/history.controller';
import {PlayerController} from './controllers/player.controller';
import {ControlsView} from './views/controls.view';

window.addEventListener('DOMContentLoaded', async () => {
  const state = new State();
  await state.isReady;

  const player = new PlayerController(state);
  await player.isReady;
  state.attach(player);

  const controlsView = new ControlsView(state);
  new ControlsController(state, controlsView);
  state.attach(controlsView);

  const history = new HistoryController(state);
  await history.isReady;
  state.attach(history);
});
