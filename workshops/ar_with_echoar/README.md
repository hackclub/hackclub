---
name: 'EchoAR Models'
description: 'Displaying EchoAR Models that you can see in Augmented Reality'
author: '@aaditgupta21'
img: 'https://cloud-35h2h9f5s.vercel.app/0unknown.png'
---

# EchoAR Models

In this workshop, we will talk about how to display 3D Models and show them in AR (Augmented Reality) inside an HTML webpage using EchoAR.

The Final Project will look like this.

![Final Project](https://cloud-el7ts8s43.vercel.app/0unknown.png) ![Final Project](https://cloud-dykp1xvd8.vercel.app/0unknown.png)

Here's the [Live Demo](https://EchoAR-Models.aaditgupta21.repl.co) and [Final Code](https://repl.it/@aaditgupta21/EchoAR-Models)

## Part 1: Prerequisites

You should have a basic understanding of:

- HTML
- CSS
- JavaScript

## Part 2: Setup

### Setting up Environment on Repl.it

[Repl.it](https://repl.it) is a great online IDE to let you make this project. Repl.it is not mandatory but it is what I will be using throughout this workshop.

To create your repl, go to [https://repl.it/languages/html](https://repl.it/languages/html). You may need to sign up, so you can use any of the options there to sign up.

After a few seconds you should see this page.

![Repl.it Home Screen for HTML Language](https://cloud-phzgv7tcx.vercel.app/0unknown.png)

## Learning the Default Files

## HTML File

Let's first start looking at the default `index.html` file.

At the top of the file we have `<!DOCTYPE html>`. This line helps tell the browser that this is an `HTML` file. We then have the `<html>` and `<head>` tag. Inside the `<head>` tag we will add our imports.

## CSS/JS Files File

In the `<head>` tag of your HTML, you should see these lines.

```html
<link href="style.css" rel="stylesheet" type="text/css" />
<script src="script.js"></script>
```

This is linking the `style.css` file and the `script.js` file to your `index.html` file.

### Setting up EchoAR Account and Uploading Models to EchoAR

[EchoAR Website](https://echoar.xyz) is a platform where you can store your 3D models and all the relevant formats for different platforms. You can sign up at their website, and you should be good to go under the "Individual (Free)" plan.

![EchoAR Sign Up Page](https://cloud-eyauwzd28.vercel.app/0unknown.png)

Once you sign up, you can click on the "Add to Cloud" button in order to add a 3D model to EchoAR.

![Add Image Button](https://cloud-j928xf04l.vercel.app/0unknown.png)

You can choose one of their premade models or upload your own 3D Model (as GLB File) and select the target as "Anywhere".

![Picking the 3D Model on the EchoAR Website](https://cloud-miu8nmofp.vercel.app/0unknown.png)

Then, click the share icon and go to the link on your keyboard.

![Share Button on the EchoAR Website](https://cloud-hr9mfuhs3.vercel.app/0unknown.png)

Next, inspect the page s with "Inspect Element" so we can get the model links!

![Right Click dialog on EchoAR Screen](https://cloud-pwb6bv0iq.vercel.app/0unknown.png)

Go to the `Elements` tab and look for the `modal-viewer` element and copy the `src` and `ios-src` (you may have to open up the `body` element to find the `modal-viewer` element). We need to get the `ios-src` as ios phones need a different file to run.

![Inspect Modal-Viewer Element](https://cloud-mxa9oazwp.vercel.app/0unknown.png)

Repeat this for all the models that you want in your application.

### Creating the HTML

First, we need to import some scripts people have made in order to use AR and make it compatible with different browsers and devices. These imports go at the end of the `head` tag. In addition, we import `Bootstrap` in order to easily style our website.

```html
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
```

```html
<!-- Our own custom scripts -->
<script defer src="./script.js"></script>

<!-- Edge/Firefox WebComponent Support -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"></script>
<!-- Intersection Observer polyfill -- better performance Safari/IE11 -->
<script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"></script>
<!-- Improves Resize Behavior for non-chrome browsers -->
<script src="https://unpkg.com/resize-observer-polyfill@1.5.0/dist/ResizeObserver.js"></script>
<!-- Polyfill for full Screen to fully support AR -->
<script src="https://unpkg.com/fullscreen-polyfill@1.0.2/dist/fullscreen.polyfill.js"></script>
<!-- Magic Leap support -->
<script src="https://unpkg.com/@magicleap/prismatic/prismatic.min.js"></script>
<!-- Removes focus from some input types -->
<script
  src="https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js"
  defer
></script>
<!-- Loads modal viewer for modern browsers -->
<script
  type="module"
  src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"
></script>
<!-- Loads modal viewer for old browsers -->
<script
  nomodule
  src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
></script>
```

These are the imports necessary to show the 3D Models and for AR support.

Inside the `body` tag we can add a `modal-viewer` which will display our 3d element. We set some settings on its properties and inside we have a button which will be displayed on compatible devies and will allow the user to see the object in AR. We use the classes `btn` and `btn-primary` as bootstrap gives these classes good stylings for buttons.

```html
<model-viewer
  alt="3D Model"
  quick-look-browsers="safari chrome"
  camera-controls
  auto-rotate
  ar
  unstable-webxr
  preload
  shadow-intensity="1"
  loading="eager"
  id="modal-viewer"
>
  <button slot="ar-button" id="ar-btn" class="btn btn-primary">
    See in AR
  </button>
</model-viewer>
```

Above this, we can have some buttons which can be used to switch models. In addition, we will make the function `switchModel` used in the `onclick` when we work on the javascript.

```html
<button class="btn btn-primary" onclick="switchModel('car')">Car</button>
<button class="btn btn-primary" onclick="switchModel('skyscraper')">
  Skyscraper
</button>
```

### A bit of styling

Inside the styles.css file, we can add a bit of styling to make our site look better. First, we can tell our modal viewer to use the full screen and give it a background color.

```css
#modal-viewer {
  width: 100%;
  height: 40rem;
  background-color: #203864;
}
```

We can also give the buttons some margins so they are a bit spread out.

```css
.btn {
  margin: 5px;
}
```

### Connecting EchoAR models to the website using Javascript

First, we want to get the modal-viewer element from the [DOM (Document Object Model) Document](https://www.w3schools.com/js/js_htmldom_document.asp) and put it into a variable so that we can change the sources of the modal viewer.

```javascript
var modalviewer = document.getElementById('modal-viewer')
```

Next, we want to create an object, or key-value store, containing the sources for each of our models. Here is an example with the sources for a Skyscraper and Car Object I have uploaded to echoAR. For each model we store the `src`, `ios-src`, and `alt`. You can add more models by adding a new block in the `models` object. You can learn more about javascript objects [here](https://www.w3schools.com/js/js_objects.asp).

```javascript
var models = {
  skyscraper: {
    src:
      'https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/d686a655-e800-430d-bfd2-e38cdfb0c9e9.glb',
    iosSrc:
      'https://echoar-storage.s3.us-east-2.amazonaws.com/0_model_samples/d686a655-e800-430d-bfd2-e38cdfb0c9e9.usdz',
    alt: 'Skyscraper'
  },
  car: {
    src:
      'https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/c40af116-f3b3-4d3e-b442-b767f7bb6070.glb',
    iosSrc:
      'https://echoar-storage.s3.us-east-2.amazonaws.com/polished-math-8279/50cda243-ccd3-4628-b1bf-14ecd3263cbd.usdz',
    alt: 'Car'
  }
}
```

Now, we create a function to switch the model shown in the model-viewer. Model, is a string passed into the function with the name of the model we want to display (eg. `skyscraper`). We get the data for the relevant model by using `models[model]`, and then get the use the `setAttribute` function on the `modalviewer` to set the `src`, `ios-src`, and `alt` attributes of the modal viewer.

```javascript
function switchModel(model) {
  //Set ios source
  modalviewer.setAttribute('src', models[model].src)

  //Set ios source
  modalviewer.setAttribute('ios-src', models[model].iosSrc)

  //Set alt text
  modalviewer.setAttribute('alt', models[model].alt)
}
```

Finally, we can set a default model by calling the `switchModel` function and specifying our default model

```javascript
switchModel('car')
```

## Finished Product

Voila!! You finished! If you are a little confused with something, please feel free to dm me on the HackClub Slack, `@aadit`.

![Congratulations image](https://cloud-dyfldjz20.vercel.app/0unknown.png)

## Hacking

Here are some things which you can do:

1. Switch the AR Model every 10 seconds. Here's an [example](https://repl.it/@aaditgupta21/EchoAR-Switch-Every-Ten-Seconds) of one I made.

2. Make a function that would switch the model randomly. Here is the [code](https://repl.it/@aaditgupta21/EchoAR-Model-Random) for mine.

3. Create an `Add` Button, to add 3D Models from the frontend. Here's an [example](https://repl.it/@aaditgupta21/EchoAR-Add-Button) of mine.

Once you have made your own hack of this project, share it in `#ship` channel on the HackClub slack, or dm it to me `@aadit`. I would love to see your cool project!
