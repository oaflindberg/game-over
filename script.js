const scoreEl = document.querySelector(".score");
const button = document.querySelector(".menu-div button");
const menu = document.querySelector(".menu-div");

button.addEventListener("click", (e) => {
  menu.classList.add("hidden");
});
