import { invalidInput, notAString } from '../../globals/errorMessages.js';
import { isEmpty } from './isEmpty.js';

/**
 * Determines if a string is valid.
 * @param {string} string - String to checked.
 * @param {Function} cb - Callback function to relay the result.
 */
export const validate = (string, cb) => {
  const inputType = typeof string;

  if (inputType !== 'string') {
    throw new Error(invalidInput + notAString + inputType);
  }

  if (isEmpty(string)) {
    throw new Error(invalidInput + notAString + 'empty string');
  }

  return cb(null, string);
};
