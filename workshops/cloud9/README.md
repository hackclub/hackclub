---
name: Cloud9
description: Introduction to using Cloud9
author: '@Bogidon'
group: retired
order: 4
---

# Cloud9 tutorial

_This workshop has been retired and is no longer maintained or recommended._

---

![Cloud9 logo](img/cloud9.png)

## What is Cloud9?

_Cloud9 is a website that lets you program online_. Traditionally, all
programming was done locally on the computer: you would save your files on your
computer and edit them on your computer (with a code editor). Cloud9 allows you
to save your files online and edit your files online (Cloud9 also has a code
editor). This means all you need to start programming is internet and a browser.
No more installing software!

**Important**: if you're having trouble, checkout the
[troubleshooting](#troubleshooting) section at the end of the workshop.

---

## Tips And Tricks

To open a link in another tab, right click on the link and select `Open In New Tab`.

## Login with GitHub

First, make sure you have a GitHub account. If you don't have one, follow the
guide
[here](https://github.com/hackclub/hackclub/tree/master/playbook/workshops/portfolio#creating-a-github-account).

Now that you have a GitHub account, you can login to Cloud9 with GitHub. Go to
https://c9.io and click on the Octocat icon in the top corner as demonstrated
below:

![](img/github-login.gif)

## Create a New Workspace

To create a new workspace you can either select the create a new workspace
option under workspaces, or click the new workspace button at the top right of
your screen.

![New workspace buttons](img/new-workspace.png)

Next set your workspace name to `html-css-javascript-basics`, and your
description to `Learning to use HTML, CSS, and JavaScript together`. Make your
workspace public, skip the _Clone from Git or Mercurial URL_ option and set your
template to `Custom`. Finally click the _Create Workspace_ button at the bottom
of your page and you should be prompted to this screen.

![](img/open-screen.gif)

## Using HTML CSS and JavaScript Together in Cloud9

First we will create a new folder. To do this right click the workspace bar on
the left and select _New Folder_. You can name this folder whatever you like.

![](img/create-folder.gif)

Next we will be creating an HTML file. To do this hit file on the top left of
your screen, hover over the _New From Template_ option, and select _HTML file_.
Now we want to save this file in the new folder we just created. To do this go
to _File_ and click _Save As_. Name your file `index.html` and save it inside
the folder you just created.

![](img/create-html.gif)

Repeat the last step twice more, except this time create a CSS file and a
JavaScript file. Name your files `style.css` and `index.js`

Now that you have your files set up lets start building. Inside your
`index.html` file in the `body` element create a button with the attribute `id`
set to `alertButton`.

```html
<button id="alertButton">Click Me!</button>
```

To preview you file right click your `index.html` file in your workspace sidebar
to the left and hit _Preview_. This will open up a new tab with the rendered
version of your HTML file.

![](img/preview.gif)

### Adding CSS to Your HTML

Next lets add some style to our button. In your `style.css` file add the
following code

```css
#alertButton {
  background: none;
  border-style: none;
  border: 2px solid black;
  padding: 10px;
  color: black;
}

#alertButton:hover {
  background-color: black;
  color: white;
}
```

#### CSS Selectors

In CSS, selectors are patterns used to select the element(s) you want to style.
If we were to do

```css
button {
  // css goes here
}
```

Our CSS would still work, however if we had multiple buttons in our HTML, all
those buttons would be styled the same because every button element in our HTML
would have the same CSS applied to it. If we want different styles for each
button, we can give each button a unique `id` attribute in HTML. Then when we
want to reference that id attribute in our CSS we can do.

```css
#idName {
  // css goes here
}
```

Another CSS selector that we encountered is the hover selector seen here.

```css
#alertButton:hover {
  background-color: black;
  color: white;
}
```

This basically says that when a mouse hovers over the HTML element with the `id`
`alertButton`, apply this CSS to that element. You read more about CSS selectors
[here](http://www.w3schools.com/cssref/css_selectors.asp).

If you look at your preview, you will notice none of the styles were applied to
your button. This is because you have to tell your HTML file where to get the
CSS from. To do this we will add this code inside the `head` element of your
HTML.

```html
<link rel="stylesheet" href="style.css" type="text/css" />
```

Basically what this does is link your HTML to your CSS. The value of your `href`
attribute should be the location of your CSS file. Since our CSS file is in the
same folder as our HTML all we have to do is set the value of `href` to the name
of our CSS file.

### Adding JavaScript to Your HTML

Next lets add some JavaScript. Inside your `index.js` file add the following
code.

```js
var button = document.getElementById('alertButton')

button.onclick = function() {
  alert('Button was pressed')
}
```

**Understanding the code**

> In our JavaScript file we start of by creating a variable called `button` and
> set it equal to the element in our HTML that has an `id` of `alertButton`.
> Next we declare that when our button is clicked, a function is run that alerts
> the user with the message "Button was pressed".

If we try testing our code, it wont work yet for the same reason our CSS didn't
work at first. We need to tell our HTML file where to get the JavaScript from.
To do this, we will add the following code to the end of the `body` element
inside our HTML.

```html
<script type="text/javascript" src="index.js"></script>
```

This links our HTML and our JavaScript together. The `src` attribute should be
set to the location of our JavaScript file. Since our JavaScript file is in the
same folder as our HTML, all we have to do is set the value of `src` to the name
of our JavaScript file.

Go ahead and test your code now.

![](img/test-code.gif)

## Troubleshooting

- **Nothing shows up**
  - Try saving the `index.html` file from `File > Save`. After that reload the
    preview.
- **CSS not applying styles to the button**
  - Make sure the `href` attribute of the `<link>` element in `index.html`
    points to a file in the same directory at as `index.html` called
    `style.css`.
  - Make sure you have a CSS file called `style.css`.
  - Make sure the `id` attribute of the `<button>` in `index.html` is the same
    as the id being selected in your `style.css` file (minus the `#`). ID's ARE
    case sensitive!
- **JavaScript is not displaying the alert**
  - Make sure the `src` attribute of the `<src>` element in `index.html` points
    to a file in the same directory at as `index.html` called `index.js`.
  - Make sure you have a JavaScript file called `index.js`.
  - Make sure the `id` attribute of the `<button>` in `index.html` is the same
    as the id being selected in the `document.getElementById` function in your
    `index.js` file (minus the `#`). ID's ARE case sensitive!

## Congratulations!

You now know how to:

- Create a new workspace in Cloud9
- Work with HTML, CSS, and JavaScript together
