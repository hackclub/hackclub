---
name: 'WhatsAuto'
description: 'Automate sending Whatsapp messages using Python'
author: '@the-injineer'
---
How easy it would have been if sending important daily messages automatically and in a scheduled manner was possible. Let's make that MAGIC happen.
WhatsAuto is a program that uses pywhatkit which is a Python library for automating WhatsApp to send messages 💬 like daily quotes, news, market news, etc. 

![Automation_Banner](https://cloud-lgkvx9qpj.vercel.app/0banner.png)

In this workshop, you’re going to create a Python program to automate sending Whatsapp messages, in less than 10 lines of code.

## 😇 Prerequisites

You should have a beginner understanding of Python & JSON.

If you don't have an idea about this, then don't worry this workshop will give you the bare essentials to get started.

## 🚀 Getting started

We’re going to be using [pywhatkit](https://pypi.org/project/pywhatkit/), a Python library for automation to make this project. This project also requires a Web Browser most preferably Chrome, to access Whatsapp web webpage.

Install the Pywhatkit library using the `pip` function in python.
What is pip?-[pip](https://docs.python.org/3/installing/index.html) is a de facto standard package-management system used to install and manage software packages written in Python.

```py
pip install pywhatkit
```
NOTE: This step needs to be done only once.

## 💻 Setting up the Pywhatkit Module.

Awesome! Now that we’ve installed pywhatkit, we’re ready to [import](https://docs.python.org/3/reference/import.html
) the library to set up the environment, but before that let's create a Directory for the project; Example: WhatsAuto.

Inside the Project directory create the file for the python program, then `import` the module.

```py
import pywhatkit
```

Great! Now that we’ve imported pywhatkit, we are all good with the automation part.

Just put the receiver's phone number followed by the message 💬 & finally the time to send the message 💬.

```py
pywhatkit.sendwhatmsg("+919*********","Hello World",15,00)

```
NOTE: pywhatkit doesnt accept Time with preciding zeroes.

## 🌐 Fetching Data

![Data_Banner](https://cloud-4ta4p4q1u.vercel.app/0banner1.png)

A Large amount of data of many services like Weather, Traffic & a lot more can be accessed with their APIs. We will be using here APIs( application programming interface) which throws out data in [JSON](https://www.json.org/json-en.html) form. But before that what exactly is a API, it is a set of functions that allows applications to access data and interact with external software components, operating systems, or microservices.

To obtain data from an API we need to import the JSON & [requests](https://requests.readthedocs.io/en/master/api/) module.

```py
import json
import requests

```
Using the `GET` function we will request for the data from the API & will store it in a variable.

```py
quotedata = requests.get("http://quotes.stormconsultancy.co.uk/random.json")

```
JSON data obtained from the API has multiple data stored in a key-value pair.

Try pasting the code below in your [repl.it](https://repl.it) project or IDE and your console should show some weird numbers 😛.
Those are HTTP status codes for request made to the API. HTTP status codes in the 2xx range are successful request returns. Failed requests return status codes in the 4xx and 5xx ranges. Know more about different Error status codes - [Link](https://cloud.google.com/storage/docs/json_api/v1/status-codes#errorformat)

```py
print(quotedata)
```

JSON Data Example:

```json
{"author":"Mark Gibbs","id":36,"quote":"No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/36"}
```
TIP: You can view the Entire JSON data by running the code below which stores JSON data as a whole & prints that variable.

```py
quote = quotedata.json()
print(quote)
```

Now we need to extract the specific data from the JSON data obtained & store it in a variable.

```py
quote = quotedata.json()['quote']
```
If you want to see the output of the specific data extracted the use the `print(quote)` command.

Pretty straight forward, right? 😄

## 🛠️ Putting it all together

To make our program, all we need to do is get the data from the API using `requests.get` function then send a message 💬 using the `pywhatkit` module.

```py
import requests
import json
import pywhatkit as kit
quotedata = requests.get("http://quotes.stormconsultancy.co.uk/random.json")
quote = quotedata.json()['quote']
phone = input("Enter a Mobile Number with country code in your Contacts to send a quote:")
print("Enter the Time to send message, at least 5 mins from the current time")
hour = int(input("Enter hour in 24hrs Format without preciding zeroes:"))
minutes = int(input("Enter minutes without preciding zeroes:"))
kit.sendwhatmsg(phone, quote ,hour, minutes)
```

The Data retrieved from the API is stored in Variables & then the `pywhatkit` module utilizes this data to send the messages 💬. 
Message 💬 can be sent through `pywhatkit` using `pywhatkit.sendwhatmsg("+919*********","Hello World",15,00)` command. But the module requires the end-user to manually code & enter the input data required for sending messages 💬, To avoid this we can store the data in a variable (phone, hour, & time) & ask from the end user making it easy to use the program. The necessary instructions for the user are given by printing the sentences using `print` function.

![Repl.it_Banner](https://cloud-pq473cilo.vercel.app/0banner3.png)

Try this code on [Repl.it](https://repl.it) or any IDE. Once the inputs are given the program will automatically open up the Whatsapp web page, if not logged in make sure to log in using the QR code for seamless working of the program.

![Whatsapp_Banner](https://cloud-kqbphlx7s.vercel.app/0banner4.png)

NOTE: Message after entered in the chatbox of Whatsapp, takes 20 seconds more to be sent.

## ⚡ What's next?

Now that you know how to build & automate sending WhatsApp messages 💬, try sending messages 💬 to your friends and family, and also use different JSON APIs to send different information through Whatsapp. This Program can be developed in various ways & integrated with other services to make life easy. 

![Brainstorm Banner](https://cloud-pdzrxhu87.vercel.app/0brainstorm.gif)

Here are some examples of projects that stem from this project but take it even further:

* Jokes: [Demo Code](https://repl.it/@injineer/WhatsAuto-Jokes)
* Trivia: [Demo Code](https://repl.it/@injineer/WhatsAuto-Trivia)
* Maths Fact: [Demo Code](https://repl.it/@injineer/WhatsAuto-Maths)

Here are some you can get your hands dirty with 👇

- [COVID API](https://covid19api.com/) (Share Daily COVID Case reports)
- [News API](https://newsapi.org/) (Share Latest & Trending News as Messages)
- [Weather API](https://openweathermap.org/api) (Share Up to date weather reports)
- [Stock Market API](https://finnhub.io/) (Up to date Stock & Crypto Market Data)
- [Football API](https://www.api-football.com/) (Live Scores or Highlights of all Football Matches)

Wanna Brainstorm more! Code for this program & different implementations is on my [GitHub](https://github.com/the-injineer/WhatsAuto), feel free to fork, send amazing PRs to it ✨
