import {fetchNewsToSpeak} from './fetch-news-to-speak';
import {launchRequest, badRequest} from './other-requests';

export const determineMethodToInvokeBasedOnRequestType = (request) => {
  let methodName;
  switch (request.type) {
    case "IntentRequest":
      methodName = fetchNewsToSpeak;
      break;
    case "LaunchRequest":
      methodName = launchRequest;
      break;
    default:
      methodName = badRequest
  }

  return methodName;
}
