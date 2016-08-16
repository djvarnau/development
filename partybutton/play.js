var song = document.getElementsByTagName("audio")[0];
song.currentTime = 0.3;

$("#button").mousedown(function() {
  song.play();
  $("body").addClass("strobe");
});

$("#button").mouseup(function() {
  $("body").removeClass("strobe");
  song.pause();
  song.currentTime = 0.3;
});

$("#button").on('touchstart', function() {
  song.play();
  $("body").addClass("strobe");
});

$("#button").on('touchend', function() {
  $("body").removeClass("strobe");
  song.pause();
  song.currentTime = 0.3;
});
