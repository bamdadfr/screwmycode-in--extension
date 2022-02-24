import speedToPercentage from 'speed-to-percentage';
import speedToSemitones from 'speed-to-semitones';
import {STEP_DEFAULT, STEP_MAX, STEP_MIN} from '../constants';
import {State, StateObserver} from '../common/state';

export class PopupView implements StateObserver {
  public checkbox = document.getElementsByClassName('smc-checkbox')[0] as HTMLInputElement;

  public slider = document.getElementsByClassName('smc-slider')[0] as HTMLInputElement;

  public step = document.getElementsByClassName('smc-step')[0] as HTMLInputElement;

  public share = document.getElementsByClassName('smc-share')[0] as HTMLSpanElement;

  private readonly checkboxActiveClassName = 'smc-checkbox-active';

  private percentage = document.getElementsByClassName('smc-percentage')[0] as HTMLSpanElement;

  private semitones = document.getElementsByClassName('smc-semitones')[0] as HTMLSpanElement;

  private state: State;

  constructor(state: State) {
    this.state = state;

    this.renderCheckbox();
    this.renderIndicators();
    this.renderSlider();
    this.renderStep();
  }

  public onActiveChange(): void {
    this.renderCheckbox();
    this.renderIndicators();
    this.renderSlider();
  }

  public onSpeedChange(): void {
    this.renderIndicators();
  }

  public renderCheckbox(): void {
    if (this.state.isActive === true) {
      this.checkbox.textContent = 'yes';
      this.checkbox.classList.add(this.checkboxActiveClassName);
    } else {
      this.checkbox.textContent = 'no';
      this.checkbox.classList.remove(this.checkboxActiveClassName);
    }
  }

  public renderIndicators(): void {
    if (this.state.isActive === true) {
      this.percentage.textContent = `${speedToPercentage(this.state.speed)} %`;
      this.semitones.textContent = `${speedToSemitones(this.state.speed, 1)} st`;
    } else {
      this.percentage.textContent = 'off';
      this.semitones.textContent = 'off';
    }
  }

  public renderSlider(): void {
    this.slider.value = this.state.speed.toString();
    this.slider.disabled = !this.state.isActive;
  }

  private renderStep() {
    this.step.value = this.state.step.toString();
    this.step.step = STEP_DEFAULT.toString();
    this.step.min = STEP_MIN.toString();
    this.step.max = STEP_MAX.toString();
  }
}
