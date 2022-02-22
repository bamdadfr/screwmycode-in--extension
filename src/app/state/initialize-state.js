import {getState} from './get-state';
import {setState} from './set-state';
import {SPEED, STEP} from '../constants';

/**
 * @description initialize state
 */
export async function initializeState() {
  const state = await getState();

  if (!state?.isActive) {
    await setState('isActive', false);
  }

  if (!state?.speed) {
    await setState('speed', SPEED.default);
  }

  if (!state?.step) {
    await setState('step', STEP.default);
  }
}
