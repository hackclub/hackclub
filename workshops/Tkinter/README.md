---
name:'Creating a UI with Tkinter.'
description:'We will use python tkinter graphics to make User Interfaces. Its a nice world.'
author: '@Bezlin Johnson'
---

# Final User Interface or UI.

<img width="539" alt="Screenshot 2020-09-19 at 11 28 35 AM" src="https://user-images.githubusercontent.com/54895485/93660382-e47c0880-fa6b-11ea-8f9a-94f476991652.png">

This will be the simple UI we will be making today. This is nice world we can even make cool softwares with this .
Here is the [live_demo](https://repl.it/@bezlin/graphics#main.py) and [final_code](https://repl.it/@bezlin/graphics#main.py) (see src/app.js and public/app.css files).
This workshop will take 50 minutes.
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/54895485/93660884-07f58200-fa71-11ea-8bbd-44b10c7624b5.gif)

## Step 1 : SETUP

We will be using Tkinter python library to develop the user Interface.

### Setting up the environment for Tkinter

[Repl.it](https://repl.it) is a simple yet powerful online IDE, Editor, Compiler, Interpreter, and REPL. Code, compile, run, and host in 50+ programming languages.So it is super awesome.

To get started, go to https://repl.it/languages/Tkinter. If you cant find it just type it in the type box. Your coding environment will be ready in a few seconds!
<img width="1440" alt="Screenshot 2020-09-18 at 5 39 06 PM" src="https://user-images.githubusercontent.com/54895485/93595705-dbd8f300-f9d5-11ea-8bfa-a26e407adeaf.png">

## Step 2: Know the basics of Tkinter

Tkinter is a Python binding to the Tk GUI toolkit. It is the standard Python interface to the Tk GUI toolkit, and is Python's de facto standard GUI. Tkinter is included with standard Linux, Microsoft Windows and Mac OS X installs of Python. The name Tkinter comes from Tk interface.
Why Tkinter?
Tkinter provides a powerful object-oriented interface to the Tk GUI toolkit. Which can be customised and can look better.

## Step 3: Code and explanation.

<img width="961" alt="Screenshot 2020-09-18 at 6 06 14 PM" src="https://user-images.githubusercontent.com/54895485/93598005-a6ce9f80-f9d9-11ea-86f6-60226b8a37f2.png">

### L1(line-1):

<img width="963" alt="import" src="https://user-images.githubusercontent.com/54895485/93660459-cfec4000-fa6c-11ea-8a8a-eb6954e1982d.png">
Import tkinter means we are importing a python library which is tkinter here . Actually someone clever made this library and made it open source. So we need to import it to our code to use it. Also for ease we imported tkinter as tk so that we no need to repeat that big word tkinter everytime. Instead we can use tk.

### For now lets skip L2 and L3 lets look at L4.

<img width="963" alt="window" src="https://user-images.githubusercontent.com/54895485/93660472-edb9a500-fa6c-11ea-9902-0a18f805aff2.png">

Here we have made a variable "window" and this is going to be our window. We need to make a window right . We are making a user interface so a window is needed. window=tk.Tk it means the tkinter developer already made a window and named it as Tk so we need to refer to that window and use the variable window as our window . So it means window = the library.the original window.

### L5

<img width="963" alt="window minsize" src="https://user-images.githubusercontent.com/54895485/93660479-0033de80-fa6d-11ea-9540-a790d2aee4cf.png">

Now we named our window as window .So we can adjust the size of the window .For that we use the function minsize(). This function takes 2 parameters the height and the width. It is measured as pixels like css but here we no need to specify px or any other units because the tkinter knows that the parameters are to be taken as pixels so we can simple give minsize(800,600) .So here we give 800px of width and 600px of height for our window.

### L6

<img width="963" alt="title" src="https://user-images.githubusercontent.com/54895485/93660512-61f44880-fa6d-11ea-8278-7ebc515ee984.png">
Now we can set a title for our window. For that we use title() function .You can specify the name of the window inside the function in quotes.

### L7

<img width="963" alt="config" src="https://user-images.githubusercontent.com/54895485/93660514-70426480-fa6d-11ea-8ae7-e5b7e755e0b1.png">

In this line we are setting a background color to our window in this case i give black .You can also specify the color in hex code tkinter will accept it. Also is RGB too.
window.config means we are configuring our window and setting up its bg which is short form for background.

### L8

<img width="963" alt="Label" src="https://user-images.githubusercontent.com/54895485/93660525-82240780-fa6d-11ea-9ba5-2ce4ff79d6c5.png">
This is a big line right? Dont worry its simple like css .Here we are making a text which is to be displayed in the window. So for that we use Label() Function. In order to make use of label function we need to call it. So we need to refer to the library first and call the object Label like this=> tk.Label() thats it .Inside this function we need to specify the window which we want this to be displayed . So for here it is window then we need to specify the text to be displayed in the window for that we use a keyword "text" so we can say our Label that the text to be displayed = the variable text. Like css we can also change the font ,font color,font size,font weight,background etc... so for that we need to use font() function in which we specify the font name , then the size of the font needed. Now fg stands for foreground which means the font color. After the function is set up we need to place it in the screen right? . Now we have made many configurations in the Label but the system now dont know where to keep it in the screen so for that we use place() function. This function allows us to place the element in almost anywhere of the screen by x y axis. We only need to specify the x and y cordinate we need them to be seen.

### L9

<img width="963" alt="entry" src="https://user-images.githubusercontent.com/54895485/93660532-949e4100-fa6d-11ea-8e3e-71278548b1b4.png">

So you have seen the input box in the output right?. Lets make it for this we use Entry() function this also needs to be called from the main library. This function return a value which is our text we are typing in it and we need to store it. So we keep it under a variable so we used w=tk.Entry here w is the variable that stores what we type. Inside the Entry() function we need to specify the window we need to display it .
then the width of the Entry field then the font like said before.

### L10

<img width="963" alt="w" src="https://user-images.githubusercontent.com/54895485/93660584-3aea4680-fa6e-11ea-99ad-e3571e529084.png">
We need to place the entry widget in our screen so we should by giving x and y

#### Note:

Here we need to be carefull we must use w.place because of the function returning value.

### L11

<img width="963" alt="button" src="https://user-images.githubusercontent.com/54895485/93660588-45a4db80-fa6e-11ea-9085-de41c4bf1a1f.png">
This line is big dont worry its also simple. Here we need a button to submit it right?
For that lets call the Button() function. Inside this function we need to specify the window aswell, Then we need another function command which means same as onClick is js . This does the action when we click on the button. Actually it calls the function Display which is described in the lines L2 and L3. The next keyword is text you know what it is. Then font you know that too, Then comes the width and height here you can give the width and height of the button as integers. Then as usual we need to place it using place() function.

### L12

<img width="963" alt="mainloop" src="https://user-images.githubusercontent.com/54895485/93660596-535a6100-fa6e-11ea-81c0-9ed48cbb4559.png">

mainloop() is an infinite loop used to run the application, wait for an event to occur and process the event as long as the window is not closed.
This is a loop so it needs to be repeated until we close the window thats it .

### L2

<img width="959" alt="Screenshot 2020-09-19 at 11 51 33 AM" src="https://user-images.githubusercontent.com/54895485/93660618-83a1ff80-fa6e-11ea-947a-4afd6c307e05.png">
This is the function which executes when we press the submit button because we specified command = this function.

### L3

<img width="959" alt="Screenshot 2020-09-19 at 11 51 47 AM" src="https://user-images.githubusercontent.com/54895485/93660624-90beee80-fa6e-11ea-9bf7-327411e77ab4.png">
 
Now we need to print what we typed right? .For now lets print it in the terminal/CMD so we use print(then we need to get the value of w variable we defined inorder to collect the typing data.) for that we use get function.
![ezgif com-gif-to-mp4](https://user-images.githubusercontent.com/54895485/93177183-087bd900-f750-11ea-8df0-966f196b88cb.gif)
## Now you have made the simple UI.

Here is the challenge for you .WE MADE THE UI AND PRINTED THE TYPINGS IN TERMINAL .YOU NEED TO PRINT IT IN THE SCREEN ITSELF.

## Step 4: Your Custom Part

Now you know Tkinter a little bit . You should not stop here inorder to learn more and master in UIs you need to practice a lot. The best way to learn it is to look at the world and think of an idea then try to make it. You will learn Tkinter soon because its simple .

## Lastly dont stuck here i will come up with more workshops to make you know that tkinter is actually cool.
I am attaching the Tkinter documentation take a look [Learn Tkinter](https://docs.python.org/3/library/tk.html).
Also if you are new to python take a look at [python](https://www.python.org/doc/) documentation too 
### Softwares made using Tkinter by other hackers.

[Hariprasad rajan](https://repl.it/@HariprasadR03/hackthon#main.py)
[Anupriya shaji](https://repl.it/@Anupriya567/qtshb#main.py)
[kk Haridev](https://repl.it/@DandaThor/h#main.py)
[Bezlin Johnson](https://repl.it/@bezlin/graphics)

## Big platforms made using Tkinter

Billing softwares
LMS(Learning Management Softwares)
Solar Quest(Energy consemption readings)

### After building share your repl link to all communities dont forget about slack and make everyone know the piece of work you have done.
