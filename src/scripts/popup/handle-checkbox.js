import {getCheckbox} from './get-checkbox';
import {setCheckbox} from './set-checkbox';
import {toggleCheckbox} from './toggle-checkbox';

/**
 * @description handle the `checkbox` element
 */
export async function handleCheckbox() {
  const checkbox = getCheckbox();

  // on load
  await setCheckbox();

  // change
  checkbox.addEventListener('click', () => toggleCheckbox());
}
