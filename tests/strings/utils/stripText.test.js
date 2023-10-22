import { stripText } from '../../../strings/utils/stripText.js';
import { testString } from '../../constants.js';

test('should remove symbols', () => {
  expect(stripText(testString + '`~@#$%^&*()_-=+}[{];:/|')).toBe(testString);
});

test('should remove punctuation', () => {
  expect(stripText(testString + '.,?!')).toBe(testString);
});

test('should remove single quotes', () => {
  expect(stripText(testString + "'")).toBe(testString);
});

test('should remove double quotes', () => {
  expect(stripText(testString + '""')).toBe(testString);
});

test('should trim the string', () => {
  expect(stripText(testString + '\n\u200B')).toBe(testString);
});
