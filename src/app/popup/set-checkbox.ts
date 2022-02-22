import {getCheckbox} from './get-checkbox';
import {State} from '../common/state';

export async function setCheckbox(): Promise<void> {
  const checkbox = getCheckbox();
  const {isActive} = await State.get();
  checkbox.innerText = isActive ? 'yes' : 'no';

  const className = 'smc-checkbox-active';

  if (isActive) {
    checkbox.classList.add(className);
  } else if (!isActive) {
    checkbox.classList.remove(className);
  }
}
