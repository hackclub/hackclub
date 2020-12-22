---
name: 'HangMan Game'
description: 'Lets make the famous HangMan game in Python!'
author: '@HariOm987'
img: https://cloud-rlqr6v9nc.vercel.app/05621553db7eedebcad64bf185be3d7e6.jpg
---

We all have heard about HangMan game, it is a paper and pencil guessing game which is played between two or more players where one player thinks of a word and another tries to guess that word within the specific number of trials.
![Photo of HangMan game](https://cloud-j9cwk8w65.vercel.app/081olsvpsq0l.png)

So, lets try to make this interesting game in python. Here, solo player can enjoy this game and utilize their free time by building their vocabulary too.
 
## Getting Started

We are going to use [repl.it](http://repl.it) for this project. Just go to [https://repl.it/languages/python3](https://repl.it/languages/python3) to start coding. It's that easy! Creating an account will ensure you don't lose your code but you can do it after we finish this project. Let's start coding!

### Making a list of words

First we will create a file named `words.py` which will have a list of words and this list will be used later for randomly selecting the word.

```python
Word_list = [
    'crust',
    'dent',
    'market',
    'knock',
    'smite',
    'windy',
    'coin',
    'throw'
    ]
```
Like this you can add as many words as you want.

### Creating Visual Stages Of Man

There is no fun until we create the man hanging.

So, we will create that man using some symbols. As there will be total seven stages, so i have already created all of the stages. You can see and type them accordingly.

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

### Main Code

Now lets start the main part of the game.

First we will import file containing list of words and random library. We can do that by using the codes given below-
```python 
import random
from words import Word_list
```
Now we will choose a random word from the `word` list.

(For better understanding- the `def` keyword in the below code stands for "define". We have to define any function before we can call it in our program.)
```python
def get_word():
    word = random.choice(Word_list)
    return word.upper()                                # This function is used to convert all the letters of the word in capital.
```
So, now we will define the variable which will print the number of underscores(`_`) which the word has and if we guess the correct word then that underscore will be replaced by that correct guessed word.
```python
def play(word):
    word_completion = "_ " * len(word)
```
In the same function only, we will create a variable named `guessed` and initialy we will assign `False` value to it.
We will also create two more variables `guessed_letter` and `guessed_word`, they will store the guessed letter and words accordingly and we will also create one variable named `tries` that will store the number of chances we have to guess the correct word.
(Here we have 6 chances, as we have 2 hands, 2 legs, 1 head and 1 body, so total we have 6 body parts.)
```python
 guessed = False
    guessed_letters = []
    guessed_words = []
    tries = 6
```
Now we will print some basic things which user will see when he will start the game. Like a welcome note, initial stage of man, etc.
```python
    print("Let's play Hangman!")
    print(display_hangman(tries))    # this prints the initial stage of man
    print(word_completion)           # this will print underscores
    print("\n")                      # this is used to print an empty line
```

Now the main loop of our program will start. Here we will use `while` loop. 
```python 
while not guessed and tries > 0:                                                # this statement checks whether tries are left or not.
        guess = input("Please guess a letter or word: ").upper()                # It will take input from user and convert that word or letter in Capital letter
```
After taking input from user, there are three possibilities and that are 
1. User has entered single letter.
2. User has entered whole word.
3. User has entered wrong choice.

So, we will check each condition one by one.

Starting from the first condition, if the length of input is one and it is alphabet then it is a letter
```python
if len(guess) == 1 and guess.isalpha():
```
Now after getting a letter we have 3 possibilities again,
* The letter is already guessed.
* The letter is not in the word.
* The letter is in the word.
 
 So for above two condition we will check and print the output accordingly
 ```python
 if guess in guessed_letters:
        print("You already guessed the letter", guess)             # This will simply print this output
 elif guess not in word:
        print(guess, "is not in the word.")              
        tries -= 1                                                 # This is used to subtract the number of chances left by one.
        guessed_letters.append(guess)                              # This function will add the letter in the guessed_letter list.
```
Now for the third condition (which is the most important one also😂)
The new thing in this code will be to show the correctly guessed letter in place of underscore, and for that we will convert string to list and after printing guessed letter we will again convert list into string. So now i will show you the code for this part:
```python
else:
    print("Good job,", guess, "is in the word!")
    guessed_letters.append(guess)                                              # This function will add the letter in the guessed_letter list.
    word_as_list = list(word_completion)                                       # This is used to convert string into list
    indices = [i for i, letter in enumerate(word) if letter == guess]          # Here we are searching which index has same word as the guessed word
    for index in indices:                                                      # In these two lines we are replacing those index value with the guessed word.
        word_as_list[index] = guess
    word_completion = "".join(word_as_list)                                    # Here we are again converting list into string. 
    if "_" not in word_completion:                                             # Here we are just checking that the word still has underscore and it is not completed.
        guessed = True                                                         # If the above condition is true and word is completed then it will stop the next atteration.
```
So, till now our code looks something like this:
```python
import random
from words import Word_list


def get_word():
    word = random.choice(Word_list)
    return word.upper()


def play(word):
    word_completion = "_ " * len(word)
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
```
Now lets see about the second condition which was `if user had entered whole word`
In this case again we have three conditions:
* The word is already guessed.
* The word is wrong.
* The word is same.

so for all these three conditions our code will be:
```python
elif len(guess) == len(word) and guess.isalpha():        # Here we have checked whether the number of letters are same as in word and all the input characters are alphabets.
    if guess in guessed_words:
        print("You already guessed the word", guess)
    elif guess != word: 
        print(guess, "is not the word.")
        tries -= 1                                       # Here we will decrease the Number of chances left by one.
        guessed_words.append(guess)                      # It will add the guessed word in guessed_words list.
    else:
        guessed = True                                   # If the word is correctly guessed, then it will terminate the next atteration of loop.
        word_completion = word                           # It will replace all the underscores with the correct guessed word.
```
Now the last condition, that was `user has entered weong choice`, in this we will simply show the messeage that "its an invalid guess"
```python
else:
    print("Not a valid guess.")
print(display_hangman(tries))                # It will show the stage of man.
print(word_completion)                       # It will show the underscores and guessed letters.
print("\n")
```
We are almost done. Now, if the user has guessed the correct word then we will show "congratulations message" or else we will print "better luck next ime message with the answer".
```python
if guessed:
    print("Congrats, you guessed the word! You win!")
else:
    print("Sorry, you ran out of tries. The word was " + word + ". Maybe next time!")
```
So till now our code looks something like this:
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




import random
from words import Word_list


def get_word():
    word = random.choice(Word_list)
    return word.upper()


def play(word):
    word_completion = "_ " * len(word)
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
```
Now we will just create the main function and call the `word` and `play` function
```python
def main():
    word = get_word()                                        # It will get a word from word function
    play(word)                                               # It will perform the main operation part using that word
    while input("Play Again? (Y/N) ").upper() == "Y":        # Here we have given the option of replaying the game
        word = get_word()
        play(word)

if __name__ == "__main__":                                   # It is just written to run the code normally
    main()
```
## Hacking
Congratulation!!! 🎉🎊 We have made the HangMan game. You can now play this amazing game. 

You can see the full codes of this workshop [here](https://repl.it/@hariom04/hang-man#main.py).

So, you guys enjoyed it? Ofcourse you would have🤘🤘😉. It was a small code of merely 80 lines.

Now its your chance to do some innovative things using this code and make something more interesting!!

Some of the ideas are:
* We can add more body parts to the man, like Ears. So, that the number of guesses can be increased. [Demo](https://repl.it/@ashu557/HangMangame#main.py)
* We can add many more words in `word` list. By doing this the game becomes more difficult. [Demo](https://repl.it/@ashu557/HangMandemo2#main.py)

After building this game. Please do share your wonderful creation with your friends and people across the world!!

You probably know the best ways to get in touch with your friends and family, but if you want to share your project with the worldwide Hack Club community there is no better place to do that than on Slack.

1. In a new tab, open and follow [these directions][https://slack.hackclub.com/] to signup for our Slack.
2. Then, post the link to the [`#scrapbook`](https://hackclub.slack.com/messages/scrapbook) channel to share it with everyone!

Okay then enjoy playing it and increase your vocabulary!!

Happy Hacking🤘🤘✌😊
