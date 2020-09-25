# Basic Data Visualizations with Python!

What will you need: 
Go to [Try Jupyter](https://jupyter.org/try).
When you get to the website you will see something like this...



**![Showing Homepage of Jupyter](https://lh5.googleusercontent.com/kf8WU2xC639Ogql75pwjVJFsHLkL1Jc39FNmU985vWokqKD7IsnbpUYYgYTn1ke_RzrsH4E3zELEMEAGhdUFwghXyNX75iWV8kwH_v4ADJETTzO-5IsHcijdSwtwf3gbBbC994tc0FA)**

Click the middle one (Try JupyterLab)! 


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
```#Example for Simple Line Plot

#importing libraries 

import pandas as pd 
import matplotlib.pyplot as plt 

#creating x and y axis

x=[x*2 for x in range (100)]
y=[y*2 for y in range (100)]

#plotting function

plt.plot(x,y)

#showing graph
plt.show() 
```

*plt.show() --> shows the graph output.*
*plt.plot(x,y) --> plots your points.*


# Now Let's Create A Simple Bar Graph!

```
#Remeber to Import Libraries! 

import pandas as pd

import matplotlib.pyplot as plt

import random

  

x=['Tacos','Burritos','Churros']

  

y=[random.randint(0,30), random.randint(0,90),random.randint(0,10)]

  

plt.bar(x,y)

  

plt.show()
```
*Notice that we added in another library, Random. This allows us to be  have different y values each time!*

Example: 
**![](https://lh6.googleusercontent.com/RWl3JKBqGZxuteF8vZtZQVri3TCxyRkKOG1zPygUGMQhNdJ3iBPqfIutg0oxXp-KpVUdKZUCYqMhT5i7yftGEasuvCuxWdac-RbAG5GK9zVXAGJ-EqrRnYaWzPxMafSjpBtdeTgZppc)**


# Let's Make It A Little More Complicated! 

Step One! 
I am sure you all have already guessed it hehe, Import your libraries!!!!!!!!!!

![Kermit the Frog Dancing!](https://media.tenor.com/images/614ba4f8eab2c798cd83d931c4b0f4b1/tenor.gif)

```
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

Step Two!

```
#creates graph/plot

fig,ax= plt.subplots()

  

#plots points

ax.plot([1,2,3,4],[1,4,2,3])

  

plt.show()
```
Something new you may have noticed is the use of fig, or aka [figure](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.figure.html).

In the code above, and anytime you want to create a graph you will be using fig.

-   For example in our code so far we have used…

```
fig,ax= plt.subplots()
```
    
-   This created a figure with a single axes.
    
-   Here are a few different ways you can use fig…

```
fig=plt.figure() 
#creates empty graph returns with num. figues
```
```
fig,ax =plt.subplots(2,2) #creates 2 graph figues
```
Check it our in your Jupyter Editor!

![Winnie the Poo dancing!](https://i.pinimg.com/originals/50/5a/0e/505a0e4591fc8052631bed84ac0de1ee.gif)

*Can you tell I have a strange fascination with random things dancing hehe*

**Step Three!**

Set up spacing...
```
x=np.linspace(0,2,100)
```
*Make sure your libraries are uploaded!

**![](https://lh6.googleusercontent.com/ZZZKu7uQ5OpxOeTnuK22mvFfBRf73ceik_OWP87KWX2_0X5vshMznYOxUVgVLf6kUyPtRKsp30p8vaE0xRB3cXcGBvp6LjXIj2525oKKrMS41N5dgOQuT8BEKCxKObwPTY8pICVoAGw)**

**Step Four!** 
Create a figure! Scroll back up to see how to write that code...
Here is a hint 
```
fig,ax= plt._____()
```
*Still stuck? Where the underscores are you should put*
```
fig,ax= plt.subplots()
```
**Step Five!**
Now we can plot some lines, in this part customize it however you want!

 This example is going to have 3 basic functions (linear, squared, and cubed) but you can fancy yours up any way you want!
 ```
ax.plot(x,x,label='Sleep')
ax.plot(x,x**2,label='Worry if sky is falling...')
ax.plot(x,x**3,label='Be a icon')
```
*Label= will be the name of your line*

![These People Went a Little Crazy With the Label Maker - Label Everything |  Guff](https://cdn.guff.com/site_1/media/20000/19031/thumbnails/fb1_6a99eaed05ac9d5f956c3e32.jpg)

*ax.plot will plot your points/lines*

**Step Six!**

Finishing touches!

![Bibitty Bobittiy Boo!](https://45.media.tumblr.com/tumblr_lz56maEBTj1qdmlfso1_250.gif)

 ```
ax.set_xlabel('Time') #adds X axis label
ax.set_ylabel('Years')#add Y axis label
ax.set_title("Chicken Little's Plot") #adds a title
ax.legend() #adds a key of the graph
 ```

You could possibly get someting that looks like this...
**![](https://lh3.googleusercontent.com/x7NafZjPviM76xz95YQKc4L8kW4zC3B5_zp4wE7Qv4FKWVX-6ZoB_4qtT4WbA1er9soAcMHZeBNgJgLMttFnr1hiXOkWxLQpBXI3uQQyRd7wOElTYLWZtczqgTvmWvmdOEzmnqMTECg)**
#
*If you are having any issues make sure to check your top right corner to check if the "kernel" is on and is set to Python 3*
**![](https://lh6.googleusercontent.com/PJUhbx9vkJDp955g7Azwv_j_EyXGC-_YA9NSED74DU1XbTSxuDUrPfXN4S1b3TY-cjtqaSwUJv6Cnat6Zqko3WQBZ9oSZwncGlOL9EckE6zTwOLVuJ3F9CKQrO8INgII254BJiNcazc)**
#
**All Example Code:**
 ```
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

**PS. If you have never watched [Chicken Little](https://youtu.be/PPuk2JQgMkU)

You must do that asap, you are missing out on a animated masterpiece.

![enter image description here](https://media1.tenor.com/images/fac310fb90bbde750d9f2e6ad1af44b1/tenor.gif?itemid=9695910)


# Add On!

-   Look up how to link in raw data from the web into your graphs
    Hint: start off w/ pd.read_csv()
    -Heavily personalize your graph (like I did with Chicken Little)!
    -Google code for different kinds of graphs (dot plot, pie charts, etc.)
    -Make multiple different graphs (the set of four/set them up with figure.
    -Continue to play around!
    -Google!
    -Look up how to import Google Trends into your graph!



**Check out/Follow along with [Visualizing Covid-19 Data](https://towardsdatascience.com/visualizing-covid-19-data-beautifully-in-python-in-5-minutes-or-less-affc361b2c6a)
By: Nic Piepenbreier!!!**

# Want to learn more?
![Dancing Brain](https://media1.giphy.com/media/l41m04gr7tRet7Uas/giphy.gif)

Check out: 
1.  Learning pandas-[https://www.learnpython.org/en/Pandas_Basics](https://www.learnpython.org/en/Pandas_Basics)
    
2.  Learning Matplotlib-[https://realpython.com/python-matplotlib-guide/](https://realpython.com/python-matplotlib-guide/)
    
3.  Codeacademy[- https://www.codecademy.com/learn/paths/visualize-data-with-python](https://www.codecademy.com/learn/paths/visualize-data-with-python)
