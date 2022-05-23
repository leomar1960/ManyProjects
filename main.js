document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");

  let doddleLeftSpace = 50; //giving a left space
  let startPoint = 150;
  let doddleBottomSpace = startPoint; //giving a bottom space
  let isGameOver = false;
  let platforms = [];
  let upTimerId;
  let downTimerId;
  let isJumping = true;
  let isGoingLeft = false;
  let isGoingRight = false;
  let lefTimerId;
  let rightTimerId;

  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
    doddleLeftSpace = platforms[0].left;
    doodler.style.left = doddleLeftSpace + "px";
    doodler.style.bottom = doddleBottomSpace + "px";
  }

  class Platform {
    constructor(newPlatformBottom) {
      this.bottom = newPlatformBottom;
      this.left = Math.random() * 315;
      this.visual = document.createElement("div");

      const visual = this.visual; // we need to add the visual in a variable so
      visual.classList.add("platform"); //that we are allowed to add classlist
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual);
    }
  }

  function createPlatforms() {
    let platformCount = 5;

    for (let i = 0; i < platformCount; i++) {
      let platGap = 600 / platformCount;
      let newPlatformBottom = 100 + i * platGap;
      let newPlatform = new Platform(newPlatformBottom);
      platforms.push(newPlatform);
    }
    console.log(platforms[0]);
  }

  function movePlatforms() {
    if (doddleBottomSpace > 200) {
      platforms.forEach((platform) => {
        platform.bottom -= 4;

        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";

        if(platform)
      });
    }
  }

  function jump() {
    clearInterval(downTimerId);
    isJumping = true;
    upTimerId = setInterval(function () {
      doddleBottomSpace += 20;
      doodler.style.bottom = doddleBottomSpace + "px";
      if (doddleBottomSpace > startPoint + 200) {
        fall(); //⬇︎
      }
    }, 30);
  }

  function fall() {
    clearInterval(upTimerId);
    isJumping = false;
    downTimerId = setInterval(function () {
      doddleBottomSpace -= 5;
      doodler.style.bottom = doddleBottomSpace + "px";

      if (doddleBottomSpace <= 0) {
        gameOver(); //⬇︎
      }

      platforms.forEach((platform) => {
        if (
          doddleBottomSpace >= platform.bottom &&
          doddleBottomSpace <= platform.bottom + 15 &&
          doddleLeftSpace + 60 >= platform.left &&
          doddleLeftSpace <= platform.left + 85 &&
          !isJumping
        ) {
          console.log("Landed");
          start = doddleBottomSpace;
          jump();
        }
      });
    }, 30);
  }

  function gameOver() {
    console.log("Game over");
    isGameOver = true;
    clearInterval(upTimerId);
    clearInterval(downTimerId);
  }

  function control(e) {
    if (e.key === "ArrowLeft") {
      moveLeft(); //⬇︎
    } else if (e.key === "ArrowRight") {
      moveRight(); //⬇︎
    } else if (e.key === "ArrowUp") {
      moveStraight();
    }
  }

  function moveLeft() {
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }

    isGoingLeft = true;

    lefTimerId = setInterval(function () {
      if (doddleLeftSpace >= 0) {
        doddleLeftSpace -= 5;
        doodler.style.left = doddleLeftSpace + "px";
      } else {
        moveRight(); //⬇︎
      }
    }, 30);
  }

  function moveRight() {
    if (isGoingLeft) {
      clearInterval(lefTimerId);
      isGoingLeft = false;
    }

    isGoingRight = true;

    rightTimerId = setInterval(function () {
      if (doddleLeftSpace <= 340) {
        doddleLeftSpace += 5;
        doodler.style.left = doddleLeftSpace + "px";
      }
    }, 30);
  }

  function moveStraight() {
    isGoingRight = false;
    isGoingLeft = false;
    clearInterval(rightTimerId);
    clearInterval(lefTimerId);
  }
  function start() {
    if (!isGameOver) {
      createPlatforms();
      createDoodler();
      setInterval(movePlatforms, 30);
      jump();
      document.addEventListener("keyup", control);
    }
  }

  // attach a button
  start();
});
