# Hack Club's Internals [![Circle CI](https://circleci.com/gh/hackclub/meta.svg?style=svg)](https://circleci.com/gh/hackclub/meta)

Welcome! This is our internal repo we use for running [Hack Club](https://hackclub.com), warts and all. We're excited to have you involved.

Links:

- [GitHub Teams](github_teams.md) - How we manage our GitHub teams
- Protocols
  - [Hiring](hiring_protocol.md)
  - [Club leader onboarding](club_leader_onboarding_protocol.md)
  - [Staff onboarding](staff_onboarding_protocol.md)
- Styleguides
  - [Markdown](styleguides/markdown.md)
  - [English](styleguides/english.md)
  - [CSS](styleguides/css.md)
- Other directories
  - [Applications](applications)
  - [Contracts](contracts)
  - [Fundraising](fundraising)
  - [Ideas](ideas)
  - [Labs](labs)
  - [Logos](logos)
  - [Meeting notes](meetings)
  - [Positions](positions)
  - [Scripts](scripts)
  - [Updates](updates)
  - [The Hack Series](the_hack_series)

## Staff

These are the people who are officially part of the organization, but we want you involved as well!

| Name                | Position            | Link                          | Email                 |
| ------------------- | ------------------- | ----------------------------- | --------------------- |
| Harrison Shoebridge | Intern              | https://harrison.tech         | harrison@hackclub.com |
| Max Wofford         | Technical Fellow    | https://github.com/MaxWofford | max@hackclub.com      |
| Zach Bruggeman      | Curriculum Engineer | https://bruggie.com/          | zachb@hackclub.com    |
| Zach Latta          | Executive Director  | https://zachlatta.com         | zach@hackclub.com     |

## Mission

Our mission is to provide every student, regardless of ethnicity, gender, or socioeconomic status, the opportunity to experience the joys of building things with code through after-school coding clubs.

## What Do We Actually Do?

We provide everything high schoolers need to start an awesome club. In reality this comes down to three things: content, community, and partnerships. We assume leaders have some some coding experience.

### Content

- Club guide that covers steps to organizing a new club from conception to first few meetings
- Minute-by-minute meeting guidelines
- Template slideshows for meetings
- Curriculum to run in meetings
- Marketing materials to promote your club (posters, stickers, etc)

### Community

Community is primarily through our Slack.

What you get out of it as a leader:

- Group of people to go to for help who have ran into the exact same issues as you
- Opportunity to run cross-club events/initiatives, especially if you're in an area that has a high concentration on clubs.

As a member:

- Group of people to get help from when you're stuck writing code

### Partnerships

- Hackathons & events for your club to go to
- Free tools & other software resources for your club

## Appeal of Clubs

Why clubs in the first place?

- Avoids the red tape associated with starting an analogous computer science program at a school
- Student-led. By students, for students.
- Don't have to abide by any curriculum standards. Do interesting stuff every single meeting without worrying about achieving a third-party's goal.
- Low commitment for members. Don't have to worry about committing to something you're unsure about for an entire year (like you'd have to do to join a computer science class). Just go to one meeting and see if you like it.

### What Makes a Club Compelling for Members?

Every good meeting should leave members feeling like they're:

- Discovering something new every meeting
- Discovering a new ability in yourself every meeting / making progress or recognizing progress in yourself (probably in the form of a finished product/shipping something)
- Having a group of likeminded people around you also growing with you who also inspire you to grow

### What Makes a Club Compelling for Leaders?

Why run a club at your high school?

- Build the community you wished existed at your high school

# Timeline

- **March - June:** Run one club in SF ourselves until end of school year
- **June:** Have the curriculum plan complete (with content) by June (use the club we're running to build it)
- **June - August:** Run Hack Camp again
  - Venue
  - Students
    - Marketing to them
    - Gathering good candidates?
  - People to run it
- **August - December:** Onboard a ton of clubs in the fall
  - Numbers
    - 5 in August (could do it regionally, all of these could be in the Bay Area or Chicago?)
    - 30 in September
    - 50 in October
    - 50 in November
    - ???
  - Idea: have club leaders onboard new clubs. Could do it regionally, so new clubs in regions have mentors in the area that they know. The people onboarding the clubs could also host events for them. We could have check-in calls with the leaders onboarding clubs.

## Events

### Hack Club Events

- **November & March:** Mid-semester demos (regional)
  - Could be good even if clubs are at different stages just because it shows what you can reach
- **April or May:** End of year exhibition/competition
  - global, online
  - possibly livestreaming demos (twitch-style, maybe? of people playing the demos?) for 24h or something
  - voting for winners -&gt; prizes?

### Non-Hack Club Events

- **November:** CodeDay
- **January:** CodeDay
- **May:** CodeDay
- **Throughout the year:** any hackathon(s) of choice (depending on location and availability)

## Long-Term Goals

- Work with teachers/educators? Maybe turn our curriculum into a class?
- Create better end of year shows?

## Metrics

- _Quantity_
  - Weekly attendance
    - Vanity
    - Number of clubs
- _Quality_
  - Projects shipped
    - Median projects per member

# Curriculum Plan

Note: this assumes that many clubs can only meet once a week. For clubs that decide to meet twice a week, this can be modified to introduce extra hacking time, or to combine a couple of the easier weeks into one.

## Meeting 1 - "Introduction & Personal Website"

Intro, discover member interests, get leaders started, introducing the workshops and "schedule" and stuff

We'll be providing a strict structure for this, so that these first-time leaders can feel confident doing this first meeting. This'll provide a nice confidence boost for the leaders.

We'll also be doing the Personal Website workshop, which will get members set up on their GitHub and Cloud9 accounts.

## Meetings 2-3 - "Coding Is..."

### Coding is...

1. In things you wouldn't expect
2. Useful in everyday life
3. Something you can play with

Less technical

Less concepts

More inspirational

They do workshops that walk members through the process of building something cool. They demo what they've built so far in meeting 3.

## Meeting 4 - 5 - "Hack Day & Demo #1"

This'll be the first Hack Day. Members will be challenged to build something of their own (and given examples of stuff other people have built). Can be anything – either related to previous workshops or not.

Meeting 4 will be the first Hack Day. Meeting 5 will pick up where 4 left off and will conclude in demos. Ideally pizza or something similar will be at meeting 5.

## Meetings 6-8 - "Deep Dive #1"

In depth on how to do a concept

Current working plan is a text adventure. Structure will look something like this:

1. Write the story using Twine, with its basic syntax and macro features. Serves to let the member mostly focus on a story, and not worry about tons of computer science stuff thrown at them at the same time.
2. Recreating their Twine story using basic HTML, by creating a bunch of pages and linking them together
3. Recreating/adding to their story by using CSS and JS, including inlining all the story into one file, and navigable with some basic jQuery.

We'll recommend some hacking time as well, so users can try adding more interactivity with JS, or extra styling for specific sections or whatever. Demo too. Not a fully fledged hack week at this point though

## Meetings 9-10 - "Deep Dive #2"

Different, more complex topic, now covered in two weeks, since the first deep dive will have gone over a lot of basics using one concept.

Introduce interfacing with an API for use in week 9 (see below)

Short hack+demo as before

## Meeting 11 - 12 - "Second Hack Day"

- Hack week (no new concepts) with party
- Try to combine everything you've learned, or build on something from before
- Encourage larger group collaborations, either with creating 1 large project together, or creating a bunch of small things. Overall, a very abstract week, used to encourage members to build on everything they've done for the past ~8-9 weeks.
- Do demos, like in the first Hack Day

Recommend: demo day! pizza! special guests!

## Meeting 13, 14, 15 - "Electives"

Having done the hack week, the members should feel confident in creating new things. We'll be creating a bunch of more abstract resources that aren't strictly tutorials, but are more ideas of things to create, and how to go about doing them. We'll potentially introduce new languages, new concepts, just a bunch of kinda crazy stuff. These can kinda be seen as "individual studies", since people can choose from a bunch of concepts. Members can still work together though.

## Post Meeting 15

Members have now "finished" our curriculum! This will have been after about 4 months, so members should feel pretty comfortable with coding. We'll still be creating resources for post week 15, but they'll be lots of experimental things, and stuff that assumes some knowledge, or potentially stuff we'd want feedback on. Other things these clubs could do:

- Organize a hackathon together, instead of having a traditional meeting for that week
- Work together as a club to create a workshop, for whatever skill level they choose
- Bring in guest speakers from local companies, or have speakers over a video call or whatever
- Any sort of side projects they may have started working on, and maybe want to get other involved in
- Open-source contributions? That'd be cool, I guess

## Contact

If you'd like to reach all of us, please send an email to team@hackclub.com :-).

## License

In the [LICENSE](LICENSE) file (MIT, [tl;dr](https://tldrlegal.com/license/mit-license)).
