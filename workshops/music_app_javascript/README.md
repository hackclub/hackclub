---
name: 'Music App with JavaScript'
description: 'Create a cool Music App with Vanilla JavaScript with all your favorite songs.'
author: '@shibam17'
img: https://cloud-5v67fzk5g.vercel.app/0thumb.png
---

Ever wondered to build something which would be fun and for your own along with learning the domain, all of it at once? Well if yes, then you can create your own **Music App** just with JavaScript. Which will not only be fun and creative but also will help to understand term and function in detailed practical manner! :smile: :yum:
<p align='center'>
<img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" alt="yes-ready-to-code" >
</p>

## Overview
In this workshop you will be learning different types of events, functions, methods, classes, styling and more with Vanilla JavaScript, HTML, and CSS.
This whole workshop is customizable according to you, after all everyone has their own playlist they love to hear in loop.
The best part is, it will take just around 20 mins to complete this! :relieved: 

*To have a peak in the project:*
* Final code can be found on [Repl.it](https://repl.it/@shibamdhar/MusicApp) as well as [GitHub](https://github.com/shibam17/musicappjs-workshop).
* The demo of my music app will be [here](https://musicapp.shibamdhar.repl.co/).

**Prerequisite**
	Little bit of knowledge on event and event handling from JavaScript can make your work easier but the best part is, even if you are new to this, you can still make it a go without any problem.  :sparkles:
<p align='center'>
<img width="300" alt="excited" src="https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif">
</p>

## Create files and folders
Since it is a web-app, we need to setup 3 things:

 1. The HTML file
 2. The CSS file
 3. The JavaScript file

but as we are making a music app and we want to make it beautiful, we will need some folders: 🤔
* Images
* Music

At last be ready with your favorite songs and their album cover images.   :wink:

**Initial Setup**
Let's start by setting up our IDE (Integrated Development Environment) in Rept.it, a free, online code editor. 

To start your coding right away navigate to [repl.it/languages/html](https://repl.it/languages/html) and you will have your whole setup. 

You would see that there are already three files named HTML, CSS and JavaScript.  

Now create the required folders of ***images*** and ***music***.

![folder-creation](https://cloud-izwbr9tpa.vercel.app/0ma_1.gif)


The set up is almost done, there is one last thing we have to add that is a small library of icons which we will be needing in our app as buttons. Do not worry, I got you covered here too! Just click the link [here](https://cloud-gsfn58rnx.vercel.app/0icons.zip), the zip folder will download and unzip it, extract the icon folder then simple drag and drop in your project.

![Drag'n'Drop-procedure](https://cloud-1h4d9km9k.vercel.app/0ma_2.gif)

```
Want to know more?
-> The icons folder is a library which has every icons in a very small pakages, which makes it easy to use and easier to load.
```

## Time to get our App working   :sunglasses:
We will divide this into three segments:

 1. HTML part
 2. CSS part
 3. JavaScript part
 ### HTML Part:
In here we will create the skeleton of our Music App. It will determine what all things we want to show on our app. There will be an image of the song, the name of the song, the name of artist and that is not it, there will be few buttons to play/pause and to go to previous/next songs.
Finally linking our HTML file to the CSS file, the JavaScript file and not to forget, linking to the icon file inside the icon folder(To get the icons in action!)
To do that you can simple link in the head of HTML file by putting

```html  
<link  rel="stylesheet"  href="./icons/css/all.min.css"  />
```

In the HTML file everything is wrapped inside one another. 
There are various `classes` and `id`s which has the small chunks of the elements to be displayed.
Put up some dummy data to form the layout of the app.
For example:

```html
<h2  id="song-title">Hello this is title</h2>
<h3  id="song-artist">This is artist/band name</h3>
```
    
Among the elements, there will be a separate `div` tag which will hold up the image along with a class name which will come in handy while dealing with it in JavaScript.

```html  
<div  id="song-image"  class="song-img"  style="background-image: url('./images/song-1.jpg');"></div>
```
There will many tags for each elements requires like for the name of song and artist, to hold up the buttons and also tags to wrap all the other elements. You can wish to think out of the box and add something more or change the arrangements. 
**NOTE:** Now that we have linked the icons file, we can use play and pause button, the previous and next button easily by simply adding the their respective class names.

A glimpse of the HTML file:

```html
<body>
<div class="app-wrapper">
  <div class="player">
    <audio id="music-player"></audio>
    <div id="song-image" class="song-img" style="background-image: url('./images/song-1.jpg');"></div>
    <div class="song-details">
      <h2 id="song-title">Hello this is title</h2>
      <h3 id="song-artist">This is artist/band name</h3>
    </div>
    <div class="player-controls">
      <button id="prev-btn" class="skip-btn"><i class="fas fa-backward fa-lg"></i></button>
         <button id="play-btn" class="play"><i class="fas fa-play play-icon fa-2x"></i></i></button>
         <button id="next-btn" class="skip-btn"><i class="fas fa-forward fa-lg"></i></button>
          </div>
      </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></script>
<script src="./script.js"></script>
</body>
```

Well done   :sunglasses: you did well till now, hang on for few more mins it is going to turn out amazing.

### CSS Part:
Now that our skeleton is ready for the Music App, it is time to decorate it and place them in order so that it will look nice and clean. 
This is the most fun part because you can just make it look as you want. Add colors, hover effects and what not. 

Well, I chose my app to look like this.
<br>
<br>
<img src="https://cloud-pzx63pyr8.vercel.app/0mas_2.png" alt="project-after-css" >
<br>
<br>
 If you wan to do same styling as mine then just click [here](https://github.com/shibam17/musicappjs-workshop/blob/main/style.css) and get the code. :wink:

### JavaScript Part:
Now it is time to work on the functioning part of this app. So lets get ready! :sunglasses:
![get-ready](https://media.giphy.com/media/C9xZ1G3RAinYlOfmHm/giphy.gif)
<br>
First thing is that we want all the functioning of the app just right away when the window/page gets load so everything we will code in JavaScript will be inside `window` object triggered with the `onload` event forming an anonymous function.

```javascript
window.onload=()=>{}
```
So inside this function, first select all the classes and ids from the HTML, to which we are going to make changes in a bit.
For example:

```javascript
const song_img_el = document.querySelector('#song-image');
const song_title_el = document.querySelector('#song-title');

```
Like this way it will easier to point out which element we want to work with.

Add two variables, name them relevant as to store the next and previous songs.

#### Creating data base for the app:
Remember in the beginning we created two folders named images and music? Well it is time that you put your images and songs in their respective folders. Make sure you name them numerically so that it will be easy to point them from the JavaScript.

To create the database, make an object of various properties of your songs and these properties will include:
* Name of the song
* Name of the artist/band
* Path of the song
* Path of the image of that song
For example:
```javascript
let songs = [
	{
		title: 'Wavin Flags',
		artist: "K'naan",
		song_path: 'music/Music-1.mpeg',
		img_path: 'images/image-1.jpeg'
	},
	{
		title: 'Phineas and Ferb ',
		artist: "Bowling for Soup",
		song_path: 'music/Music-2.mpeg',
		img_path: 'images/image-2.jpeg'
	},
}
```
Like this way we can access the properties very easily by simply referring to the index number for this object.   :relieved:

#### Adding events and event-listeners
 Next part is to make the app understand when to do the things. Like if someone clicks on play button then what to do?
 All these are done with the help of calling functions when there is an event. Which can be triggered by **event-listeners**.
 For example:
 ```play_btn.addEventListener('click', TogglePlaySong);```
 In the above code when there will be an event with the ```play_btn``` it will call the ```TogglePlaySong``` function.

```
Want to know more?
-> The EVENT is like a trigger which fires on the basis of actions. There can be any types of events like click, drag, scroll and many more. These events are added to an element with the help of an EVENT-LISTENERS.
```
Glimpse of the code :wink:

```javascript
 play_btn.addEventListener('click', TogglePlaySong);
 next_btn.addEventListener('click', () => ChangeSong());
 prev_btn.addEventListener('click', () => ChangeSong(false));
```


#### Defining the functions
Now that the database is ready and **event-listeners** are set, it is time to define the functions. 

The functions will help to:
* When to play and pause
* Which song to play next 

In this app I have used four functions to carry out the above functionalities.

<1> The first function is to play the song. Here the index of current song plus the next song will be collected and the ```UpdatePlayer```function will be called.

```javascript
function  InitPlayer () {
	current_song_index = 0;
	next_song_index = current_song_index + 1;
	UpdatePlayer();
}
```
<2> The second function is to change the song when either the songs ends or the user clicks on the button of previous/next. 
This function will have a parameter of boolean value, which will see that if it is true the index of current song will be increased which means the next song or else the index will be decreased which means previous song.
Along with this, it will also have a **conditional rendering** which will keep a track of the index number values, so that it will go on and on in a loop when the value exceeds or lesser than the possible index number of the database object.

At last it will also call the ```UpdatePlayer```functions.

```javascript

if (current_song_index > songs.length - 1) {
	current_song_index = 0;
	next_song_index = current_song_index+1;
		
```
In the above code you can see that there is conditions which states that just in case where the `index` of the list exceed the length of the number of songs then go back to `index` 0. Which means it will stay in a loop.
Work on it and perform the basic idea to keep the music app in loops.

Glimpse of the code:wink:

```javascript
function ChangeSong (next = true) {
        if (next) {
            current_song_index++;
            next_song_index = current_song_index + 1;

            if (current_song_index > songs.length - 1) {
                current_song_index = 0;
                next_song_index = current_song_index+1;
            }

            if (next_song_index > songs.length - 1) {
                next_song_index = 0;
            }
        } else {
            current_song_index--;
            next_song_index = current_song_index + 1;

            if (current_song_index < 0) {
                current_song_index = songs.length - 1;
                next_song_index = 0;
            }
        }

        UpdatePlayer();
        TogglePlaySong();
    }
```

<3> The third function will help to toggle between the play and pause button. This will make sure to change the button when the music plays or stops. This will be done by adding and removing class fro the HTML file with the help of JavaScript. 

To add and remove class we can simple use ```element_name.classList.add('name_of_class')``` and ```element_name.classList.remove('name_of_class')```respectively.

One more thing about this is that, we have to write the code in a vice-versa condition. Which means that if there is a play button then on click it will change to pause button and if it is a pause button, on click it will change to play button.

```javascript
function TogglePlaySong () {
        if (audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play')
            play_btn_icon.classList.add('fa-pause');
        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play')
            play_btn_icon.classList.remove('fa-pause');
        }
    }
```

<4> The fourth and last function which is the ```UpdatePlayer```function. This has a very crucial role in our app since its main job is to put up the current song name, image and details to our page and also to play the song too!.

```javascript
function  UpdatePlayer() {
	let song = songs[current_song_index];
	song_img_el.style = "background-image: url('" + song.img_path + "');";
	song_title_el.innerText = song.title;
	song_artist_el.innerText = song.artist;
	audio_player.src = song.song_path;
}
```

## The End
Congratulations! You have completed this workshop now you have your own personalized music web-app. :sunglasses:
<p align='center'>
<img src="https://media.giphy.com/media/xT8qBepJQzUjXpeWU8/giphy.gif" alt="congrats" >
</p>


Well, do not stop here! You can try some more with it.
* Try your own designs.
* Put a seek-bar for the audio.
* Put timer of the song.
* May be load a video instead of images   :open_mouth:.

## Custiomization by my peers

* [Hari Om](https://music-app.hariom04.repl.co/)
* [Rahul](https://rubberyturquoisevideogames.rahulpaul4.repl.co/)
* [Simran](https://quirkyspecializedmethod.simransuri.repl.co/)
