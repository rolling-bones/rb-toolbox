import { newLines, whitespace, zeroWidthCharacters } from './regex.js';

/**
 * Trims excess whitespace from a string.
 * @param {string} string - String to be trimmed.
 */
export const trim = (string) => {
  return string
    .replace(newLines, ' ')
    .replace(whitespace, ' ')
    .replace(zeroWidthCharacters, '')
    .trim();
};
