---
name: 'Dialogflow-chatbot'
description: 'Build a simple chatbot using Dialogflow'
author: '@tanishq-soni'
---

# Dialogflow Chatbot

In this workshop you will build a simple chatbot using Dialogflow.

Dialogflow is a natural language understanding platform used to design and integrate a conversational user interface into mobile apps, web applications, devices, bots, interactive voice response systems, and so on.

You will make something like this 👇

![Live](https://cloud-pkyy0sbgm.vercel.app/0chat-bot1.gif)

[check out this demo of final product!](https://bot.dialogflow.com/simple-chatbot)


## Getting Started 🚀

To get started you should a basic knowledge of:

- HAHA! Nothing, this is a beginner-friendly workshop.

### So let's begin 💨

# Creating a Dialogflow Agent 💻

First, you will need to create a Dialogflow agent.

Dialogflow agent is a virtual agent that handles conversations with your end-users.

So for creating a agent you need to visit [Dialogflow console](https://dialogflow.cloud.google.com/#/newAgent)

After visiting, you will see a page similar to this:

![Landing page](https://cloud-501jqj1w8.vercel.app/01.png)

Here at the top you'll see `Agent name` section

![Agent name](https://cloud-501jqj1w8.vercel.app/12.png)

Here you have to give a name to your Dialogflow agent such as `simple-chatbot`.

After giving name just click on `CREATE` button.

![Creating agent](https://cloud-501jqj1w8.vercel.app/23.png)

After creating Agent you'll be redirected to Intents page.

An [Intent](https://cloud.google.com/dialogflow/es/docs/intents-overview#:~:text=An%20intent%20categorizes%20an%20end%2Duser's%20intention%20for%20one%20conversation%20turn.&text=When%20an%20end%2Duser%20writes,also%20known%20as%20intent%20classification.) categorizes an end-user's intention for one conversation turn.

![Intents page](https://cloud-501jqj1w8.vercel.app/34.png)

Here you'll see two default intents:

- Default Fallback intent
- Default Welcome intent

So, in this workshop you don't need it as you will creat on our own. So, you have to delete them.

To delete just hover cursor over it and you'll see delete icon.

![delete default intent](https://cloud-ja1qqre3i.vercel.app/410.png)

After deleting both intents click on the `CREATE INTENT` button to create new intents.

![create intent](https://cloud-501jqj1w8.vercel.app/45.png)

Here you will create two intents in this workshop:

1. ask-name:
   
   In this you will trigger the bot by welcome commands like `Hello`, `Hi`, `Hey` and bot will ask your name.

2. final-output:

   In this you will give your name to bot and bot will return your name with some comment like `Hey {your name}, Nice to meet you!` and end the conversation.

# Creating Intents 💻

### 1. ask-name:

When you landed to intents page you will see a page similar to this:

![intent page](https://cloud-ja1qqre3i.vercel.app/06.png)

Here you have to give a name to your first intent such as `ask-name`.

![intent ask-name](https://cloud-ja1qqre3i.vercel.app/28.png)

On that page you'll see a block name `Traning Phrases` and their you'll see `ADD TRAINING PHRASES` button. So, click on it.

Training phrases are example phrases for what end-users might type or say to trigger that intent.

![Training phrase a-n](https://cloud-ja1qqre3i.vercel.app/39.png)

So, add training phrases like `Hello`, `Hii`, `Hey` adn anything you want to trigger the intent!

![Adding phrases](https://cloud-oqmxib6bs.vercel.app/011.png)

Now, after adding several training phrases scroll down the page till you see a block name `Responses`.

Responses are the response from the bot when you trigger it with the training phrases you mentioned above.

![Responses](https://cloud-oqmxib6bs.vercel.app/112.png)

So, add some responses like you need to ask name, 
`Hello! what is your name?`, 
`Welcome! what is your name?`and etc.

![Add responses](https://cloud-oqmxib6bs.vercel.app/213.png)

After adding responses, again scroll up till you see `Contexts` block.

Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent.

As you need to pass the name given by you to the next intent so you need to add contexts.

![Context](https://cloud-oqmxib6bs.vercel.app/314.png)

Contexts block has two input sections:

- Input Context: It is used to take a reference from previous intent.

- Iutput Context: It is used to give a reference to next intent.

As you need to pass name to next intent you will add output context.

Give a name to context like `name`.

![Context name](https://cloud-oqmxib6bs.vercel.app/415.png)

As you can see there is a number before the `name`, it shows the lifespan of that context. It is `5` by default so change it to `1` as you need to pass it to one intent (the next intent).

![context lifespan](https://cloud-ie8dhb70i.vercel.app/116.png)

So, atlast click on `SAVE` button.

Hoorayy! you created you successfully first intent.

To create second intent, click on `+` icon in the `Intents` tab on left menu.

![New intent](https://cloud-ie8dhb70i.vercel.app/016.1.png)

After clicking on it, you'll be landed to new intents page.

### 2. final-output:

Here, give a name to your intent `final-output`.

As you created an output context in previous intent, you need to add it here.

So click on `contexts` block

![Next context](https://cloud-ie8dhb70i.vercel.app/217.png)

In the input context field add `name` as you have passed `name` from previous intent.

![Context input](https://cloud-ie8dhb70i.vercel.app/318.png)

After adding context, you need to add training phrases like previous intent.

As the bot is asking your name, so add some random names to it.

![Training names](https://cloud-ie8dhb70i.vercel.app/419.png)

After adding training phrases, scroll down till you see a block `Actions and Parameters`.

![Action and parameter](https://cloud-ie8dhb70i.vercel.app/520.png)

Here you need to add some actions.

The action field is a simple convenience field that assists in executing logic in your service.
When building an agent, you can set this field to any text you find useful.

Here you will find different fields and you need to work on this fields given below:

- **Required**: Check this box if the parameter is required for the intent to be complete.
- **Parameter Name**: A name that identifies the parameter, like : `name`
- **Entity**: The entity type associated with the parameter, like : `@sys.any`.
- **Value**: It is a parameter reference like `$name`, which is used as a placeholder for the extracted value at runtime.

![Action fills](https://cloud-mededak1r.vercel.app/021.png)

Here you have to choose Entity as an `@sys.any` because Entity `@sys.give-name` has limited names to recognise.

How it looks like:

![Final actions](https://cloud-mededak1r.vercel.app/122.png)

After adding actions you need to match actions with your training phrases.

So go to training phrases block and highlight each phrase and you will see a page similar to this:

![Match phrases](https://cloud-mededak1r.vercel.app/223.png)

So mark phrase with action `@sys.any:name`.

![Mark phrase](https://cloud-mededak1r.vercel.app/324.png)

Do it for each and every phrases.

![All marked phrase](https://cloud-mededak1r.vercel.app/425.png)

After marking all phrases with action, you need to add respone that bot will give after you give name.

So, scroll down to `Responses` block.

![End Responses](https://cloud-mededak1r.vercel.app/526.png)

Add some responses like:

- `Hey! nice to meet you`.
- `Thanks for using me`.

![Response added](https://cloud-mededak1r.vercel.app/627.png)

Here you can see `$name` keyword, it is the reference you have given in actions block to recognise names.
So `$name` will return the name which is entered by user.

Example:  
I entered the name `Steve` then `Hello $name` will return `Hello Steve`.

As this will be the end of conversation, so below the `ADD RESPONSES` button you will see `Set this intent as end of conversation`. So, enable it.

At last click on `SAVE` to save this intent.

![Save last intent](https://cloud-mededak1r.vercel.app/728.png)

Now, our agent is ready to test!

# Testing Agent 💻

You will test your agent in a form of web demo.

So for that click on Integrations tab on left menu.

![Integration](https://cloud-ay0nti5f8.vercel.app/029.png)

After clicking on integration you will see a page similar to this:

![Integration main page](https://cloud-ay0nti5f8.vercel.app/130.png)

Here you can integrate your agent on various platforms where it is slack, Telegram, Twilio or your own webpage.

So, you will create a web demo, so scroll down till you find `Web Demo` block.

![Web demo](https://cloud-ay0nti5f8.vercel.app/231.png)

click on it to enable web demo for your agent.

After enabling a new page will pop-up.

![Web demo page](https://cloud-ay0nti5f8.vercel.app/332.png)

Here you will find a link to your agent also some sort of code which is used to embeed it in your own webpage.

So, click on that link to open your agent in web.

![Link click](https://cloud-ay0nti5f8.vercel.app/433.png)

Now, you can see your agent or your simple-chat bot on a webpage!

![Agent on web](https://cloud-ay0nti5f8.vercel.app/534.png)

So what are you waiting for? Go and had a nice converstion with your own chatbot.

![Chat conv.](https://cloud-lkxuqb6ez.vercel.app/035.png)

# Hooray!🎉

You finished the Dialogflow chatbot workshop by completing all tasks:

- Creating a Dialogflow Agent.
- Creating Intents.
- Testing Agent.

# ⚡ What's Next?
Now, how you can expand it? Try adding some cool commands and try different integrations with the help of [Dialogflow documentation](https://cloud.google.com/dialogflow/es/docs)

Here are some examples 👇

- Integrate the agent with Slack.
- Creating a agent which asks personal details from user.
- Integrate it with Google Assistance.

