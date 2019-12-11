var video1 = document.querySelector('.video1');
var video2 = document.querySelector('.video2');
var btn1 = document.getElementById('playPause1');
var btn2 = document.getElementById('playPause2');

function togglePlayPause1() {
  if (video1.paused) {
    btn1.className = 'pause';
    video1.play();
  } else {
    btn1.className = 'play';
    video1.pause();
  }
}

function togglePlayPause2() {
  if (video2.paused) {
    btn2.className = 'pause';
    video2.play();
  } else {
    btn2.className = 'play';
    video2.pause();
  }
}

btn1.onclick = function() {
  togglePlayPause1();
};

btn2.onclick = function() {
  togglePlayPause2();
};

// video.addEventListener('timeUpdate', function() {
//   var juicePos = video.currentTime / video.duration;
//   juice.style.width = juicePos;
// });



