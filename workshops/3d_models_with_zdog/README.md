---
name: Animated 3D Models
description: Make 3D Models and Animate them using a simple Js Library
author: '@wollygfx'
---

# Animated 3D Models

We all have wanted to make 3D models at some point, although it seems to be complicated, but it’s not!— In this workshop, we will be using a simple Java Script library named Zdog that will let us make anything we want to in a matter of minutes, follow along with us and see how easy it is.

At the end of this workshop, you will be able to make 3d models like these:

![examples](https://cloud-5a0ya05fk.vercel.app/0large.gif)

Here's a [live demo](https://repl.it/@wollygfx/Hack-Club-Workshop-Demo) of what we will make, you can also find the final code there.


## Set Up

This workshop requires a very basic knowledge of the following languages: HTML & JS. Don’t worry if you get stucked at some point of the workshop, everything is explained the best way for you to understand!

For this workshop we will use [Repl.it](https://repl.it), click [here](https://repl.it/languages/html) to create a coding environment right for this workshop.
<br>

![Setup](https://cloud-qbmylslty.vercel.app/0image.png)

## HTML part

Alright, let’s start!. First we want to create inside of the <body> tag a <canvas> in which, the 3d model we are going to create will render. Then, put a class; feel free to name it as how ever you want to… I will name it as “model”.
```html
<canvas class="model"></canvas>
```
Now we have to put the following code inside of the <body> tag, this code allows us to use the Zdog library without having to download it. Learn about CDN [here](https://en.wikipedia.org/wiki/Content_delivery_network).
```
<script src=“https://unpkg.com/zdog@1/dist/zdog.dist.min.js”></script>
```
At the end, your code should look kind of like this:
```html
<body>
    <canvas class="model"></canvas>
    <script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
    <script src="script.js"></script>
 </body>
```
*Note: It’s very important to keep this order to make sure everything works perfectly*

## JS part
Now that we have our html file ready to go, we gotta work on our javascript file. 
![Cool gif](https://cloud-p49mi1lgl.vercel.app/0tumblr_e49d74c805eec46704d22c1da59ecded_cc93a056_500.gif)

### Setting up the canvas

We are going to start with the funny part. First, let’s create a main variable and let’s give it a name, I will name it as “ws”

```javascript
const ws = new Zdog.Illustration({
  element: ‘.model’,
  resize: ‘fullscreen’
});
```
Let's break this down:

1. **Illustration** is the top-level class that handles dealing with the <canvas> element, holding all the shapes in the scene, and displaying those shapes in the element.
2. **element** we use this element to match the render with the canvas tag
3. **resize** is used to modify the size in which the model will be render, in this case, the 3d model will render in the whole screen. If you want to, you can remove this element.

At this point nothing shows up yet, so let’s create our first 3d model.

### Creating the model

Now, we’re gonna create a shape, for this workshop I want to make a simple cube, but you can create whatever you want to. Here is a list of [shapes](https://zzz.dog/shapes) you can create with Zdog 

*Note: Every shape has its own properties or elements, you can check them out [here](https://zzz.dog/shapes)*

Let’s add the following code to our js file:

```javascript
    const cube = new Zdog.Box({
      addTo: ws,
      width: 100,
      height: 100,
      depth: 100,
      stroke: false,
      leftFace: "#da0",
      rightFace: "#e62",
      topFace: '#ed0',
      bottomFace: '#636'
    })
```
Explanation:
1. Box is a shape class, you can replace this for the shape you want to use…
2. We made the 3d model (cube) a child to the main Zdog Illustration (ws) using the addTo element. This element must be there, otherwise the 3d model will not render.
3. The width, height and depth elements can either stretch or shrink the shape of your box:
- Width: Sets the width of the cube
- Height: Sets the height of the cube
- Depth: Sets the depth of the cube. If the value is 0, the cube will render as a 2d square; so make sure to give it a value.
4. The Stroke element gives the 3d model a stroke, it works as an external layer that you can use to give your 3d model a rounded look. Play around with it!
5. leftFace, rightFace, topFace & bottomFace elements give a color to each face of the 3d model, try using different colors for each face, so that you can appreciate way better the animations you make.

### Rendering

Now that we have created our 3d model, let’s render it. Use the following line of code to render the cube we just created. 

```javascript
ws.updateRenderGraph()
```
This code updates and render your Zdog illustration that was declared in the first variable, so make sure to write the correct name in.

Now let's click on the **Run** button to see what happens...
![Render image](https://cloud-k11ck8g2n.vercel.app/0image.png)

Congrats, you just made your first 3d model… Yeah, maybe not what you were expecting. Let’s fix this by animating it.

![woah gif](https://cloud-kr2lyxjbx.vercel.app/0woah.gif)

### Animating it
Add the following code to our JS file:

```javascript
    function animatemodel() {
      ws.rotate.y += 0.01;
      ws.rotate.x += 0.01;
      ws.updateRenderGraph()
      requestAnimationFrame(animatemodel)
    }

    animatemodel()
```
Explanation:

1. We just created a function that will make the 3d model rotate, you can name this function to whatever you want.
2. ```rotate.x``` and ```rotate.y``` set’s the velocity to the rotation of the model: 
- The cube will move up and down depending on the given value (- or +, respectively)
- The cube will move to the right and to the left depeding on the given value (- or +, respectively)
3. ```ws.updateRenderGraph()``` updates and render your Zdog illustration that was declared in the first variable, make sure to write the correct name in.
4. ```requestAnimationFrame(animatemodel)``` this is like a loop, basically it makes the model rotates every time by creating frames.
5. ```animeatemodel()``` calls the function.

Now you can click on run again!

![Animated model](https://cloud-djkuut7y4.vercel.app/0screen_recording_2020-10-03_at_7.31.47_pm.gif)

Amazing, huh?
![Amazing gif](https://cloud-hrs0t8jeh.vercel.app/0tenor.gif)

### Multiple Shapes
If you want to try and make more complex models you will need to use multiple shapes, [here](https://zzz.dog/#made-with-zdog) are some examples of what you can create:

![examples](https://cloud-2jaw6a14x.vercel.app/0image.png)

Making multiple shapes is very easy, it’s as simple as putting multiple shapes together, until you get what you want. The hardest part of this, is to put everything where it must be, we can do this using the property: “translate”. Let’s see how it works!

I wanna try making the Hack Club logo, but you can make whatever you want!. Click [here](https://repl.it/@wollygfx/Hack-Club-logo) to see the final code.

I'll start making the red square in the background:
```javascript
new Zdog.Box({
  addTo: model,
  width: 100,
  height: 100,
  color: '#ec3750',
  stroke:20,
  translate: { z: -18 },
})
```
1. As seen before, the ```addTo``` property puts the made shape inside of the main Zdog Illustration.
2. Used the width and height properties to make a perfect square, i didn't give it a depth because it was not needed.
3. The whole square will have the same color (red), so we can use the color property to give the whole shape a single color instead of assigning a color to each face.
4. As said before, the stroke property helps the shape to look a little rounded.
5. The translate property moves the square -18 within the z-axis. You can interpret this as if you were giving a shape a depth, so the shape is moved backwards.


When running these few lines, we will get this:
![red square](https://cloud-2q1vsewnu.vercel.app/0image.png)

That looks perfect!. Now I will create the letter h, so I am gonna need 3 more boxes:
```javascript
new Zdog.Box({
  addTo: model,
  depth:20,
  width: 20,
  height:80,
  color: '#fff',
  translate: { z: 18, x:-20},
})
```

- This time, the shape is moved forward... This creates an space between the red square and this new shape.
- The shape is moved to the left within the x-axis

![result 1](https://cloud-kg0xtr3hs.vercel.app/0image.png)

```javascript
new Zdog.Box({
  addTo: model,
  depth:20,
  width: 20,
  height:40,
  color: '#fff',
  translate: { z: 18, y:20,x:20,},
})
```

- This time, we created a new box but way smaller.
- We moved it to the right within x-axis and a little bit down within the y-axis.

![result 2](https://cloud-1nisp19i8.vercel.app/0image.png)

```javascript
new Zdog.Box({
  addTo: model,
  depth:20,
  width: 40,
  height:20,
  color: '#fff',
  translate: { z: 18, x:10},
})
```
In this last one, all we had to do was to move the box to the right within the x-axis, so that it blends with the box in the right.
![result 3](https://cloud-m2gpkvlqa.vercel.app/0image.png)

Now, i will just animate it 
```javascript
function animation () {
  model.rotate.y += 0.01;
  model.updateRenderGraph();
  requestAnimationFrame(animation);
}

animation()
```

Here's the final result:
![final result](https://cloud-d9lxnrldx.vercel.app/0screen_recording_2020-10-09_at_12.05.02_pm.gif)


### Hack It

Congratulations! You just learned the basics of ZDog, feel free to check the resources below to improve your 3d modeling knowledge...

![Congrats gif](https://cloud-d0aqa4icc.vercel.app/0bec38a05d56ac6ae2d9dec2f482ebff9.gif)

Make your own 3D Model and showcase it at [Hack Club's slack](hackclub.slack.com), i would love to see what you can create using what you've learned in this workshop. 

### Resources

- [ZDog website](https://zzz.dog)
- [Made with ZDog](https://codepen.io/collection/DzdGMe/?cursor=ZD0xJm89MSZwPTEmdj0z)
- [Text plugin for ZDog](https://jaames.github.io/zfont/)
- [Plotting data with Zdogs](https://observablehq.com/@zechasault/images-drawn-with-zdogs)