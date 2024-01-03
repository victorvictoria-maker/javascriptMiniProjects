const colourInput = document.querySelector(".colour");
const spaceInput = document.querySelector(".space");
const blurInput = document.querySelector(".blur");
const image = document.querySelector(".image");

// console.log("hi");

// colour.addEventListener("change", makeChange);

// console.log(colourInput, spaceInput, blurInput);
colourInput.addEventListener("input", (e) => {
    // console.log(this);
    image.style.backgroundColor =  e.target.value;
});

blurInput.addEventListener("input", (e) => image.style.filter = `blur(${e.target.value}px)`);

spaceInput.addEventListener("input", (e) => image.style.padding = `${e.target.value}px`);