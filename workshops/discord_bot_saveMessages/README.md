# Hey! Create a discord bot that allows you to save custom messages!

This workshop requires that you know how to set up a hello world discord bot! It is REALLY easy. If you do not know how to create a this look at [this link](https://workshops.hackclub.com/hello_bot/).

Okay! All good! Let's start!

You should have something that looks like this. There are a few things here you won't understand but will be explained.
```js
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs");
client.msgs = require("./msgs.json");
prefix = "!"

client.on('message', (message) => {
})

bot.login('token')
```
*Make sure you insert your bot token where 'token' is*

Let's start by explaining what the prefix is. It allows you to use an exclamation mark to call the bot!
```js
prefix = "!"
```

You also most likely do not know what these two lines do.
```js
const fs = require("fs");
client.msgs = require("./msgs.json");
```
The fs is a file system node module. You need it to write to files.
The line after this is creating a json file where messages will be written to.


Now let's start with the write message command. This will allow you to add your own custom messages.
Within your client.on brackets add this if statement.
```js
if (message.content.startsWith(`${prefix}write `))
{}
```
What this does is make sure your bot command starts with !write
The bot command will be !write {messageKey} {message}

Within the if statement add these lines of code
```js
var tempSplits = message.content.split(" ", 2);
var keyVal = tempSplits[1];
var messageVal = message.content.slice(tempSplits[0].length + tempSplits[1].length + 2);
```
These three lines of code seperate the key value and the message into two seperate strings.
-The first line splits into two strings into an array based on the spaces. The two represents how big the array will be. Documentation is [here](https://www.w3schools.com/jsref/jsref_split.asp). The key value will be the second of the two strings.
-The second line assigns the second array value to the keyVal string.
-The third line takes the original user message and cuts out everything but the message part of the command.

Now let's add the user to the json file.
```js
if (client.msgs[message.author.id] == undefined)
{
  client.msgs [message.author.id] ={}
}
client.msgs[message.author.id][keyVal] = messageVal
```
If the user does not exist in the json, we are adding them. We are doing this based on id rather than username.
Then we are adding the message under the user id in the json.

Now let's add the user to the json file.
```js
fs.writeFile ("./msgs.json", JSON.stringify (client.msgs, null, 4), err =>{
  if (err) throw err;
  message.channel.send("message written");
})
```
This writes the message to a JSON and sends a message to the discord channel to confirm that you saved your message.

The write command is done! Try it out and check the JSON file!
add image of what it looks like

