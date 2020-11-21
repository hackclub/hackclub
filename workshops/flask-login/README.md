# Logging in With Flask

Open a website, say [Github](https://github.com). Okay, now sign in. What just happened? What did the code do? How does "Logging In" work? Let's try building it ourselves.

We'll have to:
*  Create a Flask webserver
*  Make app routes that write to and read from a JSON file
*  Test our webserver with Insomnia.

This workshop assumes a very basic knowledge of Python and HTTP Requests. 

## What does Flask do?

The [Flask](https://pypi.org/project/flask/) library in Python is what we'll use to create a server for us to write (POST) and read (GET) data from. We'll test our Flask webserver with [Insomnia](https://insomnia.rest/), a desktop program or Chrome extension that allows us to test APIs by sending GET or POST requests. (If you don't know what GET or POST requests are, I've linked some helpful sources at the bottom). Flask works with routes, which allow us to define what the code does when a certain request is recieved. We'll be defining routes to write to and read from the JSON file we'll be creating.

## Downloading Insomnia

Insomnia is useful because it is available for so many platforms. All you need is a Chrome browser. You can get it at the [Chrome Web Store](https://chrome.google.com/webstore/detail/insomnia-rest-client/gmodihnfibbjdecbanmpmbmeffnmloel?hl=en-US). You should see a screen like this:
![Insomnia Web Store](https://cloud-a7eisnzme.vercel.app/0image.png)

Press the "Add to Chrome" button, and then press "Add App."
![Add to Chrome](https://cloud-6j7h3tfkw.vercel.app/0image.png)

We'll work more with Insomnia after testing out our code.

## Getting Started 

We'll be using [Repl.it](https://repl.it) to work on this, because it makes it very easy for us to run our webserver and code in Python. Let's set up our accounts.

Go to [repl.it](https://repl.it). You should see something like this:
![repl.it](https://cloud-i5iknsq3z.vercel.app/0image.png)

Either press "Log In" or "Sign Up," depending on whether or not you already have an account. 
Once you're done, you should see the "Home" page.
Press either the plus icon in the top right or the "New Repl" button in the top left. You should see this screen: 

![repl create](https://cloud-f0le2m5gi.vercel.app/0image.png)
Set the language to Python and the name to anything you want.

## Starting the Code

Let's start with importing the libraries we'll be using. 
```python
from flask import Flask, request
import json
```

This just imports the `Flask` and `request` modules from the `flask` library, because they're the only ones we need from that library. We also need `json` because that's what we'll be using for storing our data.
In order to create a webserver with flask we'll need to define a Flask app. We do this with the following line:
```python
app = Flask("MyApp")
```
The parameter passed into `Flask()` can be any string, and it's the name of your app. You can set it to any valid string you want as it doesn't really make a difference in the project.
We've now defined our app, but we want to run it. Let's add a line at the bottom of our code to run this. 
```python
app.run(host='0.0.0.0')
```
This runs our newly created app on port 8080, which is the port repl.it allows for webrequests without specifying a port. (If you wanted to use another port, you would have to manually specify it in the URL.)

## Adding Routes
Right now, our app is kind of useless. If you run it, it should start a new webserver, but it won't do anything. Let's start by creating our first route.

```python
@app.route("/", methods=['GET'])
def helloworld():
	return("Hello World!")
```
The first line adds a [decorator](https://pythonbasics.org/decorators/) that tells Flask to treat the function as a route. A route is essentially an path that we can send a request to. Flask handles routes by creating functions, the return values of which Flask displays to the user. This function creates a return value of "Hello World!"
Repl.it should automatically open a panel to allow you to view your Flask app. It should also have a URL to the app. 
![Link](https://cloud-94isv6yfc.vercel.app/0image.png)
Open the URL in a new tab and you should see "Hello World!" displayed. Congratulations, you've successfully finished creating your first route!

Now let's start on the routes we want to define for our webserver to handle logging in.

## Registration Route

We want our new route to be `/register`. This means that in order to register, we'll send a request to `yourURL/register` (of course, yourURL will be the URL given to you by repl.it).

The way you specify the route is as simple as specifying the route in the decorator. It should look something like this:
```python
@app.route("/register", methods=['POST'])
```
The `POST` method tells Flask that we want to send a POST request here to write data instead of a GET request to receive data. 

Now let's write the code that will run when we send this request. We'll need to create the file to write to. We can do this within repl.it.
![Add File](https://cloud-j1ica8j2r.vercel.app/0image.png)

Name this file "registered.json"
Let's define our function now. Here's the code:
```python
def register():
	username = request.args.get("username")
	password = request.args.get("password")
	data = request.args.get('data')
	with open('registered.json', 'a+') as db:
		db.seek(0)
		check = (f"\"username\": \"{username}\"")
		contents = db.read()
		if not(check in contents):
			db.write(json.dumps({'username': username, 'password': password, 'data':data})+'\n')
			return("Success")
		else:
			return("User already registered.")
```

What does this code do? Let's break it down part by part.

```python
	username = request.args.get("username")
	password = request.args.get("password")
	data = request.args.get('data')
```
`request.args.get(ARGUMENT)` is a method from the `request` module in Flask that allows you to get arguments from a webrequest. We're saving the value for the argument `"username"` in the variable `username`. This also applies for `"password"` and `"data"`. Arguments for this route will look something like this:
```
yourURL/register?username=USERNAME&password=PASSWORD&data=DATA
```
As you can see, the `?` character specifies that arguments will follow. We separate the arguments using `&`.

Now let's take a look at the rest of the route.  
```python
with open('registered.json', 'a+') as db:
		db.seek(0)
		check = (f"\"username\": \"{username}\"")
		contents = db.read()
		if not(check in contents):
			db.write(json.dumps({'username': username, 'password': password, 'data':data})+'\n')
			return("Success")
		else:
			return("User already registered.")
```

In this block, we are using a context manager to open `registered.json` with `a+` to allow us to read and write to the file but only to write to the end of the file.

The line `db.seek(0)` tells us to position the cursor at the beginning of the file. 
We define a variable `check` that is set to a formatted string containing the username. For example, if the username was "user1" the string would be `"username" = "user1"`. 
We are also setting `contents` to be the contents of our file.

The `if` statement here determines if the file's contents, `contents`, has the username string, `check`. If it does not, the following lines of code are executed:
```python
db.write(json.dumps({'username': username, 'password': password, 'data':data})+'\n')
return("Success")
```
The `json.dumps` method converts a Python dictionary into a JSON string. We can pass the arguments we took from the request into this dictionary. We add a `\n` to the end of the string to ensure that the next entry starts on the next line. We write this line to the file with `db.write()` and return `"Success"` as the return value. 
If `check` is in `contents`, this code will not run. Instead, the route will not append anything to the file, and will just return `"User already registered"`.

## Login Route

We've finished registration, but there's little point to that if the users cannot login. Let's create a GET request for logging in.
Let's start by creating the route. 
```python
@app.route("/login", methods=['GET'])
```
This route will be `/login` and we want to use a GET request, which tells the server that we just want to read data, not add it.

The code in this route is more simple than the code for the other route. 
```python
def login():
	username = request.args.get("username")
	password = request.args.get("password")
	with open('registered.json', 'r') as db:
		jsonList = []
		for x in db.readlines():
			jsonList.append(json.loads(str(x)))
		for i in jsonList:
			if (i["username"] == username) and (i["password"] == password):
				return(i["data"])
		return("User not found")
```

Once again, we are taking in arguments with `request.args.get` and saving them in variables. However, since we are trying to log in and GET the value of `data` we aren't passing that in. 
We once again use a context manager to open `registered.json` but this time we use `r` because we only want to read. 
We define an empty list called `jsonList` that we will populate soon. 
```python
for x in db.readlines():
	jsonList.append(json.loads(str(x)))
```
This loop populates the list with Python dictionaries loaded from the JSON strings on each line with `json.loads()`

```python
for i in jsonList:
	if (i["username"] == username) and (i["password"] == password):
		return(i["data"])
return("User not found")
```

This `for` loop goes through `jsonList` for each value `i` in the list. If `username` and `password` match the values in the dictionary, the method returns `i[data]` or the data value associated with that username and password. We have an `return` statement at the end that runs if the function does not exit. (This works because return statements stop the function from running any further).

## Testing the Code

Finally, we'll be using Insomnia to test if our code works. 
Let's launch the app (you can do this by going to `chrome://apps` in the URL bar of Chrome).
You should see something like this:
![Insomnia](https://cloud-m4ukm1v5f.vercel.app/0image.png)

Click "Create a Request" and enter any request name, it doesn't really matter.

You should see this:
![Request](https://cloud-ottonqsbw.vercel.app/0image.png)

In the dropdown menu labeled "GET" by default, click it and set to POST. Insomnia will send a post request now.

Next to that, there's a text field. Since we're testing our POST route, or our `/register` route, we want to set that to `yourURL/register?username=USERNAME&password=PASSWORD&data=DATA`. Replace `yourURL` with the URL you got from repl.it, and replace `USERNAME`, `PASSWORD`, and `DATA` to be any values you want.
For example, I might put `https://FlaskTutorial.sohamb117.repl.co/register?username=soham&password=insecure&data=testing`. 
Press the purple "Send" button, and then check your `registered.json` file. If everything worked, you should see a new entry in the file. 

Now that we've tested the POST request, we should test the GET request. Set the dropdown back to GET and replace the url with this:
`yourURL/login?username=USERNAME&password=PASSWORD`

Again, replace the necessary fields and hit "Send". If all goes well, you should see the value for `data` returned back to you. For me, that's `testing`. 

If everything works, your webserver is complete! 


## Final Look at the Code

We've finished the code! It should look like this:

```python
from flask import Flask, request
import json

app = Flask("MyApp")

@app.route("/", methods=['GET'])
def helloworld():
	return("Hello World!")

@app.route("/register", methods=['POST'])
def register():
	username = request.args.get("username")
	password = request.args.get("password")
	data = request.args.get('data')
	with open('registered.json', 'a+') as db:
		db.seek(0)
		check = (f"\"username\": \"{username}\"")
		contents = db.read()
		if not(check in contents):
			db.write(json.dumps({'username': username, 'password': password, 'data':data})+'\n')
			return("Success")
		else:
			return("User already registered.")

@app.route("/login", methods=['GET'])
def login():
	username = request.args.get("username")
	password = request.args.get("password")
	with open('registered.json', 'r') as db:
		jsonList = []
		for x in db.readlines():
			jsonList.append(json.loads(str(x)))
		for i in jsonList:
			if (i["username"] == username) and (i["password"] == password):
				return(i["data"])
		return("User not found")

app.run(host='0.0.0.0')
```

To recap, this code
* Creates a Flask app
* Creates routes for the app
* Reads values from arguments
* Stores values in a JSON file
* Returns values as a response to a GET or POST request

What this does NOT have:
* Security
* Password requirements
* Encryption
* CAPTCHA or any anti-bot measures

Note: While you can modify this code to have these features, you should **NEVER** store passwords in plaintext like this webserver does. If you were to implement security features, this webserver would work for login.

## Hacks and Further Reading

Here are some things to check out or read. 
* [Get and Post Requests](https://www.w3schools.com/tags/ref_httpmethods.asp)
* [Flask Documentation](https://flask.palletsprojects.com/en/1.1.x/)
* [How JSON Works](https://www.tutorialspoint.com/json/json_overview.htm)

Here are some hacks that show what you can do with this:
* [Make a frontend with HTML and serve it with Flask too](https://repl.it/@sohamb117/FlaskTutorial-1#main.py)
* [Ensure that passwords meet certain conditions](https://repl.it/@sohamb117/FlaskTutorial-2#main.py)
* [Take in more data, and store timestamps](https://repl.it/@sohamb117/FlaskTutorial-3#main.py)

