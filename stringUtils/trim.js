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

const testTrim = () => {
  const input = ' actual  str     ing\n';
  const expected = 'actual str ing';
  const actual = trim(input);

  console.log('Expected: ', expected);
  console.log('Actual: ', actual);

  console.log('should match expected result: ', actual === expected);
  // should remove double spaces
  // should remove preceding whitespace
  // should remove trailing whitespace
  // should remove zero width characters
  // should remove new lines characters
  // should error if input is invalid
};
