import { doubleSpaces, zeroWidthCharacters } from './regex.js';

/**
 * Trims excess whitespace from a string.
 * @param {string} string - String to be trimmed.
 */

export const trim = (string) => {
  return string
    .replace(doubleSpaces, ' ')
    .replace(zeroWidthCharacters, '')
    .trim();
};

const testTrim = () => {
  const input = ' actual  string ';
  const expected = 'actual string';
  const actual = trim(input);

  console.log('Expected: ', expected);
  console.log('Actual: ', actual);

  console.log('should match expected result: ', actual === expected);
  // should remove double spaces
  // should remove preceding whitespace
  // should remove trailing whitespace
  // should remove zero width characters
  // should error if input is invalid
};
