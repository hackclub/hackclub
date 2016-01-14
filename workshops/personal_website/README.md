# Personal Website

In this workshop, you will learn how to make your own website from scratch.

My name is Drake, and today we'll start by building my own personal website together. Afterwards, you'll modify it to make it your own website!

Here is the final product:

![](http://placehold.it/200?text=Preview)

> Open the [live demo](#TODO).
>
> View [the code](#TODO).

## Part I: Setup Your Tools

### GitHub

- What is GitHub?
- What are we using GitHub for?
- Let's setup your GitHub account.
- Write down your email, username, and password somewhere you won't forget
  (you'll need it later in this tutorial and later in the semester).

### Cloud9

- What is Cloud9?
- What are we using Cloud9 for?
- Let's create a Cloud9 Account.
- Write down your email, and password somewhere you won't forget.
(you'll be using it for the rest of the semester).
- Let's create and setup a Cloud9 workspace.

## Part II: HTML

- What is HTML?
- What are we using HTML for?

### Step 1: Create a folder for your personal website

- For every project we create in Cloud9 we create a folder

### Step 2: Creating your HTML file

### Step 3: Add the standard HTML template

- Let's paste the below code

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>

    </body>
</html>
```

- Every website has the above format
- You put your code in the body

### Step 4: Add Content To The Body

- Let's type the following.
- Mention copying and pasting vs re-typing

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
      I am Drake
      Hotlines, gotta catch them all!
    </body>
</html>
```

### Step 5: Formatting the Heading

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
      <h1>I am Drake</h1>
      Hotlines, gotta catch them all!
    </body>
</html>
```

- Opening and closing tags

### Step 6: Formatting the Paragraph

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
      <h1>I am Drake</h1>
      <p>Hotlines, gotta catch them all!</p>
    </body>
</html>
```

### Step 7: Adding an Image

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
      <img src="http://surrogate.hackedu.us/i.imgur.com/S06cY9j.gif">
      <h1>I am Drake</h1>
      <p>Hotlines, gotta catch them all!</p>
    </body>
</html>
```

Our image is too big. CSS to the rescue.

## Part III: CSS

- What is CSS?
- What are we going to use it for?

### Creating the CSS file

### Linking the CSS in the HTML

```html
<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <img src="http://surrogate.hackedu.us/i.imgur.com/S06cY9j.gif">
      <h1>I am Drake</h1>
      <p>Hotlines, gotta catch them all!</p>
    </body>
</html>
```

### Resizing the Image

```css
img {
    width: 200px;
}
```

### Centering the Body

```css
img {
    width: 200px;
}

body {
    text-align: center;
}
```

### Changing the Font

```css
img {
    width: 200px;
}

body {
    text-align: center;
    font-family: Arial;
}
```

## Part IV: Deployment

### Getting the URL of your website

- Click on the green button with the arrow.
- Copy and past the URL

### Changing the Title

```html
<!DOCTYPE html>
<html>
    <head>
      <title>I am Drake</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <img src="http://surrogate.hackedu.us/i.imgur.com/S06cY9j.gif">
      <h1>I am Drake</h1>
      <p>Hotlines, gotta catch them all!</p>
    </body>
</html>
```

## Part V: GitHub Pages

- What is GitHub pages?
- What are we going to use it for?
- Let's create a repository named `username.github.io`
- Let's run these git commands to create a repository

## Part VI: Make It Your Own!

## HTML Documentation
