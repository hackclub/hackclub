---
name: 'Dungeon Crawler Overworld'
description: 'Create your dungeon crawler overworld!'
author: '@JakeGerber'
image: 'https://cloud-3oy6wuv14.vercel.app/0screenshot__1430_.png'
---

# Create a Dungeon Crawler Overworld!

In this workshop, we will be creating a dialogue tree system with C#.

<img src="https://cloud-3oy6wuv14.vercel.app/0screenshot__1430_.png" width="900" alt="Dungeon Crawler Example">

<img src="https://media2.giphy.com/media/QYECbEHYafe9O/200.gif" width="380" alt="Knight Dancing Gif">

# Repl.it Setup
Let's begin!

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an IDE which allows us to write our code online. No downloads necessary.

Create a new repl and use C# as the language.

<img src="https://cloud-eyujimcxl.vercel.app/0screenshot__1431_.png" width="600" alt="Python Repl">

# Initial Statements

```py
import turtle

myarr = []
col = 1
row = 1
turtle.hideturtle()
```

# Reading Text File

```py
import turtle


myarr = []
col = 1
row = 1
turtle.hideturtle()


f = open("map.txt", "r")

while(True):
  tempLine = f.readline()

  if tempLine == "": 
    break

  temparr = []
  for t in tempLine:
    temparr.append(t)
  myarr.append(temparr)

f.close()
```

