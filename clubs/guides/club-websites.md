By Lachlan Campbell (@lachlanjc) and staff. 30 Jul 2019

---

# Getting a [hackclub.com](http://hackclub.com) subdomain

> ⚠️ This section is out of date! You can now get your own subdomain by going directly to github.com/hackclub/dns & submitting a PR. -@msw

Any club leader can get access to a [hackclub.com](http://hackclub.com) subdomain for their club or hackathon website. To register or update yours, go to [leaders.hackclub.com](https://leaders.hackclub.com/), sign in with the email address on your application, & there’s a link to “add a subdomain.” A Hack Club staff member will approve your request shortly.

[Hack Club Leaders](https://leaders.hackclub.com/)

Fun fact: all of Hack Club’s DNS is [open source on GitHub](https://github.com/hackclub/dns)!

If you have issues, ping @msw on Slack.

# Site examples

- [Mason Hack Club](https://masonhackclub.com/)
- [West Lafayette High School Hack Club](https://wl.hackclub.com/)
- [Hack Club CCA](https://cca.hackclub.com/)
- [State High Hack Club](https://statehigh.hackclub.com)
- [Wootton Hack Club](https://hack.wootton.club/)
- [Fremont High School Hack Club](https://www.fhshackclub.com/)
- [Palm Springs High School Hack Club](https://pshs.hackclub.com/)
- [Westborough Hack Club](https://westborough.hackclub.com/)
- [Pomperaug Hack Club](https://pomperaug.hackclub.com/)

# Adding a Hack Club banner

![](https://cloud-pjoop60lr.vercel.app/0image-20190730-202428.png)

Hack Club has official banners for your club website to link to Hack Club. If you’re making a standard HTML site, here’s the code for adding a linked banner: [https://github.com/hackclub/hackclub#banners](https://github.com/hackclub/hackclub#banners)

If you’re making a React site, we’ve got you covered with a custom component published on npm as `@hackclub/banner`. Here’s the docs: [https://hackclub.com/banner](https://hackclub.com/banner)

# Stories from club leaders

### Lachlan Campbell (@lachlanjc)

While you might be inclined to make a website for marketing your club, I haven’t found that to be very useful. (You could put the link on posters or announcements, but the reality is that few people will visit it unless you do something super exciting.) Instead, I make my club website as a utility during club meetings for members, with links to everything they need.

I quickly discovered a few key things needed from my club site:

- Quick links to Hack Club Workshops
- Quick links to [repl.it](http://repl.it), Glitch, hackathon to register for, etc
- A form for members to submit projects. I do demos at the end of every club meeting, & to avoid everyone dealing with A/V individually, I have everyone submit to me their project links on the site. It sends me an email, so I can then pull up the links on my laptop with the projector connected.
  - I use a free service called [Formspree](https://formspree.io), but [Basin](https://usebasin.com/) is another free alternative.
        

[State High Hack Club](https://statehigh.hackclub.com)

I made my site using React/[Gatsby](https://www.gatsbyjs.org/) & the [Hack Club Design System](https://design.hackclub.com/). It’s entirely open source, if you’d like to remix it:

[SCHacks/site](https://github.com/schacks/site)

Here was the first version of the site ([source code](https://github.com/SCHacks/site/blob/e358fbd73a095f728843f19ff4e13f61cfa4d460/index.html)) & the [second version](https://5ba46bd1dd28ef740fcf3e9e--schacks.netlify.com/) ([source code](https://github.com/SCHacks/site/tree/8446a00fded449ee50110ec6182153d0c98596d4)):

![](https://cloud-pjoop60lr.vercel.app/2image-20190730-202530.png)
![](https://cloud-pjoop60lr.vercel.app/1image-20190730-202542.png)
