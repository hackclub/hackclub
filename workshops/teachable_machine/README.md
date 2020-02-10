---
name: 'Teachable Machine'
description: 'Easily get started with machine learning—no coding required.'
author: '@MatthewStanciu'
group: 'start'
order: 11
---

[Teachable Machine](https://teachablemachine.withgoogle.com) is a website made by Google that allows you to quickly and easily create machine learning models without coding. It’s a fantastic way to learn the fundamental concepts of machine learning and be able to apply them to cool projects without having to understand the complex math is normally required to work with machine learning. In this workshop, we’re building a super simple website that detects whether your camera sees you alone or you with another object (e.g. your phone).

## How do machines learn?
Before we get going, some quick background info:

A machine learning model is a mathematical model for the process of machine learning. Some examples of machine learning models include [artificial neural networks](https://en.wikipedia.org/wiki/Artificial_neural_network), [decision trees](en.wikipedia.org/wiki/Decision_tree_learning), and [regression analysis](en.wikipedia.org/wiki/Regression_analysis). Don’t worry, you don’t have to know what any of these things actually are—Teachable Machine will magically create its own model behind the scenes.

Machine learning models are trained with large amounts of data that attempt to “teach” the model how to correctly solve a specific problem (e.g. what a hot dog looks like). If you want to learn more about how machine learning models are trained, CGP Grey made [a fantastic video](https://youtu.be/R9OHn5ZF4Uo) about it.

## Training a model
Get started by visiting [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) and clicking on “Get Started”. You should be greeted with the option to create an image, audio, or pose project. For now, pick “Image Project”.

![](https://raw.githubusercontent.com/hackclub/hackclub/teachable-machine/workshops/teachable_machine/img/homepage.JPG)

![](https://raw.githubusercontent.com/hackclub/hackclub/teachable-machine/workshops/teachable_machine/img/imageproject.PNG)

Rename “Class 1” and “Class 2” to “me” and “me with [some object]”.

![](https://raw.githubusercontent.com/hackclub/hackclub/teachable-machine/workshops/teachable_machine/img/renameclass.GIF)

Next, turn on your webcam for each class and click “Hold to Record” until you have a few hundred image samples recorded. You want to take as many pictures and capture as many angles, positions, etc. as you possibly can. The more data you have, the better your model will learn the difference between the two sets of data.

![](https://raw.githubusercontent.com/hackclub/hackclub/teachable-machine/workshops/teachable_machine/img/imagesamples.PNG)

Once you feel you’ve recorded enough samples, click on “Train Model”. The time it takes to train the model will vary depending on how many image samples you gave it, but it usually takes somewhere around 30 seconds.

Once your model is trained, a preview should appear. Try it out! If it’s shaky in some angles or positions, go back and record more samples with those angles or positions. Keep re-training your model until you end up with a model that consistently identifies the correct class.

Here’s what mine looks like:

![](https://raw.githubusercontent.com/hackclub/hackclub/teachable-machine/workshops/teachable_machine/img/model.GIF)

## Exporting your model
Teachable Machine will host your model on their servers, so you can use it in any project you want. To upload your model to Teachable Machine’s servers, click on “Export Model”, then click “Upload my model” once the window pops up. After a few seconds, you should see a link to your model available under “Your sharable link:”

![](https://raw.githubusercontent.com/hackclub/hackclub/teachable-machine/workshops/teachable_machine/img/uploadedmodel.PNG)

(FYI: if you’re interested in seeing the raw data of your model, copy the link to the model and paste it in your URL bar with `model.json` at the end)

## Making a website
Now it’s time to add your Teachable Machine model to your own project!

1. Scroll down and copy the code Teachable Machine generated for you
2. Spin up a new HTML repl at [repl.it/languages/html](https://repl.it/languages/html)
3. Paste the code in between the `<body>` tags.

**Before you run**: make sure to read through the code you just pasted! It’s fully commented and super easy to understand. It’s important to understand what exactly you’re doing—otherwise, you’ve learned nothing!

Run the repl, then open your website in a new tab by clicking the icon at the top right. Once you click “Start” and give the site access to your webcam, you should see your model!

![](https://raw.githubusercontent.com/hackclub/hackclub/teachable-machine/workshops/teachable_machine/img/finalmodel.PNG)

# Hacking
Congratulations! You’ve just trained a machine learning model directly in your browser without writing any code. But your journey is far from over—there are endless ways you can take this project further. Did you notice the “Add a class” button below your two original classes?

![](https://raw.githubusercontent.com/hackclub/hackclub/teachable-machine/workshops/teachable_machine/img/add-a-class.PNG)

You can train this model with as many classes as you want! Try and see how far you can take it—you, you + phone, you + water bottle, you + phone + water bottle, etc. Go crazy.

Also, the model as shown in your repl is pretty boring. Try adding some CSS to it and making it look nice!
