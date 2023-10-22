import { isEmpty } from '../stringUtils/isEmpty';

test('should return true if the string is empty', () => {
  expect(isEmpty('')).toBe(true);
});

test('should return false if the string has characters', () => {
  expect(isEmpty(' hello  world ')).toBe(false);
});

test('should return true if the string has no characters and has empty spaces', () => {
  expect(isEmpty('   ')).toBe(true);
});
