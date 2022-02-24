export interface State {
  isActive: boolean;
  speed: number;
  step: number;
}

/**
 * Interface for the browser object.
 */
export class Browser {
  private static readonly browser = chrome;

  public static getStorage(): Promise<State> {
    if (typeof this.browser?.storage?.local?.get === 'undefined') {
      throw new Error('Browser: storage is not available');
    }

    return new Promise((resolve) => {
      this.browser.storage.local.get(null, async (state: State) => {
        resolve(state);
      });
    });
  }

  public static async setStorage(key: keyof State, value: State[keyof State]): Promise<void> {
    await this.browser.storage.local.set({[key]: value});
  }

  public static addStorageListener(callback: (changes: {[p: string]: chrome.storage.StorageChange;}) => void): void {
    this.browser.storage.onChanged.addListener((changes) => {
      callback(changes);
    });
  }

  public static getVideoId(): Promise<string | void> {
    return new Promise((resolve) => {
      const queryOptions = {
        active: true,
        currentWindow: true,
      };

      this.browser.tabs.query(queryOptions, (result) => {
        const currentUrl = result[0].url;
        const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = currentUrl.match(regex);

        if (match && match[2].length === 11) {
          resolve(match[2]);
          return;
        }

        resolve();
      });
    });
  }

  public static async createTab(url: string): Promise<void> {
    await this.browser.tabs.create({url});
  }
}
