---
name: 'Facial Expression Detection'
description: 'A simple facial expression detection workshop using Python'
author: '@iamsid47'
img: https://cloud-4tlcr594m.vercel.app/0expen_e_tracker.png
---

Hi everyone! In this workshop, we will be making a **facial expression detection** program using Python. This program will be able to detect expressions in the terms: **Happy, Sad, Neutral, Angry, and Surprise**.

The completed project is hosted on Google Colab, and thus can be found [here]().

## End result

![angry-face-detected]()

## Let's get started

This project is going to get divided into 4 major parts. Collecting images with expressions, detecting faces and saving them, training the classifier for expression detection, and recognition of expression in new images.

So, the first step is heading over to Google Colab and creating a new notebook. Colab notebooks allow us to combine executable code and rich text in a single document, along with images, HTML, LaTeX, Python and more. It is widely used in machine learning.

Next, we need a lot of images to train our machine to recognize the expression and then give us the output. Thus, we first clone a repository from Github which has such images. Note that whenever we want to run a *command* on Colab, we need to include an **exclaimation mark** before the command. 

```
!git clone https://github.com/misbah4064/facial_expressions.git
```

Click the **Play/Run** button on the left side of the code snippet to run this command. Now, it will clone the repository and store it onto our notebook. You can check it out by clicking the small **files** icone on the left side of the webpage.
