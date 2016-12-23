import {launchRequest, badRequest} from '../other-requests';

describe('Launch requests', () => {
  it('prompts me for something to ask', (done) => {
    const expected = '<speak>Hmm <break time=\"1s\"/> Why not ask me to give you the latest Blizzard news?</speak>';
    expect(launchRequest()).to.eventually.equal(expected).notify(done);
  });
});

describe('Bad requests', () => {
  it('tells me I made a mistake', (done) => {
    const expected = '<speak>Sorry, I did not understand what you news you were after.</speak>'
    expect(badRequest()).to.eventually.equal(expected).notify(done);
  });
});
