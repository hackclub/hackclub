# Logging in With Flask

Prerequisites: Basic Python knowledge, basic understanding of webservers

Open a website, say [Github](https://github.com). Okay, now sign in. What just happened? What did the code do? How does "Logging In" work? Let's try building it ourselves.

The [Flask](https://pypi.org/project/flask/) library in Python is what we'll use to create a server for us to write (POST) and read (GET) data from. We'll test our Flask webserver with [Insomnia](https://insomnia.rest/), a desktop program or Chrome extension that allows us to test APIs by sending GET or POST requests. (If you don't know what GET or POST requests are, I've linked some helpful sources at the bottom.)

## What does Flask do?

Flask provides us with the tools to create a webserver. We interact with this webserver by writing code that responds to HTTP requests in Flask. We define what the code does when a certain request is recieved. Flask is used to create the webserver and handle these requests.

## Downloading Insomnia

Insomnia is useful because it is available for so many platforms. All you need is a Chrome browser. You can get it at the [Chrome Web Store](https://chrome.google.com/webstore/detail/insomnia-rest-client/gmodihnfibbjdecbanmpmbmeffnmloel?hl=en-US). Press the "Add to Chrome" button, and then press "Add App."
