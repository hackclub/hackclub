---
name: Pyramid Bot
description: Build a Discord bot that makes pyramids!
author: '@safinsingh'
---

# Pyramid

> A discord bot for making pyramids!

Hey there! We'll be using Node.js, TypeScript, and Discord's JS API to create a pyramid bot that looks like this:

![screenshot](https://raw.githubusercontent.com/safinsingh/pyramid/master/assets/a.png)

I'll be assuming you're already familiar with some of the basics of Discord and JavaScript. Let's get started!

## Step 1: Boilerplate

The first thing you'll want to do is create a new directory for your project. Here's some commands you'll want to run:

```bash
# Clone a boilerplate for Node.JS
git clone https://github.com/safinsingh/node-ts.git pyramid

# Reset source control
rm -rf .git
git init

# Install dependencies
{pnpm/[yarn]/npm} install
```

Let's take a closer look at the directory structure of this boilerplate:

```
.
├── .eslintignore     (linting ignores)
├── .eslintrc         (linting config)
├── .github           (continuous integration)
│  └── workflows
│     ├── format.yml
│     └── lint.yml
├── .gitignore        (source control ignores)
├── .prettierignore   (formatting ignores)
├── .prettierrc       (formatting config)
├── package.json      (package metadata)
├── src               (code)
│  └── index.ts
├── tsconfig.json     (typescript config)
└── yarn.lock         (package lockfile)
```

Perfect! Now that we know all the files and directories are for, let's install some of the dependencies we need:

```bash
{pnpm/[yarn]/npm} install discord.js dotenv
```

`discord.js` contains the Discord API module for JavaScript as well as types for TypeScript, and `dotenv` is for loading our Discord API key without publishing to source control.

## Step 2: Discord Bot Setup

First, create a Discord account if you don't have one at [discord.com](https://discord.com). Then, navigate to the [Discord developer portal](https://discord.com/developers) and create a new app:

![create app](https://raw.githubusercontent.com/safinsingh/pyramid/master/assets/create_app.png)

From there, hit the `Bot` tab and copy your bot token:

![token](https://raw.githubusercontent.com/safinsingh/pyramid/master/assets/token.png)

Then, just copy-and-paste that into a `.env` file within your Pyramid directory like so:

```
TOKEN=YOUR-SUPER-SECURE-TOKEN-HERE
```

However, in the boilerplate, the `.env` file isn't ignored by default. We can fix this by editing the `.gitignore` file and adding `.env` like so:

```bash
echo ".env" >> .gitignore
```

or by opening it with your text editor and changing it through that.

Finally, add it to your server by going to the `OAuth2` tab and generating a URL with `scopes` being `bot` and with the permisssion bit `67584`:

![OAuth](https://raw.githubusercontent.com/safinsingh/pyramid/master/assets/oauth.png)

Just copy this into your browser and you should be able to add your bot to your server! For now it'll be offline, so we'll not to set that up first.

## Step 3: Hello World!

To get our bot up and running, let's add this in to the `index.ts` file:

```typescript
// Imports dotenv and discord modules
import dotenv from 'dotenv'
import Discord from 'discord.js'

// Read config from .env and login to the Discord API
dotenv.config()
const client = new Discord.Client()
client.login(process.env.TOKEN)

// Listen for a 'ready' event and execute a callback when it's fired
client.on('ready', () => {
  console.log('Ready!')
})

// Listen for a 'message' event and execute a callback when it's fired
client.on('message', (msg) => {
  const channel = msg.channel as Discord.TextChannel
  channel.send('Hi there!')
})
```

Perfect! Now we can run `{pnpm/[yarn]/npm} dev` to start our server. Our bot should be active and reply to us whenever we send a message!

## Step 4: Error Handling

Now that we're able to run our bot, we need to start making some pyramids!

Before that, let's try to read and validate the command inputted by the user:

```typescript
// Useful constants
const content = msg.content.split(' ')
const channel = msg.channel as Discord.TextChannel

// If the message starts with /pyramid
if (content[0] === '/pyramid') {
  // Get the size of the pyramid and the repeatable text
  const size = parseInt(content[1])
  const toRepeat = content.slice(2).join(' ')

  // Validate our message
  const valid = isValid(msg)
  if (!valid.isValid) {
    // If not valid, tell them!
    msg.reply(valid.error)
    msg.react(valid.reaction as Discord.EmojiResolvable)
    return
  }

  // Generate a pyramid from the text and size
  const toSend = genPyramid(toRepeat, size)

  // Send the message and catch an error
  channel.send(toSend).catch((err) => msg.reply(err))
}
```

In isValid, we're going to add a couple functions to prevent bot abuse (the `isValid` function):

```typescript
// Create an interface for what a validCheck should look like
// Errors and reactions should be optional and only present if isValid is false
interface validCheck {
  isValid: boolean
  error?: string
  reaction?: Discord.EmojiResolvable
}

// Determine whether the message will overflow the 2000 character limit imposed by Discord
const willOverflow = (msgArr: Array<string>): boolean => {
  // Get the height of the pyramid
  const iter = parseInt(msgArr[1]) + 1

  // iter * (iter - 1) is the same thing as 2 * (n + (n - 1) + ... 1)
  if (iter * (iter - 1) * msgArr.slice(2).join(' ').length > 1000) {
    return true
  }
  return false
}

// Determine is a message is valid, and return a validCheck object
export const isValid = (msg: Discord.Message): validCheck => {
  const msgArr = msg.content.split(' ')

  // Make sure all the required arguments are present
  if (msgArr.length < 3) {
    console.log('1')
    return {
      isValid: false,
      error: 'Invalid command, must have at least 3 arguments!',
      reaction: '🗑️',
    }
    // Ensure that the height of the pyramid is actually a number
  } else if (isNaN(parseInt(msgArr[1]))) {
    return {
      isValid: false,
      error: 'Invalid number, must be an integer!',
      reaction: '🗑️',
    }
  } else {
    // Create a temporary storage variable
    let toReturn: validCheck = {
      isValid: true,
    }

    // Loop through words to be pyramidified
    msg.content
      .split(' ')
      .slice(1)
      .forEach((e) => {
        // Prevent disallowed keywords
        if (e === '/pyramid') {
          toReturn = {
            isValid: false,
            error: 'Recursiveness is not allowed!',
            reaction: '😡',
          }
        } else if (e === '͔') {
          toReturn = {
            isValid: false,
            error: "Sorry, but that character doesn't work :(",
            reaction: '😔',
          }
        }
      })

    // If the message is invalid, return the temporary variable containing the most recent error
    if (!toReturn.isValid) {
      return toReturn
    }

    // Prevent character overflow
    if (willOverflow(msgArr)) {
      return {
        isValid: false,
        error: 'Whoops! Looks like that exceeds the maximum characters!',
        reaction: '😔',
      }
    } else {
      // Return correct message!
      return {
        isValid: true,
      }
    }
  }
}
```

## Step 5: Make Pyramids

Finally we're ready to make pyramids! This is by far the simplest part of the bot. Let's take a look at the following algorithm:

```typescript
// Define a pyramid generator with arguments for the repeater and the pyramid size
export const genPyramid = (toRepeat: string, size: number): string => {
  let toSend = ''

  for (let i = 0; i <= size; i++) {
    // For line in pyramid
    for (let z = 0; z < i; z++) {
      // For entry in line
      toSend += `${toRepeat} ` // Append to sending variable
    }
    toSend += '\n' // Create newline between pyramid rows
  }
  return toSend
}
```

This will produce a pattern like the following:

```
1
1 1
1 1 1
1 1 1 1
1 1 1 1 1
```

If you look closely, you'll notice that the number of `1`'s in each row is equal to the row number:

```
Row 1: 1          (1 column)
Row 2: 1 1        (2 columns)
Row 3: 1 1 1      (3 columns)
Row 4: 1 1 1 1    (4 columns)
Row 5: 1 1 1 1 1  (5 columns)
```

## Part 6: Putting it all together

Finally, now that we're done with all the utility functions, let's integrate the actual functions into the bot itself. Here are some polishing changes I added to the `index.ts` file, explained thouroughly:

```typescript
import dotenv from 'dotenv'
import Discord from 'discord.js'

// Abstract utility functions
import { isValid, genPyramid } from './util'

dotenv.config()
const client = new Discord.Client()
client.login(process.env.TOKEN)

// Set bot activity
client.on('ready', () => {
  console.log('Ready!')
  client?.user?.setActivity('making sideways pyramids')
})

client.on('message', (msg) => {
  const content = msg.content.split(' ')
  const channel = msg.channel as Discord.TextChannel

  // Root checker
  if (content[0] === '/pyramid') {
    const size = parseInt(content[1])
    const toRepeat = content.slice(2).join(' ')

    const valid = isValid(msg)
    if (!valid.isValid) {
      msg.reply(valid.error)
      msg.react(valid.reaction as Discord.EmojiResolvable)
      return
    }

    // Create toSend
    const toSend = genPyramid(toRepeat, size)

    // Send the final message and catch an error
    channel
      .send(toSend)
      .catch((err) =>
        msg.reply(
          `Nice! It looks like you've successfully hacked the Pyramid! Feel free to pen a pull request :). BTW, the error was: ${err}`
        )
      )
  }
})
```

Woohoo 🎉! You've finally finished the Pyramid bot! You can now add some more finishing touches to it if you like it and personalize it!

![screenshot](https://raw.githubusercontent.com/safinsingh/pyramid/master/assets/a.png)

If you have any suggestions or want to share your version of pyramid, open an issue or pull request to [github.com/safinsingh/pyramid](https://github.com/safinsingh/pyramid).

## Next Steps

- Create a centered, upside-down, or right-facing pyramid
- Add other commands (e.g. a help/info command)
- The possibilities are endless! Have fun :)
