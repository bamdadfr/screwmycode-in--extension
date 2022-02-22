import speedToSemitones from 'speed-to-semitones';
import {createIndicator} from './create-indicator';
import {INDICATOR_SEMITONES_ID} from '../../constants';
import {State} from '../../common/state';

export async function createSemitones(): Promise<HTMLSpanElement> {
  const id = INDICATOR_SEMITONES_ID;

  const getValue = async () => {
    const {isActive, speed} = await State.get();

    return isActive
      ? `${speedToSemitones(speed, 1)} st`
      : 'st';
  };

  return createIndicator({id, getValue});
}
