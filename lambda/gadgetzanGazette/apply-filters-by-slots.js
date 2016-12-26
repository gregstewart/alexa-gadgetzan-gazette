import {filterByDate} from './filters/by-dates';
import {filterByName} from './filters/by-names';

export const applyFilterBySlots = (items, slots) => {
  if (slots) {
    for (var slot in slots) {
      if (slots[slot].name === 'Date' && slots[slot].value) {
        items = filterByDate(items, slots[slot].value);
      }

      if (slots[slot].name === 'Game' && slots[slot].value) {
        items = filterByName(items, slots[slot].value);
      }
    }
  }
  return items;
}
