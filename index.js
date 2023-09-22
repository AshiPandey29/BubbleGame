var ran;
var timer = 60;
var score = 0;
var hit = 0;
var time = 0;
var timerint;
var counter = 0;
var getHit;
var bubbleHint;
var clickednum;
var first;
var music = new Audio('sounds/game click.wav');
var pbtm = document.querySelector("#pbtm");
var bubbleHint = document.querySelector(".bubble");
var playPause = document.getElementById("playPause");
var musicBtn = document.getElementById("musicBtn");

function makeBubble(){
    var clutter = "";
for(i=1; i<=228; i++){
    ran = Math.floor(Math.random()*10);
    clutter +=  `<div class="bubble">${ran}</div>`;
}
pbtm.innerHTML = clutter;
}

function resume(){
    timer = document.querySelector("#timerval").textContent;
    runTimer();    
}

function runTimer(){
    timerint = setInterval(function(){
        if(timer > 0){
            timer--;  
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            pbtm.innerHTML = `<h1>GAME OVER</h1> <br> <h6>Your score is ${score}.</h6>`;
        }
    }, 1000); 
}

function stopTimer(){
    clearInterval(timerint);
}

function reset(){
    timer = 60;
    document.querySelector("#timerval").textContent = timer;
}

function getNewHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hit;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function hitBubble(details){
  clickednum   = Number(details.target.textContent);
    if(clickednum === hit){

        increaseScore();
        makeBubble();
        getNewHit();
    }
}

function sound(){
    if(musicBtn.classList.contains('fa-volume-up')){
        music.play();
    }
    else{
        music.pause();
    }
}

// function getHint(){
//     hint = setInterval(function(){
//         pbtm.onclick = function abc(){
//             count += 1;
//             console.log(count);
//         } 
//         while(time<=5){
//             time++;
//         }
//         if(count < 1 && time == 5){
//             console.log("b");

//         }
//     }, 5000);
// }

var bubbleHit = document.querySelector("#pbtm");
bubbleHit.addEventListener("click", sound
);
bubbleHit.addEventListener("click", hitBubble
);


var playAgn = document.querySelector("#playAgain");
playAgn.addEventListener("click", ()=>{
    score = 0;
    document.querySelector("#scoreval").textContent = score;
    stopTimer();
    reset();
    makeBubble();
    getNewHit();
    runTimer();
})


playPause.addEventListener("click", function(){
    if( playPause.classList.contains('fa-pause')){
      stopTimer(); 
      pbtm.style.pointerEvents = "none";
      bubbleHit.removeEventListener("click", hitBubble);
      playPause.classList.remove('fa-pause');
      playPause.classList.add('fa-play');
    }
    else {
        bubbleHit.addEventListener("click", hitBubble);
        resume();
        pbtm.style.pointerEvents = "auto"; 
        playPause.classList.remove('fa-play');
        playPause.classList.add('fa-pause')
    }
})

musicBtn.addEventListener("click", ()=>{
       if(musicBtn.classList.contains('fa-volume-up')){
      bubbleHit.removeEventListener("click", music.play);
        musicBtn.classList.remove("fa-volume-up");
        musicBtn.classList.add("fa-volume-off");
       }
       else{
        musicBtn.classList.remove("fa-volume-off");
        musicBtn.classList.add("fa-volume-up");
       }
})


// setTimeout(function(){
//     getHit = document.querySelector("#hitval").textContent;
//     bubbleHint = document.querySelector(".bubble").textContent;
//     if(getHit === bubbleHint){
//         bubbleHint.style.backgroundColor = "blue";
//     }
// },5000)

// pbtm.onclick = function(e){
// counter = 0;
// }

setTimeout(()=>{
first = document.querySelector(".first");

first.style.opacity = 0;
}, 3000);



runTimer();
makeBubble();
getNewHit();
// getHint();