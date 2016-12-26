export const formatToSSML = (items) => {
  if (!items.length) {
    return `<speak><p>Sorry the Gadgetzan Gazette has no news!</p></speak>`;
  }

  const intro = `<p>Welcome to the Gadgetzan Gazette!</p>`;
  const source = `<p>Here is the news from Icy Veins.</p>`;
  const conclusion = `<p>This concludes our news roundup.</p>`;

  const itemsToBeSpoken = items.map((item) => {
    return `<p>In ${item.game} news: ${item.title.replace(/&/g, 'and')}</p><p>${item.description.replace(/&/g, 'and')}</p>`;
  });

  return `<speak>${intro}${source}${itemsToBeSpoken.join('')}${conclusion}</speak>`;
}
