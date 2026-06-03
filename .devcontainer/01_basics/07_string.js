const name = "Pihu"
const repoCount= 50;


// console.log(name + repoCount + "Value" );

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string declaration
const gameName = new String(`Pihu Upadhyay`)
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.charAt(2));


//last char include nhi ho  rhi hai

const newString = gameName.substring(0,4);
console.log(newString);

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const newStringOne = "  hitesh  "
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','_'));

console.log(url.includes('sundar'));


