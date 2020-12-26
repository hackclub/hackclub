---
name: 'Human-Like Calculator Using Python'
description: 'A calculator where you type a statement and get the answer!'
author: '@iamsid47'
img: https://github.com/iamsid47/hangman-pics/blob/main/smart-calc.png
---

![Smart Calculator](https://github.com/iamsid47/hangman-pics/blob/main/smart-calc.png)

## Human-Like Calculator

In this workshop, we are gonna make a calculator which can add, multiply, divide and subtract two numbers. But the catch is that instead of just adding those two numbers, we give it a statement!

For example: *Hey calc, can you give me the lcm of 9 and 3* and it will provide you with the LCM (least common multiple) of those two numbers.

You can try it out on Repl.it. Just click [Here](https://repl.it/@iamsid47/calc#main.py)

## Files & Libraries

For this workshop, we only require a python file. Let's name it as `main.py`. We do not need any sort of extra libraries as well!

## Let's Get Started

![Create a repl](https://github.com/iamsid47/hangman-pics/blob/main/human-like-calc-repl.png)

Let's head over to [Repl.it](https://repl.it) and create a *repl*. Choose **Python** and name your project.
First, we want our calculator to act a bit human. It should not output just numbers. It should welcome me when I run it. Or it shall tell me if it does not know about a calculation. For the same, we will create some responses.

```python
response=['Welcome to smart calculator','My name is Calc', 
		'Thanks for enjoy with me ','Sorry ,this is beyond my ability'] 
```

Now, for our calculator to calculate something, we need to tell it in some or the other way. Since we don't want our user to tell it in more of a numerical language, let's write in some logic.

  We will first define some functions for the following mathamatical expressions.
  1. Addition
  2. Subtraction
  3. Multiplication
  4. Division
  5. LCM
  6. HCF
  7. Remainder
  
For addition, let's create a function named `add`.

```python
def add(a,b): 
	return a+b 
```

Similar logic applies to the other functions. For subtraction, we create a function named `sub`; for multiplaction: `mul`, for division: `div`, for remainder: `mod`, for LCM: `lcm` and lastly for HCF: `hcf`.

Whoof! A lot of functions!

Next, add some logic inside these. It's gonna be the same like we did it for addition. Meaning, the method is same just some tweaks.

```python
# Subtraction 
def sub(a,b): 
	return a-b 

# Multiplication 
def mul(a,b): 
	return a*b 

# Division 
def div(a,b): 
	return a/b 

# Remainder 
def mod(a,b): 
	return a%b 
```

Now, for LCM and HCF, we need to create something different as even in normal python, these expressions work differently.

Thus for the Least Common Faction,

```python
# calculating LCM 
def lcm(a,b): 
	L=a if a>b else b 
	while L<=a*b: 
		if L%a==0 and L%b==0: 
			return L 
		L+=1
```

Here, we have entered the LCM logic which is the same as the one used in a normal Python IDE. Infact all of the calculational logics are the same.

And for the Highest Common Factor,

```python
# calculating HCF 
def hcf(a,b): 
	H=a if a<b else b 
	while H>=1: 
		if a%H==0 and b%H==0: 
			return H 
		H-=1
```

We just got the calculational logic done! Now, remember that I wanted my calculator to be more like a human? Well, That is, when I type a sentence, it should be able to catch what I want (example: add, subtract, etc) and then perform the calculation.

For this, we make some text tokens and create some operations. What exactly we are going to do is,
*If a user types in* add 5 and 9 for me. Our code will parse it into a list which will contain all the words and integers. *Here, it will be: add, 5, and, 9, for, me.*
A list of 7! Now, we will remove the unnecessary part from this list. That is **for, me, and**.

To do this, we need to create a token fetcher which will fetch the tokens (functions), remove the unnecesary part and later perform the calculation. Let's create a function for this. I'll name it `extract_from_text`

```python
def extract_from_text(text): 
	l=[] 
	for t in text.split(' '): 
		try: 
			l.append(float(t)) 
		except ValueError: 
			pass
	return l 
```

Here, we first  make an empty list named `l`. Then we split all the terms the user has written using `for t in text.split(' '):` and then append this list. Later on we remove the unnecessary part using `except ValueError` and then return this list `l`.

Now for this to work, we create some operations performed on the basis of the tokens we get.
So, let's create an operation and we'll name it the same.
```python
operations={'ADD':add,'PLUS':add,'SUM':add,'ADDITION':add, 
			'SUB':sub,'SUBTRACT':sub, 'MINUS':sub, 
			'DIFFERENCE':sub,'LCM':lcm,'HCF':hcf, 
			'PRODUCT':mul, 'MULTIPLY':mul,'MULTIPLICATION':mul, 
			'DIVISION':div,'MOD':mod,'REMANDER'
			:mod,'MODULAS':mod} 
```

Now what we have done here is that if we get a list which contains the token `ADD`, then we use the `add` function to add the numbers present in that command.
The same applies for other calculations as well.

Example: If I put something like: **hey there, can you add 10 and 3 for me.** 
    Here, it will create a list. Then remove the unnecessary part from this list on the basis of the operaitons we mentioned above and then perform the calculations.
    
Now let's create some other commands to exit this calculator and all.

For this, we create an operation named `commands` and enter in the tokes.

```python
commands={'NAME':myname,'EXIT':end,'END':end,'CLOSE':end} 
```

Here, if someone puts the command **EXIT**, it will exit the calculator and end the process.

Now, I wanted something more of a human. So I'll print in some basic text and signs.

```python
print('--------------'+response[0]+'------------') 
print('--------------'+response[1]+'--------------------') 
```

Next, we will create a while loop so that the user can calculate on and on and then exit accordingly.

```python
while True: 
	print() 
	text=input('enter your queries: ') 
```

After this, we split the text so that our operations and the token fetcher can work properly and later create a list named `l`.

```python
for word in text.split(' '): 
```

Let's add some conditionals for calculations, errors and exits.

```python
if word.upper() in operations.keys(): 
			try: 
				l = extract_from_text(text) 
				r = operations[word.upper()] (l[0],l[1]) 
				print(r)
        except: 
				print('something went wrong going plz enter again !!') 
			finally: 
					break
		elif word.upper() in commands.keys(): 
					commands[word.upper()]() 
					break
```

Here, we define that if there is a word from the list which matches with operations, then we tell to perform the operation. Meaning, if there is a token named *subtract*, we tell it to take this token and perform the subtraction with the respective numbers. Now if the user puts in something which is incorrect or does not comply with our operation, we break the loop.

Next in, we add an `else` for everything else. Meaning, if something other than the conditions mentioned above goes wrong, we still break the loop and exit the program showing an error.
```python
	else:		 
		sorry() 
```

## Voila! You did it!

![Mission Accomplished](https://media.giphy.com/media/MAzunB1Ru6zAYlYgPD/giphy.gif)

You just made your own human friendly calculator!

## Hack It ;)

Furthermore more, we can also make this calculator go wild by adding in more functionality. As an example, it currently is able to do some basic stuff. But things like roots, squaring, equation solving with one variable can also be added. We can also improve the number of accepted tokens for the operations to improve it's user experience.

You can also add in an equation solver which will be able to solve complex equations as well. But that actually comes under the initial stages of machine learning so it will also require a handful of other libraries!

## How it feels?

![How it works](https://github.com/iamsid47/hangman-pics/blob/main/how-calc-works.png)
