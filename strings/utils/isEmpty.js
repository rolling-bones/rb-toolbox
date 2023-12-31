import { trim } from './trim.js';

/**
 * Determines if a string is empty.
 * @param {string} string - String to be checked.
 */
export const isEmpty = (string) => {
  const str = trim(string);

  return !str.length;
};
