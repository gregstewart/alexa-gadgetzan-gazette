'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: {
          type: 'SSML',
          ssml: '<speak>Welcome to the Gadgetzan Gazette!</speak>'
        }
      }
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
