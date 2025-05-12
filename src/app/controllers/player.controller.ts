import {State, StateObserver} from '../common/state';
import {resolveOrRetry} from '../utils/resolve-or-retry';

export class PlayerController implements StateObserver {
  public isReady: Promise<void>;

  private player: HTMLVideoElement;

  private state: State;

  constructor(state: State) {
    this.isReady = new Promise((resolve) => {
      (async () => {
        this.state = state;
        this.player = await this.getPlayer();
        this.load();
        resolve();
      })();
    });
  }

  public onActiveChange(isActive: boolean, state: State): void {
    if (isActive === false) {
      this.player.playbackRate = 1;
    } else {
      this.player.playbackRate = state.speed;
    }
  }

  public onSpeedChange(speed: number): void {
    this.player.playbackRate = speed;
  }

  private getPlayer(): Promise<HTMLVideoElement> {
    return resolveOrRetry((resolve, retry) => {
      const player = document.getElementsByClassName('video-stream html5-main-video')[0] as HTMLVideoElement;

      if (player && player.readyState) {
        resolve(player);
      } else {
        return retry();
      }
    });
  }

  private load() {
    this.player.preservesPitch = false;
    this.player.mozPreservesPitch = false;

    this.player.onplay = () => {
      if (this.state.isActive) {
        this.onSpeedChange(this.state.speed);
      }
    };
  }
}
