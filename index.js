let audio = document.querySelector(".audio");
let progress = document.querySelector("#progress");
let btnPlay = document.querySelector(".play");
let btnPause = document.querySelector(".pause");
let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");
let title = document.querySelector(".title");
let shuffleMode = document.querySelector(".shuffle");

let playlist = [
  "Wendy_Shay_-_Survivor_(Lyrics)(256k).mp3",
  "ArrDee_-_Come_&_Go_(Official_Music_Video)(128k).mp3",
  "Lil Mosey - Noticed (Dir. by @_ColeBennett_)_2.mp3",
  "alan_walker_style_without_you_new_song_2022_aac_21100.m4a",
  "Darassa Ft. Sho Madjozi - I Like It - [DJ Novemba Extended].mp3",
  "Alarm 4.wav",
  "ayra_starr_rush_lyrics_h264_9596.mp4",
];

index = 0;
time = 0;
let shuffle = false;

audio.src = "./songs/" + playlist[index];
title.textContent = playlist[index];

audio.onloadedmetadata = function () {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
};

progress.onchange = function () {
  audio.play();
  audio.currentTime = progress.value;
};

//when a audio is playing, set the progress' value to be the same as the audio's every half a second
btnPlay.addEventListener("click", function () {
  audio.play();
  setInterval(() => {
    progress.value = audio.currentTime;
  }, 500);
});

btnPause.addEventListener("click", function () {
  audio.pause();
});

btnNext.addEventListener("click", () => {
  if (shuffle == true) {
    console.log("tt");

    index = Math.floor(Math.random() * playlist.length);
    audio.src = "./songs/" + playlist[index];
    title.textContent = playlist[index];
    audio.play();
  } else {
    if (index === playlist.length - 1) {
      index = 0;
      audio.src = "./songs/" + playlist[index];
      title.textContent = playlist[index];
      audio.play();
    } else {
      index++;
      // console.log(audio.currentTime);
      audio.src = "./songs/" + playlist[index];
      title.textContent = playlist[index];
      audio.play();
    }
  }
});

btnPrev.addEventListener("click", () => {
  if (index === 0) {
    index = playlist.length - 1;
    audio.src = "./songs/" + playlist[index];
    title.textContent = playlist[index];

    audio.play();
  } else {
    index--;
    console.log(index);
    audio.src = "./songs/" + playlist[index];
    title.textContent = playlist[index];

    audio.play();
  }
});

shuffleMode.addEventListener("click", function () {
  if (shuffle == true) {
    shuffle = false;
  } else {
    shuffle = true;
  }
  console.log(shuffle);
});
