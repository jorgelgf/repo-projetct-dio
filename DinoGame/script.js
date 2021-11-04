const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
const click = document.querySelector(".bt");
let position = 0;

let isJumpin = false;

function handleKeyup({ target }) {
  if (event.keyCode === 32 || event) if (!isJumpin) return jump();
}

function jump() {
  isJumpin = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      //descendo
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumpin = false;
        } else {
          position -= 20;
          dino.style.bottom = position + "px";
        }
      }, 20);
    } else {
      //subindo
      position += 20;
      dino.style.bottom = position + "px";
    }
  }, 20);
}
function createCactus() {
  const cactus = document.createElement("div");

  let cactusPosition = 1000;

  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);
  let randomTime = Math.random() * 6000;

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      //Game over
      clearInterval(leftInterval);
      document.body.innerHTML = `<h1 class="game-over">Fim de jogo</h1>`;
      points = 0;
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);
  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener("click", handleKeyup);
document.addEventListener("keyup", handleKeyup);
