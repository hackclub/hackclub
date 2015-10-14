var phoneNumber = "6107610083";
Twilio.sendMessage(phoneNumber, "WHATUP?!");
// Twilio.callAndSay(phoneNumber, "Hello, what is your name?");
// Twilio.callAndPlay(phoneNumber, "http://a.tumblr.com/tumblr_lie8ewfdbO1qzbwpvo1.mp3");
Twilio.listenForMessages(function(message) {
  console.log(message);
});
