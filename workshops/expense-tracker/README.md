---
name: 'Expense Tracker'
description: 'A command line based expense tracker using Python'
author: '@iamsid47'
img: https://github.com/iamsid47/hangman-pics/blob/main/Expen%24e%20Tracker.png
---

![Expense Tracker](https://github.com/iamsid47/hangman-pics/blob/main/Expen%24e%20Tracker.png)

## Expense Tracker Using Python

*Hi Everyone! In this workshop, we will walkthrough how to build the game: ***An Expense Tracker!**** 

This will be a simple command line game made using Python, that will allow user input and also put a visual of the current Hangman along the word that's being guessed at every turn!

The completed project can be found by clicking [Here](https://repl.it/@iamsid47/expense-tracker#main.py)

## Files

We are going to be having two main files. First, `main.py` and the second one is `expenses.json`. We will also be importing some libraries into our `main.py`. These libraries include **`datetime`** and **`pandas`**.

## Let's Get Started

So, the first thing we need to do is head over to [Repl.it](https://repl.it) and create a *repl*. Choose the language as **Python** and name your project. I'm gonna name mine as **expense-tracker**.

![Project Creation](https://github.com/iamsid47/hangman-pics/blob/main/expense-tracker.png)

Now we need to install the libraries. For this, go onto the **Shell** and type in:

```
pip install datetime && pip install pandas
```
This will download and install the required libraries. Now, our data is gonna be stored in `.json` format. Thus, let's create a file named: `expenses.json`. In this file, type in a the list named as **Expenses**. This list will keep on updating as we will be adding entries using our *expense-tracker*. Let's get back to `main.py` and type some code.

We need to first **import** all the libraries. Thus:

```python
import json
from datetime import datetime
import pandas
```

Next, we'll define a variable named `write_json` and call the `expenses.json` file.

```python
def write_json(data, filename='expenses.json'): 
    with open(filename,'w') as f: 
        json.dump(data, f, indent=4) 
```

Now when the user gives in some input, we need to capture it and store this into the `expenses.json` file which we just created. Also, there should be something displayed when we run our program. So let's print something as well!

```python
expdic = {"Expenses":[]}
dic = {}
print("Howdy! Exp-Track here ;)")
```

After this, we will start taking in the user's inputs. So first when the program runs, we will offer our user some choices. For example, to add in a new purchase or to view past purchase, or just to exit the program.
Let's add some `choice` then. And later on, some *conditionals* as well. Also, we are gonna accept capital input. Thus, we will add `upper` at the end get the inputs in uppercase.

```python
choice = input("Input Y to add a purchase, To view all Expenses, Press V, else press E to exit:  ").upper()
```
Now here, we add some `if` statements aka conditionals. So, when the user presses **V** we show him the expenses by calling the `expenses.json` file and showing it's content. 

```python
if choice == "V":
        with open("expenses.json") as f:
            data = json.load(f)
            temp = data["Expenses"]
            print(pandas.json_normalize(temp))
```
Next comes the main thing. We create a `while` loop for the user so that he can add multiple purchases and then exit whenever he wants. So first we create a loop and then if the user presses **"Y"**, we take 3 inputs.
    1. The purchase
    2. The price
    3. The time of purchase.

```python
while (choice == "Y"):
    purchase = str(input("Purchase Name:  "))
    price = int(input("Price:  "))
    time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
```

Here, we want the `Purchase` input to be a string and the `Price` input to be an integer. Thus, we define our inputs accordingly. It won't be awesome if we asked the user to input the date and time. Thus, we use our **`datetime`** library to capture the date.

Now we need to send these inputs to the `.json` file. Append in the expenses and again provide a choice to continue the loop. Thus:

```python
    dic["Your Purchase"] = purchase
    dic["Price"] = price
    dic["Time"] = time
    expdic["Expenses"].append(dic)
    choice = input("To input another purchase, press Y, To view all Expenses, Press V, else press E to exit: ").upper()
```

Here again, we use `upper` to get the input in uppercase. Now, if the user chooses exit (that is, press E) our program will most probably crash as we haven't made a condition for that. Thus, let's make one!

```python
if choice == "E":
        with open("expenses.json") as f:
            data = json.load(f)
            temp = data["Expenses"]
            temp.append(dic)
            write_json(data)
        print("Bye, See you again")
        break
```

Now, if the user presses **E**, the data he entered get's stored into the `.json` file and we print a message as a sort of exit message: **Bye, See you again**. This will then break the while loop and the program exits.

Next, we also need to create a condition for if the user chooses to view his expenses (that is if he presses V). So, let's create a condition for this as well.

```python
    if choice == "V":
        with open("expenses.json") as f:
            data = json.load(f)
            temp = data["Expenses"]
            temp.append(dic)
            write_json(data)
            print(pandas.json_normalize(temp))
        break
```

Here, we if the user presses **V**, we retrieve the the data from `expenses.json`; show it to the user whilst breaking the while loop and exiting the program.

## Voila!

![You Did It](https://media.giphy.com/media/3otPoS81loriI9sO8o/giphy.gif)

You did it! An expense tracker of your own!

## Hack It ;)

Further improvements for this project are just endless. You can add in more inputs like a custom category (for example: *food, clothing, etc*). Also, you can add in a function to display the total amount of all the purchases.

As a topping, you can add in more fields like *interest on purchase, cashbacks, rebates, donations, etc.*

You can even make it so awesome that you create an API for this, merge it with a chrome extension which tracks all your purchases and host this script on a server. So, whenever you make a purchase, the whole thing get's sent over to the expense-tracker and it puts all of the data into a .json file!

## How it works?

![How it starts](https://github.com/iamsid47/hangman-pics/blob/main/how%20it%20works.png)

![How it works](https://github.com/iamsid47/hangman-pics/blob/main/how%20it%20works%20-2.png)
