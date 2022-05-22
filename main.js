document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  let doddleLeftSpace = 50; //giving a left space
  let doddleBottomSpace = 150; //giving a bottom space
  let isGameOver = false;

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
      const visual = this.visual;
      visual.classList.add("platform");
    }
  }

  function createPlatforms() {
    let platformCount = 5;

    for (let i = 0; i < platformCount; i++) {
      let platGap = 600 / platformCount;
      let newPlatformBottom = 100 + i * platGap;
      let newPlatform = new Platform(newPlatformBottom);
    }
  }

  function start() {
    if (!isGameOver) {
      createDoodler();
      createPlatforms();
    }
  }

  // attach a button
  start();
});
