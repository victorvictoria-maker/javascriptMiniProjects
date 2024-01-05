const colourInput = document.querySelector(".colour");
const spaceInput = document.querySelector(".space");
const blurInput = document.querySelector(".blur");
const image = document.querySelector(".image");

colourInput.addEventListener("input", (e) => {document.documentElement.style.setProperty("--primary-colour", `${e.target.value}`)});
blurInput.addEventListener("input", (e) => document.documentElement.style.setProperty("--blur", `${e.target.value}px`));
spaceInput.addEventListener("input", (e) => document.documentElement.style.setProperty("--padding", `${e.target.value}px`));