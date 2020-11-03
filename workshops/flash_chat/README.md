---
name: "Flash chat"
description: "Let's build a chatting website in 20 minutes."
author: "@bezlin6mechminerz"
---

In this workshop, we will be creating a simple web-based chat application with HTML and a firebase real-time database. This sort of utility would be perfect for a live support system for your website or it will be fun chatting with your friends.

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

We add this to make the site responsive to different devices. It should be added to the head tag.

Start by importing the Firebase. In the head tag, add the following lines:

```html
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>
```

Now inside the body tag let's make a div and a heading displaying "Simple Chat app".

```html
<div>
 <h1>Simple Chat app</h1>
</div>
```

Now, let's add an input field and a button to send it.

```html
<input placeholder="I can send your text." type="text" id="text" />
<button onclick="send()">Send</button>
```

Here the UI is ready. For storing our chats we are using a firebase real-time database lets set it up.

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

Then go to the firebase real-time database.

<img alt="Realtime database" src="https://cloud-dulvhjcxr.vercel.app/0screenshot_2020-11-03_at_12.41.57_pm.png">

The next part is simple. Let's make the send button work, for that, we need to make a function which is called when the button is clicked you can see that we have specified the onclick event to call the send function. So let's make the send function.

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

This part is simple We are making a function `send()` and inside it, we are fetching the value of the input field into a variable text, We have given an id of text to input tag by this we can get the value of the text field.

```js
const text = document.getElementById("text").value;
```

After that let's make the text field empty.

```js
document.getElementById("text").value = "";
```

Now, let's push the text to our real-time database.

```js
firebase.database().ref("chats/").push({ text: text });
```

Here we are calling the database and referring to a collection which here are chats. Don't worry this collection will be created automatically when you send your first text. Then we are pushing our text. After the message is sent we need to refresh the page so that the data will be structured.

```js
firebase
 .database()
 .ref("chats/")
 .push({ text: text })
 .then(() => {
 location.reload();
 });
```

Now you can see the chat is working but it is not displayed on the screen for that let's fetch all chats from the database and display it

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
 // Going through each text one by one and displaying it on the screen.
 var h = document.createElement("H3"); // creating an h3 element to display our text
 var t = document.createTextNode(messages[a].text); // fetching text
 h.appendChild(t);
 h.style.color = "deeppink"; //setting color of text
 document.getElementById("container").appendChild(h); //appending to a container named container
 a = a + 1;
 }
});
```

Let's make the container.

```html
<div id="container"></div>
```

Now, let's add some CSS to make it look better.

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

Finally, the code will look like this.

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

