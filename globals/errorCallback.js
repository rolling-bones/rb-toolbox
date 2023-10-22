/**
 * Callback function that throws an error or returns a response.
 * @param {Error} error - Error to be thrown.
 * @param {any} response - Response to be returned if no error was thrown.
 */
export const errorCallback = (error, response) => {
  if (error) {
    throw new Error(error);
  } else {
    return response;
  }
};

const testErrorCallback = () => {
  const error = 'Error Message';
  const response = 'OK';

  console.log(
    'should throw an error if an error is passed: ',
    errorCallback(error, null) === error,
  );
  console.log(
    'should return response if there are no errors: ',
    errorCallback(null, response) === response,
  );
};
