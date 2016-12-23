import {isToday, isYesterday, isSameDay} from 'date-fns';

export const filterByDate = (data, date) => {
  if (!date || isToday(date)) {
    return data.filter((item) => {
      return isToday(item.pubdate);
    });
  }

  if (date && isYesterday(date)) {
    return data.filter((item) => {
      return isYesterday(item.pubdate);
    });
  }

  return data.filter((item) => {
    return isSameDay(date, item.pubdate);
  });
}
