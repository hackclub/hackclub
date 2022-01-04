---
name: 'VR World'
description: 'Create your own VR World'
author: '@wollygfx'
img: 'https://cloud-p6nx5mns7.vercel.app/0image.png'
locales: 'pt-br'
---

In this workshop, you'll learn how to create your own VR World using [A-Frame](https://aframe.io/), a web framework for building 3D/AR/VR experiences.

Here is the [live demo](https://vr-world.wollygfx.repl.co/) and the [source code](https://repl.it/@wollygfx/VR-World#index.html) of what we are making:
![VR World](https://cloud-rk4ys3373.vercel.app/0image.png)

## Set-up

This workshop requires a very basic knowledge of HTML. Don’t worry if you get stuck at some point in the workshop, everything is explained the best way for you to understand!

For this workshop we will use Repl.it, a free, online code editor. Click [here](https://repl.it/languages/html) to get started with a new HTML project on repl.it.

![Setup](https://cloud-qbmylslty.vercel.app/0image.png)

##  Setting up A-frame

To get started, we'll need to link A-frame with our HTML document, there are multiple ways to do this that you can find [here](https://aframe.io/docs/1.0.0/introduction/installation.html), we'll just need to drop a `<script>` tag pointing to the CDN build:
```html
<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
```
Now, we can start creating our virtual world.

![Excited GIF](https://cloud-22dzjiq1j.vercel.app/0tenor.gif)

### A-Scene

In order to start creating our virtual world, we **must** create a scene. The scene is the main tag, everything that we want to put inside of our world will go inside of this tag, that includes the  [primitives](https://aframe.io/docs/1.0.0/introduction/html-and-primitives.html#primitives), the camera, and many more that we will get to know through this workshop.

So go ahead and create an scene inside of the `<body>` tag:
```html
<body>
    <a-scene>
        <!--Here you put the components-->
    </a-scene>
</body>
```

Now, we can start putting in whatever we want, but let's start with the basics. Inside of the tag `<a-scene>` create the component `<a-sky>`.
```html
<a-scene>
    <a-sky color="#62B1FF"></a-sky>
</a-scene>
```

![Sky rendered](https://cloud-e47vodig4.vercel.app/0image.png)

This will render a huge sphere with a color or a texture mapped to the inside. There are a bunch of [attributes](https://aframe.io/docs/1.0.0/primitives/a-sky.html#attributes) that we can use to modify our sky, feel free to play with them:
- color
- radius
- roughness
- src
- etc

But, you might be wondering how to put a texture inside of that sphere instead of a color, well is very simple... A-Frame has an asset management system that allows us to place our assets in one place and to preload and cache assets for better performance.

```html
<a-scene>
    <a-assets>
        <img id="sky-texture" src="sky.jpg">
    </a-assets>
    <a-sky src="#sky-texture"></a-sky>
</a-scene>
```
Let's break this down:
- First we created our asset management system using the `<a-assets>` tag and then inside of that tag, we created an `<img>` component with the attributes `id` and `src`.
- Then we replaced the `color` attribute with `src` and pointed it to the id of the `img` component.

This will render a beautifully textured sky.

![Sky texture](https://cloud-dytwphipl.vercel.app/0screen_recording_2020-11-16_at_6.19.29_pm.gif)

Uploading images to Repl.it is very simple, just go to the navigation bar and click on **Upload file**:

![Uploading files to Repl.it](https://cloud-3vcjp49bp.vercel.app/0image.png)

Now that we have a sky, we'll need a floor too. We can simply do this using the `<a-plane>` component.
```html
<a-plane src="#ground" height="10" width="10" rotation="-90 0 0"></a-plane>
```
Breaking down:
- As seen before, I created an `img` component inside of the asset management system and then I used the `src` attribute to point to that asset.
- We gave this plane a `height` and a `width`, feel free to make it either bigger or smaller.
- We had to rotate the plane component because by default it is not parallel to the ground.

After clicking on run, we'll see a beautiful ground rendered.

![Ground rendered](./img/0screen_recording_2020-11-16_at_6.36.26_pm.gif)

But this looks kinda boring, so let's fix this by adding 3d models. There are 2 ways to do this:
1. Creating 3D models by ourselves.
2. Importing 3D models.

We'll try both methods very quickly. So let's start with the first one... inside of the `<a-scene>` tag, create the `<a-box>` primitive and give it these attributes:
```html
<a-box width="1" height="0.2" position="0 0.75 -5" color="#AB8360"></a-box>
```
Let's break this down:
- The width, height, and depth attributes can either shrink the box or stretch it... Feel free to play around with those.
- We needed to move the cube within the y & z coordinates in order to be able to see the cube. The camera's position is set to `0 0 0` by default and also the box's position is set to `0 0 0` as default, meaning that we can't see the cube unless we move the camera or the cube.

*Note: A-frame uses a right-handed coordinate system and uses as distance unit the meter (m)*

![Box primitive](./img/0box.gif)

Now, we can use the box we just created as a parent and then create a bunch of child primitives.
```html
<a-box width="1" height="0.2" position="0 0.75 -5" color="#AB8360">
    <a-box color="black" width="0.25" height="2" depth="0.25" position="-0.38 0 -0.38"></a-box>
    <a-box color="black" width="0.25" height="2" depth="0.25" position="0.38 0 -0.38"></a-box>
    <a-box color="blue" width="0.25" height="1" depth="0.25" position="-0.38 -0.5 0.38"></a-box>
    <a-box color="blue" width="0.25" height="1" depth="0.25" position="0.38 -0.5 0.38"></a-box>
    <a-box color="green" width="1" height="0.25" depth="0.25" position="0 0.75 -0.38"></a-box>
</a-box>
```
The code above will render a chair. When we use child and parent objects we'll see that our parent object is now the default position `0 0 0` for our child objects, so child objects won't appear where the camera is, but where the parent object is.

Let's break this down:
1. We created 2 black stretched boxes and moved them within the x and z coordinates.
2. Then we created 2 blue boxes with half of the height of the 2 black boxes, and then we moved these boxes within the y coordinate.
3. Finally, we created another box with the width of the parent child and the height of the black boxes, then I moved it within the y and z coordinates.

![Rendered chair](./img/0chaor.gif)

With this method you can make almost whatever you want, it's just about imagination. Now, I'll show you how to import a 3D Model.

A-Frame provides components for loading [glTF](https://aframe.io/docs/1.0.0/components/gltf-model.html) and [OBJ](https://aframe.io/docs/1.0.0/components/obj-model.html). But A-frame [recommends using glTF](https://aframe.io/docs/1.0.0/components/gltf-model.html#why-use-gltf) if possible as glTF gains adoption as the standard for transmitting 3D models over the Web.

So, all we have to do to import a 3D model is to create an [asset item](https://aframe.io/docs/1.0.0/core/asset-management-system.html#lt-a-asset-item-gt) component inside of the asset management system, and then create  the `<a-entity>` primitive inside of our scene pointing to the `<a-asset-item>` component using the `gltf-model` attribute.
```html
<a-assets>
    <a-asset-item  id="model"  src="scene.gltf"  ></a-asset-item>
</a-assets>

<a-entity  gltf-model="#model"></a-entity>
```

Here's what we get:

![Importing 3D Model](https://cloud-nay6jhbpz.vercel.app/0screen_recording_2020-11-17_at_3.22.37_pm.gif)

There are thousands of websites where you can get the 3D models from, here are some of them:
- [Sketchfab](https://sketchfab.com/)
- [Clara.io](https://clara.io/)
- [Archive3D](http://archive3d.net/)
- [Sketchup’s 3D Warehouse](https://3dwarehouse.sketchup.com/)
- [TurboSquid](https://www.turbosquid.com/Search/3D-Models/free)

Now, there's something else that we can add to our VR World, sounds. Sounds are **very** important because they help us to get immersed in our world.

All you have to do is to create an audio component inside of the asset management system and then create a sound primitive inside of the scene pointing to the audio component:
```html
<a-assets>
    <audio id="background" src="background.wav"></audio>
</a-assets>

<a-sound src="#background" autoplay="true"></a-sound>
```
In the real world sound emits from a source, and the closer you get to that source, the louder you can hear it. We can do the same thing in A-frame using the attribute `position`. Also, notice that we added the attribute `autoplay` because we want the sound to start playing when the user joins our world.

Another thing that is very important when making a world is, lightning. What if we wanted to make a dark and scary world?– well here's where you can play with the lightning.

There are 3 types of lights that we can use, `ambient`, `directional`, and `point`. Check these 3 examples:

<details><summary>Ambient lights</summary>
Ambient lights affects all the primitives in the scene, if you chose a dark color then all the elements would look darker, same thing for lighter colors. We can use the `intensity` attribute to change the way this light affects the scene.

```html
<a-light type="ambient" color="#43484d" intensity="0.5"></a-light>
```

This is how ambient lights affect the scene and its components:

![Ambient light](https://cloud-821gtbu0s.vercel.app/0screen_recording_2020-11-17_at_5.18.31_pm.gif)

</details>
<details><summary>Directional lights</summary>
Directional lights are like a light source that is infinitely far away, but shining from a specific direction, like the sun. We must specify where the light is pointing to, we do that using the attribute `target`, which points to the position of the child object.

```html
<a-light type="directional" target="#childbox" color="#007DF9" intensity="0.5" position="-0.5 1 1">
    <a-box id="childbox"></a-box>
</a-light>
```

You can see here that this type of light acts just like the sun, you can also see how it only affects one side of the objects and the other is completely black.

![Directional light](https://cloud-g8qe1cxw5.vercel.app/0screen_recording_2020-11-17_at_5.26.33_pm__1_.gif)

</details>
<details><summary>Point lights</summary>
Point lights are like light bulbs; we can position them around the scene, the closer the light bulb gets to an object, the greater the object is lit.

```html
<a-light type="point" color="#43484d" position="-0.5 1 1"></a-light>
```

Here's how point lights interact with the scene and the objects.
![point lights](https://cloud-2hboh6agi.vercel.app/0screen_recording_2020-11-17_at_5.33.22_pm.gif)

</details>
Feel free to play around with lightning!

Okay, the last thing but not least we'll add text to our world. We can use texts to do a bunch of things, such as telling users what to do or what something is for.

Here's how it works:
```html
<a-text value="Welcome Hack Clubbers" color="#white" align="center" position="0 2 -3" scale="1.5 1.5 1.5"></a-text>
```
Let's break this down:
1. We can simply add text using the primitive `<a-text>`.
2. The attribute `value` is where we put our text.
3. The `align` attribute is used to align our text to the center, to the left and to the right.
4. We can use the `scale` attribute to make the text bigger or smaller, the default size is `1 1 1`.

This is what the code above renders:

![Text rendered](https://cloud-oql3ioxyn.vercel.app/0screen_recording_2020-11-17_at_5.41.43_pm.gif)

And that's all for today's workshop :)

### Hack it
Yay! you made it to the end of this workshop.

![Congrats GIF](https://cloud-d0aqa4icc.vercel.app/0bec38a05d56ac6ae2d9dec2f482ebff9.gif)

Make your own VR World and share it in the [Hack Club Slack](https://hackclub.slack.com/), I would love to see what you can create using what you've learned in this workshop!

### Other examples
Check out these cool VR Worlds made by other people:
- [A-frame react demo](https://luatnd.github.io/aframe-react-demo/)
- [Moon rider](https://moonrider.xyz)
- [Soundboxing WebVR](https://webvr.soundboxing.co)
- [STAND AT THE EDGE OF GEOLOGIC TIME](https://apps.npr.org/rockymountain-vr/)

### Resources
Check out these resources to go further.
- [A-frame animations](https://blog.prototypr.io/learning-a-frame-how-to-do-animations-2aac1ae461da)
- [Building an Immersive Game with A-Frame and Low Poly Models](https://hacks.mozilla.org/2018/03/immersive-aframe-low-poly/)
- [Build a Multiplayer VR App That Works in Realtime](https://www.pluralsight.com/guides/build-a-multiplayer-vr-app-that-works-in-realtime-in-less-than-10-minutes)
- [A-frame buttons](https://wirewhiz.com/aframe-button/)
