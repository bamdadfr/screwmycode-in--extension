import {createChange} from './create-change';

export function createDecreaseButton(): HTMLSpanElement {
  const text = 'down';
  return createChange({text, 'increase': false});
}
