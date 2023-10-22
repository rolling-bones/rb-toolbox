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
// should remove double spaces
// should remove preceding whitespace
// should remove trailing whitespace
// should remove zero width characters
// should remove new lines characters
// should error if input is invalid
