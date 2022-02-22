import {STEP} from '../constants';
import {State, StateKeys} from '../common/state';

export async function handleStep(): Promise<void> {
  const input = document.getElementsByClassName('smc-step')[0] as HTMLInputElement;
  const state = await State.get();

  input.value = state.step.toString();
  input.step = STEP.default.toString();
  input.min = STEP.min.toString();
  input.max = STEP.max.toString();

  input.onchange = async (e: InputEvent) => {
    const target = e.target as HTMLInputElement;
    const inputValue = parseFloat(target.value);

    let finalValue;

    if (inputValue < parseFloat(input.min)) {
      finalValue = parseFloat(input.min);
    } else if (inputValue > parseFloat(input.max)) {
      finalValue = parseFloat(input.max);
    } else {
      finalValue = inputValue;
    }

    input.value = finalValue.toString();

    await State.set(StateKeys.step, finalValue);
  };
}
