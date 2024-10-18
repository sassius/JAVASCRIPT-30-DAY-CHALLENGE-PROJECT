let progres = document.getElementById("progres");
let play = document.getElementById("play");
let back = document.getElementById("back");
let front = document.getElementById("front");
let audio =document.getElementById("audio");


audio.onloadeddata = ()=>{
    progres.max=audio.duration;
    progres.value=audio.currentTime;
}
function playpause (){
    let ispause =play.classList.contains("paused");
    if(ispause){
        audio.pause();
        play.classList.remove("paused")
        play.innerHTML="play_arrow"
    }
    else{
        audio.play();
        play.classList.add("paused")
        play.innerHTML="pause";
    }
}
play.addEventListener("click",playpause);

progres.addEventListener("input",()=>{
    audio.currentTime=progres.value;
    audio.play();
    play.innerHTML="pause";
    
})
audio.addEventListener("timeupdate",()=>{
    progres.value=audio.currentTime;
})
