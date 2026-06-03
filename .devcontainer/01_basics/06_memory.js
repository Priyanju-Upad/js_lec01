// stack and heap memory

// primitive : stack 
// non-primitive: heap

let myYoutube="Pihu";

let anothername=myYoutube;
 
console.log(anothername);
console.log(myYoutube);

let userOne = {
    email:"gmail",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email="pihu@"
console.log(userOne.email);
console.log(userTwo.email);
