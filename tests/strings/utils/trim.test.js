import { trim } from '../../../strings/utils/trim.js';
import { testString } from '../../constants.js';

test('should remove excess whitespace', () => {
  expect(trim(testString + '          ')).toBe(testString);
});

test('should remove preceding whitespace', () => {
  expect(trim(' ' + testString)).toBe(testString);
});

test('should remove trailing whitespace', () => {
  expect(trim(testString + ' ')).toBe(testString);
});

test('should remove new line characters', () => {
  expect(trim(testString + '\n')).toBe(testString);
});

test('should remove zero width characters', () => {
  expect(trim(testString + '\u200B')).toBe(testString);
});
