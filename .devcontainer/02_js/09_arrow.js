// 1.
const user = {
    username: "hitesh",
    price : 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);    //obj ke andr this keyword kam kr rha hai 
        // console.log(this);  //this current context ki baat krta hai
        
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
 

// 2.
// function chai()
// {
//     let username = "hitesh"
//     console.log(this.username);  //undefined  fxn ke andr ye this keyword kaam nhi kar raha hai
    
// }
// chai()



// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);    //undefined
    
// }
// chai();
//fxn keyword hata dijiye aur () ke aage => laga dijiye  

const chai = ()=>{
    let username = "hitesh"
    // console.log(this.username);
    console.log(this);
    
    
    
}
chai()


// arrow fxn
// const addTwo = (num1,num2) =>{
//  return num1 + num2
// }
// console.log(addTwo(3,4));


// implicit return ===> mtlb curly braces use nhi krne hai aur same line me code le jana hai aur return keyword ki jrurat nhiii
const addTwo = (num1,num2) =>  num1 + num2 
console.log(addTwo(3,6));

// also wrapped in parenthesis() even objects ({username: "pihu"})
const subtwo = (num1,num2)=>(num1-num2)
console.log(subtwo(8,3))