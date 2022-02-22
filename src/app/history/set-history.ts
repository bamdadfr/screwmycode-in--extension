import {State} from '../common/state';

export async function setHistory(): Promise<void> {
  const {speed, isActive} = await State.get();
  const url = new URL(window.location.href);

  // stateless
  if (!isActive || speed === 1) {
    url.searchParams.delete('speed');
    window.history.replaceState({}, '', url.toString());
    return;
  }

  // stateful
  const querySpeed = url.searchParams.get('speed');
  if (speed === parseFloat(querySpeed)) {
    return;
  }

  url.searchParams.set('speed', speed.toString());
  window.history.replaceState({}, '', url.toString());
}
