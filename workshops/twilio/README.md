# Introduction to Twilio

Short link to this workshop: https://workshops.hackclub.io/twilio

-------------------------------------------------------------------------------

The objective of this workshop is to learn how to wield powerful
[APIs](http://www.quora.com/What-is-an-API) with minimal code.

**For Beginners**

You will learn how to do really cool things with really simple code. You won't
understand how it all works and that's totally cool. Your objective is to learn
how to make things happen. You can come back later and figure out how it all
works.

**For More Experienced Folk**

This tutorial will likely show you things that you didn't know you could
do. I'd recommend skipping around in the tutorial and find what interests you.

## Partners

Before starting this workshop, find a partner! You'll be pair
programming!

## Quick Demo

We're going to write some code that calls your phone and speaks some
text.

Ready?

Open [this JS Bin*][starter]. Leave this tab open for the rest of the
tutorial.

_*JS Bin is a website for easily writing code._

[starter]: https://jsbin.com/gist/770b112138fe94ce1b88

### Adding Your Twilio SID and Token

We are going to use a service called Twilio to send text messages
and make phone calls.

To add this capability to any HTML file, just add this script tag inside the
bottom of your body tag:

```html
<script src="//bit.ly/twilio-basic-v7"
  sid="YOUR_TWILIO_ACCOUNT_SID_HERE"
  token="YOUR_TWILIO_AUTH_TOKEN_HERE"
></script>
```

You can see this snippet of code inside the HTML tab of the JS Bin:

> ![](img/html_tab.png)

Before this will work, we need to change `"YOUR_TWILIO_ACCOUNT_SID_HERE"`
and `"YOUR_TWILIO_AUTH_TOKEN_HERE"` to your actual Twilio SID and token.

The facilitator should have given you an SID and a token. If you don't have one
yet, ask your facilitator.

If you are the facilitator (or if you're just doing this workshop by yourself),
follow the directions [here](../lib/twilio-basic/signup.md) to get your own
Twilio SID and token.

Once we have the SID and authentication token, replace
`YOUR_TWILIO_ACCOUNT_SID_HERE` and `YOUR_TWILIO_AUTH_TOKEN_HERE` with your
actual SID and authentication token.

> ![](img/enter_account_sid.gif)

### Writing One Line of Code to Send a Text Message

Then type _exactly_ the code below into the left side of JS Bin:

```js
Twilio.callAndSay("555-555-5555", "You just subscribed to Gossip Girl");
```

_**Don't forget the parentheses commas, and quotation marks.**_

> ![](img/demo_1.gif)

This code calls the phone number `555-555-5555` and says the message
`Gossip Girl here, your one and only.` We don't want that.

Change `555-555-5555` to your own phone number. Feel free to change the
message too.

> ![](img/demo_2.gif)

Now go ahead and press the "Run" button.

> ![](img/demo_3.gif)

Your phone should ring shortly! Answer it!

_If it doesn't work, ask a neighboring group to see if they can see what's
wrong. Otherwise, raise your hand to ask a facilitator for help!_

### Having Some Fun

If you want, you can now duplicate the code to call more people's phones! Ask
your neighbors for their phone number!

> ![](img/demo_4.gif)

Go ahead and click run!

![](img/celebrate.gif)

# Hack!

![](http://i.giphy.com/14kdiJUblbWBXy.gif)

The remainder of this workshop will be focused on free-form hacking. We'll
provide a bunch of examples of what you can do with Twilio and you'll have until
demos to branch off and hack on your own project.

Examples of things other people have built (open each example in a new tab to
view, don't forget to replace `YOUR_TWILIO_ACCOUNT_SID_HERE` and
`YOUR_TWILIO_AUTH_TOKEN_HERE` with your values to test the examples out):

- [Group Messaging - Text a number to send a single message to multiple friends][group_messaging]
- [Colors - Text a number a color to change the background color of a website][colors]
- [Group Chat _(advanced)_ - Expanding on Group Messaging, a proper group chat application][group_chat]
- [GIF Search _(advanced)_ - Text a number to search the internet for GIFs][gif_search]
- [GIF Background _(advanced)_ - Set the background of a website to a GIF that matches what you text][gif_background]

Below are all of the things you can do with Twilio, with examples:

[group_messaging]: https://jsbin.com/gist/5c58bdf177d16b802808?html,js,console,output
[colors]: https://jsbin.com/gist/844e43afa19b372d28ef?html,js,console,output
[group_chat]: https://jsbin.com/gist/cdf3c027fe88a3c23573?html,js,console,output
[gif_search]: https://jsbin.com/gist/f6d914942756ce112b3c?html,js,console,output
[gif_background]: https://jsbin.com/gist/f6d914942756ce112b3c?html,js,console,output


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
Twilio.callAndSay("1-555-555-5555", "http://mean2u.rfshq.com/downloads/music/giveyouup.mp3");
```

##### Receive Text Messages

Listen for messages and run the given function whenever one is received.

```js
// When a text message is received...
Twilio.listenForMessage(function (msg) {
  // log the received message to the console
  console.log(msg)
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
Twilio.getAllMessages(function (msgs) {
  // Print the number of received messages
  console.log(msgs.length);
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
