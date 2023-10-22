import { stripText } from '../stringUtils/stripText';

test('should remove symbols', () => {
  expect(stripText("dogs don't run straight!")).toBe('dogs dont run straight');
});

test('should remove symbols', () => {
  expect(stripText('dogs run straight!')).toBe('dogs run straight');
});
