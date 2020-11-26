---
name: 'Populous Cities'
description: 'Create a map of 50 most populous cities using React Leaflet'
author: '@faisalsayed10'
---

# Populous Cities

Today, We'll be creating a simple bubbles map using a popular JavaScript library [`Leaflet`](https://leafletjs.com/). In fact the React version of it - [`React-Leaflet`](https://react-leaflet.js.org/).

[![Populous Cities](https://cloud-na8vxu9zy.vercel.app/0image.png)](https://9jq66.csb.app/)

Here's the [source code](https://codesandbox.io/s/populous-cities-9jq66).

## Part 1: Prerequisites

You should know the basics of React and I recommend you to follow [this](https://workshops.hackclub.com/react_calendar/) workshop before proceeding further. If you're having trouble, feel free to ask [me](https://app.slack.com/client/T0266FRGM/user_profile/U014ND5P1N2) or anyone in the [Hack Club Slack](https://hackclub.com/slack/)!

## Part 2: Setup

For writing our code, we'll be using [CodeSandbox](codesandbox.io) which turns out to be the best online code editor for creating React apps.

Go to this [starter code](https://react.new). Press **`ctrl+s`** / **`cmd+s`** and it will automatically fork it for you. Now, we have everything set up so let's get started!

## Part 3: Building the project

### 1) Making a basic map

First, delete the `styles.css` file from your project as we won't need much CSS in today's workshop and we'll make use of inline styles and also the default CSS which comes with `leaflet`.

Now let's install the 2 dependencies, namely `leaflet` and `react-leaflet` into your project. To do this, simply search for those dependencies in the left column and install it by selecting it.

![Searching for the dependency](https://cloud-6du06y3zt.vercel.app/0image.png)

![Installing it](https://cloud-j0qh8nov4.vercel.app/1image.png)

Let’s edit `App.js` by removing unnecessary lines of code and importing modules from `react-leaflet` that we just installed.

```jsx
import React, { useEffect, useState } from "react";
import { MapContainer, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

export default function App() {
  return (
    <div className="App">
      <h3 style={{ textAlign: "center" }}>
        50 Most Populous Cities in the World
      </h3>
    </div>
  );
}
```

Explanation: We imported `useEffect` and `useState` as we'll use it later in this workshop. Next, `MapContainer`, `CircleMarker`, `TileLayer` and `Tooltip` are the 4 components that we are going to use to plot our map. Similarly, we also import the CSS styles for the map from `leaflet`.

Next, we use inline styles to align the heading to the center.

Now, let's create a container that will hold our map using `leaflet` in React!

```jsx
export default function App() {
  return (
    <div className="App">
      <h3 style={{ textAlign: "center" }}>
        50 Most Populous Cities in the World
      </h3>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        minZoom={1.5}
        style={{ height: "100vh", width: "100%" }}
      ></MapContainer>
    </div>
  );
}
```

Explanation: the `MapContainer` component will act as the main container to our map. It requires certain props such as `center` which we have kept as `0, 0` (latitude and longitude), the default `zoom` which we have kept as 2, the minimum zoom limit (`minZoom`) as 1.5 and also the width and height for the map.

You'll be able to see a basic container rendered on the browser!

![Basic MapContainer rendered](https://cloud-6du06y3zt.vercel.app/1image.png)

Next we’ll add a TileLayer inside our `MapContainer`. It is used to load and display tile layers on the map using a specific tile url.

```jsx
<MapContainer
  center={[0, 0]}
  zoom={2}
  minZoom={1.5}
  style={{ height: "100vh", width: "100%" }}>
  <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
</MapContainer>
```

Voila! We can see the map of the world rendered on the browser!

![map of the world](https://cloud-9rkjo4k27.vercel.app/0image.png)

Here, we finish building a very basic map of the world using `react-leaflet`!

### 2) Fetching the data

We now need the data of the populous cities and their population (ofcourse!). For this, we'll need to make use of (yeah, you guessed it!) an API endpoint.

For your comfort, I created an API for this using https://public.opendatasoft.com/explore which will return us those 50 cities!

[Here's](https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/table/?disjunctive.country&sort=population&rows=50) where I built it.

<details><summary>We get the API URL as:</summary>

https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&lang=EN&rows=50&sort=population&facet=timezone&facet=country

</details>

Now, its time to make the API request!

**NOTE**: If you don't know what an API is or how do we make the requests, I recommend you to follow [this](https://workshops.hackclub.com/quotes_generator/) simple workshop to get yourself familiar with it!

Let's create a `cities` state to store our data and as we want our app to make only 1 request to the API, we'll write it inside of the `useEffect` hook!

```jsx
const url = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&lang=EN&rows=50&sort=population&facet=timezone&facet=country"

export default function App() {
  const [cities, setCities] = useState();

  useEffect(() => {
    async function fetchCities() {
      try {
        const res = await fetch(url);
        setCities(await res.json());
      } catch (err) {
        console.error(err);
      }
    }

    fetchCities();
  }, []);
```

Explanation: We create an async function `fetchCities` inside `useEffect` which makes an API call to the given url. Then, we store that response in the `res` variable. Then, after converting it to json format, all that data gets stored in the `cities` state. We pass the empty dependency array (`[]`) to `useEffect` to make sure it only runs once.

### 3) Creating the bubbles

