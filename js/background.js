const background = document.querySelector("#background");

const bgImg = () => {
  let randomImage = Math.floor(Math.random() * 8) + 1;
  background.style.backgroundImage = `url(img/${randomImage}.jpg`;
}

const backgroundInit = () => {
  bgImg();
}

backgroundInit();
