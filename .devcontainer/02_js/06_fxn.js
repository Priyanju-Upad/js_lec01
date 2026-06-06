//fxn

//fxn definition  ---->
function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
    
    
}
// sayMyName //refernce
sayMyName(); //extension fxn call

function addTwoNumbers(number1,number2){

    let result = number1 + number2 
    return result;
    
}
const result=addTwoNumbers(3,8)

console.log("Result:", result);


// function loginUserMessage(username){
//      return `${username} just logged in`
// }
// loginUserMessage("pihu")


// function loginUserMessage(username){
// return `${username} just logged in `
// }
// console.log(loginUserMessage("PIHU"));

function loginUserMessage(username){
 if(username===undefined)
    {
        console.log("please enter a username");
        return

    }   
    return `${username} just logged in`
}
console.log(loginUserMessage());
