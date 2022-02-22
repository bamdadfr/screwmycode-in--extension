import {SPEED, STEP} from '../constants';
import {Browser} from './browser';
import {clampValue} from '../utils/clamp-value';

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

const defaultState = {
  isActive: false,
  speed: SPEED.default,
  step: STEP.default,
};

export class State {
  public static async initialize(): Promise<void> {
    const state = await State.get();

    if (typeof state?.isActive === 'undefined') {
      await this.set(StateKeys.isActive, defaultState.isActive);
    }

    if (typeof state?.speed === 'undefined') {
      await this.set(StateKeys.speed, defaultState.speed);
    }

    if (typeof state?.step === 'undefined') {
      await this.set(StateKeys.step, defaultState.step);
    }
  }

  public static async get(): Promise<StateInterface> {
    const browser = Browser.get();

    if (typeof browser?.storage?.local?.get === 'undefined') {
      throw new Error('State: browser storage is not available');
    }

    return new Promise((resolve) => {
      browser.storage.local.get(null, async (state: StateInterface) => {
        resolve(state);
      });
    });
  }

  public static async set(key: StateKeys, payload: boolean | number): Promise<void> {
    const browser = Browser.get();

    switch (key) {
      case StateKeys.isActive: {
        if (typeof payload !== 'boolean') {
          return;
        }

        await browser.storage.local.set({
          [StateKeys.isActive]: payload,
        });

        break;
      }

      case StateKeys.speed: {
        if (typeof payload !== 'number') {
          return;
        }

        const value = clampValue(payload, SPEED.min, SPEED.max);

        await browser.storage.local.set({
          [StateKeys.speed]: value,
        });

        break;
      }

      case StateKeys.step: {
        if (typeof payload !== 'number') {
          return;
        }

        const value = clampValue(payload, STEP.min, STEP.max);

        await browser.storage.local.set({
          [StateKeys.step]: value,
        });

        break;
      }

      default: {
        throw new Error('Invalid state key');
      }
    }
  }
}
