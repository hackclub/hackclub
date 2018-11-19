---
name: Dashboard with Next.js
description: Personal dashboard of news and weather with React
author: "@lachlanjc"
group: react
order: 3
---

For your Next(.js) steps, we’re building a personal dashboard with React & Next.js that shows weather, news headlines, & whatever else you want. Let’s get going!

## Getting started

We’re using [Glitch](https://glitch.com) again today. Start with the Next.js boilerplate from the last workshop: [glitch.com/edit/#!/hackclub-next-starter](https://glitch.com/edit/#!/hackclub-next-starter?path=pages/index.js). **Click “Remix”** & you can get started. Whenever you want to, click “Show” in the upper-left to see the live site.

Quick review—`pages/index.js` is the most important file. Whatever is returned by `export default () => (…)`gets rendered on your homepage.

## Registering for API keys

## Adding your API keys to your code

Open the `key.env` file in the sidebar. Now, replace `SECRET` with `DARK_SKY_KEY`, and after the equals, paste your API key

## Fetching the weather

First, let’s make a Weather component. Click “New file”, and enter `components/Weather.js`. Let’s get started:

```js
import React from ‘react’
```