---
name: Slack Todo List
description: Make a todo list Slack bot with Node.js and Bolt
author: '@khrj'
img: https://cloud-2xos4hsas.vercel.app/0screenshot_2020-11-16_at_1.00.14_pm.png
---

Ever wanted a todo list that's simple, easy, and integrated into your favorite messaging service? Well, today, we're building one!

Today, we'll be creating a Slack bot that maintains a todo list using [Bolt.js](https://slack.dev/bolt-js/) and [Node.js](https://nodejs.org/)

Here's the [final code](https://repl.it/@KhushrajRathod/TodoSlackApp). A live demo is available as "@Todo Bot" on the [Hack Club Slack](https://hackclub.com/slack/).

If you get stuck anywhere in this workshop, feel free to ask me questions! I'm @KhushrajRathod.

## Part 1: Preparing your environment
### Part 1.1: Preparing repl.it

Today we'll be using repl.it. Repl.it is an online code editor that we can use so we don't have to download a lot of stuff or resort to _Notepad/TextEdit_. Think of it as Google Docs, but for code (and also much more fun :D).

Follow these steps:

- Open https://repl.it/
- Click "Sign up"

![Arrow to sign up button on top right](https://cloud-pq5lbfiab.vercel.app/9signup-step1.png)

- Fill in some details

![Arrow to "Username", "Email" and "Password" fields in center of screen](https://cloud-91xu3gqm8.vercel.app/0signup-step2.png)

- You now have a Repl.it account! Next, click "New repl"

![Arrow to New repl button on the top left](https://cloud-pq5lbfiab.vercel.app/6new-step1.png)

- Search for "Node.js" in the search box, click "Node.js" and click "Create repl".

![Find node.js in the search box](https://cloud-9vsssxvna.vercel.app/0screenshot_2020-11-16_at_1.29.29_pm.png)

- You now have a Node.js repl setup successfully

![Arrow pointing to preview URL on top right of repl.it](https://cloud-ccj49d17x.vercel.app/3copyurlfromreplit.png)

#### Repl.it basics

<video muted autoplay loop controls>
    <source src="https://cloud-qiwsf0afg.vercel.app/0repl.it_basics.mp4" type="video/mp4">
    <ul>To add a file, click "Add file" in the top left and give it a name</ul>
    <ul>To write code, simply start typing in the code editor in the center of the screen</ul>
    <ul>To run code, click Run and refresh your page preview</ul>
    <ul>To format your code, click "auto-format" in the top-center of the screen</ul>
    <ul>To reload your page preview, click "Refresh" in the top-center of the screen</ul>
</video>

### Part 1.2: Getting Slack tokens

- First, go to [Slack's sign in page](https://slack.com/signin) and sign in to your workspace. If you don't have an existing workspace to use, you can simply create a new one [here](https://slack.com/get-started)

- Next, go to https://api.slack.com/apps and create a new app.

![Arrow pointing to "Create New App"](https://cloud-ccj49d17x.vercel.app/1createnewapp.png)

- Give your app a name, select your workspace, and click "Create App".

![Arrow pointing to "Create App"](https://cloud-ccj49d17x.vercel.app/0createslackappdetails.png)

- Inside Basic Information, go to "Add features and functionality" and click "Slash Commands"

![Arrows pointing to various places: 1. "Basic Information" on left sidebar, 2. "Add features and functionality" and 3. "Slash commands" in the dropdown](https://cloud-ccj49d17x.vercel.app/2basicinfo-features-slashcommands.png)

- Click "Create new command" and fill in the details for your command:
    - Command: /todolist (Note: If you're using the hackclub workspace, you'll need to use a different name for your command, such as /yournametodolist)
    - Request URL: https://yourappname.yourusername.repl.co/slack/events where `yourappname` is your repl's name and `yourusername` is your repl.it username. For e.x., my repl's name is TodoSlackApp and my repl.it username is KhushrajRathod, so my request URL is https://TodoSlackApp.KhushrajRathod.repl.co/slack/events
    - Short Description: Show your todo list

![Filled in details](https://cloud-ccj49d17x.vercel.app/4createnewcommand.png)

- Click save.

#### Challenge

Create two more commands, /todolistadd and /todolistremove. Use the same request URL, you may add a description and usage hint as you please.

---

- This is how your Slack API page should look now

![Three commands shown, /todolist, /todolistadd and /todolistremove](https://cloud-ccj49d17x.vercel.app/5finalslashcommands.png)

- Now, go to "OAuth & Permissions" in the sidebar, scroll down to "Scopes" and add chat:write and chat:write.public as Bot Token Scopes

![Three scopes present, commands, chat:write and chat:write.public](https://cloud-b17s5cy5p.vercel.app/0scopes.png)

- Scroll back to the top of "OAuth & Permissions" and click "Add to Workspace". Slack will ask you to authenticate with your workspace, once you're done with that you should be able to see a Bot User OAuth Access Token, copy that -- we'll need this later.

- Next, go back to "Basic Information" in the sidebar, scroll down to "App Credentials" and click "Show" next to Signing Secret. Copy the signing secret too -- we'll need this later.

We've finished setting up the Slack API side of our app!

![Minions cheering](https://cloud-pq5lbfiab.vercel.app/0cheer.gif)

## Part 2: Programming the bot backend

Head back to repl.it and open your Repl so we can get started! First, create a new file named ".env" (without quotes). This file will contain your signing secret and bot token, as `.env` is not visible to people viewing / forking your repl.

Inside `.env`, define your variables as follows (replace yourbottoken and yoursigningsecret with the tokens you copied above):

```ini
SLACK_BOT_TOKEN=yourbottoken
SLACK_SIGNING_SECRET=yoursigningsecret
```

This file will automatically be injected by repl.it into process.env in Node.js. Open the `index.js` file, and add the following:

```js
const { App } = require('@slack/bolt')

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
})

async function main () {
    await app.start(process.env.PORT || 3000)

    app.command('/todolist', async ({ command, ack, say }) => {
        await ack()
        await say(`Hello!`)
    })

    console.log('⚡️ Server ready')
}

main()
```

Explanation:

- First, we're importing Slack's [Bolt library](https://slack.dev/bolt-js/concepts) for Node.js, and using it to create a new instance of `App`.

- Next, we're starting the app and listening for the `/todolist` command.

- When someone calls `/todolist`, we want to 
    1. Acknowledge that command (Slack requires you to acknowledge all requests - otherwise it displays a "Timed out" error to the user)
    2. Reply with "Hello!"

Run your Repl, and open a channel in your Slack workspace. Try running `/todolist` -- You should see "Hello!" as a response from the bot.

### Challenge

Create similar commands for `/todolistadd` and `/todolistremove` - They just need to make the bot reply with "Hello!".

--- 

Here's how your code should look now:

```js
const { App } = require('@slack/bolt')

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
})

async function main () {
    await app.start(process.env.PORT || 3000)

    app.command('/todolist', async ({ command, ack, say }) => {
        await ack()
        await say(`Hello!`)
    })

    app.command('/todolistadd', async ({ command, ack, say }) => {
        await ack()
        await say(`Hello!`)
    })

    app.command('/todolistremove', async ({ command, ack, say }) => {
        await ack()
        await say(`Hello!`)
    })

    console.log('⚡️ Server ready')
}

main()
```

To store users' todo lists, we'll be using the [repl.it database](https://docs.repl.it/misc/database). Repl.it provides a handy client for the database to use with Node.js.

- First, import the library and create a client (at the very top of your file)

```js
const Client = require("@replit/database")
const database = new Client()
```

Repl.it's database is a key-value database. For us, we'll set the keys as the users' ids and the values as arrays containing their todo lists.

```js
user1 = [Todo1, Todo2, Todo3, Todo4...]
user2 = [Todo1, Todo2...]
user3 = [Todo1...]
// and so on
```

Every time a user requests their todo list, we'll get their value from the database, parse it to store as an array, and display the array formatted nicely. For updating, we'll follow the same procedure, except instead of displaying the array, we'll make the changes, convert back to a string and set it in the database.

- Now, for the `/todolist` command we want to get the user's array and display it.

```js
app.command('/todolist', async ({ command, ack, say }) => {
    await ack()

    let currentUserTodo = JSON.parse(await database.get(command.user_id)) || [] // Get the user's array, and if the user has never used this todo list before, use an empty array

    // Nicely format the array as a list with numbers
    let response = ""
    currentUserTodo.forEach((todo, index) => {
        response += `\n${index + 1}. ${todo}`
    })

    // If the user has items in the todo list, respond with it. Otherwise, send a message stating the list is empty
    if (response) {
        await say("Your todo list:" + response)
    } else {
        await say(`Your todo list is currently empty!`)
    }
})
```

- Next, for the `/todolistadd` command, we want to get the user's array, add the item to the list, and set the array in the database.

```js
app.command('/todolistadd', async ({ command, ack, say }) => {
    await ack()
    let currentUserTodo = JSON.parse(await database.get(command.user_id)) || [] // Same as previous command, get the array, if it doesn't exist, use an empty one
    currentUserTodo.push(command.text) // Add the new item to the array
    await database.set(command.user_id, JSON.stringify(currentUserTodo)) // Set the array in the database
    await say(`Added\n• ${command.text}\n to your todo list`) // Confirm adding the item to the user
})
```

- For the `/todolistremove` command, we want to remove the item from the array and then set it in the database.

```js
app.command('/todolistremove', async ({ command, ack, say }) => {
    await ack()
    let currentUserTodo = JSON.parse(await database.get(command.user_id)) || [] // Same as previous command
    let removed = currentUserTodo[command.text - 1] // Store the value that will be removed so we can show "Removed xxxxxxxx from your todo list" later
    currentUserTodo.splice(command.text - 1, 1) // Splice the array and remove the item at the provided item number from todo list
    await database.set(command.user_id, JSON.stringify(currentUserTodo)) // Set the array in the database
    await say(`Removed\n• ${removed}\n from your todo list`)
})
```

We're done setting up the bot! Run the repl and go to your Slack workspace, you should be able to run `/todolist`, `/todolistadd` and `/todolistremove`!

## Setting up uptimerobot

At the moment, your bot will go offline after an hour due to your repl going to sleep. Uptimerobot will send a HTTP request every 5 minutes to keep your repl alive.

- Go to https://uptimerobot.com and click "Register for FREE"

![Arrow pointing to "Register for FREE" on top right](https://cloud-qbitd29kl.vercel.app/4register.png)

- Enter your name, email and create a password

![Arrows pointing to various fields on register page](https://cloud-qbitd29kl.vercel.app/3details.png)

- Click "Add New Monitor"

![Arrow pointing to "Add New Monitor" on top left](https://cloud-qbitd29kl.vercel.app/2addnewmonitor.png)

- Click the dropdown next to monitor type, and click "HTTP(s)"

![Arrow pointing to "HTTP(s)" in monitor type dropdown](https://cloud-qbitd29kl.vercel.app/1typehttp.png)

- Enter anything for friendly name, set the URL as your repl.it preview URL, and make sure you uncheck any alert contacts.

![Arrows pointing to empty URL field and unchecked alert contacts - Bolt doesn't actually serve any HTTP requests to it and will return 404s, creating useless alerts](https://cloud-qbitd29kl.vercel.app/0monitordetails.png)

- Click "Create Monitor", and you're done!

![Dumbledore and Snape partying](https://cloud-pq5lbfiab.vercel.app/3dumbledoreparty.gif)

## What's next?

Now that you've managed to build a simple Todo list bot, build upon it and MAKE IT EXTREMELY USEFUL! This is for you to hack on, but here's some inspiration:

| Repl.it code  | Live Demo on the Hack Club Slack | Description |
| ------------- | -------------------------------- | ----------- |
| [Here](https://repl.it/@KhushrajRathod/TodoSlackApp-Markable) | "@Todo List Plus" | This todo list bot let's you mark items as done (and un-mark them) without removing them from the todo list by striking through them. |
| [Here](https://repl.it/@KhushrajRathod/TodoSlackApp-Random) | "@Todo List Random" | This todo list bot simply doesn't like listening to it's users and keeps replying with random messages. |
| [Here](https://TodoSlackApp-Community.khushrajrathod.repl.co) | "@Todo List Community" | This todo list bot maintains a generic todo list that everyone can add to and remove from |

Did you make something awesome? Share it on [#ship](https://hackclub.slack.com/archives/C0M8PUPU6) in the Hack Club Slack and tag me with [@KhushrajRathod](https://hackclub.slack.com/team/U01C21G88QM)!
