---
name: 'Reddit Viewer'
description: 'Use Flask and the PRAW library to make a subreddit browser.'
author: '@KaiDevrim'
---

![The end result](https://cloud-fz3kdxk80.vercel.app/image.png)

Python combined with Flask is an amazing way to understand how to make a website backend. Understanding how to make a backend is very simple and in this tutorial, we will be making our own Reddit web client that fetches directly from the reddit API.

# Step 1: Setup

Since this is just Python there isn't much setup. Just go to [repl.it](https://repl.it) and make a new repl. Make sure you import the 2 libraries required for this, and 2 for keeping your api key safe.

```py
import praw
from dotenv import load_dotenv
import os
from flask import Flask, render_template, request

```

In the same folder as your main.py, make a file called `.env`. This is where we will store the api keys. Also go back to the main.py file and add these four lines to load your env file and flask,

```py
load_dotenv()
app = Flask(__name__)

if __name__ == '__main__':
  app.run(host='0.0.0.0' , port = 9060)
```

The first one just finds and loads the your .env file and the second one says that this python file is the main file to run flask in. The third line is just doing a simple if check that will then run flask on localhost with the port being 9060.

# Step 2: Getting Reddit API Key

Getting your api key is very simple, go to the [Reddit Apps page](https://www.reddit.com/prefs/apps/) and click on `create another app...` at the bottom. ![The create another app button at the bottom](https://cloud-i2087nmyc.vercel.app/image.png)

You should have a little section with `name`, `type`, `description`, `about url`, `redirect uri`. We only need the `name`, `type`, and `redirect uri`. For the name fill it with any name you want. For the type choose `script` and for the redirect uri, this doesn't matter, so just put `http://www.example.com/unused/redirect/uri`. ![The finished application creation](https://cloud-f67e393ze.vercel.app/image.png)

In your repl.it open your .env file and make a variable called `SECRET` and another one called `ID`. Now go back to your reddit apps section and copy the secret from the secret part to your SECRET variable in your env file. Also copy the section just under your personal use script to your ID variable.

![](https://cloud-119djxpws.vercel.app/image.png)

We have the authentication setup which is easier done than said. Now one last step.

We need to make a reddit variable that connects to the reddit api. Make a reddit = praw.Reddit() function. Now the next steps all go into the parenthesis. All it requires is three things, `client_id` which is your `"ID"` variable. So, do `client_id=os.getenv("ID"),`. The next one is client_secret. `client_secret=os.getenv("SECRET"),`. The final one is user_agent which is just a fancy name for what browser on what device. We will use a sample one as it doesn't actually matter which one you use. `user_agent="Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0")`

![What the connection to Reddit should look like](https://cloud-ggp6iugz2.vercel.app/image.png)

To test it out, run `print(reddit.read_only)`, if it returns true then you are golden.

# Step 3: Setting up Flask Pages

Make a folder called `templates` and inside of `templates` add an `index.html` file.

![Your folder structure for the rest of this workshop](https://cloud-qvylewnf8.vercel.app/image.png)  
Setup this index.html like any other html file with a header and a body.

We want to load this index.html into our view. So, make an `<h1>` in the body that just says, `"Hello World"`. Now go to the main.py file and add an `@app.route('/')`. This means that the root (/) should load whatever function is under it. Now directly underneath the @app.route, add a function called front_page that returns render_template('index.html').

![The front_page method](https://cloud-6x6i6q8oh.vercel.app/image.png).

Now press run and you should see a Hello World.

# Step 4: Getting and handling user input

Go to the index.html file and add a `form` with a `method="POST"`. In the form area add an `<h3>` that just has something like `Go to subreddit`. In the same form area add an input with the `name="subreddit"`. Also have the `input type=submit`. Thats it from the html side of user input. Go to the main.py file and add another @app.route going to the ('/') but this time add a comma and have a methods=["POST."] `@app.route('/', methods=['POST'])`. This means that when the html sends a POST event, we will handle it in the function. Under the app.route, add a new method called `front_page_post`. In that function remember to put a `return render_template('index.html')` put keep this at the bottom of the function always.

Above the return statement add a new variable called subreddit and make it equal to `request.form['subreddit'] `. This is basically just capturing the user input from the text box we made.

![The second app.route method](https://cloud-r6o8ztkzw.vercel.app/image.png).

# Step 5: Showing the posts

Now we want to have the html output whatever posts the subreddit has. So, go into the index.html file and add these lines. `{% block content %} {% endblock %}`. These are called Jinja Templates and it's what Flask uses to dynamically change the HTML. Block content just means that each part is like a block and we want it to be shown like that.

In between your block content sections add this line, `{% for submission in submissions %}`. This just means that every post in the subreddit should have the same html applied to it. The html that's applied to it whatever is in between it.

Currently we do not have a "submissions" variable. That is easy to create. Go to the main.py file and in your return statement in the \_post method add a comma after the index.html and add this line. `submissions=reddit.subreddit(subreddit.upper()).hot(limit=100)`. This is just saying that the submissions variable in the html should be all the posts from the user defined subreddit (which is regardless of case because of the .upper). Then we sort them by hot, and only showing the top 100 posts.

That is all we need for the python part. Now we just need to finish off the html. In your for-statement section in the html file, make an `<a>` element with an `href={{ "https://reddit.com" + submission['permalink']}}`. This just means that we want the title to go to the actual reddit post with comments when we click on it. We must set it with reddit.com or else it will try to use whatever website we are currently on.

Now in the `<a>` section add an `<h2>` that in between it is `{{ submission['title']. This just means that we can see the posts title.

Now under the `<a>` add an img tag and make its `src={{ submission['url']`. This is because the URL of the post we are getting is also the image.

Now run your program and you should be able to enter a subreddit name and see its posts.

# Step 6: Adding some styling

This step is up to you to do, but I will be centering the site and making the images fit on the page.

After your body tag add a `<style>` tag. Now make a body selector.

To center the site, I found that this setup worked best:
`align-content: center;`
`text-align: center;`
And to make the images fit, make an img selector and make the width and height 50%.

Now you have made the reddit reader! Customize it to your will and maybe you can make a whole reddit website

# Final Details and Extra Comments

The main.py file

![](https://cloud-mephnkqgy.vercel.app/image.png)

The final HTML

![](https://cloud-fqz8oxjxr.vercel.app/image.png)

I would highly reccomend reading more of the [PRAW library documentation](https://praw.readthedocs.io/en/latest/). Also learning Flask is a great idea for any developer working with Python. Google is full of tutorials on how to use Flask and there are many projects that are easier done in Flask.

[FreeCodeCamp Flask Tutorial](https://www.youtube.com/watch?v=Z1RJmh_OqeA)

[The FullStackPython written guide on Flask](https://www.fullstackpython.com/flask.html)

[TutorialsPoints' Complete overview of Flask](https://www.tutorialspoint.com/flask/index.htm)

[A very big guide on not just Flask but also using it](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)

Thanks for reading!
--Kai

[In video form](https://cloud-djph69ehn.vercel.app/zoom_0.mp4)
