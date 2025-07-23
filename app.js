const playBtn = document.getElementById('play');
const progressBar = document.querySelector('.progressbar input');
const startTime = document.querySelectorAll('.time')[0];
const endTime = document.querySelectorAll('.time')[1];


const audio = new Audio('./sample_audio.mp3');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    playBtn.src = './pause_icon.png';
  } else {
    audio.pause();
    isPlaying = false;
    playBtn.src = './assets/player_icon3.png';
  }
});

audio.addEventListener('loadedmetadata', () => {
  progressBar.max = audio.duration;
  endTime.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  progressBar.value = audio.currentTime;
  startTime.textContent = formatTime(audio.currentTime);
});

progressBar.addEventListener('input', () => {
  audio.currentTime = progressBar.value;
});

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

