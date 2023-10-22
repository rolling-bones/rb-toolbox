export const whitespace = new RegExp(/\s+/g);

export const html = new RegExp(/<[^>]*>/g);

export const newLines = new RegExp(/(\r\n|\n|\r)/gm);

export const punctuation = new RegExp(/[,.!?]+/g);

export const quotedText = new RegExp(/"[^"]*"/g);

export const quotes = new RegExp(/['"]+/g);

export const symbols = new RegExp(/[\/[#$%\^&\*\];:{}=\-_`~()|@+]/g);

export const zeroWidthCharacters = new RegExp(/[\u200B-\u200D\uFEFF]/g);
