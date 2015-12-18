# GitHub Pages Workshop

Short link to this workshop: https://workshops.hackclub.io/github_pages

-------------------------------------------------------------------------------

Welcome! In this workshop you will set up a GitHub Pages Website!

To start you need to have completed the
<a href="https://github.com/hackclub/hackclub/tree/master/workshops/cloud9" target="_blank">
Cloud 9 Workshop</a>.

# What is GitHub Pages?

GitHub Pages is a way of using a GitHub repository to make a website. By the end
of the workshop you will have a link to get you to your website.

# What is a Repository?

A respository is a location (or folder) where code and other files can be
stored. The word `repository` is sometimes shortened to `repo`.

# Create a Repository

Make a repository following this format:

    (yourusername).github.io

So if your username is `supersam`, your repository would be `supersam.github.io`.

> ![](resources/createrepo.gif)

# Clone into Cloud9

Go into your Cloud9 workspace and choose an area to clone your repository. You
want to find the terminal that starts with "bash". If it isnt there open a new
terminal. (Instructions directly below)

Now that we have a place to put our code, we want to set up a way to edit our
code.

1. Get the link for cloning. It is on the right side of your repository. If you
   click the little icon, the link is now on your clipboard.

     > ![](http://goo.gl/BCQIQP)

2. Go into your Cloud9 workspace and open a new terminal (Alt+T, or Window > New
   Terminal).

     > ![](resources/openterm.gif)

3. In the terminal type: `git clone [then the link you just copied]`

     > ![](resources/clone.gif)

**Congrats! You can now edit and save in your repository!**

You should start creating the necessary files for a website. (`index.html`,
`style.css`, etc)

-------------------------------------------------------------------------------

# Part 2

In this part of the workshop, you will learn how to sync your Cloud9 data into
your GitHub Repository.

# Commiting and Publishing to GitHub

In this part of the workshop, you will learn how to put the code from Cloud9
into your GitHub repository.

### Commiting and Publishing to GitHub

After you make changes to your site on Cloud9 you will need to put the changes on
GitHub for the changes to show up on your site.

1. **Switch into your repo in the terminal**
 
        cd [repository name]

2. **Add your changes to the commit list by doing...**

        git add .

3. **Commit your changes with the following format**

        git commit -m "Here you type what the commit does. Keep the quotations."

    This will get your changes ready to push to GitHub

4. **Push your changes**

        git push

    It will ask for your username and password.
    Note: When you type your password it wont show up in the terminal.

# Let's Explain What you Just Did

You just used git to push your repository on Cloud9 to your repository on
GitHub.

**GitHub and git?**

Git is a tool for organizing the files in your repository, as well as moving
your repository between Cloud9 and GitHub. Because Git is only controlled
through the terminal, GitHub is a website that provides a user interface for git
(buttons and pictures instead of just text).

# So what is the URL?

The URL to your website is the same name as your repository so it should be
`[username].github.io`.

# Done!

Congrats! Now you can share the URL to anyone!

> ![](resources/celebrate.gif)

One last thing. Please click a rating below to rate this workshop. It'll only
take 3 seconds.

_How likely is it that you would recommend this workshop to a friend?_

| [1][r1] | [2][r2] | [3][r3] | [4][r4] | [5][r5] | [6][r6] | [7][r7] | [8][r8] | [9][r9] | [10][r10] |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | --------- |

[r1]: https://feedback-redir.hackclub.io/1owS9HKOg3zQEIJBZQOzTDuKfZcq4LGYMaUrsV8pBZZo?ip=entry.78173348&rfield=entry.559841237&r=1
[r2]: https://feedback-redir.hackclub.io/1owS9HKOg3zQEIJBZQOzTDuKfZcq4LGYMaUrsV8pBZZo?ip=entry.78173348&rfield=entry.559841237&r=2
[r3]: https://feedback-redir.hackclub.io/1owS9HKOg3zQEIJBZQOzTDuKfZcq4LGYMaUrsV8pBZZo?ip=entry.78173348&rfield=entry.559841237&r=3
[r4]: https://feedback-redir.hackclub.io/1owS9HKOg3zQEIJBZQOzTDuKfZcq4LGYMaUrsV8pBZZo?ip=entry.78173348&rfield=entry.559841237&r=4
[r5]: https://feedback-redir.hackclub.io/1owS9HKOg3zQEIJBZQOzTDuKfZcq4LGYMaUrsV8pBZZo?ip=entry.78173348&rfield=entry.559841237&r=5
[r6]: https://feedback-redir.hackclub.io/1owS9HKOg3zQEIJBZQOzTDuKfZcq4LGYMaUrsV8pBZZo?ip=entry.78173348&rfield=entry.559841237&r=6
[r7]: https://feedback-redir.hackclub.io/1owS9HKOg3zQEIJBZQOzTDuKfZcq4LGYMaUrsV8pBZZo?ip=entry.78173348&rfield=entry.559841237&r=7
[r8]: https://feedback-redir.hackclub.io/1owS9HKOg3zQEIJBZQOzTDuKfZcq4LGYMaUrsV8pBZZo?ip=entry.78173348&rfield=entry.559841237&r=8
[r9]: https://feedback-redir.hackclub.io/1owS9HKOg3zQEIJBZQOzTDuKfZcq4LGYMaUrsV8pBZZo?ip=entry.78173348&rfield=entry.559841237&r=9
[r10]: https://feedback-redir.hackclub.io/1owS9HKOg3zQEIJBZQOzTDuKfZcq4LGYMaUrsV8pBZZo?ip=entry.78173348&rfield=entry.559841237&r=10
