import fs from 'fs';
import {newsItems} from './fixtures/news';

import {applyFilterBySlots} from '../apply-filters-by-slots';
import {filterByDate} from '../filters/by-dates';
import {filterByName} from '../filters/by-names';

describe('Apply filters by slots', () => {
  let alexa;
  before(() => {
    alexa = JSON.parse(fs.readFileSync('./test/fixtures/alexa-request.json', 'utf8'));
  });

  describe('no slots', () => {
    it('has no slot key', () => {
      const filteredResults = applyFilterBySlots(newsItems);

      expect(newsItems).to.deep.equal(filteredResults);
    });
    it('has an empty slot list', () => {
      const filteredResults = applyFilterBySlots(newsItems, {});

      expect(newsItems).to.deep.equal(filteredResults);
    });
  });

  describe('date slot', () => {
    it('applies date filter', () => {
      const filteredResults = applyFilterBySlots(newsItems, alexa.request.intent.slots);

      expect(filteredResults).to.have.length(4);
    });
  });

  describe('name slot', () => {
    it('does not applies game filter as game value is missing', () => {
      const testData = {Game: {name: 'Game'}};
      const filteredResults = applyFilterBySlots(newsItems, testData);

      expect(newsItems).to.have.length(filteredResults.length);
    });

    it('applies game filter', () => {
      const testData = {Game: {name: 'Game', value: 'World of Warcraft'}};
      const filteredResults = applyFilterBySlots(newsItems, testData);

      expect(filteredResults).to.have.length(17);
    });

    it('applies game filter', () => {
      const testData = {Game: {name: 'Game', value: 'world of Warcraft'}};
      const filteredResults = applyFilterBySlots(newsItems, testData);

      expect(filteredResults).to.have.length(17);
    });
  });

  describe('multiple slots', () => {
    it('applies both filters', () => {
      const testData = {Game: {name: 'Game', value: 'World of Warcraft'}, Date: {name: 'Date', value: '2016-12-15'}};
      const filteredResults = applyFilterBySlots(newsItems, testData);

      expect(filteredResults).to.have.length(2);
    });
  });
});
