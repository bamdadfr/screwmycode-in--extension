import {setPercentage} from './set-percentage';
import {handleIndicator} from './handle-indicator';

export async function handlePercentage(): Promise<void> {
  await handleIndicator(setPercentage);
}
