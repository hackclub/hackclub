---
name: 'Discord Custom Message Bot'
description: 'Save your own own custom messages!'
author: '@JakeGerber'
---
# Create a discord bot that allows you to save custom messages!

<img src="https://cloud-bj4vorj8t.vercel.app/examplebot.png" width="380" alt="Message Example">

## Setup
You should know how to set up a hello world discord bot for this workshop. It is REALLY easy. If you do not know how to create a this look [here](https://workshops.hackclub.com/hello_bot/).

Let's start!

You will start with an index.js file. This is where you will be writing your javascript code. Also, create a file cased msgs.json and add a pair of brackets to it. This will be where the messages will be stored. If you do not know what a JSON is, it is a file format that allows you to save key value pairs. If you need more information, check [here](https://www.json.org/json-en.html).

<img src="https://cloud-gh7l7h2q1.vercel.app/json_example.png" width="380" alt="Write Command Example">

In your index you should have something that looks like this that you will be familiar with from creating a Hello World bot program, but there are a few things here you won't understand but will be explained.
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

Let's start by explaining what the prefix is. It allows you to use an exclamation mark to call the bot! Some people have other prefixes such as a dash or pound symbol. It is up to you!
```js
prefix = "!"
```

You also most likely do not know what these two lines do.
```js
const fs = require("fs");
client.msgs = require("./msgs.json");
```
The fs is a file system node module. You need it to write to files.
The line after this says that the json file we created will have messages that will be written to it.

## Write Command
Now let's start with the write message command. This will allow you to add your own custom messages. The user will provide a key that the message will be saved to and the message itself.

<img src="https://cloud-kb9kganvz.vercel.app/write_message.png" width="380" alt="Write Command Example">

Within your client.on brackets add this if statement.
```js
if (message.content.startsWith(`${prefix}write `))
{}
```
The message.content part of this just looks at the message that the user typed.
What this does in this case is make sure your bot command starts with !write
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
If the user does not exist in the json, we are adding them. We are doing this based on id rather than username because every id is unique.
Then, we are adding the message under the user id in the json.

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

## Get Command
Now let's do the get command. This allows you to get the message you saved!

<img src="https://cloud-eing65rqs.vercel.app/get_message.png" width="380" alt="Get Command Example">

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

## Delete Command
Now let's do the delete command

<img src="https://cloud-uvlarb2g1.vercel.app/delete_message.png" width="380" alt="Delete Command Example">

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

## List Command
Now let's allow the user to get the list of all their saved messages.

<img src="https://cloud-2ghj25por.vercel.app/list_message.png" width="380" alt="List Command Example">

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

## Help Command
Finally, let's create a help command that allows the user to see all the available commands.

<img src="https://cloud-8qig9t4bs.vercel.app/help_message.png" width="380" alt="Help Command Example">

```js
if (message.content == (`${prefix}help`))
{
  message.channel.send("To send a message do: !write {messageKey} {message}\nTo get a message do: !get {messageKey}\nTo delete a message !delete {messageKey}\nTo view your    messages !list");
}
```
This message just sends a message to discord with all the available commands. You can add to it if you create your own!


## Final Source Code
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

## More that you can make
this is not done I need to add the files to the other enchanced projects
