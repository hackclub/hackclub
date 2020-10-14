---
name: 'Connecting Python and Telegram'
description: 'Connect Telegram with Python to make some awesome stuff'
author: '@deltaonealpha'
img: 'https://deltacloud.vercel.app/assets/dta25.png'
---

# Connecting Python and Telegram
### Hello, world!

# What the result will look like:
Once done, you will be able to use Telegram BOTs to communicate with you, and your services. It has unlimited opurtunities!
This is the end product of a small project that this workshop houses:

![screenshot-of-workshop-end-project](https://deltacloud.vercel.app/assets/Picture23.png)


Here's a sample of what I personally use this for. My store manager, called DBFA uses a Telegram BOT to inform the store owner about operations, schedules, payments and much more. It also enables two-factor-authentication (2FA) via Telegram.
![screenshot-of-my-personal-implementation](https://deltacloud.vercel.app/assets/dta30-master.jpg.png)


## Hmm... Telegram.. Python?

Yes, Telegram, it is one of the world’s leading messaging apps. Well, “one of the leading apps”. Why Telegram of all?

Well, for starters, it is one of the very few messaging companies that provide open-source API access to everyone. All of Telegram (except the server software) is completely open source!

In fact, the official Telegram app is rather called a client. As its open source, there are literally a gazillion Telegram clients out there.

You don’t like your client? Code one yourself, it is that flexible! 


## But Python..?

### Why would one even connect the two?

Python is a leading language today. Being extremely flexible and one of the easiest languages to learn, Python has a lot going for it, and connecting the just makes a lot of sense.



Let me give you an example.

My father’s friend lost a lot of money because his restaurant’s manager logged meagre sales and pocketed much of the profit.

On hearing this, I started to think, what if every purchase got logged on its own, in a place inaccessible for everyone but the owner? 

Pondering on a way to solve this, I created DBFA, a scalable billing framework written in Python3. It can manage your store, employees, payments, inventory, orders, deliveries, invoicing, and a lot more.

A core feature of DBFA is complete Telegram logging. As soon as a bill is issued, it immediately logs the sales activity in the store owner’s Telegram account as a message from a bot, with all communications over TSL-encrypted HTTPS. Not only this, it even logs every event where store data is being accessed.



Expanding on this, I even added inline button-based two-factor-authentication as text inputs can be super manipulative.

Yeah, all using Telegram and Python! What I did is nothing compared to what you all can do. Yeah, **you!**



## Sounds nice?

### Let’s plan this workshop then!

**Requisites:**

\- Basic Python skills.

\- A Telegram account.

\- pip install requests



**Topics:**

\- Creating a Telegram bot

\- A bit on Telegram’s WEB BOT API

\- Connecting and sending a message

- Understanding the code

\- Receiving messages from the bot

- Understanding the code

\- A small project combining all this

\- **EXTRA RESOURCE**: Marking received messages as read and a  dive into BOT API v2 and inline stuff!

**NOTE**: This workshop will be a quick one, so that it can be made quickly without getting boring. 

For the inquisitive ones out there, there will be some references and resources attached at the end so you can tinker a bit more.



## BOTS EVERYWHERE

### Creating a bot in Telegram!

![bots-everywhere-gif-frame](https://deltacloud.vercel.app/assets/Picture1.png)

Telegram has these ‘bots’, or simple chats which can be handled autonomously. They’re basically a way for developers and service providers to automate interactions.

To interface with a bot, we first need to create one, and get its credentials.

Making a bot is quite easy. Ironically enough, you create bots via a bot called *_‘BotFather’_*. 

https://t.me/BotFather

Its Telegram’s official bot.



## SENDING MESSAGES

### Time to experiment!

Telegram’s WEB API is remarkably simple, yet powerful, allowing you to essentially send and retrieve messages just by visiting a URL! 



We will now try out an example:

\- Randomly ping this bot on Telegram: https://t.me/get_id_bot

and save the ‘chat ID’ it gives you.

\- Then, head over here: https://repl.it/@deltaonealpha/BasicTelegramBotSendText



Try running this repl.it by entering your bot’s access token and the chat ID you received by pinging the _get_id_ bot.

<u>_get_id_ is a wonderfull bot created by Fredy Kardian Udo (t.me/fredykardian)</u>

When you are done with trying this out, proceed ahead.



## DISECTING THE CODE

Now that we have experienced how seamlessly the WEB API works (I hope you did not skip), let us trace down every line: 

This is requests, an alternative to Python’s built-in URLLIB. This needs to be installed via *_pip_* (command in workshop requisites section) if you’re running this off your own PC. 

Running this code on repl.it doesn’t require you to pip.

```python
import requests
```

Now we define a function, *_sendMsg()_*. To call this function, we will need to pass three parameters with it, your *_bot’s token_*, your *_chat ID_* and the text you need to send. As simple as that!

_send_text_ concatenates your token, chat ID and message with the base URL of Telegram’s API. This includes the method *_sendMessage_*, which is used to… well, send messages.

Now we define and call a variable, response, which allows us to use the requests module’s get function to access the URL we stored in the variable _send_text_, in the above step.

Now we just return *_response.json_* in an effort to improve our code and unify things.

And…. that’s it!

```python
def sendMsg(token, chatID, text):
  #Making the URL we need by concatinating various parts
  send_text = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatID + '&parse_mode=Markdown&text=' + text
  response = requests.get(send_text) #'.get' sends and returns the response (which is none here)
  print("Sent! ") #confirmation of function call
  return response.json() #should work just as well even without returning
```

What follows is just a bunch of input() statements to receive values from the user to pass-on to the function.

```python
#Token ID of the bot as recieved from BotFather
print("You'll now be asked for your BOT ID. Enter it without quotes. ")

token = input("Enter your bot token: ")
#Get your chat ID by sending pinging this bot: https://t.me/get_id_bot
chatID = input("Enter your (own) Telegram chat ID: ")
```

Then we create a text variable with out text, and simple pass it to the function!

```python
#Final function call
sendMsg(token, chatID, text)
```

## RECEIVING MESSAGES

Remember using *_sendMessage_* in the URL when sending a message via your bot?

To receive messages, we use *_getUpdates_*. Telegram handles receiving messages brilliantly! Whenever you call *_getUpdates_* with your bot token, it returns a .JSON with all your queued messages.

Why do I say “queued”? Because your messages don’t clear till you issue a “receipt” to Telegram of the same.

Each message comes with an *_updateID_*, which you can return to Telegram to clear that from the queue. For example, if you have 10 messages, simply passing the *_updateID_* of the latest message clears all 10 messages.

Yeah, this might sound complex, but this small demonstration on repl.it should make it seem all easy-peasy!



Send a few texts to your BOT via Telegram, then visit this link, and enter your BOT’s token:

https://repl.it/@deltaonealpha/TelegramGetUpdates#main.py

Works marvellously, right?

Code dissection follows.



## DISECTING THE CODE

Again, we import *_requests_* and *_json_*. Since *_json_* is a part of Python’s standard library, you won’t need to install it when using this code on your local installation.

```python
import requests, json
```

Now we take an input for the BOT token, and concatenate it with the required URL, issuing *_getUpdates_*. Then we define a variable updates, as a .JSON returned by requests.

```python
token = input("Enter your complete bot token: ")
url = f'https://api.telegram.org/bot{token}/getUpdates'
updates = requests.post(url).json()
```

And now? We simple slice the text out, and print.

```python
print("\nText recieved:\n--------------")
for update in updates["result"]:
  print(update["message"]["text"])
```

And… that’s it!



## Its PROJECT TIME

Now since we are all aware of basic Telegram BOT controls, why not make a 5-minute project integrating all this? 

In this mini-project, we will be asking the user for their chat ID and bot token, and telling them to send a “hello” to our bot. If the bot detects “hello”, it will respond with a greeting and if it doesn’t, it will send a different reply ;)

Let’s start!

We start by importing *_requests_* and *_json_* to handle sending and receiving messages, and then time to include delays in our code.

```python
import requests, json, time
```

Now we take inputs from the user:

```python
token = input("Enter your bot token: ")

#Get your chat ID by sending pinging this bot: https://t.me/get_id_bot
chatID = input("Enter your (own) Telegram chat ID: ")
```

Now, the user is instructed to send “hello” to their Telegram bot and then enter any key to proceed. 

(We have to wait for a confirmation else the code will immediately proceed to replying when the user hasn’t even sent anything :D)

```python
print("Now open your Telegram application and send 'hello' to your Telegram Bot.")
time.sleep(5) #Waiting
waitkey = input("Input any *key* once done.")
```

Now, we simply concatenate the inputs into a URL and define a variable *_updates_* as a request to this URL:

```python
url = f'https://api.telegram.org/bot{token}/getUpdates'
updates = requests.post(url).json()
```

Then we print the slice the .JSON received, print the received text and put it in an *_if…else_* block to compare it and detect whether the message is “hello” (or its case variations) or something entirely different! 

```python
print("\nText recieved:\n--------------")
for update in updates["result"]:
  print(update["message"]["text"])
  if update["message"]["text"] in ("hello", "HELLO", "Hello", "hELLO"):
    print("Detected")
```

If the message is *_“hello”_*, we send a greeting back!

```python
    text = "Hey there! Hope you enjoyed this HackClub workshop ;)"
    send_text = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatID + '&parse_mode=Markdown&text=' + text
    response = requests.get(send_text)
    print("Sent! ") #confirmation
```

If the message is not “hello”, we still send a message back, but a different one: 

```python
  else:
    text = "Oooohh!\n\n Try pinging me with 'hello' and run the code on repl.it again ;)"
    send_text = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatID + '&parse_mode=Markdown&text=' + text
    response = requests.get(send_text)
    print("Sent! ") #confirmation
```

And… that’s it!

P.S. You can send multiple messages, one *_“hello”_*, and maybe one not that, and the bot will reply to each!

You can try this on a repl.it if you feel too lazy to code: https://repl.it/@deltaonealpha/TelegramWorkshopSampleProject#main.py



### Screenshots:

#### repl.it shell

![repl.it-screenshot](https://deltacloud.vercel.app/assets/Picture22.png)

#### Telegram chat window

![telegram-screenshot](https://deltacloud.vercel.app/assets/Picture23.png)



# Goodbye!

That was all for this workshop. This is the first ever workshop that I’ve made in my life and the first time when I’ve tried to teach something to such a wide and diverse community!

I really hope this workshop was fun. If you have any doubts, contact me on HackClub’s Slack: @deltaonealpha (https://hackclub.slack.com/team/U01AVFQUCAD)

*_(P.S For those who’d like to stick around longer, there are a few external resources linked below as a bonus, which allow you to make this part of something even bigger! Hack on!)_*

# Bonus Resources

## TIME TO CALL HIM 

![Mahdi-electroBoom-image-the-rectifier](https://deltacloud.vercel.app/assets/Picture24.jpg)

While our code works marvellously, we still have a major problem to fix before we move on to making this a part of something big.

### Issuing Read Receipts to Telegram

If you don’t clear messages received from *getUpdates*, they’ll keep coming alongside newer messages when you make subsequent calls. To avoid this, we just have to let Telegram know that we’ve received the message(s).

We pass the *updateId* with of the latest received message while using *getUpdates*, and Telegram send us only subsequent messages.

The *updateID* can be found in the .JSON returned and can be used after slicing.

Resources:

- https://www.serverless.com/examples/aws-node-telegram-echo-bot

- https://www.andreafortuna.org/2017/11/29/how-to-build-a-simple-echo-bot-on-telegram-using-hook-io-and-python/

- https://www.codementor.io/@garethdwyer/building-a-telegram-bot-using-python-part-1-goi5fncay

- https://blog.usejournal.com/part-1-how-to-create-a-telegram-bot-in-python-under-10-minutes-145e7f4e6e40

 

Leveraging BOT API v2: Inline buttons and keyboard!

Resources:

- https://python-telegram-bot.readthedocs.io/en/stable/telegram.inlinekeyboardmarkup.html

- https://github.com/python-telegram-bot/python-telegram-bot/blob/master/examples/inlinekeyboard.py

- https://python-telegram-bot.readthedocs.io/en/stable/telegram.inlinekeyboardbutton.html

- https://www.mindk.com/blog/how-to-develop-a-chat-bot/
