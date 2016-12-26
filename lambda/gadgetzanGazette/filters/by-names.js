export const filterByName = (data, name) => {
  if (name) {
    return data.filter((item) => {
      const pattern = new RegExp(name);
      return pattern.test(item.game);
    });
  }

  return data;
}
