---
name: 'Reading the Internet'
description: 'Use python to read html and extract any information you can find!'
author: '@RafaelCenzano'
img: 'https://cloud-p5pdve0kf.vercel.app/2webscrape.jpg'
---

# Reading the Internet
We can read all the content on websites, but wouldn't it be cool if we could automatically read specific data from websites whenever you wanted? If this interested you, this workshop is for you. I will be showing you how to use webscraping in Python.
**To Note:** not all webpages can be read using this technique, if data is loaded in using ajax or after the inital page request this method may not work.

[Final Code](https://repl.it/@SavageCoder77/Read-The-Internet#main.py)
[Live Result](https://Read-The-Internet.savagecoder77.repl.run)

## Prerequisites
You should have a basic understanding of **HTML** and **Python** or how to use variables and objects.

## Let's do some setup
![Lets start gif](https://cloud-p23nck0rj.vercel.app/1lets-start.gif)
We will be using [repl.it](https://repl.it) an online code editor. This allows you to write and use this code from any computer!

We will start by creating a Python 3 repl (You can easily create one by clicking this link https://repl.it/languages/python3).

We now need to install a couple of external libraries. Follow the image below to find where to add the packages. Once in this menu you will need to install `beautifulsoup4`, `requests`, and `lxml`. 
![Repl.it packages menu](https://cloud-p5pdve0kf.vercel.app/0ezgif.com-video-to-gif.gif)


#### A short description on the packages
`lxml` is a C package used by beautiful soup that parses the html, `beautifulsoup4` is for working with the parsed html, and last `requests` is for requesting the webpage/html.

## Lets start coding!
![Start coding gif](https://cloud-5bmb4t5tp.vercel.app/1start-coding.gif)
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
Next we will create the beautiful soup object and use `lxml` to parse the html (its faster then the built in parser)
```python
soup = bs(page, 'lxml')
```
Now that we have our beautiful soup object we can go all of the html! 

### Working with the parsed html
![HTML gif](https://cloud-5bmb4t5tp.vercel.app/2html.gif)
Before we begin with the python code I will give a short review of the html structure that we will be working with. We will be getting data from a html table. Below is html for how a table would look.
```html
<table>
    <tr>
        <td>Country</td>
        <td>Cases</td>
        <td>Column</td>
        <td>Column 2</td>
    </tr>
    <tr>
        <td>United States</td>
        <td>1,000,000</td>
        <td>Column data</td>
        <td>Column 2 data</td>
    </tr>
    <tr>
        <td>Canada</td>
        <td>100,000</td>
        <td>Column data</td>
        <td>Column 2 data</td>
    </tr>
</table>
```
A html table can be seen as a 2 dimensional array or list. The table contains rows which are the `tr` tags. Each row contains columns which are the `td` tags. Within the `td` tags is the data or text we can webscrape.

### Python time!
We begin by using beautiful soup to find a html table element. We want to find a specific table by id `sortable_table_world` as seen in the picture. The code below finds the first table that matches that id by using the `find` function and specifying the id as an attribute. The `attrs` is an optional argument and is a dictionary that can be set to any id, class, or html identifier.
![nCovid table open with inspect element](https://cloud-p5pdve0kf.vercel.app/1inspect_element.png)
```python
# get world data table
table = soup.find('table', attrs={'id':'sortable_table_world'})
```
After this code runs we now have a new beautiful soup object called `table` that contains the table and child elements within that table.

With `table` we will use the `findAll` function to get all the `tr` tags from the table. `tableRows` is a python list with a beautiful soup object for each `tr` tag found in the table.
```python
# get table rows
tableRows = table.findAll('tr')
```
Now that we have all the rows in a python list, we can iterate through the list and try to find the United States or you can input any Country you want.

Before getting to the looping part though we will need to take a look at some of our outputs. This may happen to you when webscraping, the text has weird formatting. In these next steps I'm going to show the text from the website with the weird formatting and how we can use python to remove that.

I will just use the second row and first column for this example
```python
tableCols = tableRows[1].findAll('td')
tableCol = tableCols[0]
tableCol.text
```
This returns `'\r\n          TOTAL\r\n        '` with weird spacing and newline and indents. With python we can use the `strip` function on the string and we will end with this code `tableCol.text.strip()` and this text `'TOTAL'`. Now that we got that handled lets get to reading the data!

First we have a have a for each loop to loop through every row in the table. You make notice the `[1:]`, this was added to make the loop just a little more effcient because the first row at index `[0]` is just the table header with no data. Next we use an if statment to check if the current row's country is the United States (This can be replaced by any country). **Do Note** that we use the `.find()` function because we are only checking the first column and `.text[2:]` because the website has a weird astricks we need to remove. Once we find the country of our choice, we use `findAll()` to get all the columns in the row and print out some data.
```python
for row in tableRows[1:]:
    if 'United States' == row.find('td').text[2:].strip():
        columns = row.findAll('td')
        print(columns[0].text[2:].strip())
        print(f'Confirmed Cases: {columns[1].text.strip()}')
        print(f'New Cases: {columns[3].text.strip()}')
        print(f'Critical Cases: {columns[5].text.strip()}')
```
The output at the time of writing this workshop is:
```
United States
Confirmed Cases: 9,566,690
New Cases: 28,845
Critical Cases: 88,127
```
Scary Numbers! Hopefully at the time of reading this workshop things won't be too much worse :(

Here is some example code for checking for multiple countries
```python
countries = ['United States', 'Spain', 'Canada']
for row in tableRows[1:]:
    if row.find('td').text[2:].strip() in countries:
        columns = row.findAll('td')
        print(columns[0].text[2:].strip())
        print(f'Confirmed Cases: {columns[1].text.strip()}')
        print(f'New Cases: {columns[3].text.strip()}')
        print(f'Critical Cases: {columns[5].text.strip()}\n')
```

### Thats it! You can now get live covid data but more importantly you are now primed with knowledge to webscrape anything!
![Sponge bob done gif](https://cloud-5bmb4t5tp.vercel.app/0completed.gif)


**Check out some other webscraping projects**
[Webscape Github](https://repl.it/@SavageCoder77/Scrape-Github)
[Webscrape Currency Exchange Rates](https://repl.it/@SavageCoder77/USD-to-other-Currencies#main.py)
[Webscrape Hack Club Bank](https://repl.it/@SavageCoder77/Hack-Club-Bank-scraper#main.py)

## What now?

Go out there and create your own project! I'm sure you will blow us away
![Mind blown](https://cloud-p23nck0rj.vercel.app/0amazed.gif)
