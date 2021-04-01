---
name: Hello Bot
description: A Discord bot with a simple "Hello World!" command.
author: '@hickorysb'
---

If you've ever used Discord it's very likely you've come across a bot. This workshop will help guide you on how to create you're own.

# Setting Up Repl.it

Create a new Node.js Repl on [Repl.it](https://repl.it/). If you follow the next step exactly, when you click run you Repl will automatically download and install `discord.js` as a dependency. `discord.js` has several optional dependencies that can be used to speed it up. NPM does not install any of these automatically. The list of optional dependencies and how to install them will be included at the bottom of this workshop.

# Create a new Discord Application

Go to the [Discord Developers Page](https://discord.com/developers/applications/) and sign in. Click "New Application". Give your bot a name, and press "Create". 

![Create a new Discord Application](https://cloud-jjd7stz3y-hack-club-bot.vercel.app/0create_application.png)

Go to the bot tab, and click "Add Bot". Click the "Copy" button to copy the bot's token. Save this token somewhere as you will need this token in the next section.

![Create bot](https://cloud-jjd7stz3y-hack-club-bot.vercel.app/1create_application2.png)
![Copy bot token](https://cloud-jjd7stz3y-hack-club-bot.vercel.app/2create_application3.png)

Next, you will need to add permissions to your bot and invite it to a Discord server so it can do certain actions. In the "Scopes" section, select "bot". A URL will appear at the bottom which you should copy and paste into a new tab. This will allow you to invite the bot to your Discord server.

![Add bot scope](https://cloud-jjd7stz3y-hack-club-bot.vercel.app/3create_application4.png)

Next, scroll down to the "Bot Permissions" section. You may add the following permissions:

![add bot permissions](https://cloud-jjd7stz3y-hack-club-bot.vercel.app/4create_application5.png)

Now that we have created the bot user and invited it to a server for testing, we'll write some JavaScript code so the bot can do things.

# Discord.js Basics

The documentation for `discord.js` can be found [here](http://discord.js.org/). First, we need to require `discord.js` so that we can use it in `index.js`. We can do that using this code:

```js
const Discord = require('discord.js')
```

Now, `discord.js` needs to be initialized. We can initialize it using the following code:

```js
const bot = new Discord.Client()
```

After `discord.js` has been initialized we can log in with the bot. The following code will be used for logging in. Replace `token` with the token you copied earlier.

```js
bot.login('token')
```

`token` is a placeholder for the bot's token which you copied earlier. Put it in quotes here, replacing `'token'`. Discord.js is event-based, meaning we set up listeners for the events that we want to respond to. The main one we're going to work with is `message`, this event will be fired anytime a message is sent in a server your bot is a member of. As long as the bot has privileges to read the channel the message was sent in. To add a listener for the `message` event we can use the following code:

```js
bot.on('message', (message) => {
  console.log(message.content)
})
```

There's quite a bit going on in that bit of code. So let's break it down. `bot.on()` is the function that we use to set what function will be called when the specified event is fired. `"message"` tells `discord.js` which event that function is for. In this case it is the `message` event. The `(message) => {}` bit is the lambda method for creating a function, you can read more about those [here](https://www.vinta.com.br/blog/2015/javascript-lambda-and-arrow-functions/). The final part of that block of code is `console.log(message.content)`; this logs the message that was sent to the console. At this point, your `index.js` file should look like the following:

```js
const Discord = require("discord.js")
cons discord = new Discord.Client()
bot.on("message", (message) => { 
  console.log(message.content)
  })
bot.login("token")
```

# The Hello World Command

Most Discord bots have a thing called a prefix. The prefix allows the bot to tell the difference between a regular message and a command it is meant to interpret. It is not recommended to use a prefix that is already largely popular, some examples are `!`, `?`, `/`, and `=`. Instead, combine some of those options or use something unique like `-`. For this workshop, we will use `h!` as our prefix. We want to declare a constant for our prefix, so we only have to change it in one place if we decide to update it later. We can do that using the following line:

```js
const prefix = 'h!'
```

Now, we will update our listener function to check that the message starts with our prefix. The following is what the updated listener should look like:

```js
bot.on('message', (message) => {
  if (!message.content.startsWith(prefix)) return
  console.log(message.content)
})
```

This code will check for the prefix, and if the message doesn't start with it it will exit. If it contains the prefix it will print the entire message to the console. However, to get the actual command we will need to remove the prefix from the message string:

```js
bot.on('message', (message) => {
  if (!message.content.startsWith(prefix)) return
  var command = message.content.slice(prefix.length)
  console.log(command)
})
```

This code will now only print the command from the message. Now we should actually have the bot send a message in Discord! For this workshop, the command will be `hello` and the response from the bot will be `world`. We can do that by updating the listener to the following:

```js
bot.on('message', (message) => {
  if (!message.content.startsWith(prefix)) return
  var command = message.content.slice(prefix.length)
  if (command == 'hello') {
    message.reply('world')
  }
})
```

Test it out by sending a message with `h!hello`. The bot should respond with `world`. 

![Bot command in channel](https://cloud-jjd7stz3y-hack-club-bot.vercel.app/5createapplication6767.png)

# Final Source Code

If you followed the steps above, your code should look exactly like this:

```js
const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = 'h!'

bot.on('message', (message) => {
  if (!message.content.startsWith(prefix)) return
  var command = message.content.slice(prefix.length)
  if (command == 'hello') {
    message.reply('world')
  }
})

bot.login('yourtokenhere')
```

# Additional Dependencies

More dependencies can be installed on Repl.it using the packages tab on the left hand side. It looks like a box. You can search up any package you want there and press install.

Here is a list of the other packages that will help to speed up `discord.js`:

- uws
- erlpack
- sodium
