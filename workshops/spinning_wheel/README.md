---
name: 'Spin The Wheel'
description: 'Build a random picker spinning wheel by HTML, CSS and JavaScript'
author: '@HariOm987'
img: https://cloud-gvkfrv1qw.vercel.app/0image.png
---
You must have seen the spinning wheel by which we can select the random option, like a fortune wheel or a lucky draw. But have you ever wondered how to make your wheel yourself? If you think that it's very tough then I am sorry, you are wrong. Just follow this workshop and you will have your customized spinning wheel in the next 20 minutes. You will surely accomplish this project with the help of this workshop but even if you are stuck at any point then instead of doing this 👇

![person stuck in the problem GIF](https://cloud-b323sylf5.vercel.app/01439996693_lolwutaaa.gif)

Just join [Hack Club Slack](https://hackclub.com/slack/) and ask your doubt in #code channel. There are thousands of high school students who can help you out. 😇

Here's the [live demo](https://movie-selector.hariom04.repl.co/) and [final code](https://repl.it/@hariom04/movie-selector#index.html).

![Final Output of our Workshop](https://cloud-4945tg5q1.vercel.app/0final.png)

^^^ If you will follow this workshop strictly then you will make something like the above picture, but feel free to add up your imaginations with patterns and colors and you will end up with something better than this. So let's begin. 😁✨

# Part 1 : Prerequisites
* Account of Repl.it
* Basic knowledge of HTML, CSS and JavaScript would be helpful but is not necessary to continue further.
# Part 2 : Setup
## Setting up your code environment
We can use any code editor but keeping accessibility in our mind, we will be using Repl.it. It is an online code editor that is easy to use and can directly put your website in the real world.

You can get start with it by just clicking [here](https://repl.it/languages/html). By this, you will directly land on the page where we can write our code.

![Default Code](https://cloud-2un6g11k6.vercel.app/0default-file.png)

Right now your page will look like this.
# Part 3: Inspecting The Default Files 
Here on the right side in the FILES section, you can see 3 files that are:
1. index.html
2. script.js
3. style.css.
Now let’s take a look at those and try to understand it individually.
## 1)	The HTML file
HTML gives the structure to our webpage. Here in the first line, we have `<!DOCTYPE html>` which is used for specifying the version of HTML the document is using. Next, we have the `<title>` tag which specifies the title of our webpage that will be shown on the tab bar. Then we have <body> tag which contains the main visible part of our web page. Make sure that all the code you write are included between the opening and closing tags. ( `<body></body>` )
  
  Make sure to remove line 5 (`<meta name="viewport" content="width=device-width">`) which may cause some weird responsiveness issues for our workshop.
  
  ![Removing the fifth line](https://cloud-2un6g11k6.vercel.app/2html-1.gif)
  
## 2)	The CSS file
This is the style.css file in your directory. This defines the looks of our website. Whatever styles we give to our website is written in this file. If you take a look in the <head> tag in your HTML file, you will find a line of code (`<link href="style.css" rel="stylesheet" type="text/css" />`). This means that your HTML file is properly linked to your CSS file!

## 3)	The JavaScript File
This is the script.js file in your directory. It's empty for now, but we will fill it eventually through the workshop! The code written here will be responsible for the functioning of our Wheel. If you take a look in the <body> tag in your HTML file, you will find a line of code (`<script src="script.js"></script>`). This means that your HTML file is properly linked to your JavaScript file!

# Part 4: Building the Clock

## 1)	HTML

Let’s begin the coding part of our Workshop. Here we will write the HTML code required to build our wheel.
Give a division with the help of `<div>` tag inside our body tags. Now give `id="mainbox"` `class="mainbox"` in that division, by this CSS and JavaScript file can communicate for the specific division (`<div id="mainbox" class="mainbox"> </div>` should be the final product for this. 

Create another div with `id="box"` `class="box"`. Nest this inside the mainbox div by putting it in between `<div ...>` and `</div>`.
Nesting is like Russian [Matryoshka dolls](https://en.wikipedia.org/wiki/Matryoshka_doll), so take care of it.

Now nest another two divisions in `<div id="box" class="box">` with class as “box1” and “box2” respectively. Just place both of these in between that `<div ...>` and `</div>`.
Now in the `<div class="box1">` tag, use 4 span tags one by one and give the class as “span1”, “span2”, “span3”, and “span4” respectively.

      <div class="box1">
        <span class="span1"></span>
        <span class="span2"></span>
        <span class="span3"></span>
        <span class="span4"></span>
      </div>
      
Right now, your division should look something like this.
Then inside those span tags, you can write your option and put them inside (`<b> </b>`) tags to bold your font.
Now we will copy all the 4 spans and will paste it in the next division having `<div class="box2">` tag. Then just change the options of your wheel for this division.
We have created all the options, now we will just the Spin button which we saw in the center. For that just write (`<button class="spin" onclick="myfunction()">SPIN</button>`) before the ending of your last division tag. Here we have used onclick function that will be explained in JavaScript Part of our workshop.  

      <html>
        <head>
          <title>Movie Selector</title>
          <link href="style.css" rel="stylesheet" type="text/css" />
        </head>
        <body> 
        <div id="mainbox" class="mainbox">
          <div id="box" class="box">
            <div class="box1">
              <span class="span1"><b>Iron Man</b></span>
              <span class="span2"><b>7500</b></span>
              <span class="span3"><b>Bat Man</b></span>
              <span class="span4"><b>Joker</b></span>
            </div>
            <div class="box2">
              <span class="span1"><b>Shoplifters</b></span>
              <span class="span2"><b>Inception</b></span>
              <span class="span3"><b>Deadpool</b></span>
              <span class="span4"><b>Terminator</b></span>
            </div>
          </div> 
          <button class="spin" onclick="myfunction()">SPIN</button>
        </div>
        <script src="script.js"></script>
        </body>
      </html>

Your final code in the index.html should look something like this. Woot Woot! We are all done with the HTML part of our project.

## 2)	CSS
After we have done writing the HTML, you'll notice that when we click RUN, you just see a white screen with some text(options) with Spin Button. Let's now add some styles to our elements and make them look better like the way we want it to be🤩
 
Firstly, let’s go to style.css.
Now add the following code:

      *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: none;
      }

      body{
        font-family: "Open Sans";
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow: hidden;
        background: rgb(60, 60, 242);
        background: linear-gradient(90deg, rgba(60, 60, 242, 1) 0%, rgba(98, 245, 230, 1) 52%, rgba(60, 60, 242, 1) 100%);
        background-size: cover;
      }
      
### Explanation: 
3 main steps in writing CSS:
* Select the element/class/id on which you want to apply your styles.
* Open curly brackets {}.
* Start adding your styles inside the curly brackets!

In the first line, we have given the size of the box (triangles of our wheel). Then in the second- & third-line padding & margin between them is marked as zero respectively as we don’t require space between the triangles and in fourth line outline is also kept none as we don’t require border when we click on the spin button.

![spin button with border](https://cloud-migxi228s.vercel.app/0spin1.png)

^^^ If we don’t give `outline: none;` then our button will look like this after clicking.

![spin button without border](https://cloud-migxi228s.vercel.app/1spin2.png)

^^^ Whereas if we give `outline: none;` then our button will look like this (without any border) after clicking.

Now in the next block, we have `font-family: Open Sans;` this syntax is used to give the name/type of font we want to have in our block. Here we have used it in selector as body therefore it will be applied as a default font in our whole webpage.

We changed the default display `display: block` to `display: flex`.

A very good reason for this is because flex enables you to align your items perfectly to the center! And that's what we have done in the next two lines. The align-items property aligns all your children elements to center, but horizontally. The justify-content property aligns all your children elements to center, but vertically.

Next, we have the min-height property which sets a minimum height of 100vh (viewport height) to your <body>. The min-height property works together with the align-items property and helps the children to align properly at the center.

Learn more about [viewport-heights](https://www.sitepoint.com/css-viewport-units-quick-start/).
In the background section, you can use any color’s hex code, but in this workshop, I have used gradient which you may get from [CSS gradient](https://cssgradient.io/). Go on that website and make your gradient then copy the code given below and paste it in the background section. By this, your custom background will be applied.

Now add following code below the body block.

    .mainbox{
      position: relative;
      width: 500px;
      height: 500px;
    }
    .mainbox:after{
      position: absolute;
      content: '';
      width: 32px;
      height: 32px;
      background: url('arrow-left.png') no-repeat;
      background-size: 32px;
      right: -30px;
      top: 50%;
      transform: translateY(-50%);
    }
    .box{
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 50%;
      border: 10px solid #fff;
      overflow: hidden;
      transition: all ease 5s;
    }

### Explanation: 
Here first of all we have given the dimensions of the wheel in `.mainbox` block

Then in the second block that is `.mainbox:after`, we inserted the image of the arrow (make sure to change your own arrow image url with `arrow-left.png`) and gave its position that will point to the random option. 

Coming to the third block, here we have drawn the circle with a border of 10 px and a radius of 50%. The color of the circle is `#fff` which is white, you can change it if you wish. We have transition property in the last line, this will be explained in the future during this workshop.

Now add the code below:

    span{
      width: 50%;
      height: 50%;
      display: inline-block;
      position: absolute;
    }
    .span1{
      clip-path: polygon(0 92%, 100% 50%, 0 8%);
      background-color: #fffb00;
      top: 120px;
      left: 0;
    }
    .span2{
      clip-path: polygon(100% 92%, 0 50%, 100% 8%);
      background-color: #ff4fa1;
      top: 120px;
      right: 0;
    }
    .span3{
      clip-path: polygon(50% 0%, 8% 100%, 92% 100%);
      background-color: #ffaa00;
      bottom: 0;
      left: 120px;
    }
    .span4{
      clip-path: polygon(50% 100%, 92% 0, 8% 0);
      background-color: #22ff00;
      top: 0;
      left: 120px;
    }

Here we have made the triangles that are present in the circle. And for making the triangles we have used polygon(value). For getting the values we have used this [website](https://bennettfeely.com/clippy/). This website provides the shape and orientation of the polygon.

Just like that, we have replicated the span1 three more times then changed the name as span2, span3, and span4 respectively. We have also changed the value of color as we want different background colors and the polygon path is also changed as we are looking for different orientations each of the time.
![Our webpage till now will look litk this](https://cloud-pop1a9d8c.vercel.app/0webpage-till-now.png)
^^^ Right now our web page will be looking like this. Here triangle with yellow color is formed by span1 and just like that green, pink and orange are formed by span2, span3, and span4 respectively. 

But still, we have only 4 triangles, Now to get the blank space filled we can either create more triangles with the required orientation or we can simply rotate these 4 triangles and can film up space.

So add this code:

    .box1 .span3 b{
       transform: translate(-50%, -50%) rotate(-270deg);
    }
    .box1 .span1 b,
    .box2 .span1 b{
      transform: translate(-50%, -50%) rotate(185deg);
    }
    .box2 .span3 b{
      transform: translate(-50%, -50%) rotate(90deg);
    }
    .box1 .span4 b,
    .box2 .span4 b{
      transform: translate(-50%, -50%) rotate(-85deg);
    }

    span b{
      font-size: 24px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

    }

    .box2{
      width: 100%;
      height: 100%;
      transform: rotate(-135deg);
    }

Here in the first 4 blocks, we have rotated the positions of our text with the required degree and in the 5 blocks, we have fixed its position inside the triangle. Then in the sixth block, we have rotated all the triangles at -135 degrees for box2 as referred to in the HTML file.

Overall now after this, we have created our half structure of the wheel.

![Output of our code until now](https://cloud-fdorf46uu.vercel.app/0till-now.png)
^^^ Right now your webpage will look something like this but still, our SPIN button is not in its position and is not edited till now.

So let's start that by adding this code below :

    .spin{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 75px;
      height: 75px;
      border-radius: 50%;
      border: 4px solid #fff;
      background-color: #001aff;
      color: #fff;
      box-shadow: 0 5px 20px #000;
      font-weight: bold;
      font-size: 22px;
      cursor: pointer;
    }
    .spin:active{
      width: 70px;
      height: 70px;
      font-size: 20px;
    }

    .mainbox.animate:after{
      animation: animateArrow 0.7s ease infinite;
    }
    @keyframes animateArrow{
      50%{
        right: -40px;
      }
    }

Here we have pointed our CSS selector at spin as we have given the class as spin in the HTML file for the button. We have marked its position in the center in the first 4 lines than in the next remaining lines of that block, we have formed the circle and edited its properties like height, width, border, background color, shadows, font weight, font size, and lastly in the cursor property we have given the value as `pointer` by which when we will hover our cursor over that button then our cursor will turn into the pointer type.
 
In the second block of our code that is `.spin:active` , we have decreased the size of the circle and font while we press our cursor over that button to give it a realistic look.
 
In the third block, we have `.mainbox` selector (we used this earlier for the left-pointing arrow), so the properties which will be edited in this will affect that arrow. Here we have applied the animation to the arrow by which it will move front and back every 0.7 seconds till the webpage is opened and the wheel is stopped. Well, right now it will not move.

Right now our webpage will look something like this 👇
![Output of our code until now where spin button is not working](https://cloud-eybffxezw.vercel.app/0ezgif-2-520a3b0bd382.gif)

We are all done with our CSS part. But still, it is not functional as we have not added any JavaScript part yet.

## What we did so far:
* We built the structure of the clock with HTML.
* We built the display of the clock with CSS.
* Now with JavaScript, we will build the functionality of the clock.

# 3)	JavaScript 

Jump to the script.js file and let's begin to make our wheel functional.

![Simple Steps to make JavaSrcipt part simple and easy](https://cloud-1g9yuvs9a.vercel.app/0simple_understanding.gif) 
 
First of all, we will write:
    
    function myfunction(){

    }
    
Do you remember that I mentioned explaining the reason for putting `onclick=myfuntion()` later in this tutorial while we were on the HTML file? 
So this is the time for that.

Here above we have written the blank code for the `onclick` event as now we are going to nest some other code that will function when the user will click on that `SPIN` button. 

##### Simple steps with their meaning:
* Take variable `x` and give the minimum value of 1024 (`var min = 1024;`)
* Take another variable  `y` and give maximum value of 9999 (`var max = 9999;`)
* Take next variable `deg` and write this code : (`var deg = Math.floor(Math.random() * (y - x)) + x;`). This line will generate a value between minimum and maximum.
* Now find an element by element id "box" and then change its transform style at the degree which we got in  variable `deg`. 
### For curious souls:
1. Math.random() gives random number between 0 to 1.
2. Mutlipling with (max-min) aka range, will give number between 0 to (max-min) - Streaching the range
3. Adding min will bring the value to min to max. - Sliding the value
4. Math.floor()-ing the result, will give us a integer rounded off result.
Now our code will look something like this👇

```
function myfunction(){
  var min = 1024;
  var max = 9999;
  var deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById('box').style.transform = "rotate("+deg+"deg)";
}
```      

## What we did so far:
* We designed the wheel in CSS and added `SPIN` button.
* We inserted the text in the columns of wheel.
* We inserted the animation to rotate the wheel.

We have completed all the basic parts to make our project run.🥳🥳🥳

But if you wanna learn some more anazing stuff then proceed further.

Now we will make the `arrow` to move in its position after the wheel is stoped.

For this first of all we will get the element having Id `mainbox` and then store it in variable `element`. Then we will remove the animate class from that element. For that we will type : `element.classList.remove('animate');`. The classList property returns the class name(s) of an element, as a DOMTokenList object. This property is useful to add, remove and toggle CSS classes on an element. In the next lines, we have removed the animation while the wheel is rotating.

Now we will add the animation to the arrow after the 5 seconds from the time when person has clicked on `SPIN` button. For this use this code:
```
setTimeout(function(){
element.classList.add('animate');
}, 5000);
```
### Explanation:
The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds. Here we have added the animation to the arrow after 5000 mili seconds. (`1000 milisecond = 1 second`).

Overall as this is all inside the `myfunction()` block that we have used on the `SPIN` button. So this all will only work after we have clicked on the `SPIN` button.
 
Finally, We are done with our coding part in JavaScript. 

## Congratulations, Now our Wheel is fully functional.

![Congratulation for completing](https://cloud-3pw0bkofz.vercel.app/0finally_we_are_done.gif)

# Part 5 : The END
If you have not created your account on repl.it till now then I would suggest you to do to save this cool looking project.

Here are some things which you can do:

* Try changing the background gradient.
* Try adding some more options in the wheel
* Try making a game which uses wheel.
* Try by displaying the name of the option speratly  in which the pointer stops.

# Examples of other people's project.
* [Shibam](https://springgreenleadingopenlook--five-nine.repl.co/)
* [Vivek](https://lonetiredratios.hariom04.repl.co/)

If you have customized it better then please add your project too in this list by clicking below.👇


