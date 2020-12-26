---
name: 'Compound Interest Calculator'
description: 'This is a compound interest calculator made using Python'
author: '@iamsid47'
img: https://github.com/iamsid47/hangman-pics/blob/main/cic%20-%20%20main.png
---

![Compound Interest Calculator](https://github.com/iamsid47/hangman-pics/blob/main/cic%20-%20%20main.png)

Hi Everyone! In this workshop, we are gonna build a **Compound Interest Calculator!**

This will be a command line calculator which will ask for inputs, do the math for us and then give us the calculated output.

You can out this project on Repl.it by clicking [THIS](https://repl.it/@iamsid47/compound-interest-calculator#main.py) link.

# Files & Libraries Required

There is gonna be just one file named as `main.py` and nothing else. Also, no libraries are required to run this program!

## Let's Get Started!

![Create a repl](https://github.com/iamsid47/hangman-pics/blob/main/cic%20-%20repl.png)

So, let's head over to [Repl.it](https://repl.it) and create a new *repl*. Choose Python as the language and the the name of your project.

First, we will be printing up some stuff and then we'll slowly move towards the logic. Now, when we calculate compound interest, there are some specific terms which need to know and understand. This can include things like *monthly investment, interest on investment, principal, etc.* Thus, be sure to understand these terms first and later move over to the project.

Next, let's first print something cool to start with so to enhance the user's experience.

```python
print("Howdy!")
print("This is Compy ;) A compound interest calculator.")
```
**Pro Tip**: You can also add in some other custom messages of your choice in the start of the program or in the middle of it.

Now, we will question the regarding how many years he will be saving for. Since this is an integer, we'll define it in our code.

```python
print("How many years will you be saving?")
years = int(input("Enter Years:  "))
```

Next, we ask the user for the money he is currently having in his account. Here, the answer can be in decimal places as well. Thus to capture this, we will use `float`.

```python
print("How much money is currently in your account?")
principal = float(input('Enter current amount in account:  '))
```

After this, we ask the user that how money is he planning to invest monthly.

```python
print("How much money do you plan in investing?")
monthly_invest = float(input('Enter amount:  '))
```
And lastly we will ask him the interest he will be getting on this investment. Now this is gonna be in percentage. But to make it a bit easy, we ask for a decimal input instead.

```python
print("What do you estimate will be your yearly interest of this investment?")
interest = float(input('Enter interest in decimal numbers: (10% = 0.1):  '))

#just a blank print
print(' ')
```
Next, let's get into the **logic** now!

So, we are actually asking for monthly investment. Thus we need to multiply it by 12 first to make it yearly. After this, we just define the `final_amount` equal to zero at the start of everythin.

```python
monthly_invest = monthly_invest * 12
final_amount = 0
```
Now, we define the range (which is gonna be number of years the user enters) and add in a conditional.

```python
for i in range(0, years):
    if final_amount == 0:
        final_amount = principal
```
Here, we also need to define the formula for calculating the value the user is seeking for. Thus;

```python
final_amount = (final_amount + monthly_invest) * (1 + interest)
```
And lastly, we just `print` this and output the calculated value to the user.

```python
print("This is how much money you would have in your account after {} year:  ".format(years) + str(final_amount))
```

## Voila! You did it!

![you did it](https://media.giphy.com/media/fHo4wMUPwVFzmQn4UU/giphy.gif)

You just built your own compound interest calculator! 

## Hack It ;)

Furthermore, you can add in some more deeper values to this calculator. For example, *taxation, exemption of taxes, donations, non-profit work, sources of investment, return on investment* and just a lot more. There are a lot of variations to this calculator as for each country the rules for taxation are different and so are for the interest calculation.

You can also host this calculator and make your own API for it. Later on, if you are on a project which requires a compound interest calculation, you can use this tool!

It is also possible to make app using this. The only tweak will be that instead of just a single country's calculator. You can make a single calculator for all the countries and define the changes automatically when the user selects a country!

## How it looks?

![how it works](https://github.com/iamsid47/hangman-pics/blob/main/cic%20-%20how%20it%20works.png)
