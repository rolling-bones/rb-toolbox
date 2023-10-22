import { validateString } from "../validationUtils/validateString.js";
import {stripText } from "../stringUtils/stripText.js";

/**
 * Counts the number of times the target word appears in the string.
 * @param {string} string - String to be evaluated.
 * @param {string} target - Target word to be searched for.
 */

export const countWord = (string, target) => {
  const str = validateString(string);
  const regExp = new RegExp(target, 'gi');

  return (stripText(str).match(regExp) || []).length;
};

const testCountWord = () => {
  const input = ' actual  string "bob"  /n actual "actual actual"';
  const expected = 4;
  const actual = countWord(input);

  console.log('Expected: ', expected);
  console.log('Actual: ', actual);

  console.log('should match expected result: ', actual === expected);
  // should return an accurate count of how many times a substring appears in a string
  // should not count special characters
  // should not count quoted text as one word
  // should error if input is invalid
};