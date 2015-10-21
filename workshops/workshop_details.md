# Workshop Details

## General Workshop Facilitation Guidelines

- Make sure you've gone through the workshop thoroughly yourself first
- Demo the final product
- Give an overview and context of what they're going to learn
- Pair everyone into partners so that they have a buddy to ask questions
- Send them the link to the workshop over chat, don't write it on the board or
  try to verbally communicate it
- Repeatedly circle the room to answer questions. Opt for spending less time
  answering a single question in favor of being able to answer more questions.

--------------------------------------------------------------------------------

## Portfolio

Learn to build a simple portfolio website that looks like this:

![](img/portfolio.png)

#### What People Will Learn

The basics of HTML & CSS.

#### Links

- [Live Demo](http://output.jsbin.com/ragizi)
- [Final Code](http://jsbin.com/ragizi/edit)
- [Hacker Facing Workshop](portfolio/README.md)

#### Administrative Setup

1. Make sure that [JS Bin](https://jsbin.com) is not blocked at your school. If it is, work with Jonathan to find a way around this.
2. Clone the [final code](http://jsbin.com/ragizi/edit) and modify the image and text to make it yours.

#### Facilitation Flow

Remember to follow the
[general facilitation guidelines](#general-workshop-facilitation-guidelines).

##### Before the presentation

Open these links each in new tabs

- [Live Demo](http://output.jsbin.com/ragizi)
- {Your modified version of the website}
- [Final Code](http://jsbin.com/ragizi/edit)
- [Workshop](/portfolio/README.md)

##### Communicate the following to the hackers

_You should communicate the below information in less than 1-2 minutes max:_
-
 Show the tab with the live demo and tell the hackers that that's what they'll
  be making
- Show your modified version of the live demo

#### Common Mistakes

**Thinking you lost all the work:**

If somehow the JS Bin close before you are able to signup for JS Bin, you may
think that you lost all of your work. However, if you just go back to the URL of
the JS Bin you were working in, all your changes will be there.

[See a demo of this](img/jsbin_accidental_closing.gif).

#### Recaps:

- [First Meeting: Cherry Hill High School](https://github.com/hackedu/hackedu/blob/master/case_studies/cherry_hill_high_school_east/02_first_meeting/recap.md)
- [First Meeting: San Mateo High School](https://github.com/hackedu/hackedu/blob/master/case_studies/san_mateo_high_school/03_second_meet/recap.md)

#### Salient Reviews:

To be added.

--------------------------------------------------------------------------------

## Remote Control

![](img/remote_control.png)

Learn to make a webapp that calls your friend and plays a song when you press a
button.

#### International Warning

Currently this particular workshop only works with phones in the United States
and possibly Canada. More changes need to be made so that it can work
internationally.

#### What Is Covered

- How to use [Twilio](https://twilio.com) to send and recieve text messages and
make phone calls
- How to play music
- How to detect whether a button has been pressed
- How to detect if your phone was "waved" like a magic wand

#### Administrative Setup

Note: There's a fair bit of setup for this workshop.

##### Obtaining A Twilio Account & Credentials `[20 minutes]`

We want to signup for Twilio and obtain a Twilio Account SID. Follow [the
directions here](twilio/signup.md) to do this. The workshop is setup so that the
facilitator (that's you) obtains the credentials and gives it to everyone doing
the workshop that they don't have to spend the time obtaining credentials.

Following the above directions will only give you $100 worth of credit. If any
club members need more, they can follow the same instructions to get their own
account but will need you to give them the hackEDU Twilio promo code.

##### Understanding The API

To add Twilio to your project, you just add the following script tag inside your
HTML file (after filling in your sid and token of course).

```html
<script src="//bit.ly/twilio-basic-v6"
  sid="YOUR_TWILIO_ACCOUNT_SID_HERE"
  token="YOUR_TWILIO_AUTH_TOKEN_HERE"
></script>  
```

The above script is the easiest way to add Twilio to a web project.

The examples throughout the workshop projects use a different script:

```html
<script type="text/javascript" src="//bit.ly/twilio-basic-with-prompt-v5">
</script>
```

Instead of hard coding the SID and token in to the script tag, this script one
prompts the user to enter their Twilio credentials in a popup and it remembers
the credentials for all the other examples (via localstorage).

##### Further Setup

- Setup the
  [press button for phone call example](http://jsbin.com/fawuda/35/edit?html,js)
  to work with your phone number.
- Setup the
  [send a text from Twilio](http://jsbin.com/fawuda/114/edit?js,console).
  By setting up this JS Bin, it will remember your Twilio credentials for the
  other examples as well.

#### Links

##### The Workshop

- [Hacker Facing Workshop](remote_control/README.md)

##### Demos

- [Send text message to Twilio and get a call back with a song](http://jsbin.com/fawuda/112/edit?js,console)
- [Send a text from Twilio](http://jsbin.com/fawuda/114/edit?js,console)
- [Press button for phone call](http://jsbin.com/fawuda/35/edit?html,js)

##### Canvases

- [Blank Canvas](http://jsbin.com/papawo/8/edit?html,js,console)
- [Blank Popup Canvas](http://jsbin.com/fawuda/113/edit?js,console)

#### Facilitation Flow

##### Before the presentation

- Open the
  [send text message to Twilio and get a call back with a song JS Bin](http://jsbin.com/fawuda/112/edit?js,console)
  and click the "Run" button and leave the tab open
- Write down the phone number that appears on the console in large letters on
  the blackboard

##### Communicate the following to the hackers

- Tell everyone to:
  - Take out their cell phones and set them to vibrate and ring.
  - Start composing a text message with the body "hi" to be sent to the phone
    number that you wrote on the board but not to send it yet.
  - On the count of 3, tell everyone to send their text message at the same
    time.
  - All their phones should start ringing.
- Show them the JS Bin code to make it work and show that it's only 2 lines of
  code to make this happen.
- Show them how easy it is to
  [send a text from Twilio](http://jsbin.com/fawuda/114/edit?js,console).
- Finally show them what they're
  [going to be building](http://jsbin.com/fawuda/35/edit?html,js).
- Tell them that they're almost definitely not going to understand exactly how
  all the code works and that's fine.
- Tell them that the primary focus in on understanding how to make what you want
  to happen to happen.

#### Common Mistakes

None identified yet.

#### Recaps:

None yet.

#### Salient Reviews:

None yet.

--------------------------------------------------------------------------------

## Frogger

![](img/frogger_win.gif)

This workshop is very much still in progress. I've only written the code so far
and no workshop yet.

- [Frogger Code](http://jsbin.com/yumape/edit?js,output)
- [Live Demo](http://output.jsbin.com/yumape)
