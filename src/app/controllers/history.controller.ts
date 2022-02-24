import {SPEED_PARAMETER} from '../constants';
import {State, StateObserver} from '../common/state';

export class HistoryController implements StateObserver {
  public isReady: Promise<void>;

  private state: State;

  private savedVideoId: string;

  constructor(state: State) {
    this.state = state;

    this.isReady = new Promise((resolve) => {
      (async () => {
        await this.onNewLocation();
        this.observerNewLocations();
        resolve();
      })();
    });
  }

  private static getVideoId() {
    const url = new URL(window.location.href);
    return url.searchParams.get('v');
  }

  public onActiveChange(): void {
    this.render();
  }

  public onSpeedChange(): void {
    this.render();
  }

  private render(speed = this.state.speed): void {
    const url = new URL(window.location.href);

    if (speed === 1 || this.state.isActive === false) {
      url.searchParams.delete(SPEED_PARAMETER);
    } else {
      url.searchParams.set(SPEED_PARAMETER, speed.toString());
    }

    window.history.replaceState({}, '', url.toString());
  }

  // TODO: find a way to detect YouTube resetting the URL parameter
  private renderWithDelay(speed: number) {
    setTimeout(() => {
      this.render(speed);
    }, 1000);
  }

  private observerNewLocations() {
    this.savedVideoId = HistoryController.getVideoId();

    const o = new MutationObserver(async () => {
      if (this.savedVideoId === HistoryController.getVideoId()) {
        return;
      }

      this.savedVideoId = HistoryController.getVideoId();
      this.renderWithDelay(this.state.speed);
    });

    o.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  private async onNewLocation() {
    const params = new URLSearchParams(document.location.search.substring(1));
    const speedParameter = params.get(SPEED_PARAMETER);

    if (!speedParameter) {
      return;
    }

    const speed = parseFloat(speedParameter);

    await this.state.setActive(true);
    await this.state.setSpeed(speed);
    this.renderWithDelay(speed);
  }
}
