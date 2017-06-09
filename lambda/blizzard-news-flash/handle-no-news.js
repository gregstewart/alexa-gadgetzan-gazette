import {isToday, isYesterday, subDays, format} from 'date-fns';

export const handleNoNews = (slots) => {
  let utterance = 'Sorry the Blizzard News Flash has no news';

  if(!slots.Date && !slots.Game) {
     utterance += `. Please try again tomorrow`;
  }

  if (slots.Game && slots.Game.value) {
    utterance += ` for ${slots.Game.value}`
  }

  if (slots.Date && slots.Date.value) {
    if(isToday(slots.Date.value)) {
      utterance += ` today. You can try to ask me about yesterday's news`;
    } else if(isYesterday(slots.Date.value)) {
      const date = format(subDays(slots.Date.value, 1), 'Do of MMMM YYYY');
      utterance = `Sorry the Blizzard News Flash had no news yesterday. You can try to ask me about news for the ${date}`;
    } else {
      const date = format(slots.Date.value, 'Do of MMMM YYYY');
      utterance = `Sorry the Blizzard News Flash had no news for the ${date}. You can try to ask me about today's, yesterday's or another day's news`;
    }
  }

  return `<speak><p>${utterance}.</p></speak>`;
}
