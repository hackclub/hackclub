// Whenever you text the Twilio phone number (shown in the console), it will call you and say over the phone whatever you texted it. Note that your Twilio phone number is displayed in the console.

Twilio.listenForMessages(function (data) {
  Twilio.callAndSay(data.from, data.body)
})
