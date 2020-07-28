$("h1").text("Greetings");
$("img").attr("src", "https://i.dlpng.com/static/png/6370657_preview.png");


// Click Event Listeners
$("h1").click(function() {
  $("h1").css("color", "purple");
});

$("button").click(function() {
  $("h1").css("color", "purple");
});

// Key Event Listener
$(document).keypress(function(event) {
  $("h1").text(event.key);
});