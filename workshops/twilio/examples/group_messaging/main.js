// To see which phone number you can text to trigger the code
// in this example, simply click "Run with JS" in the Output
// Window. The phone number will be printed in the Console tab.

// Replace the phone numbers below with those of your friends!

Twilio.listenForMessages(function(data) {
  Twilio.sendMessage("555-555-5555", data.body);
  Twilio.sendMessage("666-666-6666", data.body);
  Twilio.sendMessage("777-777-7777", data.body);
});
