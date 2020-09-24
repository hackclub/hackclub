---
name: Fetch a Hack Clubber
description: Learn data-fetching with Next.js and meet someone new!
author: '@sampoder'
---

# Fetch a Hack Clubber with Next.js

Hack Club is a global community full of amazing people, but how can we meet them? ~Like everything the solution is coding!~ We're going to be building a site that introduces you to a random Hack Clubber each time you visit the site. We're going to be [Next.js](https://nextjs.org) and the [Hack Club Scrapbook API](https://scrapbook.hackclub.com/about/).

### Our data source

To get our data we'll need a massive database of Hack Clubbers. The most accessible and up to date of which is the [Hack Club Scrapbook API](https://scrapbook.hackclub.com/about/). We can query [`/api/users`](https://scrapbook.hackclub.com/api/users) to get all of the users of the platform (which includes a lot of Hack Clubbers). 

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

From this object, we can get my Scrapbook username (which we can use to identify them), my Slack user ID, my GitHub and my website. There is a lot more data which you can play around with later!

### Getting started

To help you out, I've prepared some [starter code](https://repl.it/@sampoder/fetchahackclubberstarter). Open it up with Repl.it (Google Docs for coding) and then fork it so we can get coding!

Click `Run ➤` and you'll see what our interface is going to look like. Right now, it's just introducing me ([@sampoder](https://github.com/sampoder))

<img src="https://cloud-486h0t7p5.vercel.app/screenshot_2020-09-24_at_10.49.25_pm.png" width="380" alt="Our starter project">

Next, you're going to want to open `pages/index.js`, this is where we're going to be writing all of our code for the project
Take a look at the code, the basic explanation is:

* We import a few things at the top. We have `next/head` which allows us to add metadata to our head. We import our CSS from `../styles/Home.module.css` to style the web app. We import `isomorphic-unfetch`, which is a utility that helps us fetch data from web APIs.

* Then inside the function called `Home` (which is our default export), we return all the elements of our site.

  * These are very similar to HTML elements
  
  * To style elments we add a class by adding a code snippet like `className={styles.card}` to the element.
  
> Sidenote: I'd like to give credit to everyone who contributed to `create-next-app` as the starter code that your using was based on their project. Thank you for their tireless efforts.

### Fetching that data

Let's get to the juicy stuff, fetching all that data! 

To do this we will use the `getServerSideProps` feature of Next.js. This means whenever a person visits the site, the server running the site will make a data request (which we'll put in a `getServerSideProps` function) and then render the site in preparation to be served to the user.

Let's add a basic `getServerSideProps()` function at the bottom

```javascript
export async function getServerSideProps() {
  return {
    props: { 'number': 1 },
  };
}
```

This isn't doing anything at the moment, but that will change soon! For now, just take note that we return an JSON object called `props` that we can use in our page.

Next up, let's try out fetching data! Using the following snippet we're going to fetch all of the users on Scrapbook, convert the result into JSON and then log it to the console.

```javascript
export async function getServerSideProps() {
  const users = await fetch(
    "https://scrapbook.hackclub.com/api/users/"
  ).then((r) => r.json());
  console.log(users)
  return {
    props: { 'number': 1 },
  };
}
```

Open the site in a new tab (or reload) and then check the console in repl.it. You should see a big array of JSON objects for users (that is sadly cut off). Those are our Hack Clubbers!!!

Now we got all our people, we need to pick one! We can use MATH in Javascript to do this, don't worry the computer does the math we just boss it around :D

Let's add a bit to our `getServerSideProps()` function:

```javascript
export async function getServerSideProps() {
  const users = await fetch(
    "https://scrapbook.hackclub.com/api/users/"
  ).then((r) => r.json());
  const user = users[Math.floor(Math.random() * users.length)];
  console.log(user)
  return {
    props: { 'number': 1 },
  };
}
```

Reload the site again, now should only see one user and it should change everytime you reload!

Last thing, we need to give our page access to this data, we can do this by replacing `'number': 1` with `user`. We also don't need to log to the console, so our  `getServerSideProps()` function should look like:

```javascript
export async function getServerSideProps(context) {
  const users = await fetch(
    "https://scrapbook.hackclub.com/api/users/"
  ).then((r) => r.json());
  let user = users[Math.floor(Math.random() * users.length)];
  return {
    props: { user }, // will be passed to the page component as props
  };
}
```

We've got the data, now we need to get it onto the site!

### Displaying our data

In Next.js we can use any variable in our page using by putting it in curly braces (`{}`). For example if we wanted to use the person's username we could use `{props.user.username}`. 

Let's get started by changing `sampoder` to `{props.user.username}` in our `h1` tag. Try reloading the site, you should now see a random username on every new load. Can you do the same by changing the source image for the avatar? The variable is `{props.user.avatar}`.

Now we need to change the links to use our variables. This is a bit more of a challenge, we're going to want to replace `{"https://hackclub.slack.com/team/USNPNJXNX"}` with `{"https://hackclub.slack.com/team/" + props.user.slack}` to get the Slack link to work. Knowing that our Scrapbook username is `props.user.scrapbook` can you do the same for the Scrapbook link?

At the moment your code inside `main` should look like:

```javascript
<img src={props.user.avatar} className={styles.avatar} />
<h1 className={styles.title}>
  Meet <span className={styles.accent}>@{props.user.username}</span>
</h1>
<div className={styles.grid}>
  <a
    href={"https://hackclub.slack.com/team/" + props.user.slack}
    className={styles.card}
  >
    <h3>Message them Slack &rarr;</h3>
    <p>They're on the Hack Club Slack, just like you (I hope)!</p>
  </a>

  <a
    href={"https://scrapbook.hackclub.com/" + props.user.username}
    className={styles.card}
  >
    <h3>Visit their Scrapbook &rarr;</h3>
    <p>Where Hack Clubbers share what they get up to!</p>
  </a>
</div>
```

You may notice that we're not displaying all the data we have :( The other two pieces of data we'll want to display are GitHub links and the person's website. The issue is these fields are optional so not everyone has them. To fix this we need to wrap the card with `{props.user.github && ( YOUR_CONTENT_HERE )}` to show it only when the GitHub link field is available. Let's add the following to the end of our grid after the `</a>`:

```javascript
{props.user.github && (
  <a
    href={props.user.github}
    className={styles.card}
  >
    <h3>Visit their GitHub &rarr;</h3>
    <p>I'm sure it's full of coding projects and a lot of green.</p>
  </a>
)}
```

Challenge! Can you do the same for the website link? The variable is: `{props.user.website}`.

No peaking, the solution is:

```
{props.user.website && (
  <a
    href={props.user.website}
    className={styles.card}
  >
    <h3>Visit their website &rarr;</h3>
    <p>Their little corner of the internet, who knows what you'll find here!</p>
  </a>
)}
```

### real people!!!!!!!
