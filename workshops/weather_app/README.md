---
name: 'Weather App'
description: 'Making a Weather App using HTML, CSS and JS(no framework involved)'
author: '@gautamjajoo'
---

# Weather App

Are you a beginner in JavaScript and don't know where to get started? If yes, you're in the right place! Being a beginner in coding and having to learn the fundamentals can be very painful—but the best way to learn is to make fun, simple projects! In this workshop, you'll build an app that uses web APIs to get the weather for any city.

Here's what the final version looks like:

![main](https://cloud-fw0yxvsf2.vercel.app/0screenshot_from_2020-10-23_19-26-13.png)

The [Source Code](https://github.com/gautamjajoo/BasicWeather) & [Demo](https://WeatherApp.gautamjajoo.repl.co) are hyperlinked here.

By the end of this workshop, you'll have learned how to use web APIs, which you could expand to use even more creatively in future projects. You'll also learn some fundamentals of JavaScript, as well as some nice CSS tricks for making beautiful card designs.

## 1. The Prerequisites
Some basic understanding of HTML, CSS and Javascript/JSON.

If you don't know any of the above, don't worry! This workshop will guide you through it.

## 2. Setting up the project on Repl.it

We're going to be using [Repl.it](https://repl.it) for this workshop. Repl.it is a powerful collaborative online code editor.

Start by creating a [new HTML/CSS repl.it project](https://repl.it/languages/html).

You should see three files: `index.html`, `style.css`, and `script.js`.

![repl.it screen](https://cloud-o4m9cgxr8.vercel.app/0screenshot_from_2020-10-09_12-14-29.png)

## 3. Making a skeleton of the app.

Delete all the lines which are already added in the files. Let's start by adding some code to the `index.html` file. We start the file with some basic lines which are added in every HTML file.

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

Here `!DOCTYPE` is used as an "information" to the browser about what document type to expect.

Now we would link the`JS` file to our `HTML` file. Also, we would be using `moment.js`, a Javascript library for managing dates and time.

To link the CSS file we add

```html
<link rel="stylesheet" href="style.css">
```
inside the `head` tag and to link the JS file we add

```html
<script src="script.js"></script>
``` 
inside the body tag.

To link external file like `moment.js` we use [`CDNJS`](https://cdnjs.com/) which is an open-source CDN service powered by Cloudflare. Cloudflare makes it easier to load library files on our websites.

Add 

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.0/moment.min.js"></script>
``` 
under the `head` tag.

Since we have linked all our files with the `HTML` file now we can start making a card on which we would display the content.
I feel cards are a very aesthetic form to display our content. Also, there is a lot of scope of making the cards look better and
more catchy.

P.S: For more information about cards, refer to `Bootstrap`, an open source `CSS` framework. 
[Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/)

Inside our `<body>` we will add `<div>` with class as `container` which makes our main card and for the content inside we can add another
`<div>` with class as `content`.

Then add a heading using the `h1` tag giving the title to the project.

To input the city from the user we use the `input` tag and declare it with class as `input` and `id` as `input`. 

Mainly `class` is used for passing information in `CSS` and `id` is used for `JS`. 
Also, add a `placeholder` which is a text behind the input label that describes the expected value of the input.

```html
<input id="input" class="input" placeholder="Enter the City Name">
```

Make sure you close the `div` of `content` because now we have taken the city name from the user and our only task is to display the weather 
details.

Lastly, we have to add `div` with class as `main-weather` to display the weather details.

We will be using `<p>` for every detail we display. Hence we declare the weather details with the following ids

```html
<p id="date">Date </p>
<p id="city">City </p>
<p class="temp" id="temp">Temp </p>
<p id="min-max">Min and Max Temp </p>
<p id="weather-type">Sunny </p>
```

Our `HTML` code is done and now we can move to the `CSS` part. At the end, the `HTML` code will look like:

![html code](https://cloud-ad455y4xg.vercel.app/0screenshot_from_2020-10-09_19-36-08.png)

## 4. Improving the design of skeleton using CSS

Firstly, we will customize the body by giving it a background colour, display property, font-size and line-height.

We will set display value as `flex` because Flexbox makes it easier to design a flexible responsive layout without using float or positioning.

Till now the code would look something like this:

```css
body {
  background-color: #dfe7ee;
  line-height: 1.5;
  font-size: 125%;
  display: flex;
}
```

All our body part is done, now we can start making the Card.

```css
.container {
  background-color: #fff;
  padding: 0 4.5em 7em; 
  margin: 100px 500px 400px auto; 
  -webkit-filter: drop-shadow(0 1em 1em rgba(0, 0, 0, 0.1));
          filter: drop-shadow(0 1em 1em rgba(0, 0, 0, 0.1));
}
```
`WebKit-filter` with `drop-shadow` is also a very cool property which is used for giving a highlighted shadow behind the card.

We will add some properties to our heading by adding the following code:

```css
h1 {
  border-bottom: 4px solid deepskyblue;
  padding-bottom: 0.25em;
  margin-bottom: 0.25em;
  text-align: center;
  font-family: Raleway;
}
```
 
Till this point, we have designed almost all the elements and are only left with the input box and the details which we wish to display.
 
For the input box we add the following code:
 
 ```css
 .input {
    border: none;
    outline: none;
    font-size: 1.4rem;
    text-align: center;
    font-weight: bold;
}
```
And for the weather details, we add the following code:

```css
.main-weather {
    display: none;
    line-height: 2.2rem;
    height: 30vh;
    text-align: center;
    color:  #23313E;
    font-weight: bold;
}

.temp { 
    margin: 25px;
    font-size:40pt;
    font-weight: 700;
}

```
Here we have used `display: none` because we wish to hide everything before any input is taken. Rest all elements are basic `CSS` properties. 

Yay! All the `CSS` part is completed and we have done designing the webpage. We just need to add the functionalities to our app. 

At this point, the CSS code would look something like [this](https://repl.it/@gautamjajoo/Weather#style.css).

## 5. Adding JS and learning how to work with APIs

### What are APIs and how do they work?

API stands for Application Programming Interface. An API is a messenger that delivers your request to the provider that you’re requesting it from and then delivers the response back to you. In layman terms, an API is like a waiter in a restaurant where you are the customer and the chef is the provider. You order the food to the waiter and the waiter informs the chef and then serves the food back to the customer.

Developers use APIs to make their jobs more efficient by reusing code and only changing the part that is relevant to the process they want to improve.

For this project, we would be using a weather API which is given by [OpenWeather](https://openweathermap.org/api). 

To start with, you will have to create an account on OpenWeather to generate an API key for yourself.

![login](https://cloud-dk4z6apbz.vercel.app/0login.gif)

After you have registered head over to the [API](https://openweathermap.org/api) section. 

We would be using the `Current Weather Data` API. Subscribe to the API and after that, you will receive the key in your [profile](https://home.openweathermap.org/api_keys).

![api_key](https://cloud-1uiy34o6d.vercel.app/0api_key.gif)

After setting up the key we will now read the docs to get to know in which format does the API responds. The [docs](https://openweathermap.org/current) contain the format for API call, under `By City name` tab.

![api_docs](https://cloud-2r7ixfrb6.vercel.app/0api.gif)


The format of the key looks something like this:
```
API.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

Here, we divide the API into two parts, first being the base URL and second being the API key.

Since we have a rough idea about the given API we can now start to code the JS file. 
At the start, we define a constant named as `api` which contains our Baseurl and our key. It would look something like this:

```js
const api = {
    key: "bbeac64cfcccb55a846070e17439f18f", 
    base: "https://api.openweathermap.org/data/2.5/weather?", 
}
```

Replace the key with your API key present in the profile section.

Now we will add a function to take the input city when pressed enter. Also in the same loop, we will add the function to display the date and time of 
the user at that particular time using `moment.js`.

The format of date and time is:
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

        document.querySelector('.main-weather').style.display = "block"; //used to show the details as initially the display is set as none
    }
});
```

In the above function, the input of the user is stored in the `const Input`. After the user presses enter(whose keycode is `13`) we would send the value
to the new function `getWeather` which we will create to get the weather details from the API. 

Also, we store the date in a `const date` using the `moment.js` format mentioned in the docs.

Since we had set the `display: none` initially in `main-weather` class in `CSS`, so for multiple queries to be answered we add the last line to make
the `display: block` otherwise after one query we won't be able to see further details.

Now we will create the `getWeather` function to get the details from the API.
```js
function getWeather(city) {
    fetch(`${api.base}q=${city}&appid=${api.key}&units=metric`)   
                                                              
    .then(details => {
        return details.json();  

    }).then(showWeather);
}


```
The input value of the user which is passed through the above function is stored in `city`. As we know the format of API, we will fetch the weather details from the provider using the API. Here `api.base` is declared in the first line and `api.key` in the second line of the `JS` file and `city` is the input of the user.

`.then()` is a method in `JS` which has been defined in the `Promise API` and is used to deal with asynchronous tasks such as an API call.
Previously, callback functions were used instead of this function which made the code difficult to maintain. More information about 
promises are mentioned in [Developer Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

We will also add `units=metric` in the end, since the API returns in Fahrenheit and we want the temperature to be in Celsius.

As we fetch the weather details, the parameters are stored in the `JSON` format of `details`. These details are then passed to function `showWeather` so 
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

The console log should look like:

![console](https://cloud-1tlmm2zp9.vercel.app/0console.gif)

After we have got to know the details received from API, we will now store them in a variable and push them to the HTML.

```js
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

Yippee! We have now finished coding our weather app and the App is now ready to be used.

For seeing the result use the `Run` button on `Repl`.

![app](https://cloud-g1zuwwz9o.vercel.app/0app.gif)

## 6. The Improvised Version

Here are some things which you should consider to improve your knowledge of APIs and make some changes in this project as well.

- You could add different images/[icons](https://erikflowers.github.io/weather-icons/) depending upon the weather type(sunny, rainy etc). Research on this point you will get a lot of help from the [API](https://openweathermap.org/weather-conditions#Icon-list) itself.

- Try to make another card on the right of this where you could display the map of the city entered. (You will get to know about some new APIs of Maps)

- There are many other details which we receive from the API(humidity, pressure etc) that we do not display. See what other details we receive
and try to display them as well.

- Add a `right-arrow` [font-awesome icon](https://fontawesome.com/v4.7.0/icons/) which when clicked shows the details instead of pressing `Enter`. (Some basic JS practice)

### Some examples of the improvised version

1. [Project](https://Weather1.gautamjajoo.repl.co/) including other details from the API like Humidity, Pressure etc. 

2. [Project](https://weather2.gautamjajoo.repl.co/) with some icons based on the weather type of the place. 

Last but not the least, be as creative and dynamic as possible. This is only the start and I am sure after this workshop you would create
some big and cool projects.

![yayy](https://cloud-m158dsxpf.vercel.app/0yay.gif)

