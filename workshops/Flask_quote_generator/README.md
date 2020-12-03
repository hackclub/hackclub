---
name: 'KanyeRest Quote Generator'
description: 'Make a quote generator with Flask '
author: '@jubril'
---

# Get inspired with flask

So you listened to "mercy", "flashing lights" and "fourfiveseconds". Now you're looking for insipration from Kanye? Yeah me neither! But in this workshop you will learn how to build a Kanye quote generator. By the end of this workshop you should have learnt how to do three things.

- Fetch from an API using requests

- Parse request data

- Render the data

This workshop assumes some basic knowledge of python , HTML and CSS.

## So what's Flask ?

Flask is a web application framework written in python, it allows users to build simple and even complex applications,Flask does not enforce particular methods on users. Flask is immensely popular in the python community. According to the jetbrains python developer survey
Flask was the most used web framework.

![surveyresults](https://cloud-j79fh1cen.vercel.app/0image.png)

## Getting started

You can find the starter project [here](https://repl.it/@JubrilOyetunji/kanyerest)

## But where's the data?

![where](https://cloud-c2egtgknk.vercel.app/0where.gif)

The data used in this workshop will come from http://kanye.rest.

### Alright lets do it!

We begin by making a few imports in `main.py`

```python
from flask import Flask,render_template
import requests

```

on line one we import `Flask` and `render_tepmlate` , `render_template` allows us to return a "template" along with some data.
Note: template simply refers to the html

Next we create an instance of `Flask` and create route.

#### Route?

A route in flask is how we define paths on our app. An example would be http://hackclub.com/workshops.
Routes are defined with the `@flaskinstance.route("/joinhacklubslack")` decorator followed by a function which would get executed whenever a user visits the route. Follow along with the code below

```python
app = Flask(__name__)


@app.route("/")
def index():
   # do stuff here
```

here we create a route using the flask instance which we assign to the `app` variable and then we pass in a path in this case its root of the page.

## Getting that data!

![data](https://cloud-qlxdganfz.vercel.app/0image.png)

Earlier, we imported the `requests ` module which we will use to make [http requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages).

Within the index function follow along withe following code.

```python
def index():
    url = "https://api.kanye.rest"
    data = requests.get(url)
    response = data.json()
    quote = response["quote"]

    return render_template("index.html",quote=quote)
```

We start by defining a variable cleverly name `url` which holds the url of the API we are trying to fetch data the using `request.get()` we make [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) request to the API. if you print the `response` variable it should look something like this

`{'quote': "some random kanye quote "}`

the `response` variable is a dictionary so we can access the quotes by using the key which is `quote`
and finally we render the data using the render the data using the `render_template` function. Here we pass the name of the template in this case its `index.html` and `quote` which is the name we would use to refer to the quote in the template.

## Rendering the data

![present](https://cloud-8ec0u6szu.vercel.app/0garfield.gif)

By default flask looks for any html files you pass to the `render_template ` function in a folder called templates.Open the `index.html` in the templates folder and follow along with the following code.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/blocks.css/dist/blocks.min.css" />
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
    <title>Kanye Quotes</title>
</head>
<body>
  <div class="head block">
   <h1>Kanye once said</h1>
  </div>
      <div class="quote block">
      <h3> {{ quote }} </h3>
   </div>
   <a href="{{ url_for('index') }}" class="block refresh round">refresh</a>
</body>
</html>
```

Flask uses a templating language called jinja, this is how we can pass data and even use things like loops and conditional statements. The begining and end of jinja syntax are denoted by `{{ }}` or `{% %}` in the case of things like conditionals. There are three main parts to pay attention to here.

- `<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">`

Here we use `url_for` tell flask to look in the static folder in the current directory and return a file named `style.css` .

- `<h3> {{ quote }} </h3>`

Here we render the quote we passed to the `render_template` function earlier.

- ` <a href="{{ url_for('index') }}" class="block refresh round">refresh</a>`

Once more use the `url_for()` function but this time we pass the name of the function handling the index route since each the page loads it fetches a new quote.

Finally add this line to the `main.py`

```python
if __name__ == "__main__":
    app.run(host="0.0.0.0")
```

This is so our app doesn't exit immediately its run. If you are following along on [repl.it](https://repl.it) click on the green button in the top right corner. So now you've completed the workshop and hopefully your a little more inspired.

# Hacking

![hacking](https://cloud-hjufepegf.vercel.app/0hacker_cat.gif)

Checkout what other hackclubbers have made

[Khushraj Rathod](https://repl.it/@KhushrajRathod/RandomJokeGenerator#main.py) used the dad joke API to make a dad joke generator

[Jason Appah](https://repl.it/@JasonAntwiAppah/kanyerest2#main.py) used a food API to build to build a food suggestion app

Checkout [this](https://apilist.fun) list for other cool API's you could build stuff with.

The source code for this workshop can be found [here](https://github.com/s1ntaxe770r/KQG)

### Further resources

The [flask](https://flask.palletsprojects.com/en/1.1.x/) documentation is super friendly so it's worth checking out.

if your are more of a visual learner , check out pretty printed on youtube and the [website](https://prettyprinted.com) there are some great flask tutorials.
