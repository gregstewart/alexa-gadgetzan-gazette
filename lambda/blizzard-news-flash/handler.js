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
          ssml: 'Go Serverless v1.0! Your function executed successfully!'
        }
      }
    }),
  };

  callback(null, response);
};
