export const formatToSSML = (items) => {
  if (!items.length) {
    return `<speak><p>Sorry the Blizzard News Flash has no news!</p></speak>`;
  }

  const intro = `<p>Welcome to the Blizzard News Flash!</p>`;
  const source = `<p>Here is the news from Icy Veins.</p>`;
  const conclusion = `<p>This concludes our news roundup.</p>`;

  const itemsToBeSpokenAsFormattedArray = items.map((item) => {
    return `<p>In ${item.game} news: ${item.title.replace(/&/g, 'and')}</p><p>${item.description.replace(/&/g, 'and')}</p>`;
  });

  const buildResponse = (itemsToBeSpoken) => {
    let response = `<speak>${intro}${source}${itemsToBeSpoken.join('')}${conclusion}</speak>`;

    if (response.length >= 8000) {
      return buildResponse(itemsToBeSpoken.slice(0,itemsToBeSpoken.length-1));
    }

    return response;
  }

  return buildResponse(itemsToBeSpokenAsFormattedArray);
}
