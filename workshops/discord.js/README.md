---
name: 'Discord.js'
description: 'Create a simple Discord Bot.'
author: '@sarthaktexas'
---

Discord is a powerful community platform that can be used with huge communities to small study groups. Discord can be made even better and more useful with bots. We'll be creating a simple ping bot.

![](https://cloud-e4ago2m0m.vercel.app/image.png)

In this workshop, you’re going to create a galaxy out of shimmering particles that expand and move based on microphone input, in less than 50 lines of code.

[Link to demo](https://repl.it/@Sarthaktexas/discord-js-tutorial)

## Prerequisites
- Basic knowledge of the command line interface
- Knowledge of how to use Discord

## Creating Your Dev Environment

### Local Dev Users
Create a new folder and run `npm init` inside the folder.
We'll be using the `dotenv` library and the `discord.js` library to create the bot.
Go ahead and install it using the following command:

```bash
npm install dotenv discord.js
```

### Glitch Users
Create a new Repl using the **Javascript** template. You don't need to do anything above as Glitch does that for you :)

## Requiring the Packages

### dotenv
```javascript
require('dotenv').config();
```
This `requires` the `dotenv` package. The `dotenv` package brings all the variables from the local `.env` file and dumps them into `process.env` (environment variables), so secret keys and such can be imported into your public file. This eliminates accidentally pushing your `token` to Git Version Control.

### discord.js
```javascript
const Discord = require('discord.js');
const client = new Discord.Client();
```
This `requires` the `discord.js` package. The `discord.js` package allows you to do everything a normal user can do in Discord through Javascript.

The second line initializes the `Client` function so all events (messages) will come to the bot.

## Creating the onReady Event Listener
```javascript
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});
```
What this does is when the client is logged in and `ready`, the function starts which runs the `console.log()` function that looks a bit like this:

![](https://cloud-m6wj6kleq.vercel.app/image.png)

The `Logged in as ${client.user.tag}` is called a **Template Literal String**. It's used to put variables inside a string. It's equal to this:
```javascript
'Logged in as ' + client.user.tag;
```
It's just a simpler way of putting variables in strings in Javascript :)

## Creating the onMessage Event Listener
```javascript
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});
```
What this does is when a user sends a message in Discord, check the content of the message and check if it matches "ping". If so, reply to the message with "Pong".

### Things you may not know: If Statements
```javascript
if (requirements) {
    // what do you want to do
}
```
If requirements is a single string, it checks the boolean value for `true`.

If you're trying to match it to a string or number

`==` is an abstract equality (e.g. `+0 == -0` => `true`) [used for numbers]

`===` is an strict equality (e.g. `+0 === -0` => `false`, `+0 === +0` => `true`) [used for strings]

Also, you can use `else if` or `else` to run alternative code if something else happens
```javascript
const hackclub = 'cool';

if (hackclub === 'cool') {
    // If variable hackclub is equal to "cool", run this code
    console.log('hackclub is cool :)');
} else if (hackclub === 'stupid') {
    // If variable hackclub is equal to "stupid", run this code
    console.log('hack club is stupid');
} else {
    // If variable hackclub doesn't match any if statements above, run the following code:
    console.log('um... what\'s hack club?');
}
// Outputs: hackclub is cool :)
```
One more thing to add is that `else` statements are only required if you want to do something in it, otherwise, you don't need it.
> and if you're curious, the \' is so the string doesn't get terminated after the "t". If the slash wasn't there, it wouldn't work because JavaScript thinks that's the ending apostrophe
## Logging into Discord as the Bot

## `dotenv` Setup
Create a file called `.env` in your folder.
We can then put the following inside:
```