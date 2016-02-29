## Why workshops?

Before getting into how to make a good workshop, let's start with a more basic
question: why run workshops in the first place?

In summer 2015, we ran a series of beginner coding camps, the theory being that
if we knew how to run a good summer program, we could take the lessons learned
and apply them to running Hack Clubs. At Hack Club, we want to take the
hackathon culture of learning how to build your own things, and bring that
culture back into schools. So at first we took a hands-off approach, explaining
about the growth mindset and encouraging people to do Google searches when they
didn't know how to do something.

But that didn't work very well. People basically commented, why were they
paying money to learn how to code, only to be told to Google it? Clearly we
needed something better. In later summer camp cohorts, we took a more
structured approach to teaching, and this worked much better. Then we took the
lessons we ran in the summer camp and wrote them down as workshops, so that
clubs could run these workshops worldwide!

## How are Hack Club workshops different?

So now you might be asking: why do we need to make our own workshops? Why not
just point club members to an existing learn-to-code website (which there are
many of)?

The answer to that is that we're not just trying to teach people how to code.
We're trying to teach people how to become self-learning hackers. It is common
for people to finish an online learn-to-code curriculum (or get a full-blown
computer science college degree, for that matter), and still not understand why
hacking together a project is so *fun*! We want to encourage the kind of
mentality where you just randomly decide to code up a project over the weekend
(for fun!) and brag about it to friends.

For example, when you're making your own project over the weekend, you don't
have a workshop page in front of you telling you how to solve your problem step
by step. So in our workshops, we try to teach people step-by-step how to Google
things when they're stuck. (Yeah I know, most of the workshops still don't do
this. If you want to help improve them, submit a pull request!) Likewise, if
there's a bug in your code, you have to know how to debug it by yourself. In
other words, we want people to reach the point where they *won't need*
workshops to continue the learning process, and this needs a different kind of
approach than your typical learn-how-to-code website.

Another issue unique to Hack Club is that many school computers are in a
locked-down configuration that prevents students from installing software, such
as Chromebooks. We've found that the only solution that works consistently
across schools is one where everything can be done through a web browser. This
is why we use [Cloud9](https://c9.io) in all of our workshops.

By the way, if you do know about an existing website that meets both of these
needs, please tell us on [Slack](https://starthackclub.slack.com/). Making new
workshops is a serious bottleneck right now, and it would be so awesome if we
didn't have to expend all this effort!

## How do I write an awesome workshop?

To be honest, none of us are experienced workshop writers, so we shouldn't try
to pretend to know more than we actually do. :smile:

The best way to write an awesome workshop is to just write a workshop, then
test it on friends to find how it can be improved! You will learn much more
from doing this than you would ever learn from reading detailed guidelines.

A few more things:

- We strongly recommend that you have club members develop in
  [Cloud9](https://c9.io) and deploy to [GitHub
  Pages](https://pages.github.com). See the [Personal
  Website](https://github.com/hackclub/hackclub/blob/master/workshops/personal_website/README.md)
  workshop for what the workflow looks like. This is to be consistent with the
  existing workflow that club members learn, and to play nice with the
  restrictions that school computers have.
- But if you're running a club where you know that isn't an issue, feel free to
  use different tools. For example, Zach Cmiel wrote an [iOS
  workshop](https://github.com/hackclub/hackclub/blob/master/workshops/swiper/README.md)
  for his club.
- Try to follow the format and directory structure of [existing
  workshops](https://github.com/hackclub/hackclub/tree/master/workshops/).
- Remember that we're Hack Club, not Theoretical Computer Science Club. Pick
  something that doesn't need too much programming knowledge to build, but that
  looks great when it's done. And try to teach how to learn on your own, such as
  how to Google things and debug issues in your code.
- We learned from experience that it's best to follow up workshops with extra
  time for club members to make their project into their own. So include some
  suggestions at the end for how to take the project further!
- Keep in mind that after-school meetings can't go on forever. Try to make your
  workshop take 1 hour or less to finish.
- If you want to reduce work for maintainers, try to follow this [style
  guide](https://github.com/hackclub/hackclub/blob/master/GUIDELINES.md#styleguides).
  But don't worry about it too much, because we will fix formatting issues for
  you before publishing your workshop.

When you're done, submit a [pull
request](https://github.com/hackclub/hackclub/pulls) and we'll take a look at
it.

Happy hacking!
