---
name: 'BitEx'
description: 'Build a simple chrome extension which tracks Bitcoin prices.'
author: '@faisalsayed10'
---

# BitEx

Today we'll be building a simple chrome extension which will track live Bitcoin prices!

Here's how it will look like:

![Demo of how our extension will look like](https://cloud-cf7gkmekh.vercel.app/0image.png)

Here's the [source code](https://repl.it/@FaisalSayed1/BitEx).

## Part 1: Prerequisites

There isn't any, but it will be good if you already have a beginner understanding of:

- HTML
- CSS
- JavaScript

 If you're having trouble, feel free to ask [me](https://app.slack.com/client/T0266FRGM/user_profile/U014ND5P1N2) or anyone in the [Hack Club Slack](https://hackclub.com/slack/)!

## Part 2: Setup

For writing our code, we'll be using [Repl.it](codesandbox.io) but later, we'll need to download it inorder to test our extension.

To get started, go to this HTML [starter code](https://repl.it/languages/html).

## Part 3: Building the project

### 1) The Manifest

If there is something which is really important for any chrome extension, then it is the `manifest.json` file. Without it, we can't create any extensions. So let's first create our `manifest.json` file!

First, click on `'Add file'`.

![visual guide to creating manifest](https://cloud-7l16l8dgo.vercel.app/0image.png)

Then, name your file as `manifest.json`.

Let's now start writing the json. First, we need to create an empty object (`{}`). Then, inside that, we'll first create a `name` key, then the `manifest_version` and so on.

```json
{
  "name": "BitEx",
  "manifest_version": 2,
  "version": "1.0",
  "description": "Chrome Extension which tracks Bitcoin prices",
  "browser_action": {
    "default_name": "BitEx",
    "default_icon": "icon.png",
    "default_popup": "index.html"
  },
  "permissions": []
}
```

Explanation: The `manifest_version` will be 2 according to chrome's documentation as `manifest_version` 1 was also deprecated in Chrome 18. The `version` is your extension's version. If you roll out updates to your extension, the version number increases.

Now, we are going to put our extension's icon in the main Google Chrome toolbar and also have a popup UI for our extension, therefore we will use the `browser_action`.

If you want to create an icon that isn't always visible, use a `page action` instead of a `browser action`.

Next, the `browser_action` will need the `default_name`, `default_icon` and the `default_popup` values for our extension to work. (Although these values are optional but for our case, we need them.)

**NOTE:** You can download the icon which I used [here](https://cloud-ixdoyae2t.vercel.app/0image.png).

We don't need any permissions for our extension so we'll keep it as empty.

And with this, we finish building our manifest!

### 2) HTML

Let's start building the UI for our extension. Building an extension's UI is no different than building a website! So let's start writing the HTML!

```html
<body>
  <div>
    <h1 class="title">Bitcoin Price Tracker</h1>
    <img src="./bitcoin.png" alt="bitcoin logo">
    <div class="bitcoin">Loading...</div>
  </div>
  <script src="index.js"></script>
</body>
```

**NOTE:** Download `bitcoin.png` from [here](https://cloud-94v45750t.vercel.app/0image.png) and simply drag and drop it into your repl!

![demo on how to drag and drop files in repl.it](https://cloud-hv94fl1nv.vercel.app/01.gif)

We simply create a `div` element containing a heading, an image and also another `div` which will display `Loading...` for now.

You should see something like this in your preview window:

![Demo of the code written so far](https://cloud-gxzis4tsg.vercel.app/0image.png)

What mess have we created! It definitely needs some styles! Let's add CSS in the next section!

### 3) CSS

Let's start by importing a few fonts, then adding styles to each elements!

```css
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');

body {
  min-width: 450px;
  background-color: #f4f4f4ee;
  color: #0e0e0e;
  text-align: center;
}

h1 {
  font-family: 'Sansita Swashed', cursive;
  font-size: 28px;
  letter-spacing: 1px;
}

img {
  display: block;
  margin: 0 auto;
  width: 76px;
}
```

Explanation: First, we import two fonts namely, `Sansita Swashed` and `Merriweather` from fonts.google.com. Then, the HTML `body` has a minimum width of 450px, a background color, a text color and all the text is aligned to `center`.

Similarly, the heading tag uses the font family `Sansita Swashed` and has a font size of 28px. There is also a letter spacing set to 1px.

The bitcoin logo image is set to `display: block` so that we can align it to center using `margin: 0 auto`. As it was a very large image, we also set its width to 76 pixels.

Let's also set some styles to the `<p>` tag with the class of `bitcoin`

```css
.bitcoin {
  font-family: 'Merriweather', serif;
  font-size: 22px;
}
```

Here, we simply set its font family to `Merriweather` and its font size is set to 22px.

Yay! Now we have a far better UI compared to what we had earlier!

![live demo of code written so far](https://cloud-ljmv9ffqq.vercel.app/0image.png)

### 4) JavaScript

Now it's time to fetch the realtime Bitcoin prices and actually show it on the browser screen instead of `Loading...`.

