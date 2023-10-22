import { validate } from "../../../strings/utils/validate";
import { callback } from "../../../globals/callback";
import { noop, testString } from "../../constants.js";
import { invalidInput, notAString } from "../../../globals/errorMessages";

test('should return the input if the input is a valid string', () => {
  expect(validate(testString, callback)).toBe(testString);
});

  test('should throw an error if the input is not a string', () => {
  expect(() => validate(4, noop)).toThrow(
    invalidInput + notAString + 'number',
  );
});

  test('should throw an error if the input is an empty string', () => {
    expect(() => validate('  ', noop)).toThrow(
      invalidInput + notAString + 'empty string',
    );
  });
