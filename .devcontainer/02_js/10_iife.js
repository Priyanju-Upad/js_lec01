// IIFE
// Immediately Invoked Function Expression

//fxn turnt execute
// global scope koyi problem kre fxn me

// function chai()
// {
//     console.log(`DB CONNECTED`);
    
// }
// chai()

(function chai()
{
    console.log(`DB CONNECTED`);
    
})();   //; imp 

// ()() ==> definition execution

( (name) => {
console.log(`${name} , DB  IS CONNECTING`);

})("PIHU");