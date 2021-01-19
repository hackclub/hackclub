---
name: Save the Hack Club Bank!
description: Badlo is back and this time the target is the Hack Club Bank. no money = no bounty! save the bank!
author: '@bajpai244'
---

Welcome back to Hack Island. We know you were busy but Hack Island needs you! So welcome back savior! 

In our previous adventure, we unveiled the mysterious island of hackers to you and you saved us from Badlo! But, Badlo is back -: and we again need you.

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/hackisland.jpg" alt="Hack Island" width="400px" />

<br/>
<br/>

## Save the Hack Club Bank 🏦

Hack Island has its own bank ( cool right ), the Hack Club Bank. 

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/hackclub_bank.jpg" alt="Hack Club Bank" width="500px" />

Badlo disguised himself as bank staff and **transferred all of Hackcoins to his own account.**

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/badlo.jpg" alt="Badlo Image" width="450px" />

This was all Supercop Orpheus's mistake. They are responsible for the Bank's security.

<img src="https://raw.githubusercontent.com/hackclub/dinosaurs/main/dinosaur_sweating_bullets.png" alt="orpheus images" width="" />

<br>
<br>

## What is Hackcoin?

Oh! We forgot to tell you about Hackcoin. This is another mystery! It is the digital currency of Hack Island. It is a decentralized currency!

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/hack_coin.jpg" alt="Hack Coin" width="450px" />

Hackcoin is said to be **developed by a cool hacker whom we don't know!** They use the pseudonym _Hacktoshi Hakomoto_ on the Internet ( hmm, we know this story sounds familiar to you 🙃 )  

## Ready?

This is a new adventure and you are the one who can save the Hack Club Bank! People of Hack Island need you. No Hackcoins mean no workshop bounties😟.

We know you can do it! As always you will be having agent squirrel along your side along with Orpheus! Wishing you the best of luck on the journey!

## Squirrelllll 🐿️

Agent squirrel is back with some info for us ( such a good 🐿️ )!

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/squirrel.jpg" alt="agent squirrel image" width="450px" />

Agent squirrel says that Badlo has his account in **Badlo local bank** ( [link to the bank's website](https://badlo-local-bank.vercel.app/) ) and the website **is not SQL injection vulnerable** ( so we can't use the trick we used [earlier](https://workshops.hackclub.com/help_orpheus/) 😶) 

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/badlo_local_bank.jpg" alt="Badlo Local Bank Image" width="450px" />

Agent squirrel was able to get through the backdoor (literally the backdoor) of the Bank and looked in their database for Badlo's credentials.

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/back_door.jpg" alt="Back Door" width="450px" />

Here are the credentials:
- email: iambadlo@badlo.com
- password's hash: 7bd430d038c3cb15b82c3e2de93de517790b3ba0

## What is a Password's Hash?

Hmm, so web developers generally don't store your password indeed they store a hash of your password! Hash is a transformed form of your password and the hash to a password is always unique.

Hash of passwords is created by passing them through a hash function. **You can think of Hash functions as machines that take passwords and convert them into hash.**

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/hashing.jpg" alt="Hashing Image" width="550px" />

The Hash of two passwords can never be the same which implies that the **hash of a password is always unique!**

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/uniquehash(1).jpg" alt="Unique Hash image " width="550px" />

We have a very detailed workshop on this [link](https://workshops.hackclub.com/passwordcracker/) you can visit it to know more about hashing and how to create a password cracker 🔓

## So, what are we gonna do?

We are going to do a **brute-force attack here!** So what is it? So it is a technique of hit and trial!

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/BruteForce.jpg" alt="Brute Force Image" width="550px" />

So what we are going to do is that we will take a bunch of passwords and then we will loop through each of them and then will create a hash of them! 

**If a hash of a password from our list matches the hash of Badlo's password then we know what his password is!** ( because the hash of the password is unique ).

We will call this list of our passwords as **wordlist.**

## So which Hash function to use?

There are many hash functions available to create a hash of passwords and it is really _necessary to know which function has been used to hash Badlo's password to brute-force it!_

## Cody Hippo 🦛

She is the best freelance developer of Hack Island ( and yeah she is a hippo too 🦛 ) she knows the developer who created Badlo Local Bank! 

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/cody_hippo.jpg" alt="Cody Hippo Image" width="550px" />

She says he is very dumb and lazy and would probably have used the **SHA-1 hash function** ( to know why using SHA-1 for hashing a password is making him dumb visit this [workshop](https://workshops.hackclub.com/passwordcracker/)   )

## Let the great hack begin 🐱‍💻

Okay, so this is a small list of passwords [link to passwords](https://cloud-nlh1tynsg.vercel.app/0wordlist.txt) that people like Badlo generally use! ( yes, these are available over the internet! really! )

Now [open this repl.it.](https://repl.it/@HARSHBAJPAI1/passwordcrackertemplate#index.js) I have already **made a template repl for you.** This repl has some code that we have already written for you which will save some development time for us! ( **don't delete any file from the repl** )

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/repl_1(1).jpg" alt="Repl Image" width="" />

Now in your **index.js** write the following code.

```js

const get_wordlist =  require('./get_wordlist') 
const sha1 = require('sha1');

const wordlist = get_wordlist()
const badlo_hash = "7bd430d038c3cb15b82c3e2de93de517790b3ba0"

let badlo_password = "no password found";

const wordlist_array = wordlist.split('\n')

wordlist_array.forEach((password)=>{
    if( sha1(password) == badlo_hash  ){
      badlo_password = password 
    }
})

console.log("badlo's password is =",badlo_password)

```

After Writing the code your index.js will look like this:

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/repl_1.png" alt="Repl Image" width="" />

1. Here **get_wordlist()** is a function that I have already written for you and we will just be importing it here. **sha1** function will help us to create the hash of a given password.

2. **wordlist stores all the passwords** that we have in our list and all of these passwords are separated by a special character **'\n'.** **badlo_hash** stores the hash of Badlo's password and **badlo_password** will contain the password that will match Badlo' hash ( otherwise will have a default value “no password found”)

3. We are firstly splitting wordlist intro an array **separated by '\n'**  special character and storing it into **wordlist_array.** In simple words, we are splitting it into an array in which **each element holds a single password from the list.**

4. Now will **loop through this wordlist_array** via [foreach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method and will hash the password stored in each element of it. **If a password's hash matches with badlo_hash then it is a match.**

5. We will store such a password in **badlo_password!** And then will use it as a credential on the bank's website!

## Run 🏃‍♀️

Now run the repl by clicking the **Run** button at the top! You will see that the password of Badlo is **sillyorpheus** ( hmm someone hates our dino 🦕 ).

## Completing the Hack 🤛

Now let’s visit the Badlo Local Bank’s website [link to website](https://badlo-local-bank.vercel.app/) and enter the following credentials.

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/website_login.png" alt="Website Credentials Image" width="" />

- email: iambadlo@badlo.com
- password: sillyorpheus

Now, login to his account.

## Transfer the Hackcoins back 

Now, here you see he has 1 billion Hackcoins! Select recipient as **Hack Club Bank and then select amount.** Now click on **Send** to transfer all the money back to Hack Club Bank.

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/save_hack_bank_workshop/sending_money.png" alt="Website Credentials Image" width="" />

<br>
<br>

## Thanks! Thanks! Thanks

You are the word of mouth in Hack Island. Yes! You did it again and proved to us that we can trust you anytime anywhere and with anything 😉 

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/hackerman.jpg" alt="hacker man image" width="500px" />

We hope you loved this mini-adventure of yours and we wish we do more crazy adventures together.

## When you have superpowers then use them for good!

We know you just learned a new trick. This was just for educational purposes and hacking someone’s system without their consent is a cybercrime. 

This was made so that you can be made aware of the various ways in which people do cyber-attack in the form of a story and provide a safe environment to practice them.

<img src="https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/img/superpower.jpg" alt="super power image" width="500px" />

Hack Club doesn’t promote any kind of misuse of the knowledge being provided here and won’t be responsible for your participation in any sort of unlawful activities. So using the workshop for educational purposes only is strictly advised.

When you have superpowers then use them for good!