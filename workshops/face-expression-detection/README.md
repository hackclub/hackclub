---
name: 'Facial Expression Detection'
description: 'A simple facial expression detection workshop using Python'
author: '@iamsid47'
img: https://cloud-bj6wcypd4.vercel.app/0expression_detection_using_python.png
---

Hi everyone! In this workshop, we will be making a **facial expression detection** program using Python. This program will be able to detect expressions in the terms: **Happy, Sad, Neutral, Angry, and Surprise**.

The completed project is hosted on Google Colab, and thus can be found [here](https://colab.research.google.com/drive/1Iub76rGHv-1hCtWHsLSuJf17_ejCEBgh?usp=sharing).

## End result

![angry-face-detected](https://cloud-m37cdf42s.vercel.app/1output.png)

## Let's get started

This project is going to get divided into 4 major parts. Collecting images with expressions, detecting faces and saving them, training the classifier for expression detection, and recognition of expression in new images.

So, the first step is heading over to Google Colab and creating a new notebook. Colab notebooks allow us to combine executable code and rich text in a single document, along with images, HTML, LaTeX, Python and more. It is widely used in machine learning.

Next, we need a lot of images to train our machine to recognize the expression and then give us the output. Thus, we first clone a repository from Github which has such images. Note that whenever we want to run a *command* on Colab, we need to include an **exclaimation mark** before the command. 

```
!git clone https://github.com/misbah4064/facial_expressions.git
```

Click the **Play/Run** button on the left side of the code snippet to run this command. Now, it will clone the repository and store it onto our notebook. You can check it out by clicking the small **files** icon on the left side of the webpage. Further more, click on the **images** folder, you will see more than a thousand images which will be used for training.

![folder](https://cloud-m37cdf42s.vercel.app/0folder.png)

Now, we want to move over to the **facial_expressions** directory so that we can create a directory where we will be first sorting out all the emotions according to their expressions. Thus, click on the **code** button at the bottom to create a new code snippet. Next, let's move over to the **facial_expressions** directory and create a folder named **data_sets** and inside this folder, let's create 5 other folders namely: **anger, happy, sad, neutral, and surprise**.

```
%cd facial_expressions/
%mkdir -p data_set/{anger,happy,neutral,sad,surprise}
```

You can see that in our cloned directory, there are some `.txt` files named as *anger.txt, happy.txt* and so on. Well these files have the names of the image files which are having those emotions/expressions in them. Meaning, an image depicting *anger* will have it's name in the *anger.txt* file. We now want to extract the images with their expressions and then save them to their respective directories which we just created. For example, the images with *anger* as their expression will go into the **anger** folder.

![create-a-code-snippet](https://cloud-m37cdf42s.vercel.app/2code.png)

For this, create a new code snippet and `import cv2` in it. Now we write in some basic code to move the **anger** only images from the **images** folder to **data_sets/anger**. And as a verification, we add in a `print` statement at the end.

```python
import cv2
with open('anger.txt','r') as f:
    img = [line.strip() for line in f]
for image in img:
    loadedImage = cv2.imread("images/"+image)
    cv2.imwrite("data_set/anger/"+image,loadedImage)
print("done writing")
```

The same will be done for all the other images. You can just change *anger.txt* from the above snippet to *happy.txt*, *sad.txt*, etc and also the `cv2` attribute to `data_set/happy/"+image,loadedImage` to this.

Now, we have all the images sorted out, but we need to clear the background of these images first, so that they can then later be used for training purposes. But first, let's create a folder named **dataset** in the directory. Note that **data_sets** and **dataset** are two different directories. 

```
%mkdir dataset
```

Next, create a code snippet and `import cv2` in it. We then use some of the `cv2` attributes for renaming the all the images in a structured manner and moving the images to the **dataset** folder.

```python
import cv2

with open('anger.txt','r') as f:
    images = [line.strip() for line in f]

face_detector = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# For each Emotion, enter one numeric face id
face_id = input('\n Enter Emotion id end press <return> ==>  ')

count = 0

for image in images:
    img = cv2.imread("data_set/anger/"+image)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_detector.detectMultiScale(gray, 1.3, 5)

    for (x,y,w,h) in faces:

        cv2.rectangle(img, (x,y), (x+w,y+h), (255,0,0), 2)     
        count += 1

        # Save the captured image into the datasets folder
        cv2.imwrite("dataset/User." + str(face_id) + '.' + str(count) + ".jpg", gray[y:y+h,x:x+w])

print("\n Done creating face data")
```

Here, there will be an input  option when you run the code. Now, we will be starting with **0 (Zero)** for anger, **1** for happy, **2** for sad, and so on. This is because when the image naming starts, all the images will be assigned a definite name instead of something random. This step is just to ease in the process of training. The above code is for images with **anger** as their expression. You can do the same for other expressions as well.

## Training

Let's start with training the machine. For this, we'll first create a folder named **trainer**.

```
%mkdir trainer
```

Next, we create another code snippet and `import cv2, Numpy, PIL, and os` for training purposes. We then set the path for the face image database to be **dataset**. Then we create a function to get the images and label the data, lastly saving the trained model into the directory **trainer** and named as `trainer.yml`. We will also be printing the number of emotions trained so that we can keep a track of what emotions were actually trained and if we missed any.

```python
import cv2
import numpy as np
from PIL import Image
import os

# Path for face image database
path = 'dataset'

recognizer = cv2.face.LBPHFaceRecognizer_create()
detector = cv2.CascadeClassifier("haarcascade_frontalface_default.xml");

# function to get the images and label data
def getImagesAndLabels(path):

    imagePaths = [os.path.join(path,f) for f in os.listdir(path)]     
    faceSamples=[]
    ids = []

    for imagePath in imagePaths:

        PIL_img = Image.open(imagePath).convert('L') # convert it to grayscale
        img_numpy = np.array(PIL_img,'uint8')

        id = int(os.path.split(imagePath)[-1].split(".")[1])
        faces = detector.detectMultiScale(img_numpy)

        for (x,y,w,h) in faces:
            faceSamples.append(img_numpy[y:y+h,x:x+w])
            ids.append(id)

    return faceSamples,ids

print ("\n [INFO] Training faces....")
faces,ids = getImagesAndLabels(path)
recognizer.train(faces, np.array(ids))

# Save the model into trainer/trainer.yml
recognizer.write('trainer/trainer.yml') 

# Print the numer of Emotions trained and end program
print("\n [INFO] {0} Emotions trained. Exiting Program".format(len(np.unique(ids))))

```

## Testing the model

Let's create another code snippet into which we will be typing some code to test our model and later make a script to display the output it just got.

First, `import cv2, numpy and os` into your snippet. We now have to set the an initial *ID* counter which will be equal to zero. Remember that we had to input a digit just before we were training the images? Well that digit will be used here for the machine to calssify what type of expression-al output shall be provided if it is able to understand the expression in an image. As earlier, we had set **anger** to **0**, **happy** to **1**, and so on. We will be following the same sequence here as well.


```python
import cv2
import numpy as np
import os 

recognizer = cv2.face.LBPHFaceRecognizer_create()
recognizer.read('trainer/trainer.yml')
cascadePath = "haarcascade_frontalface_default.xml"
faceCascade = cv2.CascadeClassifier(cascadePath);

font = cv2.FONT_HERSHEY_SIMPLEX

#iniciate id counter
id = 0

# Emotions related to ids: example ==> Anger: id=0,  etc
names = ['Anger', 'Happy', 'Neutral', 'Sad', 'Surprise', 'Undetected'] 
```

Now, there is a  possibility that instead of an image, we want to detect an expression from a video. Thus, we will also initialize and start a realtime video capture to do this. We then define the window size to be recognized as a face. Note that this value will change according to the image dimensions. Thus, we need to provide something that would be accurate or near the precise value.

Next,  we convert the image to grayscale as `cv2` works only on grayscale images. 

Lastly, we also create a function to check that how much is the machine sure about the expression about the image. For example, is it 50% sure that the image has an expression of anger? or something else.

```python
# Initialize and start realtime video capture
cam = cv2.VideoCapture(0)
cam.set(3, 640) # set video widht
cam.set(4, 480) # set video height

# Define min window size to be recognized as a face
minW = 0.1*cam.get(3)
minH = 0.1*cam.get(4)

# ret, img =cam.read()
img = cv2.imread("YOUR-IMAGE-NAME.jpg")
# img = cv2.flip(img, -1) # Flip vertically

gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

faces = faceCascade.detectMultiScale( 
    gray,
    scaleFactor = 1.2,
    minNeighbors = 5,
    minSize = (int(minW), int(minH)),
    )

for(x,y,w,h) in faces:

    cv2.rectangle(img, (x,y), (x+w,y+h), (0,255,0), 2)

    id, confidence = recognizer.predict(gray[y:y+h,x:x+w])

    # Check if confidence is less them 100 ==> "0" is perfect match 
    if (confidence < 100):
        id = names[id]
        confidence = "  {0}%".format(round(100 - confidence))
    else:
        id = "unknown"
        confidence = "  {0}%".format(round(100 - confidence))
    
    cv2.putText(img, str(id), (x+5,y-5), font, 1, (255,255,255), 2)
    cv2.putText(img, str(confidence), (x+5,y+h-5), font, 1, (255,255,0), 1)  

cv2.imwrite("YOUR-OUTPUT-IMAGE-NAME.jpg",img) 

print("\n [INFO] Done detecting and Image is saved")
cam.release()
cv2.destroyAllWindows()
```

Note that in the above code, at `img = cv2.imread("YOUR-IMAGE-NAME.jpg")`, you are required to provide the image name which you want to test. Also, we are required to define the output image name, where the image will contain the expression detected. For this, you need to change the image name from `cv2.imwrite("YOUR-OUTPUT-IMAGE-NAME.jpg",img) ` to any other name of your choice. 

## Displaying the detected image

Lastly, we create a simple script which will display the output we just got from the model. Create another code snippet and `import cv2, and matplotlib.pyplot`. 

```python
import cv2
import matplotlib.pyplot as plt
%matplotlib inline

image = cv2.imread("YOUR-OUTPUT-IMAGE-NAME.jpg")
height, width = image.shape[:2]
resized_image = cv2.resize(image,(3*width, 3*height), interpolation = cv2.INTER_CUBIC)

fig = plt.gcf()
fig.set_size_inches(18, 10)
plt.axis("off")
plt.imshow(cv2.cvtColor(resized_image, cv2.COLOR_BGR2RGB))
plt.show()
```

Remember to change the `YOUR-OUTPUT-IMAGE-NAME.jpg` in this snippet to the output name which you had given in the previous snippet. Otherwise, it will throw an error message.

## Voila! You did it!

![you-did-it](https://media.giphy.com/media/YP258EkezKv5RSPGRI/giphy.gif)

## Hack It ;)

You can add a lot more expression rather than just the basic ones. This will also enhance the accuracy of the model you are training. You can also add other repositories having many other images with the same expression (for example: a repository with just images with *anger*) as well. This will also help in improving the accuracy of the image.

## Demos
