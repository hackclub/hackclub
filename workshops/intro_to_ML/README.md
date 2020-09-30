---
name: 'Intro To ML'
description: 'Making an Machine Learning model to predict relation between 2 number sets '
author: '@Agrim-Bansal'
---

# Introduction
Have you always been fascinated by the terms like "Artificial Intelligence", "Machine Learning" etc  and wanted to learn how these things work?  
Well, Today you'll be able to learn about the working of machine learning and make a machine learning model which learns the relationship between two sets of numbers and predicts the result for a future number.  
Excited? So let's get going!  

<br/>

# Machine Learning
Machine learning is very similar to Artificial Intelligence but it is not exactly it. Machine learning (or ML as it is called) is about data and classification.  
When we as programmers code a normal program, there we define rules and input some test data and at end, obtain results.  
But in machine learning, the process is somewhat different. Here we provide the machine some input data and some output data i.e. the known test data and it is the task of the machine to figure out what is the relation between the sets of data and further predict output values for unknown input data.  

**So, how does this actually work ?**   
We provide the machine with some sets of data (usually 2) and it is made to establish a link between the data sets or in other words, "the ML model is trained".   
In this process of training, the machine makes an initial guess and then checks how good or bad the guess was and it calculates the loss. Then it uses an optimizer to make another optimized prediction which is better than the previous one. In other words, the loss is decreased. This process continues as many times as we specify.

So, for example, we have 2 number sets as follows :   
[ 1, 2, 3, 4, 5, 6, 7 ]   
[ 3, 5, 7, 9, 11, 13, 15 ]   

We can easily figure out the relation between the 2 given sets which is 2x + 1.   
But how can we train a computer to do the equivalent task i.e. to figure out the relationship and predict for a future number?   
Using data!   
We'll be feeding it with a set of Xs, and a set of Ys, and when we train it then it should be able to figure out the relationship between them.   

So, lets get started :)  
<br/>
Note : for this project We'll use PYTHON and a library called Tensorflow  
<br/>

# Using Google Colab
We'll be making our project on a google colab notebook.
Go to [colab.research.google.com](https://colab.research.google.com) and sign in with your Google account.  
Then  Click on File > New notebook<br />
Connect to a machine<br />
Add a code block and we are ready to get started !
  
(Press <kbd>CTRL</kbd> + <kbd>Enter</kbd> to run the code)  
<br/>

# Imports
Let's start with our imports. Imports provide us a way to exceed the limits of inbuilt modules and functions.
They are just some pieces of code written by developers which make repetitive tasks way more easier and help in reducing our code
To import a module (called a library) the syntax is : `import <library_name> `   
Further, we can import something specific instead of the  complete library(to reduce program size) from the library using : `from <library_name> import <object_name>`   
Also, we can name them something else for our ease as so that instead of accessing it from the original name, we can give it a shorter name: `import <library_name> as <easier_name>`   

*For more, refer to [Imports Documentation](https://docs.python.org/3/reference/import.html)
    

Here we are importing the library ["TensorFlow"](https://www.tensorflow.org/api_docs) and calling it "tf" for ease of use.
This library contains many tools for machine learning   
We then import a library called ['Numpy'](https://numpy.org/doc/), which helps us to represent and manipulate our data as lists easily and quickly. We call it as "np"for ease.
It provides a quicker and easier way to manipulate lists as compared to python's inbuilt listing system.
Numpy documentation : 

The framework for defining a neural network as a set of Sequential layers is called "keras", so we import that too.We're importing it separately for our ease

```python
import tensorflow as tf
import numpy as np
from tensorflow import keras
```
<br/>

# Defining the Neural Network
Next we will create a neural network (a very simple one).
Neural network can be compared to a brain and it is the thing which will perform all the operations and working. A neural network is a network or circuit of neurons, or an artificial neural network, composed of artificial neurons or nodes. A positive value reflects an excitatory connection, while negative values mean inhibitory connections.  
The one we are creating has 1 layer, and that layer has 1 neuron, and the input is just 1 value.

![neural network](https://cloud-ltmlw2jd1.vercel.app/neural.png)

```python
model = tf.keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])])
```  
<br/>

# Compilation
Now we'll compile our Neural Network. When we do so, we have to specify 2 functions, a loss and an optimizer.    
We know that in our function, the relationship between the numbers is y=2x+1.   
When the computer is trying to 'learn' that, it makes a guess...maybe y=10x+10. The LOSS function measures the guessed answers against the known correct answers and measures how well or how badly it did.  
It then uses the OPTIMIZER function to make another guess. Based on how the loss function went, it will try to minimize the loss. At that point maybe it will come up with something like y=5x+5 which, while still pretty bad, is closer to the correct result (i.e. the loss is lower)   
It will repeat this for a number of "EPOCHS" which we will see shortly. But first, here we are telling it to use 'MEAN SQUARED ERROR' for the loss and 'STOCHASTIC GRADIENT DESCENT' for the optimizer. We don't need to understand the math for these yet, but we can see that they work! :)   
Over time we will learn the different and appropriate loss and optimizer functions for different scenarios. 
```python
model.compile(optimizer='sgd', loss='mean_squared_error')
```
<br/>

# Providing the Data
Next up we'll feed in some data. In this case we are taking 6 xs and 6ys. We can see that the relationship between these is that y=2x+1, so where x = -1, y=-1 etc. etc.  
'Numpy' provides lots of array type data structures that are a standard way of doing it. We declare that the way we want to use these is by specifying the values as an np.array[]  
\* dtype stands for "data type"
```python
xs = np.array([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0], dtype=float)
ys = np.array([-1.0, 1.0, 3.0, 5.0, 7.0, 9.0, 11.0], dtype=float)
```
<br/> 

# Training the Neural Network
Now comes the process of training the neural network , where it 'learns' the relationship between the Xs and Ys is in the **model.fit**  call. This is where it will go through the loop we spoke about above, make a guess, measure how good or bad it is (i.e. the loss), and use the optimizer to make another better prediction. It will repeat the process for the number of epochs we specify. When we run this code, we'll see the loss on the right hand side which decreases rapidly.
```python
model.fit(xs, ys, epochs=700)
```
  

```python
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
    .
    .
    .
    .
    .
    .
    .
    .
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
<br/>

# Prediction
Ok, now we have a model that has been trained to learn the relationship between X and Y. We can use the **model.predict** method to have it figure out the Y for a previously unknown X. So, for example, if X = 10, what do you think Y would be?   
Lets run the code to see
```python
print(model.predict([10.0]))
```
    [[21.00056]]
    

You might have thought 21, right? But it ended up being a little over. Why do you think that is?    
Remember that the neural networks deal with probabilities, so given the data that we fed the Neural network with, it calculated that there is a very high probability that the relationship between X and Y is Y=2x+1, but with only 6 data values we can't know for sure. As a result, the value for 10 is very close to 21, but not necessarily 21.    
As We work with neural networks, we'll see this pattern recurring. We will almost always deal with probabilities, not certainties, and will do a little bit of coding to figure out what the result is based on the probabilities, particularly when it comes to classification.  
<br/>

# Complete Program

Here is the complete program put together
```python
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
<br/>

# Going Further 

- In this exercise you'll try to build a neural network that predicts the price of a house according to a simple formula.   
So, imagine if house pricing was as easy as a house costs 50k + 50k per bedroom, so that a 1 bedroom house costs 100k, a 2 bedroom house costs 150k etc.   
How would you create a neural network that learns this relationship so that it would predict a 7 bedroom house as costing close to 400k etc.   
(Hint: Your network might work better if you scale the house price down. You don't have to give the answer 400...it might be better to create something that predicts the number 4, and then your answer is in the 'hundreds of thousands' etc.)   
check the Solution [here](https://colab.research.google.com/drive/1JD2m_ApU7v826r9ZHBMxR9JxOtdWySOK?usp=sharing) 
      
- For more look at this [machine learning playlist by google developers](https://www.youtube.com/playlist?list=PLOU2XLYxmsII9mzQ-Xxug4l2o04JBrkLV)

- Also check [this program](https://colab.research.google.com/drive/1JD2m_ApU7v826r9ZHBMxR9JxOtdWySOK?usp=sharing) which takes the data set from the user and predicts the value for required number