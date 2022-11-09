const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let player_score= 0;
if(localStorage.getItem("last_player_score")!==null){
player_score = localStorage.getItem("last-player_score");
}
let log_board = document.getElementById("score")
setInterval(function(){
    log_board.innerText = player_score;
},300)
function jump(){
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}
let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
// detect collision
if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    if(confirm("Game over, made: "+player_score)){
        localStorage.setItem("last_player+")
        history.go(0)
    }
    else{
        clearInterval(isAlive);
    }
  }
if(cactusLeft < 50 && cactusLeft > 0 && dinoTop < 150){
    player_score+=1;
}
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
//3