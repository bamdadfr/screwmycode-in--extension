import {State} from '../common/state';
import {PopupView} from '../views/popup.view';
import {Browser} from '../common/browser';

export class PopupController {
  private state: State;

  private readonly view: PopupView;

  constructor(state: State, view: PopupView) {
    this.state = state;
    this.view = view;

    this.handleCheckbox();
    this.handleSlider();
    this.handleStep();
    this.handleShare();
  }

  private handleCheckbox() {
    this.view.checkbox.addEventListener('click', async () => {
      await this.state.setActive(!this.state.isActive);
    });
  }

  private handleSlider() {
    this.view.slider.addEventListener('input', async (event: InputEvent) => {
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      await this.state.setSpeed(value);
    });
  }

  private handleStep() {
    this.view.step.addEventListener('change', async (event: InputEvent) => {
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      await this.state.setStep(value);
    });
  }

  private handleShare() {
    this.view.share.addEventListener('click', async () => {
      const id = await Browser.getVideoId();
      const url = `https://screwmycode.in/youtube/${id}/${this.state.speed}`;
      await Browser.createTab(url);
    });
  }
}
