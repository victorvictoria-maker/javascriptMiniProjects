window.addEventListener("keydown", playSound);
const allKeys = document.querySelectorAll('.key');
allKeys.forEach( eachKey =>  eachKey.addEventListener("transitionend", removeTransition));

function playSound(e) {
    // console.log(e.keyCode, "Hello");
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
}

function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing"); 
};