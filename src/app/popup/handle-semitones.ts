import {setSemitones} from './set-semitones';
import {handleIndicator} from './handle-indicator';

export async function handleSemitones(): Promise<void> {
  await handleIndicator(setSemitones);
}
