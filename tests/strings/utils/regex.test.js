import { doubleQuotedText, html, newLines, punctuation, quotes, singleQuotedText, symbols, whitespace, zeroWidthCharacters } from '../../../strings/utils/regex.js';
import { testString} from '../../constants.js';

test('should match html', () => {
  expect(`${testString}<p>`.match(html)).not.toEqual(null);
});

test('should match new lines', () => {
  expect(`${testString}\n`.match(newLines)).not.toEqual(null);
});

test('should match punctuation', () => {
  expect(`${testString}!`.match(punctuation)).not.toEqual(null);
});

test('should match single quoted text', () => {
  expect(`${testString}'text'`.match(singleQuotedText)).not.toEqual(null);
});

test('should match double quoted text', () => {
  expect(`${testString}"text"`.match(doubleQuotedText)).not.toEqual(null);
});

test('should match quotes', () => {
  expect(`${testString}"'`.match(quotes)).not.toEqual(null);
});

test('should match symbols', () => {
  expect(`${testString}@`.match(symbols)).not.toEqual(null);
});

test('should match whitespace', () => {
  expect(`${testString}  `.match(whitespace)).not.toEqual(null);
});

test('should match zero width characters', () => {
  expect(`${testString}\u200B`.match(zeroWidthCharacters)).not.toEqual(null);
});
