import {determineMethodToInvokeBasedOnRequestType as getSpokenWords} from './determine-method-to-invoke-based-on-request-type';

export const hello = (event, context, callback) => {
  getSpokenWords(event.request)(event.request).then((outcome) => {
    const response = {
      version: '1.0',
      response: {
        shouldEndSession: outcome.shouldSessionEnd,
        outputSpeech: {
          type: 'SSML',
          ssml: `${outcome.utterance}`
        }
      }
    };

    callback(null, response);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
