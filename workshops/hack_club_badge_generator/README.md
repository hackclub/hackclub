---
name: Hack Club Badge Generator
description: Make a Hack Club Badge with your name and picture
author: '@Melvin-Thomas-Dev'
img: 'https://cloud-bb9ekgrcc.vercel.app/0image.png' ################################ TODO ###############################################
---

# Hack Club Badge Generator.

Waiting for a chance to kick start your coding skills and make something cool and interesting?  Well then, you are in the right place!! 

We are all part of the hack club community and what better way to introduce yourself and the local hack club to which you belong, than with a stylish badge that will help you stand out from the crowd. In this workshop, we’ll teach you how to make a badge generator. It would be great if you had a basic knowledge of python but even if you don’t we have made this quite simple for you to easily pick up the concepts.

We will be making a badge generator wherein you can load your image and generate a badge with a beautiful template containing your name and hack club name as shown below.

![alt final_image](https://cloud-2s7kfdv88.vercel.app/0john_doe_badge.png)

Lets Look at how we will buld this.
We will use this template image as our starting material
![alt template_image](https://cloud-9wn2hv2iz.vercel.app/0template_-_copy.png)
You can download the high quality image from [https://cloud-3a5mpac6q.vercel.app/0template.png](here).

First of all we will take your picture and then resize it so that it can fit the white rectangle in the template. For that we will first set a height for the image to be equal to the height of the white box (in our case it is 474px) and then calcuate the equivalent width for the image so that we do not loose the original ratio of the image. Once we have the image we will crop it to the required dimensions(474px X 474px) and then paste it in the white box. 
Now we add your Name and the name of your hack club to the badge. For that we get the input from you and then calculate a font size fo the text so that it will fit perfectly for any name. Once we have have calculated the font size, we then create a label with your name on the center and then paste that to the badge. We do the same thing for your hack club name and then we save the image. Thats it. Your badge is ready

## So let's get started
In order to complete this workshop you will need Python installed in your compuuter and an additional Python module called Pillow/PIL.

You can download and install the latest version of Python from [https://www.python.org/](https://www.python.org)

Install Python with the general settings. Remember to  tick the add python to path option while installing.
Once you have got pythin set up we need to install pillow, which is a python module used for image processing.
To install pillow open your terminal/ command prompt and type in 
```
pip install pillow
```

