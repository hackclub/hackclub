# Twilio

This folder houses our modified Twilio client library.

It also contains:

- The [signup instructions for Twilio](signup.md)
- The non-existent [api_documentation.md](api_documentation.md) for the
  `twilio-basic` API

Pull requests here are definitely welcome.

## Building the Library

Install dependencies for the build:

    $ npm install

And now just run `make` command to build the modified library. The output will
be in `dist/twilio-basic.min.js`.

    $ make

## Documentation

- [Send text message][sms]
- [Make phone call and say sentence][call_and_say]
- [Make phone call and play music][call_and_play]
- [Receive text messages][receive_texts]
- [Get latest text message][get_latest_text]
- [Get all messages][get_all_texts]

[sms]: #send-text-message
[call_and_say]: #call-and-say
[call_and_play]: #call-and-play
[receive_texts]: #receive-text-messages
[get_latest_text]: #get-latest-text-message
[get_all_texts]: #get-all-text-messages

##### Send Text Message

Send a text message to the given phone number.

```js
Twilio.sendMessage('1-555-555-5555', 'This is a text message')
```

##### Call and Say

Call the given phone number and say the given words.

```js
Twilio.callAndSay('1-555-555-5555', 'Words words words')
```

##### Call and Play

Call the given phone number and play the given music file (in the below example,
an MP3).

```js
Twilio.callAndPlay(
  '1-555-555-5555',
  'http://mean2u.rfshq.com/downloads/music/giveyouup.mp3'
)
```

##### Receive Text Messages

Listen for messages and run the given function whenever one is received.

```js
// When a text message is received...
Twilio.listenForMessages(function (msg) {
  // log the received message to the console
  console.log(msg.body)
})
```

##### Get Latest Text Message

Get the most recently received text message.

```js
// Get the most recent text message...
Twilio.getLatestMessage(function (msg) {
  // And once it's retrieved, log it to the console
  console.log(msg)
})
```

##### Get All Text Messages

Retrieve all of the received text messages.

```js
Twilio.getAllMessages(function (messageArray) {
  // Print the number of received messages
  console.log(messageArray)
})
```
