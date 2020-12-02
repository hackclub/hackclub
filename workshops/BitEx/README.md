---
name: 'BitEx'
description: 'Build a simple chrome extension which tracks Bitcoin prices.'
author: '@faisalsayed10'
---

# BitEx

Today we'll be building a simple chrome extension which will track live Bitcoin prices!

Here's how it will look like:

![Demo of how our extension will look like](https://cloud-cf7gkmekh.vercel.app/0image.png)

Here's the [source code](https://repl.it/@FaisalSayed1/BitEx).

## Part 1: Prerequisites

There isn't any, but it will be good if you already have a beginner understanding of:

- HTML
- CSS
- JavaScript

 If you're having trouble, feel free to ask [me](https://app.slack.com/client/T0266FRGM/user_profile/U014ND5P1N2) or anyone in the [Hack Club Slack](https://hackclub.com/slack/)!

## Part 2: Setup

For writing our code, we'll be using [Repl.it](codesandbox.io) but later, we'll need to download it inorder to test our extension.

To get started, go to this HTML [starter code](https://repl.it/languages/html).

## Part 3: Building the project

### 1) The Manifest

If there is something which is really important for any chrome extension, then it is the `manifest.json` file. Without it, we can't create any extensions. So let's first create our `manifest.json` file!

First, click on `'Add file'`.

![visual guide to creating manifest](https://cloud-7l16l8dgo.vercel.app/0image.png)

Then, name your file as `manifest.json`.

Let's now start writing the json. First, we need to create an empty object (`{}`). Then, inside that, we'll first create a `name` key, then the `manifest_version` and so on.

```json
{
  "name": "BitEx",
  "manifest_version": 2,
  "version": "1.0",
  "description": "Chrome Extension which tracks Bitcoin prices",
  "browser_action": {
    "default_name": "BitEx",
    "default_icon": "icon.png",
    "default_popup": "index.html"
  },
  "permissions": []
}
```

Explanation: The `manifest_version` will be 2 according to chrome's documentation as `manifest_version` 1 was also deprecated in Chrome 18. The `version` is your extension's version. If you roll out updates to your extension, the version number increases.

Now, we are going to put our extension's icon in the main Google Chrome toolbar and also have a popup UI for our extension, therefore we will use the `browser_action`.

If you want to create an icon that isn't always visible, use a `page action` instead of a `browser action`.

Next, the `browser_action` will need the `default_name`, `default_icon` and the `default_popup` values for our extension to work. (Although these values are optional but for our case, we need them.)

**NOTE:** You can download the icon which I used [here](https://cloud-ixdoyae2t.vercel.app/0image.png).

We don't need any permissions for our extension so we'll keep it as empty.

And with this, we finish building our manifest!

### 2) HTML

Let's start building the UI for our extension. Building an extension's UI is no different than building a website! So let's start writing the HTML!

```html
<body>
  <div>
    <h1 class="title">Bitcoin Price Tracker</h1>
    <img src="./bitcoin.png" alt="bitcoin logo">
    <div class="bitcoin">Loading...</div>
  </div>
  <script src="index.js"></script>
</body>
```

**NOTE:** Download `bitcoin.png` from [here](https://cloud-94v45750t.vercel.app/0image.png) and simply drag and drop it into your repl!

![demo on how to drag and drop files in repl.it](https://cloud-hv94fl1nv.vercel.app/01.gif)

We simply create a `div` element containing a heading, an image and also another `div` which will display `Loading...` for now.

You should see something like this in your preview window:

![Demo of the code written so far](https://cloud-gxzis4tsg.vercel.app/0image.png)

What mess have we created! It definitely needs some styles! Let's add CSS in the next section!

### 3) CSS

Let's start by importing a few fonts, then adding styles to each elements!

```css
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');

body {
  min-width: 450px;
  background-color: #f4f4f4ee;
  color: #0e0e0e;
  text-align: center;
}

h1 {
  font-family: 'Sansita Swashed', cursive;
  font-size: 28px;
  letter-spacing: 1px;
}

img {
  display: block;
  margin: 0 auto;
  width: 76px;
}
```

Explanation: First, we import two fonts namely, `Sansita Swashed` and `Merriweather` from fonts.google.com. Then, the HTML `body` has a minimum width of 450px, a background color, a text color and all the text is aligned to `center`.

Similarly, the heading tag uses the font family `Sansita Swashed` and has a font size of 28px. There is also a letter spacing set to 1px.

The bitcoin logo image is set to `display: block` so that we can align it to center using `margin: 0 auto`. As it was a very large image, we also set its width to 76 pixels.

Let's also set some styles to the `<p>` tag with the class of `bitcoin`

```css
.bitcoin {
  font-family: 'Merriweather', serif;
  font-size: 22px;
}
```

Here, we simply set its font family to `Merriweather` and its font size is set to 22px.

Yay! Now we have a far better UI compared to what we had earlier!

![live demo of code written so far](https://cloud-ljmv9ffqq.vercel.app/0image.png)

### 4) JavaScript

Now it's time to fetch the realtime Bitcoin prices and actually show it on the browser screen instead of showing `Loading...` all the time.

```js
const div = document.querySelector(".bitcoin");
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cbitcoincash%2Cethereum%2Clitecoin%2Cbinancecoin%2Cripple&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

let data;
```

We select the `div` tag with the class of `bitcoin` using `querySelector()` and assign it to the `div` variable. The `querySelector()` method returns the first element that matches a specified CSS selector(s) in the document.

Learn more about [`querySelector()`](https://www.w3schools.com/jsref/met_document_queryselector.asp).

Then, we assign the API URL from where the data will be fetched to the variable `url`. We also create a `data` variable where we'll store the fetched data later.

Now, let's fetch the data from that `url`.

```js
async function fetchData() {
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (err) {
    console.error(err);
  }
}
```

Explanation: We first create an `async function` and then by using the `try-catch` blocks, the response we receive is stored inside the `res` variable. Then, after converting this response to `json` format, it is then stored into the `data` variable. As usual, the `fetch` API returns a promise and to handle that promise, we used the `async-await` syntax.

If there's any error, it will simply get console logged.

Learn more about [`async-await`](https://javascript.info/async-await).


<detail><summary>Now if you try console logging the data variable, you should see something like this:</summary>

```js
[ { id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 19327.06,
    market_cap: 357299782216,
    market_cap_rank: 1,
    fully_diluted_valuation: 404286280236,
    total_volume: 41738893348,
    high_24h: 19832.27,
    low_24h: 18338.09,
    price_change_24h: -257.1378091,
    price_change_percentage_24h: -1.31299,
    market_cap_change_24h: -7585140892.950989,
    market_cap_change_percentage_24h: -2.07878,
    circulating_supply: 18559362,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 19832.27,
    ath_change_percentage: -2.92725,
    ath_date: '2020-12-01T11:14:31.236Z',
    atl: 67.81,
    atl_change_percentage: 28291.10978,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2020-12-01T15:05:30.303Z',
    price_change_percentage_24h_in_currency: -1.3129860318628117 },
  {
    // ...
  }
```

</details>

We get an array of data about various cryptocurrencies! From this, we'll make use of the `current_price` value and the `price_change_percentage_24h` value of bitcoin!

Now, let's create a function which will extract these values and add them to the DOM!

Also an important thing to keep in mind is that the `price_change_percentage_24h` can be negative or positive. So we'll need to check that and display it in a green color or a red color accordingly.

```js
function showPrices() {
  if (data[0].price_change_percentage_24h > 0) {
    // Gentle Reminder: We are using backticks below and not quotes.
    div.innerHTML = 
    `<p>1 BTC = $${data[0].current_price}</p>
      <p class="increased">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
        </span>
        ${data[0].price_change_percentage_24h}%
      </p>`;
  }
}
```

Explanation: We simply check if the `price_change_percentage_24h` is greater than 0 or not. If this is true, we start to add various `<p>` tags inside the `<div>` tag.

**NOTE:** Using backticks (``) allows you to inject HTML elements in the DOM using JavaScript, and that's exactly what we do in the above code.

In the first `<p>` tag, we render bitcoin's current price. Next, we create a `<p>` tag with a class of `increased` in which we create a `<span>` containing a `chevron up` svg and next to it, we show the price change percentage.

Similarly, we will add an `else` condition which will do the rendering if the `price_change_percentage_24h` is negative.

```js
function showPrices() {
  if (data[0].price_change_percentage_24h > 0) {
    // ...
  } else {
    div.innerHTML = 
    `<p>1 BTC = $${data[0].current_price}</p>
      <p class="decreased">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
        ${data[0].price_change_percentage_24h}%
      </p>`;
  }
}
```

Explanation: Everything seems similar here, except the class of the `<p>` element is now as `decreased` and the svg we now use is `chevron down`.

Now let's call this function once all the data is fetched.

```js
async function fetchData() {
  try {
    const res = await fetch(url);
    data = await res.json();
    showPrices(); // Calling the showPrices() function!
  } catch (err) {
    console.error(err);
  }
}
```

And lastly, call the `fetchData()` function at the very last line of the document!

<detail><summary>Your JavaScript code so far</summary>

```js
const div = document.querySelector(".bitcoin");
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cbitcoincash%2Cethereum%2Clitecoin%2Cbinancecoin%2Cripple&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

let data;

async function fetchData() {
  try {
    const res = await fetch(url);
    data = await res.json();
    showPrices();
  } catch (err) {
    console.error(err);
  }
}

function showPrices() {
  if (data[0].price_change_percentage_24h > 0) {
    div.innerHTML = `<p>1 BTC = $${data[0].current_price}</p>
  <p class="increased">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </span>
    ${data[0].price_change_percentage_24h}%
  </p>`;
  } else {
    div.innerHTML = `<p>1 BTC = $${data[0].current_price}</p>
    <p class="decreased"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
</svg></span>${data[0].price_change_percentage_24h}%</p>`;
  }
}

fetchData();
```

</details>

If you `RUN` this code, you should see something like this!

![Preview of the code written so far](https://cloud-m1crtq110.vercel.app/0image.png)

We haven't yet implemented the CSS for the classes `increased` and `decreased` due to which we don't see the green/red color for the price change percentage. Let's do that finally!

### 5) CSS, again

Head back to `style.css` again and let's add styles for those 2 classes.

```css
.increased {
  padding: 4px;
  color: #4dbb79;
}

.decreased {
  padding: 4px;
  color: #f56565;
}
```

The `increased` class gets a greenish color and similarly, the `decreased` class gets a reddish color!

Now if you `RUN` the code, you'll see that everything works perfectly as we expected!

![Demo of code written so far](https://cloud-cf7gkmekh.vercel.app/0image.png)

And now its finally time to make this into an extension!

### 6) Adding your extension to Chrome

First we'll need to download our code. For this, simply click on the 3 vertical dots on the left and select the option `Download as zip`.

![visual tutorial on how to do it](https://cloud-5vz6fh264.vercel.app/0image.png)

Once you have download the zip file. Extract it. It will then give you a folder of your repl's name with our code inside!

Next, navigate to `chrome://extensions` in your chrome browser. You'll see a list of all your installed extensions!

![image of chrome extensions page](https://cloud-36ht9ja6n.vercel.app/0image.png)

On the top right corner, make sure you have `Developer mode` turned on. If not, make sure you turn it on!

![developer mode image](https://cloud-q7rpbmt3e.vercel.app/0image.png)

Now you'll see 3 new options popped up! Click on the `Load unpacked` option and select the folder containing your code!

![Load unpacked option](https://cloud-btsj473k8.vercel.app/0image.png)

And there we go! We successfully installed our extension into our chrome browser! Now you'll be able to see your extension's icon in the chrome toolbar!

## Part 4: The End

Yay! We successfully built a wonderful chrome extension which tracks Bitcoin prices!

![yay](https://media.giphy.com/media/xUPGcMzwkOY01nj6hi/giphy.gif)

If you do have a developer account, feel free to upload it on the chrome web store!

Here are some helpful links:

1. [Chrome Extension Documentation](https://developer.chrome.com/extensions/devguide).

2. [Cryptocurrency API](https://www.coingecko.com/api/documentations/v3)

3. [Coindesk Bitcoin API](https://www.coindesk.com/coindesk-api)

Here are some tasks for you:

1. Create an extension which shows the current prices for top 5 cryptocurrencies.

2. Create a chrome extension which displays the historical data for Bitcoin using [this](https://www.coindesk.com/coindesk-api#node-35:~:text=We%20offer%20historical%20data%20from%20our,Sample%20Request%3A%20https%3A%2F%2Fapi.coindesk.com%2Fv1%2Fbpi%2Fhistorical%2Fclose.json%3Fstart%3D2013%2D09%2D01%26end%3D2013%2D09%2D05) API.

3. Create a chrome extension which shows the past prices of any cyptocurrency of any given date(s)!

Now that you have finished building it, you should share your beautiful creation with other people! (I can't wait to see you ship this!)

You probably know the best ways to get in touch with your friends and family, but if you want to share your project with the worldwide Hack Club community there is no better place to do that than on Slack.
1. In a new tab, open and follow [these directions][slack] to signup for our Slack.
2. Then, post the link to the [`#ship`](https://hackclub.slack.com/messages/ship) channel to share it with everyone and also ping me!

[slack]: https://slack.hackclub.com/


PS. I'm `@fayd` on slack.
