---
name: 'Make a 3D Heatmap'
description: 'Created amazing graph with the help of Python'
author: '@shivesh01'
image: '![3D Heat Map](https://cloud-a08hob7s0.vercel.app/0workshop1.gif)'
---


# Volcano Heat Map

![Demo](https://cloud-94iqxy8lo.vercel.app/0volcano.gif)

[Click here to see a working demo of today's project](https://repl.it/@ShiveshSingh/Volcano-Heatmap#main.py)


# Introduction 

![3D](https://cloud-1th3ydnib.vercel.app/0workshop_3d.gif)


In this workshop, you will use the Python language and its libraries to create a stunning heat map from scratch. You will learn about the heat map. Our project is about how to collect the data then sort, arrange and present the data visualization. That's all with a couple of lines of code.
3D modeling has changed the way we design for the better.

![How to present data](https://cloud-3ifpxv546.vercel.app/0image.png)


# Getting started

You need to set up a repl account. you can run this program on your Python idle too. It requires some basic knowledge of programming. I have designed this workshop sweet and simple for you. It will just take 15-20 minutes to complete the workshop. 

## Setting up

- Repl is an online and instant development environment to learn, build, collaborate, and host your project. Show you don’t have to waste time while setting up a development environment. Creating an account on repl is super easy.

[Create a repl](https://repl.it/signup)


![repl website](https://cloud-73h0sldam.vercel.app/0screenshot_2020-12-25_at_23.03.53.png)

- create a repl by clicking **+ New repl** and choose programming language **PYTHON** and named it as you want and click **create repl**

- Download the datasets from a simple click and Drag and drop them to the folder in which you are working on repl.
[volcano.csv](https://cloud-8ycpvzexa.vercel.app/0volcano.csv)


- Rename the file as volcano.csv and place it in the repl folder in which you are working.

- Setup is completed ✅.

**Advantage of working on repl**

*when we program in repl it automatically imports the libraries and dependencies with the simple command. So, You just need a repl account or any python idle to get started.*

![Library](https://cloud-1th3ydnib.vercel.app/1workshop_library.gif)

## Pandas🐼
Pandas is a popular Python-based toolkit. It presents a diverse range of utilities like converting an entire data table into a NumPy matrix array and much more. This makes pandas a trusted ally in data science and machine learning.

## Numpy🔢
NumPy is a library used for working with arrays. It is used to perform a large set of mathematical operations on an array. An array is a data structure consisting of a collection of elements, each identified by at least one array index or key.


## Matplotlib📊
A picture is worth a thousand words, and with Python’s matplotlib library, fortunately, takes far less than a thousand words of code to create a production-quality graphic.

## Toolkits🧰
Toolkits are collections of application-specific functions that extend Matplotlib.

## Seaborn䷀
Seaborn library is one of the rarest earth metals. If you are a science student you will get...😄. Seaborn, provides a variety of visualization patterns. It uses fewer syntax and has interesting default themes.
Great Right!😲

# Step 1 Making 3D Plane

Plotting 3-D Axis
Importing libraries
```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
```
The first step is to create 3D Axes, and then plot any of the 3D graphs. We pass ```projection='3d'``` to plt.axes, This is the empty canvas that we'll be painting.

```python
fig = plt.figure()
ax = plt.axes(projection='3d')
plt.show()
```
![3D Plane](https://cloud-a08hob7s0.vercel.app/1workshop2.gif)

# 2. Plotting Graph

Plotting 3-D a Graph
```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
```
The most basic three-dimensional plot is a line or collection of scatter plot created from sets of (x, y, z) triples.

```
ax = plt.axes(projection='3d')
z = np.linspace(0, 30, 100)

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

```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
```

Get the data (CSV file) from the file
volcano [dataset](https://cloud-8ycpvzexa.vercel.app/0volcano.csv)

```python
data = pd.read_csv('volcano.csv')
```

Transform it to a long format to plot each data on the 3D plane
```python
df = data.unstack().reset_index()
df.columns = ['X', 'Y', 'Z']
```

And transform the old column name into something numerical value. Plots have numerical values on the axis of the plane.
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

### Marvelous! You have created your first 3D Heat Map plot ###


# voilà!


**Congratulations!✌️ you have completed the workshop. Share it with your friends and family.
Share with everyone🤗✌️🥳👏🏅🌇🎊**

![congratulations g.i.f](https://cloud-1th3ydnib.vercel.app/2workshop_happy.gif)




# Keep Hacking!
Mountain Bruno [Code](https://repl.it/@ShiveshSingh/Mtbrunoplot)

Surface Plot [Code](https://repl.it/@ShiveshSingh/Surface-Plot-3D#main.py)

Heat Map Animation [Code](https://repl.it/@ShiveshSingh/HeatmapAnimation)












