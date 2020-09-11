---
name: 'Login Authentication'
description: 'Build a secure web login page using firebase'
author: '@tanishq-soni'
---

# Login Authentication 🔒

In this workshop you'll build a web login page using firebase. In which only those peoples who are added to database can login.

This is a workshop to help you make something like this 👇

<img src="https://cloud-8d96q79da.vercel.app/login_page.png">

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

### Designing a webpage 💻 - 

Yea! it is the important part for this workshop, you need to design a webpage with login page card using:
- HTML
- CSS
- JavaScript

I have already created a code template so you can check it out and i will explain some parts of code which is important.

<img src="https://cloud-9e1ogteoo.vercel.app/7.png">

**Code** : [Repl.it](https://repl.it/@tanishqsoni/Loginauth)

#### Explaination of code </>

##### HTML
HTML code is not complex here, I have created two divisons `main-div` & `loggedin-div`. 
- `main-div`
  - It is the main division which consists:
    - Input fields `email` and `password`.
    - Login button with onclick function `login()`.
- `loggedin-div`
  - It is the logged in divison which consists:
    - Logout button with onclick function `logout()`.
    
You can see [HTML](https://repl.it/@tanishqsoni/Loginauth#index.html) file here.

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
The style of webpage is completely of your own choice like whether you need blue colour or black, you need rectangle buttons or circle! its completely yours. 

You can see [CSS](https://repl.it/@tanishqsoni/Loginauth#style.css) file here.

##### JAVASCRIPT

The main part of webpage comes here, not to complex but somewhat and you can also read [firebase Auth documentation](https://firebase.google.com/docs/auth/web/start?authuser=0).

In the JavaScript file first you need to add a `AuthState` property which will determine the next steps using conditions

`user is signed-in` and `no user is signed-in`.

```javascript
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
```
As you now we created two divisions in HTML and we need `loggedin-div` division to be displayed only when the user is signed-in so in above code we need to do some changes,
but before we make changes we need to assign `IDs` to both divisions:

ID `user_div` to division `loggedin-div`

ID `login_div` to division `main-div`

After assigning IDs add this code in the `if` statement of `AuthState` property.

```javascript

document.getElementById("user_div").style.display = "block";
document.getElementById("login_div").style.display = "none";

```
In the above code `block` will display the division and `none` will hide the division.

As we added this for signed-in user so we also need `else` part _while user is not signed-in_ so the code will same as above code but we need to swap `block` and `none` as we need to show only `main-div`. 

Add below code to `else` statement of `AuthState` property.

```javascript

document.getElementById("user_div").style.display = "none";
document.getElementById("login_div").style.display = "block";

```
Now after completing this we need to work on both the functions we assigned in HTML `login()` and `logout()`.

##### Function login()
As we only need `Sign-in for existing users` or users form database so for that firebase has a property called `signInWithEmailAndPassword`.

So before we work on it we need to assign some IDs to input fields in HTML as we need to work with input field here.

ID `email_field` to `email` input field.

ID `password_field` to `password` input field.

After assigning IDs we will create two variables in `login()` function `userEmail` and `userPass` which get email and password from assigned IDs.

```javascript
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
}
```
So in the above function we need to add the `signInWithEmailAndPassword` which we discussed above.

```javascript
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
```
In the above code replace `email` with `userEmail` and `password` with `userPass`.

Also we need to display error when error occurs like _wrong email or password_ so add below code in above function.
```javascript
window.alert("Error : " + errorMessage);
```
##### Function logout()

In order to logout the user we need to create `logout()` and inside that function we need to call firebase `signOut` function.

```javascript
function logout(){
  firebase.auth().signOut();
}
```
You can see [JavaScript](https://repl.it/@tanishqsoni/Loginauth#index.js) here.

Hooray!🎉 you just finished with the coding part!

### Connecting firebase to your webpage

So again moving to firebase, After successfully creating firebase project you will see your project console.

At project console's landing page you will see `Get started by adding Firebase to your app` and below that you will se three options of integrations:
1. iOS
2. Android
3. </> (this option is for web on which we are working so click on that).

<img src="https://cloud-l7pn8f9e9.vercel.app/6.png">

After clicking on that new page will pops up and ask you for a nickname of your project so give one as i am giving it `login-auth` and click on register app.

<img src="https://cloud-8tdv8wfuj.vercel.app/8.png">

Then you will see some sort of JavaScript code. you need to copy this code and paste it into HTML code before `</body>` tag.

<img src="https://cloud-nsps2klza.vercel.app/9.png">

Now you have successfully integrated the firebase to your webpage. 

After that you need to add users to database so that they can login, so for that you need to enable email/password authentication in your project's Authentication section, for that you need to click on `Authentication` on the top left `Develop` section.

<img src="https://cloud-pnq6xn3gp.vercel.app/10.png">

So here in Authentication page you'll see options:
- Users
- Sign-in method
- Templates
- Usage

Click on Sign-in method.

<img src="https://cloud-nvyxode6r.vercel.app/11.png">

So first we need to enable Email/Password in `sign-in providers` section, so click on (Email/Password) and enable it and save it.

<img src="https://cloud-2vpwetbvx.vercel.app/12.png">

After enabling that we need to add users to database, for that click on `Users` tab.

<img src="https://cloud-kbxm635o2.vercel.app/13.png">

Then click on `Add user` and add `email` and `password` for the user and click `Add user`.

<img src="https://cloud-l38zbxdt7.vercel.app/14.png">

So, this is the database in which you can record users for restricted login 🔒.

Now at last if you need hosting for your app, you can choose firebase hosting.

### Hosting app in firebase

For hosting your app in firebase you need to go to `Hosting` in the `Develop` section.

<img src="https://cloud-ph3x9zqi5.vercel.app/15.png">

In Hostings click on `Get Started` and follow all screen instructions or follow below steps.

<img src="https://cloud-764le5mp9.vercel.app/16.png">

Now you need to install firebase CLI and for that you should have node installed.

Run the following command to install firebase CLI
`npm install -g firebase-tools`

After installing CLI go to the directory where your project is stored and open terminal and run following commands.

Run `firebase login` for login into firebase, after login proceed with below commands.


Run `firebase init` for setting up project directory.

Follow the onscreen instructions.

<img src="https://cloud-47uau0rvc.vercel.app/c1.png">

Using `space` move to hosting and press `enter`.

<img src="https://cloud-okanfrh18.vercel.app/c2.png">

After selecting hosting option you will be ask to select firebase project, so select a valid existing project and press `enter`.

<img src="https://cloud-g6kdkqkyv.vercel.app/c3.png">
<img src="https://cloud-itpmqub7h.vercel.app/c4.png">

Now you need to setup hosting so for that `public` is the default folder which will contain your project i.e. (HTML + CSS + JavaScript files).
So you need to create a folder named `public` and transfer all project files to it.

<img src="https://cloud-j3w043jzq.vercel.app/c5.png">

here it will ask you to auto create a new `index.html` in the public folder so you can select `no` as we already have `index.html`.

<img src="https://cloud-gfaewro6r.vercel.app/c6.png">

So after that initialization will complete.

<img src="https://cloud-eixkmi8ft.vercel.app/c7.png">

Now at last step we need to deploy our project, so for that

Run `firebase deploy` and your project will be hosted online.

<img src="https://cloud-aii6uvk91.vercel.app/c8.png">

In above image you will see `Hosting URL`[https://loginauth-12.web.app/](https://loginauth-12.web.app/) so that is the URL for your project.

Hooray!🎉 you finished the Login Authentication Workshop by completing all tasks:
- [x] Creating firebase project.
- [x] Designing a webpage.
- [x] Connecting firebase to your webpage
- [x] Hosting app in firebase

