---
name: Discord Chatbot
description: Make a Discord bot with Discord.js and Dialogflow which talks with you!
author: '@k4u5h4L'
---

# Discord Chatbot

Make a discord bot which talks with you!

References:

- Here's the [final code](https://repl.it/@k4u5h4L/discord-chatbot-complete).

- Here's the [starter code](https://repl.it/@k4u5h4L/discord-chatbot).

The workshop should take about 20 minutes.

The video tutorial for this workshop is linked at the bottom of this workshop with the required links for documentation and resources.

I will leave all reference links below so that it will be easy for you to find it in one place

- Bot: https://discord.js.org/
- Authentication: https://cloud.google.com/docs/authentication/getting-started
- Using Dialogflow: https://github.com/googleapis/nodejs-dialogflow#using-the-client-library
- Dialogflow console: https://dialogflow.cloud.google.com/
- Discord developers portal: https://discord.com/developers
- Bot permissions calculator: https://discordapi.com/permissions.html

## Part 1: Getting API keys!

### Setting up the Discord bot

To set up the bot, you need to visit the [Discord dev portal](https://discord.com/developers) and set up an application.
Click to the top right button to create a new application.
Keep this page open for a while, as we may be taking some stuff from here...

![new app](https://cloud-9x2pb85rb.vercel.app/screenshot1.png)

Go ahead and give it a cool name! I'm going to name it as doodle-noddle, but you can name it whatever you want!

![fill name](https://cloud-9x2pb85rb.vercel.app/screenshot2.png)

Then go ahead and create the application.
Now go to the bot section in the menu on the left hand side, and add a new bot.

![add bot](https://cloud-9x2pb85rb.vercel.app/screenshot3.png)

If you get any formation like this, click on "yes, do it".

![confirm bot](https://cloud-9x2pb85rb.vercel.app/screenshot4.png)

Now you should be greeted with this screen. If you successfully get this, then you're good!

![bot done](https://cloud-9x2pb85rb.vercel.app/screenshot5.png)

![celebration](https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif)

Now, we will add this bot to our server. For this, You need to be the admin of the server.

Assuming you have logged in to your discord account and made a server or having an exisiting server as an admin, let's proceed!

Visit [this page](https://discordapi.com/permissions.html) to set the permissions of your bot and get the link to add your bot to your server.

You will have to tick these permissions below:

- Read Messages
- Send Messages
- Embed links
- Attach Files
- Read Message History
- Mention @everyone, @here, and All Roles

Now your screen should look something like this:

![bot permissions](https://cloud-9x2pb85rb.vercel.app/screenshot6.png)

Now, we need to go back to the discord dev page to get the `CLIENT ID` of your application.

So in the "General Information" tab in the menu on the left side, you need to copy your `CLIENT ID`, and paste it in the 'CLIENT ID' field in the permissions page.

After doing so, you will get a link to add your bot to your server. So go on to that link and add your bot to the server you created.

So now, we only have one thing left to do in this part. Go back to the "bot" tab and copy the `TOKEN` and keep it somewhere safe. We will be soon using it.

Whew, that's a lot of information. But don't stop just yet, we are on our way!

![whew](https://media.giphy.com/media/JMV7IKoqzxlrW/giphy.gif)

### Setting up the Dialogflow agent

Now that we have successfully set up the Discord bot and saved the API token, we shall move on to set up Google's Dialogflow platform to manage all the "talking" our bot is gonna do! And you know what the best part is? You will be doing all this without writing a single line of Machine Learning code!!

Sounds exciting? Follow me to set this up too!

Visit the [Dialogflow console](https://dialogflow.cloud.google.com/) to set up the agent. Remember, you need to have a google account to be able to login.

![dialogflow console](https://cloud-9x2pb85rb.vercel.app/screenshot7.png)

Now you will have to click on this drop down menu, and create a new agent. Go ahead and name it whatever you want.
I'll call mine as doodle-noodle-agent!

![name agent](https://cloud-9x2pb85rb.vercel.app/screenshot8.png)

Now hit the Create button and wait for a few seconds for the agent to be created.

After a while, you will be greeted with this screen.

![create bot](https://cloud-9x2pb85rb.vercel.app/screenshot9.png)

Now click on the "Small Talk" tab on the menu on the left side, and go ahead and enable the small talk toggle. This is essential if you want your bot to be able to converse with you.

![small talk](https://cloud-9x2pb85rb.vercel.app/screenshot10.png)

Now, we need to get API keys from dialogflow just like how we did it with Discord. For this, click on the gear icon beside your agent name. This will take you to the settings pannel of agent.
Here click on your `Project ID` and open it in a new tab.

![agent settings](https://cloud-q4uz3wse3.vercel.app/screenshot15.png)

Now go to `Project settings` in your GCP console. If you haven't logged in to GCP, make sure you are using the same Google account with which you have created the Dialogflow agent with.

![gcp console](https://cloud-q4uz3wse3.vercel.app/screenshot16.png)

Now, you will be greeted with this page. Go to `Service Accounts` on the left hand menu.

![gcp service account creation](https://cloud-q4uz3wse3.vercel.app/screenshot17.png)

Now, click on the link for the `Service Account`.

![GCP service account](https://cloud-cl244cmpv.vercel.app/screenshot12.png)

Here, click on your service account down there.
(If your service doesn't exist, then wait for a while for it to get created. If it still doesn't appear, then create the agent once again. If this too doesn't work, then go ahead and create a new service account using the button beside `Service Accounts`)

![add key](https://cloud-cl244cmpv.vercel.app/screenshot13.png)

Now, click on "Add Key" and create a new key in JSON format.

(Create a new key even if a previous one exists)

This should automatically get downloaded for you to your local system.

This is your API key from Dialogflow. Keep this safe, as it has private information about your dialogflow account.

Now that you have come so far, give yourself a pat on your back, because we are all set up to start coding the bot using discord.js and dialogflow APIs.

![pat on back](https://media.giphy.com/media/9Q249Qsl5cfLi/giphy.gif)

## Part 2: Start coding the bot!

Here, we will be using JavaScript as a programming language to code out the discord bot. I will be using code snippets from [discord.js](https://discord.js.org/) and [Node.js Dialogflow client](https://github.com/googleapis/nodejs-dialogflow#using-the-client-library) documentation. So if you're interested you can have a read before we move on!

Now let's get our hands dirty and start coding the bot!

Go ahead to [this repl link](https://repl.it/@k4u5h4L/discord-chatbot) to code out the bot online! All the packages are already installed for you there so that you can directly dive into the code!

Go on and fork the repl.

Okay so now in the repl site, you need to create a file called `.env` in the working directory, and paste in the `TOKEN` value. Eg - suppose my token is `12345`, it will look like

```
DISCORD_TOKEN=12345
```

Avoid any quotes. It should just be the name and value. Also don't forget to add in your project ID in the `.env` file as well. You will find it in the json file you downloaded.

So in the end your `.env` file will look like this (assuming my `project ID` is qwerty):

```
DISCORD_TOKEN=12345
PROJECT_ID=qwerty
```

One last thing, create a new file called `config.json` and paste all the contents of the json file you donwloaded from Dialogflow.

All the imports are already done for you! So we shall get to start coding the logic now.

This is what [discord.js](https://discord.js.org/) documentation has for us. I have taken the liberty of showing you all the code we need for this bot.

```js
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.login('token')
```

The above code spins up a simple bot which replies "Pong!" if soneone texts "ping"!

Here we are first importing the packages required, and creating a client. Once the client is ready, we are logging that the client is ready.

We will see the code for DIalogflow, again, taken for [their documentation](https://github.com/googleapis/nodejs-dialogflow#using-the-client-library).

We will modify the function to send a request to Dialogflow everytime a user sends a text. So for this, we need to pass in the user's message as a parameter to the function. We'll first start by renaming the function to `replyMsg`.

Here's the code included with the modifications:

- First, we will make an async function which takes in the text from the user as a parameter and declare a `projectId` variable in it.

```js
async function replyMsg(textMsg) {
  const projectId = process.env.PROJECT_ID
}
```

- Now we will have to create a session using a package called `uuid`. If you are using [this repl link](https://repl.it/@k4u5h4L/discord-chatbot) all the imports have been done for you. So we will just add the `sessionId` variable in that function.

```js
const sessionId = uuid.v4()
```

- Now we need to create a new session. This is nicely documented in the [this link](https://github.com/googleapis/nodejs-dialogflow#using-the-client-library). So we will set it all up.

```js
const sessionClient = new dialogflow.SessionsClient()
const sessionPath = await sessionClient.projectAgentSessionPath(
  projectId,
  sessionId
)
```

- So no we will create a request object which will be sent to Dialogflow to get processed. For this, we have to create a structure like this:

```js
const request = {
  session: sessionPath,
  queryInput: {
    text: {
      // The query to send to the dialogflow agent
      text: textMsg,
      // The language used by the client (en-US)
      languageCode: 'en-US'
    }
  }
}
```

It takes in the `sessionPath` we just created, and a `queryInput`. In that we will will have to add a field called `text`, and again inside that we will have to feed in the user's text as a query. We will leave the `languageCode` as `"en-US"` since that's the language we're using.

- So now finally, we will write code to filter out the response received.

```js
const responses = await sessionClient.detectIntent(request)
const result = responses[0].queryResult
console.log(`Query: ${result.queryText}`)

return await result.fulfillmentText
```

Here, we will wait for the response, and when it's got, we will extract the `queryResult` from it. We will log the `queryText`, which is basically what the user sent for debugging purposes, and we shall return the `fulfillmentText`, which contains the reply for the user's text from Dialogflow.

Now, your entire function will look like this:

```js
async function replyMsg(textMsg) {
  const projectId = process.env.PROJECT_ID
  const sessionId = uuid.v4()

  const sessionClient = new dialogflow.SessionsClient()
  const sessionPath = await sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  )

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: textMsg,
        // The language used by the client (en-US)
        languageCode: 'en-US'
      }
    }
  }

  // Send request and log result
  const responses = await sessionClient.detectIntent(request)
  const result = responses[0].queryResult
  console.log(`Query: ${result.queryText}`)

  return await result.fulfillmentText
}
```

For those of you who need more explanation, y'all can read it down below:

![thinking](https://media.giphy.com/media/a5viI92PAF89q/giphy.gif)

Let me tell you!

We are hard coding the `projectId` as it won't change, at least for our bot, from an environment variable we just set up (remember the .env file?).

The package `uuid` generates a new string everytime it's method is called. So we are using it for a session ID required by dialogflow.

Then we are creating session clients with the `projectId` and the `sessionId` got from `uuid`.

Then comes the `request` object which will be sent to Dialogflow to be interpreted. You specify the text from the user here in the `text` attribute so that the Dialogflow agent can read it and send a corresponding reply.

Once that reply happens, we will capture that in a variable called `responses`. From here we will log the `queryText` which is the text what the user sent, and return the `fulfillmentText` which is a response to that text got back from Dialogflow.

Whew, that's a lot to digest huh? But stay with me, we're almost on the way to complete this!

<hr />

Now what we need to do is integrate both Dialogflow and discord.js to make a chatbot. For this, you only need to change the function when a message reaches the bot. Instead of sending "Pong!", we will send the text got from DIalogflow.

```js
client.on('message', (message) => {
  if (!message.author.bot) {
    replyMsg(message.content).then((res) => {
      console.log(res)
      message.reply(res)
    })
  }
})
```

So here, we are first checking if the user sending this message is not a bot. If you don't include this condition, then there may be an infinite loop where the bot replies to itself. So keep it for safety.

After the checking, you relay the message sent from the user to DIalogflow. And when the response is received by Dialogflow, you are sending it back to the user.

It's all coming together now eh?

![coming together](https://media.giphy.com/media/KFszZKN9kP8UJk7BlS/giphy.gif)

## To try it out!

Now to finally try out the bot and see if it actually works!

Check your code if all your variables and JSON api files are correct and updated. If all looks good, hit the RUN button, and wait for the `Bot ready!` message to be displayed. If this is displayed, then your discord API is working!

Now, try sending a message in the server.

This is what I received from the bot when I tried to talk with it

![bot texting](https://cloud-cl244cmpv.vercel.app/screenshot14.png)

![done](https://media.giphy.com/media/Q5RiiXiUWWVjvE3rER/giphy.gif)

It's awesome isn't it? You can now talk with your virtual agent you created in this workshop!

## Going forward

You can go back to your dialogflow console and customise your bot even more! You can go back to the code and documentation and see if there is any new features and stuff which can be added or modified.

Here are the codes some demos of how the project can be expanded upon:

- Bot which replies to the user about Hack Club: [code](https://repl.it/@k4u5h4L/discord-chatbot-complete)
- Bot which sends a scraped meme when a user asks for one: [code](https://repl.it/@k4u5h4L/discord-chatbot-complete-meme)
- Bot which tells you joke when called: [code](https://repl.it/@k4u5h4L/discord-chatbot-complete)

## Note:

- If I may have disclosed any API keys in this workshop, please don't use the same keys since I have already revoked them and they don't work anymore. You have to visit those sites and get registered to get your hands on these keys.

- To those of you people who felt difficult following this workshop, we got your back! We have an extensive Youtube video covering topics from the beginning to the very end. So just click on on the below picture if you're confused!

  [![discord.js bot](https://img.youtube.com/vi/FwIi2Z-7fmI/0.jpg)](https://www.youtube.com/watch?v=FwIi2Z-7fmI)
