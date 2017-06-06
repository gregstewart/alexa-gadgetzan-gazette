
import html2Json from 'html-to-json';
import flow from 'xml-flow';

export const parseHTML = (file) => {
  return new Promise((resolve, reject) => {
    html2Json.parse(file, function () {
      return this.map('.news', function ($item) {
        let item = {};
        item.link = $item.find('a').attr('href');
        item.title = $item.find('.news_title').text().trim();
        item.description = $item.find('.news_subtitle.text_color').text().trim();
        item.game = $item.find('.news_game.header.news_game_long').text().trim();
        item.pubdate = new Date($item.find('.local_date').attr('data-time')*1000).toISOString();
        return item;
      });
    })
    .done(function (items) {
      return resolve(items);
    }, function (error) {
      return reject(error);
    });
  });
}

export const parseXML = (file) => {
  return new Promise((resolve, reject) => {
    let xmlStream = flow(file);
    let result = [];
    xmlStream.on('tag:item', function(item) {
      result.push(item);
    });
    xmlStream.on('end', () => {
      return resolve(result);
    });
    xmlStream.on('error', (error) => {
      return reject(error);
    });
  });
}
