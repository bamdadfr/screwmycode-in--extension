import {getState} from '../../state/get-state';
import {setState} from '../../state/set-state';

/**
 * @description blueprint for change buttons increase/decrease
 * @param {object} options options
 * @param {string} options.text HTML innerText
 * @param {boolean} options.increase set to false for decrease
 * @returns {HTMLSpanElement} change button
 */
export function createChange({
  text,
  increase,
}) {
  const change = document.createElement('span');
  change.innerText = text;
  change.style.cursor = 'pointer';

  change.addEventListener('click', async () => {
    const {isActive, speed, step} = await getState();
    if (isActive) {
      await setState(
        'speed',
        increase ? speed + step : speed - step,
      );
    }
  });

  return change;
}
