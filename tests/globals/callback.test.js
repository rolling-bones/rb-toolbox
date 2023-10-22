import { callback } from '../../globals/callback.js';
import { testString } from '../constants.js';

test('should return an error if an error is passed', () => {
  expect(callback(testString, null)).toBe(testString);
});

test('should return a response if no error is passed', () => {
  expect(callback(null, testString)).toBe(testString);
});
