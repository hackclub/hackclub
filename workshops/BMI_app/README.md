---
name: "BMI application"
description: "creating a BMI application using Repl.it"
author: "@Chrisrama"
---
Here the [live demo](https://bmi-project.glitch.me) from glitch.com
or on repl.it [here](https://repl.it/@chrisrama/BMI-Project)

Hello THere, Today WE will be making Our project using repl.it, so go over your workspace, then start a new HTML, CSS, JS repl.it projects If you would like to use another editor, like glitch you welcome to do so, as it works the same manner.
Note: Body mass index (BMI) application is a calculator that measures the body's BMI value based on the height and weight of the person, it then gives feedback based on the calculation, how you are diagnosed. This app is a project not made not criticizes anyone, as we are all different and okay the way you are.

# Creating our structure with Html

Next, we will start by working with our Html file. Now change the title tags to `BMI` or any name you prefer

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
now let go over inside the body element. Then let write a Label element and set its text to `Type your weight` then add break` <br> ` after the Label element then give it a class name `detail`:

```html

   <label class="detail">Type your weight: </label> <br>

```
Next, let create an input box that would take a person's weight using the Element ` <input> ` and give an ` id ` to " weight " then  ` name ` to "Number" and ` type ` to "text" then a the end of the tag place a break ` <Br> ` tag:

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

Let create a button that will allow us to do an action, name the button Call ` calculate BMI ` value with a ` class ` name to "calculate" and an event `onclick=` that call "calculate()" function that we will create from our javascript code:
```html

   <button class="calculate" onclick="calculate()">Calculate BMI</button><br>

```
Don't forget to add an ` <br> ` element to help us skip to the next line.

now we are going to create 4 more labels:
- A label with the text ` BMI value ` with a class name to detail,
- An empty label with the class name to "BMI value" with a ` class ` name to "digit" and an ` id ` name to "number" this would display the BMI value after calculation
- A Label with the text `Diagnosis : ` and a ` class ` name "detail",
- An empty label with the ` id ` name of "Diagnosis" would display how the person is diagnosed.
Don't forget to add a break ` <br> ` tag.

```html

     <label class="detail">BMI value: </label><br> 
     <label class="digit" id="number"></label><br>
     <label class="detail">Diagnosis: </label><br>
            <label id="diagnosis"></label><br>

```
Well done you just finished with the HTML part, just click on run, and it should be good to go.

![YOU re awesome](https://cloud-ckfhvof9q.vercel.app/0tenor__1_.gif)

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

# Step 2 let us make the page look awesome

now wait, we want our page to look cool, and clean so let's go to the CSS file style.css.
Then let change the background color, and align all the text on the Html in the center, to look cleaner. YOu can copy and paste the following code if you want to have the same color as my wich is BLue light color:

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
Finally, let change the size of our button:
CSS

   button {
  font-size: 20px;
  }
  
```
here how your final code should look like:

```css
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
![YOU rock!!!](https://cloud-m7tp7hhu7.vercel.app/0tenor.gif)

# Step 3 Give some function to your page

Remember on the button in the Html file we created an event ` onclick ` to call the function to calculate(), go over to the script.js file, and there where we are going to create this function that would calculate the person BMI value.
Now create a function name ` calculate() `:
```js

 function calculate() {
  }
  
```

Then let declare Two variables inside the function calculate one weight and the other height using ` const `(You can use ` let ` or ` var ` but I prefer        ` const ` for now) and assign it to store the text from the textbox/input.
```js
   function calculate() {
  
  const weight  = document.getElementById("weight").value;
  const height  = document.getElementById("height").value;
  }
```
Note: we use Document,getElementById("").value` to get the value that is input by the user, in this case from The Id name weight and height.

let declare a variable that stores the result after calculating the BMI and call it bmiValue. TO calculate BMI value(if you use Metric), we use the formula 
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

Then we are going to create an If and Else if statement that will find where the BMI value lies and given and display the output on the Label we left empty
this how we will give an output using the ` If ` and ` else if ` statement under  the bmiValue equation we just did:

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
- I the first If statement, We see if the bmiValue is smaller than 17, then if it is, we use Document.getElementById().innerHTML to display The bmiValue, in this case, we want to display it on the first label we left empty, remember we gave it an Id name "number", so inside the bracket we will call out the label using the Id name so we will get ```js Document.getElementById("number").innerHTML ```; now what we want to display if the bmiValue right, so we will assign it to display ```js bmiValue``` now we found a problem, if we just display this number, we will get a float number that goes like ten-digits, we then going to round it by to using the already built-in object ```js .toFixed(2)``` that round the answer by 2 decimal place.

-then the second line display on the second empty Label with the id name "Diagnosis" how the person is Diagnosed, because we want to display text we let place our text under a double quotation mark in this case "You are very under Weight".

- we then use the ` else If ` statement to continue with our verification if the first ` If ` statement is Not meant, now this Else if statement first checks if the bmiValue is bigger than 17, and smaller than 18.5,(we use ` && ` as an And operator) then it displays the bmiValue as we round it off by 2 decimal places and display the statement how the person is diagnosed in this Case "You are Under weight".

-so this process is repeated until the last ` else if ` statement where we just see if the bmiValue is bigger than 40 only.

- In the end, if the bmiValue does not meet all this condition we then display only "Invalid input!" to tell the user that they have given a wrong input, this could be a letter or any other character. Now why we have this statement, Is to make sure our program does not crush when invalid input is given.

In the end you will end up with the following code:

```js
  const weight  = document.getElementById("weight").value;
  const height  = document.getElementById("height").value;
   const bmiValue = weight/(height * height);

  
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
Well done, you just made your own BMI App.Congrats!!!

![congrats well done!!](https://cloud-h3inwpl40.vercel.app/0179249ffb72b03093a6d0fe6ada397c8.gif)

# Challenge 

- TRY to add another text box/input and a label that the user can input their name then next two their BMI value and the label; the name should be added on the label not just display it as different people can place their name. 

- See if you can display different Background color base on the output, example if the person is Underweight make the background to orange....etc


- Create a function that determines if the person has would like to have for example have a normal weight, the function should find how much weight the person should lose or gain to have a normal weight base on the bmiValue. In short base on the person's height, try to determine how much weight will the person needs to have/lose in other to have a BMI value between 18.5 and 23.9 which indicate that there has a normal weight.


