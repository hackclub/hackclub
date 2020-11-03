---
name: "Flash chat"
description: "Let's build a chating website in 20 minutes."
author: "@bezlin6mechminerz"
---

In this workshop we will be creating a simple web-based chat application with html and firebase realtime database. This sort of utility would be perfect for a live support system for your website or it will be fun chatting with your friends.

The workshop will look something like this.

![Output video](https://cloud-c1b0o8zx7.vercel.app/0ezgif.com-video-to-gif.gif)

View a [live demo](https://chatwebiste.bezlin.repl.co)

View the [final code](https://repl.it/@bezlin/chatwebiste#index.html)

This workshop will take about 20 minutes.

## Getting started

To code this workshop, we'll be using [Repl.it](https://repl.it), a free, online code editor. Just follow this link and start coding!

After that create a new repl and select language HTML, CSS, JS.

<img alt="repl.it image" src="https://cloud-o8q46nkko.vercel.app/screenshot_2020-09-25_at_9.23.06_pm.png">

## Code and explanation

Lots of beginners make endless changes to their code and expect it to miraculously work right away. The problem with this approach is that it stacks one problem on top of another, and it becomes difficult to figure what went wrong. It is better if you code along.

![Lets code](https://cloud-za1kb4lh8.vercel.app/0tenor.gif)

Let's start with the basic HTML structure.

```html
<!doctype html>
<head>
</head>
<body>
</body>
</html>
```

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

We add this to make the site responsive on different devices. It should be added to the head tag.

Start by importing the Firebase. In the head tag, add the following lines:

```html
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>
```

Now inside the body tag lets make a div and a heading displaying "Simple Chat app".

```html
<div>
  <h1>Simple Chat app</h1>
</div>
```

Now lets add a input feild and a button to send it.

```html
<input placeholder="I can send your text." type="text" id="text" />
<button onclick="send()">Send</button>
```

Here the UI is all ready. For storing our chats we are using firebase realtime database lets set it up.

Go to [firebase](https://firebase.google.com). Then click on 'go-to console' in the top right corner. Add/Create a project, Give a name for your project. Then click on continue, Create project.

![Continue](https://cloud-iqousmfqn.vercel.app/0ezgif.com-video-to-gif.gif)

This is your firebase dashboard.
Click on project settings.

<img alt="Go to project settings" src="https://cloud-5kv6kdks9.vercel.app/07.png">

<img alt="Create App" src="https://cloud-5uv8qengq.vercel.app/08.png">

Give the name for the app. Then click Create.

<img alt="Copy the code shown" src="https://cloud-7xruyy6oh.vercel.app/010.png">

Now you need to paste the above code into the body tag.

```html
<body>
  <script>
    var firebaseConfig = {
      // These are my api keys you need to do these steps and grab yours.
      apiKey: "AIzaSyCGWaPlUm7BLHW2-oBK5TqsggYP6Tjc4S8",
      authDomain: "chat-app-72bc1.firebaseapp.com",
      databaseURL: "https://chat-app-72bc1.firebaseio.com",
      projectId: "chat-app-72bc1",
      storageBucket: "chat-app-72bc1.appspot.com",
      messagingSenderId: "580613664072",
      appId: "1:580613664072:web:fe583ee5020b058b1fd77d",
      measurementId: "G-Z908EHYMWB",
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  </script>
</body>
```

Then go to firebase realtime database.

<img alt="Realtime database" src="https://cloud-dulvhjcxr.vercel.app/0screenshot_2020-11-03_at_12.41.57_pm.png">

Next part is simple. Lets make the send button work, for that we need to make a function which is called when the button is clicked the you can see that we have specified the onclick event to call the send function. So lets make the send function.

```js
send = () => {
  const text = document.getElementById("text").value;
  document.getElementById("text").value = "";
  firebase
    .database()
    .ref("chats/")
    .push({ text: text })
    .then(() => {
      location.reload();
    });
};
```

This part is simple We are making a function `send()` and inside it we are fetching the value of the input feild into a variable text, We have given an id of text to input tag by this we can get the value of the text feild.

```js
const text = document.getElementById("text").value;
```

After that lets make the text feild empty.

```js
document.getElementById("text").value = "";
```

Now lets push the text to our realtime database.

```js
firebase.database().ref("chats/").push({ text: text });
```

Here we are calling the databaseand refering to a collection which here is chats. Dont worry this collection will be created automaticaly when you send your first text. Then we are pushing our text. After the message is send we need to refresh the page so that the data will be structured.

```js
firebase
  .database()
  .ref("chats/")
  .push({ text: text })
  .then(() => {
    location.reload();
  });
```

Now you can see the chat is working but it is not displayed in the screen for that lets fetch the all chats from the database and display it

```js
//We are fetching all chats.
const DB = firebase.database().ref("chats/");
// refering to our database collection
var messages = [];
// Storing our chats
DB.on("value", (snapshot) => {
  snapshot.forEach((child) => {
    var message = child.val(); //getting the chats one by one
    messages.push({
      text: message.text, // pushing the chat to the list we declared before
    });
  });
  var a = 0;
  for (var i in messages) {
    // Going through each text one by one and displaying it in the screen.
    var h = document.createElement("H3"); // creating an h3 element to display our text
    var t = document.createTextNode(messages[a].text); // fetching text
    h.appendChild(t);
    h.style.color = "deeppink"; //setting color of text
    document.getElementById("container").appendChild(h); //appending to a container named container
    a = a + 1;
  }
});
```

Lets make the container.

```html
<div id="container"></div>
```

Now lets add some css to make it look better.

```html
<!--Creating a style tag-->
<style>
  /* Applying css to body tag */
  body {
    text-align: center;
    font-family: helvetica;
  }
  /* Applying css to input tag */
  input {
    /* Making it fixed at the bottom */
    position: fixed;
    bottom: 50px;
    left: 0%;
    width: 100%;
    background-color: black;
    padding: 10px;
    font-size: 20px;
    color: deeppink;
  }
  /* Applying css to button */
  button {
    /* Making it fixed at the bottom */
    position: fixed;
    bottom: 0;
    left: 0%;
    width: 100%;
    color: white;
    padding: 10px;
    font-size: 20px;
    background-color: deeppink;
  }
</style>
```

Finally the code will look like this.

```html
<!doctype html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>

</head>

<body>
    <style>
        body {
            text-align: center;
            font-family: helvetica;
        }

        input {
            position: fixed;
            bottom: 50px;
            left: 0%;
            width: 100%;
            background-color: black;
            padding: 10px;
            font-size: 20px;
            color: deeppink;
        }

        button {
            position: fixed;
            bottom: 0;
            left: 0%;
            width: 100%;
            color: white;
            padding: 10px;
            font-size: 20px;
            background-color: deeppink;
        }
    </style>
    <div>
        <h1>Simple Chat app</h1>
        <script>
            var firebaseConfig = {
                apiKey: "AIzaSyCGWaPlUm7BLHW2-oBK5TqsggYP6Tjc4S8",
                authDomain: "chat-app-72bc1.firebaseapp.com",
                databaseURL: "https://chat-app-72bc1.firebaseio.com",
                projectId: "chat-app-72bc1",
                storageBucket: "chat-app-72bc1.appspot.com",
                messagingSenderId: "580613664072",
                appId: "1:580613664072:web:fe583ee5020b058b1fd77d",
                measurementId: "G-Z908EHYMWB"
            };
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
            const DB = firebase.database().ref("chats/");
            var messages = [];
            DB.on("value", (snapshot) => {
                snapshot.forEach((child) => {
                    var message = child.val();
                    messages.push({
                        text: message.text,
                    });
                })
                var a = 0;
                for (var i in messages) {
                    var h = document.createElement("H3");
                    var t = document.createTextNode(messages[a].text);
                    h.appendChild(t);
                    h.style.color = "deeppink";
                    document.getElementById('container').appendChild(h);
                    a = a + 1
                }
            })
            send = () => {
                const text = document.getElementById("text").value;
                document.getElementById("text").value = "";
                firebase
                    .database()
                    .ref("chats/")
                    .push({
                        text: text,
                    }).then(() => { location.reload() })
            }
        </script>
        <div id="container">
        </div>
        <div>
            <input placeholder="I can send your text." type="text" id="text" />
            <button onclick='send()'>Send</button>
        </div>
    </div>
</body>

</html>
```

![run it](https://cloud-5m2nwfs8r.vercel.app/ezgif.com-video-to-gif-4.gif)

## Hacking time!

Now you know how to make a chat app with firebase. Now, you can make it better. Have fun Refer to the documentation [Learn firebase](https://firebase.google.com/docs). The best way to learn it is to make projects.

Lastly, don't give up. You might be stuck for while with a stubborn bug. When you solve it though, you learn a lot more than what you expected to initially.

I am attaching the documentation for HTML, CSS, and JS

[html](https://developer.mozilla.org/en-US/docs/Web/HTML)

[css](https://developer.mozilla.org/en-US/docs/Web/CSS)

[js](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

![made_it](https://cloud-a58thexdk.vercel.app/tenor.gif)
