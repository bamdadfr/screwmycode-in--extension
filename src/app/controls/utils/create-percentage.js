import speedToPercentage from 'speed-to-percentage';
import {getState} from '../../state/get-state';
import {createIndicator} from './create-indicator';
import {INDICATOR_PERCENTAGE_ID} from '../../constants';

/**
 * @returns {Promise<HTMLSpanElement>} controls percentage value
 */
export async function createPercentage() {
  const id = INDICATOR_PERCENTAGE_ID;

  const getValue = async () => {
    const {isActive, speed} = await getState();

    return isActive
      ? `${speedToPercentage(speed, 1)} %`
      : '%';
  };

  return createIndicator({id, getValue});
}
