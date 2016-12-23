export const formatToSSML = (items) => {
  const intro = `<p>Welcome to the Gadgetzan Gazette!</p>`;
  const source = `<p>Here is the news from Icy Veins</p>`;

  const itemsToBeSpoken = items.map((item) => {
    return `<p>In ${item.game} news: ${item.title.replace(/&/g, 'and')}</p><p>${item.description.replace(/&/g, 'and')}</p>`;
  });

  return `<speak>${intro}${source}${itemsToBeSpoken.join('')}</speak>`;
}
