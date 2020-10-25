---
name: "Simple Image Sharing Site"
description: "Build an image hosting site in 30 minutes"
author: "@bezlin6mechminerz"
---

In this workshop, we will see how to make a simple site in which we can post images and view images posted by others. It will be super fun as you can host it and share your website with your friends and create a large collection of great pictures.

The workshop will look like this.

![Output video](https://cloud-75rs5g7wv.vercel.app/0ezgif.com-video-to-gif.gif)

View a [live demo](https://simplesocialmedia.bezlin.repl.co)

View the [final code](https://repl.it/@bezlin/simplesocialmedia#index.html)

This workshop will take about 30 minutes.

## Getting started

Lots of beginners make endless changes to their code and expect it to miraculously work right away. The problem with this approach is that it stacks one problem on top of another, and it becomes difficult to figure what went wrong. It is better if you code along.

This project requires [Repl.it.](https://repl.it) We will be using it for coding. It is awesome because you can code online. Just follow this link and start coding!

After that create a new repl and select language HTML, CSS, JS.

<img alt="repl.it image" src="https://cloud-o8q46nkko.vercel.app/screenshot_2020-09-25_at_9.23.06_pm.png">

## Code and explanation.

![Codding](https://cloud-bayjeej0h.vercel.app/0200w.gif)

### Let's start with the basic HTML structure.

```html
<!doctype html>
<head>
</head>
<body>
</body>
</html>
```

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

We add this to make the site responsive on different devices. It should be added to the head tag.

Now let's make a div to upload an image.

<img alt="Image upload div" src="https://cloud-iuod9ogzf.vercel.app/0screenshot_2020-10-24_at_6.28.11_am.png">

```html
<div class="uploaddiv">
  <h1>Simple social media</h1>
  <input onchange="fileinput()" type="file" id="photo" />
  <br />
  <input class="nameinput" placeholder="Your name" type="text" id="name" />
  <h1 class="status" id="status"></h1>
  <button onclick="upload()" class="imageupldbtn">Upload image</button>
</div>
```

This part is easy! We are making a heading "Simple social media", an input tag to upload the input file(i.e, the image). Remember to specify its input type as 'file'. Then an input tag to enter the name. Lastly, a button to upload it. You need to put this code under the body tag.

We will be using [Firebase](https://firebase.google.com) as our database to store images. So let's set it up!

Go to [firebase](https://firebase.google.com). Then click on 'go-to console' in the top right corner.

We don't want to miss any steps so let's take it step by step.

<img alt="Click on Create a project/ Add a project" src="https://cloud-56h0ofr9e.vercel.app/01.png">

<img alt="Name your project" src="https://cloud-m0g5nljqo.vercel.app/02.png">

<img alt="Click Continue" src="https://cloud-6kgv0jffi.vercel.app/03.png">

<img alt="Click Create" src="https://cloud-mskjdnn2m.vercel.app/04.png">

![Continue](https://cloud-iqousmfqn.vercel.app/0ezgif.com-video-to-gif.gif)

This is your firebase dashboard.

<img alt="You will get the dashboard" src="https://cloud-5j7och6xk.vercel.app/06.png">

<img alt="Go to project settings" src="https://cloud-5kv6kdks9.vercel.app/07.png">

<img alt="Create App" src="https://cloud-5uv8qengq.vercel.app/08.png">

<img alt="Name it and then create" src="https://cloud-2dhz9ficg.vercel.app/09.png">

<img alt="Copy the code shown" src="https://cloud-7xruyy6oh.vercel.app/010.png">

Now you need to paste the above code into the body tag.

```html
<body>
 <script>
 var firebaseConfig = {
 apiKey: "AIzaSyCegpMyyDrPgTHENIvOMbexUe9z1s7ydTE",
 authDomain: "simplesocialmedia-f46f6.firebaseapp.com",
 databaseURL: "https://simplesocialmedia-f46f6.firebaseio.com",
 projectId: "simplesocialmedia-f46f6",
 storageBucket: "simplesocialmedia-f46f6.appspot.com",
 messagingSenderId: "593816135912",
 appId: "1:593816135912:web:aa22cf3d2318613718015d",
 measurementId: "G-T3VD77TCVW"
 };
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 </script>
 <div class="uploaddiv">
 <h1>Simple social media</h1>
 <input onchange="fileinput()" type="file" id="photo" />
 <br />
 <input class="nameinput" placeholder="Your name" type="text" id="name" />
 <h1 class="status" id="status"></h1>
 <button onclick="upload()" class="imageupldbtn">Upload image</button>
</body>
```

Now we need to import firebase, firebase-firestore, firebase-storage. let's import it.

```js
<head>
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-storage.js"></script>
 <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js"></script>
 <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>
</head>
```

Now, let's configure the firebase-firestore.

<img alt="Create firestore database" src="https://cloud-e2i3fchdm.vercel.app/011.png">

<img alt="Select test mode" src="https://cloud-h4gng9zf6.vercel.app/012.png">

<img alt="Enable" src="https://cloud-oayloyi03.vercel.app/013.png">

<img alt="Create collection" src="https://cloud-5jvwke9tx.vercel.app/014.png">

Create a collection and just give sample data.

<img alt="Give sample data" src="https://cloud-6b5mq0p1c.vercel.app/015.png">

<img alt="Firestore is set" src="https://cloud-ilf6f1rk5.vercel.app/016.png">

Now your firebase is set. Let's jump into coding.

```html
<input onchange="fileinput()" type="file" id="photo" />
```

Here, in the input tag, the onchange function is calling a function 'fileinput'. Let's make it.

```js
function fileinput(e) {
  document.getElementById("status").innerHTML = "Setting up...";
  const ref = firebase.storage().ref();
  const file = document.querySelector("#photo").files[0];
  const task = ref.child(file.name).put(file);
  task
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      link = url;
      document.getElementById("status").innerHTML = "Now you can upload it.";
    });
}
```

In this function, we are returning a value(here the upload status) to the h1 tag(#status) to display that the image is setting up. Then we are declaring a variable ref as firebase storage. Next, we declare another variable file as the input field file fetch(i.e, the image that we select to upload) The variable task is to put the file into the firebase storage.
Then we are downloading the URL of the image that we just uploaded to our firebase storage.
After that, we display that the image is uploaded so you can post it. This adds the URL we just downloaded to the firebase firestore.
Let's push it to the firestore. This happens when you click the upload image button.

```js
function upload() {
  const name = document.getElementById("name").value;
  if (link === null) {
    document.getElementById("status").innerHTML = "Select an image.";
  } else if (name.length <= 2) {
    document.getElementById("status").innerHTML =
      "Name should be atleast 3 charector long.";
  } else {
    document.getElementById("status").innerHTML = "Uploading...";
    const url = {
      url: link,
      name: name,
    };
    db.collection("pictures")
      .doc()
      .set(url)
      .then(() => {
        location.reload();
      });
  }
}
```

We get the name the user gives in the input tag earlier and check if the URL of the image is null(meaning image not selected). Then we check whether the name is 3 characters long. After all this, we will display the message 'uploading...' and send our URL + name to our firestore. Now we need to display it right? Let's write the code for that.

```js
db.collection("pictures")
  .get()
  .then((querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => doc.data());
    var a = 0;
    for (var i in data) {
      var img = document.createElement("img");
      img.src = data[a].url;
      img.setAttribute("width", "600");
      var h = document.createElement("H1");
      var t = document.createTextNode(data[a].name);
      h.appendChild(t);
      h.style.color = "deeppink";
      document.getElementById("container").appendChild(h);
      document.getElementById("container").appendChild(img);
      a = a + 1;
    }
  });
```

In these lines of code, we are fetching all URLs of our images from our firestore and storing it in an array. Then we display them one after the other. Here we need to create 2 tags one for the image and one for the heading for displaying the images and names. Then we need to make a container in which we append it.

```html
<div class="seconddiv" id="container"></div>
```

### Finally we need to add CSS to make it look better.

```html
<style>
  body {
    text-align: center;
    font-family: helvetica;
    background-color: black;
  }

  .imageupldbtn {
    width: 200px;
    height: 40px;
    border-radius: 50px;
    border-width: 0px;
    background-color: black;
    color: deeppink;
    font-size: 18px;
  }

  .imageupldbtn:hover {
    background-color: deeppink;
    color: black;
  }

  .status {
    font-size: 18px;
    color: red;
  }

  .uploaddiv {
    background-color: #fff;
    padding: 10px;
    width: 100%;
    position: fixed;
  }

  .seconddiv {
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translate(-50%);
  }

  .nameinput {
    width: 200px;
    font-size: 20px;
    color: deeppink;
    border-width: 2px;
    border-color: black;
    text-align: center;
  }
</style>
```

## Finally the code will look like this.

```html
<!doctype html>

<head>
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-storage.js"></script>
 <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js"></script>
 <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>

</head>

<body>
 <style>
 body {
 text-align: center;
 font-family: helvetica;
 background-color: black;
 }

 .imageupldbtn {
 width: 200px;
 height: 40px;
 border-radius: 50px;
 border-width: 0px;
 background-color: black;
 color: deeppink;
 font-size: 18px;
 }

 .imageupldbtn:hover {
 background-color: deeppink;
 color: black;
 }

 .status {
 font-size: 18px;
 color: red;
 }

 .uploaddiv {
 background-color: #fff;
 padding: 10px;
 width: 100%;
 position: fixed;
 }

 .seconddiv {
 position: absolute;
 top: 250px;
 left: 50%;
 transform: translate(-50%);
 }

 .nameinput {
 width: 200px;
 font-size: 20px;
 color: deeppink;
 border-width: 2px;
 border-color: black;
 text-align: center;
 }
 </style>
 <div class="uploaddiv">
 <h1>Simple social media</h1>
 <input onchange="fileinput()" type="file" id="photo" />
 <br />
 <script>
 var firebaseConfig = {
 apiKey: "AIzaSyCegpMyyDrPgTHENIvOMbexUe9z1s7ydTE",
 authDomain: "simplesocialmedia-f46f6.firebaseapp.com",
 databaseURL: "https://simplesocialmedia-f46f6.firebaseio.com",
 projectId: "simplesocialmedia-f46f6",
 storageBucket: "simplesocialmedia-f46f6.appspot.com",
 messagingSenderId: "593816135912",
 appId: "1:593816135912:web:aa22cf3d2318613718015d",
 measurementId: "G-T3VD77TCVW"
 };
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 const db = firebase.firestore();
 var link = null
 function fileinput(e) {
 document.getElementById("status").innerHTML = "Setting up...";
 const ref = firebase.storage().ref();
 const file = document.querySelector('#photo').files[0]
 const task = ref.child(file.name).put(file);
 task
 .then(snapshot => snapshot.ref.getDownloadURL())
 .then((url) => {
 link = url
 document.getElementById("status").innerHTML = "Now you can upload it.";
 })
 }
 function upload() {
 const name = document.getElementById("name").value;
 if (link === null) {
 document.getElementById("status").innerHTML = "Select an image.";
 } else if (name.length <= 2) {
 document.getElementById("status").innerHTML = "Name should be atleast 3 charector long.";
 } else {
 document.getElementById("status").innerHTML = "Uploading...";
 const url = {
 url: link,
 name: name,
 }
 db.collection("pictures")
 .doc()
 .set(url)
 .then(() => {
 location.reload()
 });
 }
 }
 db.collection("pictures")
 .get()
 .then((querySnapshot) => {
 const data = querySnapshot.docs.map((doc) => doc.data());
 var a = 0
 for (var i in data) {
 var img = document.createElement('img');
 img.src = data[a].url;
 img.setAttribute('width', '600');
 var h = document.createElement("H1");
 var t = document.createTextNode(data[a].name);
 h.appendChild(t);
 h.style.color = "deeppink";
 document.getElementById('container').appendChild(h);
 document.getElementById('container').appendChild(img);
 a = a + 1
 }
 });
 </script>
 <input class="nameinput" placeholder="Your name" type="text" id="name" />
 <h1 class="status" id="status"></h1>
 <button onclick="upload()" class="imageupldbtn">Upload image</button>

 </div>
 <div class="seconddiv" id="container">
 </div>

</body>

</html>
```

It’s simple, you just have to go through the functions and workflow.

![run it](https://cloud-5m2nwfs8r.vercel.app/ezgif.com-video-to-gif-4.gif)

## Hacking time!

Now you know how to push an image to firebase and make a simple social platform. Now, you can make it better. Have fun Refer to the documentation [Learn firebase](https://firebase.google.com/docs). The best way to learn it is to make projects.

Lastly, don't give up. You might be stuck for while with a stubborn bug. When you solve it though, you learn a lot more than what you expected to initially.

I am attaching the documentation for HTML, CSS, and JS

[html](https://developer.mozilla.org/en-US/docs/Web/HTML)
[css](https://developer.mozilla.org/en-US/docs/Web/CSS)
[js](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Modified by other hackers.

[Alfred Jophy](https://repl.it/@AlfredEVOL/SiennaConstantAbstractions) He has made a background changing website in which we can upload images and then it changes its background like a slideshow of images.

[Kk Haridev](https://repl.it/@DandaThor/SillyWiseHarddrive) He made it as an image gallery in which people can upload images and the world can see them.

[Joyal Thomas](https://repl.it/@JoyalThomas/ExaltedSpecializedDominspector#index.html) He added glitter to the website he made it more beautiful.

![made_it](https://cloud-a58thexdk.vercel.app/tenor.gif)
