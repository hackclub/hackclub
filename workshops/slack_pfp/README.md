---
name: Automating your Slack Profile Picture
description: Make a program that changes your Slack profile picture based on the time of day.
author: '@sampoder'
img: 'https://cloud-6yjkou2ru.vercel.app/0screen_shot_2020-12-08_at_9.38.36_am.png'
---

# Automating your Slack Profile Picture

<s>Having a plain old profile picture is so 2019. </s> Having a Slack Profile Picture that changes throughout the day is a great way to mix things up on Slack. In this workshop, we'll be learning how to make a dynamic profile picture that changes as the day progresses. We'll be using Node.js deployed as a [Vercel](https://vercel.com) Serverless Function and triggered by [cron-job.org](https://cron-job.org/en/). You'll be learning the basics of getting a Slack User Token, creating a Node.js program and deploying that program as a serverless function.

## Obtaining a Slack Token

In my opinion this is the most painful part of this process.

To begin you will need to be a member of a Slack Workspace. The easiest way to join one is to join [Hack Club's](https://hackclub.com/slack).

Then visit the [Slack "Build" page](https://api.slack.com/apps). Click the large green button that says `Create an App` and select `From scratch` on the next screen.

Name it whatever you'd like, and choose the workspace you'd like the app to be for.

On the next screen, find the `Add features and functionality` section and select `Permissions`.

  
![Slack API Configuration Screen with an arrow pointing to permissions](https://cloud-25utju6i9.vercel.app/0screenshot_2020-11-19_at_11.50.18_pm.png)

  

On this screen, scroll down to the `User Token Scopes` section and select the button that says `Add an OAuth Scope`.

  

![OAuth Scope Selection on Slack API page](https://cloud-1xkvojjl4.vercel.app/0screenshot_2020-11-19_at_11.55.09_pm.png)

  

In the pop-up box that follows, select `users.profile:write` and add that scope.

  

![OAuth Scope Selection on Slack API page completed](https://cloud-2ru7t5yz0.vercel.app/0screenshot_2020-11-20_at_12.00.03_am.png)

  

Scroll to the top of the page, click `Install to Workspace`, then `Allow` and then you will receive a token in return.

  

![Sample Token from Slack](https://cloud-1spwslhyd.vercel.app/0screenshot_2020-11-20_at_12.05.54_am.png)

  

Copy the generated token and store it in a safe space. Don't share it with anyone else (this is a fake token in the image, don't worry).

  

## Building our program

To get started you are going to want to create a new Node.js  [repl.it](http://repl.it/)  project, [click here to do so](https://repl.it/languages/nodejs).

Let's get going by adding your Slack token to your environment variables. What are environment variables? These are super secret variables that you don't want to store publicly. 

Repl.it provides us an easy way to pass in these environment variables to our app, head over to the "Secrets" tab in the left sidebar:
![Secrets tab in repl.it](https://user-images.githubusercontent.com/54525904/118370466-73263280-b5c5-11eb-96ee-511a11161b06.png)

and inside the "key" type `SLACK_TOKEN` and inside the "value" section, paste in your Slack OAuth token and click on `Add new secret` button:

![adding the secret in repl.it](https://user-images.githubusercontent.com/54525904/118370721-a7e6b980-b5c6-11eb-812e-e5bd3b1dc780.png)


Now, let's add two packages (`axios` & `@slack/web-api`) to our `index.js` file.

```javascript
const { WebClient } = require('@slack/web-api');
const axios = require('axios').default;
```

Axios will be used to fetch the images from URLs and the Slack Web API package will be used to interact with Slack.

Next, let's create a data object with each of our images. Replace each URL with your own to make this program your own.

```javascript
const images = {
  "morning": "https://images.unsplash.com/photo-1517188206596-1e1f7c954177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "afternoon": "https://images.unsplash.com/photo-1566452348683-91f934cd9051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
  "night": "https://images.unsplash.com/photo-1519446251021-1c4ee77fec1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
}
```

### Setting our profile picture

Now that we've got our images we need to create an async function that will handle setting our profile picture.

```javascript
async function setPFP() {  
  console.log(images)
}
```

An async function is important as it allows us to wait for a line of code to complete before moving to the next line using the `await` keyword.

What should we do first? How about setting a profile picture! Inside our `setPFP` function add the following lines. This will fetch the contents of the image.

```javascript
const image = await axios.get(images.afternoon, {
  responseType: "arraybuffer"
});
```

Awesome! We now have the image, let's set it to our profile picture on Slack. We can do this using the [users.setPhoto](https://api.slack.com/methods/users.setPhoto) API endpoint.
```javascript
const client = new  WebClient();
const slackRequest = await client.users.setPhoto({
  image: image.data,
  token: process.env.SLACK_TOKEN
});
```
In the above code we are creating an instance of the Slack Web API Client. Then we make a request to the users.setPhoto API endpoint, with our image data and our token. We need the token so that Slack knows who we are and that we are allowed to make this change. We're sending the data as an array buffer, these are a bit complicated but if you're curious you can read more about them [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

Now to run this function, just add the following to the bottom of you `index.js` file:

```javascript
setPFP()
```
This simply calls your function, now click `Run ►`.

Check Slack... do you see any difference in your profile? Fingers crossed you do but if you don't, check the console for any errors and check your code for any typos ;)

### Changing the Profile Picture Based on Time

Sooooo it may be the afternoon for you but it may not ¯\\\_(ツ)_/¯

Try changing `images.afternoon` to `images.morning` and running your program. You should see a different image as your profile picture after a couple of seconds.

To do so we'll need to know how many hours have passed in the day, right?

```javascript
var hour = new Date().getHours()
```

Add this code to your program at the **start** of your function, it creates a variable and assigns it the value of how many hours have passed. If you add `console.log(hour)` you'll notice that these hours aren't in your timezone (unless you are in an exact UTC zone). This is because these times are in UTC. I'm not going to go on and on about [timezone nonsense](http://www.physicalgeography.net/fundamentals/images/world_time2.gif) but you'll need to add or remove the UTC offset for your region.

For example, I live in Singapore so my timezone is UTC+8 and has an offset of +8 so I would write:

```javascript
var hour = new Date().getHours() + 8
```

Now let's set the image based on hours using a couple of `if` statements and an `else` statement:

```javascript
let image
if (5 < hour && hour < 12) {
  image = await axios.get(images.morning, {
    responseType: "arraybuffer",
  });
}
else if (12 < hour && hour < 20) {
  image = await axios.get(images.afternoon, {
    responseType: "arraybuffer",
  });
}
else {
  image = await axios.get(images.night, {
    responseType: "arraybuffer",
  });
}
```

We want to replace our original image fetching code block with this to make our final code file this:

```javascript
const { WebClient } = require('@slack/web-api');
const axios = require('axios').default;
const images = {
  "morning": "https://images.unsplash.com/photo-1517188206596-1e1f7c954177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "afternoon": "https://images.unsplash.com/photo-1566452348683-91f934cd9051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
  "night": "https://images.unsplash.com/photo-1519446251021-1c4ee77fec1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
} 
async function setPFP() {
  var hour = new Date().getHours() + 8
  let image
  if (5 < hour && hour < 12) {
    image = await axios.get(images.morning, {
      responseType: "arraybuffer",
    });
  }
  else if (12 < hour && hour < 20) {
    image = await axios.get(images.afternoon, {
      responseType: "arraybuffer",
    });
  }
  else {
    image = await axios.get(images.night, {
      responseType: "arraybuffer",
    });
  }
  const client = new WebClient();
  const slackRequest = await client.users.setPhoto({
    image: image.data,
    token: process.env.SLACK_TOKEN
  });
}

setPFP()
```
## Making it serverless on Vercel

Serverless is basically a buzz word by hosting companies that means running code server side, without managing your own server. Yep, it's not really serverless.

Anyhow, we'll need to move our code inside of an `api` folder. So create a new folder called `api` , create a `index.js` file in there and copy all of your code into it.

Now we'll need to replace `setPFP()` with:

```javascript
export default async (req, res) => {
  await setPFP()
  res.send("Started changing your PFP!")
}
```
That's all the code changes we'll need. Now we need to deploy it!

First, we'll add it to GitHub (a code hosting platform). If you don't have an account please register one [here](https://github.com) and then come back :)

Click the `Version Control` button:

![Version Control Icon on Repl.it](https://cloud-sg9h5hqot.vercel.app/0screenshot_2020-11-21_at_5.36.01_pm.png)

Then click the `Create a Git Repo` button

![Create a Git Repo Button](https://cloud-anmjphf23.vercel.app/0screenshot_2020-11-21_at_5.40.05_pm.png)

Then click `Connect to GitHub`. The following process is different for different people so please follow the onscreen instructions.

![Connect to GitHub Button](https://cloud-f8t5l4xpe.vercel.app/0screenshot_2020-11-21_at_5.47.33_pm.png)

Once you get to this screen, copy this link.

![Link to copy with arrow](https://cloud-p50jnssri.vercel.app/0screenshot_2020-11-21_at_5.43.50_pm.png)

Now head to vercel.com and register for an account.

Once you have registered for Vercel, visit https://vercel.com/import and click this button:

![Vercel Git Repo Button](https://cloud-ah3kdl8r4.vercel.app/0screenshot_2020-11-21_at_5.52.09_pm.png)

Paste in the link you previously copied and click continue. Click continue again and then deploy!

![Congrats page](https://cloud-o1laihfer.vercel.app/0screenshot_2020-11-21_at_5.56.17_pm.png)

If all goes to plan you should see this page, yay!! We have deployed it. Now we need to configure our environment variables. Open the dashboard up.

![Click to open dashboard](https://cloud-mbfalxjtt.vercel.app/0screenshot_2020-11-21_at_5.59.06_pm.png)

Then open up the settings:

![Open settings](https://cloud-bw0zco82g.vercel.app/0screenshot_2020-11-21_at_6.00.33_pm.png)

Create an environment secret for your Slack token with the following settings:

![Add env variable](https://cloud-1rw8v8j7g.vercel.app/0screenshot_2020-11-21_at_6.05.48_pm.png)

Now we need to redeploy our app. You can do this by going to Deployments:

![Deployments button](https://cloud-ofbgibav5.vercel.app/0screenshot_2020-11-21_at_6.10.44_pm.png)

Then select the top one:

![Selecting the top one](https://cloud-hkb7mvp1m.vercel.app/0screenshot_2020-11-21_at_6.12.10_pm.png)

Then in the top right, click the three dots and then the redeploy button.

![Redeploy button location](https://cloud-fcenvvko0.vercel.app/0screenshot_2020-11-21_at_6.13.35_pm.png)

Now try visiting `/api` on your url. You should see your profile picture change on Slack ;) Check it out! But... we don't want to have to visit this URL every time. So, let's automate that.

## Scheduling a trigger

Now let's schedule when to trigger this API. Head on over to cron-job.org and create a new account.

Once you've logged into that account, click `Cronjobs`.

![Cronjobs button](https://cloud-6ep1r0ykr.vercel.app/0screenshot_2020-11-22_at_1.42.39_pm.png)

Then create a new one!

![Create new button](https://cloud-rhrfjtuo7.vercel.app/0screenshot_2020-11-22_at_1.43.43_pm.png)

Fill in the form with the following settings and click create:

![Recommended Settings](https://cloud-7lnp5ap0k.vercel.app/0screenshot_2020-11-22_at_1.45.03_pm.png)

And wow... we're done!! Now throughout the day your profile picture will change depending on the time.

## Hacking

Slack profile pictures are semi-unexplored territory but there's certainly a lot of hacking potential in them! So go make something EPIC!

Here are a couple of examples of cool Slack profile picture hacks:

 - Build a web dashboard focused on your PFP. Here's [an example](http://change-my-pfp.now.sh) of one I made, here's [the source](https://github.com/sampoder/pfp).
 - Have random photos on a cycle for your profile picture, check out [my Slack profile](https://hackclub.slack.com/archives/DT08DHJKF/) as an example and here's [the source](https://github.com/sampoder/pfp/blob/7e6294bfed50b6c7a0867e84c67b415f1213b179/pages/api/set-profile.js#L12).
 - Let others set your profile picture (WARNING: weird stuff can happen), [here's an example](https://draw.clb.li) made by Caleb and here's [the source](https://github.com/cjdenio/draw-on-avatar) for their app.

Make something cool? Awesomeeee!!!! Share it on [#ship](https://hackclub.slack.com/archives/C0M8PUPU6/) in the Slack and tag me with [@sampoder](https://hackclub.slack.com/archives/DT08DHJKF/)!
