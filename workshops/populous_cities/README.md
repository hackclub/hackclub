---
name: 'Populous Cities'
description: 'Create a map of 50 most populous cities using React Leaflet'
author: '@faisalsayed10'
image: 'https://cloud-na8vxu9zy.vercel.app/0image.png'
---

# Populous Cities

Today, We'll be creating a simple bubbles map using a popular JavaScript library [`Leaflet`](https://leafletjs.com/). In fact the React version of it - [`React-Leaflet`](https://react-leaflet.js.org/).

![React Leaflet's Epic Logo](https://cloud-d2ma3vev0.vercel.app/0image.png)

[![Populous Cities](https://cloud-na8vxu9zy.vercel.app/0image.png)](https://9jq66.csb.app/)

Here's the [source code](https://codesandbox.io/s/populous-cities-9jq66).

## Part 1: Prerequisites

You should know the basics of React and I recommend you to follow [this](https://workshops.hackclub.com/react_calendar/) workshop before proceeding further. If you're having trouble, feel free to ask [me](https://app.slack.com/client/T0266FRGM/user_profile/U014ND5P1N2) or anyone in the [Hack Club Slack](https://hackclub.com/slack/)!

## Part 2: Setup

For writing our code, we'll be using [CodeSandbox](https://codesandbox.io) which is the best online code editor for creating React apps.

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

Explanation: We imported `useEffect` and `useState` as we'll use it later in the workshop. Next, `MapContainer`, `CircleMarker`, `TileLayer` and `Tooltip` are the 4 components that we are going to use to plot our map. Similarly, we also import the CSS styles for the map from `leaflet`.

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

Learn more about the [`MapContainer component`](https://react-leaflet.js.org/docs/api-map#mapcontainer).

You'll be able to see a basic map container rendered on the browser!

![Basic MapContainer rendered](https://cloud-6du06y3zt.vercel.app/1image.png)

Next we’ll add a TileLayer inside our `MapContainer`. It is used to load and display tile layers of the map using a specific tile url.

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

Learn more about the [`TileLayer component`](https://react-leaflet.js.org/docs/api-components#tilelayer).

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

Now, we can see our data stored inside the `cities` state!

![data stored inside the cities state](https://cloud-hd193mw81.vercel.app/0image.png)

**NOTE:** This can be seen in the console.

Learn more about [`useEffect`](https://reactjs.org/docs/hooks-effect.html).  
Learn more about [`async-await`](https://javascript.info/async-await).

<details><summary>Your code so far:</summary>

```jsx
import React, { useEffect, useState } from "react";
import { MapContainer, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

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
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}
```

</details>

### 3) Creating the bubbles

We can now use this data to locate those cities on the map and create bubbles on that location according to their population!

We need such bubbles at the location of each city and for this, we can simply use the JavaScript `map()` method!

```jsx
<MapContainer {/* ... */}>
  <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

  {cities &&
    cities.records.map((city, i) => {
      return (
        <CircleMarker
          center={[
            city.fields["coordinates"][0],
            city.fields["coordinates"][1]
          ]}
          radius={1.5 * (city.fields.population / 1000000)}
          fillOpacity={0.4}
          stroke={true}
          key={city.recordid}>
        </CircleMarker>
      );
    })}
</MapContainer>
```

Explanation: By using `cities && cities.records.map`, we first make sure that `cities` isn't empty by any chance or our whole app might crash! Next, if we take a look into the data, we have an array `records` containing an object for each city. So, we map the `records` array.

The `map()` method calls the provided function once for each element in an array, in order. Each element of that array is referred as a `city` at each iteration (you can name it anything else too). We also use a variable `i` to refer the index of an element.

Next, by making the use of the `CircleMarker` component, we create those bubbles. `CircleMarker` takes in the props such as:

1. `center` - This takes in an array of 2 values mainly the longitude and the latitude of that location.

If we look inside our data, we'll find an array of co-ordinates inside the `fields` object inside each city record.

2. `radius` - This takes in the radius of the circle as to how big it must be.

3. `fillOpacity` - The opacity of the bubble (circle).

4. `stroke` - This is a boolean prop which determines whether the circle should have a stroke or not!

5. `key` - The `key` prop is always necessary while mapping arrays. Also, it should always be a unique value for each element. Each city has a unique `recordid` and we use it as the key of that element.

Learn more about the [`map()`](https://www.w3schools.com/jsref/jsref_map.asp) method.  
Learn more about the [`CircleMarker component`](https://react-leaflet.js.org/docs/api-components#circlemarker).

Woah! Woah! Woah! Look what you just built! We have a bubble mapped perfectly for each city and also with a varying size!

![Bubble Mapped for each city](https://cloud-4rqd9f1k2.vercel.app/0image.png)

The most populous city has a bigger circle and the less populous cities have a slightly smaller circle and so on!

But wait! We aren't finished here yet! If you checked the demo of this workshop, we were able to hover on the bubble and get the name and population of that particular city!

Let's work on building this functionality which turns out to be much much easier than anything!

Here's where the `Tooltip` component comes into picture! This component is used inside a `CircleMarker` component to create a popup for that circle.

```jsx
{cities &&
  cities.records.map((city, i) => {
    return (
      <CircleMarker
        center={[...]}
        radius={...}
        fillOpacity={0.4}
        stroke={true}
        key={city.recordid}>
        <Tooltip direction="top" offset={[0, -2]} opacity={1}>
          <span>
            {i + 1}. {city.fields.name} : {city.fields.population}
          </span>
        </Tooltip>
      </CircleMarker>
    );
})}
```
Explanation: For each mapped bubble, a `Tooltip` component will be created with the `direction` as `top`, a `y-offset` of -2 so it's a bit above the center of the circle and also the `opacity` set to 1.

A `span` will be rendered out as the popup which will display the rank of the city using `i + 1` (index starts from 0, so we added 1 to it), the name of the city and also the population of it!

Learn more about the [`Tooltip component`](https://react-leaflet.js.org/docs/api-components#tooltip).

Annnd we can see the tooltip on hover! Yippee!

![Tooltip popup image](https://cloud-6jxscag6y.vercel.app/0image.png)

![WOOOOOWWW](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

We are pretty much done! But before winding up, we need to make some finishing changes to our workshop.

1. You might notice that the map is continuous which feel a bit annoying.

2. There's a bug which lets you drag the map out of the visible browser screen which is not very appealing.

So let's fix all these bugs in the next section!

![Popeye fixing water](https://media.giphy.com/media/lVBtp4SRW6rvDHf1b6/giphy.gif)

**NOTE:** If you feel satisfied with the current state of the project, it's totally upto you and you can skip it. But if you want to learn new stuff, then stick around!

<details><summary>Your code so far:</summary>

```jsx
import React, { useEffect, useState } from "react";
import { MapContainer, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const url =
  "https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&lang=EN&rows=50&sort=population&facet=timezone&facet=country";

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
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {cities &&
          cities.records.map((city, i) => {
            return (
              <CircleMarker
                center={[
                  city.fields["coordinates"][0],
                  city.fields["coordinates"][1]
                ]}
                radius={1.5 * (city.fields.population / 1000000)}
                fillOpacity={0.4}
                stroke={true}
                key={city.recordid}
              >
                <Tooltip direction="top" offset={[0, -2]} opacity={1}>
                  <span>
                    {i + 1}. {city.fields.name} : {city.fields.population}
                  </span>
                </Tooltip>
              </CircleMarker>
            );
          })}
      </MapContainer>
    </div>
  );
}

```

</details>

### 4) Making the finishing changes

First, let's remove the continuity of the map. This can be simply done by adding a boolean prop `noWrap` set to `true` in the `TileLayer` component!

```jsx
<MapContainer {/* ... */}>
  <TileLayer
    url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    noWrap={true}
  />
  {/* ... */}
</MapContainer>
```

![Demo after writing the following code](https://cloud-5zffcevb4.vercel.app/01.gif)

YAY! We now have our map as a single layer and not as an infinite map! Exactly as we wanted!

Next, to fix the bug which is causing the map go out of the window, we'll need to set the `maxBounds` and the `maxBoundsViscosity` for our map!

When `maxBounds` is set, the map restricts the view to the given geographical bounds, bouncing the user back if the user tries to pan outside the view.

To set `maxBounds`, we'll need to define 2 points with a certain latitude and longitude using `latLng`. Then, by using these values, we'll create the bounds using `LatLngBound`.

First, let's create those 2 variables outside our app component.

```jsx
const corner1 = Leaflet.latLng(-90, -200); // Here, -90 is the latitude, -200 is the longitude.
const corner2 = Leaflet.latLng(90, 200); // Here, 90 is the latitude, 200 is the longitude.

export default function App() {
  // ...
}
```

Next, we'll simply create the bounds containing both the points!

```jsx
const corner1 = Leaflet.latLng(-90, -200);
const corner2 = Leaflet.latLng(90, 200);
const bounds = Leaflet.latLngBounds(corner1, corner2);
```

Now, to actually set this bounds on our map, we'll pass the `maxBounds` prop to the `MapContainer` component and then pass its value as `bounds`.

```jsx
<MapContainer
  center={[0, 0]}
  zoom={2}
  minZoom={1.5}
  maxBounds={bounds}
  style={{ height: "100vh", width: "100%" }}
>
```

Now, we'll also set the `maxBoundsViscosity` prop in the `MapContainer`. If maxBounds is set, this option will control how solid the bounds are when dragging the map around. The default value of 0.0 allows the user to drag outside the bounds at normal speed, higher values will slow down map dragging outside bounds, and 1.0 makes the bounds fully solid, preventing the user from dragging outside the bounds.

```jsx
<MapContainer
  center={[0, 0]}
  zoom={2}
  minZoom={1.5}
  maxBounds={bounds}
  maxBoundsViscosity={0.4}
  style={{ height: "100vh", width: "100%" }}
>
```

Now if you check your map, we have fixed all the little bugs and its looks much better now!

![Final Demo](https://cloud-gejk7ab8m.vercel.app/02.gif)

<details><summary>Your Final Code</summary>

```jsx
import React, { useEffect, useState } from "react";
import { MapContainer, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const url =
  "https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=&lang=EN&rows=50&sort=population&facet=timezone&facet=country";
const corner1 = Leaflet.latLng(-90, -200);
const corner2 = Leaflet.latLng(90, 200);
const bounds = Leaflet.latLngBounds(corner1, corner2);

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

  return (
    <div className="App">
      <h3 style={{ textAlign: "center" }}>
        50 Most Populous Cities in the World
      </h3>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        minZoom={1.5}
        maxBounds={bounds}
        maxBoundsViscosity={0.4}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          noWrap={true}
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities &&
          cities.records.map((city, i) => {
            return (
              <CircleMarker
                center={[
                  city.fields["coordinates"][0],
                  city.fields["coordinates"][1]
                ]}
                radius={1.5 * (city.fields.population / 1000000)}
                fillOpacity={0.4}
                stroke={true}
                key={city.recordid}
              >
                <Tooltip direction="top" offset={[0, -2]} opacity={1}>
                  <span>
                    {i + 1}. {city.fields.name} : {city.fields.population}
                  </span>
                </Tooltip>
              </CircleMarker>
            );
          })}
      </MapContainer>
    </div>
  );
}
```

</details>

## Part 4: The End

Annd we just learnt React Leaflet and built this wonderful map!

![yay](https://media.giphy.com/media/xUPGcMzwkOY01nj6hi/giphy.gif)

Make sure you create an account on CodeSandbox to save this wonderful piece of creation or you'll loose it 😧.

Now it is up to you! Do crazy things with this project!

Here are some helpful links:

1. [LeafletJS Documentation](https://leafletjs.com/)

2. [React Leaflet Documentation](https://react-leaflet.js.org/docs/start-introduction)

Here are some tasks for you:

1. Play around with different types of Tile Layers!  
[Here is the full list](https://leaflet-extras.github.io/leaflet-providers/preview/)

2. Add popups and markers to your map!  
[Example](https://react-leaflet.js.org/docs/example-popup-marker)

3. Create a map which shows your location!  
[Example](https://react-leaflet.js.org/docs/example-events)

Check out these cool examples!

1. [Animated Panning in a map!](https://react-leaflet.js.org/docs/example-animated-panning)

2. [A map, but with another minimap!](https://react-leaflet.js.org/docs/example-react-control)

3. [A map which has a default latitude and longitude!](https://react-leaflet.js.org/docs/example-external-state)

4. [A Covid-19 Tracker built by Khushraj!](https://codesandbox.io/s/covid-tracker-sxfpu)

Now that you have finished building it, you should share your beautiful creation with other people! (I can't wait to see you ship this!)

You probably know the best ways to get in touch with your friends and family, but if you want to share your project with the worldwide Hack Club community there is no better place to do that than on Slack.
1. In a new tab, open and follow [these directions][slack] to signup for our Slack.
2. Then, post the link to the [`#ship`](https://hackclub.slack.com/messages/ship) channel to share it with everyone and also ping me!

[slack]: https://slack.hackclub.com/


PS. I'm `@fayd` on slack.
