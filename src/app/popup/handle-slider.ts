import {State, StateKeys} from '../common/state';
import {Browser} from '../common/browser';

export async function handleSlider(): Promise<void> {
  const slider = document.getElementsByClassName('smc-slider')[0] as HTMLInputElement;

  const setSlider = async () => {
    const {isActive, speed} = await State.get();
    slider.value = speed.toString();
    slider.disabled = !isActive;
  };

  // on load
  await setSlider();

  // on input
  slider.addEventListener('input', async (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);
    await State.set(StateKeys.speed, value);
  });

  // on change
  const browser = Browser.get();
  browser.storage.onChanged.addListener(async () => await setSlider());
}
