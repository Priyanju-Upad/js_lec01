// array

const myArr=[0,1,2,3,4,5]
// shallow copy me refernce me bhi change hoga
// deep copy me refernce me no change

const myHeroes=["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4);
console.log(myArr2);

myArr.unshift(9);
console.log(myArr);

myArr.shift();

const newArr = myArr.join()
console.log(myArr);

console.log(newArr);

console.log(typeof newArr);

//slice me original array not change
// splice me original array change