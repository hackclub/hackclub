---
name: 'Online Pong'
description: 'Learn how to build multiplayer browser games with Colyseus.js'
author: '@scitronboy',
img: 'https://cloud-a4tglngif.vercel.app/0thumb.png'
---

Perhaps you've built simple games before, but have you ever built a multiplayer game? In this workshop, we we will be building a simple online version of the classic game of Pong - one that you can play it with someone else on a different computer, or even in a different country! We will be using a fantastic open-source TypeScript framework called [Colyseus.js](https://colyseus.io/) that makes the networking and matchmaking (connecting users to a game automatically when they open the site) easy!

TODO Link to final game, github repo

## Prerequisites

This is **not** a beginner-level tutorial. I will assume you are at least somewhat familiar with JavaScript/TypeScript features such as classes, ternary expressions, promises, and arrow functions. If you are not, I would recommend going and checking out some of the other JavaScript workshops before working up to this. There are lots of cool ones, including [JS clocks](https://workshops.hackclub.com/simple_clock/), [pianos](https://workshops.hackclub.com/tunes/), and [bullet-dodging](https://workshops.hackclub.com/dodge/) games., 

We will be using the [TypeScript programming language](https://www.typescriptlang.org/docs/) for the server, which is a _superset_ of JavaScript (just JS but with extra features), as it is the recommended language for Colyseus. While you should be able to write standard JS most of the time and get away with it, I recommend [checking out some of typescript's features](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) beforehand (specifically, types) if you've never used it before.

## How it works

Most browser-based games use what are called *websockets* to communicate with a *game server*, a special kind of web server responsible for synchronizing each player's movements across every player's browser. Websockets are not like traditional browser (HTTP) requests, as they form a *persistent, 2-way connection* with the server, allowing each server and client to send messages back and forth to each other as quickly as needed. For example, if one player in the game moves or does some other game action (depending on the type of game), the game will immediately send that move to the server using a socket connection, where the server will process the move (and perform any validation necessary to prevent cheating), and send it back over a socket connection to all the other players, whose games will process the new data and update the first player's position, so that everyone can see when one player moves. 

Fortunately, the browser's [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) is easy enough to use already, but for this tutorial we will be using a JavaScript package called [Colyseus](https://colyseus.io/) that handles the websocket connection and game state automatically, so we can just focus on the game itself.

As for the game itself, we will just be using the native browser [canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) as we don't need anything more than that for this simple game. However, if you want to make more complex games in the future there are many available frameworks such as [Phaser.js](https://phaser.io/) that provide useful tools such as physics and animation engines.

So, here's the brief explanation of the project:

1. We'll have a file called `index.ts` (typescript) where we set up and ininitialize the game server. 
2. When a user requests the game from the server, it will send back a `game.html` and `game.js` file - these are standard JavaScript and HTML files, where we will write the client-side code (code that runs on the player's computer) for the game. This includes drawing all the shapes to the canvas.
3. We'll also have a file called `PongRoom.ts` that runs on the server. Here, we will put all the server code for the game. It has two main parts: "state" classes, where we can define all the variables we'll need to keep track of for the game, including the position of the Pong rackets ands and Pong ball; and a "room" class that tells Colyseus what to do when players join a game, leave a game, sends an update, etc. (Each game is basically an instance of the room class)
4. The Colyseus.js library will take care of communicating between the server (the `PongRoom.ts` file) and the client (the `game.js` file).
5. When a user moves their racket, for example, we'll tell the Colyseus.js library to send the movement to the server, and the server will send it to the other player.

Well, let's get started!

## Part 1 - Setting up the Server

I'll be coding everything on Repl.it in this workshop (but if you want, you can use a local environment), so let's create an empty project by going to <https://repl.it/languages/typescript>. I would recommend renaming it to something like "Pong" from the dropdown at the top so you can easily find it later.

First things first, let's properly configure the project and add the packages we'll need. Open `tsconfig.json` and replace everything with this, so it works with Colyseus:

```json
{
  "compilerOptions": {
    "outDir": "lib",
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "strictNullChecks": false,
    "esModuleInterop": true,
    "experimentalDecorators": true
  }
}
```

Great! Now let's add our packages to a new file named `package.json` so that Repl knows what to install (you can add a new file with the icon at the top of the file list):

```json
{
  "private": true,
  "name": "online_pong",
  "version": "0.1.0",
  "main": "index.ts",
  "scripts": {
    "start": "ts-node-dev index.ts"
  },
  "devDependencies": {
    "@types/express": "^4.17.1",
    "ts-node": "^8.1.0",
    "ts-node-dev": "^1.0.0-pre.63",
    "typescript": "^3.4.5"
  },
  "dependencies": {
    "@colyseus/monitor": "^0.12.2",
    "colyseus": "^0.14.0",
    "express": "^4.16.4"
  }
}
```

Now, open `index.ts` - let's prepare the server!

First, let's import the packages we just installed. They include Colyseus (the game framework itself), Colyseus monitor, a small Colyseus add-on that lets you view the game state in real time, and Express, a JavaScript server library that makes it easy for us to send the game files to the players when they visit the website.

```javascript
import http from "http"
import path from "path"
import express from "express"
import { Server } from "colyseus"
import { monitor } from "@colyseus/monitor"
```

Now, we can use this code to set up Express and Colyseus (make sure to read the comments so you know what's going on!):

```typescript
const port = 3000 // We need to choose a port for our game to run on, but it doesn't really matter as REPL will automatically detect it.
const app = express() // This line creates a new Express app for the server

app.use(express.json()) // This line tells express to interpret incoming requests as JSON, which makes it easy for Colyseus to understand and interact with the requests.

// (you can just ignore this next block) On REPL, Colyseus doesn't work over HTTPS without additional configuration. For building this pong workshop this workaround is necesarry to make it work on Repl, but make sure to remove this if you expand your game into a full website with many people playing it, as this effectively disables encryption to prevent mixed content errors. For some reason, converting everything to HTTPS instead wasn't working, even though it should.
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next()
  } else {
    return res.redirect(302, 'http://' + req.headers.host + req.url) 
  }
})

const server = http.createServer(app) // here, we initialize a HTTP server using our express app.
const gameServer = new Server({ server }) // This line adds Colyseus, the game framework, to our Express server!

app.use('/colyseus', monitor()) // This sets up a route allowing us to view all the Colyseus state data in real-time from a browser. I'll explain it later.

gameServer.listen(port) // Finally, we start the server by listening to incoming HTTP requests from players' browsers.
console.log(`Listening on http://localhost:${ port }`)
```

The server will work now, but it doesn't actually _do_ anything. Let's fix that. Create two new empty files, `game.html`, and `game.js`. As mention previously, these files will be sent to the player to run on their computers!

In `game.html` let's add a basic HTML page with a title and header, that also imports the `game.js` script using a `<script>` tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Pong</title>
  </head>
  <body>
    <h1>Pong</h1>

    <script src='/game.js'></script>
  </body>
</html>
```

You can leave `game.js` empty for now.

Now that we created an HTML file, we need to return it to the user when they visit the game website. Under the `app.use('/colyseus'... )` line in `index.ts`, add two new pieces of code:

```javascript
app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve('game.html')) // Respond with the game file when the user visits the server. Path.resolve makes sure the path is absolute so Express can find the file.
})

app.get('/game.js', (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve('game.js')) // Send game.js as well.
})
```
Basically, these are both Express "routes" that the server performs when the user does a certain action. Specifically, when the user sends a GET request to the server for the `/` path - the homepage of the website - the server sends the HTML file we just made back. The same thing happens for `game.js`.

You might have noticed the colons and `express.Request` and `express.Response` after the `req` and `res` (request and response) arguments. This is a typescript feature, and it simply tells typescript what type the arguments are so that it can do proper type checking on them.

Let's press the "Run" button now and see what happens.

Your project and `index.ts` should look something like this now:

![The index.ts file](https://cloud-ek1yunog1.vercel.app/0pbeginning.png "The index.ts file")

After waiting a few seconds for it to run - hopefully without errors - you'll notice a new popup in the top right, showing a blank window that might look like this:

![The broken preview](https://cloud-58evowjmq.vercel.app/0brokenpreview.png "the broken preview")

This isn't bad, as it's caused by a workaround we used for Colyseus in our server file. All you need to do is click on the little icon at the top right to open it in a new tab instead, where it should work:

![The blank pong page](https://cloud-qfkqba8yv.vercel.app/0blankpongpage.png "Blank pong page you should see when you open a new tab")

Yeah!! The server works!! 

I should note that whenever you make changes to the server (`index.ts` or `PongRoom.ts`) you will need to press the "run" button again, but whenever you make changes to the client (`game.html` or `game.js`) all you have to do is reload the tab (the one you got when you pressed the new tab icon, not the Repl.it tab!).

## Part 2 - The Canvas, Game Loop, Colyseus.js, and User Input, but not necesarilly in that order.

Now we can start writing the `game.js` file! But first, let's import the Colyseus.js library by adding a script tag in `game.html` right below the closing `</head>` tag:

```html
<head>
  <title>Pong</title>
  <script src="https://unpkg.com/colyseus.js@^0.14.0/dist/colyseus.js"></script>
</head>
```

### The Canvas

And let's also add a canvas element, where we will draw all the game graphics, to the middle of the `<body>` section:

```html
<body>
  <h1>Pong</h1>

  <canvas id='game-canvas' width='600' height='600'></canvas>

  <script src='/game.js'></script>
</body>
```

Now in `game.js` the first thing we need to do when a user visits the website is ask them for a username to show to the other player. We can do that using the `prompt` function.

```javascript
const userName = prompt("Choose a name:") || 'player' // Fall back to "player" if the user doesn't enter a name
```

Then, we need to get a reference to the canvas's context, so that we can draw on it later:

```javascript
const canvas = document.getElementById('game-canvas')
const width = canvas.width, height = canvas.height // Store the canvas width and height as well
const ctx = canvas.getContext('2d') // This is the canvas context
```

### Handling user input

The only user input we need to handle is the browser's left and right arrow keys, which will move the player's racket left or right. We need to be able to check from the game loop to see if the left or right arrow keys are pressed, so let's add some event handlers that will detect when the user presses or releases the left/right arrows and update a variable.

Add two variables to the `game.js` file:

```javascript
let leftIsPressed, rightIsPressed
```

Then, add a key up and key down event handler that updates these variables depending on which key was pressed or released:

```javascript
window.onkeydown = function (e) {
  if (e.key = 'ArrowLeft') leftIsPressed = true
  if (e.key = 'ArrowRight') rightIsPressed = true
}

window.onkeyup = function (e) {
  if (e.key = 'ArrowLeft') leftIsPressed = false
  if (e.key = 'ArrowRight') rightIsPressed = false
}
```

### Communicating with the server

Now we need to start a connection with the server before we are able to find or join a pong game. With Colyseus.js, this is easy. Add this line to `game.js` now to create a Colyseus Client, which we will then use to interact with the server:

```javascript
// Connect to the colyseus server on port 3000:
const client = new Colyseus.Client(`ws://${window.location.hostname}:3000`)
```

Then, we want to find or create a pong game. The Colyseus `joinOrCreate` function creates a new game room on the server (we will program the pong game room soon), or joins one that isn't full (with this game, each game room of course only holds 2 players). We also pass an object with a `name` property. This will be sent to the game room as well, where we will later save it so that the other player can see it.

```javascript
let room // We'll store the room in this variable
let isPlayer1 // Keep track of who's player 1 and 2
client.joinOrCreate('pong', { name: userName || 'player'})
.then(r => { // We successfully found or created a pong game
  console.log("joined successfully", room)
  room = r
  room.onMessage('youArePlayer1', m => { isPlayer1 = true }) // If the server tells us we're player 1, set isPlayer1 to true
}).catch(e => { // Something went wrong
  console.error("couldn't join room", e)
})
```

Note that this code will throw an error now because we haven't coded the game room on the server yet.

This is what `game.js` should look like so far:

![game.js file so far](https://cloud-qms4n6xxd.vercel.app/0first3gamesteps.png "This is what your game.js should look like now")

### Making a game loop

Most games have at least one or more *game loop*, that is, a chunk of code composed of an update and drawing function, or maybe a function to calculate physics, etc, that runs as frequently as possible while a game is running (this frequency is known as the frame rate and is often 60 times per second). We need one of these in this game to update the position of the pong ball and rackets every frame, and check to see if a player is holding down one of the arrow keys.

Also, the HTML canvas is quite literally a "canvas" in the sense that you can't adjust the position of something (like a player) or remove something from the canvas (you can only add things) - instead, you have to clear the whole canvas and redraw every object on it, each with their new updated positions. This is the main thing the game loop will be responsible for.

We will create a function called "loop", which we will pass to a built in browser function called `requestAnimationFrame`. requestAnimationFrame registers a function to be called as soon as possible before the browser repaints the page (which happens roughly 60 times per second on most displays), and because we can call it over and over again at the end of each loop it's the perfect place to call our game loop to make our game graphics appear as smooth as possible (however it won't eliminate lag).

It's also important to keep track of when exactly the loop runs every time, so that we can calculate how many milliseconds it's been since the loop last ran. This is a concept known as "delta time" and it's extremely important for ensuring smooth, consistent gameplay regardless of how fast a player's computer is. For example, if a player moves 10 pixels every frame, then they would move faster on faster computers, but multiplying their speed by the delta time would make sure their speed is always consistent. Fortunately, `requestAnimationFrame` passes the number of milliseconds since the window was loaded into the loop function, which we can use to calculate the delta time.

We'll also add a function called `draw`, where we will eventually place all the code for drawing the rackets and pong ball to the screen. However, we don't want to draw anything unless the game has started, so we will only call the `draw` function from the loop if `room.state.gameStarted` is true (we will add room state later).

```javascript
function draw () {
  
}

let lastRender = 0 // Initialize lastRender variable to keep track of when the loop was last run.
function loop(timestamp) {
  var delta = timestamp - lastRender // How many milliseconds have past since the loop last ran?

  // Erase the canvas and refill with black every time the loop runs
  ctx.fillStyle = 'black'
  ctx.clearRect(0, 0, width, height)
  ctx.fillRect(0, 0, width, height)

  if (room && room.state.gameStarted) draw() // Draw everything if the game has started

  lastRender = timestamp // Update the last render variable
  window.requestAnimationFrame(loop) // Schedule this function to be run again.
}

window.requestAnimationFrame(loop) // Schedule the loop function to be run next frame
```

Once you add the game loop, you should be able to refresh the game tab, and you will be prompted to enter your name:

![username prompt](https://cloud-d76at74rw.vercel.app/0nameprompt.png "The username prompt")

Then you will see a black rectangle where the canvas is:

![The blank canvas](https://cloud-fkb3m0as0.vercel.app/0blankcanvas.png "The blank canvas")

If you don't see it, make sure you remembered to use `requestAnimationFrame` and set the `fillStyle` to black in the loop:

![Game loop code](https://cloud-3iew3hfv1.vercel.app/0gameloopstep.png "Game loop code")

## Part 3 - Pong Room Server Code

Now, we have to start writing the `PongRoom.ts` file, that controls pong games from the server. Go ahead and create the empty file now. There are 6 things we need to do before we can finish writing the game client:

1. Add a mostly-empty `PongRoom` class with some blank methods, and set up the room. 
2. Add two game state schemas (a schema is kind of like a model of how variables will be stored): one schema class to hold each player's variables, like name and racket position, and one schema class to hold information about the game itself, like where the pong ball is.
3. We have to add a method adds a user's name and id to the state when they join the game.
4. We have to write a `startGame` function that resets the position of the pong ball and starts the game
5. We have to add a listener callback to listen for messages from the client telling the server that the player moved their racket
6. Finally, we have to import the `PongRoom` class into `index.ts`.

### The `PongRoom` Class

Before we can extend room or state schema classes, we have to import the base classes from Colyseus. We can do this with two import statements at the top of the file:

```javascript
import { Room, Client } from "colyseus"
import { Schema, type } from "@colyseus/schema"
```

Now let's extend Colyseus's `Room` class to create a pong room. Each room has several methods we can override to run things when certain events happen. For example, the `onCreate` method is called when a new instance of a room (a new game) is created. Here, we will use it to set a few options: 

```typescript
export default class PongRoom extends Room {

  onCreate (options: any) {
    this.setState(new PongState()) // Set the state for the room, this is a class we will write in the next step
    this.setSimulationInterval(delta => this.update(delta)) // Set a "simulation interval" aka an update function (similar to the loop function in game.js) that's called about 60 times per second. We'll use this later.
    this.setPatchRate(25) // The patch rate determines the interval (in milliseconds) at which the server sends state updates to the client.
    this.maxClients = 2 // Only 2 players per Pong game!
    this.clock.start() // Start the game clock, a colyseus feature we'll use later
  }

  update (delta: number) {
    
  }

  startGame() {
    
  }

  onJoin (client: Client, options: any) {

  }

  onLeave (client: Client, consented: boolean) {

  }
}
```

