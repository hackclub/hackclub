---
name: "To Quote or Not To Quote?"
description: "Let's build a slideshow of quotes with Tkinter and Python!"
author: "@bezlin6mechminerz"
---

Having user interfaces are very useful because it gives the user good interactive experiences. So today we will see how to make a simple user interface with python in this workshop.

The workshop will look something like this.

![ezgif.com-video-to-gif-3.gif](https://cloud-ilsfagjwp.vercel.app/ezgif.com-video-to-gif-5.gif)

So we will be making a quotes hub which displays quotes.

View a [live demo](https://repl.it/@bezlin/trialtkinterpy-2#main.py)

View the [final code](https://repl.it/@bezlin/trialtkinterpy-2#main.py)

This workshop will take 20 minutes.

## Getting started

We will be using [Tkinter](https://docs.python.org/3/library/tk.html) a python library to develop the user interface. This project requires [Repl.it](https://repl.it) We will be using it for coding. This is awesome because you no need to install python on your machine. Just go to this link.

To get started, [click here](https://repl.it/languages/Tkinter). Your coding environment will be ready in a few seconds!
<img width="1440" alt="Screenshot 2020-09-18 at 5 39 06 PM" src="https://cloud-o8q46nkko.vercel.app/screenshot_2020-09-25_at_9.23.06_pm.png">

#### What is Tkinter?

Tkinter is a library in python used to make cool User Interfaces. What the user sees on the screen to interact with is called a user interface. So here we will use this library (Tkinter) to make it.

## Code and explanation.

Go to repl and then let's get started. Coding along is good than going through all this stuff and then getting to code.
![vedio](https://cloud-1h9458u6z.vercel.app/54_blog_image_13.gif)

So to make the quote hub we need to import the library Tkinter.

```python
import tkinter as tk
```

Import Tkinter means we are importing a python library which is Tkinter here. Also for ease, we imported Tkinter as tk so that we no need to repeat that big word Tkinter every time. Instead, we can use tk. We also need another library called random. Let's import it.

```python
import random
```

This library as it spells is used for making random choices. Here we need to display the quotes random so we need to import it. Now let's make a list of quotes.

```python
quotelist = ["Instead of wondering when your \nnext vacation is, maybe you \nshould set up a life you don’t \nneed to escape from.",
"Sometimes\n you win,\n sometimes \nyou learn.",
"Avoiding failure\n is to avoid \nprogress.",
"If the plan \ndoesn’t work, \nchange the plan,\n but never the \ngoal.",
"Creativity \nis \nintelligence \nhaving \nFun."]
```

We are declaring a variable here named quote list and assigning a list of quotes to it.

Now let's make a window for that we need to write this code.

```python
window=tk.Tk()
```

Here we have made a variable "window" and this is going to be our window. We need to name our window right? So we named it as the window itself. Now we need to adjust the size of the window for that we use this code.

```python
window.minsize(800,560)
```

This function takes 2 parameters the height and the width. It is measured as pixels like CSS but here we no need to specify px or any other units because the Tkinter knows that the parameters are to be taken as pixels so we can simply give minsize(800,600). So here we give 800px of width and 600px of height for our window. You can give any height and width as you like. Now we need a title for our window so we can set it by this code.

```python
window.title("Quotes Hub")
```

You can specify the name of the window inside the function in quotes. Now, let's give the window color. If you like white which is the default here go with it or take this setup.

```python
window.config(bg="black")
```

I give black. You can also specify the color in hex code Tkinter will accept it. RGB too.
window.config means we are configuring our window and setting up its bg which is a short form for a background. Now let's display the Quotes hub in the window we made For that we use the Label function.

```python
tk.Label(window, font=("Helvetica", 60, "bold"),text="QUOTES HUB", bg="black", fg="white").pack()
```

The Label function. It is used to display text on the window. The Label function take parameters such as font, text,background color(bg) ,font color(fg) .The first parameter you should give is the name of the window in which you need this text to be displayed.

```python
font=("Helvetica", 60, "bold")
```

Here in this piece of code, we are setting up the style of the text. font=("font name", size of the font, font-weight)

(.pack()) function packs the text at the center layout. Now let's make a button to move to a page where we see our first quote.

```python
tk.Button(window,command=lambda:fun1(random.choice(quotelist)),text="Get In",bg="aqua",fg="black",width=20).place(x=315,y=300)
```

The Tkinter library consists of A Button function which is used to display a button on the window. The button function also takes many parameters such as text,bg,fg,width,height etc... The first parameter you should give is the window in which you need this button to be displayed. Place() function is used to place the element in the particular coordinate we need an example- button.place(x,y). The main thing here is the command parameter inside the button function

```python
command=lambda:fun1(random.choice(quotelist))
```

This represents the action to take after clicking the button. We can make a function run when clicking on the button using command= function. If you don't use Lambda here then the function will run immediately when you run the code. You don't want to go to the quote suddenly when you run the code right? So to prevent that we use lambda. Then comes the function you want to execute. Here we are calling a function fun1()and passing the parameter. Here the parameter is the random quote. We need to pick a random quote from our quote list we assigned above for that we use random function .choice (quotelist).

```python
window.mainloop()
```

window.mainloop() tells Python to run the Tkinter event loop. ... mainloop() at the end of a program in a Python file, then the Tkinter application will never run, and nothing will be displayed.

###### Now the code will look like this.

```python
import tkinter as tk
import random

quotelist = ["Instead of wondering when your \nnext vacation is, maybe you \nshould set up a life you don’t \nneed to escape from.","Sometimes\n you win,\n sometimes \nyou learn.","Avoiding failure\n is to avoid \nprogress.","If the plan \ndoesn’t work, \nchange the plan,\n but never the \ngoal.","Creativity \nis \nintelligence \nhaving \nFun."]
window = tk.Tk()
window.minsize(800, 560)
window.title("Quotes Hub")
window.config(bg="black")
tk.Label(window, font=("Helvetica", 60, "bold"),
         text="QUOTES HUB", bg="black", fg="white").pack()
tk.Button(window,command=lambda:clicked(random.choice(quotelist)),text="Get In",bg="aqua",fg="black",width=20).place(x=315,y=300)
window.mainloop()
```

As output, this will show an error that the function clicked is not declared. So let us make the button work. You need to put this code above the window declaration then only it will work.

```python
def clicked(quote):
```

In this function, we are showing up a new page in which we display a random quote. As a page, we are using the Frame function.

```python
F1=tk.Frame(window,bg="light salmon",width=800,height=560)
F1.place(x=0,y=0)
```

A Frame function is used to organize a group of widgets. It acts like a container that can be used to hold the other widgets. The rectangular areas of the screen are used to organize the widgets to the python application. Then in that frame, we display the quote at the center using the label function.

```python
tk.Label(F1,text=quote,font=("Helvetica", 30,"bold"),bg="light salmon",fg="black").pack()
```

We have passed the random quote to this function

```python
text=quote
```

Here we gave text as the quote passed from the button

If you don't understand just go to the live demo and feel the button workflow [here](https://repl.it/@bezlin/graphics#main.py).

#### Finally the code will look like this.

```python
import tkinter as tk
import random

quotelist = ["Instead of wondering when your \nnext vacation is, maybe you \nshould set up a life you don’t \nneed to escape from.","Sometimes\n you win,\n sometimes \nyou learn.","Avoiding failure\n is to avoid \nprogress.","If the plan \ndoesn’t work, \nchange the plan,\n but never the \ngoal.","Creativity \nis \nintelligence \nhaving \nFun."]

def clicked(quote):
  F1=tk.Frame(window,bg="light salmon",width=800,height=560)
  F1.place(x=0,y=0)
  tk.Label(F1,text=quote,font=("Helvetica", 30, "bold"),bg="light salmon",fg="black").pack()
window = tk.Tk()
window.minsize(800, 560)
window.title("Quotes Hub")
window.config(bg="black")
tk.Label(window, font=("Helvetica", 60, "bold"),
         text="QUOTES HUB", bg="black", fg="white").pack()
tk.Button(window,command=lambda:clicked(random.choice(quotelist)),text="Get In",bg="aqua",fg="black",width=20).place(x=315,y=300)
window.mainloop()

```

Its simple just go through the functions and workflow.

![ezgif com-gif-to-mp4](https://cloud-5m2nwfs8r.vercel.app/ezgif.com-video-to-gif-4.gif)

## Hacking time!

Now you know Tkinter a little bit. You should not stop here to learn more and master in UIs you need to practice a lot. The best way to learn it is to look at the world and think of an idea then try to make it.

Lastly don't get stuck.

I am attaching the Tkinter documentation take a look at [Learn Tkinter](https://docs.python.org/3/library/tk.html).
Also if you are new to python take a look at [python](https://www.python.org/doc/) documentation too

### Softwares made using Tkinter by other hackers.

[Hariprasad Rajan](https://repl.it/@HariprasadR03/haroadas#main.py)

[Kk Haridev](https://repl.it/@DandaThor/harri-kkkkk#main.py)

[Aswin Prakash](https://repl.it/@AswinPrakash/VirtualIncomparableLegacysystem#main.py)

[Bezlin Johnson](https://repl.it/@bezlin/trialtkinterpy#main.py)

[Anupriya Shaji](https://repl.it/@Anupriya567/qtshb#main.py)

## Big platforms made using Tkinter

[Billing softwares](https://code-projects.org/food-billing-system-in-python-with-source-code/)

[LMS(Learning Management Softwares)](https://data-flair.training/blogs/library-management-system-python-project/)

#### After building share your repl link to all communities don't forget about slack and make everyone know the piece of work you have done.

![made_it](https://cloud-a58thexdk.vercel.app/tenor.gif)

Yes, You made it.
