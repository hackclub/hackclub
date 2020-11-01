---
name: Reading the Internet
description: Use python to read html and extract any information you can find!
author: '@RafaelCenzano'
img:
---

# Reading the Internet
We all read content on websites, wouldn't it be cool if we could automatically read certain data from websites whenever you wanted? If this interested you, this workshop is for you. I will be showing you how to use webscraping in Python and some special libraries: [Beautiful Soup 4](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) and [Requests](https://requests.readthedocs.io/en/master/). 
**To Note:** not all webpages can be read using this technique, if data is loaded in using ajax or after the inital page request this method will not work.

## Prerequisites
You should have a basic understanding of python or how to use variables and objects.

## Lets do some setup
We will be using [repl.it](https://repl.it) an online code editor. This allows you to write and use this code from any computer!

We will start by creating a Python 3 repl (You can easily create one by clicking this link https://repl.it/languages/python3).

We now need to install a couple of external libraries. Follow the images below to find where to add the packages.
![Repl.it packages menu](https://cloud-jgwgkcwpu.vercel.app/0package-menu.png)

Once in this menu you will need to install `beautifulsoup4`, `requests`, `lxml`. 
![Workshop package list: beautifulsoup4, requests, and lxml](https://cloud-jgwgkcwpu.vercel.app/1installed-packages.png)

#### A short description on the packages
lxml is a C package used by beautiful soup that parses the html, beautiful soup is for working with the parsed html, and last requests is for requesting the webpage/html.

## Lets start coding!

We are going to start by importing the packages we just installed into `main.py`.
```python
# Imports
from bs4 import BeautifulSoup as bs
import requests
```
After importing our packages we can now start webscraping! We will begin with requesting our webpage and extracting the html from the request object.
```python
url = 'https://ncov2019.live/data'
# request the website
r = requests.get(url)
# get the html from the request
page = r.text
```
Next we will create the beautiful soup object and use `lxml` to parse the html (its faster then the builtin parser)
```python
# create a beautiful soup object and use lxml to proccess the html
soup = bs(page, 'lxml')
```
Now that we have our beautiful soup object we can go through any of the html! For this example I will show 2 ways to find covid19 data for the United States. The second method can be used to find any countries that you want.

## Method 1
