# Create a discord bot that allows you to save custom messages!

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

Your entire command should look like this!
```js
if (message.content.startsWith(`${prefix}write `))
{
  var tempSplits = message.content.split(" ", 2);
  var keyVal = tempSplits[1];
  var messageVal = message.content.slice(tempSplits[0].length + tempSplits[1].length + 2);
       
  if (client.msgs[message.author.id] == undefined)
  {
    client.msgs [message.author.id] ={}
  }
  client.msgs[message.author.id][keyVal] = messageVal

  fs.writeFile ("./msgs.json", JSON.stringify (client.msgs, null, 4), err =>{
    if (err) throw err;
    message.channel.send("message written");
    })
}
```
The write command is done! Try it out and check the JSON file!
add image of what it looks like


Now let's do the get command. This allows you to get the message you saved!
```js
if (message.content.startsWith(`${prefix}get `))
{
  let getMessage = message.content.slice(5);
  let _msg = client.msgs[message.author.id][getMessage];
  message.channel.send(_msg);
}
```
-The if statement makes sure the user inputs the !get {messageKey}
-The first line in the if statement gets rid of the !get part of the message to isolate the message
-The second line gets the message in the JSON file.
-The third line has the bot send the message in the discord channel.


Now let's do the delete command
```js
if (message.content.startsWith(`${prefix}delete `))
{
  let getMessage = message.content.slice(8);

  delete client.msgs[message.author.id][getMessage];

  fs.writeFileSync("./msgs.json", JSON.stringify(client.msgs));

  message.channel.send(getMessage + " has been deleted.");
}
```
-Start with the if statement which makes sure the message is !delete {messageKey}
-The first line in the if statement isolates the message.
-The second line deletes the message in the JSON.
-The third line updates the JSON with the message now deleted.
-The fourth line sends a message to let the user know the message was deleted.

Now let's allow the user to get the list of all their saved messages.
```js
if (message.content == (`${prefix}list`))
{
  var messageList = "";

  for(var key in client.msgs[message.author.id])
  {
    messageList += (key+", ");
  }
  
  message.channel.send(messageList);
}
```
-The if statement just makes sure the user does !list in order to get the list.
-The first message creates an empty string named messageList.
-The for loop cycles through all the key value pairs messages that the user has saved. The inside of the loop adds the messageKey to the messageList.
-The final message sends the messageList string to the discord channel.


Finally, let's create a help command that allows the user to see all the available commands.
```js
if (message.content == (`${prefix}help`))
{
  message.channel.send("To send a message do: !write {messageKey} {message}\nTo get a message do: !get {messageKey}\nTo delete a message !delete {messageKey}\nTo view your    messages !list");
}
```
This message just sends a message to discord with all the available commands. You can add to it if you create your own!


Final Source Code
```js
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs");
client.msgs = require("./msgs.json");
prefix = "!"

client.on('message', (message) => {
if (message.content.startsWith(`${prefix}write `))
{
  var tempSplits = message.content.split(" ", 2);
  var keyVal = tempSplits[1];
  var messageVal = message.content.slice(tempSplits[0].length + tempSplits[1].length + 2);
       
  if (client.msgs[message.author.id] == undefined)
  {
    client.msgs [message.author.id] ={}
  }
  client.msgs[message.author.id][keyVal] = messageVal

  fs.writeFile ("./msgs.json", JSON.stringify (client.msgs, null, 4), err =>{
    if (err) throw err;
    message.channel.send("message written");
    })
}

if (message.content.startsWith(`${prefix}get `))
{
  let getMessage = message.content.slice(5);
  let _msg = client.msgs[message.author.id][getMessage];
  message.channel.send(_msg);
}

if (message.content == (`${prefix}list`))
{
  var messageList = "";

  for(var key in client.msgs[message.author.id])
  {
    messageList += (key+", ");
  }
  
  message.channel.send(messageList);
}

if (message.content == (`${prefix}help`))
{
  message.channel.send("To send a message do: !write {messageKey} {message}\nTo get a message do: !get {messageKey}\nTo delete a message !delete {messageKey}\nTo view your    messages !list");
}

})

bot.login('token')
```
*Make sure you insert your bot token where 'token' is*
```
