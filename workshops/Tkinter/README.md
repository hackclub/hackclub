---
name: "To Quote or Not To Quote?"
description: "Let's build a slideshow of quotes with Tkinter and Python!"
author: "@bezlin6mechminerz"
---

The workshop will look something like this.

![ezgif.com-video-to-gif-3.gif](https://cloud-beibqb64y.vercel.app/ezgif.com-video-to-gif-3.gif)

So we will be making this software. A quotes hub which displays quotes.

View a [live_demo](https://repl.it/@bezlin/graphics#main.py)

View the [final_code](https://repl.it/@bezlin/graphics#main.py)

This workshop will take 20 minutes.

## Getting started

We will be using [Tkinter](https://docs.python.org/3/library/tk.html) python library to develop the user interface.

### Setting up the environment for Tkinter

[Repl.it](https://repl.it) We will be using it for coding. This is awesome because you no need to install python on your machine. Just go to this link.

To get started, go to https://repl.it/languages/Tkinter. Your coding environment will be ready in a few seconds!
<img width="1440" alt="Screenshot 2020-09-18 at 5 39 06 PM" src="https://cloud-o8q46nkko.vercel.app/screenshot_2020-09-25_at_9.23.06_pm.png">

## What is Tkinter

Python offers multiple options for developing GUI (Graphical User Interface). Out of all the GUI methods, tkinter is the most commonly used method. It is used to make softwares and Graphical User interfaces for your python code.

## Code and explanation.

Go to repl and then lets get started. Coding along is good than going through all this stuff and then getting to code.
![vedio](https://cloud-1h9458u6z.vercel.app/54_blog_image_13.gif)
So inorder to make the quote hub we need to import the library tkinter.

```python
import tkinter as tk
```

Import Tkinter means we are importing a python library which is Tkinter here. Also for ease, we imported Tkinter as tk so that we no need to repeat that big word Tkinter every time. Instead, we can use tk. Now we can start by making a window for that we need to write this code.

```python
window=tk.Tk()
```

Here we have made a variable "window" and this is going to be our window. We need to name our window right? So we named it as window itself. Now we need to adjust the size of the window for that we use this code.

```python
window.minsize(800,560)
```

This function takes 2 parameters the height and the width. It is measured as pixels like CSS but here we no need to specify px or any other units because the Tkinter knows that the parameters are to be taken as pixels so we can simply give minsize(800,600). So here we give 800px of width and 600px of height for our window. You can give any height and width as you like. Now we need a title for our window so we can set it by this code.

```python
window.title("Quotes Hub")
```

You can specify the name of the window inside the function in quotes. Now lets give the window a color . If you like white which is default here go with it or take this setup.

```python
window.config(bg="black")
```

I give black. You can also specify the color in hex code Tkinter will accept it. RGB too.
window.config means we are configuring our window and setting up its bg which is a short form for a background. Now lets display Quotes hub in the window we made For that we use Label function .

```python
tk.Label(window, font=("Helvetica", 60, "bold"),text="QUOTES HUB", bg="black", fg="white").pack()
```

The Label function. It is used to display text on the window. The Label function take parameters such as font, text,background color(bg) ,font color(fg) .The first parameter you should give is the name of the window in which you need this text to be displayed. (.pack()) function packs the text at the center layout. Now lets make a button to move to a page where we see our first quote.

```python
tk.Button(window,command=fun1,text="Get In",bg="aqua",fg="black",width=20).place(x=315,y=300)
```

The Tkinter library consists of A Button function which is used to display a button on the window. The button function also takes many parameters such as text,bg,fg,width,height etc... The first parameter you should give is the window in which you need this button to be displayed. Place() function is used to place the element in the particular coordinate we need an example- button.place(x,y). The main thing here is the command parameter inside the button function this represents the action to take after clicking the button. We can make a function run when clicking on the button using command=the function name. We will be creating the function later.

```python
window.mainloop()
```

window.mainloop() tells Python to run the Tkinter event loop. ... mainloop() at the end of a program in a Python file, then the Tkinter application will never run, and nothing will be displayed.

###### Now the code will look like this.

```python
import tkinter as tk
window = tk.Tk()
window.minsize(800, 560)
window.title("Simple UI")
window.config(bg="black")
tk.Label(window, font=("Helvetica", 60, "bold"), text="QUOTES HUB", bg="black",fg="white").pack()
tk.Button(window,command=fun1,text="Get In",bg="aqua",fg="black",width=20).place(x=315,y=300)
window.mainloop()
```

As output, this will show an error that the function fun1 is not declared. So let us make the button work. You need to put this code abouve the window declaration then only it will work.

```python
def fun1():
  F1=tk.Frame(window,bg="light salmon",width=800,height=560).place(x=0,y=0)
  tk.Label(F1,text="Creativity \nis \nintelligence \nhaving \nFun.",font=("Helvetica", 30, "bold"),bg="light salmon",fg="black").pack()
  tk.Button(F1,command=fun2,text="Next",bg="aqua",fg="black",width=20).place(x=612,y=530)
```

In this function, we are showing up a new page in which we display a quote and a next button. As pages, we are using the Frame function. A Frame widget is used to organize a group of widgets. It acts like a container that can be used to hold the other widgets. The rectangular areas of the screen are used to organize the widgets to the python application. Then in that frame, we display the quote at the center using the label function. Then we create a next button and give it a command fun2. Now let us create that function.

```python
def fun2():
   F2=tk.Frame(window,bg="light salmon",width=800,height=560).place(x=0,y=0)
   tk.Label(F2,text="If the plan \ndoesn’t work, \nchange the plan,\n but never the \ngoal.",font=("Helvetica", 30, "bold"),bg="light salmon",fg="black").place(x=200,y=100)
   tk.Button(F2,command=fun3,text="Next",bg="aqua",fg="black",width=20).place(x=612,y=530)
```

This function will be the next page with another quote. If you don't understand just go to the live demo and feel the button workflow [here](https://repl.it/@bezlin/graphics#main.py). Ok in this function same as before we are creating a frame and in it, we will displaying another quote and a next button. Like that we have created 5 pages. On the last page, you can avoid the next button.

You need to create more functions according to how much pages you want thats it pretty cool.

#### Finally the code will look like this.

```python
import tkinter as tk
def fun1():
  F1=tk.Frame(window,bg="light salmon",width=800,height=560).place(x=0,y=0)
  tk.Label(F1,text="Creativity \nis \nintelligence \nhaving \nFun.",font=("Helvetica", 30, "bold"),bg="light salmon",fg="black").pack()
  tk.Button(F1,command=fun2,text="Next",bg="aqua",fg="black",width=20).place(x=612,y=530)
def fun2():
  F2=tk.Frame(window,bg="light salmon",width=800,height=560).place(x=0,y=0)
  tk.Label(F2,text="If the plan \ndoesn’t work, \nchange the plan,\n but never the \ngoal.",font=("Helvetica", 30, "bold"),bg="light salmon",fg="black").place(x=200,y=100)
  tk.Button(F2,command=fun3,text="Next",bg="aqua",fg="black",width=20).place(x=612,y=530)
def fun3():
  F3=tk.Frame(window,bg="light salmon",width=800,height=560).place(x=0,y=0)
  tk.Label(F3,text="Avoiding failure\n is to avoid \nprogress.",font=("Helvetica", 30, "bold"),bg="light salmon",fg="black").place(x=200,y=100)
  tk.Button(F3,command=fun4,text="Next",bg="aqua",fg="black",width=20).place(x=612,y=530)
def fun4():
  F4=tk.Frame(window,bg="light salmon",width=800,height=560).place(x=0,y=0)
  tk.Label(F4,text="Sometimes\n you win,\n sometimes \nyou learn.",font=("Helvetica", 30, "bold"),bg="light salmon",fg="black").place(x=240,y=100)
  tk.Button(F4,command=fun5,text="Next",bg="aqua",fg="black",width=20).place(x=612,y=530)
def fun5():
  F5=tk.Frame(window,bg="light salmon",width=800,height=560).place(x=0,y=0)
  tk.Label(F5,text="Instead of wondering when your \nnext vacation is, maybe you \nshould set up a life you don’t \nneed to escape from.",font=("Helvetica", 30, "bold"),bg="light salmon",fg="black").place(x=30,y=100)
window = tk.Tk()
window.minsize(800, 560)
window.title("Simple UI")
window.config(bg="black")
tk.Label(window, font=("Helvetica", 60, "bold"),text="QUOTES HUB", bg="black", fg="white").pack()
tk.Button(window,command=fun1,text="Get In",bg="aqua",fg="black",width=20).place(x=315,y=300)
window.mainloop()

```

Its simple just go through the functions and workflow.

![ezgif com-gif-to-mp4](https://cloud-5m2nwfs8r.vercel.app/ezgif.com-video-to-gif-4.gif)

## Step 4: Your Custom Part

Now you know Tkinter a little bit. You should not stop here in order to learn more and master in UIs you need to practice a lot. The best way to learn it is to look at the world and think of an idea then try to make it.

## Lastly don't get stuck.

I am attaching the Tkinter documentation take a look at [Learn Tkinter](https://docs.python.org/3/library/tk.html).
Also if you are new to python take a look at [python](https://www.python.org/doc/) documentation too

### Softwares made using Tkinter by other hackers.

[ANUPRIYA SHAJI](https://repl.it/@Anupriya567/qtshb#main.py)

[HARIPRASAD RAJAN](https://repl.it/@HariprasadR03/haroadas#main.py)

[KK HARIDEV](https://repl.it/@DandaThor/harri-kkkkk#main.py)

[BEZLIN JOHNSON](https://repl.it/@bezlin/graphics#main.py)

## Big platforms made using Tkinter

[Billing softwares](https://code-projects.org/food-billing-system-in-python-with-source-code/)

[LMS(Learning Management Softwares)](https://data-flair.training/blogs/library-management-system-python-project/)

#### After building share your repl link to all communities don't forget about slack and make everyone know the piece of work you have done.

![made_it](https://cloud-a58thexdk.vercel.app/tenor.gif)

Yes You made it.
