const secondsDiv = document.querySelector(".seconds");
const minutesDiv = document.querySelector(".minutes");
const hoursDiv = document.querySelector(".hours");

const runTime = () => {
    // console.log(seconds);
    const presentTime = new Date();

    // seconds
    const seconds = presentTime.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondsDiv.style.transform = `rotate(${secondsDeg}deg)`;
    // secondsDiv.style.background = `red`;

    // minutes
    const minutes = presentTime.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;
    minutesDiv.style.transform = `rotate(${minutesDeg}deg)`;
    // minutesDiv.style.background = `green`;

    // hours
    const hours = presentTime.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;
    hoursDiv.style.transform = `rotate(${hoursDeg}deg)`;
    // hoursDiv.style.background = `blue`;
};


setInterval(runTime, 1000);