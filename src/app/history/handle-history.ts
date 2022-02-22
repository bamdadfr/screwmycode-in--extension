import {setHistory} from './set-history';
import {Browser} from '../common/browser';

export async function handleHistory(): Promise<void> {
  const browser = Browser.get();

  await setHistory();

  browser.storage.onChanged.addListener(async () => await setHistory());
}
