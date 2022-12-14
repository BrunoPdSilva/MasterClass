const keys = document.querySelectorAll(".key");

function playNote(event) {
  let audioKeyCode = getKeyCode(event);

  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  if (!key) return;

  addPlayingClass(key);
  playAudio(audioKeyCode);
}

function getKeyCode(e) {
  return e.type === "keydown" ? e.keyCode : e.target.dataset.key;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function addPlayingClass(key) {
  key.classList.add("playing");
}

function removePlayingClass(event) {
  event.target.classList.remove("playing");
}

function registerEvents() {
  keys.forEach(key => {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
  });
  window.addEventListener("keydown", playNote);
}

window.addEventListener("load", registerEvents);
