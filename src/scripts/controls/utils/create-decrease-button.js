import {createChange} from './create-change';

/**
 * @returns {HTMLSpanElement} decrease button
 */
export function createDecreaseButton() {
  const text = 'down';
  return createChange({text, 'increase': false});
}
