document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  const gameDispaly = document.querySelector(".game-container");
  const ground = document.querySelector(".ground");

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 2;

  function startGame() {
    birdBottom -= gravity;
    console.log(birdBottom);
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
  }

  //   let timerId = setInterval(startGame, 20);

  function jump() {
    birdBottom += 50;
    bird.style.bottom = birdBottom + "px";
  }
  document.addEventListener("keyup", jump);
});
