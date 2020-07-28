var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$(document).keypress(function(event) {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  }
});

$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  animatePress(userChosenColor);
  var index = userClickedPattern.length - 1;
  let res = checkCorrect(index);

  if (res && userClickedPattern.length === gamePattern.length) {
    setTimeout(nextSequence, 1000);
  } else if (!res) {
    $("#level-title").text("Game Over, Press Any Key to Restart");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    resetStates();
  }
});

function nextSequence() {
  $("#level-title").text("Level " + (++level));
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkCorrect(index) {
  return userClickedPattern[index] === gamePattern[index];
}

function resetStates() {
  level = 0;
  gameStarted = false;
  gamePattern = [];
  userClickedPattern = [];
}