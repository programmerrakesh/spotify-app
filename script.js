console.log('welcome to spotify');
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let audioElementOne = new Audio("songs/3.mp3");
let masterPlay = document.getElementById('masterPlay');
let masterPause = document.getElementById('masterPause');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let bottomSpan = document.getElementById('bottomSpan');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let pauseButton = document.getElementsByClassName('pauseButton');
let videoImg = document.getElementsByClassName('video-img');
let forWard = document.getElementsByClassName('for-ward');

 let songs = [
   {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", videoImage:"video-pause-button.png"},
   {songName: "o priya re priya", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", videoImage:"video-pause-button.png"},
   {songName: "adhuri kahani", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", videoImage:"video-pause-button.png"},
   {songName: "sorry dipanita", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", videoImage:"video-pause-button.png"},
   {songName: "aj ki party merii", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", videoImage:"video-pause-button.png"},
   {songName: "dil mey baji gitar", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", videoImage:"video-pause-button.png"},
   {songName: "masallahh masallaah", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", videoImage:"video-pause-button.png"},
   {songName: "kabhi jo badal dhar", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", videoImage:"video-pause-button.png"},
   {songName: "hamko hami sey chur", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", videoImage:"video-pause-button.png"},
   {songName: "hay hay re allah", filePath: "songs/10.mp3", coverPath: "covers/10.jpg",  videoImage:"video-pause-button.png"},
 ];

 songItems.forEach((element, i)=>{
    //  console.log(element, i);
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
     element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
 });

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.pause || audioElement.currentTime <= 0){
        audioElement.play();
         masterPause.style.display = "block";
         masterPlay.style.display = "none";
         gif.style.opacity = 1;
         bottomSpan.style.opacity = 1;
    }
    
});

masterPause.addEventListener('click', ()=>{
    if(audioElement.play || audioElement.currentTime >= 0){
            audioElement.pause();
            masterPlay.style.display = "block";
             masterPause.style.display = "none";
             gif.style.opacity = 0;
             bottomSpan.style.opacity = 0;
    
         }
});

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;

});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
});




 Array.from(document.getElementsByClassName('video-img')).forEach((element)=>{
     element.addEventListener('click', (e)=>{
         console.log(e.target);
        e.target.style.display = "none";
         songItems.forEach((element, i)=>{
          element.getElementsByClassName("video-img")[0].src = songs[i].videoImage;
         })  
    
 })
 })


