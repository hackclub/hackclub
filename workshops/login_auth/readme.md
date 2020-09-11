---
name: 'Login Authentication'
description: 'Build a secure web login page using firebase'
author: '@tanishq-soni'
---

# Login Authentication 🔒

In this workshop you'll build a web login page using firebase. In which only those peoples who are added to database can login.

This is a workshop to help you make something like this 👇

<img src="https://cloud-mketa8pxq.vercel.app/1.png">

## Getting Started :rocket:
### Creating a firebase project -
At first you'll need to sign-in to firebase console. if you have google account then you can directly sign-in to firebase, otherwise create one.

After sign-in you will see an interface like image below.

<img src="https://cloud-mketa8pxq.vercel.app/1.png">

In the above image you'll see `Go to console` tab at top right corner, so click on that and you will be redirected to console section.

<img src="https://cloud-kfr44a6da.vercel.app/2.png">

In the console section you'll see all your firebase projects and here you'll see `Add Project Card` so click on that to create a new project.

<img src="https://cloud-nfiwmg8kh.vercel.app/3.png">

Here you will need to give a name to your firebase project as i am giving `Login-auth`.

After giving a wonderful name to your project just click on continue to proceed further.

<img src="https://cloud-pva80oxrl.vercel.app/4.png">

Here is an optional step, If you need Google Analytics for your projects to can click on `enable` otherwise continue.

<img src="https://cloud-3swaas1pn.vercel.app/5.png">

So here you'll see `Your new project is ready`. Hooray!🎉 you just created your new firebase project.

So now before moving to project console, we need to setup our webpage in which we can login so lets proceed further.

### Creating a webpage 💻 - 

Yea! it is the important part for this workshop, you need to create a webpage and design a login page card using:
- HTML
- CSS
- JavaScript

I have already created a code template so you can check it out and i will explain some parts if code which is important.

<img src="https://cloud-9e1ogteoo.vercel.app/7.png">

**Code** : [Repl.it](https://repl.it/@tanishqsoni/Loginauth)

#### Explaination of code </>

##### HTML
HTML code is not complex here, I have created two divisons `main-div` & `loggedin-div`.
- `main-div`
  - It is the main division which consists:
    - Input fields like `email-field` and `password-field`.
    - Login button with onclick function `login()`.
- `loggedin-div`
  - It is the logged in divison which consists:
    - Logout button with onclick function `logout()`.
