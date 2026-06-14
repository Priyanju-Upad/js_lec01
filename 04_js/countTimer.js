

setInterval(()=>{
const result = document.getElementById('result');

// millisecond
const current = Date.now();

// console.log(current);
const olympicTime = new Date(2028,6,14).getTime();
let timer = olympicTime-current;
// console.log(olympicTime);


const day = Math.floor((timer)/(1000*60*60*24));
timer %=  1000*60*60*24;

const hour = Math.floor((timer)/(1000*60*60));
timer %= 1000*60*60;

const minute = Math.floor((timer)/(1000*60));
timer %= 1000*60;

const second = Math.floor((timer)/(1000));


result.textContent = ` ${day} Days  ${hour} Hours  ${minute} Minutes  ${second} Seconds` ; 
})

