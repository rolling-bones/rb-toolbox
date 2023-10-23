import { testString } from '../../constants.js';
import { invalidInput, notAString } from '../../../globals/errorMessages.js';
import { removePunctuation } from '../../../strings/helpers/removePunctuation.js';

test('should remove punctuation from the input string', () => {
  expect(removePunctuation(`${testString}!?.,`)).toBe(testString);
});

test('should error if the input string is invalid', () => {
  expect(() => removePunctuation(4)).toThrow(
    invalidInput + notAString + 'number',
  );
});
