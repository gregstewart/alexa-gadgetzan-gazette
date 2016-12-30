export const launchRequest = () => {
  return new Promise((resolve) => {
    return resolve({utterance: '<speak>You can ask me for todays Blizzard news</speak>', shouldSessionEnd: false});
  });
}

export const badRequest = () => {
  return new Promise((resolve) => {
    return resolve({utterance: '<speak>Sorry, I did not understand what you news you were after.</speak>', shouldSessionEnd: true});
  });
}

export const sessionEndedRequest = (reason) => {
  return new Promise((resolve, reject) => {
    // Per the documentation, we do NOT send ANY response... I know, awkward.
    console.log('Session ended', reason);
    return reject();
  });
}
