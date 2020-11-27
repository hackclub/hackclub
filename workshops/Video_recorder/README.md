#   record audio and video on the web

In this Workshop we will teach you how to create an audio and video recorder on the web using bootstrap y javascript. [aqui](https://asd-1.juanjosejose118.repl.co/) We have a live demo and [aqui](https://repl.it/@juanjosejose118/asd-1#index.html)  we have the source code.  
## Set Up
 This workshop requires a basic knowledge of the following languages: HTML, CSS & JS. Don’t worry if you get stuck at some point in the workshop, everything is explained the best way for you to understand! For this workshop we will use [Repl.it](https://repl.it/), a free, online code editor. Click [here](https://repl.it/languages/html) to get started with a new HTML project on repl.it. ![Repl.it](https://cloud-qbmylslty.vercel.app/0image.png)


## Structure
![0image.png (736×490)](https://cloud-dtmnu0v16.vercel.app/0image.png)
The green square is the main body in which will fit the image when recording as well as the recording button. 

## html code
In this section we will create the basic structure of the page, to do this we will use bootstrap. First, we will add to the tag `<head>` the following code: 
``` 
<link  rel="stylesheet"  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"  integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"  crossorigin="anonymous">
```
What this does is to connect the bootstrap framework to our web site, this is also called cdn.
Now we’ll start to build the structure of the web page, first we must build a main container in which all rows and columns will fit in. 
```html
<body>
<div  class="container-fluid">
   <div  class="row text-center mt-4">
      <div  class="col-md-4"></div>
      <div  class="col-md-4"></div>
      <div  class="col-md-4"></div>
    </div>
    <div  class="row text-center">
      <div  class="col-md-12"></div>
    </div>
</div>
<script  src="script.js"></script>
</body>
```
- **container fluid**  it is added so the web page adjusts to pone screens or when we reduce the size of the page. 
- **row text center mt-4** we add ‘’center’’ so that it stays in the center and mt-4 means: upper margin with 4 pixels of space. 
- **col-md-4** means that a medium column will be build with a size of 4. 
- **row text center** this one is for the recording button to appear in the center.
- **col-md-4** this one is for the recording button column to be medium and with a 12 size.
 **src=script.js** this is for the javascript code to be connected.

Now we will place a video tag and a 12 size button.  
```html
    <div class="container-fluid">
      <div class="row text-center mt-4">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <video autoplay id="video" alt="your video here" ></video>
        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="row text-center">
        <div class="col-md-12">
          <button class="btn btn-success" type="button" id="button">Grabar</button>
        </div>
      </div>
    </div>
```
- **autoplay id="video"** we add this one so that the video reproduces automatically.
- **btn btn-success"**  this one is added for the recording button model.



##  Javascript

Everything that makes the web page work is configured within Javascript. 

In our first section we will select video element and the button so that when we press it, it asks for permission to use audio and video when we press it and also put here that it shows an error whenever someone denies the permissions.
```js
 let video = document.querySelector("video");
    document.querySelector("button").addEventListener("click", function(){
        navigator.mediaDevices.getUserMedia({
            audio:true, video:true
        }).then(record)
          .catch(err => console.log(err))
    })
```
- let Is used to create a variable that selects the video element from the document and ‘’Queryselector’’ is used for to select the video tag.
- In the following section you have to select the button tag from html so when you click on ‘’addEventListener’’ it activates the recording function. 
- In the next section, you ask for the Audio and video permissions ‘’getUserMedia’’ from the browser. Catch is just in case there is an error it gets saved in it.

Now we’ll make the video to be saved in an option called ‘’Chuncks’’
```js
let chunks = []

function record(stream){
  video.srcObject = stream
```
-  **let chunks = []** this is to save what was recorded.
- **function record** here you assign the record function
- **srcObject** This one allows you to watch the stream that comes from the video element.

Now, we will provide two arguments, one from the MediaRecorder Class that is a stream and another one that allows for the video to be recorded on mp4 from the web. 
```js
          let mediaRecorder = new MediaRecorder(stream, {
            mimeType:'video/webm;codecs=h264'
        })
        mediaRecorder.start()
```
- **MediaRecorder** Allows to record stream that comes from the camera
- **mimeType**  Allows top lay an mp4 video from the web
- **mediaRecorder.start()**  starts recording

In this section we will allow all new data to be saved on a previous file without creating a new one. And we are also configuring the duration seconds for the recording. 
```js
   mediaRecorder.ondataavailable = function(e){
     console.log(e.data)
     chunks.push(e.data)
 }
   mediaRecorder.onstop = function(){
     alert("stop")
     
     let blob = new Blob(chunks, {type:"video/webm"})
     chunks = []
     download(blob)
    }
   window.setTimeout(()=> mediaRecorder.stop(), 5000)
    }
```
- **ondataavailable** it initiates when a new function or data is presented
- **chunks.push(e.data)** for the data to be saved on an empty file.
- **onstop** to stop recording after certain time.
- **new Blob** It allows to create long videos and save them in ‘’chunks’’ and we specify that it is a web video type. 
- **setTimeou** allows recording to stop after 5 seconds
- **download(blob)** to download the ‘’blob’’

Now we will make that every time the recording is over it gets downloaded with the web page link. 
```js
function download(blob){
        let link = document.createElement("a")
        link.href = window.URL.createObjectURL(blob)
        link.setAttribute("download", "video_recorder.webm")
        link.style.display = "none"
        document.body.appendChild(link)
        link.click()
        link.remove()
    }
```
- On the first line it received the ‘’blob’’ to be able to see it.
- **createElement** Allows to create a link type A.
- **createObjectURL** it allows to create an URL to an object in this case a ‘’blob’’
- **setAttribute** we are giving an attribute or name to the link. 
- **"none"** this allows the link to be hidden. 
- **appendChild** It adds the link to the page body. 
- **click()** , **remove()** When clicking the download function activates and then it removes the links.

## style.css

Here we will give style to the page such as: color, margin, or anything like that. 
```css
body{
  background-color:gray !important;
}
```
- Here we give a color to the background or body of the page, we make it important because in the html it is obeying to the  `link  rel`
```css
video{
border:4px  solid  green;
}
```
-Here we provide color and wide to the square where the image appears, we can give it a 4 pixels wide, green color and a solid class edge  
