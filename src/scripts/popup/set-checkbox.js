import {getState} from '../state/get-state';
import {getCheckbox} from './get-checkbox';

/**
 *
 */
export async function setCheckbox() {
  const checkbox = getCheckbox();
  const {isActive} = await getState();

  checkbox.innerText = isActive ? 'yes' : 'no';

  const className = 'smc-checkbox-active';

  if (isActive) {
    checkbox.classList.add(className);
  } else if (!isActive) {
    checkbox.classList.remove(className);
  }
}
