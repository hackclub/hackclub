// To see which phone number you can text to trigger the code
// in this example, simply click "Run with JS" in the Output
// Window. The phone number will be printed in the Console tab.

// Replace the phone numbers below with those of your friends!
// Make sure to use the same phone number format in the example
// code (i.e. no dashes and a 1 in front).

var list = {
  15555555555: 'Amanda',
  16666666666: 'Bill',
  17777777777: 'Carol'
}

Twilio.listenForMessages(function (data) {
  // for each phone number in the list...
  for (var phone_number in list) {
    // unless you were the one that sent the message...
    if (phone_number != data.from) {
      // send the message to the phone number, prefixed with the sender's name
      Twilio.sendMessage(phone_number, list[data.from] + ': ' + data.body)
    }
  }
})
