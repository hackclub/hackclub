---
name: 'Expense Tracker'
description: 'A command line based expense tracker using Python'
author: '@iamsid47'
img: https://cloud-4tlcr594m.vercel.app/0expen_e_tracker.png
---

## Expense Tracker Using Python

*Hi everyone! In this workshop, we will walkthrough how to build ***an expense tracker!**** 

The completed project can be found by clicking [here](https://repl.it/@iamsid47/expense-tracker-main).

## End result

![End result](https://cloud-nrw7488qg.vercel.app/0screenshot_2020-12-29_215630.png)

## Let's Get Started

So, the first thing we need to do is head over to [Repl.it](https://repl.it) and create a *repl*. Choose the **Python** as the language and name your project. I'm going to name mine as **expense-tracker**.

![Project Creation](https://cloud-giasrdstj.vercel.app/4expense-tracker.png)

We will use Repl.it's package managers to get our libraries. For this, head over to the *Packages* and search **matplotlib**. Next, click on the add button to add that package to your repl. Do the same for the **datetime** package. We are also required to have **json** library but it's pre-installed so need to get it again.

Now, our data is gonna be stored in `.json` format. Thus, let's create a file named: `expenses.json`. In this file, type in a the list named as **Expenses**. This list will keep on updating as we will be adding entries using our *expense-tracker*. Let's open `main.py` and type some code.

We need to first **import** all the libraries. Thus:

```python
import json
from datetime import datetime
import matplotlib.pyplot as plt
```

Next, we'll define a function named `write_json` and call the `expenses.json` file.

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
choice = input("To input a purchase, press Y, To view all Expenses, Press V, else press E to exit: ").upper()
```
Now here, we add some `if` statements aka conditionals. So, when the user presses **V** we show him the expenses by calling the `expenses.json` file and showing it's content. We also want to generate a graph of our total expenditure, and that's the reason to install the **matplotlib** library. 

```python
if choice == "V":
with open("expenses.json") as f:
for i in temp:
for key,value in i.items():
if (key == "Your Purchase"):
prod.append(value)
if (key == "Price"):
exp = exp + value
p.append(value)
plt.pie(p, labels=p, wedgeprops={'edgecolor': 'black'})
plt.title("Total Expenditure in Rs.")
plt.legend(title="Your Expenses",labels=prod, loc='upper center', bbox_to_anchor=(0.5, 0.05),fancybox=True, shadow=True, ncol=5)
plt.show()
```

To get the total for out expenditure, we create a conditional and make it as *choice* **T**. Inside this, we call the json data which will be store and load it onto a variable named *data*. We again create a varialble named **temp** and call just the **Expenses** from the **data** variable which currently contains all the data from the json file. Next, we create a formula to calculate the total expenses.

```python
if choice == "T":
Expenditure = 0
with open("expenses.json") as f:
data = json.load(f)
temp = data["Expenses"]
for i in data["Expenses"]:
for key,value in i.items():
if (key == "Price"):
Expenditure = Expenditure + value
print("Your Total Expenditure is ",Expenditure)
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
with open("expenses.json") as f:
data = json.load(f)
temp = data["Expenses"]
temp.append(dic)
write_json(data)
choice = input("To input another purchase, press Y, To view all Expenses, Press V, To check total Expenditure, press T, else press E to exit: ").upper()
```

Here again, we use `upper` to get the input in uppercase. Now, if the user chooses exit (that is, press E) our program will most probably crash as we haven't made a condition for that. Thus, let's make one!

```python
if choice == "E":
print("Bye, See you again")
break
```
Next, here we again add in the **choice: V** so that the user can again see the expenses (especially the newly added expenses).

```python
if choice == "V":
with open("expenses.json") as f:
exp = 0
p = []
prod = []
data = json.load(f)
temp = data["Expenses"]
for i in temp:
for key,value in i.items():
if (key == "Your Purchase"):
prod.append(value)
if (key == "Price"):
exp = exp + value
p.append(value)
plt.pie(p, labels=p, wedgeprops={'edgecolor': 'black'})
plt.title("Total Expenditure in Rs.")
plt.legend(title="Your Expenses",labels=prod, loc='upper center', bbox_to_anchor=(0.5, 0.05),fancybox=True, shadow=True, ncol=5)
plt.show()
break
```

Now, if the user presses **E**, the data he entered get's stored into the `.json` file and we print a message as a sort of exit message: **Bye, See you again**. This will then break the while loop and the program exits.

Next, we also need to create a condition for if the user chooses to view his total expenses again.

```python
if choice == "T":
with open("expenses.json") as f:
data = json.load(f)
temp = data["Expenses"]
for i in data["Expenses"]:
for key,value in i.items():
if (key == "Price"):
Expenditure = Expenditure + value
print("Your Total Expenditure is ",Expenditure)
```

Here, we if the user presses **T**, we again retrieve the the data from `expenses.json`; and again show it to the user.

## Voila!

![You Did It](https://media.giphy.com/media/3otPoS81loriI9sO8o/giphy.gif)

You did it! An expense tracker of your own!

## Hack It ;)

Further improvements for this project are just endless. You can add in more inputs like a custom category (for example: *food, clothing, etc*). Also, you can add in a function to display the total amount of all the purchases.

As a topping, you can add in more fields like *interest on purchase, cashbacks, rebates, donations, etc.*

You can even make it so awesome that you create an API for this, merge it with a chrome extension which tracks all your purchases and host this script on a server. So, whenever you make a purchase, the whole thing get's sent over to the expense-tracker and it puts all of the data into a .json file!

## Demos

In this [version](https://repl.it/@iamsid47/exp-track-demo1), you can see the total amount that you have spent.

I made a GUI for my [expense tracker](https://repl.it/@iamsid47/exp-track-demo2) along with login/logout in this demo.

This [one](https://repl.it/@iamsid47/exp-track-demo3#main.py) is a more simpler version of the GUI I have made above.
