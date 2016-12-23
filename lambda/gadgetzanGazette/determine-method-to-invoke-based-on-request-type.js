import {fetchNewsToSpeak} from './fetch-news-to-speak';
import {launchRequest, badRequest, sessionEndedRequest} from './other-requests';

export const determineMethodToInvokeBasedOnRequestType = (request) => {
  let methodName;
  switch (request.type) {
    case "IntentRequest":
      methodName = fetchNewsToSpeak;
      break;
    case "LaunchRequest":
      methodName = launchRequest;
      break;
      break;
    case "SessionEndedRequest":
      methodName = sessionEndedRequest;
      break;
    default:
      methodName = badRequest
  }

  return methodName;
}
