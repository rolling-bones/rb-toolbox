import { trim } from './trim.js';
import { punctuation, quotes, symbols } from './regex.js';

/**
 * Trims and strips a string of symbols, quotations and punctuation.
 * @param {string} string - String to be stripped.
 */
export const stripText = (string) => {
  const str = trim(string);

  return str
    .replace(symbols, '')
    .replace(punctuation, '')
    .replace(quotes, '');
};
