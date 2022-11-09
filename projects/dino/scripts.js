const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const player = [{"logs":{"score":"0"}}];
const log_board = document.getElementById("log").innerText
setInterval(function(){
    log_board == player.score
},100)
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
if(cactucactusLeft < 50 && cactusLeft > 0 && dinoTop <= 140){
    player.logs.score==1;
}
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
