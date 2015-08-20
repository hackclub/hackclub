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

### Good Pull Requests

Our workflow says that the `master` branch of all of our repositories is the
golden branch from which all development is based off of. As a result, we try to
keep the history of the `master` branch as simple and understandable as
possible.

In order to keep the `master` branch easy to navigate, we ask all contributors
(including ourselves!) to squash commits down to a few, or one, discrete
changesets before submitting a pull request. Fixing a bug will usually only need
one commit, but a larger feature may make more sense to track through a few
small, understandable commits.

We recommend taking a look at
https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history
on changing your git history to create high-quality pull requests.

#### Good Commit Messages

We value the quality of commit messages for two primary reasons (from
[here](https://github.com/erlang/otp/wiki/Writing-good-commit-messages)):

- To speed up the reviewing process.
- To help the future maintainers of hackEDU (it could be you!), say five years
  into the future, find out why a particular change was made to the code or why
  a specific feature was added.

We recommend taking a look at
https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message and
http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html on writing
good commit messages.

### Style Guides

If a style guide exists for the language you're contributing in, please do the
maintainers of the repository a favor and follow it. If you notice anything that
deviates from our style guide, don't hesitate to submit a pull request to fix
it. It's very appreciated!

Our existing style guides:

- [Markdown](https://github.com/hackedu/meta/blob/master/markdown_style_guide.md)

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
