---
name: Hack Club CDN Uploader
description: Make a Library and CLI to upload to the Hack Club CDN
author: '@KhushrajRathod'
img: https://cloud-bb4wyl0oo.vercel.app/0screenshot_2020-11-11_at_10.00.26_pm.png
---

# Hack Club CDN Uploader 

![Preview of Final Demo](https://cloud-67l800cdw.vercel.app/0ezgif-7-277bc9913850.gif)

Everyone likes unlimited storage, especially when it's available as a cdn (i.e. you can directly embed items uploaded into webpages). If you're on the [Hack Club Slack](https://hackclub.com/slack/), you've probably uploaded something or the other to [#cdn](https://hackclub.slack.com/archives/C016DEDUL87)

Today, we'll be creating a library that works with the Hackclub CDN. Along with that, we'll also create a command-line tool to upload files using our library. We'll be using [Deno](https://deno.land/) to accomplish this. (If you've previously used Node.js, check out [this talk](https://www.youtube.com/watch?v=M3BM9TB-8yA) on Deno)

You should know a bit of Javascript to follow along -- but don't worry, if you don't know JS, you'll just take a bit longer and you'll have to Google somewhat.

Here's the [final code](https://repl.it/@KhushrajRathod/hcload)

If you get stuck anywhere in this workshop, feel free to ask me questions! I'm @KhushrajRathod on the [Hack Club Slack](https://hackclub.com/slack/).

## Part 1: Preparing your environment
### Preparing repl.it

> Note: Since (at the time of writing) Deno is in Beta @repl.it, you'll want to ignore any errors you see regarding await, import, and the Deno object.

To make it easier for us to code today, we'll be using Repl.it. However, towards the end of the workshop, we'll download [Deno](https://deno.land/) so that we can upload files from our computers. This will involve a terminal and downloading files, so school Chromebooks, iPads, and other devices that don't have command line access cannot be used for this workshop.

Follow these steps:

- Open https://repl.it/
- Click "Sign up"

![Arrow to sign up button on top right](https://cloud-pq5lbfiab.vercel.app/9signup-step1.png)

- Fill in some details

![Arrow to "Username", "Email" and "Password" fields in center of screen](https://cloud-91xu3gqm8.vercel.app/0signup-step2.png)

- You now have a Repl.it account! 

#### Repl.it basics

<a href="https://youtu.be/7alknyXs3E8">
    <img src="https://cloud-d6nt45yqr.vercel.app/0replitbasics-workaround-no-i-wont-use-gifs-they-suck-if-youre-reading-this-you-know-the-answer-to-the-universe-that-is-ban-gifs.png" alt="To add a file, click 'Add file' in the top left and give it a name. To write code, simply start typing in the code editor in the center of the screen. To run code, click Run and refresh your page preview. To format your code, click 'auto-format' in the top-center of the screen. To reload your page preview, click 'Refresh' in the top-center of the screen">
</a>

---

- Open this [starter code](https://repl.it/@KhushrajRathod/hcload-starter) to get started!

The starter code is pretty simple:

```js
export default async function (): Promise<void> {
  console.log("Hello, world!")
}
```

- In `mod.ts` (our library), we're exporting a default function that others will be able to use in their code. This is where most of our code will be.

```js
import hcload from "./mod.ts"
hcload()
```

- In `hcload.ts` (our CLI), we're using the `mod.ts` library and calling the default function.

- Since the version of Deno provided by repl.it is outdated, we're going to be using our own Deno binaries. I've set up the Deno binaries in the starter code, but they aren't ready in the repl environment. Inside the repl.it shell, run:

```bash
source prepEnv.sh
```

![Run commands in the terminal at the right of the screen. Type your command and press enter to execute](https://cloud-iou35wun9.vercel.app/0screenshot_2020-11-09_at_2.51.13_pm.png)

- Every time you restart your shell, you'll need to run this command again (for repl.it, the shell restarts automatically within a short time once you switch browser tabs, so if you encounter a "command not found", just run this again)


- To run your code, simply run

```bash
hcload
```

> Tip: To stop running your code, use CTRL + C

- If you encounter something like the following during this workshop, simply run `source prepEnv.sh` again and you should be good to go.

> bash: hcload: command not found

You just finished Part 1!!

![Minions cheering](https://cloud-pq5lbfiab.vercel.app/0cheer.gif)

## Part 2: Theory

The Hackclub CDN API only accepts an array of URLs and not direct file uploads. This means we can mirror anything already hosted on a URL, but we can't upload files from our device. To get around this, we'll have to

1. Start a file server on our device
2. Expose the file server to the internet using [ngrok](https://ngrok.com/)
3. Send the URL of the ngrok instance to the API

![Visual diagram of the process above: 1. A request is sent from the program to the CDN with the array of URLs. 2. The server sends a request to the ngrok instance as per the URL provided. 3. The ngrok instance responds with the file contents 4. The server hosts the files and responds with the hosted file URLs](https://cloud-hrkhc4qna.vercel.app/0cdn-workflow.png)

## Part 3: Programming the library
### Part 3.1: Setting up the server

Open up `mod.ts`, and let's get started! 

- First, let's create our HTTP server. We'll be using [Oak](https://github.com/oakserver/oak), a server middleware framework for Deno.

```js
import { Application, send } from 'https://deno.land/x/oak@v6.3.1/mod.ts'

export default async function (): Promise<void> {
  const app = new Application()
  app.use(async (context: any) => {
    context.response.body = "Server running"
  })

  app.addEventListener("listen", async ({ port }) => {
    console.log("HTTP server ready")
  })

  await app.listen({ port: 20685 })
}
```

At the moment, the server simply replies with "Server running" when anything is requested. If you trying running the program (simply run hcload), you should see HTTP server ready, and on the top left of your screen "Server running"

- Next, let's ask for a filePath (a path to a file) in our library's default function, and serve the file when an HTTP request reaches our server

```js
import { Application, send } from 'https://deno.land/x/oak@v6.3.1/mod.ts'

export default async function (filePath: string): Promise<void> { // <--- Changed
  const app = new Application()
  app.use(async (context: any) => {
    await send(context, filePath, { root: '/' }) // <--- Changed
  })

  app.addEventListener("listen", async ({ port }) => {
    console.log("HTTP server ready")
  })

  await app.listen({ port: 20685 })
}
```

Modify `hcload.ts` to pass a filePath to the library. To avoid uploading a file to repl.it, you can pass any file from the starter code (I'll be showing how to use the `LICENSE` file). If you'd like to, upload a separate file to repl.it to test your code.

```js
import * as path from "https://deno.land/std@0.75.0/path/mod.ts"
import hcload from "./mod.ts"

hcload(path.resolve("./LICENSE"))
```

Run `hcload` and you should see the contents of the file `LICENSE` in your browser preview. Congratulations on making it so far!

### Part 3.2: Exposing localhost via ngrok

At the moment, files served will only be accessible over your home network. Since the Hackclub CDN needs to be able to make a request to your server over the internet, we'll need to expose the server over the internet.

- Import the "ngrok" module and expose the server to the web (in `mod.ts`)

```js
import { connect, disconnect } from 'https://deno.land/x/ngrok@2.2.3/mod.ts'
import { Application, send } from 'https://deno.land/x/oak@v6.3.1/mod.ts'
import * as path from "https://deno.land/std@0.75.0/path/mod.ts"

export default async function (filePath: string): Promise<void> {
  const fileBase = path.parse(filePath).base

  const app = new Application()
  app.use(async (context: any) => {
    await send(context, filePath, { root: '/' })
  })

  app.addEventListener("listen", async ({ port }) => {
    const ngrokUrl = `https://${await connect({ protocol: 'http', port })}/${fileBase}`
    console.log("NGROK: " + ngrokUrl)
  })

  await app.listen({ port: 20685 })
}
```

- fileBase is the last part of the path to the file, e.g. For "/home/runner/myFile.png", the fileBase is "myFile.png"

In your terminal, you should see a ngrok URL, visiting this URL should display the LICENSE contents.

### Part 3.3: Making requests to the Hackclub CDN API with Ky

- [Ky](https://github.com/sindresorhus/ky) is an HTTP client that lets you easily make requests to any server.

- We'll be using a POST request, which sends data to a server -- In this case, we'll be sending the ngrok URL.

- Now, the Hackclub CDN API only accepts an array of URLs, so we'll need to wrap our URL in an array

Add the following to `mod.ts`:

```js
import { connect, disconnect } from 'https://deno.land/x/ngrok@2.2.3/mod.ts'
import { Application, send } from 'https://deno.land/x/oak@v6.3.1/mod.ts'
import ky from 'https://unpkg.com/ky/index.js'
import * as path from "https://deno.land/std@0.75.0/path/mod.ts"

export default async function (filePath: string): Promise<void> {
  const fileBase = path.parse(filePath).base

  const app = new Application()
  app.use(async (context: any) => {
    await send(context, filePath, { root: '/' })
  })

  app.addEventListener("listen", async ({ port }) => {
    const ngrokUrl = `https://${await connect({ protocol: 'http', port })}/${fileBase}`

    // @ts-ignore
    let response: string[] = await ky.post('https://cdn.hackclub.com/api/new', { json: [ngrokUrl] }).json() // <--- Wrapped in array [ ngrokUrl ]

    console.log(response[0])
    disconnect()
  })

  await app.listen({ port: 20685 })
}
```

Run `hcload` and you should get a URL like `https://cloud-something.vercel.app/yourFile.ext`. If opening the URL loads the file in your browser, or your browser asks you to download the file, CONGRATULATIONS! You've just hosted a file successfully on the CDN!

Now, instead of logging the response from our library, we want to return it to the calling function. We'll log it from the calling function instead.

```js
import { connect, disconnect } from 'https://deno.land/x/ngrok@2.2.3/mod.ts'
import { Application, send } from 'https://deno.land/x/oak@v6.3.1/mod.ts'
import ky from 'https://unpkg.com/ky/index.js'
import * as path from "https://deno.land/std@0.75.0/path/mod.ts"

export default async function (filePath: string): Promise<string> { // <--- Changed
  return new Promise(async resolve => { // <--- Changed
    const fileBase = path.parse(filePath).base

    const app = new Application()
    app.use(async (context: any) => {
      await send(context, filePath, { root: '/' })
    })

    app.addEventListener("listen", async ({ port }) => {
      const ngrokUrl = `https://${await connect({ protocol: 'http', port })}/${fileBase}`

      // @ts-ignore
      let response: string[] = await ky.post('https://cdn.hackclub.com/api/new', { json: [ngrokUrl] }).json()

      disconnect()
      return resolve(response[0])
    })

    await app.listen({ port: 20685 })
  }) as Promise<string> // <--- Changed
}
```

Since the response is being returned inside an event listener, we'll need to wrap the returned value in a promise. 
Make sure you
    - Change the return type from `Promise<void>` to `Promise<string>`
    - `return resolve(response[0])` AFTER you disconnect()

In `hcload.ts`:

```js
import * as path from "https://deno.land/std@0.75.0/path/mod.ts"
import hcload from "./mod.ts"

console.log(await hcload(path.resolve("./LICENSE")))
Deno.exit(0)
```

Note that we can now simply `Deno.exit(0)` after we get and log the URL -- we no longer have to exit the program manually using CTRL + C.

EXCELLENT! We've successfully made the library, and we've also used it in `hcload.ts`. 

![Hermione, Ron and Seamus cheering](https://cloud-pq5lbfiab.vercel.app/1cheer2.gif)

## Part 4: Programming the CLI

Now that our library is ready, let's make `hcload.ts` use arguments from the CLI instead of just hardcoding the LICENSE file. 

- First, let's import [Yargs](https://yargs.js.org/). Yargs makes it easy to parse command-line arguments.

```js
import Yargs from "https://deno.land/x/yargs@v16.1.1-deno/deno.ts"
import * as path from "https://deno.land/std@0.75.0/path/mod.ts"
import hcload from "./mod.ts"

console.log(await hcload(path.resolve("./LICENSE")))
Deno.exit(0)
```

Next, let's parse the args using Yargs (just after all the import statements in `hcload.ts`)

```js
const args = Yargs(Deno.args)
  .usage("Usage: hcload -f file")
  .option("file", {
    alias: "f",
    description: "Path to file to upload",
    demandOption: true,
  })
  .example('hcload -f myPic.png', 'Upload a file')
  .argv

console.log(args)
```

Run `hcload -f test` and you should probably see something like

```
{ _: [], f: "test", file: "test", "$0": "deno run" }
```

We want to pass the full path of the property "file" to our library's default function

```js
import Yargs from "https://deno.land/x/yargs@v16.1.1-deno/deno.ts"
import * as path from "https://deno.land/std@0.75.0/path/mod.ts"
import hcload from "./mod.ts"

const args = Yargs(Deno.args)
  .usage("Usage: hcload -f file")
  .option("file", {
    alias: "f",
    description: "Path to file to upload",
    demandOption: true,
  })
  .example('hcload -f myPic.png', 'Upload a file')
  .argv

console.log("Working...")

const fullPath = path.resolve(args.file)
const url: string = await hcload(fullPath)

console.log(url)

Deno.exit(0)
```

Try running `hcload -f LICENSE` and the program should return a URL.
HOORAY! It works! Except there's a single problem. To upload files, we first need to upload them to repl.it, which defeats the purpose of the workshop.

## Part 5: Setting up your project locally
### Part 5.1: Installing deno

- [Deno installation docs](https://deno.land/manual/getting_started/installation)

In a nutshell:

- If you're on Windows, open PowerShell (Windows logo in taskbar > Search > PowerShell), and then run

```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

- If you're on macOS / Linux, open a Terminal (For macOS, CMD + Space and type "Terminal", for Linux, the command shortcut is usually Ctrl + Alt + T) and run

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

After you've done this (you may need to close and reopen your terminal / PowerShell), running `deno --version` should display something like:

```
deno 1.5.3
v8 8.7.220.3
typescript 4.0.5
```

### Part 5.2: Downloading your code from repl.it

- First click the three dots on the top left of the screen

![Arrow pointing to 3 dots at top left of screen](https://cloud-omxyme6x4.vercel.app/1screenshot_2020-11-10_at_7.57.29_pm.png)

- Next, click "Download as zip"

![Arrow pointing to "Download as zip" in 3 dots dropdown](https://cloud-omxyme6x4.vercel.app/0screenshot_2020-11-10_at_7.57.58_pm.png)

- Unzip the downloaded file and navigate to the folder in your terminal. For example, if the unzipped folder is called "hcload" and is in your downloads folder, your command will be

```bash
cd "~/Downloads/hcload"
```

- Now, let's install our CLI into our local deno installation

```bash
deno install -A --unstable ./hcload.ts
```

- Run `ls` to see a list of the names of files in your current directory (See [Navigating a terminal](https://www.codingdojo.com/blog/introduction-terminal-navigation))

- Next, run

```bash
hcload -f abc.ext
```

where `abc.ext` is a file in your current directory. For e.x., if the output of `ls` was

```
myMovie.mp4
mySong.mp3
myDocument.pdf
```

and you wanted to upload the document, you would type

```bash
hcload -f myDocument.pdf
```

CONGRATULATIONS! You've successfully managed to build a Deno Library and a CLI for it! 

![Dumbledore and Snape partying](https://cloud-pq5lbfiab.vercel.app/3dumbledoreparty.gif)

## Hacking!

### Using your library / CLI in other projects

Whenever you want to quickly upload a small file to a CDN, you know what to use!

- If your project is a Deno project, you can simply import the `mod.ts` into your project like we did from `hcload.ts`. If you want to, you can publish your library to https://deno.land/x/ to use it easily in other projects.

```js
import hcload from "./mod.ts"
```

- If your project is not a Deno project, you can use the CLI as a library too -- just make sure you pass the --quiet switch to Deno and remove the `console.log()`s when installing/running hcload.

```js
deno install -f -A --unstable --quiet hcload.ts
```

then, run `hcload` and parse stdout.

### Extending your library

By design, the Hack club CDN accepts an _array_ of **URLs**. This means we can:

- [Mirror a URL instead of uploading a file](https://repl.it/@KhushrajRathod/hcload-url)

- Add support for multiple URLs and files - Check this out on [GitHub](https://github.com/KhushrajRathod/hcload) or [deno.land/x](https://deno.land/x/KhushrajRathod/hcload)

### Host a website on the Hackclub CDN

By getting a bit creative, we can host websites on the Hack club CDN (Note: this is by far not the best way to do this, but it _is_ fun :) )

- [Here's](https://cloud-2gxi88gfk.vercel.app/0index.html) the website made from the [personal website workshop](https://workshops.hackclub.com/personal_website/) hosted using the Hackclub CDN. Can you figure out how it's done? Hint: Right-click > Inspect element to view the website code.

Did you make something awesome? Share it on [#ship](https://hackclub.slack.com/archives/C0M8PUPU6) in the Hack Club Slack and tag me with [@KhushrajRathod](https://hackclub.slack.com/team/U01C21G88QM)!