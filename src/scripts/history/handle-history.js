import {getBrowser} from '../browser/get-browser';
import {setHistory} from './set-history';

/**
 *
 */
export async function handleHistory() {
  const browser = getBrowser();

  await setHistory();

  browser.storage.onChanged.addListener(async () => await setHistory());
}
