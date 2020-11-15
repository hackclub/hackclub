---
name: "Image Filters"
description: "Let's add filters to images using CSS."
author: "@bezlin6mechminerz"
---

All of us try out filters when we take a selfie. Ever wondered how those work? That's what we are going to do today. We will use CSS for adding different kinds of filters to an image.

The workshop will look something like this.

![Output video](https://cloud-ftlom58ja.vercel.app/0ezgif.com-gif-maker__2_.gif)

View a [live demo](https://image-filter.bezlin.repl.co/)

View the [final code](https://repl.it/@bezlin/image-filter#index.html)

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
    <link rel="stylesheet" href="./style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>
</body>

</html>
```

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

We add this to make the webpage responsive.

Now we'll make an input button that will switch on/off the filter that we make and add a label to it.

```html
<input type="checkbox" id="togglebtn1" />
<label for="togglebtn1" id="filter1">B&W</label>
```

We made the input of type checkbox and made a label for it. A label is a connection to what it was made for, that is, here, for input. This will act as a toggle for a filter.

Let's just make two more toggles.

```html
<input type="checkbox" id="togglebtn1" />
<label for="togglebtn1" id="filter1">B&W</label>
<input type="checkbox" id="togglebtn2" />
<label for="togglebtn2" id="filter2">contrast</label>
<input type="checkbox" id="togglebtn3" />
<label for="togglebtn3" id="filter3">Bria</label>
```

Let's just give a title using a heading tag.

```html
<div class="title">
  <h1>Image Filter</h1>
</div>
```

Now we create an input field that will accept a URL to an image. We add a placeholder saying "Image URL" to just help the users out. Also, we add an event to the keypress. When a key is pressed, we will call the function imageSubmit(). We will define that later.

```html
<input id="imageURL" placeholder="Image URL" onkeypress="imageSubmit(event)" />
```

We use an img tag to display the image that the user will be giving. We also have a default one so we can just test the filter out.

```html
<div id="imgView">
  <img
    id="imgprev"
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tNQcCZ1dW36Ee1xzTJ17AwHaEK%26pid%3DApi&f=1"
    alt="Image Not Found"
  />
</div>
```

That's it.
Now, the HTML file will look like this

```html
<!DOCTYPE html>

<head>
  <title>Image Filters</title>
  <script src="./script.js"></script>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <input type="checkbox" id="togglebtn1" />
  <label for="togglebtn1" id="filter1">B&W</label>
  <input type="checkbox" id="togglebtn2" />
  <label for="togglebtn2" id="filter2">contrast</label>
  <input type="checkbox" id="togglebtn3" />
  <label for="togglebtn3" id="filter3">Bria</label>
  <div class="title"><h1>Image Filter</h1></div>
  <input
    id="imageURL"
    placeholder="Image URL"
    onkeypress="imageSubmit(event)"
  />
  <div id="imgView">
    <img
      id="imgprev"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tNQcCZ1dW36Ee1xzTJ17AwHaEK%26pid%3DApi&f=1"
      alt="Image Not Found"
    />
  </div>
</body>
```

### Time for some JavsScript

```javascript
function imageSubmit(event) {
  if (event.keyCode == 13) {
    var imgUrl = document.getElementById("imageURL").value;
    document.getElementById("imageURL").value = "";
    document.getElementById("imgprev").src = imgUrl;
  }
}
```

Remember calling a function earlier inside the input tag. We will be defining it in the js file. The keypress event is passed to the function. We check if the keycode of the event, in simpler terms, which key was pressed was the enter key(keyCode- 13). This means the user gave an URL and has submitted it. We get the URL from the input tag and assign it to the variable imgURL. We, then go and clear the input field. And, finally, we go and change the src attribute of the img tag to the new URL provided by the user.
Was short, right?...

### Let style it with CSS

```css
body {
  background-color: rgba(128, 128, 128, 0.774);
}
.title {
  width: 100%;
  background: #136a8ac2;
  color: white;
  box-shadow: 0 0 10px 2px black;
  left: 0;
  top: 0;
  position: absolute;
}
#imageURL {
  position: absolute;
  margin-top: 35%;
  left: 40%;
  width: 30%;
  border: 1px solid grey;
  outline: none;
}
img {
  margin-top: 10%;
  left: 30%;
  position: relative;
  border-radius: 16px;
  max-width: 500px;
  box-shadow: inset 0 0 10px 5px black;
}
img:hover {
  box-shadow: 0 0 20px 5px black;
}
#filter1 {
  position: absolute;
  top: 60%;
  left: 20%;
  background: grey;
  border: none;
  border-radius: 5px;
  width: 10%;
  text-align: center;
  height: 3%;
  user-select: none;
}
#filter2 {
  position: absolute;
  top: 60%;
  left: 35%;
  background: grey;
  border: none;
  border-radius: 5px;
  width: 10%;
  text-align: center;
  height: 3%;
  user-select: none;
}
#filter3 {
  position: absolute;
  top: 60%;
  left: 50%;
  background: grey;
  border: none;
  border-radius: 5px;
  width: 10%;
  text-align: center;
  height: 3%;
  user-select: none;
}
#filter1:hover {
  box-shadow: 0 0 10px 2px black;
}
#filter2:hover {
  box-shadow: 0 0 10px 2px black;
}
#filter3:hover {
  box-shadow: 0 0 10px 2px black;
}
```

All we are doing above is arranging the different elements, adding colors, and adjusting their heights and widths.

CSS as you have just read is pretty easy to understand by just reading. You can refer to the CSS documentation for more details [here](https://developer.mozilla.org/en-US/docs/Web/CSS).

```css
#togglebtn1 {
  display: none;
}
```

Remember the toggles we created. We will now hide them the only way we can interact with them is using the labels. For that, we set their display to none.

```css
#togglebtn2 {
  display: none;
}
#togglebtn3 {
  display: none;
}
```

## Now let's see how we add filters

```css
#togglebtn1:checked ~ #imgView {
  filter: saturate(0%);
}
```

You might have noticed the ~(tilde). It applies the style to all elements matching the second selector if they appear after the elements matching the first selector. This means when the toggle button is checked, the style(our filter) will be applied to the image.

The filter tag specifies how we filter the image. You can customize any way you want and combine multiple filters.
[You can find more about filters here](https://www.w3schools.com/CSSref/css3_pr_filter.asp)

```css
#togglebtn1:checked ~ #filter1 {
  background: rgba(0, 0, 255, 0.493);
}
```

Remember that filter1 was the label for togglebtn1. So here, what we do is that, when a toggle is checked, we change its background color.

Now let's make some for filters.

```css
#togglebtn2:checked ~ #imgView {
  filter: contrast(170%);
}
#togglebtn2:checked ~ #filter2 {
  background: green;
}
#togglebtn3:checked ~ #imgView {
  filter: brightness(150%);
  filter: sepia(30%);
}
#togglebtn3:checked ~ #filter3 {
  background: rgba(255, 0, 0, 0.925);
}
```

### And we are done

```css
body {
  background-color: rgba(128, 128, 128, 0.774);
  text-align: center;
}
.title {
  width: 100%;
  background: #136a8ac2;
  color: white;
  box-shadow: 0 0 10px 2px black;
  left: 0;
  top: 0;
  position: absolute;
}
#imageURL {
  width: 30%;
  border: 1px solid grey;
  outline: none;
}
img {
  margin-top: 100px;
  border-radius: 16px;
  max-width: 500px;
  box-shadow: inset 0 0 10px 5px black;
}
img:hover {
  box-shadow: 0 0 20px 5px black;
}
#togglebtn1 {
  display: none;
}
#togglebtn2 {
  display: none;
}
#togglebtn3 {
  display: none;
}
#filter1 {
  position: absolute;
  top: 450px;
  left: 20%;
  background: grey;
  border: none;
  border-radius: 5px;
  width: 10%;
  text-align: center;
  height: 3%;
  user-select: none;
}
#filter2 {
  position: absolute;
  top: 450px;
  left: 50%;
  transform: translate(-50%, 0%);
  background: grey;
  border: none;
  border-radius: 5px;
  width: 10%;
  text-align: center;
  height: 3%;
  user-select: none;
}
#filter3 {
  position: absolute;
  top: 450px;
  right: 20%;
  background: grey;
  border: none;
  border-radius: 5px;
  width: 10%;
  text-align: center;
  height: 3%;
  user-select: none;
}
#filter1:hover {
  box-shadow: 0 0 10px 2px black;
}
#filter2:hover {
  box-shadow: 0 0 10px 2px black;
}
#filter3:hover {
  box-shadow: 0 0 10px 2px black;
}

#togglebtn1:checked ~ #imgView {
  filter: saturate(0%);
}
#togglebtn1:checked ~ #filter1 {
  background: rgba(0, 0, 255, 0.493);
}

#togglebtn2:checked ~ #imgView {
  filter: contrast(170%);
}
#togglebtn2:checked ~ #filter2 {
  background: green;
}

#togglebtn3:checked ~ #imgView {
  filter: brightness(150%);
  filter: sepia(30%);
}
#togglebtn3:checked ~ #filter3 {
  background: rgba(255, 0, 0, 0.925);
}
```

## Now it's your turn to hack

Well, it was fun making filters, right! We just made three but you can make a lot of them, giving different values for brightness, contrast, and combining these. Make cool filters, name them whatever you want, show them off to your friends or make a large collection of filters, and edit pictures with it.
Have fun.

## Modified by other hackers.

[Joyal Thomas](https://mistyrosevaguedirectories.joyalthomas.repl.co/)

[Alfred Jophy](https://repl.it/join/rhgxnrjk-alfredevol)

[Haridev KK](https://repl.it/join/ptpfctsz-thebrosbros1)
