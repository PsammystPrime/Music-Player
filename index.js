let audio = document.querySelector(".audio");
let songProgress = document.querySelector("#progress");
let btnPlay = document.querySelector(".play");
let btnPause = document.querySelector(".pause");
let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");

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
audio.src = "./songs/" + playlist[index];

audio.onloadedmetadata = function () {
  songProgress.max = audio.duration;
  songProgress.value = audio.currentTime;
};
