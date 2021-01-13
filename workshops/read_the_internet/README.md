---
name: 'Reading the Internet'
description: 'Use Python to read HTML and extract any information you can find!'
author: '@RafaelCenzano'
img: 'https://cloud-p5pdve0kf.vercel.app/2webscrape.jpg'
---

We can read all the content on websites, but wouldn't it be cool if we could automatically read specific data from websites whenever you wanted? If this interested you, this workshop is for you. I will be showing you how to use webscraping in Python.

*Note: not all webpages can be read using this technique. If data is loaded in using ajax or after the inital page request this method may not work.*

[Final Result and Code](https://repl.it/@SavageCoder77/Read-The-Internet#main.py)

## Prerequisites
You should have a basic understanding of **HTML** and **Python** and how to use variables and objects.

## Setup
![Lets do it gif](https://cloud-p23nck0rj.vercel.app/1lets-start.gif)

We will be using [repl.it](https://repl.it), an online code editor that allows you to write and run code from any computer!

Spin up a Python3 repl by [clicking here](https://repl.it/languages/python3).

Before we can start coding, we need to install a couple of external libraries. Follow the image below to find where to add the packages. Once in this menu you will need to install `beautifulsoup4`, `requests`, and `lxml`.

![Repl.it packages menu](https://cloud-p5pdve0kf.vercel.app/0ezgif.com-video-to-gif.gif)

#### What each package does
`lxml` is a C package used by beautiful soup that parses the HTML, `beautifulsoup4` is for working with the parsed HTML, and `requests` is for requesting the webpage/html.

<details>

<summary> Learn more about the packages: </summary>

- [BS4](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- [requests](https://requests.readthedocs.io/en/master/)
- [LXML](https://lxml.de) 

</details>

## Lets start coding!

![Start coding gif](https://cloud-5bmb4t5tp.vercel.app/1start-coding.gif)

Once you've installed the packages, open the `main.py` file in the sidebar on the left. Then, import the packages you just installed.

```python
from bs4 import BeautifulSoup as bs
import requests
```

Now we can start webscraping! We will begin by requesting our webpage and extracting the HTML from the request object.

```python
url = 'https://ncov2019.live/data'
# request the website
r = requests.get(url)
# get the HTML from the request
page = r.text
```

Next we will create the BeautifulSoup object and use `lxml` to parse the HTML.

```python
soup = bs(page, 'lxml')
```

Now that we have our BeautifulSoup object we can go all of the HTML! 

### Working with the parsed HTML

![HTML gif](https://cloud-5bmb4t5tp.vercel.app/2html.gif)

In the next step, we'll be working with data from an HTML table. So, before, we continue, a quick mini-lesson on HTML tables:

Here's an example of an HTML table:

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

A HTML table can be seen as a 2 dimensional array or list. The table contains rows (`tr` tags). Each row contains columns (`td` tags). Within the `td` tags is the data or text we can webscrape.

### Python time!

We're going to use BeautifulSoup to find an HTML table element. We want to find a specific table by ID `sortable_table_world` as seen in the picture. The code below finds the first table that matches that ID by using the `find` function and specifying the id as an attribute. The `attrs` is an optional argument and is a dictionary that can be set to any id, class, or HTML identifier.

![nCOVID table open with inspect element](https://cloud-p5pdve0kf.vercel.app/1inspect_element.png)

```python
# get world data table
table = soup.find('table', attrs={'id':'sortable_table_world'})
```
After this code runs we now have a new beautiful soup object called `table` that contains the table and child elements within that table.

With `table` we will use the `findAll` function to get all the `tr` tags from the table. `tableRows` is a Python list with a beautiful soup object for each `tr` tag found in the table.
```python
# get table rows
tableRows = table.findAll('tr')
```
Now that we have all the rows in a Python list, we can iterate through the list and try to find the United States or you can input any Country you want.

Before getting to the looping part though we will need to take a look at some of our outputs. This may happen to you when webscraping, the text has weird formatting. In these next steps I'm going to show the text from the website with the weird formatting and how we can use Python to remove that.

I will just use the second row and first column for this example
```python
tableCols = tableRows[1].findAll('td')
tableCol = tableCols[0]
tableCol.text
```
This returns `'\r\n          TOTAL\r\n        '` with weird spacing and newline and indents. With Python we can use the `strip` function on the string and we will end with this code `tableCol.text.strip()` and this text `'TOTAL'`. Now that we got that handled lets get to reading the data!

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

### Thats it! You can now get live COVID19 data but more importantly you are now primed with knowledge to webscrape anything!
![Sponge bob done gif](https://cloud-5bmb4t5tp.vercel.app/0completed.gif)
You can check out more advanced/in depth projects here. In this project you will be shown how to use selenium to webscrape that will allow you to webscrape pages like amazon or google that use ajax to load as you scroll (https://www.analyticsvidhya.com/blog/2020/08/web-scraping-selenium-with-python/). Check out this workshop by realpython that goes more in depth and links to other resources that can allow you to webscrape more complicated websites (https://realpython.com/beautiful-soup-web-scraper-python/).

**Check out some other webscraping projects**
[Webscape Github](https://repl.it/@SavageCoder77/Scrape-Github)
[Webscrape Currency Exchange Rates](https://repl.it/@SavageCoder77/USD-to-other-Currencies#main.py)
[Webscrape Hack Club Bank](https://repl.it/@SavageCoder77/Hack-Club-Bank-scraper#main.py)

## What now?

Go out there and create your own project! I'm sure you will blow us away
![Mind blown](https://cloud-p23nck0rj.vercel.app/0amazed.gif)
