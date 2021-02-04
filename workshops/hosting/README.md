---
name: 'Deploying Websites'
description: 'Deploying, hosting, using continuous deployment, custom domains and more'
author: '@aaryanporwal'
img: 'https://cloud-kv2ikdnkl.vercel.app/0image.png'
---

In this workshop we'll be learning how to push your website on GitHub (a website that provides hosting for software development and version control using Git), and host it on [Netlify](https://www.netlify.com) with a custom domain from [Namecheap](https://www.namecheap.com).

<details>

<summary>Some terms you should know:</summary>

**Deploying**: The process of packaging and installing the code to production environment (the final environment/work that is ready to be publicly available) is called “deployment”, and in the context of a web application that would be “web deployment”.

**Hosting**: Hosting is essentially the process of uploading your code on a remote server (like GitHub, GitLab etc.)

**Continuous Deployment**: Continuous deployment is a strategy for software releases wherein any code commit is automatically released (or deployed) into the production environment. It aims at building, testing, and releasing software with greater speed and frequency.

**Custom Domains**: A custom domain is a unique branded label that's connected to the IP address of a website. Like `172.217.160.238` is [one of the IP addresses of Google search](https://www.lifewire.com/what-is-the-ip-address-of-google-818153) and the custom domain that's connected to it is : `google.com`

</details>

## Part 1: The Prerequisites

1. A GitHub Account (it's just as easy as signing up for any other website!)

2. Next, we need [GitHub's student developer pack](https://education.github.com/pack) for this workshop so that we can take advantage of Namecheap's free 1 year custom domain name. You can use Hack Club's [Hack Pack](https://toolbox.hackclub.com/hack_pack) to instantly get approved for GitHub's student developer pack!

3. A little knowledge about Git, a [Version Control System](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjH7_P0vrTuAhUq8HMBHVoED4EQFjAHegQICBAC&url=https%3A%2F%2Fgit-scm.com%2Fbook%2Fen%2Fv2%2FGetting-Started-About-Version-Control&usg=AOvVaw2i8t1TR6X9msRpOdHt0zOJ).

That's all we need for this workshop!

## Part 2: Create a React Website

In this workshop we'll be using a boilerplate [React](https://reactjs.org) app, but if you already have a website ready, you can skip to Part 3!

Begin by visiting [repl.it/languages/html](https://repl.it/languages/html).

![Selecting html,css,js from language dropdown and clicking on create repl](https://cloud-cmhr0swki.vercel.app/0image.png)

You should see something like this:

![Repl.it workspace](https://cloud-8bei8bskq.vercel.app/0image.png)

Now in the bottom right black section above, click on "Shell":

![Selecting shell](https://cloud-jalq6znct.vercel.app/0image.png)

This is our repl.it instance's shell (or terminal), it should look like this:

![Shell screen](https://cloud-ifryxtexs.vercel.app/0image.png)

In the shell, type:

```shell
npx create-react-app my-awesome-app
cd my-awesome-app
```

It'll take 2-3 minutes for it to complete. This will essentially pull up boilerplate React code. After the completion, you'll see a folder in your repl.it instance inside, which will be our React app!

Now let's initialize a git repo in our app and make a commit. Head over to your repl.it's shell and type:

```shell
git init
git add .
git commit -m "Initial Commit"
```

This will throw an error, asking for your name and email address. To remove this error and make a commit, type:

```shell
git config --global user.email "<your email>"
git config --global user.name "your name>"
git commit -m "Initial Commit"
```

> Note that the `npx create-react-app` command automatically makes a git repo and makes a commit for you, but this doesn't happen if you run it on repl.it

## Part 3: Pushing to GitHub

Now, create a new [GitHub repo](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-repositories) and upload your project to GitHub.

* Open [GitHub](https://www.github.com), sign-in, and then click on the "New" button in the top left:

![New repo button](https://cloud-gclk7n9uy.vercel.app/0gh-new-repo.png)

* Type a unique name (there shouldn't be an existing repository with the same name) for the repository, and click the "create repository" button at the bottom of the screen:

![create repo](https://cloud-81cltkvfk.vercel.app/0image.png)

* After creating the repository, you should see the following screen:

 ![Click on the clipboard sign on the push an existing repo code](https://cloud-98lmwa0ha.vercel.app/0image.png)
 
 Click on the clipboard sign on the right side of the "..or push an existing ..." to copy the code.

 >The code we copied tells our repl.it's git where our "remote" is or in other words, where and on which branch should the git repository be "pushed".

* Next, head over to your repl.it instance's shell and type `cd my-awesome-app` to change directory and paste in the code that we copied earlier from GitHub

![pasting the code in repl.it's shell](https://cloud-m6l8fjvw5.vercel.app/0image.png)

After executing the code, git will ask for your GitHub's username and password, so type that and press enter.

If you see the following screen, you've successfully uploaded your project on GitHub!
![successfully uploaded on github](https://cloud-6q9f57u0d.vercel.app/0image.png)
	
Refresh your repository's page on GitHub and make sure the changes are reflected there as well!

## Part 4: Set Up Netlify for Hosting

*Netlify* is a web hosting service that makes it super easy to deploy a website on the Internet and do awesome things like adding a custom domain.

Netlify and other similar services (like [Vercel](https://vercel.com/), [Firebase](https://firebase.google.com/), [AWS Lambda](https://aws.amazon.com/getting-started/) and [Azure Serverless](https://azure.microsoft.com/en-in/solutions/serverless/)) are also known as "Serverless Webhosts". ["Serverless"](https://www.cloudflare.com/learning/serverless/what-is-serverless/) essentially abstracts away the complications of working with backend architecture. In simple words it's like pawning off the complicated work to a third party so that the you the user can focus on *shipping* more.

Log into [Netlify](www.netlify.com) (create an account if you haven’t already).

1. Click on “New site from Git”:
![Click on new site from git on netlify](https://cloud-ipr3ko8bo.vercel.app/0screenshot_2020-12-28_at_12.42.02_am.png)
2. On the next screen, we'll be telling Netlify where our project is located at, so select “GitHub”![select github](https://cloud-3p29symvo.vercel.app/0image.png)
3. Now, scroll down to find the GitHub repo for your app: ![select your repo](https://cloud-4jyvvb08t.vercel.app/0image.png)
4. Then, click on "Deploy Site" <br> ![click deploy site](https://cloud-1lhe4c42f.vercel.app/0image.png) <br>
5. Next, click on "Domain Settings" to add a custom domain to your deployment ![click domain settings](https://cloud-pdrxlnmln.vercel.app/0image.png)
6. In the Domain Settings, you can see a strange domain provided by Netlify. You can click on that to see how your project looks like!

In the next part we'll add a custom domain to our application!

## Part 5: Custom Domain

Netlify provides a default web address for sites on Netlify, but it...kinda sucks. If I asked you to close your eyes and repeat back your site's domain, you probably couldn't. But don't worry—Netlify makes it super easy to add a custom domain!

First, get a free one year custom domain from [Namecheap Education](https://nc.me) using your GitHub account (psst. you don't even need a credit card for this!).

Next, In Netlify's Domain Setting screen:

1. Click on "Add custom domain" <br> ![click add custom domain](https://cloud-lsa9p1n9s.vercel.app/0image.png) <br>
2. Type in the domain that you got from Namecheap and click "Verify" ![type a domain name and click verify](https://cloud-27kvllkf3.vercel.app/0image.png)
3. You'll see a prompt saying your domain already has an owner. Click on "Yes, add domain" ![Click yes add domain](https://cloud-aywdrainn.vercel.app/0image.png)
4. Back on the Domain Settings screen, copy the `.app` link—we'll register this link with our domain on Namecheap.

Now, sign in to `namecheap.com` with the account you got your custom domain from so that we can add the *DNS Records*, think of records as the postage information you use to make sure your email is directed to the right place:

Now, we need to manage the DNS records of our domain to point to our Netlify site. Think of DNS records as the "postage information" you use to make sure your domain is redirected to the right place.

Sign into `namecheap.com` with the account you used to get your custom domain.

1. On the Dashboard, click on the `Manage` button ![click manage domain](https://cloud-7f5s0mcm5.vercel.app/0image.png)
2. Next, click on "Advanced DNS"![click advanced dns](https://cloud-b73r79wje.vercel.app/0image.png)
3. Click on "Add New Record" ![click add new record](https://cloud-fwd4l8geb.vercel.app/0image.png)
4. Choose `CNAME` from the dropdown. Yype `www` in the Host field. In the Value field, paste the `.app` link that Netlify gave you. Leave the TTL field to default "Automatic" and hit the green check mark.![click green check mark](https://cloud-lt99artli.vercel.app/0image.png)

 > Canonical Name record (CNAME Record)—can be used to alias a hostname to another hostname (in our case we aliased our Netlify's hostname). When a DNS client requests a record that contains a CNAME, which points to another hostname, the DNS resolution process is repeated with the new hostname.

5. After some time, your Netlify's Domain Setting screen will show your domain in green, indicating everything is setup correctly!

Now head over to your browser's address bar and type in your new domain and flex it off! 🕺

## Where Can You Go From Here

 1. Add a **[Subdomain](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/)**: (for example, `workshops.hackclub.com`). Most websites are set up so that if you type `example.com` into a browser, you'll be redirected to `www.example.com`. It's actually a technical process to connect your root domain to the `www` domain. Subdomains will improve your search ranking and website traffic significantly. Search engines recognize subdomains as completely separate web addresses from your root domain.

 2. **[Custom Email Address Forwading](https://www.namecheap.com/support/knowledgebase/article.aspx/308/2214/how-to-set-up-free-email-forwarding/)**: Having your own domain on email address is really cool, and can be useful if you want to start a business. There are email services that let you do this for a monthly fee (G-Suite for example). But for a personal website, paying $6-10 every month just to have a custom domain email seems not worth it. So a lot of domain providers (like Namecheap) provide "Free Email Forwarding". Basically it’s the same as using your custom domain email address as an alias for your personal email account. For example, when someone send an email to `johndoe@yourdomain.com` it will be forwarded to `johndoe@gmail.com`. Pretty cool, right?

## The End :)

In this workshop we skimmed through a lot of topics, so take your own time, and understand stuff better. There are a few points I'd like to mention though:

In this workshop we put our website's code in a repository on GitHub which was public. That means anyone can essentially copy our code, so there are two ways to go from here:

One path is to make your website *Open Source* (which is if you want the source code to be publicly accessible). And if you choose this path, you can use one of the *[Open Source Licenses](https://opensource.org/licenses)*. To help with choosing a license, GitHub along with the community have made an amazing website that you can check out [here](https://choosealicense.com).

The other way to go is to make your website *Closed Source* (that is don't want the source code to be open to public). To do this, you can simply make your GitHub repository private.

### Important Links

* [www vs non-www URL](https://seranking.com/blog/www-vs-non-www/)
* [Netlify Docs for custom domains](https://docs.netlify.com/domains-https/custom-domains/)
* [What's SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO)
* [Should You Open Source Your Product?](https://lkanies.medium.com/should-you-open-source-your-product-thats-the-wrong-question-a8cac737c0ca)

**Happy Hacking!**

![pepe hacking](https://cloud-5lqfbh7am.vercel.app/0hacker-pepe.gif)
