---
name: ' Realtime Facial Expressiion Recognition'
author: '@Yash.Kalbande'
---
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


## Deep Facial Expression Recognition <br />
In this section, we describe the three main steps that are common in automatic deep FER, i.e., pre processing, deep feature learning and deep feature classification.<br />


1). __Pre-processing:__<br />
Variations that are irrelevant to facial expressions, such as different backgrounds, illuminations and head poses, are fairly common in unconstrained scenarios. Therefore, before training the deep neural network to learn meaningful features, pre-processing is required to align and normalize the visual semantic information conveyed by the face.<br />
![](https://cloud-7hw3kl9yd.vercel.app/screenshot__38_.png)<br />
 1.1) Face alignment:<br />
  Face alignment is a traditional pre-processing step in many facerelated recognition tasks.Given a series of training data, the first step is to detect the face and then to   remove background and non   face areas. The Viola-Jones (V&J) face detector is a classic and widely employed implementation for face detection, which is robust and             computationally simple for detecting near-frontal faces.<br />
  
 1.2) Data augmentation:<br />
   Deep neural networks require sufficient training data to ensure generalizability to a give recognition task. However, most publicly available databases for FER do not have a    sufficient quantity of images for training. Therefore, data augmentation is a vital step for deep FER.<br />
   
 1.3) Face normalization:<br />
   Variations in illumination and head poses can introduce large changes in images and hence impair the FER performance. There are two typical face normalization methods to        ameliorate these variations: illumination normalization and pose normalization (frontalization).<br />
   
   
2)__Deep networks for feature learning:__<br/>
Deep learning has recently become a hot research topic and has achieved state-of-the-art performance for a variety of applications. Deep learning attempts to capture high-level abstractions through hierarchical architectures of multiple nonlinear transformations and representations. In this section, we briefly introduce some deep learning techniques that have been applied for FER.<br/>

 2.1)Convolutional neural network (CNN):<br/>
  CNN has been extensively used in diverse computer vision applications, including FER. At the beginning of the 21st century, several studies in the FER literature [98], [99]     found that the CNN is robust to face location changes and scale variations and behaves better than the multilayer perceptron (MLP) in the case of previously unseen face pose     variations employed the CNN to address the problems of subject independence as well as translation, rotation, and scale invariance in the recognition of facial expressions.
  A CNN consists of three types of heterogeneous layers: convolutional layers, pooling layers, and fully connected layers.<br/>
  
 2.2)Deep belief network (DBN):<br />
  DBN proposed by Hinton et al is a graphical model that learns to extract a deep hierarchical representation of the training data. The traditional DBN is built with a stack of restricted Boltzmann machines.The training of a DBN contains two phases: pre-training and fine-tuning.<br />
  
 2.3)Deep autoencoder (DAE):<br/>
  DAE was first introduced in to learn efficient codings for dimensionality reduction. In contrast to the previously mentioned networks, which are trained to predict         target values, the DAE is optimized to reconstruct its inputs by minimizing the reconstruction error.<br />
  
 2.4)Recurrent neural network (RNN):<br />
  RNN is a connectionist model that captures temporal information and is more suitable for sequential data prediction with arbitrary lengths. In addition to training the deep     neural network in a single feed-forward manner, RNNs include recurrent edges that span adjacent time steps and share the same parameters across all steps. The classic back       propagation through time (BPTT) is used to train the RNN. Long-short term memory (LSTM), introduced by Hochreiter & Schmidhuber, is a special form of the traditional RNN that   is used to address the gradient vanishing and exploding problems that are common in training RNNs.<br />
  
2.5)Generative Adversarial Network (GAN):<br />
  GAN was first introduced by Goodfellow et al in 2014, which trains models through a minimax two-player game between agenerator G(z) that generates synthesized input data by     mapping latents z to data space with z ~ p(z) and a discriminator D(x) that assigns probability y = Dis(x) 2 [0; 1] that x is an actual training sample to tell apart real from   fake input data. The generator and the discriminator are trained alternatively and can both improve themselves by minimizing/maximizing the binary cross entropy LGAN =           log(D(x))+log(1􀀀D(G(z))) with respect to D / G with x being a training sample and z ~ p(z).

 3)__Facial expression classification:__
  After learning the deep features, the final step of FER is to classify the given face into one of the basic emotion categories. Unlike the traditional methods, where the feature extraction step and the feature classification step are independent, deep networks can perform FER in an end-to-end way. Specifically, a loss layer is added to the end of the network to regulate the back-propagation error; then, the prediction probability of each sample can be directly output by the network. In CNN, softmax loss is the most common used function that minimizes the crossentropy between the estimated class probabilities and the groundtruth distribution. Alternatively,demonstrated the benefit of
using a linear support vector machine (SVM) for the end-to-end training which minimizes a margin-based loss instead of the crossentropy. Likewise, investigated the adaptation of deep neural forests (NFs) which replaced the softmax loss layer with NFs and achieved competitive results for FER.
  
  

Learn more about facial expression recognition in [Courcera course](https://www.coursera.org/projects/facial-expression-recognition-keras).<br/>
[Link to DEMO](https://facialexpressionrecognition.yashkalbande.repl.co/) what we are going to build.

# Lets Build the Model 
Vist [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) and clicking on "Get Started". You will see three option to create an image, audio, or pose project. For now, pick “Image Project”.<br />
![](https://cloud-kmaqeh4qc.vercel.app/create.gif)

Click "Add a class" upto 6 classes. Rename "Class 1" to "Happiness" ,"Class 2" to "Sadness", "Class 3" to "Fear", "Class 4" to "Anger", "Class 5" to "Suprise" and "Class 6" to "Disgust"<br/>
![](https://cloud-kmaqeh4qc.vercel.app/addclass.gif)
Now is the most interesting step, we have to add image samples to each class with respective emotions. Like _smiling, happy_ images in __Happiness Class__. We have two option __Webcam__ and __Upload__ to add images. For video guide click [hear](https://youtu.be/DFBbSTvtpy4).<br />
Click on __Train Model__ and let other values as default.Your Machine Learnig model is ready! Preview it by enabling webcam or input a image.Now its time to __Export Model__. We can export model in 3 differnt ways. But for now we will use default _Tensorflow.js_. Select __Upload my model__ to add our own model to cloud for further use.Click on _Copy_ option from code snippet. Open new HTML template on [repl.it](https://repl.it/languages/html) and paste the code between _body_ syntax.Click on __Run__ button to see your __Realtime Facial Expression Recognition__ working.Select __Start__ Button to get started. Give access to your webcam. It wil take couple of seconds to start webcam and connect to model.<br />
![](https://cloud-kmaqeh4qc.vercel.app/export.gif)<br />

## Why isn’t it working like I want it to?
Teachable Machine tool can help anyone understand how machine learning works. Along the way, you might discover situations where your model isn’t working the way you want. Those are great opportunities to play around, learn, and try different approaches to improving your model. Here are some examples:<br />
__Changing backgrounds/environments-__ <br/>
Try training an image-based model to recognize a few objects. Then, see if it still works when those objects are against a different background, or a different lighting condition or time of day.<br />
__Understanding bias-__ <br />
Bias is a critical concept to understand when creating machine learning models, and this tool can help give you a starting glimpse at what it’s all about. First, watch this video to get a sense of how bias can affect machine learning models. <br />
__Confusing examples-__<br/>
It’s sometimes fun to deliberately try confusing the computer and see what works. For example, train a model holding your right hand up, and see if it still recognizes that class if you hold your other hand up instead. Or, if you train it to recognize a certain object, what happens if you try tricking the computer with a photo or a drawing of that object? And that’s just scratching the surface. Understanding how machine learning works is a really deep (and exciting!) field, and these are just starting points.<br />

# Hacking
There are different ways in which we can advance in Facial Expression Recognition. We can download the Tensorflow model converted into Keras .h5 model and load it in our Python Project. We get a list for the probability of prediction for each class we add while creating Classes (Step: 4). Tensorflow Lite model to use in android application or IoT and Take a look at classes we have added. We can add more class to it like Neutral, winking left or right side, etc. In the beginning, the result will be not that much accurate, but as time pass it will show more optimal results. Think of where we can use facial expression recognition can be implemented in real life. Below are some new example to keep hacking going on.<br />

**Tensorflow Trained Model With Python**: [DEMO](https://FCRwithTensorflow.yashkalbande.repl.run) [CODE](https://repl.it/@YashKalbande/FCRwithTensorflow#main.py) <br />
**Advance Facial Expression Recogination**: [DEMO](https://advancefacialexpressionrecognition.yashkalbande.repl.co) [CODE](https://repl.it/@YashKalbande/AdvanceFacialExpressionRecognition) <br />
**Beautify boring looking website with CSS & JS**: [DEMO](https://AdvanceFER.yashkalbande.repl.co) [CODE](https://repl.it/@YashKalbande/AdvanceFER#index.html) <br />
