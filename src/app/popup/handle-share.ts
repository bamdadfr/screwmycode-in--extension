import {getVideoId} from '../utils/get-video-id';
import {State} from '../common/state';
import {Browser} from '../common/browser';

export async function handleShare(): Promise<void> {
  const share = document.getElementsByClassName('smc-share')[0];
  const browser = Browser.get();
  const id = await getVideoId();

  if (typeof id === 'undefined') {
    return;
  }

  share.addEventListener('click', async () => {
    const {speed} = await State.get();

    browser.tabs.create({
      url: `https://screwmycode.in/youtube/${id}/${speed}`,
    });
  });
}
