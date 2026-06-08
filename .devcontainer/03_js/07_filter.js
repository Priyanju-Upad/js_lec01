const coding = ["js","ruby","java","python","cpp"]

// ye fxn forEach kchh return hi kr raha 
// const values = coding.forEach((item)=>{
//  console.log(item);
//  return item
 
// })
// console.log(values);



const myNums = [1,2,3,4,5,6,7,8,9,10]
// by filter
// const newNums=myNums.filter((num) => num > 4 )
// console.log(newNums);

// by forEach
const newNums=[]
myNums.forEach((num)=>{
    if(num>4)
    newNums.push(num)
});
console.log(newNums);


const books = [
    {title : 'Book One',genre:'Fiction',publish:1991},
    {title:'Book two',genre:'History',publish:1947},
    {title:'Book three', genre: 'History', publish:1950}
];
let userBooks = books.filter((bk)=>bk.genre==='History')
 console.log(userBooks);
 
 userBooks = books.filter((bk)=>{
    return bk.publish >=1950})
console.log(userBooks);


