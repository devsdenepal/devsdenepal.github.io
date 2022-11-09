const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let player_score= 0;
let log_board = document.getElementById("score").innerText
setInterval(function(){
    log_board = player_score;
},10)
function jump() {
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
    alert("Game Over!");
  }
if(cactusLeft < 50 && cactusLeft > 0 && dinoTop < 150){
    player_score+=1;
}
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
//2