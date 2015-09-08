# Contributing to hackEDU

Contributions to hackEDU are very welcome, and strongly encouraged (even to this
document)!

## Doing it

We use a modified version of
[GitHub Flow](https://guides.github.com/introduction/flow/) at hackEDU. The only
difference is instead of deploying from a reviewed pull request, we merge first
and deploy straight from master.

Part of the GitHub Flow is submitting pull requests. See
https://help.github.com/articles/using-pull-requests/ for a good overview of
what pull requests are and how to use them. Internally, we use the _shared
repository model_ for collaborative development, though we encourage external
contributors to contribute through the _fork & pull model_.

When contributing, please pay attention to the commit format of other commits in
the repository.

### Style Guides

If a style guide exists for the language you're contributing in, please do the
maintainers of the repository a favor and follow it. If you notice anything that
deviates from our style guide, don't hesitate to submit a pull request to fix
it. It's very appreciated!

Our existing style guides:

- [Markdown](https://github.com/hackedu/meta/blob/master/markdown_style_guide.md)

## Naming conventions

### Branch names

Branch names should adhere to the following:

- All lowercase
- `-` as space separator for branch names

### File names

File names should follow the following guidelines:

- All lowercase
- `_` as space separator for file names
- `-` as a space separator for dates in file names
- Dates in `YY-MM-DD` format

## Using GitHub Issues

We use GitHub's built in issue tracker for nearly everything at hackEDU. We
recommend reading through https://guides.github.com/features/issues/ to get a
good idea of how to use GitHub Issues.

In addition to using vanilla GitHub Issues, we use kanban to manage our team's
workflow (see http://leankit.com/kanban/what-is-kanban/ for a good overview of
what kanban is). To do that with GitHub Issues, we use a neat tool called
[ZenHub](https://www.zenhub.io/) to organize our GitHub Issues on a kanban
board. If you go to any of our repos with ZenHub installed, you should see a
"Boards" button on the right sidebar, right under the "Code" button. If you
click it, you'll see our issues organized on a real-time kanban board.

## Getting to know git

If you aren't already familiar with git, here's a couple links we recommend
going through:

- Getting started: http://rogerdudler.github.io/git-guide/
- Understanding git (important!): https://youtu.be/1ffBJ4sVUb4

## Labs

This section will cover any contribution guidelines specific to
[Labs](meta/labs).

### Case Studies

Below is the recommended contribution flow for submitting
[case studies](case_studies/).

1. Go to [Cloud9](https://c9.io/) and open your "hackedu" workspace.
2. If you're not already on the `master` branch, switch to it.

        $ git checkout master

3. Update your hackEDU fork.

        $ git pull https://github.com/hackedu/hackedu.git

4. Create a new branch to add the case study to. Branch names should briefly
   describe the change being made. They should be lowercase and use dashes (`-`)
   instead of spaces. Since I'm adding the planning for our first meeting, I'm
   going to call this branch `add-first-meeting-planning`.

        $ git checkout -b add-first-meeting-planning

5. Open up the file you want to modify for the case study and make any
   additions/modifications. In this case, I'm going to open
   `case_studies/lowell_high_school/planning.md` and add some example planning
   to it.

    ![Adding some planning](https://i.imgur.com/HbM24cp.gif)

6. Tell git to add all of your changes (make sure you've saved all of your
   files).

        $ git add --all

7. Let's tell git to make a commit with our changes and attach a message to the
   commit. Your message should reflect the change being made. In this case,
   we're going to set the message to "Add Lowell first meeting planning." Change
   the message appropriately.

        $ git commit -m "Add Lowell first meeting planning."

8. Push our branch with our changes to GitHub. Replace
   `add-first-meeting-planning` with your branch name. Git will prompt you for
   your GitHub username and password. When you start typing your password, it'll
   look like nothing is happening -- don't worry, git is getting all of your
   keystrokes and is hiding them for your privacy. Just hit enter when you're
   done.

        $ git push -u origin add-first-meeting-planning

9. Go to your `hackedu` fork on GitHub (it's at
   `https://github.com/{username}/hackedu`, mine is at
   https://github.com/zachlatta/hackedu). You should see the following:

    ![Recently pushed branches notification](https://i.imgur.com/NOeQyBe.png)

10. Click the green "Compare & pull request" button to create a new pull
    request. If appropriate, modify the title of the pull request and further
    describe your changes in the description. Once you're ready, click "Create a
    pull request".
11. And you're done! Not too bad, huh? The pull request I created is over at
    https://github.com/hackedu/hackedu/pull/163.
