| Name      | Description |Author|
| :----: | :----: | :----: |
| Interactive Maps Using JS | Learn JS and HTML while making a fun interactive map | @LonaDotExe |

# Making an interactive map using Javascript 
By the end of this tutorial, you will learn to use functions and IF-ELSE statements in nothing but Vanilla JS to create some really good-looking interactive maps. This workshop will also teach you the basics of HTML and CSS. As a bonus, read till the end for a fun programming fact.

- Demo - https://interactive-maps.jeswinsunsi.repl.co/
- Final code - https://repl.it/@JeswinSunsi/Interactive-Maps#index.html
![gif demo](https://cloud-fmga8dmlt.vercel.app/gif_one.gif)
#### 1 - Prerequisites
- Basic understanding of functions 
- Amateur knowledge of HTML and CSS

In case you don't know either of those, don't worry. We'll go through each line of code in depth.

### 2 - Tools and Resources
- For this tutorial, we'll be using repl.it, an online browser-based IDE
- For editing the photos, we can use Pixlr.com or any other full fledged photo editor
- I recommend going through https://www.w3schools.com/js/js_functions.asp for further clarification with the JS part


### 3 - Designing the image 
Any suitable image will work, but I have chosen an animated isometric map. The image was of the JPG format, but I removed the background to get a png image. Then from that one image, I selected specific areas and created 5 different images, each with a different area highlighted in red.
For a visual understanding, here is the original image followed by an edited one.
![image 1](https://cloud-fyde5ir0a.vercel.app/image.png)
![image 2](https://cloud-jmd1dy3k8.vercel.app/image.png)

### 4 - Coding it up
##### The boilerplate
Head over to https://repl.it. Creating an account is of personal preference, be warned that you may lose your work if you don't have an account. Click on start coding and search for HTML, CSS, JS. Once you create a repl, you'll end up at this page.
![html boilerplate](https://cloud-5egibvgdv.vercel.app/image.png)

As you can see, repl has already created the boilerplate code for your project. Let's take a quick look. 
```<!DOCTYPE html>```  is a declaration line that means we'll be coding in HTML 5.0. Following up are the ```<html>``` and ```<head>``` tags. Our html markup will be contained inside the two ```<html>``` tags. The ```<head>``` tag is where we will put some of our specifications which we normally don't want the end-user to see. The first ```<meta>``` tag tells the browser which character set to use. Here, it is set to UTF-8. The next ```<meta>``` tag specifies the page's dimensions and scaling. There is no problem in not understanding how these tags work, as they aren't very important. ```<title>``` is something that you should probably change. It is the text that is shown on the browser tab. Here it is set to repl.it. Coming next up in the ```<head>``` tag is ```<link>```. It tells the browser to load the CSS styling from the style.css file. It also informs the browser that it a css text file.

Here the ```<head>``` tag ends, giving way to the body tag.  ```<body>``` is where we write the markup that the viewer will see. Repl.it has already created a ```<script>``` tag here that imports the JS code. Now that we have finished with understanding the boilerplate, let's start writing some of our own code.
##### The HTML Markup
[Insert static image of the website here]
As we can see from the final website image, our site will have two parts, the first part which houses the buttons, and the second part, which houses the actual map. Let's get on with writing the code for the buttons. 

We can use HTML default buttons, but they look like they should've been abandoned along with Windows 1999, so let's spice things up a little and design some buttons of our own. Above the ```<script>``` tag and below the opening ```<body>``` tag, add this.
```html
    <div class='first' style="margin-left:auto;margin-right:auto;">
      <a onmouseover="changeImage('ocean')" class="button pulse">Ocean</a>
      <a onmouseover="changeImage('beach')" class="button pulse">Beach</a>
      <a onmouseover="changeImage('roadway')" class="button pulse">Roadway</a>
      <a onmouseover="changeImage('vendors')" class="button pulse">Vendors</a>
      <a onmouseover="changeImage('residential')" class="button pulse">Residential</a>
    </div>
```
Going through the code, we find a ```<div>```. Divs are a way of grouping multiple obects into one. Divs also have various styling properties. This div has two attributes, class and style. Class is just a way to apply similar styles to multiple objects in CSS. The second attribute is style. It's a way of directly styling an element inside HTML. Margin-left and Margin-left sets the margins of the div. Here, to auto. Read more about margins at https://www.w3schools.com/css/css_margin.asp. Inside the Div, we have 5 ```<a>``` tags. We will tweak these tags to create the buttons, although some other tags can be used for this too. All these buttons share the same classes -> button & pulse. the other attribute, onmouseover, does exactly what it means. It calls a javascript function when the mouse is over that particular element. Right now if you run the markup, it'd be a total mess. So let's add the rest of it. Immediatly under the closing ```</div>``` tag, add 
```html
<img id="map" src="https://imgur.com/6MXYopz.png" onmouseover="changeImage('normal')">
```
This creates an image with the ID set as map and with its source at that specific url. The ID is basically a way of naming elements. Now when the webpage is rendered, it will probably show the buttons and the map image, but the buttons would look awful and the map would be too big. Let's fix that up.

##### The CSS Styling
Syling in CSS is pretty easy. In its most basic, it's just an element followed by curly braces. The actual styling goes inside the braces. It's like so, 
```css
elementTagName{ /* Write your styling in here */ }
```
Now other than the basic, there are some other methods too.
- ```*{}``` applies the styling to the whole document.
- ```.className{}``` applies the styling to the specific class.
- ```#idName{}``` applies the styling to the specific id.

There are also **selectors**. Using selectors, we can apply some style to an element while some condition is true. It goes like this,
```css
elementTagName:selectorName{}
```
The :hover selector applies a style to an element when the mouse hovers over it. There are several other selectors too. Now, let's add our custom CSS. Open the CSS document from the left pane and paste this to it.
```css
*{
  overflow: hidden;
  margin-top: 2px;
}
#map{
  height:500px;
  width:500px;
  margin: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.first{
  right: 80%;
  left: 20%;
  position: relative;
}
@keyframes pulse {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  33% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
.button {
  display: inline-flex;
  align-items: center;
  background: aqua;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 45px;
  padding: 0 30px;
  color: #fff;
  font-family: Lato, Arial, sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  transition: background .3s, transform .3s, box-shadow .3s;
  will-change: transform;
}
.button:hover {
  background: #ae4b67;
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
  transform: translate3d(0, -2px, 0);
  cursor: pointer;
}
.button:active {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  transform: translate3d(0, 1px, 0);
}

.pulse {
  position: relative;
}
.pulse:before, .pulse:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  opacity: 0;
  margin: auto;
}
.pulse:before {
  animation: pulse 1.5s infinite linear;
}
.pulse:after {
  animation: pulse 2s .4s infinite linear;
}
.pulse:hover:before, .pulse:hover:after {
  display: none;
}
```
You will probably recognize everything except the actual styles to be applied and @keyframes. These would be easier learnt from https://w3schools.com. Now if you run the markup, the buttons would look pretty neat and the image would've resized itself. Time to give yourself a hooray!

![hooray](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif)

##### The Javascript Part
Finally! The functionality to our interactive map. These is where we use functions. Functions are reusable blocks of code that are callable from our HTML document. There are different types of functions in javascript, here we'll be using the most basic one. A function is written like this,
```js
function myFunctionName(parameter){
      //some code here
}
```
Each function starts with the function keyword. This is followed by the function's name. After this come's the parameters. Parameters are variable values that we can use inside the function. These are specified when the function is being called. Parameters are optional. For example, here is a function that adds two numbers. It has two parameters.
```js
function addNumbers(firstNum, secondNum){
    console.log(firstNum + secondNum)
}
```
And here is a function without a parameter. It simply prints out 'hello world'.
```js
function sayHello(){
    console.log('Hello World!')
}
```
Now that you have a basic understanding of how functions work, head over into your script.js file and add this in.
```js
var map = document.getElementById('map');
function changeImage(location){
    if (location == 'ocean'){
        map.src = 'https://cloud-9p8jb8vst.vercel.app/orgocean.png';
    }
    else if (location == 'residential'){
        map.src = 'https://cloud-gga696gyn.vercel.app/orgresidential.png';
    }
    
    else if (location == 'roadway'){
        map.src = 'https://cloud-bzeicw4mm.vercel.app/orgroad.png';
    }
    
    else if (location == 'vendors'){
        map.src = "https://cloud-9ldvvvhb4.vercel.app/orgvendors.png";
    }   
    
    else if (location == 'beach'){
        map.src = 'https://cloud-3bvmpy2n1.vercel.app/orgbeach.png';
    }
    else if (location == 'normal'){
        map.src = 'https://cloud-coh6o3mhy.vercel.app/orgbg.png';
    }
}
```
This snippet declares a variable named map, which corresponds to the map element in our html file. Then it creates a function named changeImage() with the parameter 'location'. When we call this function from our html file with specific values like 'ocean' or 'residential', (These values passed into parameters are called arguments.) they call on the actual function from the JS file. Inside the function, is an IF -ELSE IF statement. It does exactly what it means. If the location argument is 'beach', set the map's src attribute to the beach highlighted image, and so on. The syntax is
```js
if (condition) {
    Do something;
}
else if (another condition) {
    Do something else;
}
else {
    Do something totally different;
}
```
### Conclusion
And just like that, you have gone through the basics of HTML/CSS and a bit of JS to create your own interactive map. Now it's up to you to add in a bit of your sparkle and tweak it.
##### Hacking it
- Try doing the same thing with another image, maybe the inside of a room, maybe a world map with hoverable buttons which highlight different countries
- Tweak the buttons and add new styles to them
- Maybe add in a bit of music? The possibilities are endless
##### Debugging
If you have followed the tutorial word by word, the end result would come out as expected. Else if you have some trouble in some part, feel free to check up n the project's final code at the repl. You can also compare your code with the final source code by visiting https://text-compare.com/.
### A fun fact
The term 'patching' and 'patches', in software development, came from the early days when punch card code was the norm. To fix an error in the punch card, developers used to patch up the hole with a fabric. 
And that's it for his workshop, Happy coding!
