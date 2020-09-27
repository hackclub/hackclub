---
name: 'Intro To ML'
description: 'Making an Machine Learning model to predict relation between 2 number sets '
author: '@Agrim-Bansal'
---





# Introduction


Today We'll make a machine learning model where it learns the relationship between two sets of numbers.

<br/>

# Machine Learning
Machine learning is very similar to Artificial Intelligence but it is not exactly it. Machine learnig (or ML as it is called) is all about data and classification.

When we as programmers code a normal program, there we define rules and input some test data and at end, obtain results.

But in machine learning, the process is somewhat different. Here we provide the machine some input data and some output data ie the known test data and it is the task of the machine to figure out what is the relation between the sets of data and further predict output values for unknown input data

Lets come to the process
We provide the machine with some sets of data (usually 2) and it is made to establish a link between the data sets or "the ML model is trained". 
In this process of training, the machine makes a guess and then checks how good or bad the guess was and it calculates the loss. Then it uses an optimzer to make another optimized guess which is better than the previous one or the loss is decreased. This process continues as many times as we specify.

So, for example, we have 2 data sets as follows :

[ 1, 2, 3, 4, 5, 6, 7 ]

[ 3, 5, 7, 9, 11, 13, 15 ]

We can easily figure out the relation between the 2 given sets which is 2x + 1.

But how can we train a comuter to do the equivalent task i.e. to figure out the relationship and predict for a future number?
Using data! 

We'll be feeding it with a set of Xs, and a set of Ys, and when we train it then it should be able to figure out the relationship between them. 

So, lets get started :)

Note : for this project We use PYTHON and a library called Tensorflow

<br/>


<br/>
<br/>




# Using Google Colab

We'll be making our project on a google colab notebook.
Go to https://colab.research.google.com and sign in with your google account.

Then  Click on File > New notebook

<br />

Connect to a machine

<br />

Add a code block and we are ready to get started !

(Press ctrl + Enter to run the code)

<br/>

<br/>


# Imports

Let's start with our imports. Imports provide us a way to exceed the limits of inbuilt modules and functions.
They are just some code peices written by developers which make repetitive tasks way more easier and help in reducing out code

To import a module (called a library) the syntax is :
```import <library_name> ```


<br />


Further, we can import something specific instead of the  complete library(to reduce program size) from the library using :

```from <library_name> import <object_name>``` 

<br />




Also, we can name them something else for our ease as so that instead of accessing it from the original name, we can give it a shorter name:
 
 ```import <library_name> as <easier_name>```

 <br />

*For more, refer to https://docs.python.org/3/reference/import.html

<br />


Here we are importing the library TensorFlow and calling it "tf" for ease of use.
This library contains many tools for machine learning


We then import a library called 'Numpy', which helps us to represent and manipulate our data as lists easily and quickly. We call it as "np"for ease.
It provides a quicker and easier way to manipuate lists as compared to python's inbuilt listing system.

Numpy documentation : https://numpy.org/doc/

<br />


The framework for defining a neural network as a set of Sequential layers is called keras, so we import that too.
We're importing it separately for our ease.



```
import tensorflow as tf
import numpy as np
from tensorflow import keras
```

<br/>
<br/>
<br/>

# Defining the Neural Network

Next we will create a neural network (a very simple one).
Neural network can be compared to a brain and it is the thing which will perform all the operations and working. The one we are creating has 1 layer, and that layer has 1 neuron, and the input is just 1 value.

A neural network is a network or circuit of neurons, or an artificial neural network, composed of artificial neurons or nodes. A positive value reflects an excitatory connection, while negative values mean inhibitory connections. 

![neural network](https://cloud-ltmlw2jd1.vercel.app/neural.png)

```
model = tf.keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])])
```

Here, model is a variable which stores the neural network to be referred further in the program.

<br/><br/><br/>


# Compilation

Now we compile our Neural Network. When we do so, we have to specify 2 functions, a loss and an optimizer.


We know that in our function, the relationship between the numbers is y=2x+1. 

When the computer is trying to 'learn' that, it makes a guess...maybe y=10x+10. The LOSS function measures the guessed answers against the known correct answers and measures how well or how badly it did.

It then uses the OPTIMIZER function to make another guess. Based on how the loss function went, it will try to minimize the loss. At that point maybe it will come up with somehting like y=5x+5, which, while still pretty bad, is closer to the correct result (i.e. the loss is lower)

It will repeat this for the number of "EPOCHS" which we will see shortly. But first, here's how we tell it to use 'MEAN SQUARED ERROR' for the loss and 'STOCHASTIC GRADIENT DESCENT' for the optimizer. We don't need to understand the math for these yet, but we can see that they work! :)

Over time we will learn the different and appropriate loss and optimizer functions for different scenarios. 



```
model.compile(optimizer='sgd', loss='mean_squared_error')
```


<br/><br/><br/>

# Providing the Data

Next up we'll feed in some data. In this case we are taking 6 xs and 6ys. We can see that the relationship between these is that y=2x+1, so where x = -1, y=-3 etc. etc. 

'Numpy' provides lots of array type data structures that are a standard way of doing it. We declare that the way we want to use these by specifying the values as an np.array[]

*dtype stands for "data type"


```
xs = np.array([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0], dtype=float)
ys = np.array([-1.0, 1.0, 3.0, 5.0, 7.0, 9.0, 11.0], dtype=float)
```


<br/><br/><br/>

# Training the Neural Network

The process of training the neural network , where it 'learns' the relationship between the Xs and Ys is in the **model.fit**  call. This is where it will go through the loop we spoke about above, making a guess, measuring how good or bad it is (i.e. the loss), using the opimizer to make another guess etc. It will do it for the number of epochs we specify. When we run this code, we'll see the loss on the right hand side.


```
model.fit(xs, ys, epochs=700)
```
<style>
pre {
  max-height: 500px;
  overflow-y: scroll;
}
</style>

```
    Epoch 1/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.0000
    Epoch 2/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.5120
    Epoch 3/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.8004
    Epoch 4/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.6229
    Epoch 5/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.8128
    Epoch 6/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.2554
    Epoch 7/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.8718
    Epoch 8/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.6078
    Epoch 9/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.4260
    Epoch 10/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.3008
    Epoch 11/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.2146
    Epoch 12/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.1551
    Epoch 13/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.1141
    Epoch 14/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0857
    Epoch 15/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0660
    Epoch 16/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0524
    Epoch 17/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0429
    Epoch 18/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0362
    Epoch 19/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0315
    Epoch 20/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0281
    Epoch 21/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0257
    Epoch 22/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0239
    Epoch 23/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0225
    Epoch 24/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0215
    Epoch 25/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0207
    Epoch 26/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0200
    Epoch 27/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0194
    Epoch 28/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0189
    Epoch 29/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0184
    Epoch 30/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0180
    Epoch 31/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0177
    Epoch 32/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0173
    Epoch 33/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0170
    Epoch 34/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0166
    Epoch 35/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0163
    Epoch 36/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0160
    Epoch 37/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0157
    Epoch 38/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0154
    Epoch 39/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0151
    Epoch 40/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0148
    Epoch 41/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0145
    Epoch 42/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0143
    Epoch 43/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0140
    Epoch 44/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0137
    Epoch 45/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0135
    Epoch 46/700
    1/1 [==============================] - 0s 3ms/step - loss: 0.0132
    Epoch 47/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0130
    Epoch 48/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0127
    Epoch 49/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0125
    Epoch 50/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0123
    Epoch 51/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0120
    Epoch 52/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0118
    Epoch 53/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0116
    Epoch 54/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0114
    Epoch 55/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0112
    Epoch 56/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0110
    Epoch 57/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0108
    Epoch 58/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0106
    Epoch 59/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0104
    Epoch 60/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0102
    Epoch 61/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0100
    Epoch 62/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0098
    Epoch 63/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0096
    Epoch 64/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0094
    Epoch 65/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0092
    Epoch 66/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0091
    Epoch 67/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0089
    Epoch 68/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0087
    Epoch 69/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0086
    Epoch 70/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0084
    Epoch 71/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0083
    Epoch 72/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0081
    Epoch 73/700
    1/1 [==============================] - 0s 4ms/step - loss: 0.0080
    Epoch 74/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0078
    Epoch 75/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0077
    Epoch 76/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0075
    Epoch 77/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0074
    Epoch 78/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0072
    Epoch 79/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0071
    Epoch 80/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0070
    Epoch 81/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0068
    Epoch 82/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0067
    Epoch 83/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0066
    Epoch 84/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0065
    Epoch 85/700
    1/1 [==============================] - 0s 977us/step - loss: 0.0063
    Epoch 86/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0062
    Epoch 87/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0061
    Epoch 88/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0060
    Epoch 89/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0059
    Epoch 90/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0058
    Epoch 91/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0057
    Epoch 92/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0056
    Epoch 93/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0055
    Epoch 94/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0054
    Epoch 95/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0053
    Epoch 96/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0052
    Epoch 97/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0051
    Epoch 98/700
    1/1 [==============================] - 0s 3ms/step - loss: 0.0050
    Epoch 99/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0049
    Epoch 100/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0048
    Epoch 101/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0047
    Epoch 102/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0046
    Epoch 103/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0045
    Epoch 104/700
    1/1 [==============================] - 0s 970us/step - loss: 0.0044
    Epoch 105/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0044
    Epoch 106/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0043
    Epoch 107/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0042
    Epoch 108/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0041
    Epoch 109/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0040
    Epoch 110/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0040
    Epoch 111/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0039
    Epoch 112/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0038
    Epoch 113/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0037
    Epoch 114/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0037
    Epoch 115/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0036
    Epoch 116/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0035
    Epoch 117/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0035
    Epoch 118/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0034
    Epoch 119/700
    1/1 [==============================] - 0s 4ms/step - loss: 0.0033
    Epoch 120/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0033
    Epoch 121/700
    1/1 [==============================] - 0s 3ms/step - loss: 0.0032
    Epoch 122/700
    1/1 [==============================] - 0s 3ms/step - loss: 0.0032
    Epoch 123/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0031
    Epoch 124/700
    1/1 [==============================] - 0s 4ms/step - loss: 0.0030
    Epoch 125/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0030
    Epoch 126/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0029
    Epoch 127/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0029
    Epoch 128/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0028
    Epoch 129/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0028
    Epoch 130/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0027
    Epoch 131/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0027
    Epoch 132/700
    1/1 [==============================] - 0s 3ms/step - loss: 0.0026
    Epoch 133/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0026
    Epoch 134/700
    1/1 [==============================] - 0s 3ms/step - loss: 0.0025
    Epoch 135/700
    1/1 [==============================] - 0s 3ms/step - loss: 0.0025
    Epoch 136/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0024
    Epoch 137/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0024
    Epoch 138/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0023
    Epoch 139/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0023
    Epoch 140/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0023
    Epoch 141/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0022
    Epoch 142/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0022
    Epoch 143/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0021
    Epoch 144/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0021
    Epoch 145/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0020
    Epoch 146/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0020
    Epoch 147/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0020
    Epoch 148/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0019
    Epoch 149/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0019
    Epoch 150/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0019
    Epoch 151/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0018
    Epoch 152/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0018
    Epoch 153/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0018
    Epoch 154/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0017
    Epoch 155/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0017
    Epoch 156/700
    1/1 [==============================] - 0s 3ms/step - loss: 0.0017
    Epoch 157/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0016
    Epoch 158/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0016
    Epoch 159/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0016
    Epoch 160/700
    1/1 [==============================] - 0s 3ms/step - loss: 0.0015
    Epoch 161/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0015
    Epoch 162/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0015
    Epoch 163/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0015
    Epoch 164/700
    1/1 [==============================] - 0s 6ms/step - loss: 0.0014
    Epoch 165/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0014
    Epoch 166/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0014
    Epoch 167/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0014
    Epoch 168/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0013
    Epoch 169/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0013
    Epoch 170/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0013
    Epoch 171/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0013
    Epoch 172/700
    1/1 [==============================] - 0s 1ms/step - loss: 0.0012
    Epoch 173/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0012
    Epoch 174/700
    1/1 [==============================] - 0s 942us/step - loss: 0.0012
    Epoch 175/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0012
    Epoch 176/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0011
    Epoch 177/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0011
    Epoch 178/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0011
    Epoch 179/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0011
    Epoch 180/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0011
    Epoch 181/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0010
    Epoch 182/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0010
    Epoch 183/700
    1/1 [==============================] - 0s 2ms/step - loss: 0.0010
    Epoch 184/700
    1/1 [==============================] - 0s 3ms/step - loss: 9.8216e-04
    Epoch 185/700
    1/1 [==============================] - 0s 3ms/step - loss: 9.6382e-04
    Epoch 186/700
    1/1 [==============================] - 0s 2ms/step - loss: 9.4584e-04
    Epoch 187/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.2818e-04
    Epoch 188/700
    1/1 [==============================] - 0s 3ms/step - loss: 9.1086e-04
    Epoch 189/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.9386e-04
    Epoch 190/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.7717e-04
    Epoch 191/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.6080e-04
    Epoch 192/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.4473e-04
    Epoch 193/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.2896e-04
    Epoch 194/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.1348e-04
    Epoch 195/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.9830e-04
    Epoch 196/700
    1/1 [==============================] - 0s 993us/step - loss: 7.8339e-04
    Epoch 197/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.6877e-04
    Epoch 198/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.5442e-04
    Epoch 199/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.4034e-04
    Epoch 200/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.2652e-04
    Epoch 201/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.1296e-04
    Epoch 202/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.9964e-04
    Epoch 203/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.8659e-04
    Epoch 204/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.7377e-04
    Epoch 205/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.6119e-04
    Epoch 206/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.4885e-04
    Epoch 207/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.3674e-04
    Epoch 208/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.2485e-04
    Epoch 209/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.1319e-04
    Epoch 210/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.0174e-04
    Epoch 211/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.9051e-04
    Epoch 212/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.7949e-04
    Epoch 213/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.6867e-04
    Epoch 214/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.5806e-04
    Epoch 215/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.4764e-04
    Epoch 216/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.3741e-04
    Epoch 217/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.2738e-04
    Epoch 218/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.1754e-04
    Epoch 219/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.0788e-04
    Epoch 220/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.9840e-04
    Epoch 221/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.8909e-04
    Epoch 222/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.7996e-04
    Epoch 223/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.7100e-04
    Epoch 224/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.6221e-04
    Epoch 225/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.5358e-04
    Epoch 226/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.4512e-04
    Epoch 227/700
    1/1 [==============================] - 0s 3ms/step - loss: 4.3681e-04
    Epoch 228/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.2866e-04
    Epoch 229/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.2066e-04
    Epoch 230/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.1280e-04
    Epoch 231/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.0509e-04
    Epoch 232/700
    1/1 [==============================] - 0s 3ms/step - loss: 3.9753e-04
    Epoch 233/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.9011e-04
    Epoch 234/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.8282e-04
    Epoch 235/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.7568e-04
    Epoch 236/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.6867e-04
    Epoch 237/700
    1/1 [==============================] - 0s 3ms/step - loss: 3.6179e-04
    Epoch 238/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.5503e-04
    Epoch 239/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.4841e-04
    Epoch 240/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.4191e-04
    Epoch 241/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.3552e-04
    Epoch 242/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.2926e-04
    Epoch 243/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.2311e-04
    Epoch 244/700
    1/1 [==============================] - 0s 974us/step - loss: 3.1708e-04
    Epoch 245/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.1116e-04
    Epoch 246/700
    1/1 [==============================] - 0s 952us/step - loss: 3.0535e-04
    Epoch 247/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.9965e-04
    Epoch 248/700
    1/1 [==============================] - 0s 939us/step - loss: 2.9406e-04
    Epoch 249/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.8857e-04
    Epoch 250/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.8318e-04
    Epoch 251/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.7790e-04
    Epoch 252/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.7271e-04
    Epoch 253/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.6762e-04
    Epoch 254/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.6263e-04
    Epoch 255/700
    1/1 [==============================] - 0s 815us/step - loss: 2.5772e-04
    Epoch 256/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.5291e-04
    Epoch 257/700
    1/1 [==============================] - 0s 969us/step - loss: 2.4819e-04
    Epoch 258/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.4356e-04
    Epoch 259/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.3901e-04
    Epoch 260/700
    1/1 [==============================] - 0s 921us/step - loss: 2.3455e-04
    Epoch 261/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.3017e-04
    Epoch 262/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.2587e-04
    Epoch 263/700
    1/1 [==============================] - 0s 951us/step - loss: 2.2166e-04
    Epoch 264/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.1752e-04
    Epoch 265/700
    1/1 [==============================] - 0s 977us/step - loss: 2.1346e-04
    Epoch 266/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.0948e-04
    Epoch 267/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.0557e-04
    Epoch 268/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.0173e-04
    Epoch 269/700
    1/1 [==============================] - 0s 971us/step - loss: 1.9796e-04
    Epoch 270/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.9427e-04
    Epoch 271/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.9064e-04
    Epoch 272/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.8708e-04
    Epoch 273/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.8359e-04
    Epoch 274/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.8016e-04
    Epoch 275/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.7680e-04
    Epoch 276/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.7350e-04
    Epoch 277/700
    1/1 [==============================] - 0s 846us/step - loss: 1.7026e-04
    Epoch 278/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.6708e-04
    Epoch 279/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.6396e-04
    Epoch 280/700
    1/1 [==============================] - 0s 909us/step - loss: 1.6090e-04
    Epoch 281/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.5790e-04
    Epoch 282/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.5495e-04
    Epoch 283/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.5206e-04
    Epoch 284/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.4922e-04
    Epoch 285/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.4643e-04
    Epoch 286/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.4370e-04
    Epoch 287/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.4102e-04
    Epoch 288/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.3839e-04
    Epoch 289/700
    1/1 [==============================] - 0s 6ms/step - loss: 1.3580e-04
    Epoch 290/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.3327e-04
    Epoch 291/700
    1/1 [==============================] - 0s 3ms/step - loss: 1.3078e-04
    Epoch 292/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.2834e-04
    Epoch 293/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.2594e-04
    Epoch 294/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.2359e-04
    Epoch 295/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.2129e-04
    Epoch 296/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1902e-04
    Epoch 297/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.1680e-04
    Epoch 298/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1462e-04
    Epoch 299/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1248e-04
    Epoch 300/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1038e-04
    Epoch 301/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.0832e-04
    Epoch 302/700
    1/1 [==============================] - 0s 3ms/step - loss: 1.0630e-04
    Epoch 303/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.0431e-04
    Epoch 304/700
    1/1 [==============================] - 0s 3ms/step - loss: 1.0237e-04
    Epoch 305/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.0046e-04
    Epoch 306/700
    1/1 [==============================] - 0s 2ms/step - loss: 9.8580e-05
    Epoch 307/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.6740e-05
    Epoch 308/700
    1/1 [==============================] - 0s 2ms/step - loss: 9.4935e-05
    Epoch 309/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.3164e-05
    Epoch 310/700
    1/1 [==============================] - 0s 911us/step - loss: 9.1424e-05
    Epoch 311/700
    1/1 [==============================] - 0s 8ms/step - loss: 8.9717e-05
    Epoch 312/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.8043e-05
    Epoch 313/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.6399e-05
    Epoch 314/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.4786e-05
    Epoch 315/700
    1/1 [==============================] - 0s 3ms/step - loss: 8.3203e-05
    Epoch 316/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.1649e-05
    Epoch 317/700
    1/1 [==============================] - 0s 939us/step - loss: 8.0125e-05
    Epoch 318/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.8628e-05
    Epoch 319/700
    1/1 [==============================] - 0s 792us/step - loss: 7.7161e-05
    Epoch 320/700
    1/1 [==============================] - 0s 988us/step - loss: 7.5720e-05
    Epoch 321/700
    1/1 [==============================] - 0s 845us/step - loss: 7.4308e-05
    Epoch 322/700
    1/1 [==============================] - 0s 778us/step - loss: 7.2919e-05
    Epoch 323/700
    1/1 [==============================] - 0s 941us/step - loss: 7.1559e-05
    Epoch 324/700
    1/1 [==============================] - 0s 944us/step - loss: 7.0224e-05
    Epoch 325/700
    1/1 [==============================] - 0s 826us/step - loss: 6.8914e-05
    Epoch 326/700
    1/1 [==============================] - 0s 989us/step - loss: 6.7627e-05
    Epoch 327/700
    1/1 [==============================] - 0s 3ms/step - loss: 6.6365e-05
    Epoch 328/700
    1/1 [==============================] - 0s 3ms/step - loss: 6.5126e-05
    Epoch 329/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.3910e-05
    Epoch 330/700
    1/1 [==============================] - 0s 971us/step - loss: 6.2718e-05
    Epoch 331/700
    1/1 [==============================] - 0s 907us/step - loss: 6.1547e-05
    Epoch 332/700
    1/1 [==============================] - 0s 3ms/step - loss: 6.0397e-05
    Epoch 333/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.9271e-05
    Epoch 334/700
    1/1 [==============================] - 0s 879us/step - loss: 5.8163e-05
    Epoch 335/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.7078e-05
    Epoch 336/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.6012e-05
    Epoch 337/700
    1/1 [==============================] - 0s 3ms/step - loss: 5.4967e-05
    Epoch 338/700
    1/1 [==============================] - 0s 721us/step - loss: 5.3941e-05
    Epoch 339/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.2934e-05
    Epoch 340/700
    1/1 [==============================] - 0s 839us/step - loss: 5.1946e-05
    Epoch 341/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.0977e-05
    Epoch 342/700
    1/1 [==============================] - 0s 3ms/step - loss: 5.0026e-05
    Epoch 343/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.9092e-05
    Epoch 344/700
    1/1 [==============================] - 0s 985us/step - loss: 4.8175e-05
    Epoch 345/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.7278e-05
    Epoch 346/700
    1/1 [==============================] - 0s 944us/step - loss: 4.6393e-05
    Epoch 347/700
    1/1 [==============================] - 0s 858us/step - loss: 4.5527e-05
    Epoch 348/700
    1/1 [==============================] - 0s 851us/step - loss: 4.4678e-05
    Epoch 349/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.3843e-05
    Epoch 350/700
    1/1 [==============================] - 0s 962us/step - loss: 4.3026e-05
    Epoch 351/700
    1/1 [==============================] - 0s 872us/step - loss: 4.2223e-05
    Epoch 352/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.1434e-05
    Epoch 353/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.0659e-05
    Epoch 354/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.9900e-05
    Epoch 355/700
    1/1 [==============================] - 0s 938us/step - loss: 3.9157e-05
    Epoch 356/700
    1/1 [==============================] - 0s 765us/step - loss: 3.8424e-05
    Epoch 357/700
    1/1 [==============================] - 0s 906us/step - loss: 3.7709e-05
    Epoch 358/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.7004e-05
    Epoch 359/700
    1/1 [==============================] - 0s 770us/step - loss: 3.6312e-05
    Epoch 360/700
    1/1 [==============================] - 0s 897us/step - loss: 3.5635e-05
    Epoch 361/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.4970e-05
    Epoch 362/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.4317e-05
    Epoch 363/700
    1/1 [==============================] - 0s 847us/step - loss: 3.3677e-05
    Epoch 364/700
    1/1 [==============================] - 0s 995us/step - loss: 3.3049e-05
    Epoch 365/700
    1/1 [==============================] - 0s 978us/step - loss: 3.2430e-05
    Epoch 366/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.1824e-05
    Epoch 367/700
    1/1 [==============================] - 0s 863us/step - loss: 3.1231e-05
    Epoch 368/700
    1/1 [==============================] - 0s 857us/step - loss: 3.0647e-05
    Epoch 369/700
    1/1 [==============================] - 0s 813us/step - loss: 3.0076e-05
    Epoch 370/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.9514e-05
    Epoch 371/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.8964e-05
    Epoch 372/700
    1/1 [==============================] - 0s 3ms/step - loss: 2.8423e-05
    Epoch 373/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.7892e-05
    Epoch 374/700
    1/1 [==============================] - 0s 938us/step - loss: 2.7372e-05
    Epoch 375/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.6860e-05
    Epoch 376/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.6360e-05
    Epoch 377/700
    1/1 [==============================] - 0s 3ms/step - loss: 2.5868e-05
    Epoch 378/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.5385e-05
    Epoch 379/700
    1/1 [==============================] - 0s 886us/step - loss: 2.4911e-05
    Epoch 380/700
    1/1 [==============================] - 0s 935us/step - loss: 2.4445e-05
    Epoch 381/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.3989e-05
    Epoch 382/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.3541e-05
    Epoch 383/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.3102e-05
    Epoch 384/700
    1/1 [==============================] - 0s 881us/step - loss: 2.2671e-05
    Epoch 385/700
    1/1 [==============================] - 0s 996us/step - loss: 2.2248e-05
    Epoch 386/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.1832e-05
    Epoch 387/700
    1/1 [==============================] - 0s 972us/step - loss: 2.1424e-05
    Epoch 388/700
    1/1 [==============================] - 0s 742us/step - loss: 2.1025e-05
    Epoch 389/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.0632e-05
    Epoch 390/700
    1/1 [==============================] - 0s 985us/step - loss: 2.0247e-05
    Epoch 391/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.9870e-05
    Epoch 392/700
    1/1 [==============================] - 0s 4ms/step - loss: 1.9499e-05
    Epoch 393/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.9134e-05
    Epoch 394/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.8778e-05
    Epoch 395/700
    1/1 [==============================] - 0s 987us/step - loss: 1.8427e-05
    Epoch 396/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.8083e-05
    Epoch 397/700
    1/1 [==============================] - 0s 940us/step - loss: 1.7745e-05
    Epoch 398/700
    1/1 [==============================] - 0s 836us/step - loss: 1.7414e-05
    Epoch 399/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.7090e-05
    Epoch 400/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.6770e-05
    Epoch 401/700
    1/1 [==============================] - 0s 910us/step - loss: 1.6457e-05
    Epoch 402/700
    1/1 [==============================] - 0s 800us/step - loss: 1.6150e-05
    Epoch 403/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.5849e-05
    Epoch 404/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.5553e-05
    Epoch 405/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.5263e-05
    Epoch 406/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.4977e-05
    Epoch 407/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.4698e-05
    Epoch 408/700
    1/1 [==============================] - 0s 3ms/step - loss: 1.4424e-05
    Epoch 409/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.4155e-05
    Epoch 410/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.3890e-05
    Epoch 411/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.3631e-05
    Epoch 412/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.3376e-05
    Epoch 413/700
    1/1 [==============================] - 0s 864us/step - loss: 1.3127e-05
    Epoch 414/700
    1/1 [==============================] - 0s 956us/step - loss: 1.2882e-05
    Epoch 415/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.2641e-05
    Epoch 416/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.2405e-05
    Epoch 417/700
    1/1 [==============================] - 0s 854us/step - loss: 1.2173e-05
    Epoch 418/700
    1/1 [==============================] - 0s 834us/step - loss: 1.1946e-05
    Epoch 419/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1723e-05
    Epoch 420/700
    1/1 [==============================] - 0s 939us/step - loss: 1.1504e-05
    Epoch 421/700
    1/1 [==============================] - 0s 892us/step - loss: 1.1290e-05
    Epoch 422/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.1079e-05
    Epoch 423/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.0872e-05
    Epoch 424/700
    1/1 [==============================] - 0s 4ms/step - loss: 1.0670e-05
    Epoch 425/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.0471e-05
    Epoch 426/700
    1/1 [==============================] - 0s 995us/step - loss: 1.0275e-05
    Epoch 427/700
    1/1 [==============================] - 0s 766us/step - loss: 1.0083e-05
    Epoch 428/700
    1/1 [==============================] - 0s 977us/step - loss: 9.8943e-06
    Epoch 429/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.7103e-06
    Epoch 430/700
    1/1 [==============================] - 0s 5ms/step - loss: 9.5284e-06
    Epoch 431/700
    1/1 [==============================] - 0s 3ms/step - loss: 9.3507e-06
    Epoch 432/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.1766e-06
    Epoch 433/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.0052e-06
    Epoch 434/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.8365e-06
    Epoch 435/700
    1/1 [==============================] - 0s 3ms/step - loss: 8.6725e-06
    Epoch 436/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.5093e-06
    Epoch 437/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.3510e-06
    Epoch 438/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.1951e-06
    Epoch 439/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.0418e-06
    Epoch 440/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.8916e-06
    Epoch 441/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.7445e-06
    Epoch 442/700
    1/1 [==============================] - 0s 973us/step - loss: 7.6001e-06
    Epoch 443/700
    1/1 [==============================] - 0s 906us/step - loss: 7.4580e-06
    Epoch 444/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.3186e-06
    Epoch 445/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.1822e-06
    Epoch 446/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.0483e-06
    Epoch 447/700
    1/1 [==============================] - 0s 877us/step - loss: 6.9171e-06
    Epoch 448/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.7876e-06
    Epoch 449/700
    1/1 [==============================] - 0s 3ms/step - loss: 6.6606e-06
    Epoch 450/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.5366e-06
    Epoch 451/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.4149e-06
    Epoch 452/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.2948e-06
    Epoch 453/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.1772e-06
    Epoch 454/700
    1/1 [==============================] - 0s 3ms/step - loss: 6.0620e-06
    Epoch 455/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.9488e-06
    Epoch 456/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.8379e-06
    Epoch 457/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.7291e-06
    Epoch 458/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.6218e-06
    Epoch 459/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.5170e-06
    Epoch 460/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.4137e-06
    Epoch 461/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.3132e-06
    Epoch 462/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.2141e-06
    Epoch 463/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.1163e-06
    Epoch 464/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.0211e-06
    Epoch 465/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.9270e-06
    Epoch 466/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.8352e-06
    Epoch 467/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.7449e-06
    Epoch 468/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.6561e-06
    Epoch 469/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.5692e-06
    Epoch 470/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.4837e-06
    Epoch 471/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.4001e-06
    Epoch 472/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.3180e-06
    Epoch 473/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.2376e-06
    Epoch 474/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.1587e-06
    Epoch 475/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.0810e-06
    Epoch 476/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.0044e-06
    Epoch 477/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.9298e-06
    Epoch 478/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.8565e-06
    Epoch 479/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.7849e-06
    Epoch 480/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.7143e-06
    Epoch 481/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.6444e-06
    Epoch 482/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.5768e-06
    Epoch 483/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.5098e-06
    Epoch 484/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.4445e-06
    Epoch 485/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.3802e-06
    Epoch 486/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.3169e-06
    Epoch 487/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.2552e-06
    Epoch 488/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.1943e-06
    Epoch 489/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.1350e-06
    Epoch 490/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.0765e-06
    Epoch 491/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.0187e-06
    Epoch 492/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.9626e-06
    Epoch 493/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.9070e-06
    Epoch 494/700
    1/1 [==============================] - 0s 987us/step - loss: 2.8531e-06
    Epoch 495/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.8000e-06
    Epoch 496/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.7476e-06
    Epoch 497/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.6964e-06
    Epoch 498/700
    1/1 [==============================] - 0s 3ms/step - loss: 2.6462e-06
    Epoch 499/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.5967e-06
    Epoch 500/700
    1/1 [==============================] - 0s 3ms/step - loss: 2.5482e-06
    Epoch 501/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.5008e-06
    Epoch 502/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.4541e-06
    Epoch 503/700
    1/1 [==============================] - 0s 3ms/step - loss: 2.4080e-06
    Epoch 504/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.3630e-06
    Epoch 505/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.3188e-06
    Epoch 506/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.2756e-06
    Epoch 507/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.2333e-06
    Epoch 508/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.1915e-06
    Epoch 509/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.1507e-06
    Epoch 510/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.1103e-06
    Epoch 511/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.0710e-06
    Epoch 512/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.0324e-06
    Epoch 513/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.9945e-06
    Epoch 514/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.9572e-06
    Epoch 515/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.9208e-06
    Epoch 516/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.8850e-06
    Epoch 517/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.8498e-06
    Epoch 518/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.8153e-06
    Epoch 519/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.7814e-06
    Epoch 520/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.7481e-06
    Epoch 521/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.7156e-06
    Epoch 522/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.6833e-06
    Epoch 523/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.6520e-06
    Epoch 524/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.6212e-06
    Epoch 525/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.5908e-06
    Epoch 526/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.5611e-06
    Epoch 527/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.5320e-06
    Epoch 528/700
    1/1 [==============================] - 0s 923us/step - loss: 1.5035e-06
    Epoch 529/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.4755e-06
    Epoch 530/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.4479e-06
    Epoch 531/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.4208e-06
    Epoch 532/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.3941e-06
    Epoch 533/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.3684e-06
    Epoch 534/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.3428e-06
    Epoch 535/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.3177e-06
    Epoch 536/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.2931e-06
    Epoch 537/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.2691e-06
    Epoch 538/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.2450e-06
    Epoch 539/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.2219e-06
    Epoch 540/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1992e-06
    Epoch 541/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.1767e-06
    Epoch 542/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.1547e-06
    Epoch 543/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1332e-06
    Epoch 544/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.1122e-06
    Epoch 545/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.0916e-06
    Epoch 546/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.0711e-06
    Epoch 547/700
    1/1 [==============================] - 0s 968us/step - loss: 1.0512e-06
    Epoch 548/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.0314e-06
    Epoch 549/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.0123e-06
    Epoch 550/700
    1/1 [==============================] - 0s 2ms/step - loss: 9.9344e-07
    Epoch 551/700
    1/1 [==============================] - 0s 2ms/step - loss: 9.7487e-07
    Epoch 552/700
    1/1 [==============================] - 0s 2ms/step - loss: 9.5651e-07
    Epoch 553/700
    1/1 [==============================] - 0s 2ms/step - loss: 9.3880e-07
    Epoch 554/700
    1/1 [==============================] - 0s 2ms/step - loss: 9.2121e-07
    Epoch 555/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.0423e-07
    Epoch 556/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.8724e-07
    Epoch 557/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.7071e-07
    Epoch 558/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.5443e-07
    Epoch 559/700
    1/1 [==============================] - 0s 2ms/step - loss: 8.3859e-07
    Epoch 560/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.2274e-07
    Epoch 561/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.0749e-07
    Epoch 562/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.9238e-07
    Epoch 563/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.7771e-07
    Epoch 564/700
    1/1 [==============================] - 0s 954us/step - loss: 7.6321e-07
    Epoch 565/700
    1/1 [==============================] - 0s 985us/step - loss: 7.4876e-07
    Epoch 566/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.3490e-07
    Epoch 567/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.2118e-07
    Epoch 568/700
    1/1 [==============================] - 0s 2ms/step - loss: 7.0770e-07
    Epoch 569/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.9460e-07
    Epoch 570/700
    1/1 [==============================] - 0s 9ms/step - loss: 6.8159e-07
    Epoch 571/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.6896e-07
    Epoch 572/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.5643e-07
    Epoch 573/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.4419e-07
    Epoch 574/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.3215e-07
    Epoch 575/700
    1/1 [==============================] - 0s 2ms/step - loss: 6.2037e-07
    Epoch 576/700
    1/1 [==============================] - 0s 935us/step - loss: 6.0875e-07
    Epoch 577/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.9746e-07
    Epoch 578/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.8625e-07
    Epoch 579/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.7517e-07
    Epoch 580/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.6461e-07
    Epoch 581/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.5406e-07
    Epoch 582/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.4377e-07
    Epoch 583/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.3348e-07
    Epoch 584/700
    1/1 [==============================] - 0s 3ms/step - loss: 5.2359e-07
    Epoch 585/700
    1/1 [==============================] - 0s 3ms/step - loss: 5.1381e-07
    Epoch 586/700
    1/1 [==============================] - 0s 2ms/step - loss: 5.0422e-07
    Epoch 587/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.9469e-07
    Epoch 588/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.8561e-07
    Epoch 589/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.7647e-07
    Epoch 590/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.6761e-07
    Epoch 591/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.5878e-07
    Epoch 592/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.5039e-07
    Epoch 593/700
    1/1 [==============================] - 0s 3ms/step - loss: 4.4203e-07
    Epoch 594/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.3370e-07
    Epoch 595/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.2550e-07
    Epoch 596/700
    1/1 [==============================] - 0s 2ms/step - loss: 4.1770e-07
    Epoch 597/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.0982e-07
    Epoch 598/700
    1/1 [==============================] - 0s 1ms/step - loss: 4.0218e-07
    Epoch 599/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.9477e-07
    Epoch 600/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.8741e-07
    Epoch 601/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.8016e-07
    Epoch 602/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.7306e-07
    Epoch 603/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.6615e-07
    Epoch 604/700
    1/1 [==============================] - 0s 3ms/step - loss: 3.5925e-07
    Epoch 605/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.5258e-07
    Epoch 606/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.4594e-07
    Epoch 607/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.3948e-07
    Epoch 608/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.3318e-07
    Epoch 609/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.2699e-07
    Epoch 610/700
    1/1 [==============================] - 0s 2ms/step - loss: 3.2090e-07
    Epoch 611/700
    1/1 [==============================] - 0s 1ms/step - loss: 3.1496e-07
    Epoch 612/700
    1/1 [==============================] - 0s 947us/step - loss: 3.0903e-07
    Epoch 613/700
    1/1 [==============================] - 0s 940us/step - loss: 3.0331e-07
    Epoch 614/700
    1/1 [==============================] - 0s 5ms/step - loss: 2.9770e-07
    Epoch 615/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.9211e-07
    Epoch 616/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.8669e-07
    Epoch 617/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.8130e-07
    Epoch 618/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.7601e-07
    Epoch 619/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.7094e-07
    Epoch 620/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.6583e-07
    Epoch 621/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.6092e-07
    Epoch 622/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.5601e-07
    Epoch 623/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.5128e-07
    Epoch 624/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.4659e-07
    Epoch 625/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.4201e-07
    Epoch 626/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.3757e-07
    Epoch 627/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.3313e-07
    Epoch 628/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.2872e-07
    Epoch 629/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.2448e-07
    Epoch 630/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.2031e-07
    Epoch 631/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.1618e-07
    Epoch 632/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.1213e-07
    Epoch 633/700
    1/1 [==============================] - 0s 2ms/step - loss: 2.0827e-07
    Epoch 634/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.0435e-07
    Epoch 635/700
    1/1 [==============================] - 0s 1ms/step - loss: 2.0053e-07
    Epoch 636/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.9669e-07
    Epoch 637/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.9315e-07
    Epoch 638/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.8945e-07
    Epoch 639/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.8597e-07
    Epoch 640/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.8248e-07
    Epoch 641/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.7904e-07
    Epoch 642/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.7578e-07
    Epoch 643/700
    1/1 [==============================] - 0s 962us/step - loss: 1.7243e-07
    Epoch 644/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.6924e-07
    Epoch 645/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.6606e-07
    Epoch 646/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.6304e-07
    Epoch 647/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.6005e-07
    Epoch 648/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.5705e-07
    Epoch 649/700
    1/1 [==============================] - 0s 3ms/step - loss: 1.5406e-07
    Epoch 650/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.5124e-07
    Epoch 651/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.4837e-07
    Epoch 652/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.4561e-07
    Epoch 653/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.4289e-07
    Epoch 654/700
    1/1 [==============================] - 0s 2ms/step - loss: 1.4019e-07
    Epoch 655/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.3761e-07
    Epoch 656/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.3504e-07
    Epoch 657/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.3248e-07
    Epoch 658/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.3004e-07
    Epoch 659/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.2764e-07
    Epoch 660/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.2530e-07
    Epoch 661/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.2294e-07
    Epoch 662/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.2067e-07
    Epoch 663/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1845e-07
    Epoch 664/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1625e-07
    Epoch 665/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1404e-07
    Epoch 666/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.1193e-07
    Epoch 667/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.0992e-07
    Epoch 668/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.0786e-07
    Epoch 669/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.0580e-07
    Epoch 670/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.0382e-07
    Epoch 671/700
    1/1 [==============================] - 0s 1ms/step - loss: 1.0193e-07
    Epoch 672/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.9982e-08
    Epoch 673/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.8058e-08
    Epoch 674/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.6279e-08
    Epoch 675/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.4509e-08
    Epoch 676/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.2734e-08
    Epoch 677/700
    1/1 [==============================] - 0s 1ms/step - loss: 9.1000e-08
    Epoch 678/700
    1/1 [==============================] - 0s 978us/step - loss: 8.9315e-08
    Epoch 679/700
    1/1 [==============================] - 0s 975us/step - loss: 8.7611e-08
    Epoch 680/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.6030e-08
    Epoch 681/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.4392e-08
    Epoch 682/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.2836e-08
    Epoch 683/700
    1/1 [==============================] - 0s 1ms/step - loss: 8.1293e-08
    Epoch 684/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.9772e-08
    Epoch 685/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.8266e-08
    Epoch 686/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.6834e-08
    Epoch 687/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.5420e-08
    Epoch 688/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.3963e-08
    Epoch 689/700
    1/1 [==============================] - 0s 1ms/step - loss: 7.2619e-08
    Epoch 690/700
    1/1 [==============================] - 0s 4ms/step - loss: 7.1252e-08
    Epoch 691/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.9955e-08
    Epoch 692/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.8631e-08
    Epoch 693/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.7373e-08
    Epoch 694/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.6085e-08
    Epoch 695/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.4882e-08
    Epoch 696/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.3664e-08
    Epoch 697/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.2483e-08
    Epoch 698/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.1313e-08
    Epoch 699/700
    1/1 [==============================] - 0s 1ms/step - loss: 6.0135e-08
    Epoch 700/700
    1/1 [==============================] - 0s 1ms/step - loss: 5.8995e-08
    




    <tensorflow.python.keras.callbacks.History at 0x7f24d74b2470> 
```



Ok, now we have a model that has been trained to learn the relationshop between X and Y. We can use the **model.predict** method to have it figure out the Y for a previously unknown X. So, for example, if X = 10, what do you think Y would be?

Lets run the code to see


```
print(model.predict([10.0]))
```

    [[21.00056]]
    

You might have thought 21, right? But it ended up being a little over. Why do you think that is? 


Remember that the neural networks deal with probabilities, so given the data that we fed the Neural network with, it calculated that there is a very high probability that the relationship between X and Y is Y=2x+1, but with only 6 data values we can't know for sure. As a result, the result for 10 is very close to 21, but not necessarily 21. 

As We work with neural networks, we'll see this pattern recurring. We will almost always deal with probabilities, not certainties, and will do a little bit of coding to figure out what the result is based on the probabilities, particularly when it comes to classification.

<br/>
<br/>


# Complete Prgram




```
# Imports
import tensorflow as tf
import numpy as np
from tensorflow import keras


# Model Definitions
model = tf.keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])])


# Compilation 
model.compile(optimizer='sgd', loss='mean_squared_error')


# Data sets
xs = np.array([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0], dtype=float)
ys = np.array([-1.0, 1.0, 3.0, 5.0, 7.0, 9.0, 11.0], dtype=float)


# Training
model.fit(xs, ys, epochs=700)


# Prediction
print(model.predict([10.0]))



```

<br/><br/><br/>

# Going Further 

In this exercise you'll try to build a neural network that predicts the price of a house according to a simple formula.

So, imagine if house pricing was as easy as a house costs 50k + 50k per bedroom, so that a 1 bedroom house costs 100k, a 2 bedroom house costs 150k etc.

How would you create a neural network that learns this relationship so that it would predict a 7 bedroom house as costing close to 400k etc.

(Hint: Your network might work better if you scale the house price down. You don't have to give the answer 400...it might be better to create something that predicts the number 4, and then your answer is in the 'hundreds of thousands' etc.)

<br/><br/><br/>

For more look at the machine learning playlist by google developers at : https://www.youtube.com/playlist?list=PLOU2XLYxmsII9mzQ-Xxug4l2o04JBrkLV
