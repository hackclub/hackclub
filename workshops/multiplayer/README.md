---
name: Node Intro + Express
description: Make a simple webserver!
author: 'Cedric Hutchings'
group: start
order: 9
---

# Express Webserver

## What can you learn in this workshop?
A webserver is a little bit of software that lets you send websites -- and all of the files that they need -- to anyone who connects to your server.
I'll admit, making a webserver seems a little prosaic.
It's not even immediately evident *why* you'd want to bother making one.
In truth, I'm making this workshop as the beginning of a tutorial series I'm running on how to make a webgame with networked multiplayer, but there really are plenty of other reasons to make your own webserver.

First of all, I think you should do this workshop just to get more familiar with navigating through your own filesystem using the **command line**, if you aren't already.
I introduce a few commands as I go through, and once you have these you're only a couple extra googles away from becoming fairly proficient at using the command line.
That can make you a good bit faster when manipulating the filesystem, especially if you're already a fast typist.

**Node.js** is a pretty cool technology for doing lots of things, especially developing web related software. This project is an awesome introduction to node,
because it walks you through configuring a brand new node project.
Surely that could come in handy at a Hackathon some time in the future, when you want to use a library for Machine Learning or a library for some other fancy concept that uses Node.

**Express** is awesome for quickly hosting files from your own computer.
There are a bunch of other ways to host files from your computer, including some command line interfaces that don't require any code at all,
but because Express is just Node.js code it offers a lot of opportunities for doing some fairly complex configuration and web app serving.
Perhaps it's overkill for a webgame which has fairly simple webserver needs, but I like to keep my options open in case I want to add some pages to my app for making an account or looking at your player stats and whatnot.

`Repl.it`/`Glitch`/`Github Pages` do offer their own interfaces you can use to get your files hosted, but here's a few reasons why you'd want to write your own with Express:
- **More configuration**. Using express, you can very carefully tweak how your files are served.
- **Control over hosting**\*, Express isn't tied to any specific platform like the built in hosting of Glitch and Repl.it. This means that you can host your app on whatever hardware you want.

\* You can still get Repl.it or Glitch (but not Github Pages, it's more limited) to host your Node/Express server for you, you don't have to use their hosting solutions when you make your project on their platforms.

### Installing Node.js
You can get Node.js [here](https://nodejs.org/en/download/).
Note that this isn't possible on a chromebook, so you'll have to take the Repl.it route if you're using one.

### Client
A client is someone who uses an application.
However, the term gets broader than that, sometimes it can also be used to refer to the software someone uses to connect to a server (i.e. the Frontend).

### Backend
The Backend is sort of the heart of the application, the server.
It connects all of the clients together, and defines how they can interact.
If you're familiar with the movie *The Matrix*, you can think of the backend as the giant system that all of the people(clients) are hooked into.
We'll be writing our backend in Node.js.
It will be responsible for sending everyone who connects the website's `.html`, `.css`, and `.js` files, as well as any other images and assets.
The user doesn't use the backend directly.
Instead, they have a frontend which presents the backend's information to them in an easier to understand format.

### Frontend
The frontend is sort of the opposite of the backend.
Instead of making all of the important decisions in the application,
the frontend just displays all of the data that the backend gives it.
To continue *The Matrix* analogy, the frontend is like those little pods that each of the people plug themselves into,
if those pods took the data from the matrix and turned it into a format the people's brains could understand.
Our frontend will be made using HTML5.
The client uses the frontend to communicate with the backend and understand the information that the backend has.

## Getting Started: Making the Matrix
We'll start with the backend. Because the backend tells the frontend what to render, it makes sense to start at the backend and work our way out.
I'll be doing this on my local filesystem using the command line, but if you're more comfortable in repl.it feel free to follow along there.
Start with a Node.js repl, if you are.

### Making the Project Folder
We're going to be initializing our node app from the command line.  
On Windows, you can open up a Powershell Window by pressing the Windows key and typing Powershell.  
The app that says "Windows Powershell" is what you want, you can safely ignore ISE and x86.  
On Mac, you can use Command + Space and then search "Terminal", and press enter.  
On Linux, refer to your distro's documentation.  
I'll call the app I'm going to make `wings`.

I'll start by making sure I'm in my home directory, i.e. `C:\Users\cedhu`.  
Note that this only works in Powershell if you're on Windows. Use Powershell, not cmd.  
`cd ~`.  

Now, in this directory, let's make a folder for my project, `wings`.
You can name yours whatever you'd like.
(if you do, you'll just have to replace each instance of "wings" with whatever you name it in the following commands)  
`mkdir wings`  
mkdir stands for "make directory".  

Now I'll enter that new folder.  
`cd wings`  
cd stands for "change directory".  

Sweet, now I'll initialize npm (**n**ode's **p**ackage **m**anager, it lets you install node libraries).
This means that I'm telling node.js that this directory will be a node project.  
`npm init`  
This will open a little wizard you can use to configure the new node.js project you're making.
I put "multiplayer 2d game" as the description and "webgame multiplayer html5-canvas" as the keywords.
I gave npm my first and last name for the author, since I want my real name to be associated with this thing that I'll be proud of.

For the license, I used "MIT OR Apache-2.0", but that's just because of my own personal preference.
If you want the thing you're making to be completely your own, "UNLICENSED" means something to the effect of "all rights reserved, this is mine."
Be careful not to type "UNLICENSE" instead, because that's a license like MIT that gives all rights to everyone.  

If you are making a thing that only you will own, consider also adding the `"private": true,` field to the `package.json` file that running this command will create in your `wings` project folder.
You can read more about what JSON is [here](https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/).

For the rest of the fields I just pressed enter to accept the defaults.

### Adding Express
Express is a library for quickly throwing together webservers.
In our case, we'll want to send anyone who connects to our server the HTML file for our frontend and any images, `.js` files, `.css` files, and maybe sound files that the app's frontend might need.

To do that, we're writing the little bit of the backend that sends the frontend to their web browser.  
This terminal command will download Express for us so that we can use it in our code.  
`npm install express --save`

### Writing the Code
Next, let's make an `index.js` file in the text editor of your choice.

I use Vim. Sublime Text is alright, as are Atom, VS Code, ect.

If you're using a command line based editor like Vim or Nano, or at least some sort of editor that can be opened from the command line,
making that new index.js file is as simple as `nano index.js` (of course, replace `nano` with the command for the editor you're using).

Otherwise, you'll probably need to use the non-command line file explorer accessible through opening your text editing application.
We made a folder, `wings`, in the filesystem with the `mkdir` command.
You'll need to go find that folder from your text editor, open it up, and save a new file into it, named `index.js`.
For example, in Sublime Text, you can press Ctrl + N to make a new file, and then Ctrl + S to be prompted about where to save it.
Navigating to the folder we made in the home directory is different depending on the OS you're using.  
On MacOS/Windows, you can go to `C:/Users/<your system username>/wings/`.  
On Linux, it's `/home/<your system username>/wings`.  

Now that we've made the file, let's write this code inside of it.
```js
// hosting da site
const express = require('express');
const app = express();

// express setup

// give them access to everything in /public
app.use(express.static(__dirname + '/public')); 

// send them the html file no matter where they go
app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});

// express error handling
app.use(function logErrors (err, req, res, next) {
    console.error(err.stack);
    next(err);
});

// server hosting.
app.listen(8000);
```

Once you've typed all of this into your `index.js` file, go ahead and save it, and then run this command:  
`node index`.  

When you run that, Node will start hosting your web server for you through Express, and you can go ahead and visit it by opening up a web browser
and going to the url:  
`localhost:8000`  

### Ports
Note that the 8000 number that's part of the URL should be the same as the 8000 in that last line of your index.js, the `app.listen(8000)` one.
That number is called a port. If you change your application to use port 3001, like so:
`app.listen(3001)`
then you can connect to it using `localhost:3001` in your web browser. The port 80 is special.
It's reserved for web traffic, so if you change your application so that it uses port 80, you only have to type `localhost` in your web browser
to go your app. Port 80 is assumed to be the port of every website, unless you specify another port using the colon.
You can think of ports as a way to host several different things on your computer at once without having them conflict.
They can also serve as a way to tell other applications, like your web browser, what kind of server you're hosting.
(i.e. port 80 = website)

### Bruh it doesn't work
If you do go to `localhost:8000` (or whatever other port you've configured yours to use) you won't get a fancy web page, you'll get an error.
You get a tiny bit of text that says  
`Error: ENOENT: no such file or directory, stat 'C:\Users\cedhu\wings\public\index.html'`  
in a really scary font.

The error isn't really that scary though. It just means that we told the application to use a file named `index.html` which lies in a `public` folder, but...
well, we never actually wrote an `index.html`.  
Or even made a `public` folder.
```js
    // this is the line where we send the person who connects to
    // localhost our index.html, but we never made one.
    res.sendFile(__dirname + '/public/index.html
```

First, let's close our node server with Ctrl + C.
This will let us enter another command, specifically  
`mkdir public`  
to make that public directory that we told our app we'd put our index.html in.
Go ahead and make an index.html in that folder using that text editor of yours, just like before with `index.js`.
Note however that instead of `wings/index.js`, we're doing `wings/public/index.html`.  
Try putting this code in that `index.html`:  
```html
<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title>My Page Served From Express!</title>
</head>

<body>
  <!--[if IE]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->

  <h1>Hello world! This is HTML5 Boilerplate.</h1>
</body>

</html>
```

I'm not going to get into actually writing and explaining HTML, there are plenty of other workshops that do that very well.

Instead, I'm going to break down that Express code I sent to you later.

### Breaking down that Express Code.

If you wanted to use an image in your webpage, you could just put it in your public folder.
For example, if you put `doge.png` in your public folder, then you would just need to link that up as is the custom in HTML, and provide `doge.png` as the src of the image.
After doing so, your image would load perfectly, because of this Express line right here.
It makes any files in `public` available to the frontend when it searches for them.
```js
// give them access to everything in /public
app.use(express.static(__dirname + '/public')); 
```

After that snippet of code, we send anyone who visits our site `index.html`, as I've already explained.  
`/` is the root of your application.  
You could use fancier Express code than this to send a special page
to anyone who goes to or is redirected to the `workshop/` directory of `localhost`, for example.
Naturally, there's a lot more to it than that, Express is pretty powerful.
```js
app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});
```

Second to last in our tiny Express example is this block of code.
```js
// express error handling
app.use(function logErrors (err, req, res, next) {
    console.error(err.stack);
    next(err);
});
```
Sometimes in Express, things go wrong. This just funnels those errors right into your console.
Perhaps if you were running your server in production and wanted a better idea of what was going on even if your console wasn't nearby,
you could have the errors logged into a file you could read at your leisure.


And finally, there's the listen statement, where you can provide your port.
```js
app.listen(8000);
```
Note that no server is actually hosted until this line is called.
Right now, it's run at the bottom of the file.
It doesn't have to be.
For example you may want to load a bunch of assets into the server's memory first
before you start to allow connections.

### Shoutout to Nodemon
If you're familiar with Repl.it or Glitch as many beginners are, you're probably spoiled on their live reloading functionality.
There's no shame in that, I'm addicted to live reloading as well.  
https://nodemon.io/  
You can easily install this command line utility using a single command, and then have your server automatically reload as soon as any changes are detected.
The key difference is that you start your app with just `nodemon` instead of `node index`.

# Wrapup.
This is the end of my tiny crash course example on Node and Express. There's a lot more to learn about either in their respective documentation.
Express has a ton of awesome content for writing more complex web apps, and I would encourage you to dive into their documentation to learn more.  
https://expressjs.com/  
https://nodejs.org/en/  

Now you have a solid webserver you can connect to to get a webpage from.
You could use this to run a game or a simple website.
You now know the core concepts and terminology of the server/client architecture that the web is built on.
If you hear someone refer to themselves as a "Frontend" or "Backend" dev, you'll know what they mean.
(If they say "Full Stack", they mean they do both.)
Along the way, you also learned some terminal commands and how to start a new Node.js project.

Check in next time,
where we'll establish a websockets connection between the backend and the frontend,
so that the website can be updated with new information from the backend as it's running.
