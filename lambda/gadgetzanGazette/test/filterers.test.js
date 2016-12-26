import sinon from 'sinon';
import {subDays} from 'date-fns';

import {newsItems} from './fixtures/news';

import {filterByDate} from '../filters/by-dates';
import {filterByName} from '../filters/by-names';

describe('filter on', () => {
  describe('dates', () => {
    let clock;
    before(() => {
      clock = sinon.useFakeTimers(new Date('2016-12-15').getTime());
    });

    after(() => {
      clock.restore();
    });

    it('today\'s date when nothing is passed in', () => {
      const today = new Date();
      const filteredResults = filterByDate(newsItems);
      expect(filteredResults).to.have.lengthOf(4);
      expect(filteredResults[0].title).to.equal('Patch 7.1.5 Build 23244: Class Changes');
      expect(filteredResults[1].title).to.equal('Facebook Live Q/A: Dec 15');
      expect(filteredResults[2].title).to.equal('Patch 7.1.5 Build 23244: Legendary Item Changes');
      expect(filteredResults[3].title).to.equal('Ragnaros Build Guide');
    });

    it('today\'s date when passing today\'s date', () => {
      const today = new Date();
      const filteredResults = filterByDate(newsItems, today);
      expect(filteredResults).to.have.lengthOf(4);
      expect(filteredResults[0].title).to.equal('Patch 7.1.5 Build 23244: Class Changes');
      expect(filteredResults[1].title).to.equal('Facebook Live Q/A: Dec 15');
      expect(filteredResults[2].title).to.equal('Patch 7.1.5 Build 23244: Legendary Item Changes');
      expect(filteredResults[3].title).to.equal('Ragnaros Build Guide');
    });

    it('yesterday\'s date', () => {
      const yesterday = subDays(new Date(), 1);
      const filteredResults = filterByDate(newsItems, yesterday);
      expect(filteredResults).to.have.lengthOf(8);
      expect(filteredResults[0].title).to.equal('Gold Making: Daily Obliterum Routine');
      expect(filteredResults[7].title).to.equal('Substantial Legendary Changes Coming to PTR');
    });

    it('some other date', () => {
      const date = subDays(new Date(), 3);
      const filteredResults = filterByDate(newsItems, date);
      expect(filteredResults).to.have.lengthOf(4);
      expect(filteredResults[0].title).to.equal('Blizzard Launches Own Book-Publishing Label');
      expect(filteredResults[3].title).to.equal('Free-to-Play Hero Rotation: Dec 13');
    });
  });

  describe('game names', () => {
    it('only returns World of Warcraft news items', () => {
      const filteredResults = filterByName(newsItems, 'World of Warcraft');
      expect(filteredResults).to.have.lengthOf(17);
      expect(filteredResults[0].title).to.equal('Patch 7.1.5 Build 23244: Class Changes');
      expect(filteredResults[3].title).to.equal('Mists of Pandaria Timewalking Preview [Official]');
      expect(filteredResults[16].title).to.equal('Gul\'dan Testing & Blue Posts (Class Feedback)');
    });

    it('only returns Heroes of the Storm news items', () => {
      const filteredResults = filterByName(newsItems, 'Heroes of the Storm');
      expect(filteredResults).to.have.lengthOf(7);
      expect(filteredResults[0].title).to.equal('Ragnaros Build Guide');
      expect(filteredResults[3].title).to.equal('Free-to-Play Hero Rotation: Dec 13');
      expect(filteredResults[6].title).to.equal('Brawl with the Blues: Ragnaros (Special Edition)');
    });

    it('only returns Diablo news items', () => {
      const filteredResults = filterByName(newsItems, 'Diablo');
      expect(filteredResults).to.have.lengthOf(2);
      expect(filteredResults[0].title).to.equal('Facebook Live Q/A: Dec 15');
      expect(filteredResults[1].title).to.equal('PTR Patch 2.4.3 Hotfixes');
    });
  });
});
