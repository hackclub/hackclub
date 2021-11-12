# Field Report 

### Leader: Benjamin Smith 
### Workshop: Stressed Ball (A.K.A. Reverse Workshop 1)
### Location: Bellevue Big Picture School Hack Club, Bellevue, WA
### Date: Monday Nov. 8th, 2021
### Attendence: 3
### Written by: Tevan Goldberg

## Overview

Benjamin was the first club leader that volunteered to try out our 'reverse workshop,' and had a lot of good feedback for us. He runs a small club at his high school (which is also small) that has struggled with attendence, so he was treating it more as an independent study space for those that came. This was the first Hack Club workshop they actually did to completion, having previously tried the personal website workshop without garnering much interest. He gave a generally positive assessment of the workshop style, along with some specific critiques and deviations from our script. Benjamin spoke to Leo and Tevan for 30 minutes on Wednesday the 10th to debrief how the meeting went, which forms the basis of this write-up. 

## Meeting Flow

The three people attending the meeting had different skill levels and focuses: one was doing intro python tutorials, another taking himself through the Harvard CS 50 online course, and one person working on their own project in React Native. Benjamin himself is a fairly advanced coder and didn't have trouble grasping the concepts embedded in the stressed ball workshop (canvas, variables, javascript generally). 

Benjamin decided to forgo Leo's custom code editor and instead run the exercise on Replit in multiplayer mode. He did this to avoid jumping from person to person for troubleshooting, and also so that they could "benefit from each other's experimentation." This was the goal of having the shared notepad in the original workshop design. One of the issues with this approach was that the CS50 guy was more advanced than the Python person, so he ended up doing comparatively more and the less experienced coder didn't get as much out of it. Benjamin said that could have simply been a facilitation issue, or a consequence of the multiplayer mode. 

There were some issues at first with getting the canvas template working, HTML syntax errors, and their school computers inexplicably disabling the browser's developer tools, but otherwise they were able to essentially complete the exercise as we envisioned it, co-creating this result by the end: 


![final output](https://cloud-f3pr5mtch-hack-club-bot.vercel.app/0bellevue_ball.gif)

Their final code is viewable at this link: https://hackclub.github.io/live-editor/?file=recUdsHqfIeWEJMBm


One of their original contributions was writing a function to link the x and y coordinates of the circle with changing the circle's fill color, which is triggered whenever the circle bumps the edge of the canvas. They also created variables for the circle's speed, called 'dx' and 'dy,' which when increased certainly satisfy the 'stress' criterion...

Regarding the "just Google it" form of problem-solving we were attempting with this, Benjamin offered a mixed review. He liked that it resembled the real process that programmers go through to source information, but felt that they were led down a lot of blind alleys. The MDN Web Docs that they started with were a little too elaborate/confusing and they defaulted to W3 Schools as a simpler place to find relevant code. He felt that the workshop document was well-formatted but could have been either more or less prescriptive: It seemed like it was meant to be followed in steps, but those weren't numbered, and it only occurred to them at the end that they didn't need to follow the order exactly. 

Another recurring issue that surfaced for Benjamin was his club members not reading the workshop document closely enough. He occasionally had to explain things, like string interpolation (necessary for the color change function), which the workshop writeup explicitly mentioned.

They were able to finish the workshop with 20 minutes to spare in the meeting, so Benjamin suggested adding more topics to the workshop like increasing stroke and line width to the circle. His members expressed interest during the meeting of working on the project more, but no changes were made to the code afterwards. They may take it up in their next meeting. 


## Conclusions

We continue to be cautiously optimistic about this experimental approach to workshop design based on the limited feedback we've gotten so far. The real challenge lies in making these accessible and adaptable once Leo is not in the room. The fact that Benjamin was able to lead his club members towards a novel solution to the problem was encouraging, as was that he personally found the work enjoyable and playful. 

The lack of reading is both a design issue and a pedagogical one that has no simple solution. On the one hand, we have taken strides in reducing the amount of prose on the page to a minimum compared to earlier workshops, but find that it cannot be totally eliminated or else the direction is lost. I suspect one solution is to direct the workshop writing towards the club leader rather than attendee, who is more likely to read through it in advance of the meeting. However, close reading is a useful skill to practice in any discipline, so I think it's okay that club attendees learn the consequences of ignoring the fine print. Going forward leaders should anticipate this tendency and work around it. 

Finally, we are obviously experimenting with this write-up format as a way to record our changing thoughts on how to improve Hack Club meetings. The experience of digging in to the specifics with Benjamin verbally, then translating them into text, felt useful, if not a little elaborate. I will be paying close attention to see whether or not this is of benefit to anyone reading (if they read it). 
