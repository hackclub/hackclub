---
name: 'Web Scraper'
description: 'Build a simple web scraping application with Typescript, Axios, and Cheerio'
author: '@CaelinSutch'
---

# Building a Web Scraper in TypeScript with Axios and Cheerio

You can find the source code for this project [here](https://github.com/CometCode-io/web-scraper).
Web scraping refers to the process of gather information from a website through automated scripts. With web scraping, one can gather large amounts of data from websites where no official API exists.

Web scraping can be broken down into two simple steps:
1. Fetching the HTML source code of a website via an HTTP request or a headless browser
2. Parsing the raw HMTL data to get the information that matters

We'll look at both of these steps during this tutorial and writing our web scraper in [TypeScript](https://cometcode.io/posts/typescript/). 

**Why Typescript?**
We'll be writing this in Typescript because the typed nature of TypeScript makes it easier to catch bugs and write cleaner code.

# Prerequisites
To complete this tutorial, you need to have Node.js (version 8.x or later) and npm installed on your computer.

# Getting Started
Let's create a new `scraper` directory for this project and initialize it as an NPM package by running `npm init -y` in the project root.

## Setting up TypeScript
Lets setup TypeScript:

```bash
npm i -D typescript # Typescript compiles to plain JS
npm i -D ts-node # ts-node to run typescript code without compiling to JS
npm i -D nodemon # Automatically restarts the application whenever file changes are detected
```

### Setting up TSConfig
Now lets setup the Typescript config file. Create a new file `tsconfig.json` and add the following code:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "sourceMap": true,
    "resolveJsonModule": true,
    "lib": ["es6", "dom"],
    "esModuleInterop": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

We won't go into depth about what all these options do, but you can read the [typescript documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to learn more.

### Adding a Start Script
Now, lets add some scripts to make it easier to run our code. Add the following to the `package.json` file. 

```json

{
  ...
  "scripts": {
    "start": "tsc && node dist/index.js",
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  },
 ...
}
```

The start script compiles and runs our code, while the dev script will run the code and then rerun it every time you change it. 

### Installing other dependencies

Let's install the dependencies we'll be using to build the web scraper:
```bash
npm i -s axio cheerio
npm i -D @types/axios @types/cheerio
```

## Setup the folder structure
Create a new folder `src` in your root directory, and a file called `index.ts` in the `src` folder. Your folder structure should now look like this:

```
scraper
│   package.json
│   tsconfig.json    
└───src
│   │   index.ts
└───node_modules
```

## Test Everything
Lets make sure everything was setup properly.

Open `index.ts` and add the following.
```typescript
// index.ts

console.log('Project setup correctly!')

```

Then run `npm run dev`, and you should see `Project setup correctly!` appear in the console!

# Scrape a website with Axios and Cheerio
 we're going to set up a script to scrape the [Premier League website](https://premierleague.com/) for some player stats. 
 Specifically, we'll scrape the website for the [top 20 goalscorers in Premier League history](https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1) and organize the data as JSON.


Open up index.ts again and add the following code:

```typescript
// index.ts

import axios from 'axios';

const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1'; // URL we're scraping
const AxiosInstance = axios.create(); // Create a new Axios Instance

// Send an async HTTP Get request to the url
AxiosInstance.get(url)
  .then( // Once we have data returned ...
    response => {
      const html = response.data; // Get the HTML from the HTTP request
      console.log(html);
    }
  )
  .catch(console.error); // Error handling
```

If you don't have the `npm run dev` command running already, make sure it's running, and you should see a bunch of HTML output.

You'll see this HTML contains a lot of stuff we don't need, like scripts and links to CSS, so how do we parse the HTML to get information we need?

This is where cheerio comes in. Cheerio allows us to use jQuery methods to parse an HTML string to extract information.

Open [this link](https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1) in your browser, and open the dev tools on that page. Use the inspector tool to highlight the body of the table listing the top goalscorers in Premier League history.

As you an see, the table body that holds the players has a class of `.statsTableContainer`.  We can select all the rows using cheerio like this: `$('.statsTableContainer > tr')`. Go ahead and update the index.ts file to look like this:

```typescript
import axios from 'axios';
import cheerio from 'cheerio';

const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1'; // URL we're scraping
const AxiosInstance = axios.create(); // Create a new Axios Instance

// Send an async HTTP Get request to the url
AxiosInstance.get(url)
  .then( // Once we have data returned ...
    response => {
      const html = response.data; // Get the HTML from the HTTP request
      const $ = cheerio.load(html); // Load the HTML string into cheerio
      const statsTable: Cheerio = $('.statsTableContainer > tr'); // Parse the HTML and extract just whatever code contains .statsTableContainer and has tr inside
      console.log(statsTable); // Log the number of captured elements
    }
  )
  .catch(console.error); // Error handling
```

You should see the number of players, 20, logged in your console.

The next step is to extract the rank, player name, nationality, and number of goals from each row. We can do that with the following script:

```typescript
import axios from 'axios';
import cheerio from 'cheerio';

const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1'; // URL we're scraping
const AxiosInstance = axios.create(); // Create a new Axios Instance

// This is the structure of the player data we recieve
interface PlayerData {
  rank: number; // 1 - 20 rank
  name: string;
  nationality: string;
  goals: number;
}

// Send an async HTTP Get request to the url
AxiosInstance.get(url)
  .then( // Once we have data returned ...
    response => {
      const html = response.data; // Get the HTML from the HTTP request
      const $ = cheerio.load(html); // Load the HTML string into cheerio
      const statsTable: Cheerio = $('.statsTableContainer > tr'); // Parse the HTML and extract just whatever code contains .statsTableContainer and has tr inside
      const topScorers: PlayerData[] = [];

      statsTable.each((i, elem) => {
        const rank: number = parseInt($(elem).find('.rank > strong').text()); // Parse the rank
        const name: string = $(elem).find('.playerName > strong').text(); // Parse the name
        const nationality: string = $(elem).find('.playerCountry').text(); // Parse the country
        const goals: number = parseInt($(elem).find('.mainStat').text()); // Parse the number of goals
        topScorers.push({
          rank,
          name,
          nationality,
          goals
        })
      })

      console.log(topScorers);
    }
  )
  .catch(console.error); // Error handling
```

We created an interface, `PlayerData` that represents the structure of the data we're parsing. We then parse this information from the HTML we recieve from the webpage, and create an array of objects with that data.

After saving your code, you should see an array being printed in your console with the information on each player. Pretty awesome, right! Plus, all the code is typesafe! 

You can find the source code for this tutorial [here](https://github.com/CometCode-io/web-scraper).
