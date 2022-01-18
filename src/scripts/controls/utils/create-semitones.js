import speedToSemitones from 'speed-to-semitones';
import {getState} from '../../state/get-state';
import {createIndicator} from './create-indicator';
import {INDICATOR_SEMITONES_ID} from '../../constants';

/**
 * @returns {Promise<HTMLSpanElement>} controls semitones value
 */
export async function createSemitones() {
  const id = INDICATOR_SEMITONES_ID;

  const getValue = async () => {
    const {isActive, speed} = await getState();

    return isActive
      ? `${speedToSemitones(speed, 1)} st`
      : 'st';
  };

  return createIndicator({id, getValue});
}
