import {setState} from '../state/set-state';
import {getBrowser} from '../browser/get-browser';
import {getState} from '../state/get-state';

/**
 * @description handle the `slider` element
 */
export async function handleSlider() {
  const slider = document.getElementsByClassName('smc-slider')[0];

  const setSlider = async () => {
    const {isActive, speed} = await getState();
    slider.value = speed;
    slider.disabled = !isActive;
  };

  // on load
  await setSlider();

  // on input
  slider.addEventListener('input', async (event) => {
    const value = parseFloat(event.target.value);
    await setState('speed', value);
  });

  // on change
  const browser = await getBrowser();
  browser.storage.onChanged.addListener(async () => await setSlider());
}
