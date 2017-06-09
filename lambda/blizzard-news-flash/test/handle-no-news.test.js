import sinon from 'sinon';
import {handleNoNews} from '../handle-no-news';

describe('handle no news', () => {
  let clock;
  before(() => {
    clock = sinon.useFakeTimers(new Date('2016-12-15').getTime());
  });

  after(() => {
    clock.restore();
  });

  describe('when nothing is passed in', () => {
    it('returns an apology', () => {
      const slots = {};
      const noNewsResponse = handleNoNews(slots);
      const expected = `<speak><p>Sorry the Blizzard News Flash has no news. Please try again tomorrow.</p></speak>`;

      expect(noNewsResponse).to.equal(expected);
    });
  });

  describe('for a given game', () => {
    it('returns an apology with the game name', () => {
      const slots = {
        "Game": {
          "name": "Game",
          "value": "Heroes of the Storm"
        }
      };
      const noNewsResponse = handleNoNews(slots);
      const expected = `<speak><p>Sorry the Blizzard News Flash has no news for Heroes of the Storm.</p></speak>`;

      expect(noNewsResponse).to.equal(expected);
    });
  });

  describe('for a given date', () => {
    it('returns an apology for today and suggests you ask for yesterday\'s news', () => {
      const slots = {
        "Date": {
          "name": "Date",
          "value": "2016-12-15"
        }
      };
      const noNewsResponse = handleNoNews(slots);
      const expected = `<speak><p>Sorry the Blizzard News Flash has no news today. You can try to ask me about yesterday's news.</p></speak>`;

      expect(noNewsResponse).to.equal(expected);
    });

    it('returns an apology for yesterday and suggests you ask for the previous day\'s news', () => {
      const slots = {
        "Date": {
          "name": "Date",
          "value": "2016-12-14"
        }
      };
      const noNewsResponse = handleNoNews(slots);
      const expected = `<speak><p>Sorry the Blizzard News Flash had no news yesterday. You can try to ask me about news for the 13th of December 2016.</p></speak>`;

      expect(noNewsResponse).to.equal(expected);
    });

    it('returns an apology for any date in the past', () => {
      const slots = {
        "Date": {
          "name": "Date",
          "value": "2016-12-09"
        }
      };
      const noNewsResponse = handleNoNews(slots);
      const expected = `<speak><p>Sorry the Blizzard News Flash had no news for the 9th of December 2016. You can try to ask me about today's, yesterday's or another day's news.</p></speak>`;

      expect(noNewsResponse).to.equal(expected);
    });
  });

  describe('for a given game and a given date', () => {
    it('returns an apology', () => {
      const slots = {
        "Game": {
          "name": "Game",
          "value": "Heroes of the Storm"
        },
        "Date": {
          "name": "Date",
          "value": "2016-12-15"
        }
      };
      const noNewsResponse = handleNoNews(slots);
      const expected = `<speak><p>Sorry the Blizzard News Flash has no news for Heroes of the Storm today. You can try to ask me about yesterday's news.</p></speak>`;
      expect(noNewsResponse).to.equal(expected);
    });
  });
});
