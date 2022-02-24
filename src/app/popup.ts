import {PopupController} from './controllers/popup.controller';
import {State} from './common/state';
import {PopupView} from './views/popup.view';

window.addEventListener('load', async () => {
  const state = new State();
  await state.isReady;

  const popup = new PopupView(state);
  state.attach(popup);
  // eslint-disable-next-line no-new
  new PopupController(state, popup);
});
