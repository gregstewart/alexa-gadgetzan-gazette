import {determineMethodToInvokeBasedOnRequestType as methodUnderTest} from '../determine-method-to-invoke-based-on-request-type';

describe('figure out method to invoke based on request type', () => {
  it('is an intent request, so call fetch news', () => {
    const request = {type: "IntentRequest"};
    expect(methodUnderTest(request).name).to.equal('fetchNewsToSpeak');
  });
});
