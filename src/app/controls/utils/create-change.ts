import {State, StateKeys} from '../../common/state';

interface CreateChangeOptions {
  text: string;
  increase: boolean;
}

export function createChange({
  text,
  increase,
}: CreateChangeOptions): HTMLSpanElement {
  const change = document.createElement('span');
  change.innerText = text;
  change.style.cursor = 'pointer';

  change.addEventListener('click', async () => {
    const {isActive, speed, step} = await State.get();
    if (isActive) {
      await State.set(
        StateKeys.speed,
        increase ? speed + step : speed - step,
      );
    }
  });

  return change;
}
