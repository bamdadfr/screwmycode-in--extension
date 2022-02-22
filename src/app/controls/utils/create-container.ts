export function createContainer(id: string): HTMLDivElement {
  const container = document.createElement('div');

  container.id = id;
  container.classList.add('ytp-time-display', 'notranslate');
  container.style.userSelect = 'none';

  return container;
}
