import {determineMethodToInvokeBasedOnRequestType as methodUnderTest} from '../determine-method-to-invoke-based-on-request-type';

describe('figure out method to invoke based on request type', () => {

  describe('intent types', () => {
    it('is a custom request so call fetch news', () => {
      const request = {type: "IntentRequest", intent: {name: "BlizzardNewsFlash"}};
      expect(methodUnderTest(request).name).to.equal('fetchNewsToSpeak');
    });

    it('is a stop request', () => {
      const request = {
        type: "IntentRequest",
        intent: {
          name: "AMAZON.StopIntent",
          slots: {}
        }
      };

      expect(methodUnderTest(request).name).to.equal('stopRequest');
    });

    it('is a cancel request', () => {
      const request = {
        type: "IntentRequest",
        intent: {
          name: "AMAZON.CancelIntent",
          slots: {}
        }
      };

      expect(methodUnderTest(request).name).to.equal('stopRequest');
    });

    it('is a help request', () => {
      const request = {
        type: "IntentRequest",
        intent: {
          name: "AMAZON.HelpIntent",
          slots: {}
        }
      };

      expect(methodUnderTest(request).name).to.equal('launchRequest');
    });
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
