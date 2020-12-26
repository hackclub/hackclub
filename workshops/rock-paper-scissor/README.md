---
name: 'Rock Paper Scissor'
description: 'Command line based Rock Paper Scissor Game using Python'
author: '@iamsid47'
img: https://github.com/iamsid47/hangman-pics/blob/main/rock-paper-scissor.png
---

*Hi Everyone! In this workshop, we will walkthrough how to build the game: ***Rock Paper Scissor!****

![Rock. Paper. Scissor](https://github.com/iamsid47/hangman-pics/blob/main/rock-paper-scissor.png)

This is a command line game and will be played with the computer. The chances of winning and loosing are random!
You can try out this game on Repl.it using [THIS](https://repl.it/@iamsid47/rps#main.py) link.

## Files & Libraries

There is going to be just one file for this workshop. We will be naming it as `main.py`. The `random` library will be required to the program to run.

## Let's Get Started!

![Create a repl](https://github.com/iamsid47/hangman-pics/blob/main/rock-paper-scissor-repl.png)

So let's head over to [Repl.it](https://repl.it) and create a *repl*. Choose the language as Python and name your repl.

Next, we import the `random` library into our `main.py` file. After this, we need to tell the user about the rules of our game. Thus we `print` the rules when the game starts.

```python
print("Winning Rules of the Rock paper scissor game as follows: \n"
+"Rock vs paper->paper wins \n"
+ "Rock vs scissor->Rock wins \n"
+"paper vs scissor->scissor wins \n") 
```

Now, we will create a *while loop* so that the user can play on as long as he/she/they want and then quit. Inside the loop we will first `print` in the choices and ask for the user to input a choice. The input will be an integer so that the user is not required to type the whole word thus improving the experience.

There is also a possibility that the user inputs an invalid value. Meaning, he can enter 4, 5, 9, or -1, -24, etc. To avoid this error we will again create a loop in which we ask the user to input a correct value (which will be 1, 2, or 3).

```python
while True: 
print("Enter choice \n 1. Rock \n 2. paper \n 3. scissor \n") 

# take the input from user 
choice = int(input("User turn: "))
  
# looping until user enter invalid input 
while choice > 3 or choice < 1: 
		choice = int(input("enter valid input: ")) 
```

Now we enter in the conditional statements. If the user chooses 1, we name the choice as **Rock**. If the user chooses 2, then **Paper** and if 3, we make it **Scissor**.

```python
if choice == 1: 
choice_name = 'Rock'
elif choice == 2: 
choice_name = 'paper'
else: 
choice_name = 'scissor'
```

Next, to make it a bit interesting, we *output* the user's *input* and print in that now it's the computer's turn. 

```python
print("user choice is: " + choice_name) 
print("\nNow its computer turn.......") 
```

Now we want the computer to choose randomly from 1, 2, or 3. Next we will loop this value until the computer's choice is equal to the `choice` value.

```python
comp_choice = random.randint(1, 3) 
while comp_choice == choice: 
comp_choice = random.randint(1, 3) 
```

After this, we define the computer's choice using conditionals and name it's choice either as Rock, Paper, or Scissor.

```python
if comp_choice == 1: 
	comp_choice_name = 'Rock'
elif comp_choice == 2: 
	comp_choice_name = 'paper'
else: 
	comp_choice_name = 'scissor'
```

Next, we want to print the computer's choice and compare the choice we made with it. Thus:
```python
print("Computer choice is: " + comp_choice_name) 

print(choice_name + " V/s " + comp_choice_name) 
```

Now we define the condition for winning. This will be again using the conditionals.

Here, if our choice is [1] (Rock) and  the computers choice is [2] (Paper) or our choice is [2] and the computer's choice is [1] then we print that **paper wins** and give the `result` value as `paper`.

```python
if((choice == 1 and comp_choice == 2) or
(choice == 2 and comp_choice ==1 )): 
print("paper wins => ", end = "") 
result = "paper"
```

Similar logic is applied for other scenarios as well.

```python
elif((choice == 1 and comp_choice == 3) or
(choice == 3 and comp_choice == 1)): 
	print("Rock wins =>", end = "") 
	result = "Rock"
else: 
	print("scissor wins =>", end = "") 
	result = "scissor"
```

Now we want to print that who actually won. User? Or the computer?

Here we use the conditional and tell that if `result` is equal to `choice_name` then the user wins else the computer wins.

```python
if result == choice_name: 
	print("<== User wins ==>") 
else: 
	print("<== Computer wins ==>")
```

Now as this is a loop, we ask the user again that if he/she/they want to play another round.

```python
print("Do you want to play again? (Y/N)") 
ans = input() 
  
 if ans == 'n' or ans == 'N': 
	break
```

Here, if the user's input is **n** or **N**, then this loop breaks and the program exits. If not, the program continues. Also, when this loop breaks, we will print a message thanking the player for playing.

```python
print("\nThanks for playing") 
```

## Voila!

![Rock Paper Scissor](https://media.giphy.com/media/gZ5jPakg02sujkkkg5/giphy.gif)

You just made your very own rock-paper-scissor game!

## Hack It ;)

There is a huge scope of improvement for this game. Instead of just having 3 choice, you can have many more. You can even change the theme to something else. Meaning, instead of rock-paper-scissor, make it something else.

The fun will begin when you make a GUI for this. You can surely use the `tkinter` library to make the GUI and add in sound effects and scoreboards.

You can also make this game go multiplayer by making it browser-based and running it on a server. You will surely be required to install a lot of libraries (specially realated to networking) for this purpose.

**The source code is in this repository and also on [Repl.it](https://repl.it/@iamsid47/rock-paper-scissor#main.py).**

## How It Works

![How it works](https://github.com/iamsid47/hangman-pics/blob/main/rps-how%20it%20works.png)
