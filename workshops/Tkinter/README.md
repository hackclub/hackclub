---
name: 'Creating a UI with Tkinter.'
description: 'We will make a little software with a Designed Graphical User Interface today that ask for a text and prints it.'
author: '@bezlin6mechminerz'
---

# Final Output.

<img width="539" alt="Screenshot 2020-09-19 at 11 28 35 AM" src="https://user-images.githubusercontent.com/54895485/93660382-e47c0880-fa6b-11ea-8f9a-94f476991652.png">
So we will be making this software which has a text field and people can write anything there and it prints it.
This will be the simple UI we will be making today. This is nice world we can even make cool softwares with this .
Here is the [live_demo](https://repl.it/@bezlin/graphics#main.py) and [final_code](https://repl.it/@bezlin/graphics#main.py) (see src/app.js and public/app.css files).
This workshop will take 50 minutes.
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/54895485/93660884-07f58200-fa71-11ea-8bbd-44b10c7624b5.gif)

## Step 1 : SETUP

We will be using [Tkinter](https://docs.python.org/3/library/tk.html) python library to develop the user Interface.

### Setting up the environment for Tkinter

[Repl.it](https://repl.it) We will be using it for coding .This is awesome because you no need to install python on your machine. Just go to this link.

To get started, go to https://repl.it/languages/Tkinter. Your coding environment will be ready in a few seconds!
<img width="1440" alt="Screenshot 2020-09-18 at 5 39 06 PM" src="https://user-images.githubusercontent.com/54895485/93595705-dbd8f300-f9d5-11ea-8bfa-a26e407adeaf.png">

## Step 2: Know the basics of Tkinter

Tkinter is a Python binding to the Tk GUI toolkit. It is the standard Python interface to the Tk GUI toolkit, and is Python's de facto standard GUI. Tkinter is included with standard Linux, Microsoft Windows and Mac OS X installs of Python. The name Tkinter comes from Tk interface.
Why Tkinter?
Tkinter provides a powerful object-oriented interface to the Tk GUI toolkit. Which can be customised and can look better.

## Step 3: Code and explanation.
### L1(line-1):

`import tkinter as tk`
Import tkinter means we are importing a python library which is tkinter here . Actually someone clever made this library and made it open source. So we need to import it to our code to use it. Also for ease we imported tkinter as tk so that we no need to repeat that big word tkinter everytime. Instead we can use tk.

### L2

`window=tk.Tk()`

Here we have made a variable "window" and this is going to be our window. We need to make a window right . We are making a user interface so a window is needed. window=tk.Tk it means the tkinter developer already made a window and named it as Tk so we need to refer to that window and use the variable window as our window . So it means window = the library.the original window.

### L3

`window.minsize(800,560)`

Now we named our window as window .So we can adjust the size of the window .For that we use the function minsize(). This function takes 2 parameters the height and the width. It is measured as pixels like css but here we no need to specify px or any other units because the tkinter knows that the parameters are to be taken as pixels so we can simple give minsize(800,600) .So here we give 800px of width and 600px of height for our window.

### L4

`window.title("Simple UI")`
Now we can set a title for our window. For that we use title() function .You can specify the name of the window inside the function in quotes.

### L5

`window.config(bg="black")`

In this line we are setting a background color to our window in this case i give black .You can also specify the color in hex code tkinter will accept it. Also is RGB too.
window.config means we are configuring our window and setting up its bg which is short form for background.

### L6

`tk.Label(window,text="Enter Something Here.",font=("Helvetica",30),fg="blue",bg="black").place(x=145,y=48)`
This is a big line right? Dont worry its simple like css .Here we are making a text which is to be displayed in the window. So for that we use Label() Function. In order to make use of label function we need to call it. So we need to refer to the library first and call the object Label like this=> tk.Label() thats it .Inside this function we need to specify the window which we want this to be displayed . So for here it is window then we need to specify the text to be displayed in the window for that we use a keyword "text" so we can say our Label that the text to be displayed = the variable text. Like css we can also change the font ,font color,font size,font weight,background etc... so for that we need to use font() function in which we specify the font name , then the size of the font needed. Now fg stands for foreground which means the font color. After the function is set up we need to place it in the screen right? . Now we have made many configurations in the Label but the system now dont know where to keep it in the screen so for that we use place() function. This function allows us to place the element in almost anywhere of the screen by x y axis. We only need to specify the x and y cordinate we need them to be seen.

### L7

`w=tk.Entry(window,width=20,font=("Helvetica",30))`

So you have seen the input box in the output right?. Lets make it for this we use Entry() function this also needs to be called from the main library. This function return a value which is our text we are typing in it and we need to store it. So we keep it under a variable so we used w=tk.Entry here w is the variable that stores what we type. Inside the Entry() function we need to specify the window we need to display it .
then the width of the Entry field then the font like said before.

### L8

`w.place(x=150,y=100)`
We need to place the entry widget in our screen so we should by giving x and y

#### Note:

Here we need to be carefull we must use w.place because of the function returning value.

### L9

`tk.Button(window,command=display,text="Submit",font=("Helvetica",20),width=10,height=1).place(x=300,y=200)`
This line is big dont worry its also simple. Here we need a button to submit it right?
For that lets call the Button() function. Inside this function we need to specify the window aswell, Then we need another function command which means same as onClick is js . This does the action when we click on the button. Actually it calls the function Display which is described in the lines L2 and L3. The next keyword is text you know what it is. Then font you know that too, Then comes the width and height here you can give the width and height of the button as integers. Then as usual we need to place it using place() function.

### L10

`window.mainloop()`

mainloop() is an infinite loop used to run the application, wait for an event to occur and process the event as long as the window is not closed.
This is a loop so it needs to be repeated until we close the window thats it .

### L11

`def display():`
This is the function which executes when we press the submit button because we specified command = this function.

### L12

`  print(w.get())`
 
Now we need to print what we typed right? .For now lets print it in the terminal/CMD so we use print(then we need to get the value of w variable we defined inorder to collect the typing data.) for that we use get function.
![ezgif com-gif-to-mp4](https://user-images.githubusercontent.com/54895485/93177183-087bd900-f750-11ea-8df0-966f196b88cb.gif)
## Now you have made the simple UI.

Here is the challenge for you .We made the UI and printed the typings in terminal. You need to print it in the screen itself.

## Step 4: Your Custom Part

Now you know Tkinter a little bit . You should not stop here inorder to learn more and master in UIs you need to practice a lot. The best way to learn it is to look at the world and think of an idea then try to make it. You will learn Tkinter soon because its simple .

## Lastly dont stuck here i will come up with more workshops to make you know that tkinter is actually cool.
I am attaching the Tkinter documentation take a look [Learn Tkinter](https://docs.python.org/3/library/tk.html).
Also if you are new to python take a look at [python](https://www.python.org/doc/) documentation too 
### Softwares made using Tkinter by other hackers.

[HARIPRASAD RAJAN](https://repl.it/@HariprasadR03/hackthon#main.py)
[ANUPRIYA SHAJI](https://repl.it/@Anupriya567/qtshb#main.py)
[KK HARIDEV](https://repl.it/@DandaThor/h#main.py)
[BEZLIN JOHNSON](https://repl.it/@bezlin/graphics)

## Big platforms made using Tkinter

[Billing softwares](https://code-projects.org/food-billing-system-in-python-with-source-code/)
[LMS(Learning Management Softwares)](https://github.com/TheThunderB0lt/LMS/)

### After building share your repl link to all communities dont forget about slack and make everyone know the piece of work you have done.
