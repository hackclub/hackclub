---
name: 'Meme-Generator'
description: 'Spin up your own meme-generator!'
author: '@aaryanporwal'
img: 'https://cloud-qmqu378mz.vercel.app/0image.png'
---

# Meme-Generator

Ever wondered how to make memes? Or did you ever wanted to make your _own_ cool memes and share it with the world?

Then you're at the right place, today we'll be spinning up our own ***meme-generator***, or as I like to call it - 'The Meme-Genie'

Let's take a look of how our meme-generator looks like:

![meme-generator demo](https://cloud-i6md9xxdx.vercel.app/0image.png)

Source code can be found [here](https://repl.it/@aaryanporwal/Meme-generator).

## Part 1: Prerequisites

Basic knowledge of:

1. HTML
2. CSS
3. JavaScript

## Part 2: Setting Up The Environment

We'll be using an online code editor called [repl.it](https://repl.it) for this workshop.

To get started, go to [https://repl.it/languages/html](https://repl.it/languages/html). Your coding environment will spin up in just a few seconds!

You should see something like the following:

![Initial View](https://cloud-p7qnbqzo6.vercel.app/image.png)

Now let's move on to the next part!

![Excited doge](https://cloud-4560ajsyp.vercel.app/0giphy.gif)

## Part 3: Building The Project

### 1) HTML

Let's first start by making a structure for our meme-generator website.

* First give an appropriate heading to our website using the `<h1>` tag.

* So we want our memes to have two text fields: ***Top Text*** and ***Bottom Text***, something like this:

    ![Meme showing top text and bottom text](https://cloud-ejplvs3dg.vercel.app/0image.png)

    For that we'll require two text fields in our website, to achieve that we'll use `<textarea>` tag in HTML:

    ```html
    <textarea id="top-text"></textarea>
    <textarea id="bottom-text"></textarea>
    ```

* Next, we'll need to take a meme template as an input, for that we'll use
  
  ```html
  <input type="file" id="image-input" accept="image/*">
  ```

    This will pop-up a button on our website that'll let the user input a meme template as an image.

* Now we need a generate button, for this we can use something like this:

    ```html
    <button id="generate-btn">Generate!</button>
    ```

    Later we can add an event listener to this button which can run a function on click!

* But we need something to display our meme, right?

    For this, we'll use an [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API):

    ```html
    <canvas id="meme-canvas" title="Right click to save this meme"></canvas>
    ```

Our final HTML file will look like:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Meme Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Welcome to Meme-Genie 🧞 </h1>
        <p>
            <textarea id="top-text"></textarea>
            Text size: <input type="range" id="top-text-size-input" min="0.05" max="0.25" value="0.15" step="0.01">
        </p>
        <p>
            <textarea id="bottom-text"></textarea>
            Text size: <input type="range" id="bottom-text-size-input" min="0.05" max="0.25" value="0.15" step="0.01">
        </p>
        <p>
            <input type="file" id="image-input" accept="image/*">
        </p>
        <p>
            <button id="generate-btn">Generate!</button>
        </p>
        <p>
            <canvas id="meme-canvas" title="Right click to save this meme"></canvas>
        </p>
        <script src="script.js"></script>
    </body>
</html>
```

Note that we have added the *Text Size* slider which we'll use to increase or decrease the text size.
You can take a look at how different input types work [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

### 2) CSS

We'll add some basic styling to our website:

```CSS
h1 {
    font-family: Impact, 'Arial Narrow Bold', sans-serif;
    font-size: 30px;
}

body {
  margin: 10px;
  background-color: lightblue;
}

#meme-canvas {
    width: 300px;
}
```

So in this CSS code, we first change our heading's font and font size, then we apply a background color to our body, and at last we select the meme canvas by it's ID and set its width to 300 pixels.

That's it! This is all the CSS we'll be doing in the workshop.

### 3) JavaScript

Now, in our `scripts.js` file:

* Make a `function` called `generateMeme`, which will take: `image`, `topText`, `bottomText`, `topTextSize`, `bottomTextSize` variables as the function arguments.
  
  Inside our `generateMeme` function, add the following code:
  
  ```javascript
  const canvas = document.getElementById('meme-canvas');
  const ctx = canvas.getContext('2d');

  // Size canvas to image
  canvas.width = img.width;
  canvas.height = img.height;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw main image
  ctx.drawImage(img, 0, 0);

  // Text style: white with black borders
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.textAlign = 'center';

  // Top text font size
  let fontSize = canvas.width * topTextSize;
  ctx.font = `${fontSize}px Impact`;
  ctx.lineWidth = fontSize / 20;

  // Draw top text
  ctx.textBaseline = 'top';
  topText.split('\n').forEach((t, i) => {
    ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
  });

  // Bottom text font size
  fontSize = canvas.width * bottomTextSize;
  ctx.font = `${fontSize}px Impact`;
  ctx.lineWidth = fontSize / 20;

  // Draw bottom text
  ctx.textBaseline = 'bottom';
  bottomText.split('\n').reverse().forEach((t, i) => { // .reverse() because it's drawing the bottom text from the bottom up
    ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    ```

  If you wanna learn more about the cool things `Canvas` can do, check out [this](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage) link.

* Now, after our `generateMeme` function, add a [Window: DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event) event:

    ```javascript
    window.addEventListener('DOMContentLoaded', (event) => {
        //Code here
    });
    ```

Inside the event, add the following code:

```javascript
  // Initialize variables
  const topTextInput = document.getElementById('top-text');
  const bottomTextInput = document.getElementById('bottom-text');
  const topTextSizeInput = document.getElementById('top-text-size-input');
  const bottomTextSizeInput = document.getElementById('bottom-text-size-input');
  const imageInput = document.getElementById('image-input');
  const generateBtn = document.getElementById('generate-btn');
  //Default/Demo text
  topTextInput.value = 'Top\nValue';
  bottomTextInput.value = 'Bottom\nValue';

  // Generate button click listener
  generateBtn.addEventListener('click', () => {
    // Read image as DataURL using the FileReader API
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
      };
    };
    reader.readAsDataURL(imageInput.files[0]);
```

![Scared red panda](https://cloud-kb71t9prf.vercel.app/0giphy-2.gif)
Don't be scared like the above ^ panda, let's break the code down:

Code Explanation:

In the `DOMContentLoaded()` event, we initialize our `topTextInput`, `bottomTextInput`, `topTextSizeInput`, `bottomTextSizeInput`, `imageInput` variables using `document.getElementById()` method which returns an `Element` object.

Next, we give a default text (or value) to our `topTextInput` and `bottomTextInput`

After that, we add an `EventListener` to the `generateBtn` which gets triggered on clicking Generate button.

Inside that we use the [FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) to read the input image as a DataURL,  and we use `reader` to initialize a `FileReader` and when our reader will load, we'll generate a new Image, and that image (along with other variable's value) will be passed on to the `generateMeme()` function.
And our `generateMeme()` will make our awesome meme!

The final JavaScript code should look like:

<details>
 <summary>Click to expand!</summary>

```javascript
function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
    const canvas = document.getElementById('meme-canvas');
    const ctx = canvas.getContext('2d');

    // Size canvas to image
    canvas.width = img.width;
    canvas.height = img.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw main image
    ctx.drawImage(img, 0, 0);

    // Text style: white with black borders
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    // Top text font size
    let fontSize = canvas.width * topTextSize;
    ctx.font = `${fontSize}px Impact`;
    ctx.lineWidth = fontSize / 20;

    // Draw top text
    ctx.textBaseline = 'top';
    topText.split('\n').forEach((t, i) => {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    // Bottom text font size
    fontSize = canvas.width * bottomTextSize;
    ctx.font = `${fontSize}px Impact`;
    ctx.lineWidth = fontSize / 20;

    // Draw bottom text
    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach((t, i) => { // .reverse() because it's drawing the bottom text from the bottom up
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Initialize variables
    const topTextInput = document.getElementById('top-text');
    const bottomTextInput = document.getElementById('bottom-text');
    const topTextSizeInput = document.getElementById('top-text-size-input');
    const bottomTextSizeInput = document.getElementById('bottom-text-size-input');
    const imageInput = document.getElementById('image-input');
    const generateBtn = document.getElementById('generate-btn');
    // Default/Demo text
    topTextInput.value = 'Top\nValue';
    bottomTextInput.value = 'Bottom\nValue';

    // Generate button click listener
    generateBtn.addEventListener('click', () => {
        // Read image as DataURL using the FileReader API
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
            };
        };
        reader.readAsDataURL(imageInput.files[0]);
    });
});
```

</summary>
</details>

**_And with this, we finish coding our Meme-Genie! Check out what you've just built!_**

![Final Output](https://cloud-8kdhhtdj0.vercel.app/0ezgif.com-gif-maker.gif)

>Note: To save the generated meme, you can right click the meme and click "save as...", to save the meme!

## Part 4: Hacking

Now that we have finished building a very basic website, we can add a lot of cool things to it!

Here are some things you can try to add:

1. Try to add [colour picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color), so that user can change topText/bottomText colour.
2. Add a drag and drop feature, using the [HTML5 Drag and Drop API](https://web.dev/drag-and-drop/).
3. Make a [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) to create a nice layout.
4. Use an API to fetch meme-templates, like the one provided by [ImgFlip](https://imgflip.com/api).
5. Add Share and Download buttons, to share your super awesome meme!

## Part 5: The End

If you haven't created an account on [repl.it](https://repl.it), make sure you do so to save this wonderful piece of creation!

If you still face difficulties in signing up watch [this](https://www.youtube.com/watch?v=Mtqp4CUepk0).

### Some More Examples

* [Ninivert](https://codepen.io/ninivert/pen/BpLKRx)
* [Vox Media's Meme Generator](https://github.com/voxmedia/meme)
* [Salt Bay Meme Generator](https://codepen.io/yelly/pen/demrxp)

### What Other Hack Club Hackers Made

* [Sam Poder](https://beautiful-languid-passive.glitch.me/) used the Unsplash API to get an image based on the Bottom Text!
* [Khushraj Rathod](https://repl.it/@aaryanporwal/MemeGenie#index.html) built a meme generator that uses the ImgFlip API to fetch random meme templates!

### Part 6: Sharing with the Community

![Doge getting appreciation](https://cloud-jhccbrn2s.vercel.app/0tenor.gif)

Now that you have finished building a website, you should share your beautiful creation—because your site is on the internet, you can share it with anyone who is also online! Remember, it's as easy as giving them your URL!

You probably know the best ways to get in touch with your friends and family, but if you want to share your project with the world wide Hack Club community there is no better place to do that than on Slack.

In a new tab, open and follow [these](https://slack.hackclub.com/) directions to sign-up for our Slack.
Then, post the link to the `#ship` channel to share it with everyone!
