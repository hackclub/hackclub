---
name: 'Hacking Kahoot'
description: 'A learning activity focused around the Kahoot API'
author: '@sampoder'
img: 'https://cloud-h0ul1djmv.vercel.app/0image.png'
---

Hey! This is an interactive activity for leaders to run with their clubs. 
It takes them through the process of using the [`kahoot.js-updated` npm module](https://www.npmjs.com/package/kahoot.js-updated) 
to control a Kahoot user with Node.js. The module is deprecated, but this workshop should still work.

A few quick pointers about the workshop:

- The workshop uses the challenge version of Kahoot as that is the most flexible
- The workshop is a slideshow, so you'll need a lot of energy to make the activity amazing.
- Be prepared to adapt and help people as they do the workshop

## Preparing

Now, here's a step by step guide on how to prepare for the activity on Kahoot.

First, you'll need to head to [kahoot.com](https://kahoot.com) and create an account.

Head to [this page](https://create.kahoot.it/v2/discover) and choose a Kahoot that you feel will attract your club members.

Click the `Play` button.

![Play button](https://cloud-lewnc6ao9.vercel.app/3screenshot_2020-12-10_at_10.42.35_pm.png)

Choose the option on the right.

![Option to pick](https://cloud-lewnc6ao9.vercel.app/2screenshot_2020-12-10_at_10.44.16_pm.png)

Configure them as per the following image and then click `Create`.

![Config window](https://cloud-lewnc6ao9.vercel.app/1screenshot_2020-12-10_at_10.44.43_pm.png)

Copy the Game PIN provided and keep it safe.

![Game PIN highlighted](https://cloud-lewnc6ao9.vercel.app/0screenshot_2020-12-10_at_10.45.27_pm.png)

Repeat this two more times.

Once you have your game codes you are ready.

## Executing

On the day, load the slideshow from [here](https://workshop-deck-playground.hackclub.dev/kahoot). 

Run the slideshow through, make sure to give the attendees time to type out their code. 

Make sure that the students **fork** the starter repo at: https://hack.af/kahoot-repl

When you reach the `Let's give it a go!` slide, pass your students the Kahoot code and let them run their programs. 
Load up Kahoot's reports tab and show the student's scores.

Then comes the challenge section. Begin by doing as the slides instruct. However, if you find the students are struggling load up the starter repl and add the following code:

```javascript
const Kahoot = require("kahoot.js-updated"); 
const client = new Kahoot();

client.join('000000', Math.random() + "- Your Name");

function verifyProperty(array, property) {
  let finalNo
  array.forEach(function(value, i) {
    if (value[property] === true) {finalNo = i}
  });
  return(finalNo)
}

client.on("QuizStart", () => {
  console.log("The quiz has started!");
});

client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});

client.on("QuestionStart", question => {
  console.log(question)
  question.answer(0);
});
```

This code is the code they should have created in the workshop + the helper function introduced in the slideshow. It loads in the Kahoot module and creates a new client. This client then joins the game with the pin of `000000` in this block and a random name. It then has the helper function that returns the index of an item in an array where the property provided is true. It then has a set up to log when the quiz starts and ends. Lastly, when it receives a question to answer it answers the first option.

Now work with your attendees, inspect the `question` object to find the choices option.

Then use the helper function and add the following code:

```javascript
client.on("QuestionStart", question => {
  question.answer(verifyProperty(question.choices, "correct"))
});
```

Have students write this code for themselves and then run a demo by providing your 2nd Game PIN.

Lastly, run the hacking section for students and do a demo for them. Be prepared to support the students.

Here are some samples:

- [Spam Kahoot with loads of new users](https://repl.it/@sampoder/spam-kahoooot), it repeats the join command 100 times or up until we get rate limited by Kahoot.
- [Send the Rick Roll lyrics to Kahoot](https://repl.it/@sampoder/rickroll-kahoot), it has a string of the song lyric and then splits that into an array and then loops over that array and joins with the username being a song lyric line.
- [A Custom Kahoot CLI](https://repl.it/@sampoder/kahoot-custom-client), when a new question comes in it presents the choice and then takes in user input for the answer.

Hope you enjoyed! Message me (@sampoder) on Slack if you need help / have feedback :D
