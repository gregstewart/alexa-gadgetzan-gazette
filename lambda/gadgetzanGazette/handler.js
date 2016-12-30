import {determineMethodToInvokeBasedOnRequestType as getSpokenWords} from './determine-method-to-invoke-based-on-request-type';

export const hello = (event, context, callback) => {
  const body = JSON.parse(event.body);
  getSpokenWords(body.request)(body.request).then((outcome) => {
    console.log(outcome);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        version: '1.0',
        response: {
          shouldEndSession: outcome.shouldEndSession,
          outputSpeech: {
            type: 'SSML',
            ssml: `${outcome.utterance}`
          }
        }
      }),
    };

    callback(null, response);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
