export function getPlayer(): HTMLVideoElement {
  return document.getElementsByClassName('video-stream html5-main-video')[0] as HTMLVideoElement;
}
