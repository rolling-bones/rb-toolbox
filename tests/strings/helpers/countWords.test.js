import { countWords } from '../../../strings/helpers/countWords.js';
import { testString } from '../../constants.js';
import { invalidInput, notAString } from '../../../globals/errorMessages.js';

test('should return an accurate count of how many words appears in a string', () => {
  expect(countWords(testString)).toBe(2);
});

test('should not count quoted text as one word', () => {
  expect(countWords(`${testString} ${testString}`)).toBe(4);
});

test('should error if the input string is invalid', () => {
  expect(() => countWords(4)).toThrow(
    invalidInput + notAString + 'number',
  );
});
