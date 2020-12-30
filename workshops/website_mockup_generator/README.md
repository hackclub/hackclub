---
name: 'Website Mockup Generator'
description: 'Build a website mockup generator'
author: '@hackyguru'
img: 'https://cloud-b7njozaef.vercel.app/0websitemockupgenerator.png'
---

# Pixel Art Pad

Creating mockups for websites consume time as we need to take a screenshot manually and edit it. In this workshop, we will be making a *'Website mockup generator'* which will generate mockups in seconds!

The Website mockup generator will be looking like this (You can consider modifying the look if you wish) :

[![homepage](https://cloud-b7njozaef.vercel.app/0websitemockupgenerator.png)](https://repl.it/@19EUCS071KUMARA/Website-Mockup-Generator)

You can also take a look at the [live demo][final_live_demo] and [final code][final_code].

[final_live_demo]: https://hcworkshop.19eucs071kumara.repl.co/
[final_code]: https://repl.it/@19EUCS071KUMARA/Website-Mockup-Generator
[repl_it]: https://repl.it

## Part 1: Prerequisites

It is recommended to have a basic understanding of:

- HTML
- JavaScript
- CSS (totally optional for you to customize the look)

However, this workshop is beginner friendly and you can refer the [final code][final_code] to understand better.


## Part 2: Getting started

### Setting up Repl.it

[Repl.it](https://repl.it) is an amazing online code editor where we will be writing our code. Though repl.it is not mandatory, I strongly recommend you to use it in order to avoid installations and downloads.

To get started, create your repl by going to [https://repl.it/languages/html](https://repl.it/languages/html). Your coding environment will be created in a few moments.

![Setting up repl.it](https://cloud-flfptkrmk.vercel.app/0setuprepl.gif)

Once your repl is setup, you are all set to continue!


## Part 3: Building The Website Mockup Generator

After your repl is setup successfully, you will be able to find 3 files on the left pane :
- index.html
- script.js
- style.css

We will be working with all the three files in this workshop. So, get your hands on the keyboard for some code!

![Coding cat](https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif)

### 1) index.html

First, let us write the required HTML code for the website mockup generator. You will be having the following code in `index.html` by default :

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```
#### The site title
In the `<head>` section, Replace the text inside the title tag to the title you want. In my case, I am replacing it with 'Website Mockup Generator'.

```html 
<title>Website Mockup Generator</title>
```

#### Changing the body background color and alignment
In order to change the background color and the text alignment inside the `body`, specify a class called `body` in the body tag. We will be providing CSS stylings for the `body` class later.

```html
<body class="body">
```

#### The heading
In the `<body>` we will add a heading inside `<h1>...</h1>` tags.

```html
<h1>Website Mockup Generator</h1>
```

#### Placing a text input field
In order to place a text input field to get the website from the URL, use the following line to create a text input with a placeholder 'Enter the website' and provide id to the input as 'websiteAddress'.

```html
<input type="text" id="websiteAddress" placeholder='Enter the website'>
```

#### Placing the buttons
We need two buttons to generate the mockup and to download respectively. Use the `<button>` tag twice to place the buttons. Provide the button label in between the `<button></button>` tags. Provide the id as `submitButton` for the 'Generate mockup' button and `Download` for 'Download' button.

```html
<button type="submit" id="submitBtn" onclick='generateMockup();'>Generate Mockup</button>
<button id="Download">Download</button>
```

#### Generated mockup image
We will be using an `<img>` tag to display the generated mockup image. Provide the id as `resultImg`.

```html
<img id='resultImg'>
```


#### Final index.html code:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Website Mockup Generator</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body class="body">
    <h1>Website Mockup Generator</h1>
    <input type="text" id="websiteAdress" placeholder='Enter the website'>
    <br><br>
    <button type="submit" id="submitBtn" onclick='generateMockup();'>Generate Mockup</button>
    <button id="Download">Download</button>
    <img id='resultImg'>
    <script src="script.js"></script>
  </body>
</html>
```

And that's it! We have completed writing our HTML.


### 2) style.css

The style.css file is used to add styles to our website. We will be making the background color as red using `background-color: red;`. We will also align the text to center by `text-align: center;`.

#### Final style.css code:
```css
.body{
  background-color: red;
  text-align: center;
}
```

You can customize the styles and make it look better if you wish.

### 3) script.js

The script.js file contains the required JavaScript code. The aim of the JavaScript code is: 
- To get the website address from the text input
- Generate a mockup for the website by pressing 'Generate Mockup' button
- Display the mockup as an image
- Allow users to download the image by pressing 'Download' button

Let us implement the above steps one by one :

#### Getting the elements from HTML in JS by their Id
Firstly, we will be getting the elements from HTML into JavaSript by using their id using the following code :

```javascript
const resultImg = document.getElementById("resultImg");
const Download = document.getElementById("Download");
```

#### Defining the generateMockup() function
In order to generate the mockups, we will be defining the generateMockup() function which is called when the 'Generate Mockup' button is pressed. Create a function called generateMockup() using:

```javascript
const generateMockup = () => {
// Function definition here
}
```

Now, assign the value of `websiteAddress` to the value from the text input field using :

```javascript
const websiteAddress = document.getElementById("websiteAddress").value;
```

#### Fetching the mockup image using an API end point
Inside the generateMockup() function, use the following line of code to fetch the mockup image from the API end point :

```javascript
const mockup ="https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url="+websiteAdress;
```

The above line appends the website address entered by the user to the end point of the API to fetch the image of the required mockup. The link to the required mockup is assiged to `mockup`.

You can optionally print the URL of the mockup image using :

```javascript
console.log(mockup);
```

Your code should be similar to this as of now :

```javascript
const resultImg = document.getElementById("resultImg");
const Download = document.getElementById("Download");

const generateMockup = () => {
  const websiteAddress = document.getElementById("websiteAddress").value;
  const mockup = "https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=" +websiteAdress;
  console.log(mockup);
};
```

#### Adding the download functionality
To allow users download the mockup image by pressing the download button, include the following code inside the `generateMockup()` function.

```javascript
Download.addEventListener("click", function () {
window.open(mockup);
});
```

The above code will open the mockup image for the user to download it.

<details><summary>Your final  JavaScript code should look something like this:</summary>
  
```javascript
const resultImg = document.getElementById("resultImg");
const Download = document.getElementById("Download");


const generateMockup = () => {
  const websiteAddress = document.getElementById("websiteAddress").value;
  const mockup =
    "https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=" +
    websiteAdress;
  console.log(mockup);
  resultImg.src = mockup;

  Download.addEventListener("click", function () {
    window.open(mockup);
  });
};
```
</details>

And finally, the coding part is done!



## Part 5: The End

You can try running the code by pressing the *'Run'* button on the top. You will see the preview of the website mockup generator in the right side pane.

![Pressing the run button](https://cloud-oy8uhg1nh.vercel.app/0websitemockup.gif)

Hurray! Cheers on building your own website mockup generator.

![Man celebrating](https://media.giphy.com/media/6nuiJjOOQBBn2/giphy.gif)

Here are some of the mockups that I made :

![Mockup of my portfolio](https://cloud-39p70jl8k.vercel.app/0mockup2.png)

![Mockup of Hack Club website](https://cloud-etbe898rq.vercel.app/0mockup1.png)


## What's next? 🚀

![Thinking man](https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif)

You are free to customize and contribute to the website mockup generator! You can consider trying out the below if you are interested :

- Customize the styles with your own CSS to make the mockup generator look better
- Add watermark to the mockup
- Allow users to specify the background color to the mockup
- Add more window frames

I would love to hear from you and take a look at your own mockup generators! You can share it on the `#scrapbook` channel on Hack Club Slack or send it to me directly via DM (@Guru). Thanks and happy hacking!
