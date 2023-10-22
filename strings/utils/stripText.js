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

const testStripText = () => {
  const input =
    'Heading:   A string to test that my functions are working properly. "Very cool."  she said.:@!#$%^&*()  \n';
  const expected =
    'Heading A string to test that my functions are working properly Very cool she said';
  const actual = stripText(input);

  console.log('Expected: ', expected);
  console.log('Actual: ', actual);

  console.log('should match expected result: ', actual === expected);
  // should remove symbols
  // should remove double spaces
  // should remove quotes
  // should remove excess whitespace
  // should remove new lines
  // should remove punctuation
};
