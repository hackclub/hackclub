// The below code will display an alert whenever any one texts your Twilio phone number. Note that your phone number is printed in the console.

Twilio.listenForMessages(function(data) {
  alert("I received an SMS from " + data.from);
  alert("They said " + data.body);
});
