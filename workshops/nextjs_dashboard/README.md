---
name: Dashboard with Next.js
description: Personal dashboard of news and weather with React
author: '@lachlanjc'
group: react
order: 3
---

For your Next(.js) steps, we’re building a personal dashboard with React & Next.js that shows weather, news headlines, & whatever else you want. Let’s get going!

## Getting started

We’re using [Repl.it](https://repl.it) today. Create a new repl, using "Next.js" as the language. ([Here's a shortcut link.](https://repl.it/languages/nextjs))

Quick review—`pages/index.js` is the most important file. Whatever is returned by `export default () => (…)`gets rendered on your homepage.

Let's get something going: (put your own name in, of course)

```js
import React, { Component } from 'react'

export default () => (
  <div>
    <h1>Welcome, NAME!</h1>
    <Weather />
    <p>
      Powered by <a href="https://newsapi.org/">NewsAPI</a> and{' '}
      <a href="https://darksky.net/poweredby/">Dark Sky</a>
    </p>
  </div>
)
```

## Registering for API keys

Before we begin, you'll need to sign up for a [Dark Sky API key](https://darksky.net/dev/). Go ahead and visit the site and sign up. Once you're logged in, you'll reach a page that says "Your Secret Key". Leave this site open, you'll need the key in just a moment.

Go sign up for an [News API key](https://newsapi.org/). After signing up, you'll see "API key". Also keep this open.

## Fetching the weather

First, let’s make a Weather component. Click the "New folder" button, and name it `components`. Then click the three dots, "New file", and enter `Weather.js`.

Let’s get started: (be sure to replace the key with your Dark Sky key)

```js
import React, { Component } from 'react'

const API_KEY = 'MY_DARK_SKY_KEY'

class Weather extends Component {
  render() {
    return (
      <div>
        <h2>Weather</h2>
      </div>
    )
  }
}

export default Weather
```

Head back to `pages/index.js`, and on the second line, add the `import Weather` line & then render the `<Weather />` component.

```js
import React, { Component } from 'react'
import Weather from '../components/Weather'

export default () => (
  <div>
    <h1>Welcome, YOURNAME!</h1>
    <Weather />
  </div>
)
```

Check out the preview—our components are working!

We need a way to fetch the weather data from Dark Sky now. Luckily, there's a handy library called [Axios](https://github.com/axios/axios) to make it easy.

Click "Packages" in the sidebar, then type in `axios`. Click and install it. In the terminal in the corner, you can see repl.it installing the library for you.

Before we can add the fetching itself, we'll need to show that data is loading. head back to `components/Weather.js`:

```js
import React, { Component } from 'react'
import axios from 'axios'

const API_KEY = '…'

class Weather extends Component {
  state = {
    temperature: 'loading…'
  }

  render() {
    return (
      <div>
        <h2>Weather</h2>
        <p>The current temperature is: {this.state.temperature}</p>
      </div>
    )
  }
}

export default Weather
```

(Are you using Glitch instead & seeing you a red dot next to `state =`? Ignore it. We're using some new JavaScript syntax Glitch doesn't understand yet.)

Now, when the component "mounts" (is initialized on the page), let's fetch the weather and save it to our state. Remember, every time we call `setState` in React, the component re-renders, so the new temperature will show as soon as it's loaded.

```js
import React, { Component } from 'react'
import axios from 'axios'

class Weather extends Component {
  state = {
    currently: 'loading',
    forecast: {}
  }

  componentDidMount() {
    const url =
      'https://cors-anywhere.herokuapp.com/https://api.forecast.io/forecast/'

    const success = position => {
      const { latitude, longitude } = position.coords
      axios
        .get(
          `${url}${
            process.env.DARK_SKY_KEY
          }/${latitude},${longitude}?callback=?`
        )
        .then(res => res.data)
        .then(forecast => this.setState({ forecast }))
        .catch(() => this.setState({ currently: 'error' }))
    }

    const error = () => {
      alert('Unable to retrieve your location for weather')
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  render() {
    const { currently, forecast } = this.state
    return (
      <div>
        <h2>Weather</h2>
        {currently === 'loading' ? (
          <p>Loading…</p>
        ) : currently === 'error' ? (
          <p>There was an error :(</p>
        ) : (
          <p>The current temperature is: {forecast.currently.temperature}º</p>
        )}
      </div>
    )
  }
}

export default Weather
```

On the `const url` line, you'll notice we're using this other URL with `cors-anywhere` in it. This is an inelegant hack to get our site working: Dark Sky only wants you to make "proper" requests from your servers, but since we just want to get this working in our browser, we're using this other utility.

## Getting the news headlines

We'll be using the News API now, with a very similar structure to the Weather component. We need to fetch the news, save it to state, then render the list of articles. Open `components/News.js`:

```js
import React, { Component } from 'react'
import axios from 'axios'

const API_KEY = '…'

class News extends Component {
  state = {
    currently: 'loading',
    news: []
  }

  componentDidMount() {
    const url =
      'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey='

    axios
      .get(url + API_KEY)
      .then(res => res.data)
      .then(news => this.setState({ news, currently: 'success' }))
      .catch(() => this.setState({ currently: 'error' }))
  }

  render() {
    const { currently, news } = this.state
    return (
      <div>
        <h2>News</h2>
        {currently === 'loading' ? (
          <p>Loading…</p>
        ) : currently === 'error' ? (
          <p>There was an error :(</p>
        ) : (
          <ul>
            {news.articles.map(article => (
              <li key={article.url}>
                <a href={article.url}>{article.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default News
```

You'll need to use the component though :) So head back to `pages/index.js`, and add `import News from '../components/News'` near the top and add the component to the body. Like this:

```js
import React from 'react'
import Weather from '../components/Weather'
import News from '../components/News'

export default () => (
  <div>
    <h1>Welcome, YOURNAME!</h1>
    <Weather />
    <News />
    <footer>
      Powered by <a href="https://newsapi.org/">NewsAPI</a> and{' '}
      <a href="https://darksky.net/poweredby/">Dark Sky</a>
    </footer>
  </div>
)
```

## Styling the news

We've got the basics of our news headlines. Let's make it look incredible. Try experimenting with the CSS now! Add a tag of `<style jsx>{\`your css\`}</style>` and play around. Don’t just copy this example, try your own :)

```js
import React, { Component } from 'react'
import axios from 'axios'

const API_KEY = '…'

class News extends Component {
  state = {
    currently: 'loading',
    news: {}
  }

  componentDidMount() {
    const url =
      'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey='

    axios
      .get(url + API_KEY)
      .then(res => res.data)
      .then(news => this.setState({ news, currently: 'success' }))
      .catch(() => this.setState({ currently: 'error' }))
  }

  render() {
    const { currently, news } = this.state
    return (
      <div>
        <h2>News</h2>
        {currently === 'loading' ? (
          <p>Loading…</p>
        ) : currently === 'error' ? (
          <p>There was an error :(</p>
        ) : (
          <ul>
            {news.articles.map(article => (
              <li key={article.url}>
                <a href={article.url}>
                  <strong>{article.title}</strong>
                  <span>{article.description}</span>
                </a>
                <img src={article.urlToImage} />
              </li>
            ))}
          </ul>
        )}
        <style jsx>{`
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            display: flex;
            align-items: center;
            padding: 1rem;
            border-top: 1px solid #ddd;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          img {
            margin-left: 1rem;
            width: 8rem;
            max-height: 6rem;
            object-fit: contain;
          }
          span {
            display: block;
            font-size: 0.875rem;
            color: gray;
          }
        `}</style>
      </div>
    )
  }
}

export default News
```

Protip: want to explore what other data you can show about articles? This example also shows the image, but there's author, name of site, time, and lots more. Inside `render()`, before `return`, add `console.log(news)`. Now right-click & "Inspect Element" in your browser, go to the "Console" section, and you can see a list of all the articles with all their fields displayed. Try adding more of these fields to your site.

## Keep going!

Now it's your time to shine! Keep playing around with the content, styling, add in more components, make it stunning.

One nice addition is showing the day of the week. On `pages/index.js`, try this:

```js
export default () => (
  <div>
    <h1>Welcome, YOURNAME!</h1>
    <p>
      Hello, it’s {new Date().toLocaleDateString('en-us', { weekday: 'long' })}
      {'. '}
      You’re doing great.
    </p>
    …
  </div>
)
```

[Live example](https://nextjsdashboard--lachlanjc.repl.co)
