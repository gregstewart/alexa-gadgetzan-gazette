import {determineMethodToInvokeBasedOnRequestType as getSpokenWords} from './determine-method-to-invoke-based-on-request-type';

export const hello = (event, context, callback) => {
  const body = JSON.parse(event.body);
  getSpokenWords(body.request)(body.request).then((spokenWords) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        version: '1.0',
        response: {
          shouldEndSession: true,
          outputSpeech: {
            type: 'SSML',
            ssml: `${spokenWords}`
          }
        }
      }),
    };

    callback(null, response);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
