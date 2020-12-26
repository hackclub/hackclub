---
name: 'Strong Password Generator'
description: 'A Complex password generator (including special characters) using Python'
author: '@iamsid47'
img: https://github.com/iamsid47/hangman-pics/blob/main/pass%20-%20main.png
---

![Password Generator](https://github.com/iamsid47/hangman-pics/blob/main/pass%20-%20main.png)

Hello Everyone! In this workshop, we are gonna create a strong password generator using python. This generator will be able to generate a password using lowercase, uppercase alphabets, integers, and as well as special characters. The length of the password will be user defined. This generator will also have a GUI (Graphical User Interface)!

You can test out this generator here on Repl.it by clicking [This](https://repl.it/@iamsid47/password-generator#main.py) Link.

## Files & Libraries

In this workshop we are going to be having only one python file named as `main.py`. We are also going to require couple of libraries. The first one is `tkinter`. This is a library for python programs which will have/require a GUI. We also require `pyperclip`. This library will help in copying the password which the program generates. We will also be required to have `random` and `string` library.

## Let's Get Started!

![Create a repl](https://github.com/iamsid47/hangman-pics/blob/main/pass-repl.png)

Let's head over to [Repl.it](https://repl.it) and create a *repl*. Choose the language as **Python** and name your project/repl.

Now, we will first install the required libraries. For this, head over to the ***shell*** and type in:

```
pip install tkinter && pip install pyperclip
```

This will install the `tkinter` and the `pyperclip` library. Note that you also need `random` and `string`.

Now, let's import these libraries.

```python
from tkinter import *
import random, string
import pyperclip
```

After this, the first task is to initialize a window for our program. We are using `tkinter` for this purpose. Let's define the required dimensions for our program.

```python
root =Tk()
root.geometry("400x400")
root.resizable(0,0)
root.title("PASSWORD GENERATOR")
```

This will initialize our program by giving it the length of 400 px and breadth of 400px. It will also give it the title of **PASSWORD GENERATOR**.

Next, we create a heading for our program. We also don't want to make it feel like vacant, thus we can also add some text at the bottom of our program.

```python
heading = Label(root, text = 'PASSWORD GENERATOR' , font ='arial 15 bold').pack()
Label(root, text ='Made by Sid', font ='arial 15 bold').pack(side = BOTTOM)
```

Now we create a label to enter the password length. We will name it as `pass_label`. Note that we also need to specify the dimensions of this label. Thus, we need to define it's lenght and width. Since it's gonna be an integer, we define the input as an integer.

```python
pass_label = Label(root, text = 'PASSWORD LENGTH', font = 'arial 10 bold').pack()
pass_len = IntVar()
length = Spinbox(root, from_ = 8, to_ = 32 , textvariable = pass_len , width = 15).pack()
```

After this, let's define the function for our program. Let this function be `Generator`. Inside this generator, we will define the password's structure. Here, we want our password to be strong at the start itself and the later part can be randomized. Thus, we will define it in such a way that the first 4 characters of the password must have a uppercase, a lowercase, an integer and a special character. And then the later part can be randomized using the `Random` library. This improves the password strength. 

We also define a variable named `pass_str` which will be equal to `StringVar()`.

```python
pass_str = StringVar()

def Generator():
password = ''
for x in range (0,4):
        password = random.choice(string.ascii_uppercase)+random.choice(string.ascii_lowercase)+random.choice(string.digits)+random.choice(string.punctuation)
    for y in range(pass_len.get()- 4):
        password = password+random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits + string.punctuation)
    pass_str.set(password)
```

Here, we are defining our password in such a way that the later part (after the first 4 characters), it will use the random library to select the anything from uppercase, lowercase, integer and a special character. We also have worked out with the password's **lenght** related logic. This means that the program will deduct the first 4 characters and then generate the latter part of the password.

Now we create a button which will tell the program to run the `Generator`.

```python
Button(root, text = "GENERATE PASSWORD" , command = Generator ).pack(pady= 5)

Entry(root , textvariable = pass_str).pack()
```

After this, we also need to make a function to copy the password. And that's the reason we installed `pyperclip`.

So we define a function named `Copy_password()`. Next, we enter in the **copy** attribute so that the user can copy the password.

```python
def Copy_password():
    pyperclip.copy(pass_str.get())

Button(root, text = 'COPY TO CLIPBOARD', command = Copy_password).pack(pady=5)
```

Lastly, we need to create a `loop` so that if the user wants to continue generating passwords, he should not get an error.

```python
root.mainloop()
```

## Voila! You got it!

![Awesome](https://media.giphy.com/media/mXnO9IiWWarkI/giphy.gif)

You just created your very own password generator. And that too.. not a rubbish one which generates something random. But a proper generator which tricks in and generates a strong password!

## Hack It ;)

You can further improvise this project in many ways. You can create a dedicated and a strong algorithm which can generate even more powerfull passwords. 

You can even combine this project with either `node.js` or `Vercel` and make it an online generator! 

Further improvements include creating a series of algorithm. Meaning, first create a handful of algorithms for password generators. Then create algorithms to choose the algorithms you just created for your password generation. This will secure your own program from getting cracked and also support some very strong passwords which can barely be patternized and cracked!

## How it works?

![How it works - start](https://github.com/iamsid47/hangman-pics/blob/main/pass%20h%201.png)

![How it works -  next](https://github.com/iamsid47/hangman-pics/blob/main/pass%20h%202.png)
