export default {};

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface HTMLVideoElement {
    mozPreservesPitch: boolean;
    preservesPitch: boolean;
  }
}
