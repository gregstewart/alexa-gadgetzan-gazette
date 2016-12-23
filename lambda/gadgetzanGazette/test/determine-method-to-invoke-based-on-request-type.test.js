import {determineMethodToInvokeBasedOnRequestType as methodUnderTest} from '../determine-method-to-invoke-based-on-request-type';

describe('figure out method to invoke based on request type', () => {
  it('is an intent request, so call fetch news', () => {
    const request = {type: "IntentRequest"};
    expect(methodUnderTest(request).name).to.equal('fetchNewsToSpeak');
  });

  it('is a launch request, so call launch request', () => {
    const request = {type: "LaunchRequest"};
    expect(methodUnderTest(request).name).to.equal('launchRequest');
  });

  it('handles session ended requests', () => {
    const request = {type: "SessionEndedRequest", reason: "Foo"};
    expect(methodUnderTest(request).name).to.equal('sessionEndedRequest');
  });

  it('handles errors', () => {
    const request = {type: "BAD"}
    expect(methodUnderTest(request).name).to.equal('badRequest');
  });
});
