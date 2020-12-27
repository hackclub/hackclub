---
name: 'Deploying Websites'
description: 'Deploying, hosting, using continuous deployment, custom domains and more'
author: '@aaryanporwal'
img: 'https://cloud-kv2ikdnkl.vercel.app/0image.png'
---

# Deploying, Hosting, Continuous Deployment and Custom Domains

In this workshop we'll be learning how to push your website on GitHub (A website that provides hosting for software development and version control using Git), hosting it on [Netlify](https://www.netlify.com) with a custom domain from [namecheap](https://www.namecheap.com).

## Part 1: The Prerequisites

1. A GitHub Account

2. Next, we need [GitHub's student developer pack](https://education.github.com/pack) for this Workshop so that we can take advantage of namecheap's free 1 year custom domain name, for this you can take advantage of Hack Club's [Hack Pack](https://toolbox.hackclub.com/hack_pack) to instantly get GitHub's student developer pack!

That's all we need for the workshop!

## Part 2: Create a React Website

In this workshop we'll be creating a boilerplate [react](https://reactjs.org) app but even simple HTML-CSS-JS website will have the same steps!

So, head over to [repl.it](https://repl.it) and sign up (you can also directly sign up using your GitHub account), then click on "New repl" and select "HTML, CSS, JS" from the dropdown and giving any name to it, and then click on "Create repl".

![Selecting html,css,js from language dropdown and clicking on create repl](https://cloud-cmhr0swki.vercel.app/0image.png)

You should see a similar screen:
![Repl.it workspace](https://cloud-8bei8bskq.vercel.app/0image.png)

Now in the bottom right black section above, click on "Shell":
![Selecting shell](https://cloud-jalq6znct.vercel.app/0image.png)

This is our repl.it instance's shell (or terminal), it should look like this:
![Shell screen](https://cloud-ifryxtexs.vercel.app/0image.png)

In the shell, type:

```sh
npx create-react-app my-awesome-app
cd my-awesome-app
``` 
It'll take 2-3 minutes for it to complete, this will essentially pull up boilerplate react code.

After the completion, you'll see a folder/directory in your repl.it instance which essentially is our react app!

Now let's initialize a git repo in our react app and make a commit, in your shell, type:

```sh
git init
git add .
git commit -m "Initial Commit"
```
This will throw an error, asking your name and e-mail id, to remove this error and make a commit, type:

```sh
git config --global user.email "<your email>"
git config --global user.name "your name>"
git commit -m "Initial Commit"
```

> Note that `npx create-react-app` command automatically makes a git repo and makes a commit for you, but this doesn't happen if you run it on repl.it

## Part 3: Pushing to GitHub

Now, let's create a new GitHub repo and upload your project to Github.

* Open [GitHub](https://www.github.com), sign-in and then click on the "New" button in the top left:
![New repo button](https://cloud-6hzctbqps.vercel.app/0image.png)

* Type the name of the app, and click the "create repository" button at the bottom of the screen:
![create repo](https://cloud-81cltkvfk.vercel.app/0image.png)

* After creating the repository, you should see the following screen:
	![Click on the clipboard sign on the push an existing repo code](https://cloud-98lmwa0ha.vercel.app/0image.png)
	Click on the clipboard sign on the right side of the "..or push an existing ..." to copy the code.

	The code we copied tells our repl.it's git where our "remote" or where should the git repository be "pushed" and to which branch should it be pushed.

* Next, head over to your repl.it instance and in the shell, `cd` into your react app directory and paste the code that we copied earlier in the shell:
![pasting the code in repl.it's shell](https://cloud-5tga58lvb.vercel.app/0image.png)

	After executing the code, git will ask for your GitHub's username and password, so type that and press enter.
	If you see the following screen, you've successfully uploaded your project on GitHub!
	![sucessfully uploaded on github](https://cloud-6q9f57u0d.vercel.app/0image.png)
You can refresh your GitHub repository page to see the changes too!

## Part 4: Set Up Netlify for Hosting

Next, log into [Netlify](www.netlify.com) (create an account if you haven’t already).

1. Click on “New site from Git”:
![Click on new site from git on netlify](https://cloud-ipr3ko8bo.vercel.app/0screenshot_2020-12-28_at_12.42.02_am.png)
2. On the next screen, select “GitHub”![select github](https://cloud-3p29symvo.vercel.app/0image.png)
3. Now, scroll down to find the GitHub repo for your app: ![select your repo](https://cloud-4jyvvb08t.vercel.app/0image.png)
4. Then, click on "Deploy Site", this will deploy your website on Netlify's CDN ![click deploy site](https://cloud-1lhe4c42f.vercel.app/0image.png)
5. Next, click on "Domain Settings" to add a custom domain to your deployment ![click domain settings](https://cloud-pdrxlnmln.vercel.app/0image.png)
6. In the Domain Settings, you can see a strange domain provided by Netlify, you can click on that to see how our react boilerplate looks like!

In the next part we'll add a custom domain to our app!

## Part 5: Custom Domain

First, get a free custom domain from [Namecheap Education](https://nc.me) using your GitHub account

Next, In your Netlify's Domain Setting screen:

1. Click on "Add custom domain"![click add custom domain](https://cloud-lsa9p1n9s.vercel.app/0image.png)
2. Type in a domain name for your website here and click "Verify" ![type a domain name and click verify](https://cloud-27kvllkf3.vercel.app/0image.png)
3. You'll see a prompt saying your domain already has an owner, click on "Yes, add domain" ![Click yes add domain](https://cloud-aywdrainn.vercel.app/0image.png)
4. Back on the Domain Settings screen, copy the `.app` link, we'll register this link with our domain on Namecheap.

Now, head over to `namecheap.com` and sign in with the account you got your custom domain and:

1. On the Dashboard, click on the `Manage` button ![click manage domain](https://cloud-7f5s0mcm5.vercel.app/0image.png)
2. Next, click on "Advanced DNS"![click advanced dns](https://cloud-b73r79wje.vercel.app/0image.png)
3. Click on "Add New Record" ![click add new record](https://cloud-fwd4l8geb.vercel.app/0image.png)
4. Choose CNAME from the dropdown, type "www" in the Host field and for the Value field, paste your `.app` link that Netlify gave you and hit the green check mark.![click green check mark](https://cloud-lt99artli.vercel.app/0image.png)
5. After some time, your Netlify's Domain Setting screen will show your domain in green, indicating everything is setup correctly!