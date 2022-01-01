---
name: 'KanyeRest Quote Generator'
description: 'Make a quote generator with Flask '
author: '@s1ntaxe770r'
img: 'https://cloud-57v29xozt.vercel.app/0screen_shot_2020-12-07_at_5.26.13_pm.png'
locales: 'pt-br'
---

So you listened to "Mercy", "Flashing Lights" and "FourFiveSeconds". Now you're looking for inspiration from Kanye? Yeah me too!! In this workshop, you will build a Kanye quote generator. By the end of this workshop, you will learn how to do three things:

- Fetch from an API using web requests
- Parse request data
- Render the data

This workshop assumes some basic knowledge of Python, HTML, and CSS.

Let's get started!

## So what's Flask?

Flask is a web application framework for Python. With it, you can super-easily build fully-functioning web APIs. If you don't totally understand what that means, don't worry—you'll begin to understand it as you go along.

## Getting started

We're going to be using [repl.it](https://repl.it), a free, online code editor, to write this workshop. To get started, visit the starter project [here](https://repl.it/@JubrilOyetunji/kanyerest). Your coding environment will spin up in a few seconds!

### But where's the data?

![where](https://cloud-c2egtgknk.vercel.app/0where.gif)

We're going to pull our Kanye quotes from [kanye.rest](https://kanye.rest), a free API that generates random Kanye quotes.

### Alright lets do it!

Let's start by importing a few libraries in `main.py`:

```python
from flask import Flask,render_template
import requests
```

On the first line, we import `Flask` and `render_template`. `render_template` allows us to return a "template"—in our case, the HTML file in the `templates` folder—along with some data.

## Creating your first Flask route

A route in Flask is how we define paths on our app. An example would be http://hackclub.com/workshops — the route would be `/workshops`.

Let's create an instance of `Flask` and create our first route. Under the first two lines you wrote, add:

```python
app = Flask(__name__)

@app.route("/")
def index():
   # do stuff here
```

First, we're assigning a Flask instance to a variable called `app`. Then, we create our first route.

As you can see, Flask routes are defined with the `@flaskinstance.route("/routename")`—in our case, `@app.route("/routename")`— decorator right above a function that runs whenever a user visits the route in their web browser.

## Getting that data!

![give me your phone meme but it's give me your data](https://cloud-fosrs2x3k.vercel.app/03e0-2.jpg)

Earlier, we imported the `requests` module, which we will use to make [http requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages).

Within the `index` function, add the following code:

```python
@app.route("/")
def index():
  url = "https://api.kanye.rest"
  data = requests.get(url)
  response = data.json()
  quote = response["quote"]

  return render_template("index.html",quote=quote)
```

- We start by declaring a variable `url` which holds the url of the API we're trying to fetch
- Then, we make an [HTTP GET request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) to the url using the `requests` library and assign it to a variable `data`
- Next, we parse the HTTP response using `data.json()`
  - The response from the API looks something like this:
  ```json
  {"quote":"Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary."}
  ```
- Then, we get the "quote" from the HTTP response and assign it to a variable `quote`
- Finally, we render the data on a webpage using the `render_template` function.

<details>
  
  <summary> Protip! </summary>
  
  If you want to see the response you get from `response`, add:

  ```python
  print(response)
  ```

  right after the line that starts with `response =`.
  
</details>

## Rendering the data

![present](https://cloud-8ec0u6szu.vercel.app/0garfield.gif)

By default, Flask looks for any HTML files you pass to the `render_template` function in a folder called `templates`. On the sidebar on the left of your repl, click on the folder called `templates` to open it. Then, open the `index.html` file inside it. You should see the following code:

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

Flask uses a templating language called [jinja](https://jinja.palletsprojects.com/en/2.11.x/). This is how we can pass data and even use things like loops and conditional statements. The begining and end of jinja syntax are denoted by `{{ }}` or `{% %}` in the case of things like conditionals.

There are three main parts to pay attention to here:

```html
<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
```
- Here we use `url_for` tell flask to look in the static folder in the current directory and return a file named `style.css`.

```html
<h3> {{ quote }} </h3>
```
- Here we render the quote we passed to the `render_template` function earlier.

```html
<a href="{{ url_for('index') }}" class="block refresh round">refresh</a>
```
- Once more use the `url_for()` function but this time we pass the name of the function handling the index route since each the page loads it fetches a new quote.

## CSS!!!

To make things look a little nicer, open up the `style.css` file located in the `static` folder. Feel free to play around with it and add your own styles, or you can use the CSS below:

```CSS
.head {
  margin: 0 auto;
  width: 60%;
}

h1 {
  text-align: center;
}

.quote { 
  text-align: center;
  font-size: 2em;
  margin: 0 auto;
  margin-top: 2em;
}

.refresh {
  text-decoration: none;
  text-align: center;
  font-size: 2em;
  width: 4em;
  margin: 0 auto;
  margin-top: 2em;
}
```

Once you've added your styles, navigate back to `main.py` and add this to the bottom of the file:

```python
if __name__ == "__main__":
  app.run(host="0.0.0.0")
```

This will make sure our app continuously runs once we run it. The `host="0.0.0.0"` parameter makes it accessible to everyone on the web.

<details>
   
  <summary>Here's the final code:</summary>

  `main.py`:

  ```python
  from flask import Flask,render_template
  import requests

  app = Flask(__name__)

  @app.route("/")
  def index():
    url = "https://api.kanye.rest"
    data = requests.get(url)
    response = data.json()
    quote = response["quote"]

    return render_template("index.html",quote=quote)

  if __name__ == "__main__":
    app.run(host="0.0.0.0")
  ```

  `index.html`:

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

  `style.css`:

  ```css
  .head {
    margin: 0 auto;
    width: 60%;
  }

  h1 {
    text-align: center;
  }

  .quote { 
    text-align: center;
    font-size: 2em;
    margin: 0 auto;
    margin-top: 2em;
  }

  .refresh {
    text-decoration: none;
    text-align: center;
    font-size: 2em;
    width: 4em;
    margin: 0 auto;
    margin-top: 2em;
  }
  ```
 
</details>

To see what you made, click the green "Run" button at the top of your repl.

Yay!!! You did it!!!!

# Hacking

![hacking](https://cloud-hjufepegf.vercel.app/0hacker_cat.gif)

Check out what other Hack Clubbers have made!

- [Khushraj Rathod](https://repl.it/@KhushrajRathod/RandomJokeGenerator#main.py) used the dad joke API to make a dad joke generator
- [Jason Antwi-Appah](https://repl.it/@JasonAntwiAppah/kanyerest2#main.py) used a food API to build to build a food suggestion app

Check out [this](https://apilist.fun) list for other cool APIs you could build stuff with.

The source code for this workshop can be found [here](https://github.com/s1ntaxe770r/KQG)

### Further resources

- The [Flask](https://flask.palletsprojects.com/en/1.1.x/) documentation is super friendly so it's worth checking out.
- If you're more of a visual learner, check out [Pretty Printed](https://prettyprinted.com)—they've got some great Flask tutorials.
