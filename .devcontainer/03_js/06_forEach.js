const coding = ['js','ruby','java','python','cpp']

// coding.forEach(function (item){
//     console.log(val);
// })

// arrow fxn
// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)  //without execution jayega printMe() ye use nhi krna hai

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }

]
//iterate with forEach

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})