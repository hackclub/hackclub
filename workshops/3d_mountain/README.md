---
name: '3D Mountain'
description: 'Create a 3D mountain with Python data viz tools'
author: '@shivesh01'
img: 'https://cloud-a08hob7s0.vercel.app/0workshop1.gif'
locales: 'es-xl'
---

Mountains are fun! Here, check out this mountain on Google Maps:

![Mount san bruno](https://cloud-8at1ve02p.vercel.app/0ezgif.com-gif-maker.gif)    

The reason I'm showing you this is because you're going to make your own mountain with Python! 🐍🚀

![amaze g.i.f](https://media.giphy.com/media/5p2wQFyu8GsFO/giphy.gif)

[Final demo and code](https://repl.it/@ShiveshSingh/Mtbrunoplot)

## Getting started

We're going to be using [Repl.it](https://repl.it), a free, online code editor, to write our code. To get started, [click here to visit the starter project](https://repl.it/@ShiveshSingh/3DHeatmapWorkshop). Once it loads, click the "Fork" button to start coding.

Once your fork loads, you should notice a blank file called `main.py` and a file called `mountain.csv`, which contains some data. If you see this, you're ready to move on to the next step!

---

We're going to use 3 libraries for this workshop: `pandas`, `numpy`, `matplotlib`, and `mpl_toolkits`.

Start by importing these libraries at the top of the `main.py` file:

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
```

- `pandas` allows importing and working with data from datasets. We're going to use it to manage our CSV file.
- `numpy` is a library that allows for easy scientific computing. We're going to use it to manage arrays in this workshop.
- `matplotlib` is a library for data visualization—histograms, scatter plots and bar graphs, etc. We're going to use it to make our mountain.
- The `mpl_toolkits` are collections of functions that extend the `matplotlib` application. This will enable us to plot in a 3D plane, rather than 2D.

Once you've imported these libraries, add a blank line, then add:

```python
DataFrame = pd.read_csv('mountain.csv')
```

Here, we're creating a variable called `DataFrame`, which will use `pandas` to read the `mountain.csv` file.

Under that line, add:

```python
DataFrame = DataFrame.unstack()
```

The `unstack()` function unstacks the row to columns. Here's a diagram that shows how it works:

![unstack img](https://cloud-5sfh036gn.vercel.app/0reshaping_unstack.png)

Under that, add:

```python
DataFrame = DataFrame.reset_index()
```

When you concatenate, sort, join or do some rearrangements with your `DataFrame`, the index gets shuffled or out of order. To reset the index of a `DataFrame`, we use `reset_index()` to resort the indexes.

![reset index](https://cloud-8p15tas3t.vercel.app/0reshaping_unstack_.png)

Under that, add:

```python
DataFrame.columns = ['X', 'Y', 'Z']
```

Your `DataFrame` contains three columns without labels, so we need to assign labels to the columns. `DataFrame.columns` assigns the first column to `X`, the second to `Y`, the third to `Z`. In our 3D graph, this will correspond to latitude, longitude, and altitude.

Fun fact: we have exactly 552 coordinates.

Under that, add:

```python
DataFrame['X'] = pd.Categorical(DataFrame['X'])
```

`Categorical` is a `pandas` data type which is used to save memory space and speed up computation. you can convert using syntax `pd.Categorical()` with parameter `DataFrame['X']`.

Next, add:

```python
DataFrame['X'] = DataFrame['X'].cat.codes
```

By using `cat.codes`, we get unique integer values for each value of `X` in an array in the position if the actual values, even if the value is none. Then, it returns a unique numeric value.

Suppose your data contains a column named "Birds" with 100 rows, which has only two types of values—parrot and owl—repeated in rows. Even though we only have two types of data, we have 100 rows of them so the computer will treat every value as unique. To save memory, we specify the similar set of values as a category, so that the computer doesn't allocate memory every time it encounters that value. Instead, it will just assign a reference to the value. If this sounds like gibberish to you, don't worry—all you need to know is that we're doing some fancy computer memory saving things.

Under this line, add:

```python
fig = plt.figure(figsize=(6, 8))
```

Here, we're using `plt.figure()` to create a figure window and assigning it to a variable called `fig`.

Next, add:

```python
ax = fig.gca(projection='3d')
```

`fig.gca()` with the argument `projection=3d` returns the three-dimensional axes associated with the figure window. This is stored in a variable called `ax`.

Next, add:

```python
ax.plot_trisurf(DataFrame['X'], DataFrame['Y'], DataFrame['Z'], cmap=plt.cm.jet, linewidth=0.2)
```

This creates a three-dimensional plot.

- `cmap` defines the colormap of the plot. We're using the `jet` colormap. Learn more about the different types of colormaps [here](https://matplotlib.org/tutorials/colors/colormaps.html).
- `linewidth=0.2` makes the curves smoother.

![colormap list](https://cloud-hppbp7hy7.vercel.app/0colormap.gif)

Next, add:

```python
plt.title("Mount San Bruno")
plt.xlabel("x axis")
plt.ylabel("y axis")
```

- `plt.title` adds a title to the plot
- `plot.xlabel` and `plot.ylabel` add labels to the x and y-axis of the plot.

Next, let's display the plot!

```python
plt.show()
```

`plt.show` opens an interactive window that displays your figure.

---

<details>

<summary>Final Code</summary>

```python
import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

from mpl_toolkits.mplot3d import Axes3D

DataFrame = pd.read_csv('mountain.csv')

DataFrame = DataFrame.unstack()

DataFrame = DataFrame.reset_index()

DataFrame.columns = ['X', 'Y', 'Z']

DataFrame['X'] = pd.Categorical(DataFrame['X'])

DataFrame['X'] = DataFrame['X'].cat.codes

fig = plt.figure()

ax = fig.gca(projection='3d')

ax.plot_trisurf(DataFrame['X'], DataFrame['Y'], DataFrame['Z'], cmap=plt.cm.jet, linewidth=0.2)

plt.title("Mount San Bruno")
plt.xlabel("x axis")
plt.ylabel("y axis")


plt.show()
```

</details>

![Demo](https://cloud-ko9v4kpdg.vercel.app/0ezgif.com-gif-maker__1_.gif)

Congrats!!! You've completed the workshop! Pretty simple, right?

## Hacking

![congratulations g.i.f](https://cloud-1th3ydnib.vercel.app/2workshop_happy.gif)

Now that you've explored how to make a basic 3D mountain, the possibilities are endless. Real data scientists use Python, along with the tools you used in this workshop, to make complex data visualizations. Here are a few examples I came up with that you can try—but try finding some interesting things you can do in addition to these!

- Example 1, using a CSV from Kaggle to make a 3D Volcano.
  - [Demo img](https://cloud-94iqxy8lo.vercel.app/0volcano.gif)
  - [Code](https://repl.it/@ShiveshSingh/Volcano-3D-Heatmap)
- Example 2, using Array, and Cos function to make a Surface plot.
  - [Demo img](https://cloud-iwpkargvc.vercel.app/0screenshot_2021-01-10_at_15.24.00.png)
  - [Code](https://repl.it/@ShiveshSingh/Surface-Plot-3D#main.py)
- Example 3, using Loops, List, and Sin function to make the contour plot.
  - [Demo img](https://cloud-iwpkargvc.vercel.app/1screenshot_2021-01-10_at_15.25.30.png)
  - [Code](https://repl.it/@ShiveshSingh/3D-Contour-Plot#main.py)

Happy hacking!
