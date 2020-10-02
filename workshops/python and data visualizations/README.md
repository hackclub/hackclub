# Create basic graphs and data visualizations with python! 

![Stonks](https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F029%2F959%2FScreen_Shot_2019-06-05_at_1.26.32_PM.jpg)

You after you make your first data visualization^

*Follow along with this workshop to gain some data science skills! You will use python to create basic graphs and visualizations with real data. You can hand draw a graph anytime you want, but why not learn how to code one! You will learn about matplotlib, pandas, and numpy, so you can create any graph or vizualizaiton you dream of!*

Get started by going to [Jupyter](https://jupyter.org/try). When you get to the website you will see something like this...


**![Showing Homepage of Jupyter](https://lh5.googleusercontent.com/kf8WU2xC639Ogql75pwjVJFsHLkL1Jc39FNmU985vWokqKD7IsnbpUYYgYTn1ke_RzrsH4E3zELEMEAGhdUFwghXyNX75iWV8kwH_v4ADJETTzO-5IsHcijdSwtwf3gbBbC994tc0FA)**

Click the middle one (Try JupyterLab)! 

**Never used Jupyter? Here's a quick introduction/tutorial to [Jupyter](https://www.wevideo.com/view/1849208046)!** 

# Step One!

*Uploading Libraries* ...

First, we need to upload the [libraries](https://docs.python.org/3/library/) we will be using for this project. Every programming language has different “classes” that you need to use to access specific variables. The same thing occurs in Python, but instead they are known as libraries.
![Princess Belle in her wonderful library ](https://media1.tenor.com/images/ac626c2d2b7a34b52ea8a630e9add18d/tenor.gif?itemid=4087766)

*Libraries Upload Continued...*

In this workshop we will be using: [pandas](https://pandas.pydata.org/) , [numpy](https://numpy.org/), and [matplotlib](https://matplotlib.org/).

**Pandas**: This is not the furry animal you are thinking of, pandas is a efficient and easy way to use open source data analysis.
![enter image description here](https://i.pinimg.com/originals/35/fa/7d/35fa7d4060787c575eb0ec6a67411270.gif)

**Matplotlib**: This is a plotting library using a numerical mathematics extension Numpy.

**Numpy**: This is a python library that is very good with hard mathematical functions and arrays.

# Step Two: Let's Make A Simple Line Plot!

**Note: Customize your plots and graphs! (Labels, Values, etc.)**

``` python
import pandas as pd 
import matplotlib.pyplot as plt 
```
The code is above imports Pandas and Matplotlib into this project so we can have access to certain variables and methods available in these libraries!

```python
x=[x*2 for x in range (100)]
y=[y*2 for y in range (100)]

plt.plot(x,y)

```
This code segment will create the ranges on our x and y axis and `plt.plot` will plot the points we want! In this example there are no specific points being plot though, we are just making a basic linear function. 

```python
#showing graph
plt.show() 
```
This line will show the graph and points we plotted, basically giving the user an output. 

*`plt.show()` --> shows the graph output.*
*`plt.plot(x,y)` --> plots your points.*

**You should get something that looks like this...**
**![](https://lh6.googleusercontent.com/ANl3lVAPXZfLS8CDBbqIv3Pu8zYpzp5kqXoqBwa4RsDg0g-B0g3x_YnssB2ddfbSh1chvWTnWkvJKFZpuxOcfcQ3aT1vbxxoA3NX2LCY1KnIUXtfNIjeFuMAVW0vQ1RvhgijbcilX9c)**


# Now Let's Create A Simple Bar Graph!
```python 
import pandas as pd
import matplotlib.pyplot as plt
import random
```
This code above imports the libraries again. Notice that we import another library called `random` this will allow for a random number to be chosen each time we have a `y` value which you can see later in our code!

```python
x=['Tacos','Burritos','Churros']
y=[random.randint(0,30), random.randint(0,90),random.randint(0,10)]
plt.bar(x,y)
plt.show()
``` 

The code above names each of the bars (defines x and y lines), creates random values of Y using    ```random.randint()```, plots our points, and shows the graph!

Example: 

**![](https://lh6.googleusercontent.com/RWl3JKBqGZxuteF8vZtZQVri3TCxyRkKOG1zPygUGMQhNdJ3iBPqfIutg0oxXp-KpVUdKZUCYqMhT5i7yftGEasuvCuxWdac-RbAG5GK9zVXAGJ-EqrRnYaWzPxMafSjpBtdeTgZppc)**

# Let's Make It A Little More Complicated!

We are going to make a more personalized graph using three different functions

## Step One! 

I am sure you all have already guessed it hehe, Import your libraries!!!!!!!!!!

![Kermit the Frog Dancing!](https://media.tenor.com/images/614ba4f8eab2c798cd83d931c4b0f4b1/tenor.gif)

 ```python
import matplotlib.pyplot as plt 
import numpy as np
```
*Notice that we will be using numpy this time! :)*

### Hold up...what does matplotlib even do?

I am sooooo glad you asked! 

To create the graph we want to make we will be using the matplotlib library! It will...

-   Create an outline

-   Create an axes

-   Create axes ranges

-   Allows us to plot points

![Amazed Monkey Meme](https://impeccabletablemanners.files.wordpress.com/2016/05/monkey-puppet-omg-shock-gif.gif)

### Okay now lets get back to it...

*Make sure your libraries are uploaded!*

## Step Two!

The code below creates the skeleton of a graph, plots points, and shows output!
```python
#creates figure (graph skeleton)
fig,ax= plt.subplots()
#plots points
ax.plot([1,2,3,4],[1,4,2,3])
plt.show()
```
     
*Something new you may have noticed is the use of fig, or aka [figure](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.figure.html)*.

In the code above, and anytime you want to create a graph you will be using fig.

-   For example in our code so far we have used…
```python
fig,ax= plt.subplots()
```
     
-   This created a figure with a single axes.
- Here are a few different ways you can use fig…
```python
fig=plt.figure() 
#creates empty graph returns with num. figues
fig,ax =plt.subplots(2,2) #creates 2 graph figues
```
Check it out in your Jupyter Editor!

*Can you tell I have a strange fascination with random things dancing hehe*

## Step Three!

*Make sure libraries are uploaded, look back @ Step Two if needed*.

Set up spacing of your x and y axis...
 ```python
 x=np.linspace(0,2,100)
 ```

\*Make sure your libraries are uploaded!

## Step Four!

Create a figure! Scroll back up to see how to write that code...
Here is a hint 

`fig,ax= plt._____()`

*Still stuck? Where the underscores are you should put*

`fig,ax= plt.subplots()`

## Step Five!

Now we can plot some lines, in this part customize it however you want!

This example is going to have 3 basic functions (linear, squared, and cubed) but you can fancy yours up any way you want!

```python 
ax.plot(x,x,label='Sleep')
ax.plot(x,x**2,label='Worry if sky is falling...')
ax.plot(x,x**3,label='Be a icon')
```

*Label= will be the name of your line*

![These People Went a Little Crazy With the Label Maker - Label Everything |  Guff](https://cdn.guff.com/site_1/media/20000/19031/thumbnails/fb1_6a99eaed05ac9d5f956c3e32.jpg)

*`ax.plot` will plot your points/lines*

## Step Six!

Finishing touches!

![Bibitty Bobittiy Boo!](https://45.media.tumblr.com/tumblr_lz56maEBTj1qdmlfso1_250.gif)

   ```python 
   ax.set_xlabel('Time') #adds X axis label
   ax.set_ylabel('Years')#add Y axis label
   ax.set_title("Chicken Little's Plot") #adds a title
   ax.legend() #adds a key of the graph
   ```

You could possibly get someting that looks like this...
**![](https://lh3.googleusercontent.com/x7NafZjPviM76xz95YQKc4L8kW4zC3B5_zp4wE7Qv4FKWVX-6ZoB_4qtT4WbA1er9soAcMHZeBNgJgLMttFnr1hiXOkWxLQpBXI3uQQyRd7wOElTYLWZtczqgTvmWvmdOEzmnqMTECg)**


*If you are having any issues make sure to check your top right corner to check if the "kernel" is on and is set to Python 3*
**![](https://lh6.googleusercontent.com/PJUhbx9vkJDp955g7Azwv_j_EyXGC-_YA9NSED74DU1XbTSxuDUrPfXN4S1b3TY-cjtqaSwUJv6Cnat6Zqko3WQBZ9oSZwncGlOL9EckE6zTwOLVuJ3F9CKQrO8INgII254BJiNcazc)**
 

# If you are having any issues try copying the example code!

**All Example Code:**

   ```python 
   import pandas as pd
   import matplotlib.pyplot as plt
   import numpy as np
   
   x=np.linspace(0,2,100)
   fig,ax= plt.subplots()
   ax.plot(x,x,label='Sleep')
   ax.plot(x,x**2,label='Worry if sky is falling...')
   ax.plot(x,x**3,label='Be a icon')
   ax.set_xlabel('Time') #adds X axis label
   ax.set_ylabel('Years')#add Y axis lable
   ax.set_title("Chicken Little's Plot") #adds a title
   ax.legend() #adds a key of the graph
```
\*\*PS. If you have never watched [Chicken Little](https://youtu.be/PPuk2JQgMkU)

You must do that asap, you are missing out on a animated masterpiece.

![enter image description here](https://media1.tenor.com/images/fac310fb90bbde750d9f2e6ad1af44b1/tenor.gif?itemid=9695910)

# Add On!

**[Look up how to link in raw data from the web into your graphs](https://youtu.be/Ercd-Ip5PfQ).**

[Demo Code](https://gist.githubusercontent.com/datagy/a96789e1a6547cc25c234b6ebf7bf077/raw/25aa94e3a8de7a2a1250c07f74a7584467517721/covid-datagy1.py)
Follow full workshop using that covid-19 data with  [Visualizing Covid-19 Data](https://towardsdatascience.com/visualizing-covid-19-data-beautifully-in-python-in-5-minutes-or-less-affc361b2c6a)
By: Nic Piepenbreier!!!

#
**Heavily personalize your graph (like I did with Chicken Little)!
    \-Google code for different kinds of graphs (dot plot, pie charts, etc.)**
#   
**[Make multiple different kinds of graphs/visualizations](https://matplotlib.org/devdocs/gallery/subplots_axes_and_figures/subplots_demo.html).**
Example: 
   ```python 
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Ellipse

np.random.seed(19680801)

NUM = 250

ells = [Ellipse(xy=np.random.rand(2) * 10,
                width=np.random.rand(), height=np.random.rand(),
                angle=np.random.rand() * 360)
        for i in range(NUM)]

fig, ax = plt.subplots(subplot_kw={'aspect': 'equal'})
for e in ells:
    ax.add_artist(e)
    e.set_clip_box(ax.bbox)
    e.set_alpha(np.random.rand())
    e.set_facecolor(np.random.rand(3))

ax.set_xlim(0, 10)
ax.set_ylim(0, 10)

plt.show()

#Source: https://matplotlib.org/gallery/shapes_and_collections/ellipse_demo.html
```
**![](https://lh6.googleusercontent.com/v_Pj4spo28Zkbyxd_wIIUJ0anPs10QSlbOVbPXL0CcGPjVsSVxHJXMmZ4ddPYqf431rfLcu9gpUGirr4BzrJJmWFWO4I68D3kpe8CHRShTkXd-4Js6no1AIuk_EBpVam1VtPdgtRzNk)**
#

**Look up how to import [Google Trends](https://trends.google.com/trends/?geo=US) into your graph!**
Demo Code: 
```python 
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np 
import random

tiktok=pd.read_csv('multiTimeline (7).csv', header=1)

#for the csv file you need to download the graph off of google trends than uploaed it into jupyter notebook, than you copy the path and put it were multiTimeline (7).csv is. 

cols = tiktok.columns 
cols = [x.split()[0].lower() if len(x.split())>2 else x.lower() for x in cols]
tiktok.columns=cols

tiktok['week']= pd.to_datetime(tiktok['week'])
tiktok = tiktok.replace('<1', 1)
    
tiktok.set_index('week', inplace=True)

tiktok.plot(figsize=(14,6))

plt.title('Interest in Tik Tok over time');
```
Need help adding the Google trends data? [Click here!](https://www.wevideo.com/view/1850050637)

**![](https://lh5.googleusercontent.com/Lt40VZV23B-ArP0MlydpuNZIc_k3-rUUFhJI15l0Db2KXHFSLuE4ErKvwmh6zI8GklP6A96Xy2w3JHPbAvB6RpFEzbqw2DmA04nlrkAFpjCr6qS9jCe1Lb8tLxik-cVyVHHbNS-R-HA)**
#

# Want to learn more?

![Dancing Brain](https://media1.giphy.com/media/l41m04gr7tRet7Uas/giphy.gif)

Check out: 

1.  Learning [pandas](https://www.learnpython.org/en/Pandas_Basics)!

2.  Learning [Matplotlib](https://realpython.com/python-matplotlib-guide/)!

3.  [Codeacademy](https://www.codecademy.com/learn/paths/visualize-data-with-python)!
