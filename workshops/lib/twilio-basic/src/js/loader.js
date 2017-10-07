var Twilio = Twilio || {};

Twilio.ACCOUNT_SID = document.currentScript.getAttribute('sid');
Twilio.AUTH_TOKEN = document.currentScript.getAttribute('token');

if (Twilio.ACCOUNT_SID.length !== 34 || Twilio.AUTH_TOKEN.length !== 32) {
  message = "You're almost there!" +
            " You need to make sure you've correctly added your Twilio " +
            " sid and token to your script tag first." +
            " See https://github.com/hackclub/hackclub/tree/master/playbook/workshops/lib/twilio-basic/README.md + " +
            " for more details!";
  console.log(message);
  alert(message);
}
