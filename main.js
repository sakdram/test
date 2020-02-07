let Vid1 = ["video/1.mp4","video/2.mp4","video/3.mp4"];
let Vid2 = ["video/4.mp4","video/5.mp4","video/6.mp4"];
let Vid3 = ["video/7.mp4","video/8.mp4","video/9.mp4"];
let Channels = [Vid1,Vid2,Vid3];
let count = 0;
let channel = 0;


function nextChannel (){
    channel = channel + 1;
    count = -1;
    if (channel===Channels.length){
        channel = 0;
    }
    nex();
}
function prevChannel() {
    if (channel === count){channel = 3;}
    channel = channel - 1;
    count = -1;
    nex();
}

function nex() {
    count = count + 1;
    $("#active").attr("src", Channels[channel][count]);
    if (count===Channels[channel].length - 1){
        count = -1;
    }
}
let vid = document.getElementById('active');
function play() {
    vid.play();
}
function pause() {
    vid.pause();

}
function stop() {
    vid.pause();
    vid.currentTime = 0;
}
function playOrPause () {
    if (vid.paused) {
        vid.play();
    }
    else {
        vid.pause();
    }
}
document.addEventListener("keydown", function(space) {
    document.getElementById("playOrPause").click();
});