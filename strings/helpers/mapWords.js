import { validate } from "../utils/validate.js";
import { stripText } from "../utils/stripText.js";
import { errorCallback } from "../../globals/errorCallback.js";

export const mapWords = (string) => {
  const str = validate(string, errorCallback);

  const wordArray = stripText(str).split(' ');
  const wordMap = Object.create(null);

  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i];

    if (!wordMap[word]) {
      wordMap[word] = 1;
    } else {
      wordMap[word]++;
    }
  }
  return wordMap;
};
