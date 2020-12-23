---
name: 'Heatmap'
description: 'Data visualization with Seaborn'
author: '@shivesh01'
---

**“Creativity is the goal. Coding is just to allow that. Creativity is in the front seat; technology is in the backseat. It is sort of the blend with both of these that you can do such powerful things now.”**                                             by       Tim cook
 
# Welcome to Heatmap Workshop!🤗
![Slideshow](https://cloud-49dp118l9.vercel.app/0slidshow.gif)

[Click Here to See Working HEATMAP DEMO on Repl](https://repl.it/@ShiveshSingh/Heatmap#main.py)

# Index
* Introduction

* Steps  
  * Step Zero:  Importing libraries
  * Step One:  Plotting Scatterplot
  * Step Two:  Relp Plot
  * Step Three:  Violin plot
  * Step Four:  Pair Grid
  * Step Five:  Heatmap
  
* Application

* Resources for datasets

* Hacking


# INTRODUCTION 

In this workshop, you will be using the python language and its libraries to create a stunning heatmap from scratch. Even if you don't know the python language no worries this tutorial will guide you and keep you interested. Most importantly you will learn about heatmap. let's talk about what is a heatmap? and how to make one like data scientists do!🤗.
A heat map (or heatmap) is a graphical representation of data where values are depicted by color. Heat maps make it easy to visualize complex data and understand it at a glance:
Even you can visualize the data, your data too!

--
> One step at a time is all it takes to get you there.
                                                     by Emily Dickinson
--                                                 


# Getting started

You just need to set up an account on repl or you can run this program on your Python idle like pycharm, atom, Jupyter notebook, and visual studio e.t.c. Some basic knowledge is required for the programming and you are ready to go!.
I have designed this workshop sweet and simple for you! It just takes 15-20minutes to complete the workshop...
Ready!
get set!
Go!
                                       

## Step zero!

### Setting up an account on repl

- Go to the repl website and sign up 
[Repl website](https://repl.it/signup) and create a file


![repl website](https://cloud-5pg8raikb.vercel.app/0screenshot_2020-12-23_at_10.38.39.png)   ![create file](https://cloud-5pg8raikb.vercel.app/1screenshot_2020-12-23_at_11.13.43.png)

- create a file  by clicking **+ New repl** and choose programming language **python** and named it as you want and click **create repl**

- Download the datasets from a simple click and Drag and drop them to the folder in which you are working on repl.
 ---         --- 
__Datasets__ [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download") and [tips](https://cloud-1oaqj43if.vercel.app/0tips.csv "click to download") 
 ---         ---

- Rename these file as flights and tips in the repl folder in which you are working
![drag and drop](https://cloud-lip1d7sks.vercel.app/0download___drop.png)![rename](https://cloud-qh6au738f.vercel.app/1screenshot_2020-12-23_at_11.57.02_1.png)

- you are ready to code!


# You have done fantastic work by completing step zero!👏

**Advantage of working on repl**

*when we program in repl it automatically imports the libraries and dependencies with the simple command. So, You just need a repl account or any python idle to get started.*
     
# Know more about the libraries you will be going to use:

## Pandas🐼
Pandas is a popular Python-based toolkit. It presents a diverse range of utilities like converting an entire data table into a NumPy matrix array and much more. This makes pandas a trusted ally in data science and machine learning.

## Numpy🔢
NumPy is a library used for working with arrays. It is used to perform a large set of mathematical operations on an array. An array is a data structure consisting of a collection of elements, each identified by at least one array index or key.

## Scipy👨🏻‍🔬
SciPy is an open-source Python library that is used to solve scientific and mathematical problems. It is built on the NumPy extension and allows the user to manipulate and visualize data with a wide range of high-level commands.

## Statsmodel🧮
Statsmodels is a Python package that allows users to explore data, estimate statistical models, and perform statistical tests.

## Matplotlib📊
A picture is worth a thousand words, and with Python’s matplotlib library, fortunately, takes far less than a thousand words of code to create a production-quality graphic.

## Seaborn䷀
Seaborn library is one of the rarest earth metals. If you are a science student you will get...😄. Seaborn, provides a variety of visualization patterns. It uses fewer syntax and has interesting default themes.
Great Right!😲
 
 # Step 1.Plotting Scatter PLot
 
 *First we need to import two libraries namely seaborn and matplotlib to repl for that we just need to type the below command in the main.py file
 we have used two shortcuts ```sns``` represents seaborn and ```plt``` represents matplotlib*
```python 

        import seaborn as sns
        import matplotlib. pyplot as plt
```
 *We know that for plotting graph we need to add data . We can store them in list or array but here we use list variable namely **height** and **weight** to store the any values to be plotted.*
```python
        height = [62, 64, 69, 75, 66, 68, 65, 71, 76, 73]
        weight = [120, 136, 148, 175, 137, 165, 154, 172, 200, 187]
```
*Now we can plot & label the graph with graph-type and label then what you want to put on **x** and **y** axis in the graph. Here we will be going with scatterplot as graph-type and x label as height and y label as weight.*
```python
        sns.scatterplot(x=height, y=weight)
```
*Finally to display the graph we will use*

```python
        plt.show()
```
        
 **Output**
 
 ![Scatter plot](https://cloud-ikhasazgz.vercel.app/3scatter_plot.png )
 
 ### Fantastic! You have created your first plot🥳 ###


# Step 2. Relp Plot

*This plot will need ```flights dataset``` so If you already have downloaded and pasted in the reply folder. Then you don't need to do it twice. Otherwise, I have included* 
Data-set required named [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download")

*Importing the required libraries as namely NumPy, pandas, matplotlib & seaborn. You can do it too. Let's do it together!*
```python
        import numpy as np
        import pandas as pd
        import matplotlib.pyplot as plt
        import seaborn as sns
```
*Here, we need one extra step because we are going to download a flight's data-sets. Download the dataset and put it in your repl folder in which we are working and rename it as* ```flights```. * and let's put this in a variable. so, we can this variable letter as shown below.*
```python       
       flights = sns.load_dataset("flights")
```
*Relp-plot is one minimalist plot I have discovered and I know you will like it too. Here we will be using relp graph plot with the label as ``` x-axis as passengers```,```labeling y-axis as  month```,``` hue represents as color appearance parameters``` & we need to load the data-set for that we have already created a variable `` `flights ``` and we use them as data = flights.*
```python
       sns.relplot(x="passengers", y="month", hue="year", data=flights)
```       
*As usual displaying the graph, we will be using this function.* 
```python     
       plt.show() 
```
 ### Wow! You have created your relp plot 🥳👏🏻###
        
 **Output**
 
 ![Relp plot](https://cloud-ikhasazgz.vercel.app/2relp_plot.png)
 

# Step 3. Violin Plot


**Data-set required named [tips](https://cloud-1oaqj43if.vercel.app/0tips.csv "click to download")


*Here, we need two libraries namely matplotlib and seaborn and you know how to import the library. Right?😉*
*Go ahead and do it*
```python
        import matplotlib.pyplot as plt
        import seaborn as sns
```
*Now simply loading ```tips``` dataset in tips variable(you can load datasets in any variable but make sure you use rename them reach places too.* 

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

![Violen plot](https://cloud-ikhasazgz.vercel.app/4violin_plot.png)


 ### Fantastic! You have created your violin plot ###
        
        
# Step 4. Pair Grid

**Data-set required [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download")

*Now, we will use plot type **PairGrid** which is one of its kind to compare the plotted graph between the different variables of the same dataset. which I do like it*
*Importing libraries namely numpy, pandas, matplotlib, seaborn, scipy. I know you will say too many libraries. We are not using them directly but the thing is they have dependencies on each other. So, we will be using them indirectly...*

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

 ### I knew it you can do it!🎆 You have created your Pair grid plot ###

# Step 5. Heat Map

**Data-set required [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download")

*Plotting the heatmap one of the most amazing feelings I had and you can have it too!.* 
*First we have to import the libraries namely numpy, matplotlib & seaborn, Now this super easy task for you!🤗*
 
```python
        import numpy as np
        import matplotlib.pyplot as plt
        import seaborn as sns
```
*Secondly we need to load the datasets in a variable* ```flights``` to use them later.*

```python
        flights = sns.load_dataset("flights")
```        
*Now, we will use pivot to handle duplicate values for one index/column pair and label the ```x-axis``` as months, ```y-axis``` as the year, and ```passengers``` will represent the intensity of in heatmap. For simplicity we use this convention more the number of passengers more will be the intensity of the color.*
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

 ### Marvellous! You have created your Heatmap plot ###


# voilà!

**Congratulations!✌️  you have completed the workshop. Share with your friends and family.
Frankly share with everyone🤗✌️🥳👏🏅🌇🎊**

![congratulations  g.i.f](https://cloud-mga2rf9gs.vercel.app/4tenor__1_.gif)

### You can create a lot of variety of heatmap as I have created below
 ![flight heatmap](https://cloud-tgw4nss32.vercel.app/0heatmap_2.png)


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
  **Data-set required named** [flights](https://cloud-5jao3dtbu.vercel.app/0flights.csv "click to download")


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

You can learn these graph plots too!

![](https://cloud-8c3mmthaa.vercel.app/0keep_hacking.png "You can make it happen!")
Resources

- [Univariate Distribution of Birth Rate](https://towardsdatascience.com/visualize-world-trends-using-seaborn-in-python-2e563e7d35da)
- [Cat plot Life Expectancy of people indifferent of the world](https://cmdlinetips.com/2019/03/catplot-in-seaborn-python/)
- [Cereals compositions Heatmap](https://towardsdatascience.com/heatmap-basics-with-pythons-seaborn-fb92ea280a6c)


