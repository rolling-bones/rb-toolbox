import { errorCallback } from '../../globals/errorCallback.js';
import { testString } from '../constants.js';

test('should return an error if an error is passed', () => {
  expect(() => errorCallback(testString, null)).toThrow(testString);
});

test('should return a response if no error is passed', () => {
  expect(errorCallback(null, testString)).toBe(testString);
});
