import {fetchNewsToSpeak} from './fetch-news-to-speak';

export const determineMethodToInvokeBasedOnRequestType = (request) => {
  let methodName;
  switch (request.type) {
    case "IntentRequest":
      methodName =  fetchNewsToSpeak;
      break;
    default:

  }

  return methodName;
}
