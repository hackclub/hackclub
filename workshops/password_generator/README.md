# Password Generator

![THUMBNAIL](https://cloud-3mxuk571x.vercel.app/0thumbnail.png)




Introduction

Digital access is now like oxygen for us , We come access many website while surfing the web. Everytime when we go-to a legit site or trusted site, We want to store the information about us to we can config the site for our need.
information or customize the site and all this happen with our login id and password.
Password is the key to the door, Which we want to open.
Too many passwords,It is hard to remember right?
and even very hard to create or organise it right?
So, We have come up with password Generator 
which will make our Life simple and sweet.


# DEMO 💻
![DEMO](https://cloud-4q3zx49ou.vercel.app/0gif-maker.gif)


Description


Tips ON PASSWORD GENERATION

Based on the case study

What kind of special character website supports!✌️


Lengthy – Short length passwords are relatively easy to break, so the idea is to create lengthier ones for added security and to make them less predictable. So what is the desired or required length? A 2010 Georgia Tech Research Institute (GTRI) study told how a 12-character random password could satisfy a minimum length requirement to defeat code breaking and cracking software, said Joshua Davis, a research scientist at GTRI. Richard Boyd, a senior researcher at GTRI says, “Eight-character passwords are insufficient now… and if you restrict your characters to only alphabetic letters, it can be cracked in minutes.” In any case, to be on the safe side, a password length of 12 characters or more should be adopted.


Strong and complex – Strong passwords are still key. Security experts agree that upper and lowercase alphanumerical characters are good practices for increasing passwords strength and making it capable of resisting guessing and brute-force attacks. In order to add complexity without compromising ease-of-use, users could modify passphrases by inserting spaces, punctuation and misspellings.

REFERENCE LINK: https://resources.infosecinstitute.com/topic/password-security-complexity-vs-length/


## THESE ARE SOME OF THE APPLICATION DEPENDING ON THE encryption LEVEL 

**Symbols below will describe, What are the features you will get in each of the tier**

1.Easy password :-
                    Pros
                   lowercase ✅
                   digits0-9 ✅
           
                   special charcter❌
                   Uppercase character❌

2.Strong password:- Pros
                   lowercase ✅
                   digits0-9 ✅
                   Uppercase character✅
           
                   special charcter❌
                
                
3.Extrastrong:-   Pros
                  lowercase ✅
                  digits0-9 ✅
                  Uppercase character✅
                  special charcter✅
                  

***Above are Key elements which will make EXTRASTRONG will stand out rest of tier.***


Rest of the thing is explained in the console itself with the pseudocode.
Please do check it out!🙂

#EASY
```python
#random is used to choose a character from chars string
import random

#taking input from users about how long password to be they want
length =int(input("enter the length of the password"))

#chars variable is used to store all alphabet and numeric values
chars="abcdefghijklmnopqrstuvwxyz1234567890"

c=int(input("enter the number of password you want to print"))

for b in range(c):

#To start with, our password variable should be empty
 password=""



#intialize the length as the argument in for loop
 for a in range(length):

#password variable is used to store a random variable from char string and + is used to add the letter each time
  password += random.choice(chars)

#it is used print the password variable
 print(password,"\n *******")
print("Weak Password,")
```

link:https://repl.it/@ShiveshSingh/PasswordGeneratorEASY

#STRONG


```python

#random is used to choose a character from chars string
import random

#taking input from users about how long password to be they want
length =int(input("enter the length of the password"))

#chars variable is used to store all alphabet and numeric values
chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"

c=int(input("enter the number of password you want to print"))

for b in range(c):

#To start with, our password variable should be empty
 password=""



#intialize the length as the argument in for loop
 for a in range(length):

#password variable is used to store a random variable from char string and + is used to add the letter each time
  password += random.choice(chars)

#it is used print the password variable
 print(password,"\n *******")
print("Strong password")
```
link:https://repl.it/@ShiveshSingh/AmbitiousExperiencedTranslations



#EXTRASTRONG

```python

#random is used to choose a character from chars string
import random

#taking input from users about how long password to be they want
length =int(input("enter the length of the password"))

#chars variable is used to store all alphabet and numeric values
chars="[@_!#$%^&*()<>?/\|}{~:]ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"

c=int(input("enter the number of password you want to print"))

for b in range(c):

#To start with, our password variable should be empty
 password=""



#intialize the length as the argument in for loop
 for a in range(length):

#password variable is used to store a random variable from char string and + is used to add the letter each time
  password += random.choice(chars)

#it is used print the password variable
 print(password)
print("ExtraStrong password")
```
Link:https://repl.it/@ShiveshSingh/ClosedFirmSoftwareagent
