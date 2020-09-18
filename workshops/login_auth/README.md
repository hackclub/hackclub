---
name: 'Web Login Authentication'
description: 'Build a secure web login page using FIREBASE'
author: '@tanishq-soni'
---

# Web Login Authentication 🔒

In this workshop you'll build a secure web login page using [FIREBASE](https://firebase.google.com/).

You will make something like this 👇

![live gif](https://cloud-7782l8k04.vercel.app/loginv2.gif)

[Live Example](https://loginauth-12.web.app)

Try live example using:
- EMAIL-`login@authentication.com`
- PASSWORD-`password`

## Getting Started :rocket:


### Creating a FIREBASE project 💻 -
At first you will need to sign-in to [FIREBASE](https://firebase.google.com/), if you have google account then you can directly sign-in to FIREBASE otherwise create one.

After sign-in you will see an interface like image below.

![Firebase landing](https://cloud-mketa8pxq.vercel.app/1.png)

In the above image you'll see `Go to console` tab at top right corner, so click on that and you will be redirected to console section.

![Project page](https://cloud-kfr44a6da.vercel.app/2.png)

In the console section, you'll see all your FIREBASE projects and here you will see `Add Project` card. So click on it to create a project.

![Create project](https://cloud-nfiwmg8kh.vercel.app/3.png)

Here you have to give a name to your FIREBASE project as I am giving `Login-auth`.

After giving a wonderful name to your project just click on continue to proceed further.

![Analytics page](https://cloud-pva80oxrl.vercel.app/4.png)

Here is a step where you can use GOOGLE Analytics for you project but in these workshop you don't need it, So simply disable it.

![Project created](https://cloud-3swaas1pn.vercel.app/5.png)

Now here you'll see `Your new project is ready`. 

Hooray!🎉 you just created a new FIREBASE project.

So before moving to project console first we need to design our login webpage.

### Designing a webpage 🖊️ - 

Yea! it is the important part for this workshop, you need to design a login webpage using:
- HTML
- CSS
- JavaScript

I have already created a code template so you can check it out and i will explain some important parts of code which will help you for your workshop.

![Repl code](https://cloud-9e1ogteoo.vercel.app/7.png)


## CODE : [Repl.it](https://repl.it/@tanishqsoni/Loginauth)

#### Explaination of code </>

##### HTML
HTML code is not complex here, i created two divisons `main-div` & `loggedin-div`. 
- `main-div`
  - It is the main division which consists:
    - Input fields like `email` and `password`.
    - Login button with onclick function `login()`.
- `loggedin-div`
  - It is the logged in divison which consists:
    - Logout button with onclick function `logout()`.
    
lookout [HTML](https://repl.it/@tanishqsoni/Loginauth#index.html) code.

don't forgot to link HTML file with the CSS and JavaScript file using:

_CSS_
```html
<link rel="stylesheet" href="style.css" />
```

_JavaScript_
```html
<script src="index.js"></script>
```

##### CSS
The style of webpage is completely of your own choice like whether you need blue colour or black, you need rectangle buttons or circle! its completely yours choice.

lookout [CSS](https://repl.it/@tanishqsoni/Loginauth#style.css) code.

##### JAVASCRIPT

The main part of webpage comes here and you can also go through [FIREBASE Auth documentation](https://firebase.google.com/docs/auth/web/start?authuser=0).

In the JavaScript code first you need to add a [`AuthState`](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user) property which is used to get currently `signed-in` user

```javascript
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
```
As you created two divisions in HTML so you have to do something like that `loggedin-div` division to be displayed only when the user is signed-in. So in above code you need to do some changes
but before you make some changes you need to assign IDs to both divisions:

- ID `user_div` to division `loggedin-div`.

- ID `login_div` to division `main-div`.

After assigning IDs add this code in the `if` statement of [`AuthState`](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user) property.

```javascript

document.getElementById("user_div").style.display = "block";
document.getElementById("login_div").style.display = "none";

```
In the above code `block` will display the division and `none` will hide the division.

As you added this for signed-in user so you also need `else` part _while user is not signed-in_ so the code will same as above code but you need to swap `block` and `none` as you need to show only `main-div`. 

Add below code to `else` statement of [`AuthState`](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user) property.

```javascript

document.getElementById("user_div").style.display = "none";
document.getElementById("login_div").style.display = "block";

```
Now after completing this you need to work on both the functions you assigned in HTML `login()` and `logout()`.

##### Function login()
As in this login page user can sign-in only if they are existing user so for that FIREBASE has a property called [`signInWithEmailAndPassword`](https://firebase.google.com/docs/auth/web/start#sign_in_existing_users).

So before you work on it you need to assign some IDs to input fields in HTML as you need to work with input field here.

- ID `email_field` to `email` input field.

- ID `password_field` to `password` input field.

After assigning IDs you will create two variables in `login()` function `userEmail` and `userPass` which get email and password values from assigned IDs.

```javascript
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
}
```
So in the above function you need to add the [`signInWithEmailAndPassword`](https://firebase.google.com/docs/auth/web/start#sign_in_existing_users) property which we discussed above.

```javascript
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
```
In the above code replace `email` with `userEmail` and `password` with `userPass` as you declared that variables.

Also you need to display error message when error occurs like _wrong email or password_ so add below code in above function.
```javascript
window.alert("Error : " + errorMessage);
```
##### Function logout()

In order to logout the user you need to create `logout()` and inside that function we need to call FIREBASE `signOut` function:

```javascript
function logout(){
  firebase.auth().signOut();
}
```
Lookout complete [JavaScript](https://repl.it/@tanishqsoni/Loginauth#index.js) code.

Hooray!🎉 you just finished with the coding part!

### Connecting FIREBASE to your webpage 🔗 -

So again moving to FIREBASE, After successfully creating FIREBASE project you will see your project console.

At project console's landing page you will see `Get started by adding FIREBASE to your app` and below that you will see three options of integrations:
1. iOS
2. Android
3. </> (this option is for web on which you are working so click on that).

![Project Console](https://cloud-l7pn8f9e9.vercel.app/6.png)

After clicking on that new page will pops up and ask you for a nickname of your project so give one as i am giving it `login-auth` and click on register app.

![App nickname](https://cloud-8tdv8wfuj.vercel.app/8.png)

Then you will see some sort of JavaScript code so don't worry about that, it is the code which contains some keys like API Key, Domain key which helps your FIREBASE project to connect to your webpage and for that you need to copy this code and paste it into HTML code before `</body>` tag.

Also include FIREBASE JS SDK before that code.

```javascript
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
```
```javascript
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
```

![API keys](https://cloud-nsps2klza.vercel.app/9.png)

Now you have successfully integrated the FIREBASE project to your webpage. 

After that you need to add existing users so that they can login and for that you need to enable **Email/Password** authentication in your project's Authentication section, for that you need to click on tab `Authentication` on the top left `Develop` section.

![Authentication page](https://cloud-pnq6xn3gp.vercel.app/10.png)

So here in Authentication page you'll see different tabs:
- Users
- Sign-in method
- Templates
- Usage

Click on Sign-in method.

![Sign in method](https://cloud-nvyxode6r.vercel.app/11.png)

So here you need to enable **Email/Password** in `sign-in providers` section, so click on **Email/Password** and enable it and save it.

![Enable email-pass](https://cloud-2vpwetbvx.vercel.app/12.png)

After enabling that you need to add existing users, so for that click on `Users` tab.

![Add user](https://cloud-kbxm635o2.vercel.app/13.png)

Then click on `Add user` and add `Email` and `Password` for that user and click `Add user`.

![Save user](https://cloud-l38zbxdt7.vercel.app/14.png)

So in this way you can record users for restricted login 🔒.

### Hooray!🎉 
You finished the Web Login Authentication Workshop by completing all tasks:
- [x] Creating a FIREBASE project.
- [x] Designing a webpage.
- [x] Connecting FIREBASE to your webpage

### ⚡ What's Next?
Now you know how to build a web page with login authentication using FIREBASE.

Now how you can expand it? Try adding some other features to it with the help of [FIREBASE Guide](https://firebase.google.com/docs/auth/web/start?authuser=0)

Here are some examples 👇
- Adding `create account` feature so user can create a new account.
- Adding `Email verification` feature.
- Adding `Anonymous Login` feature so user can visit the page without login.

#### ⭐ Live examples with code -

##### Create Account
In this feature you can type email and password of your own choice and click on `create account`.

- [Live example](https://loginauthcreateaccount.tanishqsoni.repl.co/)
- [Code](https://repl.it/@tanishqsoni/loginauthcreateaccount)

##### Email verification
In this feature you can send verification mail to verify your account after login.

- [Live example](https://loginauthemailverification.tanishqsoni.repl.co/)
- [Code](https://repl.it/@tanishqsoni/Loginauthemailverification)

##### Anonymous Login
In this feature you can login anonymously without entering email or password.

- [Live example](https://loginauthanonymous.tanishqsoni.repl.co/)
- [Code](https://repl.it/@tanishqsoni/Loginauthanonymous)


