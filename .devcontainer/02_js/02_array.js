const marvel=["thor","ironman","spiderman"]
const dc=["superman","flas","batman"];

// marvel.push(dc);  //push 
// console.log(marvel);

// const superheros=marvel.concat(dc); //concat
// console.log(superheros);


const allheros=[...marvel,...dc];
console.log(allheros);


const another_arr=[1,2,3,[4,5,6],[7,9],7];
const real_another_arr=another_arr.flat(Infinity);
console.log(real_another_arr);


console.log(Array.isArray("Pihu"));
console.log(Array.from("Pihu"));

// isArray, from,of