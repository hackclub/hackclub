---
name: Robotic Emails
description: Building a mass-emailer with easy templating and Python
author: '@rohan-bansal'
---

# Robotic Emails

![Robot With Emails](https://cloud-48mv5ovk7.vercel.app/email.png)

## Overview

---

In this workshop, you'll be using good ol' Python to send emails using a customizable template! The project should take about 20-30 minutes to complete.

Here are some links to the final code and a live demo ([repl.it](https://repl.it)):

*Final Code: [GitHub](https://github.com/hackclub/hackclub/tree/main/workshops/robot_emails)*

*Demo: [Live](https://repl.it/@apexblade/RoboticEmails#main.py)*



**Prerequisites**

- A Google account, preferably with [2FA](https://www.google.com/landing/2step/) disabled

  

---



## Initial Setup



[SMTP](https://www.wikiwand.com/en/Simple_Mail_Transfer_Protocol) (Simple Mail Transfer Protocol) has been getting more and more secure as of late; and for good reason. To be able to send emails from your Google account, we need to give our python application access.


Head over to [this link](https://myaccount.google.com/u/0/lesssecureapps?hl=en) and flick the "Allow less secure apps" lever to the on position. Google strictly allows only its own or verified software to interface with the creation/sending of emails; since you're creating a python app, it's necessary to tell Google that it's acceptable.

![less secure app access](https://cloud-f9wuongol.vercel.app/app_access.png)

You will also need to complete [this captcha](https://accounts.google.com/b/0/DisplayUnlockCaptcha) to enable access for the next application that uses your credentials (this one). 



*Quick Note*s

If you happen to have 2 Factor Authentication enabled for your account, please follow [this article](https://support.google.com/accounts/answer/185833?hl=en) to generate an app password. When we write the program and input our account password, replace that with the app password you generated.

After working on this project, it is recommended to turn the less secure apps lever back to it's off position.

---



## File Setup



Head over to [repl.it](https://repl.it) and create a new `Python3` project. In the sidebar, a `main.py` file should already be created. Go ahead and create two more files:

- `contacts.txt`
- `message.txt`

The `contacts.txt` file will contain emails and names that will be substituted into the message body later (can be customized). Feel free to add an email and a name to it, bu make sure it's formatted exactly as below:

```python
bobsmith@johndoe.com, Bob
```

In the `message.txt` file, add the following template, which we will process in our python script.

- The first line contains the subject of the email
- The rest of the lines contain the body

```reStructuredText
Test Email

Dear {0},

    Bacon ipsum dolor amet venison ball tip hamburger tenderloin bresaola ribeye pancetta ham chuck rump buffalo. T-bone cow pork, capicola jerky short loin prosciutto picanha porchetta ribeye. Pig ground round shank frankfurter drumstick, pork belly bresaola tongue. Pancetta alcatra bacon ground round kielbasa beef landjaeger cupim prosciutto sirloin tongue jowl.

Sincerely,
<Your Name>
```

Please substitute `<Your Name>` with your name, as this won't be substituted automatically in this workshop (feel free to add it in later though)! 



*Quick Note*

Wondering where I got that spicy placeholder text? Check out [Bacon Ipsum](https://baconipsum.com/?paras=5&type=all-meat&start-with-lorem=1).

---

## Writing Code



I'll take this moment to ask you **not to copy and paste**. It takes away from the learning experience (and in many cases, things need replacing).

At the top of your `main.py` file, go ahead and add the following imports:

```python
import smtplib, email
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os, sys, time
```

- [`smtplib`](https://docs.python.org/3/library/smtplib.html) is a Python module used to send emails, utilizing the Simple Mail Transfer Protocol
- [`email`](https://docs.python.org/3/library/email.html) is a Python module not used to send emails, but to manage email contents
- [`email.mime`](https://docs.python.org/3/library/email.mime.html) is a library that uses the global [MIME internet standard](https://www.wikiwand.com/en/MIME) to format email messages
- `os` and `sys` are system libraries used to deal with file and program operations, and `time` is just used for delays (in our case)

Next, lets create some variables to hold our credentials.

```python
address = 'bobsmith@johndoe.com'
password = '<password>'
```

Lets also initialize a connection to the Gmail SMTP mail server with those credentials.

```python
mail = smtplib.SMTP('smtp.gmail.com', 587)
mail.ehlo()
mail.starttls()
mail.login(address, password)
```

- The [`mail.ehlo()`](https://docs.python.org/2/library/smtplib.html) function is the application's way of identifying itself to the server. More info [here](https://help.returnpath.com/hc/en-us/articles/220223328-What-is-Extended-HELO-EHLO-). 
-  The [`mail.starttls()`](https://docs.python.org/2/library/smtplib.html) function ensures that the connection is secure. More info [here](https://www.wikiwand.com/en/Transport_Layer_Security).



### Getting Contacts

Now, let's obtain our contacts from the `contacts.txt` file! (You don't have to write the comments, but it's great practice if you do)

```python
def get_contacts(filename): # input the contacts file
    contacts_list = {} # initialize dictionary 
    with open(filename, mode = 'r', encoding = 'utf-8') as f: # open the contacts file, read only mode
        contacts = f.read().split('\n') # split lines, add to a list
        f.seek(0) # look at the beginning of the file
        first = f.read() # read the beginning of the file
        if first == '': # if it's empty, there are no contacts, print error
            print('Contacts file is empty.')
            sys.exit() # exit the program
    for item in contacts: # iterate through contacts, add names and emails separately to a dictionary
        contacts_list[item.split(', ')[0]] = item.split(', ')[1:]
    return contacts_list # return contacts dictionary
```



Important elements:

- `contacts_list` is a dictionary we create to hold our emails and names in `key:value` format
- `with open...` is a python method of opening a file, reading it to an object (in our case), and closing it immediately after. We open it in `r` (reading) mode, to make sure nothing is written to the file on accident
- [`utf-8`](https://www.wikiwand.com/en/UTF-8) is a character encoding
- `\n` is a newline character in Python; by splitting a file by `\n`, we are essentially splitting up all the lines
- `contacts_list[item.split(', ')[0]] = item.split(', ')[1:]` adds the email and all the substitutions associated with that email to a dictionary. The format is `key: [value, another_value, etc.]`
  - 



### Reading the Message

Great! You're basically 1/3 of the way there!

![woohoo](https://cloud-62jdtr82i.vercel.app/tenor.gif)



Add another function called `read_message` to the `main.py` file:

```python
def read_message(filename): ## input the message file
    with open(filename, 'r', encoding = 'utf-8') as template: #open the file in read mode
        template_content = template.read() # read the contents of the file to a variable
        template.seek(0) # look at the beginning of the file
        first = template.read()
        if first == '': # if empty, message is empty
            print('Message file is empty.')
            sys.exit() # quit program
        subject = template_content.splitlines()[0].rstrip() # obtain the first line (subject) by splitting all lines and indexing the first (0)
    return subject, template_content # return the subject and the body
```



A few things to note:

- The `read_message()` function is really similar to the contacts function!

Lets go over:

```python
template_content.splitlines()[0].rstrip()
```

We split the file into multiple lines in a list. From there, we obtain the first line, which is the subject, then we strip all the spaces to the right of the text. This is to ensure there isn't a stray `\n` added by the text editor!

This is also a particularly tricky part:

```python
'\n'.join(template_content.split('\n')[1:])
```

This line basically removes the subject line from the body of the email! Since the text is read from the message file and the subject has already been parsed, it's not a good idea to send the subject again in the body. We split the content by newlines and keep everything after the first line; `[1:]` is the list operation that does this. More info [here](https://www.w3schools.com/python/python_lists.asp)!



Test out both of these functions by printing their results! Here's how to do it:

```python
contacts = get_contacts('contacts.txt')
subject, template_content = read_message('message.txt')
print(contacts)
print(subject, template_content)
```

After doing this, go ahead and remove the print statements, but keep the variable declarations (needed in the next section).

If you get an SMTP error, you need to go back to [this link](https://accounts.google.com/b/0/DisplayUnlockCaptcha) and complete the captcha again.



### Formatting and Sending the Email

You can format and send this email in only 12 lines of code:

```python
for contact_mail in list(contacts):
    msg = MIMEMultipart()
    msg_body = template_content.format(*tuple(contacts[contact_mail]))
    
    msg['From'] = address
    msg['To'] = contact_mail
    msg['Subject'] = subject

    msg.attach(MIMEText(msg_body, 'plain'))
    print(msg)
    mail.sendmail(address, contact_mail, msg.as_string())
    print("Sent Successfully!")

mail.quit()
```

Here's our first occurence of `MIMEMultipart()`. This, as explained at the top, manages the content of the email according to a universal internet standard. There's more in-depth info [here](https://www.wikiwand.com/en/MIME). 

Let's remember that our `contacts` variable is a dictionary. We need to access both the emails and substitutions associated with them. That's where this line comes in, and does multiple things at once:

```python
    msg_body = template_content.format(*tuple(contacts[contact_mail]))
```

If you noticed in the `contacts.txt` file, the substitution is represented by a `{0}` . If you've done Python string formatting before, you may realize that character sequence allows for replacement with the [`.format()`](https://www.w3schools.com/python/ref_string_format.asp) function! 

- We first obtain the list of substitutions with `contacts[contact_mail]` - this returns a list, as explained when we wrote the `get_contacts()` function
- `tuple` is an [immutable](https://www.wikiwand.com/en/Immutable_object) data type in Python. When we write `*tuple()`, we unpack the list of substitutions as arguments for the `format()` function
- `template_content.format()` - since template_content is a string, we can use the format function to replace the `{0}` with custom arguments!

The following chunk from above attaches the body to the email in MIME format, and sends the email!

```python
msg.attach(MIMEText(msg_body, 'plain'))
print(msg)
mail.sendmail(address, contact_mail, msg.as_string())
```



At this point, go ahead and **run the program**. Assuming your email and password are correct, and you let your application access your Google account, the program should run successfully! Go check the emails of the contacts you wrote down.

![yay](https://cloud-mlx5oz5hm.vercel.app/tenor.gif)

If you're having problems, go check the final code up at the top of this page and make sure you didn't make any errors. 

---

## Further Hacking



There are many things that can be changed in this program. Go back and see what you can modify to make it your own! Because of the modularity of the project, to add another substitution, it's as simple as adding a `{1}` or a `{2}`  in `message.txt` and adding more commas and arguments in `contacts.txt`. Try to think of ways to make the project even better, and please share with me or others in the Hack Club community!



Here are some branches of the project that build upon the code (can also be found on [GitHub](https://github.com/hackclub/hackclub))

- **Switching Mail Servers**: [demo and code](https://repl.it/@apexblade/RoboticEmails-MailServerSwitch) 
  - Easily send templated emails from multiple accounts and smtp servers! 
- **Company Sponsor Email**: [demo and code](https://repl.it/@apexblade/RoboticEmails-SponsorEmail#main.py) 
  - An example of how far you can go with this project! In retrospect, it has hundreds of usages.
- **Multiple Messages**: [demo and code](https://repl.it/@apexblade/RoboticEmails-SwitchableMessages)
  - Multiple presets for emails, select one and send!

