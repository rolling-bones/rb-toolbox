/**
 * General callback function that returns an error or a response.
 * @param {Error} error - Error to be thrown.
 * @param {any} response - Response to be returned if no error was thrown.
 */
export const callback = (error, response) => {
  if (error) {
    return error;
  } else {
    return response;
  }
};
