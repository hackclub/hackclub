---
name: Interactive Sketch
description: Doodle pineapples with the help of machine learning
author: '@MatthewStanciu'
---

![Gif of a human drawing part of a pineapple and a machine learning model filling in the rest](https://cloud-qvus77map.vercel.app/screen_recording_2020-09-17_at_5.49.18_pm.gif)

Have you ever wanted to sketch something, but you're bad at drawing and don't know how to finish it? Well now, thanks to the fact that our robot overlords are becoming increasingly sentient, we can use machine learning to help us finish sketches that we started!

[Link to Demo](https://InteractiveSketch.techbug2012.repl.co)
[Link to Code](https://repl.it/@TechBug2012/InteractiveSketch)

# Getting started
This workshop will use two libraries:

- [Magenta.js](https://magenta.tensorflow.org), a library built on top of Google's [TensorFlow](https://www.tensorflow.org) that allows you to easily use pre-trained machine learning models
- [p5.js](https://p5js.org), a fantastic library that makes creative coding in the browser easy. We'll use p5 to give ourselves a canvas to draw on

This project requires a lot of complicated setup that is outside the scope of this workshop, so we're going to skip it for now by starting from a starter repl that already has this setup complete for us.

Get started by [clicking here](https://repl.it/@TechBug2012/interactive-sketch-starter#script.js).

![Screenshot of the starter project](https://cloud-pl3k1n9v7.vercel.app/screen_shot_2020-09-18_at_4.56.12_pm.png)

You should see a pretty filled in `script.js` file with a comment that says `// Your code here!` on line 3. If you click the green button at the top that says "Run", you should see a basic HTML website that contains the skeleton of your project. Of course, this website doesn't do anything yet—that's what we're going to fix next!

# About all this extra code...
As mentioned above, the project that we're making actually requires a lot of complicated setup steps. If this workshop had to explain all of them, it would be way too long and complicated given what we're trying to make. 