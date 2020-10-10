---
name: 'Web Login Authentication'
description: 'Build a secure web login page using Firebase'
author: '@tanishq-soni'
---

# Web Login Authentication 🔒

In this workshop, you'll build a secure web login page using [Firebase](https://firebase.google.com/).

Firebase is a platform developed by Google for creating mobile and web applications.

You will make something like this 👇

![live gif](https://cloud-7782l8k04.vercel.app/loginv2.gif)

[Check out this demo of the final product!](https://Loginauth.tanishqsoni.repl.co)

You can test out the demo site using the following credentials:

- Email: `login@authentication.com`
- Password: `password`

### Getting Started 🚀

To get started, you should have a basic knowledge of:
- HTML
- CSS
- JavaScript

So let's begin 💨

## Creating a Firebase project 💻
First, you will need to [sign in to Firebase](https://firebase.google.com/) using a Google account. If you don't have one, you can [create one here](https://accounts.google.com/signup).

After signing in, you will see a page similar to this:

![Firebase landing](https://cloud-mketa8pxq.vercel.app/1.png)

In the image above, you'll see the `Go to console` button at the top right corner. Click on that, and you will be redirected to the console section.

![Project page](https://cloud-kfr44a6da.vercel.app/2.png)

In the console section, you'll see all your Firebase projects and the `Add Project` button. Click on it to create a project.

![Create project](https://cloud-nfiwmg8kh.vercel.app/3.png)

Here you have to give a name to your Firebase project such as `Login-auth`.

After giving a name to your project, click on continue to proceed further.

![Analytics page](https://cloud-pva80oxrl.vercel.app/4.png)

Here is an optional step where you can use Google Analytics for your project, but in this workshop, you won't need it.

![Project created](https://cloud-3swaas1pn.vercel.app/5.png)

Now here you should see `Your new project is ready`. 

Hooray!🎉 you just created a new Firebase project.

## Connecting Firebase to your webpage 🔗

After successfully creating the Firebase project, you will see your project console.

At the project's console landing page, you will see `Get started by adding Firebase to your app`, and below that, you will see three options of integrations:
1. iOS
2. Android
3. </> (this option is for web on which you are working, so click on that).

![Project Console](https://cloud-l7pn8f9e9.vercel.app/6.png)

After clicking it a new page will pop up and ask you for a name for your app. For this workshop, we will use `login-auth` as the app name.

![App nickname](https://cloud-8tdv8wfuj.vercel.app/8.png)

Here is an **important** part!

You will see some sort of JavaScript code, the code which helps your Firebase project to connect with your webpage. So, make sure you save this code or copy it somewhere as it is required later.

After saving the code, click on `continue to console`.
![API keys](https://cloud-nsps2klza.vercel.app/9.png)

After that you need to add the existing users so that they can log in and for that, you need to enable **Email/Password** authentication in your project's Authentication section, for that, you need to click on the tab `Authentication` on the top left `Develop` section.

![Authentication page](https://cloud-pnq6xn3gp.vercel.app/10.png)

So here in the Authentication page, you'll see different tabs:
- Users
- Sign-in method
- Templates
- Usage

Click on the Sign-in method.

![Sign in method](https://cloud-nvyxode6r.vercel.app/11.png)

Here, you need to enable **Email/Password** in the `sign-in providers` section, so click on **Email/Password** and enable it and save it.

![Enable email-pass](https://cloud-2vpwetbvx.vercel.app/12.png)

After enabling, you need to add existing users, so click on the `Users` tab.

![Add user](https://cloud-kbxm635o2.vercel.app/13.png)

Then click on `Add User` and add `Email` and `Password` for that user and click `Add User`.

![Save user](https://cloud-l38zbxdt7.vercel.app/14.png)

## Designing a webpage 🖊️

First, you need to set up a coding environment, I suggest you use [Repl.it](https://repl.it) as it sets everything for you.

To get started, go to [https://repl.it/languages/html](https://repl.it/languages/html).

It looks like this 👇

<a href="https://repl.it/languages/html"><img src="https://cloud-g2gwlwjtx.vercel.app/c2.png"></a>

### Coding Part </>

#### HTML
When you take a look at the `index.html` file in your Repl, you'll see the `<html>` tag, which is the root of the HTML file, and inside the `<html>` tag, you'll see the `<body>` tag, which is the main body of HTML file and contains all the content for our webpage.

You will also find lines like:
- `<link href="style.css" rel="stylesheet" type="text/css">`, which links your CSS file (`style.css`) with the HTML. 
- `<script src="script.js"></script>`, which links your JavaScript file (`script.js`) with HTML and this should be place just above closing body tag `</body>`.
Let's write our HTML code:

In the `<body>` tag, you need to create two divisions, the first division is for the login page, and the second is for the logout page using `<div>`.

##### Division 1:

Create your first division with a class `main_div` and assign ID `login_div`.

You can also give a heading to your page using heading tags like `<h1>,<h2>,<h3>.....`.

In this division, you will create two input fields for email and password using `<input>` tag with `type` `email` and `password` respectively and also assign IDs to both input fields, `email_field` and `password_field` respectively.

Also, you can add the `placeholder` attribute, which specifies a short hint that describes the expected value of an input field / textarea.
 
Here you will also create a button login using `<button>` tag and assign a onclick function `login()` to it and finally close your first division using `</div>`.

So here's how your first division looks like:
```HTML
<div class="main_div" id="login_div">
    <h3>Login Authentication</h3>
    <input type="email" placeholder="Email..." id="email_field">
    <input type="password" placeholder="Password..." id="password_field">
    <button onclick="login()">Login</button>
</div>
```

##### Division 2:

Create your second division below the first with a class `loggedin_div` and assign ID `user_div`.

In this division, you will create a logout button and assign a onclick function `logout()` to it.

So here's how your second division looks like:
```HTML
<div class="loggedin_div" id="user_div">
    <h3>YAYYY! You successfully logged-in using Firebase.....</h3>
    <button onclick="logout()">Logout</button>
</div>
```

So here is what your HTML code should look like:

```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Login Authentication</title>
  <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="main_div" id="login_div">
  <h3>Login Authentication</h3>
  <input type="email" placeholder="Email..." id="email_field">
  <input type="password" placeholder="Password..." id="password_field">
  <button onclick="login()">Login</button>
</div>
<div class="loggedin_div" id="user_div">
  <h3>YAYYY! You successfully logged-in using Firebase.....</h3>
  <button onclick="logout()">Logout</button>
</div>
<script src="script.js"></script>
</body>
</html>
```

![without JS](https://cloud-ff66h83qt.vercel.app/0u1.png)

As you can see, both divisions are displaying on the same page, but you need to display the second division after the user successfully logged-in as it contains the logout button.

For that, you need to work on JavaScript. But before moving on, remember you saved some lines of JavaScript code from Firebase?
```javascript
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
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
```
Here is an **important** step, look at very first line of code:

`<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>`.

This will give you an error, as it only integrates the `Firebase-app`, not the Firebase library. So for that, add this below the first line.

`<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>`.

After adding it, this should be your code:

```javascript
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
```

So, paste the code above right after the second division.

Here is your final HTML code:
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Login Authentication</title>
  <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="main_div" id="login_div">
  <h3>Login Authentication</h3>
  <input type="email" placeholder="Email..." id="email_field">
  <input type="password" placeholder="Password..." id="password_field">
  <button onclick="login()">Login</button>
</div>
<div class="loggedin_div" id="user_div">
  <h3>YAYYY! You successfully logged-in using Firebase.....</h3>
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

#### JavaScript

This is the `script.js` file present in your repl just below the `index.html` file. JavaScript handles the logic of your webpage.

Here, you have to write a small amount of JavaScript code because Firebase has some pre-defined functions for Authentication, which you will use here, and also, you can check [Firebase Documentation on web authentication](https://firebase.google.com/docs/auth/web/start).

So what you have to do is get the currently signed-in user you created on Firebase.

In the `script.js` file, you need to add a fuction called [Get the currently signed-in user](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user) for that which is:

```javascript
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
```
As you created two divisions in the HTML file, you need to display a division with ID `login_div` at the login page and a division with ID `user_div` after the login page or when the user is signed-in.

So in the above code, some changes have to be made.

Add below two lines of code in the `if` condition of the above code.

```javascript
document.getElementById("user_div").style.display = "block";
document.getElementById("login_div").style.display = "none";
```

The code should look like this:

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
```

In the code above, `block` will display the division, and `none` will hide it.

As you added this for a signed-in user, you also need the `else` part. _where user is not signed-in_ means the user is on the login page, so the code will be the same as the code above, but you need to swap `block` and `none` to display only `main_div` with ID `login_div`.

Add this code to the `else` condition.

```javascript
document.getElementById("user_div").style.display = "none";
document.getElementById("login_div").style.display = "block";
```

The code should look like:

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
```
Now, how it looks like:

![with JS](https://cloud-e3wysrojq.vercel.app/c1.png)

After completing this, you need to work on both the functions you assigned in HTML buttons `login()` and `logout()`.

##### Function login()
A user can sign-in only if their record is stored in Firebase. So, firebase has a property called [`Sign-in existing user`](https://firebase.google.com/docs/auth/web/start#sign_in_existing_users) as existing users can sign-in through input fields.

Now you need to create two variables in `login()` named `userEmail` and `userPass` which get email and password values from the input fields with IDs `email_field` and `password_field`.

```javascript
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
}
```
So in the function above, you need to add the [`Sign-in existing user`](https://firebase.google.com/docs/auth/web/start#sign_in_existing_users) property.

```javascript
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
```
In the code above replace `email` with `userEmail` and `password` with `userPass`.

You also need to display an error message when an error occurs like _wrong email or password_, so add the below code in the above function.
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
##### Function logout()

For logout add this code below the login().

```javascript
function logout(){
  firebase.auth().signOut();
}
```

Here is your final JavaScript code:
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
It looks like this 👇

![live](https://cloud-meubu1zac.vercel.app/0login_2.1.gif)

Try logging in with the email and password you stored in Firebase. If it worked, you should be all set!

As you can see, the main goal of this workshop is completed here, but to make your webpage look cool, you need to add some custom CSS.

#### CSS
The `style.css` file present in your Repl just below `script.js` gives styles and designs to your webpage.

As you created two divisions in the HTML file, so you will add designs to it, and writing CSS is simple.

You just need to:
- Mention element/ class name/ ID.
- Open curly brackets  `{`.
- Add styles.
- Close curly brackets  `}` .

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

This way you can add styles to divisions, ids, the whole webpage. Inspect my [CSS file](https://repl.it/@tanishqsoni/Loginauth#style.css).

You can select different colors from a [color picker](https://www.google.com/search?q=color+picker) to give your webpage a cool colorful look.

If you need help regarding the various keywords used in CSS, you can go through the [CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

Yayyy 🎊! You are done with the coding part! 

Take a look at [Final Code](https://repl.it/@tanishqsoni/Loginauth).

## Hooray!🎉 
You finished the Web Login Authentication Workshop by completing all tasks:
- [x] Creating a Firebase project.
- [x] Connecting Firebase to your webpage.
- [x] Designing a webpage.

## ⚡ What's Next?
Now, how you can expand it? Try adding some other features to it with the help of [Firebase Guide](https://firebase.google.com/docs/auth/web/start?authuser=0)

Here are some examples 👇
- `create account` feature, so the user can create a new account.
- `Email verification` feature.
- `Anonymous Login` feature, so the user can visit the page without login.

### ⭐ Live examples with code

#### Create Account
In this feature, you can type an email and password of your choice and click on `create an account`.

- [Live example](https://loginauthcreateaccount.tanishqsoni.repl.co/)
- [Code](https://repl.it/@tanishqsoni/loginauthcreateaccount)

#### Email verification
In this feature, you can send a verification email to verify your account after login.

- [Live example](https://loginauthemailverification.tanishqsoni.repl.co/)
- [Code](https://repl.it/@tanishqsoni/Loginauthemailverification)

#### Anonymous Login
In this feature, you can log in anonymously without entering an email or password.

- [Live example](https://loginauthanonymous.tanishqsoni.repl.co/)
- [Code](https://repl.it/@tanishqsoni/Loginauthanonymous)
