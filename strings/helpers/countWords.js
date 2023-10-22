import { validate } from '../utils/validate.js';
import { stripText } from '../utils/stripText.js';
import { errorCallback } from '../../globals/errorCallback.js';

/**
 * Counts the number of words in the provided string.
 * @param {string} string - String to be evaluated.
 */
export const countWords = (string) => {
  const str = validate(string, errorCallback);

  return stripText(str).split(' ').length;
};

const testCountWords = () => {
  const input = ' actual  string "bob"  /n';
  const expected = 3;
  const actual = countWords(input);

  console.log('Expected: ', expected);
  console.log('Actual: ', actual);

  console.log('should match expected result: ', actual === expected);
  // should return an accurate count of words
  // should not count special characters
  // should not count quoted text as one word
  // should error if input is invalid
};
