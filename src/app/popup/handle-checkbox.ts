import {getCheckbox} from './get-checkbox';
import {setCheckbox} from './set-checkbox';
import {toggleCheckbox} from './toggle-checkbox';

export async function handleCheckbox(): Promise<void> {
  const checkbox = getCheckbox();

  // on load
  await setCheckbox();

  // change
  checkbox.addEventListener('click', () => toggleCheckbox());
}
