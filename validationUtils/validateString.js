import { invalidInput, notAString } from './errorMessages.js';
import { isEmpty } from '../stringUtils/isEmpty.js';

/**
 * Determines if a string is valid.
 * @param {string} string - String to checked.
 * @param {Function} cb - Callback function to relay the result.
 */

export const validateString = (string, cb) => {
  const inputType = typeof string;

  if (inputType !== 'string') {
    throw new Error(invalidInput + notAString + inputType);
  }
  
  if (isEmpty(string)) {
    throw new Error(invalidInput + notAString + 'empty string');
  }

  return cb(null, string);
};

const testValidateString = () => {
  const input = 'actual string';
  const expected = 'actual string';

  const actual = validateString(input, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      return result;
    }
  });

  console.log('Expected: ', expected);
  console.log('Actual: ', actual);

  console.log('should match expected result: ', actual === expected);
  // should not error if input is a string and is not empty
  // should error if input is an empty string
  // should error if input is not a string
};
