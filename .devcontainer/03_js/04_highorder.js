// for of -->array specific loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello world!"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`)
}

// Maps

const map = new Map()
// unique value onlyyyy
map.set("a",1);
map.set("b",2);
map.set("c",3);
map.set("d",4);

console.log(map.get("a"));
console.log(map.get("d"));

map.set("c",21);

console.log(map.get("c"));
map.delete("b");

console.log(map.size);

//array me aayega [ 'a', 1 ][ 'c', 21 ][ 'd', 4 ]
for (const key of map) {
    console.log(key);
    
}
// a :- 1  c :- 21   d :- 4
for(const [key,value] of map){
    console.log(key,':-',value);
    
}

// object is not iterable by forof
const myObject = {
    'game1': 'Nfs',
    'game2': 'Spiderman'
}
// for(const [key,value] of myObject ){
//     console.log(key ,'=' ,value);
// }
