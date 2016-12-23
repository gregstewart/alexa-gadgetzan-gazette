export const filterByName = (data, name) => {
  if (name) {
    return data.filter((item) => {
      return item.game === name;
    });
  }

  return data;
}
