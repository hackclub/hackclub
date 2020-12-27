---
name: 'Make your own Heat Map'
description: 'Created amazing graph with the help of Python'
author: '@shivesh01'
---

# Heat Map

We use data everywhere. Your smartphone for instance, and the satellite navigation system in your car are a couple of examples. Which is essential for us to continue discovering new things and keep ourselves connected. My project is about Heat Maps. Heat Maps provide a great way to see, at a glance, how popular the elements are in a timeline. The heatmap below shows the increase in the number of passengers on flights from ```1949``` to ```1960```  from January to December. 

![Demo](https://cloud-6tk9ccj2o.vercel.app/0screenshot_2020-12-26_at_14.08.36.png)

![Heat Door G.i.f](https://cloud-hs5diiot6.vercel.app/0giphy.gif)

[Click here to see a working demo of today's project](https://repl.it/@ShiveshSingh/Heatmap#main.py)

# Introduction 


In this workshop, you will use the Python language and its libraries to create a stunning heat map from scratch. Even if you don’t know the Python language, no worries my project will help you and keep you interested. You will learn about heat map. My project is about how to collect the data then sort, arrange and present the data visualization. That's all with a couple of lines code with different themes, shades, and plot types.

![How to present data](https://cloud-8eg6acje7.vercel.app/0whatsapp_image_2020-12-26_at_11.47.31_am.jpeg)


# Getting started

You need to set up a repl account. you can run this program on your Python idle too. It requires some basic knowledge for the programming. I have designed this workshop sweet and simple for you. It will just take 15-20 minutes to complete the workshop. 

## Setting up

- Repl is an online and instant development environment to learn, build, collaborate, and host your project. Show you don’t have to waste time while setting up a development environment. Creating an account on repl is super easy.

[Create a repl](https://repl.it/signup)


![repl website](https://cloud-73h0sldam.vercel.app/0screenshot_2020-12-25_at_23.03.53.png)

- create a repl by clicking **+ New repl** and choose programming language **PYTHON** and named it as you want and click **create repl**

- Download the datasets from a simple click and Drag and drop them to the folder in which you are working on repl.\
[flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download") and [tips](https://cloud-1oaqj43if.vercel.app/0tips.csv "click to download")


- Rename the file as flights and tips in the repl folder in which you are working.

- Setup is completed ✅.

**Advantage of working on repl**

*when we program in repl it automatically imports the libraries and dependencies with the simple command. So, You just need a repl account or any python idle to get started.*

![Library](https://cloud-tgvjftwf0.vercel.app/0import.gif)

## Pandas🐼
Pandas is a popular Python-based toolkit. It presents a diverse range of utilities like converting an entire data table into a NumPy matrix array and much more. This makes pandas a trusted ally in data science and machine learning.

## Numpy🔢
NumPy is a library used for working with arrays. It is used to perform a large set of mathematical operations on an array. An array is a data structure consisting of a collection of elements, each identified by at least one array index or key.

## Scipy👨🏻‍🔬
SciPy is an open-source Python library that is used to solve scientific and mathematical problems. It is built on the NumPy extension and allows the user to manipulate and visualize data with a wide range of high-level commands.

## Statsmodels🧮
Statsmodels is a Python package that allows users to explore data, estimate statistical models, and perform statistical tests.

## Matplotlib📊
A picture is worth a thousand words, and with Python’s matplotlib library, fortunately, takes far less than a thousand words of code to create a production-quality graphic.

## Seaborn䷀
Seaborn library is one of the rarest earth metals. If you are a science student you will get...😄. Seaborn, provides a variety of visualization patterns. It uses fewer syntax and has interesting default themes.
Great Right!😲


# Step 1. Relplot

*A Relplot function of Seaborn library is a figure-level function for visualizing statistical relationships using two common approaches: scatter plots and line plots. Let create our own relplot by following the steps given below*
\
Data-set required [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download")

*First, we need to Import the required libraries as namely NumPy, Pandas, Matplotlib & Seaborn and loading the dataset in a variable named ```flights```. You can do it too.*

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

```
*we need to load the data-set in a variable* ```flights ```
```python
flights = sns.load_dataset("flights")
```
*Relp-plot is one minimalist plot I have discovered and I know you will like it too. We will use relp graph plot with the label as ``` x-axis``` as passengers, labeling ```y-axis``` as month, hue represents as color appearance parameters*

```python
sns.relplot(x="passengers", y="month", hue="year", data=flights)
``` 
*As usual displaying the graph, we will be using this function.* 
```python 
plt.show() 
```
Wow! You have created your relp plot 🥳👏🏻
**Output**
![Relplot](https://cloud-ikhasazgz.vercel.app/2relp_plot.png)

![graph visualize](https://cloud-guzr7yfin.vercel.app/2watching_graph_visual.gif)




# Step 2. Violin Plot


*Violin plot allows to visualize the distribution of a numeric variable for one or several groups. Each violin represents a group or a variable. The shape represents the density estimate of the variable: the more data points in a specific range, the larger the violin is for that range.*

Data-set required [tips](https://cloud-1oaqj43if.vercel.app/0tips.csv "click to download")


*Here, we need two libraries, namely Matplotlib and Seaborn, and you know how to import the library.*
```python
import matplotlib.pyplot as plt
import seaborn as sns
```
*Now simply loading ```tips``` dataset in tips variable (you can load datasets in any variable but make sure you use rename them reach places too.* 

```python
tips = sns.load_dataset("tips")
```
*Plotting catplot, labelling the axis, kind is the parameter which is for which kind of graph plot and tips used to load the datasets*
```python 
sns.catplot(x="day", y="total_bill", kind="violin", data=tips)
```
*As usual displaying the graph, we will be using this function.*
```python
plt.show()
```

**Output**

![Violin plot](https://cloud-ikhasazgz.vercel.app/4violin_plot.png)


Fantastic! You have created your violin plot 👏


# Step 3. Heat Map

*A heatmap is a graphical representation of data that uses  colour-coding to represent different values. Heatmaps are used in various forms of analytics but are most commonly used to show user data like growth of the object during the time.
Example: pollution graph and region climate etc*

Data-set required [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download")

*Plotting the heatmap one of the most amazing feelings I had and you can have it too!.* 
*First we have to import the libraries namely numpy, matplotlib & seaborn, Now this super easy task for you!*
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
```
*Secondly we need to load the dataset in a variable* ```flights``` to use them later.*

```python
flights = sns.load_dataset("flights")
``` 
*Now, we will use pivot to handle duplicate values for one index/column pair and label the ```x-axis``` as months, ```y-axis``` as the year, and ```passengers``` will represent the intensity of the heat map. For simplicity we use this convention more the number of passengers increases in the intensity of the color.*
```python

flights = flights.pivot("month", "year", "passengers")
``` 

*Third variable, Now we will enhance look and fill to the plot by using some more parameters like annot, fmt, linewidth, and cmap.*
*some technical terms we are going to use such as annot: the value will show on each cell of the heatmap, fmt: adding annotations, linewidth: width between each box, cmap: cmap is a color template that we have used.*

```python
ax = sns.heatmap(flights, annot=True, fmt="d", linewidths=5, cmap="YlGnBu")
```
* As usual, displaying the graph, we will be using this*
```python
plt.show()
```
**Output**
![Heatmap](https://cloud-6tk9ccj2o.vercel.app/0screenshot_2020-12-26_at_14.08.36.png)

### Marvelous! You have created your Heat map plot ###


# voilà!


**Congratulations!✌️ you have completed the workshop. Share it with your friends and family.
Share with everyone🤗✌️🥳👏🏅🌇🎊**

![congratulations g.i.f](https://cloud-mga2rf9gs.vercel.app/4tenor__1_.gif)


**You can create a lot of variety of heat maps as I have created below.** 
![Red heat map](https://cloud-tgw4nss32.vercel.app/0heatmap_2.png)


```python

import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

flights = sns.load_dataset("flights")
flights = flights.pivot("month", "year", "passengers")
corr = np.corrcoef(np.random.randn(10, 200))
mask = np.zeros_like(corr)
mask[np.triu_indices_from(mask)] = True
with sns.axes_style("white"):
f, ax = plt.subplots(figsize=(7, 5))
ax = sns.heatmap(corr, mask=mask, vmax=.3, square=True)
plt.show()
```

![flight heatmap staircase](https://cloud-tgw4nss32.vercel.app/1heatmap_4.png)
Data-set required named [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download")


```python
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

flights = sns.load_dataset("flights")
flights = flights.pivot("month", "year", "passengers")
grid_kws = {"height_ratios": (.9, .05), "hspace": .3}
f, (ax, cbar_ax) = plt.subplots(2, gridspec_kw=grid_kws)
ax = sns.heatmap(flights, ax=ax,
cbar_ax=cbar_ax,
cbar_kws={"orientation": "horizontal"})
plt.show()
```
**You can even create animations from Heat Map**

![Heat Map Animation](https://cloud-8iv05dp76.vercel.app/0ezgif.com-optimize.gif)
```Python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

def animate(data, im):
    im.set_data(data)

def step():
    while True:
        data = np.random.rand(100, 100)
        yield data

fig, ax = plt.subplots()
im = ax.imshow(np.random.rand(100, 100), interpolation='nearest')
ani = animation.FuncAnimation(
    fig, animate, step, interval=100, repeat=True, fargs=(im, ))
plt.show()
```


# Keep Hacking!
![more resources](https://cloud-guzr7yfin.vercel.app/3libraries.gif)

- Random Number Heat Map
[Code Link](https://repl.it/@ShiveshSingh/RandomNumbers-Heat-Map-code)

![Random Number Heat Map](https://cloud-jrotub72h.vercel.app/0random_integer_heatmap.png)

- Cereal Heat Map
 [Code Link](https://repl.it/@ShiveshSingh/cereals)

![Cereal-1](https://cloud-jrotub72h.vercel.app/1cereal.png)
![cereal_2](https://cloud-jrotub72h.vercel.app/2cereals_.png)

- Automobile parts Heat Map
[Code Link](https://repl.it/@ShiveshSingh/Automobile)

![Automobile Parts](https://cloud-jrotub72h.vercel.app/3automobile.png)

- [Plasma](https://riptutorial.com/matplotlib/example/17254/heatmap)

- [GDP Heat map](https://www.hackerearth.com/blog/developers/data-visualization-for-beginners-part-3/)

- [Univariate Distribution of Birth Rate](https://towardsdatascience.com/visualize-world-trends-using-seaborn-in-python-2e563e7d35da)

- [Cat plot Life Expectancy of people indifferent of the world](https://cmdlinetips.com/2019/03/catplot-in-seaborn-python/)



