import {setPercentage} from './set-percentage';
import {setSemitones} from './set-semitones';
import {Browser} from '../common/browser';

export async function handleIndicator(set: typeof setPercentage | typeof setSemitones): Promise<void> {
  // on load
  await set();

  // on change
  const browser = Browser.get();

  browser.storage.onChanged.addListener(async () => await set());
}
