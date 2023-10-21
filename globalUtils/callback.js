/**
 * General callback function that throws an error or returns a response.
 * @param {Error} error - Error to be thrown.
 * @param {any} response - Response to be returned if no error was thrown.
 */

export const callback = (error, response) => {
  if (error) {
    throw new Error(error);
  } else {
    return response;
  }
};

const testCallback = () => {
  const error = 'Error Message';
  const response = 'OK';

  console.log(
    'should return error if an error is passed: ',
    callback(error, null) === error,
  );
  console.log(
    'should return response if there are no errors: ',
    callback(null, response) === response,
  );
};
