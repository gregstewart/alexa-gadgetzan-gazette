import sinon from 'sinon';
import {subDays} from 'date-fns';

import {newsItems} from './fixtures/news';

import {filterByDate} from '../filter-by-dates';

describe('filter on', () => {
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
