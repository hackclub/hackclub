document.getElementById("emergency-button").onclick = function() {
  Twilio.callAndSay("610-761-0083", "Hello! Are you ready for MHacks?");
  alert("Calling....");
};
