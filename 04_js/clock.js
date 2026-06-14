
const div = document.querySelector('div');
setInterval(()=>{

let time = new Date();
div.textContent = time.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata'
  })
},1000)


// console.log(
//   time.toLocaleTimeString('en-IN', {
//     timeZone: 'Asia/Kolkata'
//   })
// ); 