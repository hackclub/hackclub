---
name: 'Running a Sprig Workshop'
description: 'Spice up your club meetings or hackathon with Sprig.'
author: '@leomcelroy'
img: "https://user-images.githubusercontent.com/27078897/192053140-3bf9cc19-0aa4-4cdb-9845-e4fdf04f2286.jpg"
locales: 'es-xl, pt-br'
---

# Running a [Sprig](https://editor.sprig.hackclub.com) Workshop

<img width="500" alt="Screen Shot 2022-09-23 at 4 41 25 PM" src="https://user-images.githubusercontent.com/27078897/192053140-3bf9cc19-0aa4-4cdb-9845-e4fdf04f2286.jpg">

[Sprig](https://editor.sprig.hackclub.com/) is a tool developed by Hack Club to help people quickly get started making interesting tile-games. It's a tiny game engine embedded in a web-based editor with integrated art and music tools. If you build a game in Sprig and share it in the community gallery you can get a [Sprig Console](https://sprig.hackclub.com)!

> This workshop is designed to help club leaders use Sprig in their clubs. 
> If you are a solo hacker you can jump straight into the [Sprig editor](https://editor.sprig.hackclub.com).
> You may be able to pick up some helpful tips reading through this though.

<img width="500" alt="Screen Shot 2023-03-03 at 5 48 32 PM" src="https://cloud-guxu865fy-hack-club-bot.vercel.app/0image.png">

We designed Sprig to accomodate workshops with minimal instruction and maximal making and exploring. This is how I would run Sprig as a workshop.

## Demo (2 minutes)

Give a quick demonstration of a fairly complete game with accessible code. You can go to the [gallery](https://sprig.hackclub.com/gallery) and sort by the `beginner` tag.

<img width="500" alt="Screen Shot 2023-03-03 at 6 14 44 PM" src="https://cloud-9h10p1the-hack-club-bot.vercel.app/0image.png">

Here are a few games that meet the criteria:

- [Sokoban](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/sokoban.js)
- [Penguin Slide](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/penguin_slide.js)
- [Nomis](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/nomis.js)

## Account (2 minutes)

For that you and your club don't lose your files, we use an account system, here is the step by step:

1. Click on the "Log in" button at the top right of the page
<img width="500" alt="Screen Shot 2023-03-03 at 6 35 57 PM" src="https://cloud-c0fezx07u-hack-club-bot.vercel.app/0image.png">

2. Fill in the field with an email and then click on the "Send code" button
<img width="500" alt="Screen Shot 2023-03-03 at 6 40 41 PM" src="https://cloud-5tajrvzec-hack-club-bot.vercel.app/0image.png">

3. You will receive an email like this, then just put this code in the field "Code:"
<img width="500" alt="Screen Shot 2023-03-03 at 6 46 27 PM" src="https://cloud-3e970nukr-hack-club-bot.vercel.app/0image.png">

That's it! Your account is ready!

## Toolkit (3 minutes)

Open up the toolkit and quickly describe the different things you can do. The point here is not to explain every function. It's just to give people a sense of what is possible and where to look for help. Only spend a few minutes doing this! Check out [the snippet below](#toolkit) to survey essentially every function in Sprig.

Recent files are available in the "Your Games" page. They will always be saved in your account. **The most reliable way to save is to downlad the `js` file**.

To save, hit the automatically generated name:

<img width="500" alt="Screen Shot 2023-03-03 at 6 56 26 PM" src="https://cloud-n9033q1na-hack-club-bot.vercel.app/0image.png"> 

and add a name like so:
`my_sprig_game`


Then hit `menu > Download`
Don't forget to take note of where it was saved! 
**For those of you on school computers be aware that they often get wiped frequently**, so you'll want to save the link somewhere safe and off the computer, like to your email or on a cloud-based doc.



## Tell People to Get Hackin'! (rest of available workshop time)

Tell people to start by working through the [tutorial](https://editor.sprig.hackclub.com/?file=https://raw.githubusercontent.com/hackclub/sprig/main/games/getting_started.js).

After people complete the tutorial encourge them to start thinking of their own game. Often a good way to make and original game is to start with an existing one and adding a new mechanic to it. Check out the games tagged `hackable` to find remixable bases.

## Share (10 minutes)

Gather everyone's attention and have them share their games with you. Ask if anyone would like to demo their game to the group. Celebrate the work and use it as a chance for each person to get feedback, inspiration, and affirmation.

If the games are complete then [make a PR](https://sprig.hackclub.com/share) to submit them to the gallery and [earn a Sprig console](https://sprig.hackclub.com). 

If the games are not complete encourage people to keep working on them and plan to continue working in your next club meeting. 
You can also encourage people to share the games they have so far by posting links to those games in the [Sprig channel](https://hackclub.slack.com/archives/C02UN35M7LG) on Slack.
You can generate a link by navigating to the `share` -> `as link` option in the file menu, as seen below:

<img width="500" alt="Screen Shot 2023-03-03 at 6 18 29 PM" src="https://cloud-es6rq2rf2-hack-club-bot.vercel.app/0image.png" />

People could easily spend 3 or 4 club meetings working on games.

# Reference

<a name="toolkit">The toolkit</a> is essentially every function we added to Sprig, otherwise it's just JavaScript.
For more information on these functions check the `Show Help` menu in the Sprig editor.

```js
const player = "p";
const wall = "w";

setLegend(
    [ player, bitmap`.` ],
    [ wall, bitmap`.` ],
);

setBackground(wall);

const level = map`.`
setMap(level);

setSolids([ player, wall ]);
setPushables({
  [player]: [wall]
})

getFirst(spriteType);
getAll(spriteType);
getTile(x, y);
tilesWith(spriteType0, spriteType1, ...);
addSprite(x, y, spriteType);
clearTile(x, y);

addText("string", { x, y, color: [r, g, b] });

clearText();

onInput("w", () => {});
afterInput(() => {});

const melody = tune`...`
playTune(melody)
playTune(melody, 5)
const playback = playTune(melody, Infinity)
playback.end()

width();
height();
```


