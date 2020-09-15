# Web Requests in Python - With a Stock Visualizer!

The [Requests](https://pypi.org/project/requests/) library in Python is an easy way to integrate your program with resources online. It provides a simple way to work with HTTP requests, which are a vital part of most large applications.


## What are HTTP Requests?

HTTP requests are a type of request a program can send to a server to get data back. There are many types of requests one can use, but the type we'll be covering here are GET requests, which send a request to the server or API with arguments in either the headers of the request or the URL and expect some response data back.


## Importing the Libraries

For this program, we'll be using two libraries, the [Requests](https://pypi.org/project/requests/) library to handle our HTTP requests and the [Json](https://docs.python.org/3/library/json.html) library to parse the values we get back from those requests into values that our code can understand.

Both these libraries are set up for us out of the box, so we won't need to install them. So boot into your IDE of choice, in my case [repl.it](https://repl.it) and add these lines to the program.

```python
import requests
import json
```

If you've ever worked with Python before, you know what these lines do. They allow your code to access these external libraries and work with them.


## Setting up the API

The first thing we need to do is to set up the API we'll be requesting from. You can use any API you want, but your code will be different. For this demonstration, we'll use the [Finnhub](https://finnhub.io/) stock API to get values.

This API requires an API key. This is a value that we pass to the API to prove that we are authenticated, or allowed to use the API. Luckily, Finnhub provides access to its API for free, so we'll need to go to their site and get one.

Once you're on the site, you'll see this screen:

![Screen](https://cloud-8ws90xn6j.vercel.app/image.png)

Click on "Get free API key" and create an account. You should see this:

![Key](https://cloud-ks0dqz7ba.vercel.app/image.png)

There should be a key (I've hidden mine for security purposes) but that's the key you'll need to use for authentication.

Now let's set up the key in Python. The Requests library allows you pass headers into the web request, which is how we'll authenticate.

```python
header = {'X-Finnhub-Token':'[TOKEN]'}
```
How does this code work?  The line creates a json variable that with an attribute 'X-Finnhub-Token' and a value of your token. This JSON file is saved as a variable, and later, we'll pass the variable into the request.


## Making our First Request

So let's see if it works. Try running this code.
```python
header = {'X-Finnhub-Token':'[TOKEN]'}
r = requests.get(f'https://finnhub.io/api/v1/quote?symbol=AAPL', headers = header)
```
Here we send our first request. Let's break down this line:
```python
r = requests.get(f'https://finnhub.io/api/v1/quote?symbol=AAPL', headers = header)
```
In this line, we are using requests.get to send a HTTP GET request to the API. We're passing an argument `symbol=AAPL` into the URL to tell the API what we want.  We'll be changing the value of the symbol argument later. The part `headers = header` tells the program to set the request headers to the header variable we set earlier, the variable that has our token. The value we get back from the request is saved in a variable r. 


## Working with the Response

Now that we've made the request, how do we handle it? The requests.get method returns a Response object. We can get the content of the request using `r.content`. So let's modify our code to look like this (including the imports):
```python
header = {'X-Finnhub-Token':'[TOKEN]'}
r = requests.get(f'https://finnhub.io/api/v1/quote?symbol=AAPL', headers = header)
print(r.content)
```
If you run this and all goes well, you should see an output like this:
```json
b'{"c":112,"h":115.23,"l":110.03,"o":114.57,"pc":113.49,"t":1600032334}'
```
This is a string of a JSON value that we'll need to parse in order to use.


## Parsing the JSON

While this value is useful, we can't do much with it in our code. In order to use it, we'll need to use `json.loads()` to parse this string into a JSON. Let's add this line to our code:
```python
rjson = json.loads(r.content)
```
This line uses `json.loads()` to parse the string value of json.content into a JSON file. Now, let's display this value to the user.


## Wrapping It Up

The value we want to display is the `c` value, or the current value of the stock. We can do that by printing `rjson['c']`. Let's add a line that does this to the bottom of our code:
```python
print("AAPL -", rjson['c'])
```
Run your code now. It should look something like this:
```python
import requests
import json

header = {'X-Finnhub-Token':'[TOKEN]'}
r = requests.get(f'https://finnhub.io/api/v1/quote?symbol=AAPL', headers = header)
rjson = json.loads(r.content)
print(rjson['c'])
```
It should print this:
```
AAPL - [VALUE (This will change)]
```


## Hacking and Further Reading

Now that we've figured out how to work with requests, how do we expand on this? There's a lot of potential ways to modify this to add functionality. In addition, the requests library is applicable to MANY other projects, so know that you know how it works, you can use it to get information from any API you want. Here are some ideas for mods you can make this project to add functionality:

Maybe write a program that will request these values for every stock symbol in a [file](https://repl.it/@sohamb117/demo1)?

Or let the user [input](https://repl.it/@sohamb117/demo2) the stock symbol?

Or write a program to [sort](https://repl.it/@sohamb117/demo3) the stocks by value?

Here are some things to read to learn more about what we did here:

* https://requests.readthedocs.io/en/master/
* https://www.tutorialspoint.com/http/http_requests.htm
* https://docs.python.org/3/library/json.html
* https://www.howtogeek.com/343877/what-is-an-api/


[See this in action](https://cloud-k8zl09ofw.vercel.app/zoom_1.mp4)
