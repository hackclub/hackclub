# Logging in With Flask

Open a website, say [Github](https://github.com). Okay, now sign in. What just happened? What did the code do? How does "Logging In" work? Let's try building it ourselves.

The [Flask](https://pypi.org/project/flask/) library in Python is what we'll use to create a server for us to write (POST) and read (GET) data from. We'll test our Flask webserver with [Insomnia](https://insomnia.rest/), a desktop program or Chrome extension that allows us to test APIs by sending GET or POST requests. (If you don't know what GET or POST requests are, I've linked some helpful sources at the bottom.)

## What does Flask do?

Flask provides us with the tools to create a webserver. We interact with this webserver by writing code that responds to HTTP requests in Flask. We define what the code does when a certain request is recieved. Flask is used to create the webserver and handle these requests.

## Importing the Libraries

We'll be using two libraries, the aforementioned [Flask](https://pypi.org/project/requests/) library and the [Json](https://docs.python.org/3/library/json.html) library to create JSON files to store user data with. 

