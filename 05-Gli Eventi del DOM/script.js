const modeButton = document.querySelector(".btn");

function switchDarkLightMode() {
  const body = document.documentElement.children[1];
  body.classList.toggle("theme");
}

modeButton.addEventListener("click", switchDarkLightMode);
