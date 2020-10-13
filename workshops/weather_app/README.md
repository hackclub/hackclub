---
name: 'Weather App'
description: 'Making a Weather App using HTML, CSS and JS(no framework involved)'
author: '@gautamjajoo'
---

# Weather App

Are you a beginner in Javascript and don't know how to start working with APIs? 

If yes, you are at the right place. Being a beginner at Js and beginning to work with APIs could be very painful.
But with a simple project we would learn some basic elements of `JS` and I am sure till the end of the workshop you will get a hang of 
how APIs work.  

In this App we would take an input of a city from the user and display the weather details(Current temp, Min/Max Temp etc) of that particular city.

Before we start building our app let's see how the final version would look like:

![main](https://cloud-ktt2vamjn.vercel.app/0screencapture-file-home-gautamjajoo-desktop-card-index-html-2020-10-09-00_34_48.png)

Isn't it amazing? Get your cup of coffee and 20 minutes of your time to build an awesome weather app. 

The [Source Code](https://github.com/gautamjajoo/BasicWeather)  &  [Demo](https://WeatherApp.gautamjajoo.repl.co) are hyperlinked here.

## 0. What could you expect till the end of the workshop?

Till the end of the workshop you could expect to have a good understanding of how to deal with APIs. You could also expand this knowledge to be
creative and implement new APIs in your projects.

Also, you would learn some nice `CSS` tricks for making beautiful card designs and basic elements/properties of `JS`.

## 1. The Prerequisites
Some basic understanding of `HTML,CSS and Javascipt/JSON` is also used for some part.

Don't be upset if you don't know any of the above, we will make sure you learn something new till the end of the workshop.

## 2. Setting up the project on Repl.it

Repl.it is an powerful online IDE(integrated development environment) where you can edit, build and collabrate to make some beautiful projects.
Make sure you have set up your account on [Repl](repl.it). Once you are finished setting up you account, create a [new repl project](https://repl.it/languages/html) with the above 
mentioned languages.

Three files each of ```HTML,CSS and JS``` would be created and name them as  `index.html`, `style.css` and `app.js` respectively.
After the above instructions your screen would look something like this:

![repl.it screen](https://cloud-o4m9cgxr8.vercel.app/0screenshot_from_2020-10-09_12-14-29.png)

Once you have finsihed setting up the files, we can now move on to write some code.

## 3. Making a skeleton of the app.

Let's start with adding some code to the `HTML` file. We start the file with some basic lines which are added in every HTML file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Weather</title>
</head>
<body>
</body>
</html>
```

Here `!DOCTYPE` is used an "information" to the browser about what document type to expect.

Now we would link the `CSS` and `JS` files to our `HTML` file. Also, we would be using `normalize.css` which is a small CSS file used for styling 
HTML elements and `moment.js`, a Javascipt library for managing dates and time.

To link the css file we add

```html
<link rel="stylesheet" href="style.css">
```
under the `head` tag and to link the JS file we add

```html
<script src="app.js"></script>
``` 
under the body tag.

To link external files like `normalize.css` and `moment.js` we use [`CDNJS`](https://cdnjs.com/) which is an open-source CDN service powered 
by Cloudflare. It makes easier to load library files on our websites.

Add 

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.0/moment.min.js"></script>
``` 
under the `head` tag.

Since, we have linked all our files with the `HTML` file now we can start making a card on which we could display the content.
Personally, I feel cards are very aesthetic form to display our content. Also, there is a lot of scope of making the cards look more better and
more catchy.

P.S: For more information about cards, one could also use `Bootstrap`, an open source `CSS` framework. 
[Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/)

Inside our `<body>` we will add a `<div>` with class as `container` which makes our main card and for the content inside we can add another
`<div>` with class as `content`.
Then add a heading using `h1` tag giving the title to the project.

To input the city from the user we use the `input` tag and declare it with class as `input` and `id` as `input`. 

Mainly `class` is used for passing information in `CSS` and `id` is used for `JS`. 
Also add a `placeholder` which is a text behind the input label that describes the expected value of input.

```html
<input id="input" class="input" placeholder="Enter the City Name">
```

Make sure you close the `div` of `content` because now we have taken the city name from the user and our only task is to display the weather 
details.

Lastly we have to add the last `div` with class as `main-weather` to display the weather details.

We will be using `<p>` for every detail we display. Hence we declare the details with the following ids

```html
<p id="date">Date </p>
<p id="city">City </p>
<p class="temp" id="temp">Temp </p>
<p id="min-max">Min and Max Temp </p>
<p id="weather-type">Sunny </p>
```

Our `HTML` code is done and now we can move to the `CSS` part. At the end the `HTML` code will look like:

![html code](https://cloud-ad455y4xg.vercel.app/0screenshot_from_2020-10-09_19-36-08.png)

## 4. Improving the design of skeleton using CSS

PRO TIP: Personally I feel before we start coding for any project, we should try to make a flowchart containing all the details that we have to include in our project. This makes things crystal clear and the chances of mistakes also reduce.

Here is a CSS diagram which depicts the details we have to consider.

![CSS(flowchart)](https://cloud-gkcw8pvg7.vercel.app/0css_flowchart_.png)


Let's start coding `CSS` by making all the elements with `0` margin and padding. 

Now we will customize the body by giving it a background color `#dfe7ee` , display property and some miscellaneous details.

We will set display value as `flex` because Flexbox makes it easier to design flexible responsive layout without using float or positioning.
Till now the code would look something like this:

```css
body {
  background-color: #dfe7ee; // pale blue
  line-height: 1.5;
  font-size: 125%;
  display: flex;
}
```

All our body part is done, now we can start making the Card.

```css
.container {
  position: relative;
  background-color: #fff;
  padding: 0 1em 1em; 
  margin: 150px 500px 400px auto; 
  -webkit-filter: drop-shadow(0 1em 1em rgba(0, 0, 0, 0.1));
          filter: drop-shadow(0 1em 1em rgba(0, 0, 0, 0.1));
}
```
Here `position:relative` is used for the pseudo-element which we will create in the next step. 

`webkit-filter` with `drop-shadow` is also a very cool property which is used for giving a highlighted shadow behind the card.

For making a tilted card we use, 

```css
.container::before {
  content: '';
  padding-top: 5%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100%;
  background-image: linear-gradient(3deg, white calc(50% - 1px), transparent 50%);
}

```

`::before` creates a pseudo-element that is the first child of the selected element. It is used to insert something before the selected element i.e. `.container`. It adds some cosmetic content to an element with the content property. 

A pseudo class such as `::before` has a default position value of `inline`. Therefore we change the `position` to `absolute` as elements whose position value is `absolute` are taken out of flow and are `block-level` elements with a default display CSS property value of block.

Read more about [pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/::before).

The `linear-gradient` with `3deg` gives us the tilted effect. For more information regarding gradients in css [read here](https://www.w3schools.com/css/css3_gradients.asp).

We will add some properties to our heading by adding the following code:

```css
.content {
  position: relative;
  margin: 0 60px auto;
  padding: 0 1em;
}

h1 {
  border-bottom: 4px solid deepskyblue;
  padding-bottom: 0.25em;
  margin-bottom: 0.25em;
  text-align: center;
  font-family: Raleway;
}
```
 Till this point we have almost designed every part of our elements and now we are only left with the input box and the details
 which we wish to display.
 
 For the input box we add the following code:
 ```css
 .input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.4rem;
    height: 50px;
    padding: 10px 10px;
    text-align: center;
    font-weight: bold;
}
```
And for the weather details, we add the following code:
```css
.main-weather {
    display: none;
    padding: 20px;
    line-height: 2.2rem;
    border-radius: 10px;
    height: 30vh;
    text-align: center;
    color:  #23313E;
    font-weight: bold;
}

.temp {

    margin: 25px ;
    font-size:40pt;
    font-weight: 700;
}
```
Here we have used `display:none` because we wish to hide everything before any input is taken. Rest all elements are basic `CSS` properties. 

Yayy! All the `CSS` part is completed and we have done designing the webpage. We just need to add the functionalities to our app. 

At this point the  css code would look something like [this](https://repl.it/@gautamjajoo/Weather#style.css).

## 5. Adding JS and learning how to work with APIs

### What are APIs and how do they work?

API stands for Application Programming Interface. An API is a messenger that delivers your request to the provider that you’re requesting it from and then delivers the response back to you. In layman terms, an API is like a waiter in a restaurant where you are the customer and the chef is the provider. You order the food to the waiter and the waiter informs the chef and then serves the food to the customer.

Developers use APIs to make their jobs more efficient by reusing code and only changing the part that is relevant to the process they want to improve.

For this project we would be using a weather API which is given by [OpenWeather](https://openweathermap.org/api). Firstly we have to read the docs
containing the format of the API given by OpenWeather.

![API](https://cloud-2r7ixfrb6.vercel.app/0api.gif)

TO start with, you will have to create an account on OpenWeather to generate an API key for yourself.

![login](https://cloud-dk4z6apbz.vercel.app/0login.gif)

After you have registered head over to get the [API](https://openweathermap.org/api) key. 
For this project we will use the `Current Weahter Data` API. Once you have subscribed to the API you will get the key in your [profile](https://home.openweathermap.org/api_keys).

![api_key](https://cloud-1uiy34o6d.vercel.app/0api_key.gif)


After setting up the key we will now read the docs to get to know in which format does the API respond. The [docs](https://openweathermap.org/current) contain the format for API call, under `By City name` tab.

The format of the key looks something like this:
```
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

![api](https://user-images.githubusercontent.com/24366008/95870244-e777c980-0d89-11eb-83fd-f98264ff0324.gif)


Here, we divide the API into two parts, first being the base url and second being the API key.

Before we start to write the code, there is a precise flowchart diagram which descirbes all the components which we would be writing down in the JS 
file.


![JS(chart)](https://cloud-hs1qd7tki.vercel.app/0js_chart_.png)


Since, we have a rough idea about the given API we can now start to code the JS file. At the start, we define a constant named as `api` 
which contains our Baseurl and our key. It would look something like this:

```js
const api = {
    key: "bbeac64cfcccb55a846070e17439f18f",
    base: "https://api.openweathermap.org/data/2.5/weather?", 
}
```

Now we will add a function to take the input city when pressed enter. Also in the same loop we will add the function to display the date and time of 
the user at that particular time using `moment.js`.

The format of date and time is like this:
```js
Mo MMM YYYY dddd, h:mm:ss

```
Many more formats and information is mentioned in the [Moment.js Docs](https://momentjs.com/docs/).

```js
    const Input = document.getElementById('input');
 
    Input.addEventListener('keypress', (event) => {

    if(event.keyCode == 13) {
        getWeather(Input.value); 

/*-------------------FUNCTION TO DISPLAY DATE AND TIME USING MOMENT.JS-------------------*/

		const date = moment();
		document.getElementById("date").innerHTML = date.format("Mo MMM YYYY dddd, h:mm:ss");

        document.querySelector('.main-weather').style.display = "block"; //used to show the details as intially the display is set as none
    }
});
```

In the above function the input of user is stored in the `const Input`. After the user presses enter(whose keycode is `13`) we would send the value
to the new function `getWeather` which we will create to get the weather details from the API. 

Also we store the date in a `const date` using the `moment.js` format mentioned in the docs.

Since, we had set the `display:none` intially in `main-weather` class in `css`, so for multiple queries to be answered we add the last line to make
the `display:block` otherwise after one query we won't be able to see further details.

Now we will create the `getWeather` function to get the details from the API.
```js
function getWeather(city) {
    fetch(`${api.base}q=${city}&appid=${api.key}&units=metric`)   
                                                              
    .then(details => {
        return details.json();  

    }).then(showWeather);
}

```
The input value of user which is passed through the above function is stored in `city`. As we know the format of API, we fetch the weather details 
where `api.base` is declared in the first line, `api.key` is mentioned in the second line of the `JS` file and the `city` is the input of the user.

`.then()` is a method in `JS` which has been defined in the `Promise API` and is used to deal with asynchronous tasks such as an API call.
Previously, callback functions were used instead of this function which made the code difficult to maintain. More information about 
promises is mentioned in [Developer Mozzila Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

We also add a new code containing `units=metric`, since the API returns in Fahrenheit and we want the temperature to be in Celcius.

As we fetch the weather details, the parameters are stored in `json` format of `details`. These details are then passed to function `showWeather` so 
that we can display it to the user.

Now we are on the last step of creating our app, where we need to create a function `showWeather` to display the details we have received from the 
API.

```js
function showWeather(details){  //Taking the received values from API into this function
}
```

Here we pass the `details` received from API to the `showWeather` function. 


Before coding further we should try seeing what we obtain from the API using `console.log()`.

```js
function showWeather(details){  //Taking the received values from API into this function

    // console.log(details);
}

```
Now we see the Console log of the browser to see the details we have received from the API. The console should look like:

![console](https://cloud-1tlmm2zp9.vercel.app/0console.gif)

After we have got to know the details received from API, we will now store them in a variable and push them to the HTML.

```jss
function showWeather(details){  //Taking the received values from API into this function

    // console.log(details);

    let city = document.getElementById('city');
    city.innerHTML = `${details.name}, ${details.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(details.main.temp)}&deg;C`; 

    let minMax = document.getElementById('min-max');
    minMax.innerHTML = `${Math.round(details.main.temp_min)}&deg;C (Min) and ${Math.round(details.main.temp_max)}&deg;C (Max) `; 

    let weatherType = document.getElementById('weather-type');
    weatherType.innerHTML = `${details.weather[0].main}`;
}

```

Since we are using `JSON` for accessing the details, the format of getting the details is something like this `details.property` 
where `details` is our `JSON` object and `property` could be any element of that object. For choosing the correct `property` we have to see
the console log of the details we receive from the API.

Also, to round off the temperature we are using `Math.round()` function.

Yipeee! We have now finsihed coding our weather app and the App is now ready to be used.

For seeing the end result use the `Run` button on `Repl`.

![app](https://cloud-g1zuwwz9o.vercel.app/0app.gif)

## 6. The Improvised Version

Here are some things which you should consider to improvise your knowledge of APIs and make some changes in this project as well.

- You could add different images/[icons](https://erikflowers.github.io/weather-icons/) depending upon the weather type(sunny, rainy etc). Research on this point you will get a lot of help from the [API](https://openweathermap.org/weather-conditions#Icon-list) itself.

- Try to make another card on the right of this where you display the map of the city entered. (You will get to know about some new APIs of Maps)

- There are many other details which we receive from the API(humidity,pressure etc) that we do not display. See what other details we receive
and try to display them as well.

- Add a `right-arrow` [font-awesome icon](https://fontawesome.com/v4.7.0/icons/) which when clicked shows the details instead of pressing `Enter`. (Some basic JS practice)

### Some examples of improvised version

1. [Project](https://Weather1.gautamjajoo.repl.co/) including other details from the API like Humidity, Pressure etc. 

2. [Project](https://weather2.gautamjajoo.repl.co/) with some icons based on the weather type of the place. 

Last but not the least, be as creative and dynamic as possible. This is only the start and I am sure after this workshop you would definitely create
some big and cool projects.

![yayy](https://cloud-m158dsxpf.vercel.app/0yay.gif)

