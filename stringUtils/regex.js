export const excessSpace = new RegExp(/\s+/g);

export const html = new RegExp(/<[^>]*>/g);

export const newLines = new RegExp(/(\r\n|\n|\r)/gm);

export const quotedText = new RegExp(/"[^"]*"/g);

export const quotes = new RegExp(/['"]+/g);

export const symbols = new RegExp(/[\/[#$%\^&\*\];:{}=\-_`~()|@+]/g);

export const zeroWidthCharacters = new RegExp(/[\u200B-\u200D\uFEFF]/g);

const testRegex = () => {
  console.log(
    'should remove excess whitespace',
    '  bob  and   tom'.replace(excessSpace, '') === 'bob and tom',
  );
  console.log(
    'should remove html',
    '<p>Some paragraph</p>'.replace(html, '') === 'Some paragraph',
  );
  console.log(
    'should remove new lines',
    '\ntom\r Paragraph\r\n bob'.replace(newLines, '') === 'tom Paragraph bob',
  );
  console.log(
    'should remove quoted text',
    'Bob said "Hi"'.replace(quotedText, '') === 'Bob said ',
  );
  console.log(
    'should remove double quotation marks',
    'Bob said "Hi"'.replace(quotes, '') === 'Bob said Hi',
  );
  console.log(
    'should remove single quotation marks',
    "Bob said 'Hi'".replace(quotes, '') === 'Bob said Hi',
  );
  console.log(
    'should remove single quotation marks',
    'Bob|[#$%^&*;:{}=_`~()/]+@-,.!?'.replace(symbols, '') === 'Bob,.!?',
  );
  console.log(
    'should not remove normal spaces',
    'bob and   tom'.replace(zeroWidthCharacters, '') === 'bob and   tom',
  );
}
