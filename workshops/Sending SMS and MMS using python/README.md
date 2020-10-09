---
name: 'Sending SMS and MMS with python'
description: 'sending SMS and MMS with python using Twilio'
author: '@Shaun stroebel'
---
In this tutorial we are going to be as the title suggests sending an SMS and MMS message using python,but first what is an SMS and what's an MMS
An SMS stands for (short message service) and it's  a text messaging service component of most telephone, Internet, and mobile device systems. It uses standardized communication protocols to enable mobile devices to exchange short text messages.

Whereas a MMS is a Multimedia Messaging Service is a standard way to send messages that include multimedia content to and from a mobile phone over a cellular network. Users and providers may refer to such a message as a PXT, a picture message, or a multimedia message

STEP 1:
Sign up for (or log in to) your Twilio account
If you have a Twilio account and Twilio phone number with SMS capabilities, you’re all set! Feel free to jump straight to the code.

Before you can receive phone calls and send messages, you’ll need to sign up for a Twilio account and purchase a Twilio phone number.

If you’re brand new to Twilio, you can sign up for a free trial account to get started. Once you've signed up, head over to your Console and grab your Account SID and your Auth Token. You will need those values for the code samples below.


Step 2
Get a phone number with SMS (and MMS) capabilities
Sending messages requires a Twilio phone number with SMS capabilities. If you don’t currently own a Twilio phone number with SMS capabilities, you’ll need to buy one. After navigating to the Buy a Number page, check the 'SMS' box and click 'Search'
Step 3 
Send an SMS message in Python via the REST API
To send an outgoing SMS message from your Twilio account you’ll need to make an HTTP POST to Twilio's Message resource.

Twilio's Python library helps you to create a new instance of the Message resource, specifying the To, From, and Body parameters of your message.

If you don’t already have the Python helper library installed you can install it using pip:

pip install twilio
If you’re not using pip you can find manual installation instructions here.

Now, create a file named send_sms.py and include the following code:

Send an SMS using the Programmable SMS API
# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

message = client.messages \
    .create(
         body='This is the ship that made the Kessel Run in fourteen parsecs?',
         from_='+15017122661',
         to='+15558675310'
     )

print(message.sid)
Replace the placeholder values for account_sid and auth_token with your unique values. You can find these in your Twilio console.

Please note: it's okay to hardcode your credentials when getting started, but you should use environment variables to keep them secret before deploying to production. Check out how to set environment variables for more information.

You’ll tell Twilio which phone number to use to send this message by replacing the from_ number with the Twilio phone number you purchased earlier.

Next, specify yourself as the message recipient by replacing the to number with your mobile phone number. Both of these parameters must use E.164 formatting (+ and a country code, e.g., +16175551212)

We also include the body parameter, which contains the content of the SMS we’re going to send.

Once you’ve updated the code sample, you can test it out by running it from the command line:

python send_sms.py
In just a few moments you should receive an SMS!

If you’re using a trial account, you'll notice that any messages you send will always begin with “Sent from a Twilio trial account.” Once you upgrade your account, you will no longer see this message. Learn more about sending SMS and MMS messages from a trial account.

Let’s take a moment to understand what’s going on behind the scenes when you send this request to Twilio.

Twilio's response
When Twilio receives your request to send an SMS via the REST API, it will check that you’ve included a valid Twilio phone number in the from_ field. Twilio will then either queue the SMS or return this HTTP error in its response to your request.

Outgoing SMS Diagram
Assuming your request didn't result in any errors, Twilio's HTTP response will include the SID of the new message. This unique identifier will help us reference this message later: in the code above, we printed that SID to the terminal.
Twilio's JSON response includes a robust amount of data about your message. A sample response might look like this:

{"sid": "SMxxxxxxxxxxxxxxx", 
 "date_created": "Thu, 09 Aug 2018 17:26:08 +0000", 
 "date_updated": "Thu, 09 Aug 2018 17:26:08 +0000", 
 "date_sent": null, 
 "account_sid": "ACxxxxxxxxxxxxxxxx", 
 "to": "+15558675310",
 "from": "+15017122661",
 "messaging_service_sid": null,
 "body": "This is the ship that made the Kessel Run in fourteen parsecs?", 
 "status": "queued", 
 "num_segments": "1", 
 "num_media": "0",
 "direction": "outbound-api",
 "api_version": "2010-04-01",
 "price": null,
 "price_unit": "USD",
 "error_code": null,
 "error_message": null,
 "uri": "/2010-04-01/Accounts/ACxxxxxxxxx/Messages/SMxxxxxxxxxxxx.json",
 "subresource_uris": {
     "media": null
 }
}
You can access any of these attributes from your Python code, much like we did when we printed the message.sid.

Try adding a print statement like print(message.status). Save the file, then run the code with python send_sms.py one more time. You should see the status of your message, "queued", printed to your terminal.

If you receive an error in response from Twilio or never receive the message, you may want to check out these tips for troubleshooting undelivered messages.

If you’d like to track the status of your messages in real-time, you’ll need to set up a StatusCallback URL. Learn more in our tutorial on confirming message delivery in Python.

Send a message to multiple recipients
If you want to send a message to several recipients, you could create an array of recipients and iterate through each phone number in the array:

numbers_to_message = ['+15558675310', '+14158141829', '+15017122661']
for number in numbers_to_message:
    client.messages.create(
        body = 'Hello from my Twilio number!',
        from_ = '+15017122662',
        to = 'number'
    )
This will create a new Message instance for each phone number in the list.

A note on message rate limiting
As you send more messages via the API, Twilio will queue them up for delivery at your prescribed rate limit. API requests for messages that exceed the specified rates will be queued and executed as capacity is available.

If your application tries to enqueue more than 4 hours worth of outbound traffic (e.g., enqueuing more than 14,400 messages to Canada over one long code phone number), the API will start returning 429 errors.

If you need to enqueue a large volume of messages, you may find that it's helpful to leverage Twilio's Messaging Services. See our guide on how to set up and send messages from a messaging service in your language of choice for more tips.

Send a message containing media (MMS) in Python
While you can send text-only SMS messages almost anywhere on the planet, sending media is currently only available in the US and Canada.

To include media in your Twilio-powered text message, you need to make an addition to the code we wrote above. This time, we need to add the media_url parameter.

Create a file called send_mms.py and include the following code:

Send an MMS message with an image URL
# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

message = client.messages \
    .create(
         body='This is the ship that made the Kessel Run in fourteen parsecs?',
         from_='+15017122661',
         media_url=['https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg'],
         to='+15558675310'
     )

print(message.sid)
Again, update the from_ and to parameters to use your Twilio phone number and your mobile phone.

The new media_url parameter in this code tells Twilio where to go to get the media we want to include. This must be a publicly accessible URL: Twilio will not be able to reach any URLs that are hidden or that require authentication.

Just as when you send a simple SMS, Twilio will send data about the message in its response to your request. The JSON response will contain the unique SID and URI for your media resource:

"subresource_uris": {"media": "/2010-04 01/Accounts/ACxxxxxxxx/Messages/SMxxxxxxxxxxxxx/Media.json"}
When the Twilio REST API creates your new Message resource, it will save the image found at the specified media_url as a Media resource. Once created, you can access this resource at any time via the API.

You can print this value from your Python code to see where the image is stored. Add the following line to the end of your send_mms.py file to see your newly provisioned Media URI:

print(message.media._uri)
Save the file and run it from the command line:

python send_mms.py
In just a moment you should receive a text message with an image 
