# Workshops Arc

This document outlines our curriculum arc. In many ways, this is the syllabus
for Hack Club.

Hack Clubs are after-school high school clubs where people build things
together. They can almost be thought of as never-ending hackathons, where club
members come together twice a week (generally for ~1.5 hours) and work on
projects together. Throughout the school year, Hack Clubs go (and sometimes
host) hackathons, work on larger group projects, and---most importantly---build
a thriving community of hackers at their high schools.

While the goal with Hack Clubs is for most meetings to be free-form time where
hackers are working on projects together, we're actively developing a series of
open-source workshops to bring members from no experience to the point where
they can hack on projects.

Hackers use the following tools for workshops:

- [Cloud9](https://c9.io/) - development environment
- [GitHub](https://github.com/) - code host
  - All Hack Club development goes into a
    [GitHub Pages](https://pages.github.com/) repository called
    `[username].github.io` (replacing `[username]` with their GitHub username)
  - Each project done in Hack Club (so at least each workshop) goes into a
    sub-directory called `project_name` in the main `[username].github.io`
    project. The hackers should be regularly committing and pushing. For
    example, if I were doing the Portfolio workshop, I'd put my work in
    `[username].github.io/portfolio/`.

Below is the initial plan for the Hack Club workshop progression. The `Week #`
column is the week since the club's first meeting that the concept and workshop
should be run. `Meeting #` is the meeting that it should be run in. It assumes
that meetings happen twice a week and that every other meeting is free-form time
for hacking.

| Week # | Meeting # | Concept                       | Workshop (blank if not created yet) |
| ------ | --------- | ----------------------------- | ----------------------------------- |
|      1 |         1 | First code ever (HTML & CSS)  | [Portfolio][portfolio]              |
|      2 |         3 | Hack Club onboarding          |                                     |
|      2 |         3 | First JavaScript ever         | [Twilio][twilio]                    |
|      3 |         5 | Solidifying JavaScript basics |                                     |
|      4 |         7 | Loops & control structures    |                                     |

[portfolio]: portfolio/README.md
[twilio]: twilio/README.md

## Concept Arc

_Note: This section is still a work in progress and will be continually
updated_

The following is a listing of Hack Club's workshops. It breaks down which
Computer Science concepts will be used in which workshops.

**Workshop I: Personal Website**

- Writing HTML tags
- HTML tags go in order

**Workshop II: Twilio**

- Strings
- Variables can be used to store basic types
- String concatenation
- Functions can be used with inputs
- Introduce the idea that code runs in order

**Workshop III: To Be Decided**

- Emphasize that code runs in order
- Emphasize that string concatenation is a form of syntactic sugar
- Functions can be used to generate outputs
- Variables can be used to store outputs of functions
- Functions can have both outputs and side effects
- Function can have no inputs
- Functions can be used as a form of abstraction

**Workshop IV: To Be Decided**

- Variables can store anything (arrays, numbers, strings, etc.)
- True / false
- Conditionals
- Objects have properties that can be read
- Objects can have properties that are functions

**Workshop V: To Be Decided**

- Loops

**Workshop VI: To Be Decided**

_This workshop may be moved up_

- Arrays
- Array iteration

**Workshop VII: To Be Decided**

- Functions can be created
- Functions can be created with no inputs
- Functions can be created that take inputs
- Functions can be created that have outputs
- The life cycle of a function is the following
  - Definition
  - Calling
  - Outputting
- Function best practices
  - Give each function exactly one job.
  - Don’t repeat yourself (DRY).  Implement a process just once, but execute it
    many times.
  - Define functions generally.
- Variable scope

**Workshop VIII: To Be Decided**

- Function callbacks
- Objects have properties that can be modified
- Objects can be created
- Objects have properties that can be created

**Concepts Not Yet Allocated**

- Numbers
- HTML elements can have classes and ids
- HTML tags can be nested
- HTML uses the box model
- CSS Frameworks
