import { trim } from '../stringUtils/trim';

test('should remove double spaces', () => {
  expect(trim('a  b')).toBe('a b');
});

test('should remove preceding whitespace', () => {
  expect(trim(' ab')).toBe('ab');
});

test('should remove trailing whitespace', () => {
  expect(trim('ab ')).toBe('ab');
});

test('should remove new line characters', () => {
  expect(trim('hello world\n')).toBe('hello world');
});
