import {Browser} from './browser';
import {
  ACTIVE_DEFAULT,
  SPEED_DEFAULT,
  SPEED_MAX,
  SPEED_MIN,
  STEP_DEFAULT,
  STEP_MAX,
  STEP_MIN,
} from '../constants';
import {clampValue} from '../utils/clamp-value';
import StorageChange = chrome.storage.StorageChange;

export interface StateInterface {
  isActive: boolean;
  speed: number;
  step: number;
}

export enum StateKeys {
  isActive = 'isActive',
  speed = 'speed',
  step = 'step',
}

export interface StateObserver {
  onActiveChange?(active: StateInterface['isActive'], state: State): void;

  onSpeedChange?(speed: StateInterface['speed']): void;

  onStepChange?(step: StateInterface['step']): void;
}

export class State {
  public isReady: Promise<void>;

  public isActive: boolean;

  public speed: number;

  public step: number;

  private observers: StateObserver[] = [];

  private storage: StateInterface;

  constructor() {
    this.isReady = new Promise((resolve) => {
      (async () => {
        this.storage = await Browser.getStorage();
        await this.load();
        resolve();
      })();
    });
  }

  public attach(observer: StateObserver): void {
    this.observers.push(observer);
  }

  public async setActive(active: boolean): Promise<void> {
    this.isActive = active;
    await Browser.setStorage(StateKeys.isActive, active);
    this.notifyActive();
  }

  public async setSpeed(s: number): Promise<void> {
    const clampedS = clampValue(s, SPEED_MIN, SPEED_MAX);
    const speed = parseFloat(clampedS.toFixed(2));

    this.speed = speed;
    await Browser.setStorage(StateKeys.speed, speed);
    this.notifySpeed();
  }

  public async setStep(value: number): Promise<void> {
    const step = clampValue(value, STEP_MIN, STEP_MAX);

    this.step = step;
    await Browser.setStorage(StateKeys.step, step);
    this.notifyStep();
  }

  public async increaseSpeed(revert = false): Promise<void> {
    let speed;

    if (revert === false) {
      speed = this.speed + this.step;
    } else {
      speed = this.speed - this.step;
    }

    if (speed > SPEED_MAX) {
      speed = SPEED_MAX;
    }

    if (speed < SPEED_MIN) {
      speed = SPEED_MIN;
    }

    await this.setSpeed(speed);
  }

  private notifyActive() {
    this.observers.forEach((observer) => {
      if (observer.onActiveChange) {
        observer.onActiveChange(this.isActive, this);
      }
    });
  }

  private notifySpeed() {
    this.observers.forEach((observer) => {
      if (observer.onSpeedChange) {
        observer.onSpeedChange(this.speed);
      }
    });
  }

  private notifyStep() {
    this.observers.forEach((observer) => {
      if (observer.onStepChange) {
        observer.onStepChange(this.step);
      }
    });
  }

  private async load() {
    await this.loadActive();
    await this.loadSpeed();
    await this.loadStep();
    Browser.addStorageListener(this.onStorageChange.bind(this));
  }

  private onStorageChange(changes: {[p: string]: StorageChange;}) {
    const {isActive, speed, step} = changes;

    if (typeof isActive !== 'undefined') {
      if (isActive.newValue !== this.isActive) {
        this.isActive = isActive.newValue;
        this.notifyActive();
      }
    }

    if (typeof speed !== 'undefined') {
      if (speed.newValue !== this.speed) {
        this.speed = speed.newValue;
        this.notifySpeed();
      }
    }

    if (typeof step !== 'undefined') {
      if (step.newValue !== this.step) {
        this.step = step.newValue;
        this.notifyStep();
      }
    }
  }

  private async loadActive() {
    if (typeof this.storage?.isActive === 'boolean') {
      this.isActive = this.storage.isActive;
      return;
    }

    await this.setActive(ACTIVE_DEFAULT);
  }

  private async loadSpeed() {
    if (typeof this.storage?.speed === 'number') {
      this.speed = this.storage.speed;
      return;
    }

    await this.setSpeed(SPEED_DEFAULT);
  }

  private async loadStep() {
    if (typeof this.storage?.step === 'number') {
      this.step = this.storage.step;
      return;
    }

    await this.setStep(STEP_DEFAULT);
  }
}
