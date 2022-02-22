import speedToPercentage from 'speed-to-percentage';
import {createIndicator} from './create-indicator';
import {INDICATOR_PERCENTAGE_ID} from '../../constants';
import {State} from '../../common/state';

export async function createPercentage(): Promise<HTMLSpanElement> {
  const id = INDICATOR_PERCENTAGE_ID;

  const getValue = async () => {
    const {isActive, speed} = await State.get();

    return isActive
      ? `${speedToPercentage(speed, 1)} %`
      : '%';
  };

  return createIndicator({id, getValue});
}
