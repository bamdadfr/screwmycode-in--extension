import {createContainer} from './utils/create-container';
import {createPercentage} from './utils/create-percentage';
import {createSemitones} from './utils/create-semitones';
import {createIncreaseButton} from './utils/create-increase-button';
import {createDecreaseButton} from './utils/create-decrease-button';
import {createSpacer} from './utils/create-spacer';
import {CONTROLS_ID} from '../constants';

/**
 * @description create controls inside the youtube player
 */
export async function createControls() {
  if (document.getElementById(CONTROLS_ID) !== null) {
    return;
  }

  const parent = document.getElementsByClassName('ytp-time-display notranslate')[0];
  const container = createContainer(CONTROLS_ID);
  const percentage = await createPercentage();
  const semitones = await createSemitones();
  const increase = createIncreaseButton();
  const decrease = createDecreaseButton();
  const spacer = createSpacer();

  // rendering
  container.appendChild(decrease);
  container.appendChild(spacer);
  container.appendChild(increase);
  container.appendChild(spacer.cloneNode());
  container.appendChild(percentage);
  container.appendChild(spacer.cloneNode());
  container.appendChild(semitones);

  if (parent) {
    parent.parentNode.appendChild(container);
  }

  // todo add android controls
}
