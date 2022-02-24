import {PopupController} from './controllers/popup.controller';
import {State} from './common/state';
import {PopupView} from './views/popup.view';

window.addEventListener('load', async () => {
  const state = new State();
  await state.isReady;

  const popupView = new PopupView(state);
  state.attach(popupView);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const popupController = new PopupController(state, popupView);
});
