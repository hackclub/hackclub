---
name: 'Web Login Authentication'
description: 'Build a secure web login page using firebase'
author: '@tanishq-soni'
---

# Web Login Authentication 🔒

In this workshop you'll build a secure web login page using [Firebase](https://firebase.google.com/).

You will make something like this 👇

![login](https://cloud-7782l8k04.vercel.app/loginv2.gif)

[Live Example](https://loginauth-12.web.app)

Try live example using Email-`login@authentication.com` and Password-`password`.

## Getting Started :rocket:


### Creating a firebase project -
At first you will need to sign-in to firebase, if you have google account then you can directly sign-in to firebase otherwise create one.

After sign-in you will see an interface like image below.

<img src="https://cloud-mketa8pxq.vercel.app/1.png">

In the above image you'll see `Go to console` tab at top right corner, so click on that and you will be redirected to console section.

<img src="https://cloud-kfr44a6da.vercel.app/2.png">

In the console section you'll see all your firebase projects and here you will see `Add Project` card so click on that to create a new project.

<img src="https://cloud-nfiwmg8kh.vercel.app/3.png">

Here you have to give a name to your firebase project as i am giving `Login-auth`.

After giving a wonderful name to your project just click on continue to proceed further.

<img src="https://cloud-pva80oxrl.vercel.app/4.png">

Here is an optional step, If you need Google Analytics for your projects to can click on `enable` otherwise continue.

<img src="https://cloud-3swaas1pn.vercel.app/5.png">

Now here you'll see `Your new project is ready`. Hooray!🎉 you just created your new firebase project.

So before moving to project console first we need to design our login webpage.

### Designing a webpage 💻 - 

Yea! it is the important part for this workshop, you need to design a login webpage using:
- HTML
- CSS
- JavaScript

I have already created a code template so you can check it out and i will explain some important parts of code which will help you for your workshop.

<img src="https://cloud-9e1ogteoo.vercel.app/7.png">


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

The main part of webpage comes here and you can also go through [firebase Auth documentation](https://firebase.google.com/docs/auth/web/start?authuser=0).

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
As in this login page user can sign-in only if they are existing user so for that firebase has a property called [`signInWithEmailAndPassword`](https://firebase.google.com/docs/auth/web/start#sign_in_existing_users).

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

In order to logout the user you need to create `logout()` and inside that function we need to call firebase `signOut` function:

```javascript
function logout(){
  firebase.auth().signOut();
}
```
Lookout complete [JavaScript](https://repl.it/@tanishqsoni/Loginauth#index.js) code.

Hooray!🎉 you just finished with the coding part!

### Connecting firebase to your webpage 🔗 -

So again moving to firebase, After successfully creating firebase project you will see your project console.

At project console's landing page you will see `Get started by adding Firebase to your app` and below that you will see three options of integrations:
1. iOS
2. Android
3. </> (this option is for web on which you are working so click on that).

<img src="https://cloud-l7pn8f9e9.vercel.app/6.png">

After clicking on that new page will pops up and ask you for a nickname of your project so give one as i am giving it `login-auth` and click on register app.

<img src="https://cloud-8tdv8wfuj.vercel.app/8.png">

Then you will see some sort of JavaScript code so don't worry about that, it is the code which contains some keys like API Key, Domain key which helps your firebase project to connect to your webpage and for that you need to copy this code and paste it into HTML code before `</body>` tag.

Also include firebase JS SDK before that code.

```javascript
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
```

<img src="https://cloud-nsps2klza.vercel.app/9.png">

Now you have successfully integrated the firebase project to your webpage. 

After that you need to add existing users so that they can login and for that you need to enable **Email/Password** authentication in your project's Authentication section, for that you need to click on tab `Authentication` on the top left `Develop` section.

<img src="https://cloud-pnq6xn3gp.vercel.app/10.png">

So here in Authentication page you'll see different tabs:
- Users
- Sign-in method
- Templates
- Usage

Click on Sign-in method.

<img src="https://cloud-nvyxode6r.vercel.app/11.png">

So here you need to enable **Email/Password** in `sign-in providers` section, so click on **Email/Password** and enable it and save it.

<img src="https://cloud-2vpwetbvx.vercel.app/12.png">

After enabling that you need to add users to database, for that click on `Users` tab.

<img src="https://cloud-kbxm635o2.vercel.app/13.png">

Then click on `Add user` and add `Email` and `Password` for that user and click `Add user`.

<img src="https://cloud-l38zbxdt7.vercel.app/14.png">

So, this is the database in which you can record users for restricted login 🔒.

Now at last if you need hosting for your app you can choose any hosting providers like [Github](https://github.com/), [Vercel](https://vercel.com/), [Firebase](https://firebase.google.com/) and [Repl.it](https://repl.it) This online IDE provides you to host your webpage directly while writing code.

Here i am going with Firebase.

### Hosting webpage in firebase 🌐 - 

For hosting your webpage in firebase you need to go to `Hosting` tab in the `Develop` section.

<img src="https://cloud-ph3x9zqi5.vercel.app/15.png">

In Hostings click on `Get Started` and follow all on-screen instructions or follow below steps:

<img src="https://cloud-764le5mp9.vercel.app/16.png">

Now you need to install firebase CLI and for that you should have node installed.

Run the following command to install firebase CLI
`npm install -g firebase-tools`

After installing CLI, headover your terminal to the directory where your webpage files is stored and run following commands:

Run `firebase login` for login into firebase and after successfully login proceed with below commands.


Run `firebase init` for setting up project directory.

Follow the instructions on your terminal.

<img src="https://cloud-47uau0rvc.vercel.app/c1.png">

Using `space` move to hostings option and press `enter`.

<img src="https://cloud-okanfrh18.vercel.app/c2.png">

After selecting hosting option you will be ask to select firebase project, so select a project you just create and press `enter`.

<img src="https://cloud-g6kdkqkyv.vercel.app/c3.png">
<img src="https://cloud-itpmqub7h.vercel.app/c4.png">

Now you need to setup hosting so for that `public` is the default folder which will contain your webpage files i.e. (HTML + CSS + JavaScript).
So you need to create a folder named `public` in your webpage directory and transfer all project files to it.

<img src="https://cloud-j3w043jzq.vercel.app/c5.png">

Here it will ask you to auto create a new `index.html` in the public folder so you can select `N (for no)` as we already have `index.html`.

<img src="https://cloud-gfaewro6r.vercel.app/c6.png">

So after that initialization process will complete.

<img src="https://cloud-eixkmi8ft.vercel.app/c7.png">

Now at last step you need to deploy you webpage and for that

Run `firebase deploy` command and your webpage will be hosted online.

<img src="https://cloud-aii6uvk91.vercel.app/c8.png">

In above image you will see `Hosting URL`[https://loginauth-12.web.app/](https://loginauth-12.web.app/) so that is the URL for your webpage.

You can also use custom domain for your webpage by wising domain section in firebase.

### Hooray!🎉 
You finished the Web Login Authentication Workshop by completing all tasks:
- [x] Creating a firebase project.
- [x] Designing a webpage.
- [x] Connecting firebase to your webpage
- [x] Hosting app in firebase

### ⚡ What's Next?
Now you know how to build a web page with login authentication using firebase.

Now how you can expand it? Try adding some other features to it with the help of [Firebase Guide](https://firebase.google.com/docs/auth/web/start?authuser=0)

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


