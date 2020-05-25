const scoreEl = document.querySelector(".score");
const scoreDiv = document.querySelector(".score-div");
const button = document.querySelector(".menu-div button");
const menu = document.querySelector(".menu-div");

button.addEventListener("click", () => {
  menu.classList.add("hidden");
  scoreDiv.classList.remove("hidden");
});
