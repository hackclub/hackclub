---
name: 'Make your own Heat map'
description: 'Data visualization with Sea born'
author: '@shivesh01'
---

# Heat Map

![Slideshow](https://cloud-49dp118l9.vercel.app/0slidshow.gif)



We use data everywhere. Your smartphone for instance, or the satellite navigation system in your car; maybe the car itself, what not? 
Data that we share among ourselves mostly is visual data which may be text, audio, video or graphs. Which is essential for us to continue discovering new things and keep ourselves connected. 
Visual data such as graphs plays an important role in understanding complex data and even helps us to remember for a lit longer. Graphs can be of many kinds but we are here to learn about heat maps and even make them while learning.

[Click here to see working HEATMAP DEMO on repl](https://repl.it/@ShiveshSingh/Heatmap#main.py)




# Index
* Introduction

* Steps 
  - Step Zero: Importing libraries
  - Step One: Plotting Scatterplot
  - Step Two: Relp Plot
  - Step Three: Violin plot
  - Step Four: Pair Grid
  - Step Five: Heat map
* Application

* Resources for datasets

* Hacking



# Introduction 

In this workshop, you will be using the python language and its libraries to create a stunning heatmap from scratch. Even if you don't know the python language no worries this tutorial will guide you and keep you interested. Most importantly you will learn about heatmap. let's talk about what is a heat map? and how to make one like data scientists do!🤗.
The heat maps are graphical representation of data where values are represented by shades of color. Heat maps make it easy to visualize complex data and understand it at a glance:
Even you can visualize the data, your data too!


> One step at a time is all it takes to get you there.


# Getting started

You just need to set up an account on repl. you can run this program on your Python idle too. Idle like Pycharm, Atom, Jupyter notebook and Visual studio e.t.c. Some basic knowledge is required for the programming and you are ready to go. I have designed this workshop sweet and simple for you. It will just take 15-20 minutes to complete the workshop.
Ready, Get set & Go! 

## Step zero!

### Setting up an account on repl

- Go to the repl website and sign up 
[Repl website](https://repl.it/signup) and create a repl


![repl website](https://cloud-5pg8raikb.vercel.app/0screenshot_2020-12-23_at_10.38.39.png) ![create repl](https://cloud-5pg8raikb.vercel.app/1screenshot_2020-12-23_at_11.13.43.png)

- create a repl by clicking **+ New repl** and choose programming language **PYTHON** and named it as you want and click **create repl**

- Download the datasets from a simple click and Drag and drop them to the folder in which you are working on repl.\
[flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download") and [tips](https://cloud-1oaqj43if.vercel.app/0tips.csv "click to download")
\
![Download](https://cloud-hwdir3hzy.vercel.app/0screenshot_2020-12-23_at_11.42.35.png)

- Rename the file as flights and tips in the repl folder in which you are working.
![rename](https://cloud-qh6au738f.vercel.app/1screenshot_2020-12-23_at_11.57.02_1.png)

- Setup is completed ✅.

**Advantage of working on repl**

*when we program in repl it automatically imports the libraries and dependencies with the simple command. So, You just need a repl account or any python idle to get started.*
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




# Step 1. Scatter PLot

*A scatter plot is a type of plot which display values for typically two variables for a set of data. Let's create our own scatter plot.*
*First we need to import two libraries namely seaborn and matplotlib to repl for that we just need to type the below command in the main.py file
we have used two shortcuts ```sns``` represents seaborn and ```plt``` represents matplotlib*
```python 

import seaborn as sns
import matplotlib. pyplot as plt

```
*We know that for plotting graph we need to add data . We can store them in a list or array but here we use list variables namely **height** and **weight** to store the any values to plotted.*
```python
height = [62, 64, 69, 75, 66, 68, 65, 71, 76, 73]
weight = [120, 136, 148, 175, 137, 165, 154, 172, 200, 187]
```
*Now we can plot & label the graph with graph-type and label what you want to put on the **x** and **y** axis in the graph. Here we will be going with scatterplot as graph-type and x label as height and y label as weight.*
```python
sns.scatterplot(x=height, y=weight)
```
*Finally display the graph we will use*

```python
plt.show()
```
**Output**
![Scatter plot](https://cloud-ikhasazgz.vercel.app/3scatter_plot.png )
Fantastic! You have created your first plot🥳




# Step 2. Relplot

*A Relplot function of Seaborn library is a figure-level function for visualizing statistical relationships using two common approaches: scatter plots and line plots. Let create our own relplot by following the steps given below*
\
Data-set required [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download")

*Importing the required libraries as namely NumPy, pandas, matplotlib & seaborn. You can do it too. Let's do it together!*
```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
```
*Here, we need one extra step because we are going to download a flight's data-sets. Download the dataset and put it in your repl folder in which we are working and rename it as* ```flights```. * and let's put this in a variable. so, we can write this variable letter as shown below.*
```python 
flights = sns.load_dataset("flights")
```
*Relp-plot is one minimalist plot I have discovered and I know you will like it too. Here we will be using relp graph plot with the label as ``` x-axis as passengers```,```labeling y-axis as month```,``` hue represents as color appearance parameters``` & we need to load the data-set for that we have already created a variable `` `flights ``` and we use them as data = flights.*
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


# Step 3. Violin Plot

*A Violin Plot is used to visualize the distribution of the data and its probability density.  Show the distribution shape of the data.*


Data-set required [tips](https://cloud-1oaqj43if.vercel.app/0tips.csv "click to download")


*Here, we need two libraries namely matplotlib and seaborn and you know how to import the library. Right?😉*
*Go ahead and do it*
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



# Step 4. Pair Grid



*Pair Plots are a really simple (one-line-of-code simple!) way to visualize relationships between each variable.Now, we will use plot type **PairGrid** which is one of its kind to compare the plotted graph between the different variables of the same dataset. which I do like it*

Data-set required [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download")

*Importing libraries namely numpy, pandas, matplotlib, seaborn, scipy. I know you will say too many libraries. We are not using them directly but the thing is they are dependent on each other. So, we will be using them indirectly...*

```python 
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
```

*First step we have loaded the dataset in **a** variable* 

```python 
a = sns.load_dataset("flights")
```
*Then we will use the ```b``` variable as plot type. You can see b variable is dependent on a for the dataset to be mapped.*

```python
b = sns.PairGrid(a)
```

*Finally we will use **map** the scatter visual on pair-grid plot and we will use them visualize as scatter*

```python
b.map(plt.scatter)
```
*As usual displaying the graph, we will be using this function.*

```python
plt.show()
```
**Output**

![Pair Grid](https://cloud-ikhasazgz.vercel.app/1pairgrid.png)

**I knew it you can do it!🎆 You have created your Pair grid plot***



# Step 5. Heat Map

*A heatmap is a graphical representation of data that uses  colour-coding to represent different values. Heatmaps are used in various forms of analytics but are most commonly used to show user data like growth of the object during the time.
Example: pollution graph and region climate etc*

Data-set required [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download")

*Plotting the heatmap one of the most amazing feelings I had and you can have it too!.* 
*First we have to import the libraries namely numpy, matplotlib & seaborn, Now this super easy task for you!🤗*
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
![Heatmap](https://cloud-ikhasazgz.vercel.app/0heatmap.png)

### Marvelous! You have created your Heat map plot ###


# voilà!

**Congratulations!✌️ you have completed the workshop. Share it with your friends and family.
Frankly share with everyone🤗✌️🥳👏🏅🌇🎊**

![congratulations g.i.f](https://cloud-mga2rf9gs.vercel.app/4tenor__1_.gif)




**You can create a lot of variety of heat maps as I have created below.** 
![flight heat map](https://cloud-tgw4nss32.vercel.app/0heatmap_2.png)


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


# Keep Hacking!

You can learn these graph plots !

![](https://cloud-8c3mmthaa.vercel.app/0keep_hacking.png "You can make it happen!")
Resources

- [Univariate Distribution of Birth Rate](https://towardsdatascience.com/visualize-world-trends-using-seaborn-in-python-2e563e7d35da)
- [Cat plot Life Expectancy of people indifferent of the world](https://cmdlinetips.com/2019/03/catplot-in-seaborn-python/)
- [Cereals compositions Heat map](https://towardsdatascience.com/heatmap-basics-with-pythons-seaborn-fb92ea280a6c)
- [GDP Heat map](https://www.hackerearth.com/blog/developers/data-visualization-for-beginners-part-3/)
- [Plasma](https://riptutorial.com/matplotlib/example/17254/heatmap)


