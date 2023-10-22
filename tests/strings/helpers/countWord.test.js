import { countWord } from '../../../strings/helpers/countWord.js';
import { testString } from '../../constants.js';
import { invalidInput, notAString } from '../../../globals/errorMessages.js';

const target = 'test';

test('should return an accurate count of how many times a word appears in a string', () => {
  expect(countWord(testString + testString, target)).toBe(2);
});

test('should not count quoted text as one word', () => {
  expect(countWord(testString + testString + '"test test"', target)).toBe(4);
});

test('should return zero if the target cannot be found', () => {
  expect(countWord(testString, 'target')).toBe(0);
});

test('should error if the input string is invalid', () => {
  expect(() => countWord(4, target)).toThrow(invalidInput + notAString + 'number');
});

test('should error if the target is invalid', () => {
  expect(() => countWord(testString, 4)).toThrow(
    invalidInput + notAString + 'number',
  );
});
