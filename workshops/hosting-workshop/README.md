---
name: 'Deploying Websites'
description: 'Deploying, hosting, using continuous deployment, custom domains and more'
author: '@aaryanporwal'
img: 'https://cloud-kv2ikdnkl.vercel.app/0image.png'
---

# Deploying, Hosting, Continuous Deployment and Custom Domains

In this workshop we'll be learning how to push your website on GitHub (A website that provides hosting for software development and version control using Git), hosting it on [Netlify](https://www.netlify.com) with a custom domain from [namecheap](https://www.namecheap.com).

## Part 1: The Prerequisites

1. A GitHub Account (it's just as easy as signing up for any other website!)

2. Next, we need [GitHub's student developer pack](https://education.github.com/pack) for this Workshop so that we can take advantage of namecheap's free 1 year custom domain name, for this you can take advantage of Hack Club's [Hack Pack](https://toolbox.hackclub.com/hack_pack) to instantly get GitHub's student developer pack!

3. A little knowledge about Git, a Version Control System.

That's all we need for this workshop!

## Part 2: Create a React Website

In this workshop we'll be using a boilerplate [react](https://reactjs.org) app.

> If you already have a website ready, you can directly skip to Part 3

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

Now, let's create a new [GitHub repo](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-repositories) and upload your project to Github.

* Open [GitHub](https://www.github.com), sign-in, and then click on the "New" button in the top left:
![New repo button](https://cloud-gclk7n9uy.vercel.app/0gh-new-repo.png)

* Type a unique name (there shouldn't be an existing repository with the same name) for the repository, and click the "create repository" button at the bottom of the screen:
![create repo](https://cloud-81cltkvfk.vercel.app/0image.png)

* After creating the repository, you should see the following screen:
 ![Click on the clipboard sign on the push an existing repo code](https://cloud-98lmwa0ha.vercel.app/0image.png)
 Click on the clipboard sign on the right side of the "..or push an existing ..." to copy the code.

 >The code we copied tells our repl.it's git where our "remote" is or in other words, where and on which branch should the git repository be "pushed".

* Next, head over to your repl.it instance and in the shell, `cd` into your react app directory and paste the code that we copied earlier from GitHub:
![pasting the code in repl.it's shell](https://cloud-5tga58lvb.vercel.app/0image.png)

	After executing the code, git will ask for your GitHub's username and password, so type that and press enter.

	If you see the following screen, you've successfully uploaded your project on GitHub!
	![sucessfully uploaded on github](https://cloud-6q9f57u0d.vercel.app/0image.png)
	
Refresh your repository's page on GitHub and make sure the changes are reflected there as well!

## Part 4: Set Up Netlify for Hosting

*Netlify* is a "web hosting service", where we just point where our website is hosted and it can instantaneously deploy our website on the web (with it's own custom domain which we can easily share with anyone for getting suggestions from your teammates!)

Netlify and other similar services (like Vercel, Firebase, AWS Lambda and Azure Serverless) are also known as "Serverless WebHost", which essentially abstracts away the complications of working with backend architecture. In simple words it's like pawning off the complicated work to a third party so that the you the user can focus on *shipping* more.

Now, log into [Netlify](www.netlify.com) (create an account if you haven’t already).

1. Click on “New site from Git”:
![Click on new site from git on netlify](https://cloud-ipr3ko8bo.vercel.app/0screenshot_2020-12-28_at_12.42.02_am.png)
2. On the next screen, we'll be telling Netlify where our project is located at, so select “GitHub”![select github](https://cloud-3p29symvo.vercel.app/0image.png)
3. Now, scroll down to find the GitHub repo for your app: ![select your repo](https://cloud-4jyvvb08t.vercel.app/0image.png)
4. Then, click on "Deploy Site", this will deploy your website on Netlify's CDN ![click deploy site](https://cloud-1lhe4c42f.vercel.app/0image.png)
5. Next, click on "Domain Settings" to add a custom domain to your deployment ![click domain settings](https://cloud-pdrxlnmln.vercel.app/0image.png)
6. In the Domain Settings, you can see a strange domain provided by Netlify, you can click on that to see how your project looks like!

In the next part we'll add a custom domain to our app!

## Part 5: Custom Domain

Well, we did see a domain for our website on Netlify, but well it sucks, seriously, if I asked you to close your eyes and repeat back the domain address, you probably couldn’t. But don't worry Custom Domains are our saviours here!
First, get a free one year custom domain from [Namecheap Education](https://nc.me) using your GitHub account.

Next, In your Netlify's Domain Setting screen:

1. Click on "Add custom domain"![click add custom domain](https://cloud-lsa9p1n9s.vercel.app/0image.png)
2. Type in a domain name for your website here and click "Verify" ![type a domain name and click verify](https://cloud-27kvllkf3.vercel.app/0image.png)
3. You'll see a prompt saying your domain already has an owner, click on "Yes, add domain" ![Click yes add domain](https://cloud-aywdrainn.vercel.app/0image.png)
4. Back on the Domain Settings screen, copy the `.app` link, we'll register this link with our domain on Namecheap.

Now, sign in to`namecheap.com` with the account you got your custom domain from so that we can add the *DNS Records*, think of records as the postage information you use to make sure your email is directed to the right place:

1. On the Dashboard, click on the `Manage` button ![click manage domain](https://cloud-7f5s0mcm5.vercel.app/0image.png)
2. Next, click on "Advanced DNS"![click advanced dns](https://cloud-b73r79wje.vercel.app/0image.png)
3. Click on "Add New Record" ![click add new record](https://cloud-fwd4l8geb.vercel.app/0image.png)
4. Choose CNAME from the dropdown, type "www" in the Host field and for the Value field, paste your `.app` link that Netlify gave you, leave the TTL field to default "Automatic" and hit the green check mark.![click green check mark](https://cloud-lt99artli.vercel.app/0image.png)

 > Canonical Name record (CNAME Record)—can be used to alias a hostname to another hostname (in our case we aliased our Netlify's hostname). When a DNS client requests a record that contains a CNAME, which points to another hostname, the DNS resolution process is repeated with the new hostname.

5. After some time, your Netlify's Domain Setting screen will show your domain in green, indicating everything is setup correctly!

Now head over to your browser's address bar and type in your new domain and flex it off! 🕺

### Where Can You Go From Here

 1. **[Subdomains](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/)**: (they're like `word.example.com`). Most websites are set up so that if you type `example.com` into a browser, you'll be redirected to `www.example.com`. It's actually a technical process to connect your root domain to the `www` domain. Subdomains will improve your search ranking and website traffic significantly. Search engines recognize subdomains as completely separate web addresses from your root domain.

 2. **[Custom Email Address Forwading](https://www.namecheap.com/support/knowledgebase/article.aspx/308/2214/how-to-set-up-free-email-forwarding/)**: Having your own domain on email address is really important if you want to create a professional brand image and credibility. There are email services that let you do this for a monthly fee (G-Suite for example) But for a small website or business that doesn’t have much email traffic, paying $6-10 every month just to have a custom domain email seems not worth it.
   So a lot of domain prodiders like namecheap provide "Free Email Forwarding", basically it’s the same as using your custom domain email address as an alias for your personal email account. For example, when someone send an email to `johndoe@yourdomain.com` it will be forwarded to `johndoe@gmail.com`, pretty cool, right?

### Important Links

* [www vs non-www URL](https://seranking.com/blog/www-vs-non-www/)
* [Netlify Docs for custom domains](https://docs.netlify.com/domains-https/custom-domains/)
* [What's SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO)

### THE END :)

In this workshop we skimmed through a lot of topics, so take your own time, and understand stuff better. There are a few points I'd like to mention though:

In the workshop we put our website's code in a repository on GitHub that was public, so essentially anyone can copy the website, and that can be harmful, so there are two solutions for this:

One is that if you want to make your website Open Source (that is want the source code to be open to public), you can choose amongst one of the Open Source Licenses. To help with this, GitHub and the community made this awesome website that you can check out [here](https://choosealicense.com).

Other is that if you want to make your website Closed Source (that is don't want the source code to be open to public), you can simply make your GitHub repository private.

**Happy Hacking!**
