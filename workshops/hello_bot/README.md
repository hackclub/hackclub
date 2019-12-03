---
name: Hello Bot
description: A Discord bot with a simple "Hello World!" command.
author: '@hickorysb'
group: experimental
order: 11
---

If you've ever used Discord it's very likely you've come across a bot. This workshop will help guide you on how to create you're own.

# Setting Up Repl.it

Create a new Node.js Repl on [Repl.it](https://repl.it/). If you follow the next step exactly, when you click run you Repl will automatically download and install Discord.js as a dependancy.

The list of optional dependencies and how to install them will be included at the bottom of this workshop. Now that `discord.js` is installed we can start to actually code our bot. # Discord.js Basics The documentation for `discord.js` can be found [here](http://discord.js.org/). First, we need to require `discord.js` so that we can use it in `index.js`. We can do that using this code:
```js
const Discord = require("discord.js");
```

Now, `discord.js` needs to be initialized. We can initialize it using the following code:
```js
const bot = new Discord.Client();
```

After `discord.js` has been initialized we can log in with the bot. I will include instructions on how to get a token for your bot in the next section. The following code will be used for logging in:
```js
bot.login("token");
```

`token` is a placeholder for the bot's token. `discord.js` is event-based, meaning we set up listeners for the events that we want to respond to. The main one we're going to work with is `message`, this event will be fired anytime a message is sent in a server your bot is a member of. As long as the bot has privileges to read the channel the message was sent in. To add a listener for the `message` event we can use the following code:
```js
bot.on("message", (message) => { console.log(message.content); });
```

There's quite a bit going on in that bit of code. So let's break it down. `bot.on()` is the function that we use to set what function will be called when the specified event is fired. `"message"` tells `discord.js` which event that function is for. In this case it is the `message` event. The `(message) => {}` bit is the lambda method for creating a function, you can read more about those [here](https://www.vinta.com.br/blog/2015/javascript-lambda-and-arrow-functions/). The final part of that block of code is `console.log(message.content`, this logs the message that was sent to the console. At this point your `index.js` file should look like the following:
```js
const Discord = require("discord.js");
cons discord = new Discord.Client();
bot.on("message", (message) => { console.log(message.content); });
bot.login("token");
```

# The Hello World Command

Most Discord bots have a thing called a prefix. The prefix allows the bot to tell the difference between a regular message and a command it is meant to interpret. It is not recommended to use a prefix that is already largely popular, some examples are `!`, `?`, `/`, and `=`. Instead, combine some of those options or use something unique like `-`. For this workshop, we will use `h!` as our prefix. We want to declare a constant for our prefix, so we only have to change it in one place if we decide to update it later. We can do that using the following line:
```js
const prefix = "h!";
```

Now, we will update our listener function to check that the message starts with our prefix. The following is what the updated listener should look like:
```js
bot.on("message", (message) => { if(!message.content.startsWith(prefix)) return;
console.log(message.content); });
```

This code will check for the prefix, and if the message doesn't start with it it will exit. If it contains the prefix it will print the entire message to the console. However, to get the actual command we will need to remove the prefix from the message string:
```js
bot.on("message", (message) => {
  if(!message.content.startsWith(prefix)) return;
  var command = message.content.slice(prefix.length);
  console.log(command);
});
```

This code will now only print the command from the message. Now we should actually have the bot send a message in Discord! For this workshop, the command will be `hello` and the response from the bot will be `world`. We can do that by updating the listener to the following:
```js
bot.on("message", (message) => {
  if(!message.content.startsWith(prefix)) return;
  var command = message.content.slice(prefix.length);
  if(command == "hello") {
    message.reply("world");
  }
});
```

# Getting a Token

Go to the [Discord Developers Page](https://discordapp.com/developers/applications/) and sign in. Click "New Application", give your bot a name, and press "Create". Go to the bot tab, and click "Add Bot". Click the "Copy" button to copy the bot's token.

# Additional Dependencies

More dependacies can be installed on Repl.it using the packages tab on the left hand side. It looks like a box. You can search up any package you want there and press install.

Here is a list of the other packages that will help to speed up `discord.js`:
- uws
- erlpack
- sodium
