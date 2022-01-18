import {createChange} from './create-change';

/**
 * @returns {HTMLSpanElement} increase button
 */
export function createIncreaseButton() {
  const text = 'up';

  return createChange({text, 'increase': true});
}
