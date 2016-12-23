import { fetchFile as fetchNews } from './fetch-content';
import { parseHTML } from './response-parser';
import { formatToSSML } from './format-to-ssml';

export const fetchNewsToSpeak = (request) => {
  return fetchNews()
    .then((contents) => {
      return parseHTML(contents)
    })
    .then((items) => {
      return formatToSSML(items);
    });
}
