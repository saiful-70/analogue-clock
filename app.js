const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setClock = () => {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    // let seconds = 0;
    // let minutes = 45;
    // let hours = 5;

    secondHand.style.transform = `rotate(${((seconds/60)*360)+90}deg)`

    minHand.style.transform = `rotate(${((minutes/60)*360)+((seconds/60)*6)+90}deg)`;
    console.log(minutes);

    hourHand.style.transform = `rotate(${((hours/12)*360)+((minutes/60)*30)+90}deg)`;
}
setInterval(setClock, 1000);