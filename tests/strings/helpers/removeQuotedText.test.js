import { testString } from '../../constants.js';
import { invalidInput, notAString } from '../../../globals/errorMessages.js';
import { removeQuotedText } from '../../../strings/helpers/removeQuotedText.js';

test('should remove single quoted text from the input string', () => {
  expect(removeQuotedText(`${testString} 'quote'`)).toBe(testString);
});

test('should remove double quoted text from the input string', () => {
  expect(removeQuotedText(`${testString} "quote"`)).toBe(testString);
});

test('should error if the input string is invalid', () => {
  expect(() => removeQuotedText(4)).toThrow(invalidInput + notAString + 'number');
});
