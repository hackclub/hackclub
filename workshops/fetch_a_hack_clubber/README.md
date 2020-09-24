---
name: Fetch a Hack Clubber
description: Learn data-fetching with Next.js and meet someone new!
author: '@sampoder'
---

# Fetch a Hack Clubber with Next.js

Hack Club is a global community full of amazing people, but how can we meet them? ~Like everything the solution is coding!~ We're going to be building a site that introduces you to a random Hack Clubber each time you visit the site. We're going to be [Next.js](https://nextjs.org) and the [Hack Club Scrapbook API](https://scrapbook.hackclub.com/about/).

### Our data source

To get our data we'll need a massive database of Hack Clubbers. The most accessible and up to date of which is the [Hack Club Scrapbook API](https://scrapbook.hackclub.com/about/). We can query [`/api/users`](https://scrapbook.hackclub.com/api/users) to get all of the users of the platform (which inculdes a lot of Hack Clubbers). 

When we query that endpoint we get an array of JSON objects like this:

```
{
  "id": "recOdZms0k16sfKB8",
  "username": "sampoder",
  "avatar": "https://dl.airtable.com/.attachmentThumbnails/f6b8ebb05997ec8e5f17410ae338ba7e/8267718d",
  "webring": [
    "recwVYLZVDjBVbO0w",
    "recY0GDaua5hyJRyk",
    "recpnOXPx5gPZzfqc",
    "recMVSvrnWJjAfpVw",
    "recoVFgJY4md62oGZ",
    "recVrVJNGjlUj5E54",
    "recrnD6YZioRmwSQt",
    "recp3nz4WcaiGla4H"
  ],
  "css": "https://deadspryintelligence.sampoder.repl.co/style.css",
  "audio": "https://dl.airtable.com/.attachments/d6ddca0c63dff2e05ef91673697461d9/cceb30f2/everything_is_awesome____--_the_lego_movie_--_tegan_and_sara_feat._the_lonely_island.mp3",
  "streakCount": 101,
  "displayStreak": true,
  "slack": "USNPNJXNX",
  "github": "https://github.com/sampoder",
  "website": "https://sampoder.com/"
}
```

From this object we can get my Scrapbook username (which we can use to identify them), my Slack user ID, my GitHub and my website. There is a lot more data which you can play around with later!

### Getting started

To help you out, I've prepared some [starter code](https://repl.it/@sampoder/fetchahackclubberstarter). Open it up with Repl.it (Google Docs for coding) and then fork it so we can get coding!

Click `Run ➤` and you'll see what our interface is going to look like. Right now, it's just introducing me ([@sampoder](https://github.com/sampoder))

Next you're going to want to open `pages/index.js`, this is where we're going to be writing all of our code for the project.

Take a look at the code, the basic explaination is:

* We import a few things at the top. We have `next/head` which allows us to add metadata to our head. We import our CSS from `../styles/Home.module.css` to style the web app. We import `isomorphic-unfetch`, which is a utility that helps us fetch data from web APIs.

* Then inside the function called `Home` (which is our default export) we return all the elements of our site.

  * These are very similar to HTML elements
  
  * To style elments we add a class by adding a code snippet like `className={styles.card}` to the element.
  
> Sidenote: I'd like to give credit to everyone who contributed to `create-next-app` as the starter code that your using was based off their project. Thank you for their tireless efforts.


