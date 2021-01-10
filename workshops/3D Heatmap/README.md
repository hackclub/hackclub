---
name: 'Make a 3D Heatmap of a mountain'
description: 'Created amazing graph with the help of Python'
author: '@shivesh01'
image: 'https://cloud-a08hob7s0.vercel.app/0workshop1.gif'
---

# Mountain 3D Heatmap

![Demo](https://cloud-a08hob7s0.vercel.app/0workshop1.gif)

[Click here to see a working demo of today's project.](https://repl.it/@ShiveshSingh/Mtbrunoplot)

In this workshop, you will use the Python language and a couple of libraries to create a stunning heat map from scratch. Along the way, you will also learn about 3D heatmaps. Our project is about collecting data then sorting it, arranging it and lastly presenting it in the form of a 3D model.

![How to present data](https://cloud-3ifpxv546.vercel.app/0image.png)

# Getting started

Today, we'll be using repl.it to write some codes. It is an online, instant development environment to learn, build, collaborate, and host your project. Show you don’t have to waste time while setting up a development environment.

[Sign up and then create a repl here.](https://repl.it/signup)

![repl website](https://cloud-73h0sldam.vercel.app/0screenshot_2020-12-25_at_23.03.53.png)

- To help get you started, you can fork our repl which contains a mountain.csv file. Click [here](https://repl.it/@ShiveshSingh/3DHeatmapWorkshop) to load up that repl for forking.

![](https://cloud-kben0mdmg.vercel.app/0screenshot_2021-01-08_at_09.43.56.png)

- The setup is complete. ✅.

## Python Libraries

Python libraries are reusable collections of code that others have published. We're able to easily import them into our project and use them.

Here are the libraries we'll be using today:

### Pandas 🐼

Pandas is a popular Python-based toolkit. It presents a diverse range of utilities like converting an entire data table into a NumPy matrix array and much more. That makes pandas a trusted ally in data science and machine learning.

### Numpy 🔢

We use NumPy to work with arrays to perform a large set of mathematical operations. An array is a data structure consisting of a collection of elements, each identified by at least one array index or key.

### Matplotlib 📊

Matplotlib one of the famous Python package which is used for data visualization. Python package is used for data analysis. `matplotlib.pyplot` is a package which is used for 2D graphics.

### Mpl toolkits 🧰

Mpl Toolkits are collections of functions that extend Matplotlib application. We will use it to enable us to work with 3D graphics.

### Seaborn ䷀

Seaborn library provides different variety of visualization patterns, themes, color shades with fewer syntax.
we use it to transform 3D model to 3D Heatmap model.

# 1. Making 3D Plane

The first step is to create 3D axes and then plot one of the 3D graphs on the 3D axes.

We need to import libraries, so we can work on top of it.

```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
```

We pass `projection='3d'` to plt.axes, This is the empty canvas that we'll be painting.

```python
fig = plt.figure()
ax = plt.axes(projection='3d')
```

To see what you have created `plt.show()` function is used.

```python
plt.show()
```

**Source Code**

```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

fig = plt.figure()
ax = plt.axes(projection='3d')

plt.show()
```
**Output**

![3D Plane](https://cloud-a08hob7s0.vercel.app/1workshop2.gif)

# 2. Plotting Graph

To plot graph, we will use a mathematical function to create a helical spring in 3D axes.

We need to import one more library namely `pandas`

```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import numpy as np
```

The most basic three-dimensional plot is a line or collection of scatter plot created from sets of (x, y, z) triples. `projection='3d'` projects the graph in three dimension.

```python
ax = plt.axes(projection='3d')
```

Z is an array which (starts = 0, end = 30, linspace = 100). `linspace` is used to create an evenly spaced sequence

```python
z = np.linspace(0, 30, 100)
```

Initialise x is array of np.sin(z), and similarly y is a array of np.cos(z).
In simple words, we are declaring z is the function of x and y and storing them in arrays.

```python
x = np.sin(z)
y = np.cos(z)
```

Shows the graph

```python
ax.plot3D(x, y, z, 'red')
plt.show()
```
**Source Code**

```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import numpy as np

ax = plt.axes(projection='3d')
z = np.linspace(0, 30, 100)

x = np.sin(z)
y = np.cos(z)

ax.plot3D(x, y, z, 'red')
plt.show()

```

**Output**

![3D Graph](https://cloud-a08hob7s0.vercel.app/2workshop3.gif)

# 3. Plotting with Dataset

To plot with dataset, firstly, we will store dataset in a vaiable and then modify dataset a bit and at last, represent the data in the 3D Heatmap model.

| Function/Parameter | Description                                                                             |
| ------------------ | --------------------------------------------------------------------------------------- |
| X, Y, Z            | Data values as 1D arrays                                                                |
| cmap               | colormap package provides simple utilities to convert colors between RGB, HEX, HLS, HUV |
| unstack            | returning a DataFrame having a new level of column labels                               |
| reset_index        | reset the index of the DataFrame                                                        |
| linewidth          | change line width of lines                                                              |
| shrink             | shrink the width of the plot                                                            |
| aspect             | aspect is use to prevent future distortions                                             |
| cat.codes          | return Series of codes as well as the index.                                            |

\
We need to import all libraries 
```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import numpy as np
```
Loading **csv** data in `data` variable

```python
data = pd.read_csv('mountain.csv')
```

Transform it to a long format to plot each data on the 3D plane. We will use unstack and reset index functions.
Store them in column x, y, z.

`df` denotes dataframe

```python
df = data.unstack().reset_index()
df.columns = ['X', 'Y', 'Z']
```

And also transform the old column name into some numerical value using categorical function. Plots have numerical values on the axis of the plane.

```python
df['X'] = pd.Categorical(df['X'])
df['X'] = df['X'].cat.codes
```

Make the plot in the 3D plane with the help of the projection function.
Finally, trisurf function creates a surface by finding a set of triangles formed between adjacent points.

```python
fig = plt.figure()
ax = fig.gca(projection='3d')
ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.jet, linewidth=0.2)
```

`cmap=plt.cm.jet` returns the jet colormap as a three-column array. Each row in the array contains the red, green, and blue intensities for a specific color

![Cmap](https://cloud-25g0giqzr.vercel.app/0colormap_jet.png)

and then we will
add a color bar that map values to colors. The point's height on the mountain increase the color value will shift from blue to red.

```python
surf = ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.jet, linewidth=0.2)
fig.colorbar(surf, shrink=0.5, aspect=5)
```

We will use this function to display the plot on our computer screen.

```python
plt.show()
```
**Source Code**

```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import numpy as np

data = pd.read_csv('mountain.csv')

df = data.unstack().reset_index()
df.columns = ['X', 'Y', 'Z']

df['X'] = pd.Categorical(df['X'])
df['X'] = df['X'].cat.codes

fig = plt.figure()
ax = fig.gca(projection='3d')
ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.jet, linewidth=0.2)

surf = ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.jet, linewidth=0.2)
fig.colorbar(surf, shrink=0.5, aspect=5)

plt.show()
```
**Output**

![Volcano Heatmap](https://cloud-a08hob7s0.vercel.app/0workshop1.gif)

To make 3D plots, we need each data point must have three coordinates to define it's position. These three are it's latitude, longitude, and altitude (X, Y, and Z). This data comes from the mountain.csv dataset. Then we will plot each point, and then it will give us the 3D model of the mountain. And then, we have also added colors to make this 3D plot into 3D Heatmap.

Fantastic! You have created your first 3D Heatmap plot.

# Voilà!

Congratulations!✌️ you have completed the workshop. Share it with your friends and family.
Share with everyone🤗✌️🥳👏🏅🌇🎊

![congratulations g.i.f](https://cloud-1th3ydnib.vercel.app/2workshop_happy.gif)

# Keep Hacking!

There are so many exciting things you can make now! 

For example, plotting graphs and building things like the 3D models etc.

Now it's your turn to apply what you know to make exciting projects!. Here are some inspirations to make cool new projects.


\
**3D Volcano:**
 
In this project, we can use the volcano dataset to make a 3D volcano plot.    

![Volcano img](https://cloud-94iqxy8lo.vercel.app/0volcano.gif)

[Code](https://repl.it/@ShiveshSingh/Volcano-3D-Heatmap)


\
**3D Surface Plot:**

In this project, we can use a mathematical function to make the 3D surface plot.

![Surface img](https://cloud-iwpkargvc.vercel.app/0screenshot_2021-01-10_at_15.24.00.png)

[Code](https://repl.it/@ShiveshSingh/Surface-Plot-3D#main.py)


\
**3D Contour Plot:**

In this project, we can use the sin function to make the contour plot.

![Contour img](https://cloud-iwpkargvc.vercel.app/1screenshot_2021-01-10_at_15.25.30.png)

[Code](https://repl.it/@ShiveshSingh/3D-Contour-Plot#main.py)
