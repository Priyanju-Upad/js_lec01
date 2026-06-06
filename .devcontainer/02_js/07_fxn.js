// fxn 

function calculateCartprice(...num1)
{
  return num1
}
console.log(calculateCartprice(200,400,600,500))

// obj passing in fxn
const user = {
  username: "hitesh",
  prices:99
}
function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
}
// handleObject(user)

handleObject({
username:"hitesh",
price:99
})   //direct obj passing while calling a fxn





// array passing into fxn
const myNewArray = [200,300,400,100,600]

function returnSecondValue(getArray){
  return getArray[0]
}

console.log(returnSecondValue(myNewArray));
