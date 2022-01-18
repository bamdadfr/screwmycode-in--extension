import {getBrowser} from '../browser/get-browser';

/**
 * @returns {string|null} get id or null
 */
export async function getVideoId() {
  const browser = await getBrowser();

  const currentTab = await browser.tabs.query({
    'active': true,
    'currentWindow': true,
  });

  const currentUrl = currentTab[0].url;
  const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = currentUrl.match(regex);

  if (match && match[2].length === 11) {
    return match[2];
  }

  return null;
}
