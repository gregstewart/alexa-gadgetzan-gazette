import fs from 'fs';
import { parseHTML, parseXML } from '../response-parser';

describe('parse result', function () {

  let xmlFile;
  let xmlStream;
  describe('xml file', function () {
    beforeEach(function () {
      xmlFile = fs.createReadStream('./test/fixtures/icy-veins.xml');
    });

    it('returns a content structure', function (done) {
      const promise = parseXML(xmlFile);
      promise.then((results) => {
        expect(results.length).to.equal(25)
        expect(results[0].title).to.equal('Patch 7.1.5 Build 23244: Class Changes');
        expect(results[0].link).to.equal('http://www.icy-veins.com/forums/topic/26848-patch-715-build-23244-class-changes/');
        expect(results[0].pubdate).to.equal('Thu, 15 Dec 2016 13:54:09 +0000');
        done();
      }).catch((error) => {
        expect(error).to.be.undefined;
        done();
      });
    });
  });

  describe('html file', function () {
    let html;
    beforeEach(function () {
      html = fs.readFileSync('./test/fixtures/icy-veins.html', 'utf8');
    });

    it('returns a content structure', function (done) {
      const promise = parseHTML(html);

      promise.then((results) => {
        expect(results.length).to.equal(30)
        expect(results[0].title).to.equal('Patch 7.1.5 Build 23244: Class Changes');
        expect(results[0].link).to.equal('http://www.icy-veins.com/forums/topic/26848-patch-715-build-23244-class-changes/');
        expect(results[0].pubdate).to.equal('2016-12-15T13:54:09.000Z');
        done();
      }).catch((error) => {
        console.log(error)
        expect(error).to.be.undefined;
        done();
      });;
    });
  });
});
