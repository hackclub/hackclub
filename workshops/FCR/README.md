# Fundamental of Teachable Machine
Teachable Machine is a web-based tool that makes creating machine learning models fast, easy, and accessible to everyone. Educators, artists, students, innovators, makers of all kinds – really, anyone who has an idea they want to explore. No prerequisite machine learning knowledge is required. You train a computer to recognize your images, sounds and poses without writing any machine learning code. Then, use your model in your projects, sites, apps, and more.
# Starter Pack
Just go to [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com)and click Get Started. No need to make an account or log in. [This playlist of tutorial videos](https://www.youtube.com/playlist?list=PLJfHZtseuscuTQfodmFnbZ3rBgCWsRT9t) are built into the tool to help you along the way. You can also check out [Dan Shiffman’s Coding Train video](https://www.youtube.com/watch?v=kwcillcWOg0&list=PLRqwX-V7Uu6aJwX0rFP-7ccA6ivsPDsK5&index=2&t=0s) on Teachable Machine. Three starter projects for recognizing [fruit](https://medium.com/@warronbebster/teachable-machine-tutorial-bananameter-4bfffa765866), [head tilts](https://medium.com/@warronbebster/teachable-machine-tutorial-head-tilt-f4f6116f491), or [sounds](https://medium.com/@warronbebster/teachable-machine-tutorial-snap-clap-whistle-4212fd7f3555) you make.You can currently train Teachable Machine with images (pulled from your webcam or image files), sounds (in one-second snippets from your mic), and poses (where the computer guesses the position of your arms, legs, etc from an image). More types of training may be coming soon :)

# Introduction to Facial Expression Recognition
FACIAL expression is one of the most powerful, natural and universal signals for human beings to convey their emotional states and intentions.Numerous studies have been conducted on automatic facial expression analysis because of its practical importance in sociable robotics, medical treatment, driver fatigue surveillance, and many other human-computer interaction systems. In the field of computer vision and machine learning, various facial expression recognition (FER) systems have been explored to encode expression information from facial representations. As early as the twentieth century, Ekman and Friesen defined six basic emotions based on cross-culture study, which indicated that humans perceive certain basic emotions in the same way regardless of culture. These facial expressions are __1.Happiness 2.Sadness 3.Fear 4.Anger 5.Suprise 6.Disgust.__<br />
![](https://cloud-kmaqeh4qc.vercel.app/happy1.gif)
![](https://cloud-kmaqeh4qc.vercel.app/sad1.gif) 
![](https://cloud-kmaqeh4qc.vercel.app/fear1.gif) <br />

![](https://cloud-kmaqeh4qc.vercel.app/angry1.gif)
![](https://cloud-kmaqeh4qc.vercel.app/suprise1.gif) 
![](https://cloud-kmaqeh4qc.vercel.app/disgust1.gif)

## Deep Facial Expression Recognition
In this section, we describe the three main steps that are common in automatic deep FER, i.e., pre processing, deep feature learning and deep feature classification.
1). Pre-processing:<br />
Variations that are irrelevant to facial expressions, such as different backgrounds, illuminations and head poses, are fairly common in unconstrained scenarios. Therefore, before training the deep neural network to learn meaningful features, pre-processing is required to align and normalize the visual semantic information conveyed by the face.
![](https://cloud-7hw3kl9yd.vercel.app/screenshot__38_.png)
 1.1)Face alignment:
  Face alignment is a traditional pre-processing step in many facerelated recognition tasks.Given a     series of training data, the first step is to detect the face and then to remove background and non   face areas. The Viola-Jones (V&J) face detector is a classic and widely employed implementation for   face detection, which is robust and computationally simple for detecting near-frontal faces. 

 A convolutional neural network for classifying human emotions from dynamic facial expressions in real-time. We use transfer learning on the fully connected layers of an existing convolutional neural network which was trained for human emotion classification. A variety of datasets, as well as our own unique
image dataset will be used to train the model. Finally, a live video stream connected to a
A face detector feeds images to the neural network. The network subsequently classifies an arbitrary number of faces
per image simultaneously in real-time and display the probability of emotion in the range of 0 to 1. Facial expression recognition work in 2 parts:
per image simultaneously in real time and display the probability of emotion in range of 0 to 1.<br />
1. Facial Detection:- The ability to detect the location of the face in any input image or frame. The output is a bounding box of the detected faces.<br />
2. . Emotion Detection:- Classifying the emotion on the face as happy, angry, sad, surprise, disgust, or fear.<br />

Learn more about facial expression recognition in [Courcera course](https://www.coursera.org/projects/facial-expression-recognition-keras).<br/>
[Link to DEMO](https://facialexpressionrecognition.yashkalbande.repl.co/) what we are going to build.

## Lets Build the Model 
Vist [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) and clicking on "Get Started". You will see three option to create an image, audio, or pose project. For now, pick “Image Project”.<br />
![](https://cloud-kmaqeh4qc.vercel.app/create.gif)

Click "Add a class" upto 6 classes. Rename "Class 1" to "Happiness" ,"Class 2" to "Sadness", "Class 3" to "Fear", "Class 4" to "Anger", "Class 5" to "Suprise" and "Class 6" to "Disgust"<br/>
![](https://cloud-kmaqeh4qc.vercel.app/addclass.gif)
Now is the most interesting step, we have to add image samples to each class with respective emotions. Like _smiling, happy_ images in __Happiness Class__. We have two option __Webcam__ and __Upload__ to add images. For video guide click [hear](https://youtu.be/DFBbSTvtpy4).<br />
Click on __Train Model__ and let other values as default.Your Machine Learnig model is ready! Preview it by enabling webcam or input a image.Now its time to __Export Model__. We can export model in 3 differnt ways. But for now we will use default _Tensorflow.js_. Select __Upload my model__ to add our own model to cloud for further use.Click on _Copy_ option from code snippet. Open new HTML template on [repl.it](https://repl.it/languages/html) and paste the code between _body_ syntax.Click on __Run__ button to see your __Realtime Facial Expression Recognition__ working.Select __Start__ Button to get started. Give access to your webcam. It wil take couple of seconds to start webcam and connect to model.
![](https://cloud-kmaqeh4qc.vercel.app/export.gif)<br />

## Hacking
There are different ways in which we can advance in Facial Expression Recognition. We can download the Tensorflow model converted into Keras .h5 model and load it in our Python Project. We get a list for the probability of prediction for each class we add while creating Classes (Step: 4). Tensorflow Lite model to use in android application or IoT and Take a look at classes we have added. We can add more class to it like Neutral, winking left or right side, etc. In the beginning, the result will be not that much accurate, but as time pass it will show more optimal results. Think of where we can use facial expression recognition can be implemented in real life. Below are some new example to keep hacking going on.<br />

**Tensorflow Trained Model With Python**: [DEMO](https://FCRwithTensorflow.yashkalbande.repl.run) [CODE](https://repl.it/@YashKalbande/FCRwithTensorflow#main.py) <br />
**Advance Facial Expression Recogination**: [DEMO](https://advancefacialexpressionrecognition.yashkalbande.repl.co) [CODE](https://repl.it/@YashKalbande/AdvanceFacialExpressionRecognition) <br />
**Beautify boring looking website with CSS & JS**: [DEMO](https://AdvanceFER.yashkalbande.repl.co) [CODE](https://repl.it/@YashKalbande/AdvanceFER#index.html) <br />
