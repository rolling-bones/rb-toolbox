import { validate } from '../utils/validate.js';
import { stripText } from '../utils/stripText.js';
import { errorCallback } from '../../globals/errorCallback.js';

/**
 * Counts the number of times the target word appears in the provided string.
 * @param {string} string - String to be evaluated.
 * @param {string} target - Target word to be searched for.
 */
export const countWord = (string, target) => {
  const str = validate(string, errorCallback);
  const tgt = validate(target, errorCallback);

  const regExp = new RegExp(tgt, 'gi');

  return (stripText(str).match(regExp) || []).length;
};
