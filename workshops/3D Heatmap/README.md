---
name: 'Make a 3D Heatmap of a volcano'
description: 'Created amazing graph with the help of Python'
author: '@shivesh01'
image: '(https://cloud-a08hob7s0.vercel.app/0workshop1.gif)'
---


# Volcano Heat Map

![Demo](https://cloud-94iqxy8lo.vercel.app/0volcano.gif)

[Click here to see a working demo of today's project](https://repl.it/@ShiveshSingh/Volcano-Heatmap#main.py)

In our workshop, you will use Python programming language and libraries to create a stunning heat map from scratch. And you also learn about 3D heatmaps. Our project is about collecting data then sort, arrange and present the data in a 3D model. We know 3D modeling has changed the way we design for the better.

![How to present data](https://cloud-3ifpxv546.vercel.app/0image.png)


# Getting started

You need to set up a repl account or run this program on your Python idle. It requires some basic knowledge of programming. We have designed this workshop as sweet and simple for you. It will only take 15-20 minutes to complete the workshop. 

## Setting up

- Repl is an online, instant development environment to learn, build, collaborate, and host your project. Show you don’t have to waste time while setting up a development environment. Creating an account on repl is super easy.

[Create a repl](https://repl.it/signup)


![repl website](https://cloud-73h0sldam.vercel.app/0screenshot_2020-12-25_at_23.03.53.png)

- Create a repl by clicking **+ New repl** and choose programming language **PYTHON** and named it as you want and **create repl**

- Download the dataset from below, drag and drop them to the folder you are working on repl.\
[volcano.csv](https://cloud-8ycpvzexa.vercel.app/0volcano.csv)


- Rename the file as volcano.csv and place it in the repl folder in which you are working.

- The setup is complete. ✅.

**Advantage of working on repl**

*When we program in repl, it automatically imports libraries and dependencies with a simple command. So, you just require a repl account or any python idle get started.*

![Library](https://cloud-1th3ydnib.vercel.app/1workshop_library.gif)

## Pandas🐼
Pandas is a popular Python-based toolkit. It presents a diverse range of utilities like converting an entire data table into a NumPy matrix array and much more. That makes pandas a trusted ally in data science and machine learning.

## Numpy🔢
We use NumPy to work with arrays to perform a large set of mathematical operations. An array is a data structure consisting of a collection of elements, each identified by at least one array index or key.


## Matplotlib📊
A picture is worth a thousand words, and with Python’s matplotlib library, fortunately, it takes far less than a thousand words of code to create a production-quality graphic.

## Toolkits🧰
Toolkits are collections of application-specific functions that extend Matplotlib.

## Seaborn䷀
Seaborn library is one of the rarest earth metals. Seaborn, which provides a variety of visualization patterns, uses fewer syntax and decent themes.
Great Right!😲

# 1. Making 3D Plane


Importing libraries
```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
```
The first step is to create 3D axes and then plot any of the 3D graphs. We pass ```projection='3d'``` to plt.axes, This is the empty canvas that we'll be painting.

```python
fig = plt.figure()
ax = plt.axes(projection='3d')
plt.show()
```
![3D Plane](https://cloud-a08hob7s0.vercel.app/1workshop2.gif)

# 2. Plotting Graph

Importing Libraries
```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import numpy as np
```
The most basic three-dimensional plot is a line or collection of scatter plot created from sets of (x, y, z) triples.

```
ax = plt.axes(projection='3d')
z = np.linspace(0, 30, 100)
```
Initialise x is array of np.sin(z), and similarly y is a array of np.cos(z)

```python
x = np.sin(z)
y = np.cos(z)
```
Shows  the graph
```python
ax.plot3D(x, y, z, 'red')
plt.show()
```

![3D Graph](https://cloud-a08hob7s0.vercel.app/2workshop3.gif)


# 3. Plotting with Dataset

Importing Libraries
```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
```

Get the data from the file.\
volcano [dataset](https://cloud-8ycpvzexa.vercel.app/0volcano.csv)

```python
data = pd.read_csv('volcano.csv')
```

Transform it to a long format to plot each data on the 3D plane
```python
df = data.unstack().reset_index()
df.columns = ['X', 'Y', 'Z']
```

And also transform the old column name into something numerical value. Plots have numerical values on the axis of the plane.

```
df['X'] = pd.Categorical(df['X'])
df['X'] = df['X'].cat.codes
```

Make the plot in the 3D plane with the help of the projection function.
Finally, trisurf creates a surface by first finding a set of triangles formed between adjacent points. 
```
fig = plt.figure()
ax = fig.gca(projection='3d')
ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.jet, linewidth=0.2)
```
Add a color bar that maps values to colors. The point height on the mountain increase, the color value will shift from blue to red.

```python
surf = ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.jet, linewidth=0.2)
fig.colorbar(surf, shrink=0.5, aspect=5)
```
We will use this function to display the plot on our computer screen.
```
plt.show()
```


**Output**
![Volcano Heatmap](https://cloud-94iqxy8lo.vercel.app/0volcano.gif)



To make 3D plots, we need three coordinates to define each point of the volcano. It's latitude, longitude, and altitude ( X, Y, and Z ). This data has come from the volcano(dataset). Then we will plot each point, and then it will give us the 3D model of the volcano. And then, we have also added colors to make this 3D plot into 3D Heatmap.

\
Fantastic! You have created your first 3D Heatmap plot.


# Voilà!


Congratulations!✌️ you have completed the workshop. Share it with your friends and family.
Share with everyone🤗✌️🥳👏🏅🌇🎊

![congratulations g.i.f](https://cloud-1th3ydnib.vercel.app/2workshop_happy.gif)




# Keep Hacking!
Mountain Bruno [Code](https://repl.it/@ShiveshSingh/Mtbrunoplot)

Surface Plot [Code](https://repl.it/@ShiveshSingh/Surface-Plot-3D#main.py)

Heat Map Animation [Code](https://repl.it/@ShiveshSingh/HeatmapAnimation)












