Twilio.listenForMessages(function (message) {
  Twilio.callAndPlay(message.from, 'http://www.nyan.cat/music/original.mp3')
})
