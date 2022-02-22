export function isPageWatch(): boolean {
  return /youtube(\.com)?\/watch\?v=/.exec(window.location.href) !== null;
}
