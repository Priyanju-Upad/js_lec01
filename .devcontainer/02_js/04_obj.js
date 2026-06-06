// const tinderUser = new Object()
// console.log(tinderUser);

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"

tinderUser.isLoggedin = false
// console.log(tinderUser);

const regularUser = {
    email : "pihu@mail.com",
    fullname : {
        userfulname:{
            firstname: "pihu",
            lastname: "upadhyay"
        }
    }
}
console.log(regularUser.fullname.userfulname.firstname);
//obj merging

const obj1 = {1:"a",
           2:"b"
}
const obj2 = {3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3 = Object.assign({}obj1,obj2)
    // {}-->target  obj1,obj2-->source

    const obj3 = {...obj1,...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
