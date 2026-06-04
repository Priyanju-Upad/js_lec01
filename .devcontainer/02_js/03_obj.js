// singleton
// object.create    ///constructor

// object literals

const mySym = Symbol("key1")
const jsUser={
    name:"pihu",
    age:21,
    location:"meerut",
    email:"pihu@mail",
    [mySym]:"mykey1",
    isLogged: false,
    "full name":"pihu upadhyay",
    lastLogindays:["monday","tuesday"]

}

console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email="pihu@chatgpt.com"
// Object.freeze(jsUser)
jsUser.age=15
// console.log(jsUser.email);
// console.log(jsUser.age);

console.log(jsUser);

// adding fxn in obj
jsUser.greeting = function(){
   console.log("hello js user");
   
}

console.log(jsUser.greeting());

//
jsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(jsUser.greetingtwo());
