import { validate } from "../utils/validate.js";
import { errorCallback } from "../../globals/errorCallback.js";
import { trim } from "../utils/trim.js";
import { singleQuotedText, doubleQuotedText } from "../utils/regex.js";

export const removeQuotedText = (string) => {
  const str = validate(string, errorCallback);

  return trim(
    str
      .replace(singleQuotedText, '')
      .replace(doubleQuotedText, '')
  );
};
