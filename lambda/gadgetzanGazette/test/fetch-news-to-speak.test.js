import nock from 'nock';
import fs from 'fs';

import {fetchNewsToSpeak} from '../fetch-news-to-speak';

describe('test integration', () => {
  let html, alexa;
  beforeEach(() => {
    alexa = JSON.parse(fs.readFileSync('./test/fixtures/alexa-request.json', 'utf8'));
    html = fs.readFileSync('./test/fixtures/icy-veins.html', 'utf8');
    nock('http://www.icy-veins.com')
      .get('/')
      .reply(200, html);
  });

  it('returns the expected response when content is found', (done) => {
    const expected = `<speak><p>Welcome to the Gadgetzan Gazette!</p><p>Here is the news from Icy Veins.</p><p>In World of Warcraft news: Patch 7.1.5 Build 23244: Class Changes</p><p>Class changes related to the latest build of Patch 7.1.5.</p><p>In Diablo III news: Facebook Live Q/A: Dec 15</p><p>Diablo\'s getting a Q/A on Facebook Live today. Joe Senior Game Designer Joe Shely will be answering your questions.</p><p>In World of Warcraft news: Patch 7.1.5 Build 23244: Legendary Item Changes</p><p>Following the announcement of future changes to legendaries on PTR, Build 23244 has arrived and many legendary items have been nerfed.</p><p>In Heroes of the Storm news: Ragnaros Build Guide</p><p>Our guide section has been updated to include Ragnaros, the Firelord!</p><p>This concludes our news roundup.</p></speak>`
    fetchNewsToSpeak(alexa.request).then((response) => {
      expect(response).to.equal(expected);
      done()
    }).catch((error) => {
      console.log(error);
      expect(error).to.be.undefined;
    });
  });
});
