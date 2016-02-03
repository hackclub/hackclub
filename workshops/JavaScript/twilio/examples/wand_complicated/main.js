var audio = new Audio("http://www.sounddogs.com/previews/4035/mp3/186561_SOUNDDOGS__we.mp3");


document.getElementById("play-button").onclick = function() {
  audio.play();
}

Wand.threshold = 5;
Wand.onWave = function() {
  audio.play();
};
