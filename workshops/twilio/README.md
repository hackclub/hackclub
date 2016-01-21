# Introduction to Twilio

Short link to this workshop: https://workshops.hackclub.io/twilio

-------------------------------------------------------------------------------

In this workshop, you will learn how to use the a modified version of the
Twilio API to make phone calls and send text messages that allow you to make
group texting apps.

> Note: An API is an agreed upon way for one program to interact with another. APIs
are cool because they let even our very simple programs to interact with very
powerful programs with minimal code.

You will learn how to do really cool things with really simple code. In this
workshop, you probably won't understand how it all works and that's totally
cool. Your objective is to learn how to make things happen.

## Part A: Setup

### 1) Cloud 9 Setup

1. Open Cloud9.com
2. Sign In
3. Open the your previously created workspace (it should be called `projects`)
4. Create a new folder called `twilio`


```
TODO: GIF screenshot of the above
```

### X) Create the HTML file for your website


```
TODO:Flush Out Outline

1. Create via "New from Template"
```

```
TODO: GIF screenshot of the above
```

### X) Add the Twilio Library

To add the capability to send text messages and make phone calls, copy and paste
the below script tag to the bottom of the `body` tag.

```html
<script src="//bit.ly/twilio-basic-v7"
  sid="YOUR_TWILIO_ACCOUNT_SID_HERE"
  token="YOUR_TWILIO_AUTH_TOKEN_HERE"
></script>
```

```
TODO: GIF screenshot of the above
```

### X) Set your Twilio `sid` and `token`

Before anything will work, we need to change `"YOUR_TWILIO_ACCOUNT_SID_HERE"`
and `"YOUR_TWILIO_AUTH_TOKEN_HERE"` to your actual `sid` and `token`

The facilitator should have given you an SID and a token. If not, you should
ask them for one.

> Note: If you are the facilitator (or if you're just doing this workshop by
yourself), follow the directions [here](../lib/twilio-basic/signup.md) to get
your own Twilio SID and token.

Once we have the `sid` and `token`, replace
`YOUR_TWILIO_ACCOUNT_SID_HERE` and `YOUR_TWILIO_AUTH_TOKEN_HERE` with your
actual SID and authentication token.

```
TODO: GIF screenshot of the above
```

### X) Checking our to see if we got a phone number

```
TODO:Flush Out Outline

1. Open the preview
2. Click the arrow thing
3. optional: set your windows side by side
```

```
TODO: GIF screenshot of the above
```

### X) Creating our JavaScript File

- New from Template

### X) Linking the JavaScript file

### X) Writing One Line of Code to Make a Phone Call

Type _exactly_ the code into the JavaScript File

```js
Twilio.callAndSay("555-555-5555", "You just subscribed to Gossip Girl");
```

> Note for people who happen to be using their own IDE, create and link your
> own JavaScript file to the HTML file you created earlier.

_**Don't forget the parentheses commas, and quotation marks.**_

> ![](img/demo_1.gif)

This code calls the phone number `555-555-5555` and says the message
`You just subscribed to Gossip Girl.` We don't want that.

Instead, change `555-555-5555` to your own phone number.
Feel free to change the message too.

> ![](img/demo_2.gif)

Now go ahead and press the "Run" button.

> ![](img/demo_3.gif)

Your phone should ring shortly! Answer it!

> _If it doesn't work, ask a neighboring group to see if they can see what's
wrong. Otherwise, raise your hand to ask a facilitator for help!_

### X) Having some fun

If you want, you can now duplicate the code to call more people's phones! Ask
your neighbors for their phone number!

> ![](img/demo_4.gif)

Now go ahead and press the "Run" button.

![](img/celebrate.gif)

# Hack!

![](http://i.giphy.com/14kdiJUblbWBXy.gif)

The remainder of this workshop will be focused on free-form hacking. We'll
provide a bunch of examples of what you can do with Twilio and you'll have until
demos to branch off and hack on your own project.

Examples of things other people have built:

1. Try opening and playing around with at least 1 example.
2. When you open an example, before you do anything else, click **"File"** →
**Clone** before you start modifying anything
3. Replace `YOUR_TWILIO_ACCOUNT_SID_HERE` and `YOUR_TWILIO_AUTH_TOKEN_HERE` with
   your own `sid` and `token`

- [Group Messaging][example_1] - Text a number to send a single message to
  multiple friends.
- [Colors][example_2] - Text a number a color to change the background color of
  a website.
- [Group Chat _(advanced)_][example_3] - Expanding on Group Messaging, a proper
  group chat application.
- [GIF Search _(advanced)_][example_4] - Text a number to search the internet
  for GIFs.
- [GIF Background _(advanced)_][example_5] - Set the background of a website to
  a GIF that matches what you text.

[example_1]: https://jsbin.com/gist/488f8384c28d25a4844f?html,js,console,output
[example_2]: https://jsbin.com/gist/c30c196a80adf5758870?html,js,console,output
[example_3]: https://jsbin.com/gist/784721ab6c6535616700?html,js,console,output
[example_4]: https://jsbin.com/gist/96cd1ae7856da04d9344?html,js,console,output
[example_5]: https://jsbin.com/gist/fbc17a8a8f43a7b9e5ea?html,js,console,output

## Twilio Documentation

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
Twilio.sendMessage("1-555-555-5555", "This is a text message");
```

##### Call and Say

Call the given phone number and say the given words.

```js
Twilio.callAndSay("1-555-555-5555", "Words words words");
```

##### Call and Play

Call the given phone number and play the given music file (in the below example,
an MP3).

```js
Twilio.callAndPlay("1-555-555-5555", "http://mean2u.rfshq.com/downloads/music/giveyouup.mp3");
```

##### Receive Text Messages

Listen for messages and run the given function whenever one is received.

```js
// When a text message is received...
Twilio.listenForMessages(function (msg) {
  // log the received message to the console
  console.log(msg.body)
});
```

##### Get Latest Text Message

Get the most recently received text message.

```js
// Get the most recent text message...
Twilio.getLatestMessage(function (msg) {
  // And once it's retrieved, log it to the console
  console.log(msg);
});
```

##### Get All Text Messages

Retrieve all of the received text messages.

```js
Twilio.getAllMessages(function (messageArray) {
  // Print the number of received messages
  console.log(messageArray);
});
```

# Feedback!

One last thing. Please click a rating below to rate this workshop. It'll only
take 3 seconds.

_How likely is it that you would recommend this workshop to a friend?_

| [1][r1] | [2][r2] | [3][r3] | [4][r4] | [5][r5] | [6][r6] | [7][r7] | [8][r8] | [9][r9] | [10][r10] |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | --------- |

[r1]: https://feedback-redir.hackclub.io/1H3FEaja2L1fY9JNNYbObFm9hDcFzJOphnODItaNJQBE?ip=entry.78173348&rfield=entry.559841237&r=1
[r2]: https://feedback-redir.hackclub.io/1H3FEaja2L1fY9JNNYbObFm9hDcFzJOphnODItaNJQBE?ip=entry.78173348&rfield=entry.559841237&r=2
[r3]: https://feedback-redir.hackclub.io/1H3FEaja2L1fY9JNNYbObFm9hDcFzJOphnODItaNJQBE?ip=entry.78173348&rfield=entry.559841237&r=3
[r4]: https://feedback-redir.hackclub.io/1H3FEaja2L1fY9JNNYbObFm9hDcFzJOphnODItaNJQBE?ip=entry.78173348&rfield=entry.559841237&r=4
[r5]: https://feedback-redir.hackclub.io/1H3FEaja2L1fY9JNNYbObFm9hDcFzJOphnODItaNJQBE?ip=entry.78173348&rfield=entry.559841237&r=5
[r6]: https://feedback-redir.hackclub.io/1H3FEaja2L1fY9JNNYbObFm9hDcFzJOphnODItaNJQBE?ip=entry.78173348&rfield=entry.559841237&r=6
[r7]: https://feedback-redir.hackclub.io/1H3FEaja2L1fY9JNNYbObFm9hDcFzJOphnODItaNJQBE?ip=entry.78173348&rfield=entry.559841237&r=7
[r8]: https://feedback-redir.hackclub.io/1H3FEaja2L1fY9JNNYbObFm9hDcFzJOphnODItaNJQBE?ip=entry.78173348&rfield=entry.559841237&r=8
[r9]: https://feedback-redir.hackclub.io/1H3FEaja2L1fY9JNNYbObFm9hDcFzJOphnODItaNJQBE?ip=entry.78173348&rfield=entry.559841237&r=9
[r10]: https://feedback-redir.hackclub.io/1H3FEaja2L1fY9JNNYbObFm9hDcFzJOphnODItaNJQBE?ip=entry.78173348&rfield=entry.559841237&r=10

[demo]: https://jsbin.com/gist/b16a00cc53a7827c725b
