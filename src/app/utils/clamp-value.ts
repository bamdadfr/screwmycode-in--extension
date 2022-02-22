export function clampValue(v: number, min: number, max: number): number {
  if (typeof v === 'undefined') {
    throw new Error('v is not defined');
  }

  if (typeof min === 'undefined') {
    throw new Error('min is not defined');
  }

  if (typeof max === 'undefined') {
    throw new Error('max is not defined');
  }

  let value = v;

  if (value < min) {
    value = min;
  }

  if (value > max) {
    value = max;
  }

  return value;
}
