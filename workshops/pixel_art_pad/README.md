---
name: 'Pixel Art Pad'
description: 'Build a pixel art pad using HTML and Java'
author: '@hackyguru'
img: 'https://cloud-2qbyb4hwx.vercel.app/0pixelpad.png'
---

Java has earned a bit of a negative reputation among young people. After all, many college classes and even AP Computer Science in high schools introduce beginners to the world of programming by teaching them how to write boring, outdated desktop applications using Java. But just because computer science classes teach that Java is boring doesn't mean it has to be! In this workshop, we're going to use Java as a tool for creative coding in the web by coding your own pixel art pad that you can use in a web browser!

Here's what it'll look like:

[![homepage](https://cloud-2qbyb4hwx.vercel.app/0pixelpad.png)](https://pixel-creator-2.19eucs071kumara.repl.co/)

[Live demo][final_live_demo]
<br />
[final code][final_code]

[final_live_demo]: https://pixel-creator-2.19eucs071kumara.repl.co/
[final_code]: https://repl.it/@19EUCS071KUMARA/Pixel-Art-Pad
[repl_it]: https://repl.it

## Part 1: A Disclaimer

Before we begin, an important disclaimer. Listen up, **especially if you're new to coding!**

The point of this workshop is to have a little fun with Java by making something fun in the browser with it. In order to do this, we're going to have to use Java in ways its not supposed to be used and employ some very bad practices. **You should not write websites and web apps with Java.** Developers write code for the web using another language called JavaScript, which, despite its name sounding similar to Java, *is a completely different language*. JavaScript is a scripting language intended to run in the browser and add functionality to websites; Java is a language intended for writing more complex applications, like desktop apps.

We're breaking the rules in this workshop—but breaking the rules without fully understanding them first is dangerous and can potentially be a major source of confusion in your programming journey in the future. So, if you're a beginner doing this workshop alone, I recommend first trying some other workshops that make similarly-cool projects without employing bad practices. You can see some of my favorites by clicking on the dropdown under this paragraph. If you're a club leader running this workshop for beginners, make sure you know what you're doing.

<details>

<summary> Some other great creative coding workshops: </summary>

- [Splatter Paint](https://workshops.hackclub.com/splatter_paint/)
- [Speak Colors](https://workshops.hackclub.com/speak_colors/)
- [Sound Galaxy](https://workshops.hackclub.com/sound_galaxy/)
- [Synth](https://workshops.hackclub.com/synth/)
- [Animated 3D Models](https://workshops.hackclub.com/3d_models_with_zdog/)
- [Tunes](https://workshops.hackclub.com/tunes/)

</details>

Now that that's out of the way, let's get started!

## Part 2: Prerequisites

It is recommended to have a basic understanding of:

- HTML
- Java

We will be using a library called processing.js which will help us in processing the graphics in a web canvas. All the functionalities of the pixel art pad will be written in java.

However, this workshop is beginner friendly and you can refer the [final code][final_code] to understand better.


## Part 3: Getting started

### Setting up Repl.it

We're going to be writing our code in an online code editor called [Repl.it](https://repl.it). To get started, simply go to [https://repl.it/languages/html](https://repl.it/languages/html). Your coding environment will be created in a few moments.

![Setting up repl.it](https://cloud-flfptkrmk.vercel.app/0setuprepl.gif)

Once your repl is setup, you are all set to continue!

## Part 4: Setting Up The Required Files

### 1) Deleting the files which are not required

The first file that appears soon after the repl is setup is `index.html`.

You will be able to find two other files called `style.css` and `script.js` in the files panel on the left side. Delete both the files as they are not required in this workshop.

![Deleting files](https://cloud-63ot6za6a.vercel.app/0deletingfiles.gif)

### 2) Creating the Java file

We need a java file in this project. The java file will provide functionality to the web canvas. Create a file called `index.java` by pressing the new file icon on the files pane.

![Creating index.java](https://cloud-czzce7b1v.vercel.app/0creatingjava.gif)

Finally, you will be having two files called `index.html` and `index.java`.


## Part 5: Building The Pixel Art Pad

### 1) index.html

First, let us write the required HTML code for the pixel art pad. You will be having the following code in `index.html` by default :

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

Replace the text inside the title tag to the title you want. In my case, I am replacing it with 

```html 
<title>Pixel Art Pad</title>
```

If you don't use a custom CSS, remove the following line from the code  :

```html
<link href="style.css" rel="stylesheet" type="text/css" />
```

Since we are not using JavaScript, we will also remove the following line which is inside the `<body>` tag:

```html
<script src="script.js"></script>
```
#### The canvas element
Provide `<h1>` tag for the heading. The `<canvas>` tag is used for creating a canvas.
The canvas tag is only a container for the art pad. We will be using processing.js along with Java to process the art inside the art pad.

#### Final index.html code:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Pixel Art Pad</title>
  </head>
  <body>
    <center>
    <h1>Pixel Pad</h1>
    <br>
    <canvas data-processing-sources="index.java"></canvas>
    </center>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js"></script>
  </body>
</html>
```

And that's it! We have completed writing our HTML.


### 2) index.java

#### The Tile class

The `index.java` file will contain all the functionalities required for creating the graphics inside the web canvas.
In the `index.java` file, create a class called Tile with the following code :

```java
class Tile
{
  int x, y;
  color colour;
  
  boolean spread;
  
  Tile(int x, int y, int colour)
  {
    this.x = x;
    this.y = y;
    this.colour = colour;
    
    spread = false;
  }
}
```
The tile class will need two variables x and y of the type integer, a variable for color and a boolean variable.


Now, create a function called `Display()` for displaying the tiles with the following code :

```java
void Display()
  { 
    fill(colour);
    
    if (!show) noStroke();
    else stroke(180);
    
    rect(x * 20, y * 20, 20, 20);
  }
```

Another important point to be noted is that the `Display()` function should be defined inside the Tile class.

#### Specifying the grid size

In order to specify the size of the grid, use the following code :

```java
Tile grid[][] = new Tile[25][25];
```
Here, we are initializing a square grid of 25*25 tiles. You can change it according to your convenience.

#### Specifying the colors in color palette

I love colors. In this workshop, we will be adding 9 colors for our color palette. You can modify or add more colors according to your convenience.

![A variety of colors](https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif)

Use the following code to specify the colors in the color palette :

```java
color colours[] = {
  color(165, 42, 42),
  color(255, 0, 0),
  color(255, 165, 0),
  color(255, 255, 0),
  color(0, 150, 0),
  color(0, 0, 255),
  color(255, 0, 200),
  color(100),
  color(255)
};

color selected = color(255);
boolean show = true;
```

The colors specified above are in color(R, G, B) format. You can modify them with the R, G, B properties of the color you want.


#### Function to setup the canvas

We need to write a function for setting up the canvas. Use the below code to set up the canvas :

```java
void setup()
{
  size(500, 500);
  
  for (int a = 0; a < grid.length; ++a)
  {
    for (int b = 0; b < grid[a].length; ++b)
      grid[a][b] = new Tile(a, b, color(100));
  }
}
```

In the above code, the size of the canvas is specified inside `size(500, 500);`. You can modify it according to your need.


#### Function to draw upon mouse click

We need to create a function called `draw()`. This function is used to fill a tile with the seletected color.

```java
void draw()
{ 
  for (int a = 0; a < grid.length; ++a)
  {
    for (int b = 0; b < grid[a].length; ++b)
      grid[b][a].Display();
  }
  
  if (show)
  {
    for (int a = 0; a < colours.length; ++a)
    {
      fill(colours[a]);
      stroke(0);
      ellipse(50, (a * 50) + 50, 30, 30);
    }
  }
  ```
  
After defining the `draw()` function, we will create an `if` condition to check whether the left mouse button is clicked or not. We will be traversing through the grid using two `for` loops to find which tile was clicked. Then, the selected color from the color palette is applied to the tile using `grid[b][a].color = selected;`

```java
  if (mousePressed && mouseButton == LEFT)
  {
    for (int a = 0; a < grid.length; ++a)
    {
      for (int b = 0; b < grid[a].length; ++b)
      {
        if (mouseX >= (b * 20) && mouseX <= 20 + (b * 20) && mouseY >= (a * 20) && mouseY <= 20 + (a * 20))
        {
          if (show)
          {
            for (int c = 0; c < colours.length; ++c)
            {
              if (dist(mouseX, mouseY, 50, (c * 50) + 50) <= 30)
                return;
            }
          }
          
          grid[b][a].colour = selected;
        }
      }
    }
  }
  ```
  
Next, we need to define a function called `mousePressed()`. This function colors the selected tile with the selected color from the color palette.

```
void mousePressed()
{
  if (show)
  {
    for (int a = 0; a < colours.length; ++a)
    {
      if (dist(mouseX, mouseY, 50, (a * 50) + 50) <= 30)
        selected = colours[a];
    }
  }
}
```
You can customize or create new mouse actions if you want (For example, you can try using right click to erase a color on a tile).

<details>
  
<summary>Your final code should look something like this:</summary>

```java
// Setting up Tile class
class Tile
{
  int x, y;
  color colour;
  
  boolean spread;
  
  Tile(int x, int y, int colour)
  {
    this.x = x;
    this.y = y;
    this.colour = colour;
    
    spread = false;
  }
  
  // Function to display tiles
  void Display()
  { 
    fill(colour);
    
    if (!show) noStroke();
    else stroke(180);
    
    rect(x * 20, y * 20, 20, 20);
  }
}

// Grid size
Tile grid[][] = new Tile[25][25];

// Color palette
color colours[] = {
  color(165, 42, 42),
  color(255, 0, 0),
  color(255, 165, 0),
  color(255, 255, 0),
  color(0, 150, 0),
  color(0, 0, 255),
  color(255, 0, 200),
  color(100),
  color(255)
};

color selected = color(255);
boolean show = true;

// Setting up the canvas size
void setup()
{
  size(500, 500);
  
  for (int a = 0; a < grid.length; ++a)
  {
    for (int b = 0; b < grid[a].length; ++b)
      grid[a][b] = new Tile(a, b, color(100));
  }
}

void draw()
{ 
  for (int a = 0; a < grid.length; ++a)
  {
    for (int b = 0; b < grid[a].length; ++b)
      grid[b][a].Display();
  }
  
  if (show)
  {
    for (int a = 0; a < colours.length; ++a)
    {
      fill(colours[a]);
      stroke(0);
      ellipse(50, (a * 50) + 50, 30, 30);
    }
  }
  

  // Function for painting with mouse press
  if (mousePressed && mouseButton == LEFT)
  {
    for (int a = 0; a < grid.length; ++a)
    {
      for (int b = 0; b < grid[a].length; ++b)
      {
        if (mouseX >= (b * 20) && mouseX <= 20 + (b * 20) && mouseY >= (a * 20) && mouseY <= 20 + (a * 20))
        {
          if (show)
          {
            for (int c = 0; c < colours.length; ++c)
            {
              if (dist(mouseX, mouseY, 50, (c * 50) + 50) <= 30)
                return;
            }
          }
          
          grid[b][a].colour = selected;
        }
      }
    }
  }

}
void mousePressed()
{
  if (show)
  {
    for (int a = 0; a < colours.length; ++a)
    {
      if (dist(mouseX, mouseY, 50, (a * 50) + 50) <= 30)
        selected = colours[a];
    }
  }
}
```

</details>

And finally, the coding part for both HTML and Java is done!

## Part 6: The End

You can try running the code by pressing the *'Run'* button on the top. You will see the preview of the pixel art pad in the right side pane.

![Pressing the run button](https://cloud-r25cunjgf.vercel.app/0running.gif)

Hurray! Cheers on building your own pixel art pad. You can try out new designs and pixel art with the art pad.

![Minnions celebrating](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif)

Here are some of the pixel toons I tried making with the art pad :

![Smiley Smiley](https://cloud-6s02cfez1.vercel.app/0art2.png)

![Pixel Heart](https://cloud-8mkwhm5cx.vercel.app/0art1.png)

![Pixel Tree](https://cloud-gu0flxczf.vercel.app/0art3.png)

![Pixel Hack Club Logo](https://cloud-andjr6f7f.vercel.app/0art4.png)



## What's next? 🚀

![Artist with a canvas](https://media.giphy.com/media/lp0nBuaRjcj13j3nMH/giphy.gif)

You are free to customize and contribute to the pixel pad! You can consider trying out the below if you are interested :

- Add a download button to download the pixel art as an image
- More colors or a custom color palette
- Custom CSS styles to make the color palette look more attractive
- Add a clear button to clear the drawing from the grid

I would love to hear from you and see your artworks! 🎉
