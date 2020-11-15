---
name: "Convert Text To Speech"
description: "Let's build a website to convert text to speech."
author: "@bezlin6mechminerz"
---

Ever wondered if you could get a computer to read aloud what you typed. Well, that's what we are going to do today. A simple webpage where we type something and the computer reads that aloud. Sounds complicated?! It isn't. We are going to have a lot of fun with what we will be making.

The workshop will look something like this.

![demo](https://cloud-6fps2m25z.vercel.app/0screenshot_2020-10-22_at_11.57.24_pm.png)

View a [live demo](https://vengefulenchantingworker--five-nine.repl.co/)

View the [final code](https://repl.it/repls/VengefulEnchantingWorker)

This workshop will take about 20 minutes.

## Getting started

We will be using [Repl.it.](https://repl.it) It is awesome because you can code online. Just follow this link and start coding!. Your coding environment will be ready in a few seconds!

After that create a new repl and select language HTML, CSS, JS.

![repl](https://cloud-ns067nqq8.vercel.app/0screenshot_2020-10-23_at_12.10.50_am.png)

## Let's Code!

![Coding cat](https://cloud-9jbocmbrc.vercel.app/0giphy.gif)

### Let's start with the basic HTML structure.

```html
<!doctype html>

<head>
<script src="script.js"></script>
<link rel="stylesheet" href="style.css">
</head>

<body>
</body>

</html>
```

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

We add this to make the webpage responsive.

Now let's make a div in the center of the page and let's name it center.

```html
<div class="center"></div>
```

Inside the div, we will make an input field where we will type.
And, we add a button that reads what we just typed. Let's start with the text input. To add a multi-line text input, we use the HTML tag - textarea. It lets us type over multiple lines(rows).

```html
<textarea
  class="inputfield"
  type="text"
  id="text-to-speech"
  placeholder="Enter text to play."
></textarea>
```

Here, we are giving a name to the class and specifying the input type, which here is text. We give it an id so we can get what was typed(value) later on. Also, we add a placeholder, which is a short hint about what you are supposed to do in an input field.
Now, let's make the button.

```html
<button class="button" onclick="convert()">Play</button>
```

Just like before, we named a class. We also added an onclick event, which as the name suggests is what happens when the button is clicked. We will execute a function - convert(), when the button is clicked.

Now let's define the function in script.js.

```html
  function convert() {
    const msg = document.getElementById("text-to-speech").value;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en";
    speech.text = msg;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }
```

```js
const msg = document.getElementById("text-to-speech").value;
```

Remember when we created an input field earlier. This is when we get its value and assign it to the variable msg.

In this function, we will be using the following interfaces:

SpeechSynthesis - This is the main controller interface for the speech synthesis service which controls the synthesis or creation of speech using the text provided. This interface is used to start the speech, stop the speech, pause it, and resume, along with getting the voices supported by the device.

SpeechSynthesisUtterance - This is the interface in which we create the speech or utterance using the text provided, setting a language type, volume, pitch of the voice, rate of speech, etc. Once we have created an object for this interface, we provide it to the SpeechSynthesis object's speak() method to play the speech.

window.speechSynthesis - This property of the Javascript window object is used to get the reference of the speech synthesis controller interface, on which we call the speak() method.

#### And finally, it's done

```html
<!doctype html>

<head>
 <script src="script.js"></script>
 <link rel="stylesheet" href="style.css">
 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>s

<body>
 <div class="center">
 <textarea class="inputfield" type="text" id="text-to-speech" placeholder="Enter text to play."></textarea>
 <br />
 <button class="button" onclick="convert()">Play</button>
 </div>
</body>

</html>
```

### Adding styling using CSS

Everything works now but it does look that great. How about we add some colors and make it look good.
Go to style.css and add some styles.


```css
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 200px black;
  padding: 10px;
  text-align: center;
  background-color: black;
  font-family: helvetica;
}
```
This is the div we named center and here we change its position relative to the top and left to place it in the center of the screen. We also set the fonts and background colors here.


```css
.inputfield {
  width: 500px;
  font-size: 18px;
  background-color: black;
  color: deeppink;
  border-width: 0px;
}

.inputfield:focus {
  outline: none;
}
```
CSS as you have just read is pretty easy to understand by just reading.  You can refer to the CSS documentation for more details [here](https://developer.mozilla.org/en-US/docs/Web/CSS).

Now let's style our button.
```css
.button {
  color: black;
  background-color: deeppink;
  width: 200px;
  font-size: 20px;
  border-radius: 50px;
  border-width: 0px;
  height: 40px;
}

.button:hover {
  background-color: #fff;
  color: deeppink;
}
```
### Styling done, it looks great 
```html
<style>
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 200px black;
    padding: 10px;
    text-align: center;
    background-color: black;
    font-family: helvetica;
  }

  .inputfield {
    width: 500px;
    font-size: 18px;
    background-color: black;
    color: deeppink;
    border-width: 0px;
  }

  .inputfield:focus {
    outline: none;
  }

  .button {
    color: black;
    background-color: deeppink;
    width: 200px;
    font-size: 20px;
    border-radius: 50px;
    border-width: 0px;
    height: 40px;
  }

  .button:hover {
    background-color: #fff;
    color: deeppink;
  }
</style>
```

## Final Code

```html
<!doctype html>

<head>
 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<style>
 .center {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 box-shadow: 0px 0px 200px black;
 padding: 10px;
 text-align: center;
 background-color: black;
 font-family: helvetica;
 }

 .inputfield {
 width: 500px;
 font-size: 18px;
 background-color: black;
 color: deeppink;
 border-width: 0px;
 }

 .inputfield:focus {
 outline: none;
 }

 .button {
 color: black;
 background-color: deeppink;
 width: 200px;
 font-size: 20px;
 border-radius: 50px;
 border-width: 0px;
 height: 40px;
 }

 .button:hover {
 background-color: #fff;
 color: deeppink;
 }
```
![run it](https://cloud-5m2nwfs8r.vercel.app/ezgif.com-video-to-gif-4.gif)

### Now it's your turn to hack

Now you know how to turn text to speech. You can do a lot with it. Make it read stories, recite poems, rap some songs that you wrote, send greeting.
Have fun.

### Modified by other hackers
