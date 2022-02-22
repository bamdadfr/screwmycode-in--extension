import speedToSemitones from 'speed-to-semitones';
import {getSemitones} from './get-semitones';
import {State} from '../common/state';

export async function setSemitones(): Promise<void> {
  const semitones = getSemitones();
  const {isActive, speed} = await State.get();

  semitones.innerText = isActive
    ? `${speedToSemitones(speed, 1)} st`
    : 'off';
}
