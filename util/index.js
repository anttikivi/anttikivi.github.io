/**
 * Creates a memoized version of the provided function. Caches the results of
 * function calls with specific arguments to avoid redundant computations.
 *
 * @template {(...args: any[]) => any} F
 * @param {F} fn - The function to memoize.
 * @returns {F} A new function that memoizes the results of `fn`.
 */
export function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const ret = fn.apply(this, args);
        cache.set(key, ret);
        return ret;
    };
}
