---
name: Kahoot Clone — Kuizzy
description: Make a Kahoot clone with SweetAlert, WebSockets, and Node.js
author: '@khrj'
img: https://cloud-b0r4v3fgu.vercel.app/0screenshot_2020-12-31_at_3.22.47_pm.png
---

Love [Kahoot](https://kahoot.com/)? I do! Today we're making a Kahoot clone—Kuizzy—using :

- [SweetAlert](https://sweetalert.js.org/), a beautiful JS alert library which serves as a replacement for the default [JavaScript alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert), 
- [Socket.io](https://socket.io/), a [WebSocket protocol](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) library which lets our webpage maintain a persistent connection with the server, 
- and [Node.js](https://nodejs.org/).

Here's the [final code](https://repl.it/@KhushrajRathod/Kuizzy#app.js) and [live demo](https://kuizzy.khushrajrathod.com).

If you get stuck anywhere in this workshop, I'm @KhushrajRathod -- feel free to ping me.

## Prerequisites

Difficulty: Moderate

This workshop requires a fairly good understanding of Node.js and JavaScript (Functions, Objects, Promises, EventEmitters). 
Although you should still be able to follow along event with no / little understanding, you might get confused throughout.

## Part 1: Preparing repl.it

Repl.it is an online code editor that we'll be using today. It's like Google Docs, but for code.

Follow these steps:

* Open https://repl.it/
* Click "Sign up"

![Arrow to sign up button on top right](https://cloud-pq5lbfiab.vercel.app/9signup-step1.png)

* Fill in some details

![Arrow to "Username", "Email" and "Password" fields in center of screen](https://cloud-91xu3gqm8.vercel.app/0signup-step2.png)

* You now have a Repl.it account!

### Repl.it basics

<a href="https://www.youtube.com/watch?v=7alknyXs3E8">

<img src="https://cloud-d6nt45yqr.vercel.app/0replitbasics-workaround-no-i-wont-use-gifs-they-suck-if-youre-reading-this-you-know-the-answer-to-the-universe-that-is-ban-gifs.png" alt="Repl.it basics"></img>

</a>

## Part 2: The Starter Code

We'll be focusing on JavaScript for this workshop, so I've already done the HTML and CSS for you.
To get started, go to this [Starter Code](https://repl.it/@KhushrajRathod/Kuizzy-starter) and fork it

If you take a look at the starter code, you'll see the following:

* `app.js` -- Your app's server (I'll be referring to this as "Server JavaScript" further in the workshop)
* a `public` directory, containing:
    - an `index.html` file -- This is what anyone will see when they visit your repl preview
    - a `styles.css` file -- Styles for the `index.html` above
    - an `index.js` file -- This is the JavaScript that'll run when someone joins your Kuizzy (I'll be referring to this as "Client JavaScript for `/`")
    - a `hosts` directory, containing:
        - an `index.html` file -- This is what you will see when hosting your Kuizzy at https://your-repl-preview-link/host
        - a `styles.css` file -- Styles for your `/host` page
        - an `index.js` file -- JavaScript that'll run when you host your Kuizzy (I'll be referring to this as "Client JavaScript for `/host`")

## Part 3: Code

![Cat frantically hitting keyboard](https://cloud-c5sjja2wx.vercel.app/0giphy.gif)

In your Server JavaScript file (from the previous section), enter:

``` js
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const events = require('events')
const timeUpEvent = new events.EventEmitter()
```

Explanation:

* First, we're importing [express](https://expressjs.com/), which lets us easily create a HTTP server in Node.js
* Next, we create an express instance and initialize the http server
* Following that we start socket.io which allows us to connect to our frontend using WebSockets
* After that we import the built in events and create a new [EventEmitter](https://www.tutorialspoint.com/nodejs/nodejs_event_emitter) which we'll use later

Next, enter

``` js
io.on('connection', (socket) => {
    console.log("A user connected!")
})

app.use(express.static('public'))
http.listen(3000, () => {
    console.log('listening on *:3000')
})
```

Explanation:

* We're printing "A user connected!" every time a user connects to our WebSocket.
* `app.use(express.static('public'))` serves all files in the public directory. This automatically sends the `index.html` file to whoever vists your repl preview link, and sends the `index.html` inside `host` to whoever visits `https://your-repl-link/host`. It also serves the CSS and JS files present inside public which are referenced by the `index.html` files.

Next, let's setup the data. Below the `require` statements, add your questions (The one's you'll use for your Kuizzy) in the following format:

``` js
const questions = [{
    text: "Hello! What time of the day is it right now?",
    time: 10, // In seconds
    answers: [
        "Morning",
        "Afternoon",
        "Evening",
        "Night"
    ],
    correctAnswer: "Afternoon"
}, ]
```

<details>
<summary>
If you don't have any good questions at the moment, or need an example, I've prepared 10 new-year themed questions here (click to expand):
</summary>

``` js
const questions = [{
        text: "In Spain, people eat 12 ____ right before midnight. One for each bell strike.",
        time: 10,
        answers: [
            "olives",
            "tapas",
            "grapes",
            "pieces of bread"
        ],
        correctAnswer: "grapes"
    },
    {
        text: "Which country has a giant hour glass wheel that needs to be turned on its head at midnight?",
        time: 10,
        answers: [
            "Hungary",
            "Romania",
            "Belgium",
            "Switzerland"
        ],
        correctAnswer: "Hungary"
    },
    {
        text: "In Belgium, kids prepare ______ in school for their grandparents and godparents.",
        time: 10,
        answers: [
            "small gifts",
            "party crowns and hats",
            "songs",
            "New Year's letters"
        ],
        correctAnswer: "New Year's letters"
    },
    {
        text: "Which country calls New Year's Eve Hogmanay?",
        time: 10,
        answers: [
            "Ireland",
            "Scotland",
            "Greenland",
            "England"
        ],
        correctAnswer: "Scotland"
    },
    {
        text: "People in Finland predict what'll happen in the new year by _______.",
        time: 10,
        answers: [
            "reading tea leaves",
            "reading palms",
            "casting molten tin into water and interpreting the shape",
            "visiting fortune tellers"
        ],
        correctAnswer: "casting molten tin into water and interpreting the shape"
    },
    {
        text: "What is baked into sweets as a good luck token in Bolivia?",
        time: 10,
        answers: [
            "Pomegranate seeds",
            "Grapes",
            "Almonds",
            "Coins"
        ],
        correctAnswer: "Coins"
    },
    {
        text: "In which city in the U.S. do millions of people gather to watch the ball drop at midnight?",
        time: 10,
        answers: [
            "New York City, NY",
            "Washington, D.C.",
            "Austin, TX",
            "Dallas, TX"
        ],
        correctAnswer: "New York City, NY"
    },
    {
        text: "In Russia, people write down wishes on paper. What do they do with them afterwards?",
        time: 10,
        answers: [
            "Put them in a jar and keep it closed for a year.",
            "Burn them, throw it in a Champagne glass and drink it.",
            "Burn them in the fire place.",
            "Tie them to balloons and let them fly away."
        ],
        correctAnswer: "Burn them, throw it in a Champagne glass and drink it."
    },
    {
        text: "People in Colombia believe that _____ will increase their chances to travel in the new year.",
        time: 10,
        answers: [
            "packing their suitcases by midnight",
            "making a wish on their passports",
            "buying a new suitcase by midnight",
            "running around the block with their suitcases"
        ],
        correctAnswer: "running around the block with their suitcases"
    },
    {
        text: "Why do Ecuadorians burn homemade puppets at midnight?",
        time: 10,
        answers: [
            "It's a replacement for fireworks, as those are illegal.",
            "To burn away the old year and start with a clean slate.",
            "They believe puppets are evil.",
            "To protect themselves against spirits."
        ],
        correctAnswer: "To burn away the old year and start with a clean slate."
    },
]
```

</details>

Next, in your Client JavaScript for `/` , add

``` js
const socket = io()
```

If you run your code now, you should see "A user connected!" in your repl console. In your Server Javascript in `io.on('connection', (socket) => {` , add

``` js
socket.emit('connected')
```

Explanation:

* When a client connects to the server, it will emit "connected"

and in your Client JavaScript for `/` add

``` js
let loader = document.createElement("div")
loader.classList.add("loader")

socket.on('connected', async _ => {
    const name = await swal("Your name:", {
        content: "input",
        button: "Join",
        closeOnClickOutside: false,
        closeOnEsc: false
    })
    socket.emit("name", name)
    swal({
        title: "Waiting for host",
        buttons: false,
        content: loader,
        closeOnClickOutside: false,
        closeOnEsc: false
    })
})
```

Explanation: 

* We're creating an element called loader
* We add the `loader` class to the loader element which makes it appear to spin (Although we won't cover CSS during this workshop, you can take a look at the CSS file)
* Whenever a client connects to your server, a SweetAlert will pop up asking the user for their name. Once the user responds, the client will send the name back to the server. The [SweetAlert Documentation](https://sweetalert.js.org/guides/) is a great place to learn how to customize SweetAlerts.

We're going to store the points for every player on the server side. We'll create an [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) for this (add below the `const questions = ...` ):

``` js
let userPointsMap = {
    /*
    The keys will be the socket IDs, and the values will be arrays. 
    The first element of the array will be the Player's name,
    and the second will be the amount of points they currently have.

    <SOCKETID>: ["<PLAYERNAME>", <POINTS>]

    Example: 
    
    dfwaogruhdslfsdljf: ["Khushraj", 0]
    */
}
```

When a player sends their name, we want to add an entry for them in the `userPointsMap` object. We'll also be showing connected players to the host, so we want to emit the name to the host. Below the `socket.emit('connected')` in your server, add

``` js
socket.once("name", (name) => {
    userPointsMap[socket.id] = [name, 0]
    io.emit("name", name)
})
```

Now, go to your Client JavaScript for `/host` and add the following:

``` js
const socket = io()

let players = document.createElement("ul")
let loader = document.createElement("div")
loader.classList.add("loader")

socket.on('connected', async () => {
    swal({
        title: "Players:",
        button: "Start",
        content: players,
        closeOnClickOutside: false,
        closeOnEsc: false
    }).then(_ => {
        socket.emit("start")
        swal({
            title: "Waiting for players to answer",
            buttons: false,
            content: loader,
            closeOnClickOutside: false,
            closeOnEsc: false
        })
    })
})
```

Explanation:

* First, we connect to the server with socket.io
* Next, we create two HTML elements which we'll use as content for the SweetAlerts
* We add the loader class to the loader element like above
* When the host connects to the server, we want to display a SweetAlert that displays the current players and has a button to start the game
* Once the host clicks "start", we send the start event to the server and show another SweetAlert that says "Waiting for players to answer" (the first question). The second alert shows a loader (see above) as its content.

Just below the previous code, add

``` js
socket.on('name', async (name) => {
    players.innerHTML += `<li>${name}</li>`
})
```

* Every time the server sends us the name of a player, we add it to the content of the `players` div created above. This lets the host see all the players currently waiting for the game to start

Next, before the end of the `io.on("connection", ...)` in the Server JavaScript, add:

``` js
socket.once("start", async () => {
    for (const question of questions) {
        // TODO -- We'll add code here below
    }

    const sortedValues = Object.values(userPointsMap).sort(([, a], [, b]) => b - a)
    io.emit("gameover", sortedValues)
    process.exit(0)
})
```

Explanation:

* When the host starts the game:
    - We loop over every question, one by one. We'll add code to send the questions below
    - Once every question is done, we sort the players according to their ranks like before and emit "gameover" with the sorted values
    - After that, we can stop the server

Inside the for loop in the previous code block, add

``` js
await new Promise(async (resolve) => {
    const toSend = {
        ...question
    } // Duplicate the question

    setTimeout(() => {
        timeUpEvent.emit("timeUp", question.correctAnswer)
        const sortedValues = Object.values(userPointsMap).sort(([, a], [, b]) => b - a)
        const top5 = sortedValues.slice(0, 5)

        io.emit("timeUp", top5)

        socket.once("next", () => {
            resolve()
        })
    }, question.time * 1000)

    delete toSend.correctAnswer
    io.emit('question', toSend)
})
```

Explanation: For every question that we looped over above, 

* Duplicate the question
* Set a timer according to the time specified for the question, which will:
    - Emit "timeUp" using the emitter we created at the start of the workshop and emit the correct answer for question
    - Convert `userPointsMap` into an array and sort it according to the points every person has
    - Slice the top 5 people out of the sorted array
    - Emit "timeUp" using socket.io and send the top 5
    - Wait for the host to send "next", after which it'll move on to the next question
* Delete the correct answer from the duplicate of the question
* Send the duplicate of the question (without the correct answer) to the clients as "question"

Next, lets display the questions sent from the server on the client. Open your Client JavaScript for `/` , and add:

``` js
socket.on('question', (question) => {
    swal({
        title: question.text,
        buttons: {
            1: {
                text: question.answers[0],
                value: 1,
            },
            2: {
                text: question.answers[1],
                value: 2,
            },
            3: {
                text: question.answers[2],
                value: 3,
            },
            4: {
                text: question.answers[3],
                value: 4,
            }
        },
        closeOnClickOutside: false,
        closeOnEsc: false
    }).then(answer => {
        socket.emit("answer", question.answers[answer - 1]) // We subtract 1 because arrays start at 0 and not 1
        swal({
            title: "Waiting for others",
            buttons: false,
            content: loader,
            closeOnClickOutside: false,
            closeOnEsc: false
        })
    })
})
```

Explanation:

* Every time the server sends a question, we open a SweetAlert containing the question and its answers.
* Once the player answers, we emit the answer to the server, and show another SweetAlert which says "Waiting for others" (to answer the question)

At the beginning of the `io.on("connection", ...` in the Server JavaScript, add

``` js
let attempt = ""
```

And before the end of `io.on("connection", ...` , add

``` js
socket.on("answer", answer => {
    attempt = answer
})

timeUpEvent.on("timeUp", (correctAnswer) => {
    if (attempt) {
        if (attempt === correctAnswer) {
            userPointsMap[socket.id][1]++
            socket.emit("correct")
        } else {
            socket.emit("incorrect")
        }
        attempt = ""
    } else {
        socket.emit("noAnswer")
    }
})
```

Explanation:

* When a client sends an answer, we store the answer in the attempt variable
* When a question times out (we set up the emitter earlier), we check if there is an attempt.
    - If there is no attempt, we emit "noAnswer"
    - If there is an attempt,
        - We check if the answer is correct
            - If yes, then we increase the clients score in our leaderboard and emit "correct"
            - If no, then we emit "incorrect"

Now, at the end of the Client JavaScript, add

``` js
socket.on("correct", async _ => {
    swal({
        title: "Correct!",
        text: "Keep it up :)",
        icon: "success",
        buttons: false,
        closeOnClickOutside: false,
        closeOnEsc: false
    })
})
```

* When the event `correct` is sent from the server, we display a SweetAlert that shows "Correct! Keep it up :)".

*Challenge: Add similar alerts for `incorrect` and `noAnswer`*

<details>
    <summary>Here's how the challenge solution looks</summary>

``` js
socket.on("correct", async _ => {
    swal({
        title: "Correct!",
        text: "Keep it up :)",
        icon: "success",
        buttons: false,
        closeOnClickOutside: false,
        closeOnEsc: false
    })
})

socket.on("incorrect", async _ => {
    swal({
        title: "Incorrect!",
        text: "Better luck next time :(",
        icon: "error",
        buttons: false,
        closeOnClickOutside: false,
        closeOnEsc: false
    })
})

socket.on("noAnswer", async _ => {
    swal({
        title: "Time's up!",
        text: "You need to be quicker",
        icon: "error",
        buttons: false,
        closeOnClickOutside: false,
        closeOnEsc: false
    })
})
```

</details>

Next, in the Client JavaScript for `/host` , add 

``` js
socket.on("timeUp", async (scores) => {
    let scoreDisplay = document.createElement("ul")

    swal({
        title: "Leaderboard:",
        button: "Next",
        content: scoreDisplay,
        closeOnClickOutside: false,
        closeOnEsc: false
    }).then(_ => {
        socket.emit("next")
        swal({
            title: "Waiting for players to answer",
            buttons: false,
            content: loader,
            closeOnClickOutside: false,
            closeOnEsc: false
        })
    })

    for ([player, score] of scores) {
        scoreDisplay.innerHTML += `<li>${player}: ${score}</li>`
    }
})
```

Explanation:

* Create an Element to display the leaderboard in
* Display the element with SweetAlert
* Using a for loop, display the scores sent from the server on the leaderboard
* When the host clicks "next", emit "next" to the server and show a "Waiting for players to answer" for the next question. The server listens to the next event before moving on to the next question (see above)

If you run the code now, you should see that it works! But, there's still one problem. The game doesn't end once the questions are over, even though the server emits "gameover". This is because we're not listening for the "gameover" event anywhere.

In the Client JavaScript for `/` , add:

``` js
socket.on("gameover", async (leaderboard) => {
    let leaderboardDisplay = document.createElement("ul")
    for (player of leaderboard) {
        leaderboardDisplay.innerHTML += `<li>${player[0]}: ${player[1]}</li>`
    }
    swal({
        title: "Game over!",
        icon: "info",
        content: leaderboardDisplay,
        buttons: false,
        closeOnClickOutside: false,
        closeOnEsc: false
    })
})
```

Explanation: Like done above, we create a new element and populate it with the leaderboard, which we then display using SweetAlert

Finally, in the Client JavaScript for `/host`, add:

``` js
socket.on("gameover", async (leaderboard) => {
    let leaderboardDisplay = document.createElement("ul")
    for (player of leaderboard) {
        leaderboardDisplay.innerHTML += `<li>${player[0]}: ${player[1]}</li>`
    }
    swal({
        title: "Game over!",
        icon: "info",
        content: leaderboardDisplay,
        buttons: false,
        closeOnClickOutside: false,
        closeOnEsc: false
    })
})
```

You should have a fully functional Kahoot clone, Kuizzy, ready!

![Man celebrating](https://cloud-ie2v1iz2x.vercel.app/03176028b92c680e1b07a159db36cc3a8.gif)

## What's next?

Now that you've managed to build a simple Kahoot clone, add some more functionality to make it EXTREMELY USEFUL. This is for you to hack on, but here are ideas (ascending difficulty -- I've done 3 for you to be used as reference).

01. [Add custom waiting messages ("Were you tooooooo fast?")](https://repl.it/@KhushrajRathod/Kuizzy-custom-messages)
02. [Give points based on time](https://repl.it/@KhushrajRathod/Kuizzy-time-points)
03. [Add an option to skip questions](https://repl.it/@KhushrajRathod/Kuizzy-skippable-questions)
04. Add a way for the host to see the number of answers while the question is in progress
05. Add music with the HTML5 AudioElement
06. Add options for True/false questions
07. Add a timer to show time remaining to host and players
08. Add a podium when the game ends for the top 3 players
09. Automatically end the round if every player has answered
10. Allow questions with multiple correct answers
11. Let players not in the top 5 see their position in the leaderboard, who they're behind, and how far behind they are from them.
12. Add a dashboard that lets the host see who got which questions wrong
13. Add a way for multiple games to be on at the same time

Did you make something awesome? Share it on [#ship](https://hackclub.slack.com/archives/C0M8PUPU6) in the Hack Club Slack and tag me with [@KhushrajRathod](https://hackclub.slack.com/team/U01C21G88QM)!
