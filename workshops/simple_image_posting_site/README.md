---
name: "Simple Image Posting Site"
description: "Let's build a website to post images"
author: "@bezlin6mechminerz"
---

In this workshop, we will see how to make a simple site in which we can post images and view images posted by others. It will be super fun as you can host it and share it with your friends and create a large collection of great pictures.

The workshop will look something like this.

![Output video](https://cloud-75rs5g7wv.vercel.app/0ezgif.com-video-to-gif.gif)

View a [live demo](https://simplesocialmedia.bezlin.repl.co)

View the [final code](https://repl.it/@bezlin/simplesocialmedia#index.html)

This workshop will take about 20 minutes.

## Getting started

Lots of beginners make endless changes to their code and expect it to miraculously work right away. The problem with this approach is that it stacks one problem on top of another, and it becomes difficult to figure what went wrong. It is better if you code along.

To code this workshop, we'll be using [Repl.it](https://repl.it), a free, online code editor. Just follow this link and start coding!

After that create a new repl and select language HTML, CSS, JS.

<img alt="repl.it image" src="https://cloud-o8q46nkko.vercel.app/screenshot_2020-09-25_at_9.23.06_pm.png">

## Code and explanation.

![Codding](https://cloud-bayjeej0h.vercel.app/0200w.gif)

Let's start with the basic HTML structure.

```html
<!doctype html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- We add the meta tag to make the site responsive on different devices. -->
  </head>
  <body>
  </body>
</html>
```

<img alt="Image upload div" src="https://cloud-iuod9ogzf.vercel.app/0screenshot_2020-10-24_at_6.28.11_am.png">

Lets make this div to upload images.

```html
<body>
  <div class="uploaddiv">
    <h1>Simple social media</h1>
    <!-- Heading -->
    <input onchange="fileinput()" type="file" id="photo" />
    <!-- Choose Image file-->
    <br />
    <!--Next Line-->
    <input class="nameinput" placeholder="Your name" type="text" id="name" />
    <!--Naming the image-->
    <h1 class="status" id="status"></h1>
    <!--Showing the Status of image uploading-->
    <button onclick="upload()" class="imageupldbtn">Upload image</button>
    <!--Button to upload the same-->
  </div>
</body>
```

This part is easy! We are making a heading "Simple social media", an input tag to upload the input file(i.e, the image). Remember to specify its input type as 'file'. Then an input tag to enter the name. Lastly, a button to upload it. You need to put this code under the body tag.

We will be using [Firebase](https://firebase.google.com) as our database to store images. So let's set it up!
We need to import firebase, firebase-firestore, firebase-storage. let's import it at the head tag.

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-storage.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>
</head>
```

Go to [firebase](https://firebase.google.com). Then click on 'go-to console' in the top right corner. Add/Create a project, Give a name for your project. Then click on continue, Create project.

![Continue](https://cloud-iqousmfqn.vercel.app/0ezgif.com-video-to-gif.gif)

<img alt="Go to project settings" src="https://cloud-5kv6kdks9.vercel.app/07.png">

This is your firebase dashboard.
Click on project settings.

<img alt="Create App" src="https://cloud-5uv8qengq.vercel.app/08.png">

Give a name for the app. Then click Create.

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
      measurementId: "G-T3VD77TCVW",
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  </script>
</body>
```

Now, let's configure the firebase-firestore.

<img alt="Create firestore database" src="https://cloud-e2i3fchdm.vercel.app/011.png">

<img alt="Select test mode" src="https://cloud-h4gng9zf6.vercel.app/012.png">

Then click on enable.

<img alt="Create collection" src="https://cloud-5jvwke9tx.vercel.app/014.png">

Create a collection and just give sample data.

Bow lets setup the firebase storage for storing our images, Firestore is used to store the urls of the image.
Inside storage click on get started. you will see a block of code like this.

<img alt="firebase-storage" src="https://res.cloudinary.com/practicaldev/image/fetch/s--w0gBgsQf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/5zcml0x0uvu55i7kqywc.png"/>

This is a strictly firebase side code.

if you read the text you will notice that it is configured to upload with an authenticated user. since we are doing this without auth for sake of brevity, click next.
In storage go to rules from top and edit the code.

```js
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {

//this is the part we changed...
      allow read, write: if true;
    }
  }
}
```

Now your firebase is set. Let's jump into coding. If you missed anything take a look at the [firebase documentation](https://firebase.google.com/docs/storage/web/upload-files).

```html
<input onchange="fileinput()" type="file" id="photo" />
```

Here, in the input tag, the onchange function is calling a function 'fileinput'. Let's make it.

```js
function fileinput(e) {
  document.getElementById("status").innerHTML = "Setting up..."; //Showing status
  const ref = firebase.storage().ref(); //refering to our firebase storage
  const file = document.querySelector("#photo").files[0]; //The file the user selects to upload here it will be an image.
  const task = ref.child(file.name).put(file); //sending file to firebase storage.
  task
    .then((snapshot) => snapshot.ref.getDownloadURL()) //downloading url to upload to firebase firestore.
    .then((url) => {
      link = url;
      document.getElementById("status").innerHTML = "Now you can upload it."; //updating status as the file is send to firebase storage now you can upload it which finally uploades the url to firestore.
    });
}
```

This part of the code should be written in the script tag we mentioned before.
In this function, we are returning a value(here the upload status) to the h1 tag(#status) to display that the image is setting up. Then we are declaring a variable ref as firebase storage. Next, we declare another variable file to fetch the file selected(i.e, the image that we select to upload). The variable task is to put the file into the firebase storage.
Then we are downloading the URL of the image that we just uploaded to our firebase storage.
After that, we display that the image is uploaded so you can post it. This adds the URL we just downloaded to the firebase firestore. This happens when you click the upload image button.

```js
function upload() {
  const name = document.getElementById("name").value; //getting the value from input feild
  if (link === null) {
    document.getElementById("status").innerHTML = "Select an image."; //returning the status.
  } else if (name.length <= 2) {
    document.getElementById("status").innerHTML =
      "Name should be atleast 3 charector long.";
  } else {
    document.getElementById("status").innerHTML = "Uploading...";
    const url = {
      //array to be pushed to firestore
      url: link,
      name: name,
    };
    db.collection("pictures") //Refering to the collection we just created.
      .doc()
      .set(url) //asigning the array to it/
      .then(() => {
        location.reload(); //reloading the screen to see the progress.
      });
  }
}
```

This part of the code should be written in the script tag we mentioned before.
We need to upload the name of the image which user has inputed. If the URL of the image is null(meaning image not selected). Then we will check whether the name is 3 characters long. After all this, we will display the message 'uploading...' and send our URL + name to our firestore. Now we need to display it right? Let's write the code for that.

```js
db.collection("pictures") //fetching urls from the firestore
  .get()
  .then((querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => doc.data()); // taking urls one by one.
    var a = 0;
    for (var i in data) {
      var img = document.createElement("img"); //When one image url come here a new image tag and h1 tag is created and the image is passed to its src ...
      img.src = data[a].url;
      img.setAttribute("width", "600");
      var h = document.createElement("H1");
      var t = document.createTextNode(data[a].name);
      h.appendChild(t);
      h.style.color = "deeppink";
      document.getElementById("container").appendChild(h);
      document.getElementById("container").appendChild(img);
      a = a++;
    }
  });
```

This part of the code should be written in the script tag we mentioned before.
In these lines of code, we are fetching all URLs of our images from our firestore and storing it in an array. Then we display them one after the other. Here we need to create 2 tags one for the image and one for the heading for displaying the images and names. Then we need to make a container in which we append it.

```html
<div class="seconddiv" id="container"></div>
<!--Add this to body tag-->
```

Summary and finally the code will look like this. Also add some css.

```html
<!doctype html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--We add this meta tag to make the site responsive in different sized devices-->
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
  <!--Importing firebase app-->
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-storage.js"></script>
  <!--Impporing firebase storage-->
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js"></script>
  <!--Importing firebase firestore-->
  <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>
  <!--Importing firebase analytics-->

</head>

<body>
  <style>/*Styling for our html elements*/
    body {/*Styling for body*/
    text-align: center;/*Aliging Everything at the center*/
    font-family: helvetica;/*Changing default font to helvetica*/
    background-color: black;/*Setting background as black*/
    }

    .imageupldbtn {/*Styling for Image upload button*/
    width: 200px;/*Setting the width of the button*/
    height: 40px;/*Setting the height of the button*/
    border-radius: 50px;/*Making the button round at the edges*/
    border-width: 0px;/*Removing the border of the default button*/
    background-color: black;/*Background color of the button*/
    color: deeppink;/*Changing the font color of the button*/
    font-size: 18px;/*Increasing the font size inside the button*/
    }

    .imageupldbtn:hover {/*When the curser id brought top of the button this happens*/
    background-color: deeppink;/*Changing the background color of the button*/
    color: black;/*Changing the font color of the  button*/
    }

    .status {/*Styling for the image upload status*/
    font-size: 18px;/*Font size of the status*/
    color: red;/*Color of the status*/
    }

    .uploaddiv {/*Styling for the upload div tag*/
    background-color: #fff;/*background color of the dic tag*/
    padding: 10px;/*Giving some inner space amoung the elements*/
    width: 100%;/*Streching width to the full length availabel*/
    position: fixed;/*Not to move while scrolling*/
    }

    .seconddiv {/*Our image showing container*/
    position: absolute;/*Setting it as absolute so it wont affect the styling of other elements*/
    top: 250px;/*Moved down by 250 pixels*/
    left: 50%;/*Moved Left by 50%*/
    transform: translate(-50%);/*making it in correct center*/
    }

    .nameinput {/*Styling for image name input tag */
    width: 200px;/*Width of the input tag*/
    font-size: 20px;/*font size of the text inside the input tag*/
    color: deeppink;/*Color of the text*/
    border-width: 2px;/*Width of the border*/
    border-color: black;/*background Color*/
    text-align: center;/*Centering*/
    }
  </style>
  <div class="uploaddiv"><!--Image upoad division-->
  <h1>Simple social media</h1><!--Heading-->
  <input onchange="fileinput()" type="file" id="photo" /><!--For choosing image-->
  <br /><!--Next Line-->
  <script>//Adding js to make things work
    var firebaseConfig = {//This part is the configuration for our firebase app
      apiKey: "AIzaSyCegpMyyDrPgTHENIvOMbexUe9z1s7ydTE",
      authDomain: "simplesocialmedia-f46f6.firebaseapp.com",
      databaseURL: "https://simplesocialmedia-f46f6.firebaseio.com",
      projectId: "simplesocialmedia-f46f6",
      storageBucket: "simplesocialmedia-f46f6.appspot.com",
      messagingSenderId: "593816135912",
      appId: "1:593816135912:web:aa22cf3d2318613718015d",
      measurementId: "G-T3VD77TCVW"
    };
    firebase.initializeApp(firebaseConfig);//Initializing firebase
    firebase.analytics();//Setting up analytics
    const db = firebase.firestore();//Refering to our firebase firestore.
    var link = null
    function fileinput(e) {
      document.getElementById("status").innerHTML = "Setting up...";//Showing status of uploading image to firebase storage.
      const ref = firebase.storage().ref();//Refering to our firebase storage.
      const file = document.querySelector('#photo').files[0]//Fetching the image we chosen.
      const task = ref.child(file.name).put(file);//Sending the file to storage.
      task
      .then(snapshot => snapshot.ref.getDownloadURL())//Fetching the url of the image
      .then((url) => {
        link = url
        document.getElementById("status").innerHTML = "Now you can upload it.";//Showing status.
      })
    }
    function upload() {
      const name = document.getElementById("name").value;//Fetching the value of name input tag
      if (link === null) {//Checking wheather the url is downloaded
        document.getElementById("status").innerHTML = "Select an image.";//Asking user to select an image.
      } else if (name.length <= 2) {
        document.getElementById("status").innerHTML = "Name should be atleast 3 charector long.";//Checking wheather the name is atleast 3 letters long.
      } else {
        document.getElementById("status").innerHTML = "Uploading...";//Showing status as uploading
        const url = {
          url: link,//link of image to be send to firestore.
          name: name,//Image name along with it.
        }
        db.collection("pictures")//Refering to our collection in firestore.
        .doc()
        .set(url)//Uploading
        .then(() => {
          location.reload()//After uploading reload the screen automatically to see the uploaded image.
        });
      }
      }
      db.collection("pictures")//Fetching the image urls from the firestore and displaying it.
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());//Storing urls as an array
        var a = 0
        for (var i in data) {//maping thorough urls one by one.
          var img = document.createElement('img');//When one image url come here a new image tag and h1 tag is created and the image is passed to the src of the image tag.
          img.src = data[a].url;//Fetching url
          img.setAttribute('width', '600');//Setting width of the image
          var h = document.createElement("H1");//Creating h1 element
          var t = document.createTextNode(data[a].name);//Adding image name in h1 tag
          h.appendChild(t);//Appending the name to h1 tag
          h.style.color = "deeppink";//Color of the name.
          document.getElementById('container').appendChild(h);//Apending h1 tag to container
          document.getElementById('container').appendChild(img);//Appending image tag to container
          a = a + 1
        }
    });
  </script>
  <input class="nameinput" placeholder="Your name" type="text" id="name" /><!--Name input feild-->
  <h1 class="status" id="status"></h1><!--Showing status-->
  <button onclick="upload()" class="imageupldbtn">Upload image</button><!--Image upload button-->
  </div>
  <div class="seconddiv" id="container"><!--Container for displaying images and text from firestore-->
  </div>

</body>

</html>
```

![run it](https://cloud-fo4zrncow.vercel.app/0ezgif.com-video-to-gif.gif)

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
