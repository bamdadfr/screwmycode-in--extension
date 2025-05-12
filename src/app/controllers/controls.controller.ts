import {State} from '../common/state';
import {SPEED_DEFAULT} from '../constants';
import {ControlsView} from '../views/controls.view';

export class ControlsController {
  private state: State;

  private readonly view: ControlsView;

  constructor(state: State, view: ControlsView) {
    this.state = state;
    this.view = view;

    this.handleIndicators();
    this.handleIncrease();
    this.handleDecrease();
  }

  private handleIndicators() {
    const listener = async () => {
      if (this.state.isActive) {
        await this.state.setSpeed(SPEED_DEFAULT);
      }
    };

    this.view.percentage.addEventListener('click', listener);
    this.view.semitones.addEventListener('click', listener);
  }

  private handleIncrease() {
    this.view.increase.addEventListener('click', async () => {
      if (this.state.isActive) {
        await this.state.increaseSpeed();
      }
    });
  }

  private handleDecrease() {
    this.view.decrease.addEventListener('click', async () => {
      if (this.state.isActive) {
        await this.state.increaseSpeed(true);
      }
    });
  }
}
