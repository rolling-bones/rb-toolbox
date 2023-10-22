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
