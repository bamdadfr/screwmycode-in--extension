import speedToSemitones from 'speed-to-semitones';
import {getSemitones} from './get-semitones';
import {getState} from '../state/get-state';

/**
 *
 */
export async function setSemitones() {
  const semitones = getSemitones();
  const {isActive, speed} = await getState();

  semitones.innerText = isActive
    ? `${speedToSemitones(speed, 1)} st`
    : 'off';
}
