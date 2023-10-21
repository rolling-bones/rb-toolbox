import { trim } from './trim.js';

/**
 * Determines if a string is empty.
 * @param {string} string - String to checked.
 */

export const isEmpty = (string) => {
  const str = trim(string);

  return !str.length;
};

const testIsEmpty = () => {
  console.log(
    'should return false if input is not empty: ',
    isEmpty(' actual  string ') === false,
  );

  console.log(
    'should return true if input is empty: ',
    isEmpty('  ') === true,
  );
  // should return false if input is not empty
  // should return true if input is empty
};
