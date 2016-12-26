import { fetchFile as fetchNews } from './fetch-content';
import { parseHTML } from './response-parser';
import { formatToSSML } from './format-to-ssml';
import { applyFilterBySlots } from './apply-filters-by-slots';

export const fetchNewsToSpeak = (request) => {
  return fetchNews()
    .then((contents) => {
      return parseHTML(contents)
    })
    .then((items) => {
      return formatToSSML(applyFilterBySlots(items, request.intent.slots));
    });
}
