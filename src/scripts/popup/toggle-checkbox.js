import {getState} from '../state/get-state';
import {setState} from '../state/set-state';
import {setCheckbox} from './set-checkbox';

/**
 *
 */
export async function toggleCheckbox() {
  const {isActive} = await getState();

  await setState('isActive', !isActive);

  await setCheckbox();
}
