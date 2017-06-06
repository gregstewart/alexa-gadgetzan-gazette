import {fetchNewsToSpeak} from './fetch-news-to-speak';
import {launchRequest, badRequest, sessionEndedRequest, stopRequest} from './other-requests';

const determineSpecificIntent = (name) => {
  if (name === 'AMAZON.StopIntent' || name === 'AMAZON.CancelIntent') {
    return stopRequest;
  }

  if (name === 'AMAZON.HelpIntent') {
    return launchRequest;
  }

  return fetchNewsToSpeak;
}

export const determineMethodToInvokeBasedOnRequestType = (request) => {
  let methodName;
  switch (request.type) {
    case "IntentRequest":
      methodName = determineSpecificIntent(request.intent.name);
      break;
    case "LaunchRequest":
      methodName = launchRequest;
      break;
    case "SessionEndedRequest":
      methodName = sessionEndedRequest;
      break;
    default:
      methodName = badRequest
  }

  return methodName;
}
