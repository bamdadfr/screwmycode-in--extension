import {createChange} from './create-change';

export function createIncreaseButton(): HTMLSpanElement {
  const text = 'up';
  return createChange({text, 'increase': true});
}
