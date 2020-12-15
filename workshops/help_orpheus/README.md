---
name: Help Orpheus!
description: Supercop Orpheus needs help to save Hack Island! and you are the one who can help them.
author: '@bajpai244'
---

Welcome to this new adventure of yours. Supercop Orpheus needs your help saving Hack Island. What?? What is Hack Island? And what is going to happen to it? And Orpheus is also a Supercop! When did all of these happen?

I know all of these sounds confusing to you. You are going to discover some of the secrets of Hack Club in this journey. We have been hiding them from you for a very long time (very very long time).

## Secrets!

We at Hack Club have been hiding some secrets from you! But the time has come that we finally unveil them to you. Welcome to the club!

## Hack Island!

Hack Island is a place which till this far has been hidden from the world! Here we have people with superpowers! Yeah! These people are known for making really cool things! This is their habitat. 

We are better than Wakanda and Hogwarts combined (a bit of a promotion here :) ) and we use advanced technology to hide from the world.

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/hackisland.jpg" alt="Hack Island image" width="400px" />
<br/><br/>

## Badlo Escobar 🤡

Badlo Escobar is a constant trouble maker for the people of Hack Island. He owns the Badlo society and their society has its own social network. Badlo has only one aspiration, to destroy Hack Island’s resources and trouble its people! 

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/badlo.jpg" alt="badlo escobar image" width="400px" />
<br/><br/>

### Why is he doing it?

Hmm, so very very long ago he submitted a PR for a workshop for the bounty program in which he copied someone else’s workshop (from Hack Club) and made the PR before them.

The case was taken to Supercop Orpheus where the victim proved that they made the workshop first and hence Badlo was deprived of the bounty. This is what made Badlo the person he is today (shh, keep it a secret)

## Supercop Orpheus

Orpheus is the Supercop of Hack Island. They just came to know that Badlo has deployed a bomb in Hack Island’s central library’s server room. If he gets away with it, all of the sacred knowledge and wisdom of Hack Club will be gone forever. 

This is why they need your help to stop Badlo!

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/needshelp.jpg" alt="Supercop Orpheus Image" width="300px" />
<br/><br/>

## The adventure begins!

Okay, so before you can help Supercop Orpheus you need some info, right? We have a special person, **Agent Squirrel**, who is an agent of Hack Island. He has some info for us:

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/squirrel.jpg" alt="SQUIRREL image" width="400px" />

- Badlo uses https://badlonetwork.vercel.app/ to chat with his associates. 
- His username is **badlo escobar**
- The database the website uses is **written in SQL (more about this coming ahead)**. 


## Let’s visit the website

Okay, so our friend Squirrel tells us that Badlo uses [https://badlonetwork.vercel.app/](https://badlonetwork.vercel.app/) to chat with his associates. If we can see his previous chats then it can lead us to something helpful! Let’s visit this website.

So, after visiting [https://badlonetwork.vercel.app/](https://badlonetwork.vercel.app/) this is what we see.

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/website.png" alt="badlo network website" width="600px" />

Okay, so it is asking for credentials, we have Badlo's username which is **badlo escobar** but we don't have his password. We need to bypass this security to be able to see his chats.

Hmm, so remember Squirrel told us the website’s database is written in SQL. Let’s dig into that first!

## SQL

The way you have HTML to make webpages in a similar way you have SQL to write databases. Databases store information. 

<img src="https://cloud-or83s8bmg.vercel.app/0image.png" alt="SQL Logo" width="" />

SQL stands for Structured Query Language. Databases written in SQL are **in the form of tables.** 

The below is a sample database storing data in the form of tables.

<img src="https://cloud-9k8vw5nyb.vercel.app/0image.png" alt="SQL table image" width="" />

We can retrieve information from this table by using SQL’s `SELECT` statement. Each row of the table is called a **record**.

To retrieve all the rows in the table we will write the following command:

```sql

SELECT * from TABLE_NAME ;

```
Here * means all records and TABLE_NAME is the name of the table whose records you want to have!

If you want to get some specific records in SQL then you use the `WHERE` clause. For example, if you want a record with username “badlo escobar” and password “12345", you would write the following SQL.

```sql

SELECT * from TABLE_NAME WHERE username = 'badlo escobar' AND password = '12345' ;

```

Here, the record with username “badlo escobar” and password “12345” will be shown to us (if it exists). The keyword **AND** tells us that both of the statements need to be true i.e `username = 'badlo escobar'` and `password = '12345'`.

This was a small introduction to SQL for you.

## SQL Injection

Agent Squirrel told us that the website uses SQL for its database. Websites which use SQL are prone to a vulnerability known as SQL injection. Hmmm? Lemme explain it to you.

<img src="https://cloud-5taef3i63.vercel.app/0image.png" alt="SQL Injection" width="500px" />

So, to retrieve data from their database, websites run SQL commands in their backend and we can inject some SQL into these commands to mutate these statements for desirable results!

This is the technique you will use to bypass the security. The way Orpheus has you for help, you can rely on me for some help too! See how friendly Hack Clubbers are!


## More INFO

Agent Squirrel has some new inputs for us. They say that they just got a sneak peek into badlonetworks’s source code and saw a line like this somewhere:

```sql

`SELECT * from people WHERE username = '${username}' AND password = '${password}' `

```

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/squirrel1.PNG" alt="squirrel image 1" width="400px" />

The SQL is written between **\`** strings, which are [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) in JS.

Awesome! so ${username} and ${password} are placeholders for the variable username and password in a JS template string.

**This means that whatever we are typing in the username and password text fields might be being injected directly into the template string containing the SQL statement.**

So, if in username I type **badlo escobar** and in password I type **password** then the template string will become:

```sql

`SELECT * from people WHERE username  = 'badlo escobar' and password  = 'password'`

```

Okay! So, **if in password** we type <b>' OR 1=1 -- </b> (_after **--** there should be a space_) and make the username 'badlo escobar', the SQL statement will become:

```SQL

SELECT * from people WHERE username = 'badlo escobar' AND password = '' OR 1=1 -- ' 

```

When we make our password = <b> ' OR 1=1 -- </b>, then the **'** closes the string of our password variable making it an **empty string.**

In SQL **--** comments whatever is after it. So, **--** comments the leftover **'** string here and we get the above SQL command.

Now in an SQL command with an **OR** condition in it, any one of the conditions can be true. Here `1 = 1` is always true (because 1 = 1, isn't it?). So the SQL command will give a result back to the system which is not empty. This would fool a system into thinking that such a user exists.

So if we set our <b>password = ' OR 1=1 -- </b>  ( remember after **--** there should be a space ). Then no matter what the username and password are, we will be able to bypass the system. Which makes our hint that the username is **badlo escobar** useless. Why? Because if the password is equal to what we have discussed then no matter which username you use, you will bypass the security! 

## Hack Time 🐱‍💻

Okay! It's finally time to perform the hack. Open the website [https://badlonetwork.vercel.app](https://badlonetwork.vercel.app) and type the following into the username and password inputs:

- username  = badlo escobar
- Password = ' OR 1=1 -- 

Remember after **--** there should be a space. And then click on the Login button.

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/thehack.jpg" alt="thehack image" width="700px" />


## Woooo!

Yes, you just bypassed the system and what is in front of you is Badlo's chat with one of his associates. Let’s see what we can find here.

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/badlosecret.jpg" alt="Badlo's secret chat Image" width="700px" />

Okay, so from the highlighted portion of the chat we know that:

- We need to go to https://stopbadlomission.vercel.app/ 
- We need to enter **badlo-is-great** as a passcode in the text field and then click on The cancel mission Button.
- Try typing the passcode and not copy-pasting it, as sometimes along with the passcode we might end up copying a space character (which is not visible to us!).

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/passcode.jpg" alt="passcode entering image" width="700px" />

Yesss! after entering the passcode you are only one click away from completing this mission! Just click the ** CANCEL MISSION ** button and see the magic!

## Thanks, Saviour!

Do you know what you just did by clicking that button? You saved Hack Island’s sacred knowledge and wisdom! You are a hero for the people, and now Orpheus knows they have someone to rely on if they get into trouble again!

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/hackerman.jpg" alt="hacker man image" width="500px" />

Be ready and keep learning. Badlo will not like this, and we need to hedge the Island from him. We need to be ready for his upcoming plans.

You can learn to protect against SQL Injections here: https://www.ptsecurity.com/ww-en/analytics/knowledge-base/how-to-prevent-sql-injection-attacks/

This is just the start of your adventure. Be ready for the next one! 

## When you have superpowers then use them for good!

I know you just learned a new trick. This was for educational purposes and hacking someone's system without their consent is a cybercrime. 

This was made so you can be aware of the various ways in which people do cyber-attacks in the form of a story and how you can hedge against them!

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/superpower.jpg" alt="super power image" width="500px" />

Hack Club doesn’t promote any misuse of the knowledge being provided here and is not responsible for your participation in any unlawful activities. Using the workshop for educational purposes is strictly advised.

**When you have superpowers, use them for good!**
