/**
 * @param {string} id HTML #id
 * @returns {HTMLDivElement} controls container
 */
export function createContainer(id) {
  const container = document.createElement('div');
  container.classList.add('ytp-time-display', 'notranslate');
  container.id = id;
  container.style = 'user-select: none;';
  return container;
}
