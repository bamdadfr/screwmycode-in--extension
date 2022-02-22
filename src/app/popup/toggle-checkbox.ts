import {setCheckbox} from './set-checkbox';
import {State, StateKeys} from '../common/state';

export async function toggleCheckbox(): Promise<void> {
  const {isActive} = await State.get();
  await State.set(StateKeys.isActive, !isActive);
  await setCheckbox();
}
