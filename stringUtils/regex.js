export const doubleSpaces = new RegExp(/\s{2,}/g);

export const html = new RegExp(/[&<>"']/gi);

export const newLines = new RegExp(/[\n\r]/g);

// TODO: Make sure this is global
// export const paragraphBreaks = new RegExp(/\n /, '\n');

export const quotedText = new RegExp(/"[^"]*"/g);

export const quotes = new RegExp(/['"]+/g);

export const symbols = new RegExp(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g);

export const zeroWidthCharacters = new RegExp(/[\u200B-\u200D\uFEFF]/g);
