import { trim } from './trim.js';

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
