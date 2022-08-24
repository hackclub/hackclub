---
name: Password cracker with Python!
description: Learn how to create a password cracker with Python!
author: '@bajpai244'
---

This workshop is about making a password cracker. We will be creating a password cracker which will be using the **Brute Force technique** to crack the password of your choice! So, let’s get started.

## Disclaimer

The sole purpose of this workshop is to help you discover various ways via which you can be attacked ( in a cyber attack ) by someone. This is solely for educational purposes and using the knowledge provided here for ulterior motives is a cybercrime. The workshop is made so that you can be more aware of how these attacks are done and can protect yourself from them.

Hack Club doesn’t promote any kind of misuse of the knowledge being provided here and won’t be responsible for your participation in any sort of unlawful activities. So using the workshop for educational purposes only is strictly advised.

## Prerequisites

The workshop is for anyone familiar with Python!

![python language image](https://cloud-i9z2auuen.vercel.app/0image.png)

You don't need to be a Guru in Python, a basic understanding of it is more than enough!

## Souce Code

The final source code for the workshop is available [here](https://repl.it/@HARSHBAJPAI1/passwordcracker). This is on [repl.it](https://repl.it/), you can use repl.it too for making this workshop! 

You can use the final source code to cross-check your source code!

## Introduction

The questions that would be arising in your mind would be that will this thing be a universal solution to cracking passwords? How the heck would it even be working?

![i take your questions gif](https://media.giphy.com/media/xT5LMB2WiOdjpB7K4o/giphy.gif)

Okay, so before I answer thess questions, I want to introduce you to some concepts. After going through these concepts you yourself would be able to answer all your questions.

## What is the Brute Force technique?

Brute Force technique is a technique in which we check all the possible solutions for a problem against the actual solution. 

![brute force poster](https://cloud-n4yyj3ff0.vercel.app/0image.png)

In short, think that we have a list of passwords that we think can be someone’s password, then we try all of these passwords until unless we find the right one. Bizzare right? I know it sounds really inefficient but this solution is being used already with some efficiency improvements to it ( check [Appendix](#Appendix)  )  also thanks to Moore's Law that with increasing computing power the solution is becoming more and more efficient.

![I see GIF](https://media.giphy.com/media/RGRkDWsTGvdUaQTO0z/giphy.gif)

So, to conclude we will loop through a list of guess passwords ( but some other steps are also involved )  till any guess password matches the one we are looking for! In the later section of the workshop, I will share methods to make this guessing yield more accurate results.



## What is a Wordlist? 


A Wordlist is basically a collection of passwords that we are going to use in a Brute Force attack! 

### What is the source of these Wordlists?

If you follow the news then you know that database of big and small companies is being compromised. People are hacking in to get the passwords of the actual users on these platforms so that they could have a huge database of passwords that they can use for the Brute Force Attack. These wordlists of leaked databases are available over the internet and are being used for Brute Forcing. 

<img src="https://cloud-34v9yvmzv.vercel.app/0image.png" alt="WordList Image" width="600px" />

Now in this workshop, we are using a wordlist to get a general idea about how this attack works and I strongly recommend going back to the [Disclaimer](#disclaimer) Section if you have skipped it for some reason! 

## So, what can I expect from the password cracker ( of this workshop ) ?

Okay, so we will be using a really simple Wordlist so that _you can crack very weak passwords_. The passwords that people keep in a hurry like “Dinosaur, Cat, Dog, etc” are something that we will be able to crack. 

_We are on purpose using a Wordlist which is very small_ so that the purpose of the workshop ( which is teaching you how to be secure on the web ) can be accomplished.


<img src="https://media.giphy.com/media/3o752ijagyRDZlazo4/giphy.gif" alt="thumbs up gif" width="350px" />

Now, in reality, Brute Force can be made to yield more accurate result by social engineering the victim ( check [Appendix](#Appendix) ). 

## But I want to be a Hacking God :_:

I know everyone wants to be a cool hacker who can hack almost anything, I know you want to be the real-life Mr. ROBOT! But you have to start from the base to know how the tools that you use work under the hood and the prototype that we are going to make is more than enough to give you a basic idea about how password cracking tools work.

<img src="https://cloud-nfxte6i11.vercel.app/0image.png" alt="hackerman GIF" width="400px" />

If you have learned making websites then remember we started by making simple HTML forms and slowly made our way through. You don’t become Mark Zuckerberg in a day! 

Now, I hope the above info will be more than enough to answer all your questions about the password cracker that we are going to make.

## What is hashing?

The developers usually run a Hash function on your password to transform them into another form which is known as the **Hash of the password.**

These Hash functions take your password as an input and transform them into a hash. Now if the hash of two inputs by Hash functions ( hash functions like SHA-1 ) are the same then **it implies that the two inputs are the same.** So this is how they verify whether the password you entered is right or wrong!

Examples of hash functions are **SHA-1 and bcrypt**. Now _SHA-1 shouldn’t be used for storing passwords_ as it is really fast and hence really easy to Bruteforce.

![hasing Image](https://cloud-6oiwvoqit.vercel.app/0image.png)

bcrypt is slow and adds salt to your password while Hashing it ( there are also some other technical details to it, you can visit [Wikipedia](https://en.wikipedia.org/wiki/Bcrypt) for that ). Salt is an additional input added by the function so that **unlike SHA-1 the same password will not create the same Hash.** These qualities make bycrypt a better option than SHA-1 as it is harder to Brute Force.

If you want to verify credentials ( when using bcrypt hash function ) then you will have a compare function which will take the actual hash of the password and the password that the user has entered and then will yield a boolean result telling whether they are the same or not!

## The Scenario!

I believe giving people real-life scenarios while doing Hacking workshops make them perform better! So, here is your scenario:

- Assume you have landed a penetration testing contract and the web app has a vulnerability. You get access to its whole database and you have cloned it.
- Now, you discover that the developer that they had was really not aware of how to store the passwords and _they have used SHA-1 to hash   the passwords!_

- Now, you are really smart and you know you can Bruteforce the database via a wordlist that you have! Now the Hack begins!

<img src="https://media.giphy.com/media/F1ZR9NJoNMmLWynn2M/giphy.gif" alt="get started gif" />
<br/>
<br/>

##  Create cracker.py

Now, create a file cracker.py in any folder of your choice on your computer. Now, Open it inside your favorite code editor.

### Imports:

The first step is to make our Python imports, so type the following inside your cracker.py file:

```python

import hashlib
from urllib.request import urlopen

```
Here the following has happened:

1. We imported **hashlib**, it will help us to create SHA-1 hashes.
2. We imported **urlopen** from urllib.request, this method will help us to open and read our wordlist file via an URL!

###   Functions

Now, we are going to create individual functions for tasks like hashing, reading wordlist file and then finally for Brute Forcing!  

Append the following code to your cracker.py file ( new code is separated by a ###### append the below code ###### comment )

```python

import hashlib
from urllib.request import urlopen

############# append the below code ################ 

def readwordlist(url):
    try:
        wordlistfile = urlopen(url).read()
    except Exception as e:
        print("Hey there was some error while reading the wordlist, error:", e)
        exit()
    return wordlistfile
 
 
def hash(password):
    result = hashlib.sha1(password.encode())
    return result.hexdigest()
 
 
def bruteforce(guesspasswordlist, actual_password_hash):
    for guess_password in guesspasswordlist:
        if hash(guess_password) == actual_password_hash:
            print("Hey! your password is:", guess_password,
                  "\n please change this, it was really easy to guess it (:")
            # If the password is found then it will terminate the script here
            exit()

```

Here the following is happening:

1. We created readwordlist(url) function which takes an URL as a parameter and will then return us file content. If any exception is raised during this process then the program will exit() the script. 

2. The hash function will take the password as a parameter and then will return us hash of the password as a string of double length, containing only hexadecimal digits. The hashlib.sha1 function expects the argument to be of type  <class 'bytes'> which is why we are passing password.encode() as its argument. 

3. - The bruteforce function will take the wordlist as a List and the hash of the actual password that you want to find, _and then it will loop through the wordlist for each item_ and will hash it and then will compare the hash with the actual password’s hash. 
   - If it finds a hash equal to the actual password’s hash then it will return the equivalent passwords in the wordlist. Which will be the password we were guessing!


### Completing the Script

Now, we will use these functions to write our final script.

Append the following code to your cracker.py file ( new code is separated by a ###### append the below code ###### comment )


```python

import hashlib
from urllib.request import urlopen
 
def readwordlist(url):
    try:
        wordlistfile = urlopen(url).read()
    except Exception as e:
        print("Hey there was some error while reading the wordlist, error:", e)
        exit()
    return wordlistfile
 
 
def hash(wordlistpassword):
    result = hashlib.sha1(wordlistpassword.encode())
    return result.hexdigest()
 
 
def bruteforce(guesspasswordlist, actual_password_hash):
    for guess_password in guesspasswordlist:
        if hash(guess_password) == actual_password_hash:
            print("Hey! your password is:", guess_password,
                  "\n please change this, it was really easy to guess it (:")
            # If the password is found then it will terminate the script here
            exit()
 
############# append the below code ################ 

url = 'https://raw.githubusercontent.com/berzerk0/Probable-Wordlists/master/Real-Passwords/Top12Thousand-probable-v2.txt'
actual_password = 'henry'
actual_password_hash = hash(actual_password)
 
wordlist = readwordlist(url).decode('UTF-8')
guesspasswordlist = wordlist.split('\n')
 
# Running the Brute Force attack
bruteforce(guesspasswordlist, actual_password_hash)
 
# It would be executed if your password was not there in the wordlist
print("Hey! I couldn't guess this password, it was not in my wordlist, this is good news! you win (: ")
 
```

Here  the following is happening:

- We created a variable _url_ that will store the URL of the wordlist that we are going to use. The _actual\_password_ variable is being used to store the password, we will try to guess this password from its hash. _Actual_password_hash_ variable stores the hash of the actual_password.

- _wordlist_ variable stores the wordlist as a UTF-8 string, each password in the wordlist is separated by a "\n" character. So we split this wordlist into a List and store it in _guesspasswordlist_ variable.

- Then we bruteforce the _guesspasswordlist_ variable and if our wordlist contains a password which has same hash as of the actual password’s hash, then we have cracked the password and the bruteforce function will print the cracked password.

- Else if we don’t have such a password in our wordlist then we print "Hey! I couldn't guess this password, it was not in my wordlist, this is good news! you win (: ". This means we couldn’t guess the provided password.

## Done!

Congratulations! You have successfully completed the journey of making this password cracker. I am checking the cracker to crack for hash of **“henry”** as a password but you can make it whatever you want.  


![crazy image](https://workshops.hackclub.com/content/workshops/hackide/img/awesome.gif)

Now, this password cracker will be able to crack almost all dumb passwords that you can think of. These are passwords that people who are in a hurry to create an account or who don’t take security seriously keep ( I am definitely sure you know such people ).

![programmer image](https://cloud-xr1rwflxx-hack-club-bot.vercel.app/0programmer.gif)

## Running the script!

To run the Script simply double-click on it ( cracker.py file ). You can also run it from a terminal if you want. Try checking this script out with different passwords!

![script final run](https://cloud-6n66l2293.vercel.app/0crackedpassword.png)

## Next Steps!

I know it feels awesome to make it but don't stop here, Create whatever you can from this crazy trick and share it with us in the [```#ship```](https://app.slack.com/client/T0266FRGM/C0M8PUPU6) channel of [Hack Club's Slack](https://hackclub.com/slack/). 


![nailed it gif](https://cloud-xr1rwflxx-hack-club-bot.vercel.app/1nailedit.gif)

I am available on Hack Club's Slack by the username **Harsh Bajpai**, If you have any doubt or query regarding this workshop then feel free to reach out to me!


## Appendix 

The workshop is done and the below information is going to supplement what you have previously learned. _This section isn’t necessary for completing the workshop._

### Social Engineering

Social Engineering is the practice of making people perform some actions and then get their personal data out from them ( their name, birthday, pet’s name, favorite place, etc ).

<img src="https://cloud-2l8z7uepy.vercel.app/0image.png" alt="Social Engineering Image" width="500px" />

People generally use a combination of their personal data ( the ones discussed above ) to create their passwords, as it makes it easier to remember. Getting these data of the victim can help a person to Brute Force in a very targeted way where they will try different combinations of these data to get the victim’s password ( there are tools which help you do that ).

 
### Rainbow Table Attack

In this attack, we use a Rainbow Table.

A rainbow table is a precomputed dictionary of plaintext passwords and their corresponding hash values that can be used to find out what plaintext password produces a particular hash ( this is an abstract definition, in order to know the technicalities visit [here](https://www.techslang.com/definition/what-is-a-rainbow-table-attack/)). 

This saves us a lot of time as we are using a precomputed dictionary and not computing the hash during the run-time of the script!

### Don’t be a script kiddo

The reason I believe making prototypes of these tools are important because they help you to understand how your tool works ( at least gives you a rough idea  ). I know a lot of you might be thinking why not directly start with tools like **John the Ripper**? Sure, you can and it will be better too!

<img src="https://cloud-ei6d3ux60.vercel.app/0image.png" alt="Script Kiddo Meme" width="300px" />

But the thing is that you must also push yourself towards making some small tools of yours so the tools that you don’t appear as magic to you. Making such small prototypes also increases your technical knowledge! 
