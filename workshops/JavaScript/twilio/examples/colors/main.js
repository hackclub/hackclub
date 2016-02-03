// To see which phone number you can text to trigger the code
// in this example, simply click "Run with JS" in the Output
// Window. The phone number will be printed in the Console tab.

// When someone sends a message...
Twilio.listenForMessages(function (msg) {
  // Set the website's background color to what they text us
  document.body.style.backgroundColor = msg.body;
});
