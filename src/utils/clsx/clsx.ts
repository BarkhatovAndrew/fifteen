/* eslint-disable */
// @ts-nocheck

/**
 * CLSX utility, lite version
 * https://github.com/lukeed/clsx/blob/master/src/lite.js
 */
export const clsx = (...args) => {
  var i = 0,
    tmp,
    str = '',
    len = args.length
  for (; i < len; i++) {
    if ((tmp = args[i])) {
      if (typeof tmp === 'string') {
        str += (str && ' ') + tmp
      }
    }
  }
  return str
}
