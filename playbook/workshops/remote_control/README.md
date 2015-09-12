# Remote Control

The objective of this workshop is for you to learn to wield powerful tools
with minimal code. Note that there will be code that we use that you won't
entirely understand. That's totally cool. A deeper understanding will come with
time.

For now, our focus is just to make it work.

```
IMPORTANT WARNING:

Please do not execessively make phone calls or send text messages
(more than 100). This workshop only has a finite amount of credit and if you use
it all, the below code will stop working for everyone at MHacks.

If you need a lot of credit, please talk to a facilitator.
```

## Pairing

Before starting this workshop, make sure you have a parter! You'll be pair
programming!

## Quick Demo

We're going to write one line of code that calls your phone and says something.

Ready?

Open this JS Bin. <!--TODO: Link to JS Bin JS and Console-->

Then type the below code into the left side of JS Bin _exactly_.

```js
Twilio.callAndSay("555-555-5555", "Gossip Girl here, your one and only.")
```

_**Don't forget the parentheses commas, and quotation marks though.**_

<!--TODO: Insert GIF of me typing-->

This will call the phone number `555-555-5555` and say the message
`Gossip Girl here, your one and only.`

Change `555-555-5555` to your own phone number. Feel free to change the
message too. 

<!--TODO: Insert GIF of me changing the numbers and the message-->

Go ahead and press the "Run" button.

Your phone should ring shortly! Answer it!

> If it doesn't, ask a neighboring group to see if they can see what's wrong.
> Otherwise, raise your hand to ask a TA for help!



<!--TODO: insert celebrate gif-->

## Outline for the rest of this tutorial

**Part I**

This section is linear and more guided.

In this section, you will learn to build an HTML5 app that, when you wave your 
phone around like a magic wand, everyone's phone will ring.

<!-- TODO: Link Demo-->

Here is an outline of what you'll learn on the way:

1. send text messages and make phone calls with one line of code <!-- TODO: Link -->
2. call a phone when a button is clicked <!-- TODO: Link -->
3. wave your phone like a magic wand to call everyone's phone <!-- TODO: Link -->

If you're more advanced, feel free to skip it and go to the next section.
Do note that you'll be missing some setup steps though if you do so you might
want to read through it first.

**Part II** <!-- TODO: Insert Link -->

This section is less guided. It showcases snippets of various APIs and how to
use them. 

With you partner, look around to see what snippets you think are cool. 
Pick and choose some of them to build a mini project!

We can break the tools into two categories:

**Actions**

Actions are, well, just actions:

- send a text message
- call a phone and have a computer voice say something
- call a phone and play music
- play music through the web page

**Triggers**

Triggers can run any code you want whenever something happens. For example:

- when a button is pressed
- when the phone is "waved" like a magic wand
- when a key is pressed
- when you recieve a text message
- 

**Part III**

This section tries to explain how the hell this all works--well, at least
what you need to know to reproduce these results somewhere else.

## Part I

### Send text messages and make phone calls with one line of code

We've already learned how to make a phone call and say something in the
[Quick Demo](#quick-demo).

Let's learn how to send text messages and call phones that play music.


#### Sending Text Messages

Type the below code as it is written _exactly_ in the JS Bin:

```js
Twilio.sendMessage("555-555-5555", "Evening upper east siders...")
```

<!--TODO: Type out the initial code-->

Again, change `555-555-5555` to your own phone number. Feel free to change the
message too.

<!--TODO: Modify the code for phone number-->

Go ahead an click "Run" again.

Because I left the code that calls my phone, I get a phone call as well
as a text message.

> If it doesn't, ask a neighboring group to see if they can see what's wrong.
> Otherwise, raise your hand to ask a TA for help!

<!--TODO: Celebrate Gif-->

**Next**

We learned how to call a phone and send a text message.
Now let's make this work when I press a real button a a website!

### Call a phone when a button is clicked

#### Trying it

Go ahead and open up this new JS Bin.

When you click the blue button that says "Emergency Excuse", it will call a
phone number and say "This is your boss! Get over here!" (Ths is useful for getting
out of a terrible date.)

<!--TODO: Click blue button-->

Before we click it, let's go ahead and change the phone number so that it calls
your phone:

<!--TODO: Change phone numbe-->

Now go ahead and click the "Emergency Excuse" button.

> If it doesn't work, ask a TA for help!

#### Trying to understand the code.

There are two pieces of code that make this work, the code in the HTML:

```html
<button id="call-and-say-btn">Emergency Excuse</button>
```

And the code in the JavaScript:

```js
document.getElementById("call-and-say-btn").onclick = function() {
  Twilio.callAndSay("555-555-5555", "This is your boss! Get over here!");
  alert("Calling...");
};
```

With your parter, spend 1 minute trying to talk through how you think this
code works. (Hint: read the JavaScript out loud slowly...)

#### Understanding the code

Instead of explaining how the existing code works, I will explain  by going
through the process of adding another button that when pressed,
calls me and says "I see dead people" a couple times.

##### Adding the button

In the HTML let's add another button by writing:

```html
<button>I see dead people</button>
```

<!--GIF-->

We see a another button appear

<!--Result-->

##### Adding an id to the button

Then we need to give this button some id so we can refer to it by it's id in the
JavaScript.

```html
<button id="dead-people-btn">I see dead people</button>
```

##### Referencing the button from JavaScript

Now that we set the button's id, we can write

```js
document.getElementById("dead-people-btn").onclick = function() {
    -> PUT ANY CODE YOU WANT TO RUN IN HERE WHEN THE BUTTON IS CLICKED <-
};
```

There is a lot to understand in the above code but if you read it out loud like
this, it begines to make sense:

_Note that I highlighted the keywords from the code_

In the `document`, `get` the `element` with the `id` `"dead-people-btn"` and
when it is `clicked`, run any of the code that is inside the `function`.

There are definitely more complexities here but we won't worry about them
in this workshop. If you want to read more about what's happening here,
feel free to Google `document.getElementById` and `javascript function` 
and/or ask a TA.

##### Adding an alert

Now we can add the code inside of the `function`.

Let's add what's called an `alert` to the JavaScript

`alert("You pressed the button");`

<!--JS Bin-->

Now everything should be in place. WHen you click the button, 
it makes an alert pop up, like this:

<!--JS Bin-->

> If it doesn't, ask a neighboring group to see if they can see what's wrong.
> Otherwise, raise your hand to ask a TA for help!

##### Adding the actual code to make the phone call:

Let's add the actual code to make the phone call back in.

Don't forget to change the `555-555-5555` phone number to your own.

```js
document.getElementById("dead-people-btn").onclick = function() {
  Twilio.callAndSay("555-555-5555", "I see dead people. I see dead people");
  alert("Calling...");
};
```

<!--JS Bin-->

If you try pressing the `I see dead people` button, you should get a phone call!

> If it doesn't, ask a neighboring group to see if they can see what's wrong.
> Otherwise, raise your hand to ask a TA for help!

##### Calling all of the people

```js
document.getElementById("dead-people-btn").onclick = function() {
  Twilio.callAndSay("555-555-5555", "I see dead people. I see dead people");
  alert("Calling...");
};
```
















#### Trying it out on mobile

This website is responsive so let's open it on your phone:

First click the black arrow to pop out the window out

<!--TODO-->

Then type in the URL into your mobile browser. (You can also be clever and
write a line of code to send the URL to your phone with a text message).






