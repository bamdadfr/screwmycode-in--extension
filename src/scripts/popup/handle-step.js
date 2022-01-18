import {STEP} from '../constants';
import {setState} from '../state/set-state';
import {getState} from '../state/get-state';

/**
 * @description handle the 'step' element
 */
export async function handleStep() {
  const step = document.getElementsByClassName('smc-step')[0];
  const state = await getState();

  step.value = state.step;

  step.step = STEP.default;

  step.min = STEP.min;

  step.max = STEP.max;

  step.onchange = async (e) => {
    const inputValue = e.target.value;
    let finalValue = inputValue;

    switch (inputValue) {
      case inputValue < step.min:
        finalValue = step.min;

        break;

      case inputValue > step.max:
        finalValue = step.max;

        break;

      default:
    }

    step.value = finalValue;

    await setState('step', finalValue);
  };
}
