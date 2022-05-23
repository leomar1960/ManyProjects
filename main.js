document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");

  let doddleLeftSpace = 50; //giving a left space
  let doddleBottomSpace = 250; //giving a bottom space
  let isGameOver = false;
  let platforms = [];
  let upTimerId;
  let downTimerId;

  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
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
  }

  function movePlatforms() {
    if (doddleBottomSpace > 200) {
      platforms.forEach((platform) => {
        platform.bottom -= 4;

        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";
      });
    }
    console.log(platforms[0]);
  }

  function fall() {
    clearInterval(upTimerId);
    downTimerId = setInterval(function () {
      doddleBottomSpace -= 5;
      doodler.style.bottom = doddleBottomSpace + "px";
    }, 30);
  }
  // ⬆︎
  function jump() {
    clearInterval(downTimerId);
    upTimerId = setInterval(function () {
      doddleBottomSpace += 20;
      doodler.style.bottom = doddleBottomSpace + "px";
      if (doddleBottomSpace > 350) {
        fall();
      }
    }, 30);
  }

  function start() {
    if (!isGameOver) {
      createDoodler();
      createPlatforms();
      setInterval(movePlatforms, 30);
      jump();
    }
  }

  // attach a button
  start();
});
