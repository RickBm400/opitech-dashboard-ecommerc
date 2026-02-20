/**
 * Debounce function to limit the rate at which a function can fire.
 *
 * @export
 * @param {Function} fn
 * @param {number} [delay=1000]
 * @returns {(...args: {}) => void}
 */
export function useDebounce(fn: Function, delay = 1000) {
  let timeout: any;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
