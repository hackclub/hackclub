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

In the above image you'll see `Go to console` tab at top right corner, So click on that and you will be redirected to console section.

![Project page](https://cloud-kfr44a6da.vercel.app/2.png)

In the console section, you'll see all your FIREBASE projects and here you will see `Add Project` card, So click on it to create a project.

![Create project](https://cloud-nfiwmg8kh.vercel.app/3.png)

Here you have to give a name to your FIREBASE project as I am giving `Login-auth`.

After giving a wonderful name to your project just click on continue to proceed further.

![Analytics page](https://cloud-pva80oxrl.vercel.app/4.png)

Here is a step where you can use GOOGLE Analytics for you project but in these workshop you don't need it, So simply disable it.

![Project created](https://cloud-3swaas1pn.vercel.app/5.png)

Now here you'll see `Your new project is ready`. 

Hooray!🎉 you just created a new FIREBASE project.

### Connecting FIREBASE to your webpage 🔗 -

After successfully creating FIREBASE project you will see your project console.

At project console's landing page you will see `Get started by adding FIREBASE to your app` and below that you will see three options of integrations:
1. iOS
2. Android
3. </> (this option is for web on which you are working, So click on that).

![Project Console](https://cloud-l7pn8f9e9.vercel.app/6.png)

After clicking on that new page will pops up and ask you for a nickname of your project, So give one as i am giving it `login-auth` and click on register app.

![App nickname](https://cloud-8tdv8wfuj.vercel.app/8.png)

Then you will see some sort of JavaScript code, So don't worry about that, it is the code which contains some keys like API Key, Domain key which helps your FIREBASE project to connect to your webpage and for that you need to save this code anywhere or just copy/paste into the notes as it will required in coding part.

Also include below two lines with above code.

```javascript
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
```
```javascript
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
```

![API keys](https://cloud-nsps2klza.vercel.app/9.png)


After that you need to add existing users, So that they can login and for that you need to enable **Email/Password** authentication in your project's Authentication section, for that you need to click on tab `Authentication` on the top left `Develop` section.

![Authentication page](https://cloud-pnq6xn3gp.vercel.app/10.png)

So here in Authentication page you'll see different tabs:
- Users
- Sign-in method
- Templates
- Usage

Click on Sign-in method.

![Sign in method](https://cloud-nvyxode6r.vercel.app/11.png)

So here you need to enable **Email/Password** in `sign-in providers` section, So click on **Email/Password** and enable it and save it.

![Enable email-pass](https://cloud-2vpwetbvx.vercel.app/12.png)

After enabling that you need to add existing users, So for that click on `Users` tab.

![Add user](https://cloud-kbxm635o2.vercel.app/13.png)

Then click on `Add user` and add `Email` and `Password` for that user and click `Add user`.

![Save user](https://cloud-l38zbxdt7.vercel.app/14.png)

So in this way you can record users for restricted login 🔒.

### Designing a webpage 🖊️ - 

You should have a basic knowledge of:
- HTML
- CSS
- JavaScript

If you want to inspect the [Final Code](https://repl.it/@tanishqsoni/Loginauth) you can.

So at first you need to setup a coding environment and I suggests you to use [Repl.it](https://repl.it) as it sets everthing for you.

It looks like this 👇

<a href="https://repl.it/languages/html"><img src="https://cloud-g2gwlwjtx.vercel.app/c2.png"></a>


#### Coding Part </>

##### HTML
When you take a look at `index.html` file in your Repl, you'll see `<html>` tag which is the root of HTML file and inside `<html>` tag you'll see `<body>` tag which is the main body of HTML file or we can say it will contain all the main contents and here you will write your HTML code.

You will also find lines like:
- `<link href="style.css" rel="stylesheet" type="text/css"/>` which links your CSS file with the HTML. 
- `<script src="script.js"></script>` which links JavaScript file with HTML and this should be place just above closing body tag `</body>`.

So let's write our HTML Code:

In `<body>` tag you need to create a two divisions, the first division is for the login page and second is for the logout page using `<div>`.

Division 1:

Create your first division with a class `main_div` and assign ID `login_div`.

you can also give a heading to your page using heading tags like `<h1>,<h2>,<h3>.....`.

In this division you will create two input fields for EMAIL and PASSWORD using `<input>` tag with type `email` and `password` respectively and also assign IDs to both input fields `email_field` and `password_field` respectively.
 
Here you will also create a button Login using `<button>` and assign a onclick function `login()` to it and finally close your first division using `</div>`. 

So here's how your first division looks like:
```HTML
<div id="login_div" class="main_div">
    <h3>Login Authentication</h3>
    <input type="email" placeholder="Email..." id="email_field" />
    <input type="password" placeholder="Password..." id="password_field" />
    <button onclick="login()">Login</button>
</div>
```

Division 2:

Create your second division below the first with a class `loggedin_div` and assign ID `user_div`.

In this division you will create a button Logout and assign a onclick finction `logout()` to it and it's done.

So here's how your second division looks like:
```HTML
<div id="user_div" class="loggedin_div">
    <h3>Welcome</h3>
    <button onclick="logout()">Logout</button>
</div>
```

So here is your HTML code:

```HTML
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Login Authentication</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>

<div id="login_div" class="main_div">
  <h3>Login Authentication</h3>
  <input type="email" placeholder="Email..." id="email_field" />
  <input type="password" placeholder="Password..." id="password_field" />
  <button onclick="login()">Login</button>
</div>

<div id="user_div" class="loggedin_div">
  <h3>Welcome</h3>
  <button onclick="logout()">Logout</button>
</div>
<script src="script.js"></script>
</body>
</html>
```
![without CSS](https://cloud-e3wysrojq.vercel.app/c1.png)

So as you can see it is looking simple, So to make it look cool you need to add CSS but.... 

You remember you saved lines of JavaScript code from firebase.

So you need to include those lines after the second division:

Your here is your final HTML code:

```HTML
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Login Authentication</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>

<div id="login_div" class="main_div">
  <h3>Login Authentication</h3>
  <input type="email" placeholder="Email..." id="email_field" />
  <input type="password" placeholder="Password..." id="password_field" />
  <button onclick="login()">Login</button>
</div>

<div id="user_div" class="loggedin_div">
  <h3>Welcome</h3>
  <button onclick="logout()">Logout</button>
</div>

<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAVNeXl4cBro95I3dFWMaiT2rI88sqyBtc",
    authDomain: "loginauth-12.firebaseapp.com",
    databaseURL: "https://loginauth-12.firebaseio.com",
    projectId: "loginauth-12",
    storageBucket: "loginauth-12.appspot.com",
    messagingSenderId: "308714255384",
    appId: "1:308714255384:web:98e87065f0e45910f0ff6d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
<script src="script.js"></script>
</body>
</html>
```

##### CSS
This is a `style.css` file present in your Repl just below `script.js`, which gives styles and design to your webpage.

As you created two divisions in HTML file, So you will add designs to it and writing CSS is simple.

You just need to:
- Mention element/ class name/ ID.
- Open curly brackets `{`.
- Add styles.
- Close curly brackets `}`.

Here how you can add styles to your `<body>` tag:

```CSS
body {
  background: #000000;
  color: #fff;
  padding: 0px;
  margin: 0px;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
}
```
In this way you can add styles to (Divisions/ IDs) and whole webpage.

If you need help regarding various keywords uses in CSS, So you can go through [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

##### JAVASCRIPT

This is a `script.js` file present in your Repl just below `index.html`, which handles the functioning of your webpage.

Here you have to write small amount JavaScript code because FIREBASE has some pre-defined functions and properties for Authentication which you will use here and also you can check [FIREBASE Documentation on web authentication](https://firebase.google.com/docs/auth/web/start).

So what you have to do is, you need to `Get the currently signed-in user` as you already created user in FIREBASE.
In the `script.js` file you need to add a property [`Get the currently signed-in user`](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user) for that which is:

```javascript
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
```
As you created two divisions in HTML file, So you have to do something like, division with `login_div` ID to be displayed at login page and division with `user_div` ID to be displayed after login page or when user is signed-in.

So in above code you need to do make some changes

Add below two lines of code in the `if` condition of above code.

```javascript

document.getElementById("user_div").style.display = "block";
document.getElementById("login_div").style.display = "none";

```

So, the code looks like this

```javascript
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
  } else {
    // No user is signed in.
  }
});

In the above code `block` will displays the division and `none` will hide that division.

As you added this for signed-in user, So you also need `else` part _where user is not signed-in_ means user is on the login page, So the code will same as above code but you need to swap `block` and `none` as you need to display only `main_div` with ID `login_div`.

Add below code to the `else` condition.

```javascript

document.getElementById("user_div").style.display = "none";
document.getElementById("login_div").style.display = "block";

```
So the code looks like:

```javascript
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});


Now after completing this you need to work on both the functions you assigned in HTML buttons `login()` and `logout()`.

- Function login()
As user can sign-in only if there record is stored in FIREBASE. So, FIREBASE has a property called [`Sign-in existing user`](https://firebase.google.com/docs/auth/web/start#sign_in_existing_users) as exisiting users can sign-in through input fields.

Now you need to create two variables in `login()` function `userEmail` and `userPass` which get email and password values from the input fields with IDs `email_field` and `password_field`.

```javascript
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
}
```
So in the above function you need to add the [`Sign-in existing user`](https://firebase.google.com/docs/auth/web/start#sign_in_existing_users) property.

```javascript
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
```
In the above code replace `email` with `userEmail` and `password` with `userPass` as you declared those variables.

Also you need to display error message when error occurs like _wrong email or password_, So add below code in above function.
```javascript
window.alert("Error : " + errorMessage);
```
So, the code will
```javascript
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
```
- Function logout()

For logout add below code below the login().

```javascript
function logout(){
  firebase.auth().signOut();
}
```

So here is your final JavaScript code:
```javascript
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

  } 

  else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

```

Yayyy! you Finished with coding part!

Try login with the EMAIL and PASSWORD you recorded in FIREBASE.

### Hooray!🎉 
You finished the Web Login Authentication Workshop by completing all tasks:
- [x] Creating a FIREBASE project.
- [x] Connecting FIREBASE to your webpage
- [x] Designing a webpage.

### ⚡ What's Next?
Now you know how to build a web page with login authentication using FIREBASE.

Now how you can expand it? Try adding some other features to it with the help of [FIREBASE Guide](https://firebase.google.com/docs/auth/web/start?authuser=0)

Here are some examples 👇
- Adding `create account` feature, So user can create a new account.
- Adding `Email verification` feature.
- Adding `Anonymous Login` feature, So user can visit the page without login.

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


