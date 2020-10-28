---
name: "BMI application"
description: "creating a BMI application using Repl.it"
author: "@Chrisrama"
---
Here the [live demo](https://bmi-project.glitch.me) from glitch.com
or on repl.it [here](https://repl.it/@chrisrama/BMI-Project)

Hello THere,Today WE will be making Our project using repl.it, so go over your workspace, then start a new HTML,CSS,JS repl. If you would like to use other editor, like glitch you welcome to do so, as it work the same manner.
Note: Body mass index (BMI) application is a calculator that measures the body's BMI value based on the height and weight of the person, it then give feedback base on the calculation, how your are diagnosised. This app is project not made not critisizes anyone, as we are all differnt and okay the way you are.

# Creating our structure with Html

Next, we will start of by working with our Html file. Now change the title tags to `BMI` or any name you prefare

```html

 <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>BMI</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  
```
now let go over inside the the body element.Then let write an Label element and set it text to `Type your weight` then add break` <br> ` after the Label element then give it a class name `detail`:

```html

   <label class="detail">Type your weight: </label> <br>

```
Next let create an input box that would take person's weight using the Element ` <input> ` and give an ` id ` to " weight " then an ` name ` to "Number" and ` type ` to "text" then a the end of the tag place a break ` <Br> ` tag:

```html

   <input id="weight" name="name" type="text"/><br>

```
Now let create another Label just like the first one but with a text ` Type your height ` and the same ` class ` as the first label:

```html

   <label class="detail">Type your Height: </label><br> 

```
let again create another text box same as the one we did,but with an ` id ` name to "height":
```html
  <input id="height" name="name" type="text"/><br>
```

Let create a button that will allow us to do an action, name the button Call ` calculate BMI ` value with an ` class ` name to "calculate" and an event `onclick=` that call "callulate()" function that we will create from our javascript code:
```html

   <button class="calculate" onclick="calculate()">Calculate BMI</button><br>

```
Don't forget to add an ` <br> ` element to help us skip to the next line.

now we are going to create 4 more label:
- A label with the text ` BMI value ` with an class name to detail,
- An empty label with the class name to "BMI value" with a ` class ` name to "digit" and a ` id ` name to "number" this would display the BMI value after calculation
- A Label with the text `Diagnosis : ` and a ` class ` name "detail",
- An empty label with the ` id ` name of "Diagnosis" this would dislay how the person is diagnosised.
Don't forget to add an break ` <br> ` tag.

```html

     <label class="detail">BMI value: </label><br> 
     <label class="digit" id="number"></label><br>
     <label class="detail">Diagnosis: </label><br>
            <label id="diagnosis"></label><br>

```
Well done you just finished with the HTML part, just click on run, and it should be good to go.
![YOU re awesome]()
YOur final code should look like this
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>BMI</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <script src="script.js"></script>
   
       <label class="detail">Type your weight: </label><br> 
         <input id="weight" name="name" type="text"/><br>
       <label class="detail">Type your Height: </label><br>  
         <input id="height" name="name" type="text"/><br>
            <button class="calculate" onclick="calculate()">Calculate BMI</button><br>
       <label class="detail">BMI value: </label><br> 
       <label class="digit" id="number"></label><br>
       <label class="detail">Diagnosis: </label><br>
             <label id="diagnosis"></label>
         
  </body>
</html>
```

# Step 2 let make make the page look awesome

now wait, we want our page to look cool,and clean so let go to the CSS file style.css.
Then let change the background color, and align all the text on the html in the center, to look more clean. YOu can copy and paste the following code if you want to have the same color as my wich is BLue light colour:

```CSS

  html {
  background-color: rgb(43, 225, 231);
  text-align: center;
  }
  
```
then let change the font size, font weight and color of all our label, which we grouped it under the ` class ` "detail":

```CSS

  .detail {
     font-size : 20px;
     font-weight: 800;
     color: #e2381a;
  }
```
let change the text box or input box's sizes:

```CSS

    input {
       width: 80px;
       height: 20px;
    }  
    
```
Finally let change the size of our button:
```css

   button {
  font-size: 20px;
  }
  
```
here howyou final code should look like:
```CSS
  html {
    background-color: rgb(43, 225, 231);
    text-align: center;
  }

 .detail {
    font-size : 20px;
    font-weight: 800;
    color: #e2381a;
 }

 input {
   width: 80px;
   height: 20px;

 }

 button {
   font-size: 20px;
 }
```
YOU rock, run Your app and see How cool it look now😎
![YOU rock!!!]()

# Step 3 Give some function to your page

Remember on the button in the html file we created an event ` onclik ` to call the function calculate(),go over to the script.js file and there where we are going create this function that would calculate the person BMI value.
Now create a function name ` calculate() `:
```js

 function calculate() {
  }
  
```

THen let declare Two variable in side the function calculate one myWeight and the other myHeight using ` const `(You can use ` let ` or ` var ` but I prefer        ` const ` for now) and assign it to store text from the textbox/input.
```js
   function calculate() {
  
  const myWeight  = document.getElementById("weight").value;
  const myHeight  = document.getElementById("height").value;
  }
```
NOte:e
let declare a variable that store the the result after calculatig the BMI and call it bmiVAlue. TO calculate BMI value(if you use Metric), we use the formula 
``` 
  Weight(in kg) /[height(in m) x Height(in m)]
```
if you use use imperial the the formula is:
```
    703 x weight(in lb)/[height(in inches) x height(in inches)] 
    or 
    4.88 x weight(in lb)/[height (in feet) x height(in feet)]
```js
  function calculate() {
  
  const weight  = document.getElementById("weight").value;
  const height  = document.getElementById("height").value;
  const bmiValue = weight / ( height * height);
  }
```
or if you use imperial 
```js
  const bmiValue = 703 * weight / (height * height);
  or
  const bmiValue = 4.88 * weight / ( height * height);
```

Then we are going to create an If and Else if staement that will find where the BMI value lies and given and display the output on the Label we left empty
this how how we will give an output using ` If ` and ` else if ` statement under  the bmiValue equation we just did:

```js

  if (bmiValue < 17) {
  document.getElementById("number").innerHTML = bmiValue.tofix(2);
  document.getElementById("diagnosis").innerHTML = "You are very under weight";
  }
  else if (bmiValue > 17 && bmiValue < 18.5) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You are under weight";

  }
  else if (bmiValue > 18.5 && bmiValue < 24.9) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You have normal Weight";

  }
  else if (bmiValue > 25 && bmiValue < 29.9) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You are Over weight";

  }
  else if (bmiValue > 30 && bmiValue < 34.9) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You have obesity 1";

  }
  else if (bmiValue > 35 && bmiValue < 39.9) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You have obesity 2 (severe)";

  }
  else if (bmiValue > 40) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You are have obesity 3(morbid)";
  
  }
  else {
  document.getElementById("diagnosis").innerHTML = "Invalid Input!";
  
  }
```
Now before you copy the ode, let me explain what it does:
- I the first If statement,We see if the bmi is smaller than 17, then if it is, we use Document.getElementById().innerHTML to display The bmiValue,in this case we want to display it on the first label we left empty, remember we gave it an Id name "number", so inside the bracket we will call out the label using the Id name so we will get ```js Document.getElementById("number").innerHTML ```; now what we want o dsiplay if the bmiValue right, so we will assign it to display ```js bmiValue``` now we found a problem, if we just diplay this numer, we will get a float number that go like ten digit, we then going to round it by to using the already build in obejct ```js .toFixed(2)``` that round the answer by 2 decimal place.

-then the second line diplay on the second empty Label with the id name "Diagnosis" how the person is Diagnosised, beacuse we want to display text we let place our text under a double qoutation mark in this case "You are very under Weight".

- we then use the ` else If ` statement to continue with our verification if the first ` If ` saement is Not meant, now this Else if stament first check if the bmiValue is bigger than 17, and smaller than 18.5,(we use ` && ` as an And operator) then it diplay the bmiValue as we round it off by 2 decimal places and display the statement how the person is diagnosis in this Case "You are Under weight".

-so this process is repeated until to the last ` else if ` statement where we just see if the bmi value is bigger than 40 only.

- At the end if the bmiValue does not meet all this cindition we than display only "Invalid input!" to tell the user that they have given a wrong input, this could be a letter or any other charater. Now why we have this statement, Is to make sure our program does not crush when an invalid input is given.

In the end you will end up with the following code:

```js
  const myWeight  = document.getElementById("weight").value;
  const myHeight  = document.getElementById("height").value;
   const bmiValue = myWeight/(myHeight*myHeight);

  
  if (bmiValue < 17) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You are very under weight";
  }
  else if (bmiValue > 17 && bmiValue < 18.5) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You are under weight";

  }
  else if (bmiValue > 18.5 && bmiValue < 25) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You have normal Weight";

  }
  else if (bmiValue > 25 && bmiValue < 30) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You are Over weight";

  }
  else if (bmiValue > 30 && bmiValue < 35) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You have obesity 1";

  }
  else if (bmiValue > 35 && bmiValue < 40) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "Yu have obesity 2 (severe)";

  }
  else if (bmiValue > 40) {
  document.getElementById("number").innerHTML = bmiValue.toFixed(2);
  document.getElementById("diagnosis").innerHTML = "You are have obesity 3(morbid)";

  }
  else {
  document.getElementById("diagnosis").innerHTML = "Invalid Input";
  
  }
  
}
```

# Well Done!!!!!
WEll done, you just made you own BMI App.Congrats!!!
![congrats well done!!]()

# Challenge 

-TRY to add another text box/input and a label that the user can input their name then next two their BMI value and the label; the name should be added on the label not just display it as differnt people can place their name. 

-See if you can display different Background colour base base on the output, example if the person is Under weight make the background to orange....etc


-


