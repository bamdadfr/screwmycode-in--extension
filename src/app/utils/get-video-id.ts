import {Browser} from '../common/browser';

export async function getVideoId(): Promise<string | void> {
  return new Promise((resolve) => {
    const browser = Browser.get();
    const queryOptions = {
      active: true,
      currentWindow: true,
    };

    browser.tabs.query(queryOptions, (result) => {
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
