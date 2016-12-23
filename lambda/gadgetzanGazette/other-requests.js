export const launchRequest = () => {
  return new Promise((resolve) => {
    return resolve('<speak>Hmm <break time=\"1s\"/> Why not ask me to give you the latest Blizzard news?</speak>');
  });
}

export const badRequest = () => {
  return new Promise((resolve) => {
    return resolve('<speak>Sorry, I did not understand what you news you were after.</speak>');
  });
}
