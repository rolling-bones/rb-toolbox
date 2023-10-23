import { validate } from "../utils/validate.js";
import { trim } from "../utils/trim.js";
import { errorCallback } from "../../globals/errorCallback.js";
import { punctuation } from "../utils/regex.js";

export const removePunctuation = (string) => {
  const str = validate(string, errorCallback);

  return trim(str.replace(punctuation, ''));
};
