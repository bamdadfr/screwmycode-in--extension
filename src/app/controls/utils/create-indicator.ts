import {SPEED} from '../../constants';
import {State, StateKeys} from '../../common/state';
import {Browser} from '../../common/browser';

interface CreateIndicatorOptions {
  id: string;
  getValue: () => Promise<string>;
}

export async function createIndicator({
  id,
  getValue,
}: CreateIndicatorOptions): Promise<HTMLSpanElement> {
  // declaration
  const indicator = document.createElement('span');
  indicator.id = id;
  indicator.style.cursor = 'pointer';

  // setter
  const setValue = (value: string) => {
    indicator.innerText = value;
  };

  // on load
  setValue(await getValue());

  // on click, reset value
  indicator.addEventListener('click', async () => {
    await State.set(StateKeys.speed, SPEED.default);
  });

  // on change
  const browser = Browser.get();
  browser.storage.onChanged.addListener(async () => setValue(await getValue()));

  return indicator;
}
