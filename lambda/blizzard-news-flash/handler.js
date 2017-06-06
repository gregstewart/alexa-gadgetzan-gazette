export const hello = (event, context, callback) => {
  const response = {
    "version": "1.0",
    "response": {
      "outputSpeech": {
        "type": "PlainText",
        "text": "Alexa responds with this text"
      },
      "card": {
        "content": "Message for the Alexa companion app.",
        "title": "Title for the Message",
        "type": "Simple"
      },
      "shouldEndSession": true
    },
    "sessionAttributes": {}
  }
  callback(null, response)
};
