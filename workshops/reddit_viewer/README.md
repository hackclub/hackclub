---   

name: 'Make a Reddit Web App'   
description: 'Using Flask and the PRAW library make a webpage that allows you to browse subreddits.'   
author: '@KaiDevrim'   
---   
![The end result](https://cloud-fz3kdxk80.vercel.app/image.png) 

Making a website backend sounds daunting if you haven’t done it before, but Python and Flask make it super easy! In this workshop, you’ll make your own Reddit web client that fetches directly from the Reddit API.

# Step 1: Setup 

We’re going to be using repl.it, an awesome online code editor. To start a new Python project in repl.it, visit [Repl.it](https://repl.it/languages/python3). It may ask you to register or login so do that because you can save your code and access it at any time! 

We will now import some libraries. A library is basically just a collection of code someone else made that can be used to do complex tasks in just a line or two.

```py 
import praw 
from dotenv import load_dotenv 
import os 
from flask import Flask, render_template, request 
``` 
The first library is called `praw`. This just stands for Python Reddit API Wrapper. It is a library uses the Python API and provides it in a nice to write and read fashion. An API in this case is a way of communicating changes using code to another piece of code. Almost everything you use performs actions using an API in some way or another.

The second library is called `dotenv` and we only need one function from it, that is why we only import the `load_dotenv` part since we don't need the other parts of the library. This will read your secret information that we will put in a file in order to use in the program. We want to use this method since it means that we can read these secrets with the least amount of code.

The third library is the general `os` library which just provides basic actions that are not included with default Python.

Next to your main.py file on the right hand side, click the `Add File` button and call it `.env`. This is where we will store the API keys. 

![](https://cloud-ir8jy2y3r.vercel.app/0image.png)

We will not use the `.env` file just yet, instead go back to your main file and add the following lines to setup an instance of Flask.

```py
load_dotenv() 
app = Flask(__name__) 

app.run(host='0.0.0.0' , port = 9060) 
``` 
The first one line `load_dotenv()` just finds and loads the your .env file and the second part line says that this python file is the main file to run flask in. The third line is just doing a simple if check that will then run flask on localhost with the port being 9060. Localhost is just a term that is meant to refer to your local computing hosting the file, not from a website. Although in this case, repl.it is hosting the file and we are accessing their localhost.

# Step 2: Getting Reddit API Key 

Getting your api key is very simple, go to the [Reddit Apps page](https://www.reddit.com/prefs/apps/) and click on `create another app...` at the bottom. 

![The create another app button at the bottom](https://cloud-i2087nmyc.vercel.app/image.png ) 

You should have a little section with `name`, `type`, `description`, `about url`, `redirect uri`. We only need the `name`, `type`, and `redirect uri`. For the name fill it with any name you want. For the type choose `script` and for the redirect uri, this doesn't matter, so just put `http://www.example.com/unused/redirect/uri`. 

![The finished application creation](https://cloud-f67e393ze.vercel.app/image.png)

In the Apps page on Reddit that you were on before, copy the API secret (image showing where to copy it from, with your secret blocked out). Then, head back over to your repl. In the `.env` file, create a variable called SECRET, like so:

```
SECRET=YOUR_API_SECRET
```

Replacing `YOUR_API_SECRET` with the key you copied. Repeat the same step for the ID. The ID is the code which for me starts with MFX... yours will be different and will always be under the label, `personal use script`. Think of the ID and Secret as a username and password for this application. Remember to NEVER SHARE THE ID OR PASSWORD.

Your .env file should look like mine but replace the values after the `=` with the values from your account:
```
SECRET=0Bk...
ID=MFX...
```

![](https://cloud-119djxpws.vercel.app/image.png) 

We have the authentication setup which is easier done than said. Now one last step. 

We need to make a reddit variable that connects to the reddit api. Then we need to connect it to the API.

```py
reddit = praw.Reddit(client_id=os.getenv("ID"),
                     client_secret=os.getenv("SECRET"),
                     user_agent="Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0")
print(reddit.read_only)
```

![What the connection to Reddit should look like](https://cloud-ggp6iugz2.vercel.app/image.png) 

To test it out, run `print(reddit.read_only)`, if it returns true then you are golden. 

# Step 3: Setting up Flask Pages 

Make a folder called `templates` and inside of `templates` add an `index.html` file.  

![Your folder structure for the rest of this workshop](https://cloud-qvylewnf8.vercel.app/image.png)  

Setup this index.html like any other html file with a header and a body.  

We want to load this index.html into our view. Open the `index.html` file in your editor and add:

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Reddit Reader</title>
</head>

<body>
<h1>Hello World</h1>
</body>
```

Most of the HTML should be included. Then you want to return to your `main.py` file and at the end add the following:

```py
@app.route('/')
def front_page():
	return render_template('index.html')
```

![The front_page method](https://cloud-6x6i6q8oh.vercel.app/image.png). 

Now press run and you should see a Hello World. 

# Step 4: Making the index.html page 

Go back to your `index.html` file, remove your `h1` line and add the following inbetween your body lines:

```html
<form method="POST">
		<h3>Go to subreddit: </h3>
		<input name="subreddit">
    <input type="submit">
</form>
	
{% block content %}
	<h1>{% block title %} Welcome to Reddit {% endblock %}</h1>
	{% for submission in submissions %}
	<a href={{ "https://reddit.com" + submission['permalink'] }}>
		<h2>{{ submission['title'] }}</h2>
	</a>
	<img src={{ submission['url'] }}>
    {% endfor %}
{% endblock %}
```
This handles the user input and also the display of posts. The form section is where the user input is handled with the POST method meaning that the tet the user provides in the `subreddit` text box will be a value on the python side and we can get information from that. 

POST is a type of web request in which there are many. The main ones you will see in development are POST and GET requests. A POST request is when one side of the program or application wants to send data to another program or application. We use POST requests in this form because we want to give data to Reddit about which subreddit we want to look at. 

The block content part is where we display the posts. The weird ooking bracket syntax is called a `JINJA` template and is used to indicate special backend related functions. The `block content` is a special type in which all the information within it should be shown in a block by block structure. The `h1` is reciving data from the Python side and will show what the python code tells it instead of the `JINJA` syntax. We then use some logic by having a for loop. Then we just display the posts using the information that the backend (Python) provided us.

Go back to the main.py file and add the following code above the `app.run` and under the previous code:

```py
@app.route('/', methods=['POST'])
def front_page_post():
	subreddit = request.form['subreddit']
	return render_template('index.html', submissions=reddit.subreddit(subreddit.upper()).hot(limit=100))
```

This will replace all the variables in the `JINJA` areas with the values we obtained from the API.


# Step 5: Adding some styling 

This step is up to you to do, but I will be centering the site and making the images fit on the page. 

After your body tag add a `<style>` tag. Now make a body selector by adding
```css
body {
    // CSS Code
}
```

To center the site, I found that this setup worked best (add to the inside of body): 
```css
align-content: center; 
text-align: center;
```
And to make the images fit, make an img selector and make the width and height 50% like so:

```css
img {
    width: 50%;
    height: 50%;
}
```

Now you have made the reddit reader! Customize it to your will and maybe you can make a whole reddit website. 
# Final Details and Extra Comments
 The main.py file
 ![](https://cloud-mephnkqgy.vercel.app/image.png)
 
 ```py
import praw
from dotenv import load_dotenv
import os
from flask import Flask, render_template, request
load_dotenv()
app = Flask(__name__)
reddit = praw.Reddit(client_id=os.getenv("ID"),
                     client_secret=os.getenv("SECRET"),
                     user_agent="Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0")
print(reddit.read_only)

@app.route('/')
def front_page():
	return render_template('index.html')

@app.route('/', methods=['POST'])
def front_page_post():
	subreddit = request.form['subreddit']
	return render_template('index.html', submissions=reddit.subreddit(subreddit.upper()).hot(limit=100))

app.run(host='0.0.0.0' , port = 9060)
```
 
 The final HTML
 ![](https://cloud-fqz8oxjxr.vercel.app/image.png)
 ```html
 <!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Reddit Reader</title>
</head>

<body>
<form method="POST">
		<h3>Go to subreddit: </h3>
		<input name="subreddit">
    <input type="submit">
</form>
	
{% block content %}
	<h1>{% block title %} Welcome to Reddit {% endblock %}</h1>
	{% for submission in submissions %}
	<a href={{ "https://reddit.com" + submission['permalink'] }}>
		<h2>{{ submission['title'] }}</h2>
	</a>
	<img src={{ submission['url'] }}>
    {% endfor %}
{% endblock %}
</body>
<style>
	body {
		align-content: center;
		text-align: center;
		
	}
	img {
		max-width: 50%;
		max-height: 50%;
	}
</style>
</html>
```
 
 I would highely recommend reading more of the [PRAW library documentation](https://praw.readthedocs.io/en/latest/). Also Flask is a very powerful resource and learning how to do some backend. Google is full of tutorials on how to use Flask and there are many projects that are easier done in Flask.
 
 Three hackable examples:
 [Setting a default subreddit](https://repl.it/@KaiSakurai/Custom-Reddit-Viewer-1)
 [Showing more post information](https://repl.it/@KaiSakurai/Custom-Reddit-Viewer-2)
 [Making upvote buttons](https://repl.it/@KaiSakurai/Custom-Reddit-Viewer-3555)
 Thanks for reading!
 --Kai
