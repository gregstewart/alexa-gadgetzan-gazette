import sinon from 'sinon';
import {launchRequest, badRequest, sessionEndedRequest} from '../other-requests';

describe('Launch requests', () => {
  it('prompts me for something to ask', (done) => {
    const expected = {utterance: '<speak>You can ask me for todays Blizzard news</speak>', shouldSessionEnd: false};
    expect(launchRequest()).to.eventually.deep.equal(expected).notify(done);
  });
});

describe('Bad requests', () => {
  it('tells me I made a mistake', (done) => {
    const expected = {utterance: '<speak>Sorry, I did not understand what you news you were after.</speak>', shouldSessionEnd: true};
    expect(badRequest()).to.eventually.deep.equal(expected).notify(done);
  });
});

describe('Session ended requests', () => {
  it('just logs to the console', () => {
    sinon.spy(console, 'log');
    const expected = 'Some Reason'
    sessionEndedRequest(expected).then(() => {
      expect(console.log).to.have.been.calledWith('Session ended', expected);
    });
  });
});
