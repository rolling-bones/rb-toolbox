import { mapWords } from "../../../strings/helpers/mapWords.js";
import { testString } from "../../constants.js";
import { invalidInput, notAString } from "../../../globals/errorMessages.js";

test('should return an accurate map of how many times each word appears in the input string', () => {
  const result = mapWords(`${testString } ${testString}`);

  expect(result.test).toBe(2);
  expect(result.string).toBe(2);
});

test('should not count quoted text as one word', () => {
  const result = mapWords(`${testString} "${testString}"`);

  expect(result.test).toBe(2);
  expect(result.string).toBe(2);
});

test('should error if the input string is invalid', () => {
  expect(() => mapWords(4)).toThrow(invalidInput + notAString + 'number');
});
