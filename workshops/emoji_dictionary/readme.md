---
name: 'Emoji Dictionary'
description: 'Building Emoji Dictonary using Demoji & Tkinter'
author: '@YashKalbande'
img: 'https://cloud-i9t9ilblm.vercel.app/0emoji_dic.png'
---

![final Program](https://cloud-3hd98h80j.vercel.app/0demo_gif.gif)

# Overview 

Welcome to the exciting world of Emojis😃. Emojis are the main part of life. We use Emojis in our daily life. In this workshop, you'll be building an Emoji Dictionary that will be able to accurately convert emojis into text strings. We are going to use [demoji library](https://pypi.org/project/demoji) to convert emojis into text strings and [Tkinter library](https://docs.python.org/3/library/tkinter.html) to build a multi-platform User Interface for our dictionary.

**What You'll Learn**
- How to convert Emojis to there Text meaning
- How to build multi-platform UI with Tkinter to make your code look Beautiful

**What You'll Need**
- Zero to Basic knowledge of Python programming language
- Basic knowledge of drawing and color scheme

**Final Dictionary**
- Here's the [demo and code](https://repl.it/@YashKalbande/Emoji-Dictionary#main.py)

# Emoji Dictionary

The word emoji comes from Japanese e (絵, "picture") + moji (文字, "character"). The first emoji 😃 was created in 1999 by Japanese artist Shigetaka Kurita. Kurita worked on the development team for “i-mode,” an early mobile internet platform from Japan’s main mobile carrier, DOCOMO. Ancient Human wear also using Emojis but it was not Emojis but Cave Painting. The Beautiful cave painting gives a glimpse of life in the ancient period. But there is a bit problem with interpreting the emojis🙄🙄. Some time🕑 an emoji is unknown to us and we are not able to understand what someone wants to say. So we are building an Emoji Dictionary where we just need to put emoji in the search box🧐 and we will get the meaning of it. After building the dictionary, to get out from black and white IDE or Terminal we will create a colorful User Interface for our dictionary just like emojis. We will use Tkinter to build UI which will work on any Operating System where Python is present. Tkinter is suited for application to a wide variety of areas ranging from small desktop applications, to use in scientific modeling and research endeavors across various disciplines. The purpose of this project is to make you comfortable with Tkinter. It aims at introducing you to various components of GUI programming with Tkinter.

The features that make Tkinter a great choice for GUI programming include:-
- It is simple to learn (simpler than any other GUI package for Python)
- Relatively little code can produce a powerful GUI application
- Layered design ensures that it is easy to grasp fit is portable across all operating systems is easily accessible as it comes pre-installed with standard Python distribution
- None of the other GUI toolkits has all of these features at the same time.

**We will begin with the following ingredients to cook👨‍🍳👩‍🍳 our workshop:**

1. Installing the Demoji library.

2. Your favorite image, Which will act as our background.

3. Some time to understand and apply concepts rather than just copy and paste!⏰⏰

## 1.) Build Emoji Dictionary

Begin a new Python file using your favorite text editor or go on [repl.it/languages/python3](https://www.repl.it/languages/python3) to start a new coding environment of Python3 to quick start our workshop.
We can install the demoji module by typing `pip install demoji` in the command line and then `demoji.download_codes()` to initial data download from the Unicode Consortium's [emoji code repository](http://unicode.org/Public/emoji/12.0/emoji-test.txt). or edit your new `main.py` with new modular imports:
```python3
import demoji
demoji.download_codes()
```
Text output will show a successful download as following.
![Install Demoji](https://cloud-oce047ev0.vercel.app/21._install_demoji.gif)

The reason that `demoji` requires a download rather than coming pre-packaged with Unicode emoji data is that the emoji list itself is frequently updated and changed. You are free to periodically update the local cache by calling `demoji.download_codes()` every so often.
Let's check is it working or not by declaring variable`text` with any string contains emojis for example see below:
```python3
text = """ #startspreadingthenews Yankees win great start by 🎅🏾 going 5strong innings with 5k’s🔥
🐂solo home run 🌋🌋 with 2 solo home runs and👹 3run homerun.
🤡 🚣🏼 👨🏽‍⚖️ with rbi’s 🔥🔥 🇲🇽 and 🇳🇮 to close the game🔥🔥!!!  WHAT A GAME!! """
print(demoji.findall(text))
```
The output will show up as:
![Trial Run](https://cloud-oce047ev0.vercel.app/32.trial_run.gif)


## 2.) Build User Interface 🚧🚧

### 2.1) Root Window 🖱️🖱️

GUI programming is an art, and like all art, you need a drawing board to capture your ideas. The drawing board you will use is called the root window. Our first goal is to get the root window ready.

The following gif depicts the root window we are going to create:

![root window output](https://cloud-oce047ev0.vercel.app/03.tkinter_.gif)

Drawing the root window is easy. You just need the following three lines of code:
```python
from tkinter import *

window = Tk()

window.mainloop()
```
The description of the code is as follows:

- The first line imports all (*) classes, attributes, and methods of Tkinter into the current workspace.
- The second line creates an instance of the class Tkinter.`Tk`. This creates what is called the "root" window that you see in the screenshot provided. By convention, the root window in Tkinter is usually called "root", but I named it "window" but are free to call it by any other name.
- The third line executes the `mainloop` (that is, the event loop) method of the `rootobject`. The mainloop method is what keeps the root window visible. If you remove the third line, the window created inline 2 will disappear immediately as the script stops running. This will happen so fast that you will not even see the window appearing on your screen. Keeping the mainloop running also lets you keep the program running until you press the close button, which exits the main loop

### 2.2) Widgets – building blocks for your UI ⌨️⌨️

Now that we have our Toplevel window ready, it is time to think over the question, what components should appear in the window? In Tkinter jargon, these components are called widgets

The syntax for adding a widget is as follows:
```python
mywidget = Widget-name (its container window,**configuration options)
```
In the following example below, we will add two widgets, a `Message` and a `Button`, to the root frame. Notice how all widgets are added in between the skeleton code we defined in the first example.

```python
from tkinter import *

window = Tk() 
messageBox = Message(window,text="I am a Message widget") 
button = Button(window,text="I am a button") 
messageBox.pack()
button.pack()

window.mainloop()
```

The format for adding widgets is the same. To give you a flavor, here's some sample code for adding some common widgets:

```python
Label(parent, text=" Enter your Password:")

Button(parent, text="Search")

Checkbutton(parent, text='RememberMe', variable=v, value=True)

Entry(parent, width=30)Radiobutton(parent, text=Male, variable=v, value=1)

Radiobutton(parent, text=Female, variable=v, value=2)

OptionMenu(parent, var, "Select Country", "USA", "UK", "India", Others")

Scrollbar(parent, orient=VERTICAL, command=mytext.yview)
```

Hope you can spot the pattern common to each widget. For our case, we will be using the Entry, Button, Message widgets:

```python
inputBox = Label(window,textvariable="")

button = Button(window,text="Search")

messageBox = Message(window)
```

Let us now turn our attention to the second component of GUI programming—the question of where to place those widgets. This is taken care of by the geometry manager options of Tkinter. This component of GUI programming involves deciding the position of the widget, overall layout, and relative placement of various widgets on the screen.

Geometry managers are as follows:

    pack: Simple to use for simpler layouts but may get very complex for slightly complex layouts.
    grid: This is the most commonly used geometry manager that provides a table-like layout of management features for easy layout management.
    place: This is the least popular, but provides the best control for absolute positioning of widgets.

I'll focus on pack and place since they are the only ones I'll be using.

The pack geometry derives its name from the fact that it packs widgets on a first-come-first-serve basis in the space available in the master frame in which widgets are pushed. The pack geometry manager fits "slave widgets" into "parent spaces". When packing the slave widgets, the pack manager distinguishes between three kinds of spaces:
- The unclaimed space 
- The claimed but unused space
- The claimed and used space

I'll not go over them, for more information, you can read more on that.

The place geometry manager is the most rarely used geometry manager in Tkinter. Nevertheless, it has its uses in that it lets you precisely position widgets within its parent frame using the `X-Y coordinate` system. The place manager can be assessed using the place() method on all standard widgets. The important options for place geometry include:
- Absolute positioning (specified in terms of x=N or y=N)
- Relative positioning (key options include relx, rely, relwidth, and relheight)
- Other options commonly used with the place() include width and anchor (the default is NW)

So let us place our widgets to our main root frame. Now we will add input variable `inputEmoji` to get input form user and search it in our Dictionary. To make code work in loop until we exit window we will add input variable and widgests inside `while loop` by assigning its parameter as `while True:`. Note that there should be correct indentation.

```python
while True:
  inputEmoji = input("Enter your Emoji : ")
  
  inputBox = Label(window,textvariable="")
  inputBox.place(relx=.185,rely=0.70,relwidth=.63,relheight=.082)


  button = Button(window,text="Search")
  button.place(relx=.40,rely=.85,relwidth=.2,relheight=.052)


  messageBox= Message(window)
  messageBox.place(relx=.185,rely=.05,relwidth=.63,relheight=.50)
```

So far, we have relied on Tkinter to provide specific platform-based styling for our widgets. However, you can specify your styling of widgets in terms of their color, font size, border width, and relief

Recall that we could specify widget options at the time of its instantiation as shown:
```python
   mybutton = Button(parent, **configuration options)
```
Alternatively, you could specify widget options using configure ():
```python
   mybutton.configure(**options)
```
Styling options are also specified as options to the widgets, either at the time of instantiation or later using the configure option

```python
inputBox = Label(window,bg="#761137",fg="WHITE",justify = CENTER,font = ('courier', 30, 'bold'))
inputBox.place(relx=.185,rely=0.70,relwidth=.63,relheight=.082)

button = Button(window,text="Search",command= lambda : search(inputBox.get()),relief=FLAT,bg="#00154F",fg="#F4AF1B",font = ('courier', 10, 'bold') )
button.place(relx=.40,rely=.85,relwidth=.2,relheight=.052)


messageBox = Message(window,fg="#F2BC94",relief=FLAT,bg="#30110D",font = ('courier', 20, 'bold'))
messageBox.place(relx=.185,rely=.05,relwidth=.63,relheight=.50)
```

Now that we are done discussing styling options, let us wrap up with a discussion on some commonly used options for the root window:

| Method        | Description|
| ------------- |-------------|
| root.title("title of my program")| 	Specifying the title for the Title bar|
| root.geometry('420x420+150+200') | 	You can specify the size and location of a root window using a string of the form widthxheight + xoffset + yoffset|

For our case we will use the following parameters:-

```python
window.title (" Emoji Dictionary")
window.geometry('420x420+150+200')
```

### 2.3) Window Background 🗔🗔

![Background Image](https://cloud-oce047ev0.vercel.app/1emoji_grid_gray.jpg)

This we just are a brief session on how to integrate the photo as our background image:

We will require Pillow to set our Background so
```python
pip3 install Pillow
```
For `Repl.it` users just import the following modules they will be installed automatically.

From pillow we will require two modules:
```python
from PIL import Image, ImageTk
```
The Image module provides a class with the same name which is used to represent a PIL image. The module also provides several factory functions, including functions to load images from files, and to create new images.

The following script loads an image and displays it using an external viewer (usually xv on Unix, and the Paint program on Windows).
```python
from PIL import Image
image = Image.open("emoji_grid_gray.jpg")
```
The ImageTk module contains support to create and modify Tkinter BitmapImage and PhotoImage objects from PIL images.

A Tkinter-compatible photo image. This can be used everywhere Tkinter expects an image object
```python
class PIL.ImageTk.PhotoImage(image=None, size=None, **kw)
```
For our case:
```python
image = Image.open('emoji_grid_gray.jpg')
photo_image = ImageTk.PhotoImage(image)
label = Label(window, image = photo_image)
label.pack()
```
To display the background image, we will take a label widget, assign it to the image and place it with the pack geometry. As we mentioned in the previous part, this geometry packs widgets on a first-come-first-serve basis in the space available in the master frame in which widgets are pushed. So it should come before the rest of the widgets

Now all is remaining is the functionality part, See you in the next slide.

## 3. Functionality 🖨️🖨️

Next is the search function that will check for the emoji we desire:

```python
def search(word):
    messageBox.config(text = demoji.findall(word))
```

The description of the code is as follows:
The function will pass in the word being searched as its parameter. We check if emoji is present and display output in `labelBox` as a text output.

# The Complete Code 📇📇

```python
from tkinter import *
from PIL import Image, ImageTk
import demoji
demoji.download_codes()

def search(word):
    messageBox.config(text = demoji.findall(word))
    

window = Tk()
window.title (" Emoji Dictionary")
window.geometry('420x420+150+200')

image = Image.open('emoji_grid_gray.jpg')
photo_image = ImageTk.PhotoImage(image)
label = Label(window, image = photo_image)
label.pack()

while True:
  inputEmoji = input("Enter your Emoji : ")
  
  #input of the word to search
  inputBox = Label(window,text = inputEmoji, bg="#761137",fg="WHITE",justify = CENTER,font = ('courier', 30, 'bold'))
  inputBox.place(relx=.185,rely=0.70,relwidth=.63,relheight=.082)

  #seach button to execute command
  button = Button(window,text="Search",command= lambda : search(inputEmoji),relief=FLAT,bg="#00154F",fg="#F4AF1B",font = ('courier', 10, 'bold') )
  button.place(relx=.40,rely=.85,relwidth=.2,relheight=.052)

  #ouput the definition of the emoji
  messageBox = Message(window,fg="#F2BC94",relief=FLAT,bg="#30110D",font = ('courier', 15, 'bold'))
  messageBox.place(relx=.185,rely=.05,relwidth=.63,relheight=.50)


window.mainloop()

```

# Hacking
This program went over the basics of how to make an Emoji Dictionary, there's a lot to be changed! You can use a different library to build your type of Dictionary. Try making Dictionary for your native language like Hindi, French, Spanish, etc. See if you can make the User Interface more Beautiful so you can build your type of Dictionary.

Here are some examples of projects that stem from this project but take it even further:
- **Text to Emoji Dictionary** [Demo and Code](https://repl.it/@YashKalbande/textToEmoji)
- **Emoticon to Text Dictionary** [Demo and Code](https://repl.it/@YashKalbande/EmoticonToText)
- **Word Dictionary** [Demo and Code](https://repl.it/@YashKalbande/Word-Dictionary#main.py)
