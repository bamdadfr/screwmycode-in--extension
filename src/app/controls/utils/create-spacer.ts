/**
 * @returns {HTMLSpanElement} controls spacer span
 */
export function createSpacer(): HTMLSpanElement {
  const spacer = document.createElement('span');

  spacer.style.marginRight = '5px';

  return spacer;
}
