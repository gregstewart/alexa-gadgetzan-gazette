import {newsItems} from './fixtures/news';
import {formatToSSML} from '../format-to-ssml';

describe('format news to speak', () => {
  it('returns a string of content to be spoken', () => {
    const expected = "<speak><p>Welcome to the Gadgetzan Gazette!</p><p>Here is the news from Icy Veins</p><p>In World of Warcraft news: Patch 7.1.5 Build 23244: Class Changes</p><p>Class changes related to the latest build of Patch 7.1.5.</p><p>In Diablo III news: Facebook Live Q/A: Dec 15</p><p>Diablo's getting a Q/A on Facebook Live today. Joe Senior Game Designer Joe Shely will be answering your questions.</p></speak>"
    const items = newsItems.slice(0,2);

    expect(formatToSSML(items)).to.equal(expected);
  });
});
