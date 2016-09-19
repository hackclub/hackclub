# Contributing to our Workshops

Any contributions to our workshops are _very_ welcome, even from beginners!

![](img/smart_dinosaur_docs.png)

## We Love Questions

Before we get started, if you ever have any questions about anything or just want to talk through something, you can reach us almost 24/7 on the `#curriculum` channel in our Slack ([click here](slack/) for instructions on joining).

## How to Contribute to the Workshops

There are three ways to contribute:

1. [Create an Issue](#create-an-issue)
2. [Improve an existing workshop](#improve-an-existing-workshop)
3. [Create a new workshop](#create-a-new-workshop)

### Create an Issue

If you notice any problems or have an idea for a feature, create a GitHub issue describing the improvement you want to see. Click [here](https://github.com/hackclub/hackclub/issues/new) to create a new GitHub issue.

### Improve an Existing Workshop

If you see an error in our workshops and want to do more than just create an issue, you can submit a pull request to fix the issue. A walkthrough of how to submit a pull request can be found [here](../CONTRIBUTING.md).

### Create a New Workshop

We also love contributions of new workshops! Make sure you've read through [`CONTRIBUTING.md`](../CONTRIBUTING.md) before you start though. We also highly recommend getting the input of the rest of the community in the [Slack](#we-love-questions).

Here are our instructions for making a workshop:

**Step 1: Creating the necessary files and folders:**

Before continuing, browse through the directory structure of some workshops like [Portfolio](portfolio) and [Dodge](dodge).

1. Make sure that you've followed the directions in [`CONTRIBUTING.md`](../CONTRIBUTING.md) and cloned the `hackclub` repo.
2. Create a directory with the name of the workshop in the [`workshops/`](../workshops) directory. The name of your workshop should only be one or two words like `soccer` or `remote_control`.
3. Inside the directory you just created, create a `README.md` file. You will be writing your workshop in this Markdown file. Feel free to create other Markdown files that you link to from your newly `README.md` (see [Dodge](dodge) as an example of a workshop that does this.
4. In addition to the `README.md`, you'll want to create a `metadata.yml` file inside your directory. This will contain a unique, random 8 character string, a name, and a description. Please look at [Personal Website](personal_website/metadata.yml) for an example.
5. In [`workshops/README.md`](README.md), add your workshop to the [Workshops list](README.md#the-list).

**Step 2: Create the workshop with the following requirements:**

- A learner can finish a workshop in 1 hour or less.
- By the end of the workshop, a learner will have finished building something that they can show their friends.
- Workshops are written in Markdown
- Workshops use GIFs to explain how to do things
- Workshops are written assuming that the learner will be following along in [Cloud9](https://c9.io), an online IDE. (We do this so that anyone with a web browser and an internet connection can use our curriculum)
- The workshop will have checkpoints in it that show working code examples inside of a [JS Bin](https://jsbin.com) examples. To create these JS Bins, use a tool we created, `jsbinctl`. Here is a link to [`jsbinctl`'s README](lib/jsbinctl/README.md)

**Step 3: Check that you've done the following:**

So you've finished writing a great workshop, and you're ready to make a pull request. Awesome! But before you do, make sure you've covered these items:

- [ ] All filenames follow the right conventions, and the files are in the right place. [Click here](../CONTRIBUTING.md) for an overview of our contribution guidelines.
- [ ] There is a `metadata.yml` file inside your directory.
- [ ] The workshop has been added to the list in `workshops/README.md`.

Great. Now, follow [these instructions](../CONTRIBUTING.md) on how to submit a pull request. After you've done that, make sure the CircleCI tests are all passing. If there are errors, click on "View Details" and see what the errors are. Common errors include:

- **[Line number] is over 80 chars!** Each line must be wrapped at 80 characters.
- **[Line number] has trailing whitespace!** Remove all whitespace at the end of a line, with the exception of the [two-char linebreak](https://github.com/hackclub/meta/blob/master/styleguides/markdown.md#general-conventions).
- **[word] is spelled incorrectly!** If it's misspelled, correct the spelling (it's case sensitive!). Otherwise, write a comment listing the words that need to be added to our dictionary of accepted words.
- **Other.** There are a lot of things that can be flagged, especially if you haven't completely adhered to our [styleguide](https://github.com/hackclub/meta/blob/master/styleguides/markdown.md), so take a look at that if you're getting a lot of errors.

**Intellectual property ownership of the workshop:**

Under our [license](../LICENSE), your contributions will be under the Creative Commons CC_BY-SA_LICENSE.
