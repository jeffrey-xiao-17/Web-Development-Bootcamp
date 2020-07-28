document.querySelectorAll(".drum").forEach(btn => btn.addEventListener("click", function() {
  playSound(btn.textContent);
  buttonAnimation(btn.textContent);
}));

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(letter) {
  switch (letter) {
    case "w":
      (new Audio('sounds/tom-1.mp3')).play();
      break;
    case "a":
      (new Audio('sounds/tom-2.mp3')).play();
      break;
    case "s":
      (new Audio('sounds/tom-3.mp3')).play();
      break;
    case "d":
      (new Audio('sounds/tom-4.mp3')).play();
      break;
    case "j":
      (new Audio('sounds/crash.mp3')).play();
      break;
    case "k":
      (new Audio('sounds/kick-bass.mp3')).play();
      break;
    case "l":
      (new Audio('sounds/snare.mp3')).play();
      break;
    default:
      console.log(letter);
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}