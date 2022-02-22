import speedToPercentage from 'speed-to-percentage';
import {getPercentage} from './get-percentage';
import {State} from '../common/state';

export async function setPercentage(): Promise<void> {
  const percentage = getPercentage();
  const {isActive, speed} = await State.get();

  percentage.innerText = isActive
    ? `${speedToPercentage(speed)} %`
    : 'off';
}
