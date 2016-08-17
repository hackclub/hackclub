# Operations

This directory contains files for Hack Club's day-to-day club operations -- i.e. facilitating our clubs. This directory must be regularly updated by staff and should be considered the source of truth for all things operations.

## Calls

The following files contain process documents on how to run our different operations calls.

1. [`calls/00_onboarding.md`](calls/00_onboarding.md) - Onboarding Call
2. [`calls/01_preparing_for_first_meeting.md`](calls/01_preparing_for_first_meeting.md) - Preparing for First Meeting

See [`calls/template.md`](calls/template.md) for a template for making more call process documents..

## Weekly Check-Ins

We use [Howdy](https://howdy.ai/) to do weekly check-ins with one club leader from each active club.

This check-in collects:

- Club attendance during the week
- The leader's confidence about the club's future on a 1-10 scale
- If anything is blocking their progress
- If there's anything Hack Club can be helpful with

It runs on Fridays at 1PM Pacific time.

### Setup

To add a club's leader to the weekly Howdy check-ins, just mark the column for Howdy check-ins on Streak as `TRUE` -- the only requirement is that they must have a Slack username set in Streak that starts with `@` (ex. `@zrl`). We've written an integration that automatically takes care of the rest.

To remove a club leader from the weekly check-ins, just mark the Howdy check-ins field as blank. Don't mark it as `FALSE`.

### Data Collection

Every week on Mondays, Dariana, our administrative assistant, goes into Howdy's dashboard and copies the data from the previous Friday's check-in to [this sheet](https://docs.google.com/spreadsheets/d/1XH3Vgst8el-9Wl5LE4mwchBa2IgUQUaiOcNlbD4eWsw/edit). This sheet is automatically pulled into our primary metrics analysis sheet and used to calculate metrics on clubs.
