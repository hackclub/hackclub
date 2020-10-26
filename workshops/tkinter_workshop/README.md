---
name: "To Quote or Not To Quote?"
description: "Let's build a slideshow of quotes with Tkinter and Python!"
author: "@bezlin6mechminerz"
---

Having a user interface is very useful because it gives both a good interactive experience for the user and makes it much more visually appealing. So let's see how to make a simple user interface with Python. In this workshop, we will be using Python to make a slideshow of quotes.

The workshop will look something like this.

![Output video](https://cloud-rbupe5aas.vercel.app/0ezgif.com-video-to-gif-2.gif)

View a [live demo](https://repl.it/@bezlin/trialtkinterpy-2#main.py)

View the [final code](https://repl.it/@bezlin/trialtkinterpy-2#main.py)

This workshop will take about 20 minutes.

## Getting started

[Tkinter](https://docs.python.org/3/library/tk.html) is a library in Python used to make visual User Interfaces (UI). In this workshop, we’ll use it to make our Quotes Hub interface.

To code this workshop, we'll be using [Repl.it](https://repl.it), a free, online code editor. To get started, [click here](https://repl.it/languages/Tkinter). Your coding environment will be ready in a few seconds!
<img alt="repl.it image" src="https://cloud-o8q46nkko.vercel.app/screenshot_2020-09-25_at_9.23.06_pm.png">

## Code and explanation

Lots of beginners make endless changes to their code and expect it to miraculously work right away. The problem with this approach is that it stacks one problem on top of another, and it becomes difficult to figure what went wrong. It is better if you can code along.

![Lets code](https://cloud-1h9458u6z.vercel.app/54_blog_image_13.gif)

Start by importing the Tkinter library. At the top of the `main.py` file, add the following lines:

```python
import tkinter as tk
import random
```

For ease, we imported Tkinter as `tk` so that we don't have to repeat "Tkinter" every time. Instead, we can use tk. The `random` library, as the name suggests, is used for making random choices. We'll be using the `random` library to choose a random quote to display.

Next, let's make a list of quotes:

```python
quotelist = [

 "Instead of wondering when your \nnext vacation is, maybe you \nshould set up a life you don’t \nneed to escape from.",

 "Sometimes\n you win,\n sometimes \nyou learn.",

 "Avoiding failure\n is to avoid \nprogress.",

 "If the plan \ndoesn’t work, \nchange the plan,\n but never the \ngoal.",

 "Creativity \nis \nintelligence \nhaving \nfun."

 ]
```

We are declaring a variable here named 'quotelist' and assigning a list of quotes to it.

Now let's make a window to display it.

```python
window=tk.Tk()
window.minsize(800,560)
window.title("Quotes Hub")
```

Here, we're creating a Tkinter window with `tk.Tk()` and assigning it to a variable called `window`. The function `minsize` takes 2 parameters, width and height. We're setting the `minsize` to 800 pixels by 600 pixels. You can give any height and width as you like. Finally, we're giving our window a title using `window.title`.

Now, let's give the window color.

```python
window.config(bg="black")
```

`window.config` changes properties of the Tkinter window. Here, we're changing the window background color usuing the `bg` property. You can give it your favorite color in the `bg` parameter as a hex code or RGB value.

```python
tk.Label(window, font=("Helvetica", 60, "bold"), text="QUOTES HUB", bg="black", fg="white").pack()
```

The Label function is used to display text on the window. The Label function takes parameters such as font, text, background color(bg), and foreground or font color(fg). The first parameter you should give is the name of the window in which you need this text to be displayed.

```python
font=("Helvetica", 60, "bold")
```

Here, in this piece of code, we are setting up the style of the text. The font name, font-size, and the font-weight.
The `pack()` function packs the text at the center layout.

Now let's make a button to display our quote.

```python
tk.Button(window,command=lambda:fun1(random.choice(quotelist)),text="Open",bg="aqua",fg="black",width=20).place(x=315,y=300)
```

The Button function is used to add buttons in a Python application. These buttons can display text or images that convey the purpose of the buttons. You can attach a function or a method to a button which is called automatically when you click the button. It takes many parameters such as text, bg (background color), fg (foreground/text color), width, height, etc. The first parameter you should give is the window in which you need this button to be displayed. The `place()` function is used to place the element in the particular coordinate we need it to be, in the form `place(x, y)`. The most important part here is the action the button executes.

```python
command=lambda:fun1(random.choice(quotelist))
```

If you don't use Lambda here then the function will run immediately when you run the code. So to prevent it we use lambda. Then we need the function that needs to be executed. Here we are calling a function clicked() and passing a parameter. Here the parameter is a random quote. We need to pick a random quote from our quote list for that we use random library random.choice(quotelist).

```python
window.mainloop()
```

`window.mainloop()` tells Python to run the Tkinter event loop mainloop() at the end of a program in a Python file. Without this, the Tkinter application will never run, and nothing will be displayed.

Now the code will look like this:

```python
import tkinter as tk
import random

quotelist = [

"Instead of wondering when your \nnext vacation is, maybe you \nshould set up a life you don’t \nneed to escape from.",

"Sometimes\n you win,\n sometimes \nyou learn.",

"Avoiding failure\n is to avoid \nprogress.",

"If the plan \ndoesn’t work, \nchange the plan,\n but never the \ngoal.",

"Creativity \nis \nintelligence \nhaving \nFun."

]
window = tk.Tk()
window.minsize(800, 560)
window.title("Quotes Hub")
window.config(bg="black")
tk.Label(window, font=("Helvetica", 60, "bold"),
 text="QUOTES HUB", bg="black", fg="white").pack()
tk.Button(window,command=lambda:clicked(random.choice(quotelist)),text="Open",bg="aqua",fg="black",width=20).place(x=315,y=300)
window.mainloop()
```

If you run the program by clicking the green "Run" button at the top, the output will be an error, telling us the function `clicked` has not been declared. Let’s fix that by creating that function, above the `window` declaration.

```python
def clicked(quote):
F1=tk.Frame(window,bg="light salmon",width=800,height=560)
F1.place(x=0,y=0)
```

In this function, we are showing a new page in which a random quote is displayed. We are using the Frame function to create a page here. The Frame function is used to organize a group of widgets. It acts like a container that can be used to hold the other widgets. In that frame, we display the quote at the center using the label function.

```python
tk.Label(F1,text=quote,font=("Helvetica", 30,"bold"),bg="light salmon",fg="black").pack()
```

We have to pass the random quote to this function.

```python
text=quote
```

Here we gave `text` as the random quote passed from the button.

If you don't understand, just go to the live demo and see the button workflow [here](https://repl.it/@bezlin/graphics#main.py).

Finally the code will look like this:

```python
import tkinter as tk
import random

quotelist = [

 "Instead of wondering when your \nnext vacation is, maybe you \nshould set up a life you don’t \nneed to escape from.",

 "Sometimes\n you win,\n sometimes \nyou learn.",

 "Avoiding failure\n is to avoid \nprogress.",

 "If the plan \ndoesn’t work, \nchange the plan,\n but never the \ngoal.",

 "Creativity \nis \nintelligence \nhaving \nFun."

 ]

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
tk.Button(window,command=lambda:clicked(random.choice(quotelist)),text="Open",bg="aqua",fg="black",width=20).place(x=315,y=300)
window.mainloop()

```

![run it](https://cloud-1bls40wim.vercel.app/0ezgif.com-video-to-gif.gif)

## Hacking time!

Now you know how to use Tkinter to make UI. You should not stop here. You need to learn more. You can refer to the documentation [Learn Tkinter](https://docs.python.org/3/library/tk.html). The best way to learn it is to make real-world projects.

Lastly, don't get stuck.

I am attaching the Tkinter documentation take a look at [Learn Tkinter](https://docs.python.org/3/library/tk.html).
Also if you are new to Python, take a look at [Python](https://www.python.org/doc/) documentation.

### Modified by other hackers.

[Hariprasad Rajan](https://repl.it/@HariprasadR03/haroadas#main.py) He has made a back button and a quit button also added multiple slides.

[Kk Haridev](https://repl.it/@DandaThor/harri-kkkkk#main.py) He extended it to many slides and added glitter to the project.

[Aswin Prakash](https://repl.it/@AswinPrakash/VirtualIncomparableLegacysystem#main.py) He changed the quote hub to a movie summary slideshow hub. Check it out!

[Anupriya Shaji](https://repl.it/@bezlin/trialtkinterpy#main.py) She made a list of buttons that displays quotes by selecting which peoples quote you want to see.

![made_it](https://cloud-a58thexdk.vercel.app/tenor.gif)
