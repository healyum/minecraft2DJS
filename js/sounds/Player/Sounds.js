/**
 PLAYER SOUNDS CLASS
 **/
var PlayerSounds = {
    playJump: function() {
        var song = new Audio();
        song.src = './assets/sounds/Player/jump.mp3';
        song.play();
    }
}