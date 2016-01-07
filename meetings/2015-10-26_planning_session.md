# 10.26.15 Planning Session

_Attendees:_

- Dave Fontenot
- Jonathan Leung
- Zach Latta

## Last Week Recap

### Curriculum

- [ ] ~~Ship MVP of "How to build workshops" (@MaxWofford, hackedu/meta#221)~~

### Community

- [x] Create script to quantify hackEDU Leaders group activity #258 (@hellyeah,
  hackedu/hackedu#258)
- [ ] Get at least 3 clubs submitting feedback to Packrat (@hellyeah,
  hackedu/hackedu#373)
  - _Update:_ Did not get done, Dave wants to focus on this this week

### Technical

- [ ] Packrat authentication flow should be reworked (@MaxWofford,
  hackedu/packrat#76)
- [ ] Packrat attendance should be visible on feedback forms (@MaxWofford,
  hackedu/packrat#75)
- [x] Collect missing phone numbers (@zachlatta, hackedu/packrat#77)
- [x] IRC <> Slack integration (@zachlatta, hackedu/meta#209)
- [ ] Markcop refactor (@MaxWofford, hackedu/markcop#13)
- [ ] Extra Markcop checks (ex. double newlines) (@MaxWofford,
  hackedu/markcop#11, hackedu/markcop#12, hackedu/markcop#14,
  hackedu/markcop#15)

### Meta

- [x] Add new rows for clubs meeting this week and remove cancelled meetings
  from https://clubs.hackedu.us (@jonleung, hackedu/meta#223)
- [x] Check in with club leaders and add their planned curriculum for this week
  (10.19) to the Meetings sheet in https://clubs.hackedu.us (@jonleung,
  hackedu/meta#224)
  - _Update:_ Did as much as possible, not everyone responded
- [ ] Merge https://github.com/hackedu/hackedu/issues/267 (@jonleung,
  hackedu/hackedu#267)
- [x] Reschedule semester planning session to Tuesday (~~10/20~~ 10/27) and book
  room (@zachlatta, hackedu/meta#229)
- [x] Add Who's Leading Standups in the title of the standup event (@zachlatta,
  hackedu/meta#230)
- [x] Make sure https://github.com/hackedu/hackedu/issues/364 gets done
  (@zachlatta)
- [ ] Everyone reads
  http://images.info.leankit.com/Web/LeanKitInc/%7B3128bbd1-0602-4459-8b2c-6efe02cdc1b9%7D_LeanKit-Kanban_Roadmap-2015.pdf
  (@jonleung, hackedu/meta#228)
- [ ] Follow-up Logan foundation report (@zachlatta, hackedu/meta#222)
- [x] Rename case study folders (@zachlatta, hackedu/hackedu#379)
- [ ] ~~Update HackingEDU spreadsheet to make it private (@jonleung)~~
    - _Cancelled because many people have already been shared the link and
      making the sheet private might remove access for important people_

/cc @hellyeah @jonleung @MaxWofford

-------------------------------------------------------------------------------

EDIT by @MaxWofford: Cancelled hackedu/meta#221

## Suggested Objectives for This Week

### Dave

- Figure out how to get feedback from club leaders this week
  - Build a Twilio/Sendgrid tool
    - Use Twilio workshop to fake the tool rather than manually building it
  - Get every club leader to pass around a paper attendance sheet
- Talk to Soylent about in-kind donation
- Adopt code of conduct
- Get every cohort 2 labs leader to message Slack

### Jonathan

- Clean up cancelled club meetings in meetings sheet and create new rows.
- Check in with club leaders and add their planned curriculum for this week
  (10.26) to the Meetings sheet in https://clubs.hackedu.us (@jonleung)
- Workshop - https://github.com/hackedu/hackedu/issues/339
- Backlog
  - Synthesize Club Leader Feedback
  - Prototype Curriculum / General Portal

### Max

- Dockerize Markcop
- Select 3 clubs for focusing on feedback
  - These clubs will read over https://github.com/hackedu/hackedu/pull/396
  - The clubs will work 1-on-1 with a core team member from Hack Camp to
    implement the feedback form system that was used.
- Select 3 clubs for focusing on case studies
  - These clubs will work 1-on-1 with a core team member to submit a case study
  - The club can submit their case study through any medium (ex. Google Docs),
    and the core team member will convert to markdown and PR the study
  - This test will be to separate the variables of our case study submission
    flow. A successful run of this test will tell us if the largest pain-point
    for club leaders is the documentation itself, or the github PR flow of
    documentation.
- Issues carried over
  - Refactor Markcop (blocking)

### Zach

For discussion:

- Slack or IRC? https://github.com/hackedu/meta/issues/214
- Fork for any PRs? https://github.com/hackedu/hackedu/issues/230

To do:

- Add license to hackedu/hackedu https://github.com/hackedu/hackedu/issues/260
- 2 space indent in styleguide https://github.com/hackedu/meta/issues/152
- Add license to hackedu/hack-camp https://github.com/hackedu/hack-camp/issues/529
- Logan grant proposal https://github.com/hackedu/meta/issues/231
- Read kanban roadmap https://github.com/hackedu/meta/issues/225

Jonathan:

- Add missing clubs in the Airtable to https://clubs.hackedu.us
  https://github.com/hackedu/hackedu/issues/264

## Discussion Points

- Slack or IRC? https://github.com/hackedu/meta/issues/214
  - Move to Slack, but do this next week
- Fork for any PRs? https://github.com/hackedu/hackedu/issues/230
  - Let's do it.
- Change team lunch to something after work
  - Cancel team lunch, discuss this over text
- Working Sunday
  - Start doing this week of the 2nd
- How's help feeling
  - Dave: yes, Jonathan: somewhat yes, Zach: neutral
- Migrate Next Week issues

## Finalized Objectives for the Week

### Community

- [ ] Each member of the team takes three clubs and works with them to get
  attendance, feedback, and, case studies for this week and next (@zachlatta,
  hackedu/meta#244)
- [ ] Get every cohort 2 labs leader to message Slack (@hellyeah,
  hackedu/hackedu#419)

### Curriculum

- [ ] Create workshop (@jonleung, hackedu/hackedu#339)
- [ ] Backlog
  - [ ] Prototype curriculum / general portal (@jonleung, hackedu/hackedu#421)

### Technical

- [ ] Dockerize Markcop (@zachlatta, hackedu/markcop#19)
- [ ] Refactor Markcop (@MaxWofford, hackedu/markcop#13)

### Meta

- [ ] Logan grant proposal (@zachlatta, hackedu/meta#231)
- [ ] Cancel team lunch (@zachlatta)
- [ ] Talk to Soylent about in-kind donation (@hellyeah, hackedu/meta#236)
- [ ] Adopt code of conduct (@hellyeah, hackedu/meta#117)
- [ ] Clean up cancelled club meetings in meetings sheet and create new rows
  (@jonleung, hackedu/meta#241)
- [ ] Check in with club leaders and add their planned curriculum for this week
  (10.26) to the Meetings sheet in https://clubs.hackedu.us (@jonleung,
  hackedu/meta#242)
- [ ] Everyone works from a fork this week (@zachlatta, hackedu/meta#249)
- [ ] Everyone reads
  http://images.info.leankit.com/Web/LeanKitInc/%7B3128bbd1-0602-4459-8b2c-6efe02cdc1b9%7D_LeanKit-Kanban_Roadmap-2015.pdf
  (@jonleung, hackedu/meta#228)
- [ ] Add license to hackedu/hackedu (@zachlatta, hackedu/hackedu#260)
- [ ] 2 space indent in styleguide (@zachlatta, hackedu/meta#152)
- [ ] Add license to hackedu/hack-camp (@zachlatta, hackedu/hack-camp#529)
- [ ] Add missing clubs in the Airtable to https://clubs.hackedu.us (@zachlatta,
  hackedu/hackedu#264)
- [ ] Backlog
  - [ ] Synthesize club leader feedback (@jonleung, hackedu/meta#212)
