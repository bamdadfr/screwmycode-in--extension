import {RETRY} from '../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resolveOrRetry(callback: (resolve: any, retry: () => void) => void): Promise<any> {
  return new Promise((resolve) => {
    const retry = () => setTimeout(() => callback(resolve, retry), RETRY);
    return callback(resolve, retry);
  });
}
