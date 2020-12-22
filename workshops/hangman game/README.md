---
name: 'Hangman Game'
description: 'The Hangman game created using Python (runs even on command line)'
author: '@iamsid47'
img: https://github.com/iamsid47/hangman-pics/blob/main/hangman.png
---

![](https://github.com/iamsid47/hangman-pics/blob/main/hangman.png)

*Hi Everyone! In this workshop, we will walkthrough how to build the game: ***Hangman!**** 

This will be a simple command line game made using Python, that will allow user input and also put a visual of the current Hangman along the word that's being guessed at every turn!

[Click This Link](https://repl.it/@iamsid47/hangman) to see this workshop, live on [Repl.it](https://repl.it)

### Files

We will be writing all of our code to run the program in a single Python file called ```hangman.py``` or ```main.py``` Additionally we'll have another Python file called ```words.py``` that holds a long list of words to use for the game.

![The Files](https://github.com/iamsid47/hangman-pics/blob/main/files.png)

## Ready. Set. Go!

Let's head over to [Repl.it](https://repl.it) and create a new **repl**. Choose the language as **Python** and name your **repl**.

![Creating a repl](https://github.com/iamsid47/hangman-pics/blob/main/create%20a%20repl.png)

First, we need to define a function called ```get_word()``` which will return a word for our game. For this function we can either create a list of words or we can import a list of words for the program to choose from.

I have already created a file that contains a list of several hundred words so I'm just going to import that list into our file.

[Click Here]() for the file link.

Now, we want to randomly choose a word from this list so let's import the ***random*** library inside ```get_word()```

Here's how the things should look:

```python
import random
from words import word_list

def get_word():
```

Now, we will call ```random.choice``` on the word list.
Next we'll return this word in all uppercase by calling ```upper``` This will convert all the user input into upper case. This is to make our comparison logic simpler.

For the actual interactive gameplay we will define a function called ```play()```.

```python
import random
from words import word_list


def get_word():
    word = random.choice(word_list)
    return word.upper()


def play(word):
```

Let's create several variables that we will be updating during each turn the user takes. First we want to display the word during each turn. Let's represent unguessed letters as **underscores** and then show letters as *correct guesses* are made. To do this we will make a string called ```word_completion```. 

This will be the same length as the chosen word. It will initially contain only underscores. Next we'll create a variable called ```guessed``` that's initialized to ***false***.

```python
def play(word):
    word_completion = "_" * len(word)
    guessed = False
```
Now we'll create two lists. 

   1. That'll hold the *letters* that user guess
   2. That'll hold the *words* the user guess

The last variable will be the number of tries. This corresponds to the number of body parts left to be drawn on the hangman. Counting the head, body, both arms, and both legs this will be six.

```python
guessed_letters = []
    guessed_words = []
    tries = 6
```

A quick sidenote that I've already created the seven visual stages of hangman. This includes the initial empty state as well as the other stages. We will store these in a list within the function called ```display_hangman``` The index of each stage corresponds to the number of tries that user has left. 

## Done For You :)

We'll be using this to display the current stage of hangman at each turn in the command prompt.

```python
def display_hangman(tries):
    stages = [  # final state: head, torso, both arms, and both legs
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |     / \\
                   -
                """,
                # head, torso, both arms, and one leg
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |     / 
                   -
                """,
                # head, torso, and both arms
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |      
                   -
                """,
                # head, torso, and one arm
                """
                   --------
                   |      |
                   |      O
                   |     \\|
                   |      |
                   |     
                   -
                """,
                # head and torso
                """
                   --------
                   |      |
                   |      O
                   |      |
                   |      |
                   |     
                   -
                """,
                # head
                """
                   --------
                   |      |
                   |      O
                   |    
                   |      
                   |     
                   -
                """,
                # initial empty state
                """
                   --------
                   |      |
                   |      
                   |    
                   |      
                   |     
                   -
                """
    ]
    return stages[tries]
```
I have also created a seperate file for this in the repository for ease of use. It's named: **```parts.py```**

Now, let's get back to the ```play():``` function. After initializing the variables, we'll print some initial output to help guide the user when the game starts.

For instance: ```Let's play Hangman!```. 

Along with this, we also print the initial state of hangman and the initial state of the word with all underscores. We'll also print a new line here.

```python
print("Let's play Hangman!")
    print(display_hangman(tries))
    print(word_completion)
    print("\n")
```

### The Main Chunk!

The main chunk of our code will be encompassed in a ***while loop*** and this will run until either the word is guessed or the user runs out of tries.

So for the condition, we'll write:

```python
while not guessed and tries > 0
```

Since each iteration of the loop corresponds to a turn by the user, we'll first prompt the user for a ```guess``` with the input: **Please guess a letter or word:**. We'll store the guess in a variable.

we'll also make sure to cast this to *uppercase*.

```python
guess = input("Please guess a letter or word: ").upper()
```

### If. Else. Elif.

Inside the *loop* we'll have three possible **conditional branches**, each based on different user input.

Guessing a letter, guessing the word, or typing something other than a single letter or word of the correct length.

Let's create an ```if/else``` block.

Guessing a letter would mean that guess has a length of 1 and contains only characters from the alphabet. So we'll call ```isalpha()``` on ```guess```.

```python
if len(guess) == 1 and guess.isalpha():
```

Guessing a word would mean that the length of guesses equals the length of the actual word and contains only letters. Thus, we'll have an ```else``` statement that'll catch everything else and we can just ```print``` **Not a valid guess**.

After each guess is handled we'll print the current state of the hangman and the word. We'll also print a new line to spaceout each term.

```python
elif len(guess) == len(word) and guess.isalpha():

else:
    print("Not a valid guess.")   
    print(display_hangman(tries))
    print(word_completion)
    print("\n")
```
Now, let's start with guessing a letter.

We're gonna need another a conditional block inside this ```if``` statement checking *if the letter has already been guessed is not in the word* **or** *is in the word*.

So if ```guess``` is in guessed letters we'll just ```print```: ***You already guessed the letter*** and also print the letter with it.

And then if ```guess``` is not in the word, will ```print```: **```guess``` is not in the word**.

Here we'll also decrement the number of tries by **1** since the user made an incorrect guess and will **append** ```guess``` to ```guessed letters```.

```python
if len(guess) == 1 and guess.isalpha():
            if guess in guessed_letters:
                print("You already guessed the letter", guess)
            elif guess not in word:
                print(guess, "is not in the word.")
                tries -= 1
                guessed_letters.append(guess)
```


The only remaining possibility is that the user made a **correct** letter guess. So we'll make an ```else``` block and ```print```: **Good job ```guess``` is in the word!**

Once again will append **```guess``` to ```guessed letters```**. Next we have to update our variable ```word_completion``` to reveal to the user, all the occurrences of ```guess```.

For this, will first convert ```word_completion``` from a **string** to a **list** so we're able to index into it, and we'll store this in a new variable called ```word_as_list```.

Now we need to find all the indices where ```guess``` occurs in a word. So, let's use a ```list comprehension```. Here, we're calling enumerate onward to get both the **index I** and **letter at the index** for each iteration or **pending I** to this list if its corresponding letter equals ```guess```.

```python
else:
    print("Good job,", guess, "is in the word!")
    guessed_letters.append(guess)
    word_as_list = list(word_completion)
    indices = [i for i, letter in enumerate(word) if letter == guess]
```

Now let's use a simple ```for loop``` over ```indices``` to replace each **underscore at index** with ```guess```. After this, we'll update word completion with the new changes by calling **empty** ```string``` **.join** onward as list, to convert it back to a string.

```python
for index in indices:
    word_as_list[index] = guess
    word_completion = "".join(word_as_list)
```

It's also a possibility that ```guess``` now completes the word. So let's include an ```if``` **statement** to check this. We write: 

```python
if "_" not in word_completion:
    guessed = True
```

Now let's move onto the conditional for guessing a word similar to guessing a letter. We need another **conditional** block inside of the ```if``` *statement* checking if the word has already been guessed is correct or is incorrect.

So if ```guess``` is in guessed words, let's ```print```: **You already guessed the word, ```guess```**.

If ```guess``` does not equal word let's ```print```: **```guess``` is not in the word**, and decrement the number of try by one.

```python
elif len(guess) == len(word) and guess.isalpha():
            if guess in guessed_words:
                print("You already guessed the word", guess)
            elif guess != word:
                print(guess, "is not the word.")
                tries -= 1
                guessed_words.append(guess)
```

Let's also make sure to append ```guess``` to **guessed** words.

Then in our ```else``` *statement*, which means that the user correctly guessed the word, we'll set ```guessed``` to **true** and word completion to the full word.

```python
else:
    guessed = True
    word_completion = word
```
And that finishes up our while loop.

Now, let's check whether the user guess the word correctly or ran out of tries.

We do this by checking if ```guessed``` is true and if so, we ```print```: **Congrats you guessed the word! You Win!**

Otherwise we'll ```print```: **Sorry you ran out of tries. The word was + ```word``` + maybe next time!**

```python
if guessed:
        print("Congrats, you guessed the word! You win!")
    else:
        print("Sorry, you ran out of tries. The word was " + word + ". Maybe next time!")
```

## Final Touches!

Finishing up, we just need a main function to put everything together.

Let's first get a ```word``` from ```get_word```, then we'll pass this word to ```play```.

```python
def main():
    word = get_word()
    play(word)
```

This is all we need here to run the game once, but let's add some code to give the user the option to play again! Let's create a ```while loop``` asking the user for ```input``` prompting **Play Again?** and the choice of ```yes``` *or* ```no```.

We'll call ```upper``` on the **input** and check if it's equal to ``Y``. And then inside, we'll call the same two functions we did before.

```python
def main():
    word = get_word()
    play(word)
    while input("Play Again? (Y/N) ").upper() == "Y":
        word = get_word()
        play(word)
```

Therefore, our program will continue as long as the user types **yes** to *play again*. Lastly we'll just add this code fragment in the end so that our program will run by running our script on the command line:

```python
if __name__ == "__main__":
    main()
```

And we're good to go!

Now let's run our program ;) So, to start the game click the **RUN** button.

![The Run button](https://github.com/iamsid47/hangman-pics/blob/main/run.png)

The game initializes and we can start guessing!

![The game running on Repl.it](https://github.com/iamsid47/hangman-pics/blob/main/the%20game%20running.png)

![You Did It](https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif)

## Hack It!

You got the game? Cool! Now, make it your own by adding even more stages for the hangman and don't forget to update `words.py` with your own words for more fun!

## Some Tweaks ;)

[Click This Link](https://repl.it/@iamsid47/hangman) to see my project on [Repl.it](https://repl.it)

[Dog Instead Of Hangman](https://repl.it/@iamsid47/Save-The-Dog)

[Mc Donalads Instead Of Hangman](https://repl.it/@iamsid47/Macdonald-Fam)

## How Does It Work & Look?

![Changes Taking Place](https://github.com/iamsid47/hangman-pics/blob/main/changes%20taking%20place.png)
![Game Running](https://github.com/iamsid47/hangman-pics/blob/main/game%20running.png)
![Incorrect Word](https://github.com/iamsid47/hangman-pics/blob/main/incorrect%20word.png)

## Source Code

Here's the whole source code for `hangman.py`

```python
import random
from words import word_list


def get_word():
    word = random.choice(word_list)
    return word.upper()


def play(word):
    word_completion = "_" * len(word)
    guessed = False
    guessed_letters = []
    guessed_words = []
    tries = 6
    print("Let's play Hangman!")
    print(display_hangman(tries))
    print(word_completion)
    print("\n")
    while not guessed and tries > 0:
        guess = input("Please guess a letter or word: ").upper()
        if len(guess) == 1 and guess.isalpha():
            if guess in guessed_letters:
                print("You already guessed the letter", guess)
            elif guess not in word:
                print(guess, "is not in the word.")
                tries -= 1
                guessed_letters.append(guess)
            else:
                print("Good job,", guess, "is in the word!")
                guessed_letters.append(guess)
                word_as_list = list(word_completion)
                indices = [i for i, letter in enumerate(word) if letter == guess]
                for index in indices:
                    word_as_list[index] = guess
                word_completion = "".join(word_as_list)
                if "_" not in word_completion:
                    guessed = True
        elif len(guess) == len(word) and guess.isalpha():
            if guess in guessed_words:
                print("You already guessed the word", guess)
            elif guess != word:
                print(guess, "is not the word.")
                tries -= 1
                guessed_words.append(guess)
            else:
                guessed = True
                word_completion = word
        else:
            print("Not a valid guess.")
        print(display_hangman(tries))
        print(word_completion)
        print("\n")
    if guessed:
        print("Congrats, you guessed the word! You win!")
    else:
        print("Sorry, you ran out of tries. The word was " + word + ". Maybe next time!")


def display_hangman(tries):
    stages = [  # final state: head, torso, both arms, and both legs
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |     / \\
                   -
                """,
                # head, torso, both arms, and one leg
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |     / 
                   -
                """,
                # head, torso, and both arms
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |      
                   -
                """,
                # head, torso, and one arm
                """
                   --------
                   |      |
                   |      O
                   |     \\|
                   |      |
                   |     
                   -
                """,
                # head and torso
                """
                   --------
                   |      |
                   |      O
                   |      |
                   |      |
                   |     
                   -
                """,
                # head
                """
                   --------
                   |      |
                   |      O
                   |    
                   |      
                   |     
                   -
                """,
                # initial empty state
                """
                   --------
                   |      |
                   |      
                   |    
                   |      
                   |     
                   -
                """
    ]
    return stages[tries]


def main():
    word = get_word()
    play(word)
    while input("Play Again? (Y/N) ").upper() == "Y":
        word = get_word()
        play(word)


if __name__ == "__main__":
    main()
```
