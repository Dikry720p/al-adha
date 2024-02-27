var audio = document.getElementById("myAudio");
var muteButton = document.getElementById("muteButton");

function toggleSound() {
    if (audio.paused) {
        audio.play();
        muteButton.innerHTML = "Mute";
    } else {
        audio.pause();
        muteButton.innerHTML = "Unmute";
    }
}