---
name: 'Facial Expression Recognizer'
description: 'Build FER with Python'
author: '@YashKalbande'
img: ''
---
# Introduction
In our daily life, we knowingly or unknowingly carry out different types of Facial Expression. These movements convey the emotional state of an individual.
We can judge the mood and mental state of the next person by his Facial Expression. In the early Twentieth century, Ekman and Friesen defined `six` basic emotions.
This expression does not change with cultures, they are universal. Six Facial Expressions are:-
- **Happiness** 😃
- **Sadness**😔
- **Fear**😨
- **Anger**😤
- **Suprise**😲
- **Disgust**😖

![Happiness image](https://cloud-kmaqeh4qc.vercel.app/happy1.gif)
![Sadness image](https://cloud-kmaqeh4qc.vercel.app/sad1.gif) 
![Fear image](https://cloud-kmaqeh4qc.vercel.app/fear1.gif) 

![anger image](https://cloud-kmaqeh4qc.vercel.app/angry1.gif)
![suprise image](https://cloud-kmaqeh4qc.vercel.app/suprise1.gif) 
![disgust image](https://cloud-kmaqeh4qc.vercel.app/disgust1.gif)

Here's a **demo** of what we'll be making. You can see both the final code and test it out on this Repl environment:
https://repl.it/@YashKalbande/facialexpressionrecongnizer#main.py

In this workshop, I'll share how to build a Facial Expression Recognizer using the `FER` library from python.

## FER Library
Facial Expression Recognition Library is developed by [`Justin Shenk`](https://pypi.org/user/jshenk). This Library requires `OpenCV>=3.2` and `Tensorflow>=1.7.0` dependencies installed in the system. Faces are detected using OpenCV's Haar Cascade classifier. For more information and the Source code of FER Library, you can visit [FER's GitHub page here.](https://github.com/justinshenk/fer)

## Setting up our code!

For this workshop, we're going to be using an online code editor called [Repl.it](https://repl.it/site/about), or you can use your favorite code editor. It can be installed through pip:`$ pip install fer`. If you can using Repl so just import the `FER` library and it will be installed with all its dependencies.

1. Head over to [Repl.it/languages/Python3](https://repl.it/languages/python3)
   * This will create a new [Python 3](https://www.w3schools.com/python/) Repl for you to use to code.
2. Edit your new `main.py` file with the following code:

```python
import cv2
from fer import FER
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
```
- The code above says that:
  * Import complete `cv2` commonly known as Open CV library. It provides us various computer vision solutions. We will use this library mainly for reading and manipulating images. You can read more about `Open Cv library` [on the OpenCV Docs](https://opencv.org/about/)
  * Import `FER` function from `fer` library. This is the main library we will be using in this workshop.
  * Add `matplotlib.pyplot` module as `plt`. It will help us to plot graphs 
  * Include `matplotlib.image` module as `mpimg` .The matplotlib Library's [matplotlib.image](https://matplotlib.org/tutorials/introductory/images.html) is used to plot image on the graph with `x` and `y` axis.
  
  3. Next, we'll predict emotions of Still Images:
  
```python
image = cv2.imread("abc.jpg")
detector = FER()
print(detector.detect_emotions(image))
```
- Give a try to understand what the code above is trying to say. Here is the explaination of above code:
  * Our `image` variable loads an image from specified file in our case `abc.jpg` by using `cv2.imread("abc.jpg")`method. 
  * Next we will assign `FER()` which was imported earlier to the **detector** variable.
  * print syntax with `detector.detect_emotions(image)` as parameter will returns dictionary of bounding box notations.
Below is Sample Output:
```python
[{'box': [277, 90, 48, 63], 'emotions': {'angry': 0.02, 'disgust': 0.0, 'fear': 0.05, 'happy': 0.16, 'neutral': 0.09, 'sad': 0.27, 'surprise': 0.41}]
```
**NOTE** If you want to add image in `repl.it` IDE refer below Video:

![]

## What is going on underhood😕😕

The `detector` is main part of our workshop. Lets see what detector do:
The detector is object created to store `FER()`. Detector returns an Ordered Dictionary of Bounding Box Notations. It observe and detect where the face is situated and classify it in decimal values from `0` to `1` with probability of all 6 emotions respectively. FER exhibit Keras model built with CNN or well know as Convolutional Neural Networks. It stores the values in `HDF5` model. FER by default detect faces using OpenCV's  Haar Cascade Classifier. Alternatively, we can use more advance Multi-Cascade Convolutional Network in short `MTCNN`. It will use Peltarion API in backend in place of Keras model. By default FER use CNN but if want to use advance MTCNN just pass `mtcnn=True` in FER parentheses just like `detector = FER(mtcnn=True)`. for further use we will use MTCNN model for more accurate results.

## Data is the new oil!

Data is know as new oil of Twenty First Century. We can do different thing with data genrated above which we will dicuss in `Hacking Section` at last so stay tuned. We will store the emotion and dectected face. Then display bounding yellow box around face dectected and scores below it. Lets see below how we can do this.
```python 
import cv2
from fer import FER
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

image = cv2.imread("abc.jpg")
detector = FER(mtcnn=True)
```
Until now we have reached till hear.

Next, we will declare new variable `result` and store our output in for of separate arrray.
```python
result = detector.detect_emotions(image)
```
### Now it is time to Highlight Yellow Bounding Box around face:
```python
bounding_box = result[0]["box"]
emotions = result[0]["emotions"]
cv2.rectangle(image,(bounding_box[0], bounding_box[1]),(bounding_box[0] + bounding_box[2], bounding_box[1] + bounding_box[3]),(0, 155, 255), 2,)
```
Explaination of above code is:
  * `bounding_box` variable will store bounding box coordinates which were generated and stored in `result` variable. It will access and start storing from it's `oth`elemets (or first element in common language) of `"box"` key. If you print this variable you will get output some thing like this `(298, 361, 825, 825)`.
  * Same with `emotions` variable it will access `result` and start storing from it's `0th` element of `"emotions"` key. If you print, you will get output as `{'angry': 0.08, 'disgust': 0.03, 'fear': 0.05, 'happy': 0.09, 'sad': 0.35, 'surprise': 0.0, 'neutral': 0.38}`
  * `cv2.rectangle()` method is used to draw a rectangle around detected face.It have `image, start_point, end_point, color, thickness` as its parameters.
    * In our case we have used `image` as parameter for `image` to specify the image we are going to use. `start_point` as `(bounding_box[0], bounding_box[1])` where `bounding_box[0]` is X coordinate and `bounding_box[1]` is Y coordinate of start point.
    * Next `end_point` as `(bounding_box[0] + bounding_box[2], bounding_box[1] + bounding_box[3])` where `bounding_box[0] + bounding_box[2]` is X coordinate and `bounding_box[1] + bounding_box[3]` is Y coordinate of end point.
    * `(0, 155, 255)` is the yellow color we are going to use as box color.
    * `thickness` is given as `2`. To define thickness of 2px to box.
    
### Add Score to Bounding Box

Now we will add Score to Bounding Box by using following code:

```python
emotion_name, score = detector.top_emotion(image )
for index, (emotion_name, score) in enumerate(emotions.items()): 
    color = (211, 211, 211) if score < 0.01 else (255, 0, 0)
    emotion_score = "{}: {}".format(
          emotion_name, "{:.2f}".format(score))
    cv2.putText(image,emotion_score,
            (bounding_box[0], bounding_box[1] + bounding_box[3] + 30 + index * 15),cv2.FONT_HERSHEY_SIMPLEX,0.5,color,1,cv2.LINE_AA,)
cv2.imwrite("emotion.jpg", image)
```
The abobe code says:
  * Store the top emotion values in `emotion_name,score` variable by using `detector.top_emotion(img)` method.
  * We will iterate over the index and value of an item in a list by using a basic `for` loop and `enumerate` method. So now 1 emotion is iterated at a given time. This process take place for 6 times as we have 6 emotions to test. You can read [docs here](https://docs.python.org/3/library/functions.html#enumerate)
    * Colors are assigned to `color` variable based upon scores. Short hand of **IF & Else** statement is used for betear understanding of code.
    * `emotion_score` variable store the emotion score and will be use to print it.
    * `cv2.putText()` method is used to draw a text string on any image. You can read more about method and its parameter in [docs here](https://docs.opencv.org/master/d6/d6e/group__imgproc__draw.html#ga5126f47f883d730f633d74f07456c576)
  * Outside of for loop `cv2.imwrite()`method will create and save new final output image of name `"emotion.jpg"`.
  
### Display Output Image

```python
img = mpimg.imread('emotion.jpg')
imgplot = plt.imshow(img)
plt.show()
```
We at the final step of workshop. Where we display output image by using matplotlib Library funcitions.`mpimg.imread('emotion.jpg')` method read the image provide in parentheses. Store the image image in `imgplot` by using `plt.imshow(img)`. And Finally `plt.show()` will display our output image.

**Congrats! You've just made your own Facial Expression Recognizer! 🎉**
  
# Future Hacking

Our Facial Expression Recognizer is just starting point for new and inovative FER systems.The time has come where you can build some thing new by what you have learned until now.Here are some of my ideas for for which you can try:

1. We have build FER for still images. You can try FER for video analysis of facial emotions present in video. Here is link to [demo and code](https://repl.it/@YashKalbande/fervideo#main.py). The detector returns a list of JSON objects. Each JSON object contains two keys: 'box' and 'emotions'.

2. Creating real-time Facial Expression Recognizer using Live Camera will be very exicting thing to try.

3. You can create different recommendation system based upon emotion of Humans by extracting and manuplation data from `result` variable. Like recommendating fun books,videos,gifs,etc to person who have sad emotion or motivation books,videos for person in fear or angrey. 
