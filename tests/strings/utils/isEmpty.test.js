import { isEmpty } from '../../../strings/utils/isEmpty';
import { testString } from '../../constants.js';

test('should return true if the string is empty', () => {
  expect(isEmpty('')).toBe(true);
});

test('should return true if the string contains only whitespace', () => {
  expect(isEmpty('   ')).toBe(true);
});

test('should return true if the string contains only newline or zero width characters', () => {
  expect(isEmpty('\n' + '\u200B')).toBe(true);
});

test('should return false if the string has characters', () => {
  expect(isEmpty(testString)).toBe(false);
});
