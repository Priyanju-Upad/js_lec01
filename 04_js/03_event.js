// // function handleClick(){
// //    const element= document.getElementById("first");
// //    element.textContent="STRIKE IS COMING";

// // }

// // const element=document.getElementById("first");
// // element.onclick = function handleClick(){
// //     element.textContent="STRIKE IS COMING ";
// // }

// // element.onclick = function handleClick()
// // {
// //     element.textContent = "I am the best";
// // }   it get override 

// // best way
// // const element = document.getElementById("first");
// // element.addEventListener('click',()=>{
// //     element.textContent = "strike is coming";
// // })

// // element.addEventListener('click',()=>{
// //     element.style.backgroundColor="brown";
// // })

// const child1=document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = 'I am clicked';
   

// })
// child1.addEventListener('click',()=>{
//     child1.style.backgroundColor="violet";
// })
// // child2
// const child2=document.getElementById("child2");
// child1.addEventListener('click',()=>{
//     child2.textContent = 'I am clicked';
   

// })
// child2.addEventListener('click',()=>{
//     child2.style.backgroundColor="indigo";
// })

// const child3=document.getElementById('child3');
// child3.addEventListener('click',()=>{
//     child3.textContent = 'I am clicked';
// })
// child3.addEventListener('click',()=>{
//     child3.style.backgroundColor="Blue";;
// })
// // it becomes so hard and manually

const parent = document.getElementById("parent");
// console.log(parent.children);


// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = 'I am clicked';
//     })
// }

// remove
function handleClick(e){
    e.target.textContent="I am clicked";
}
parent.addEventListener('click',handleClick);

parent.removeEventListener('click',handleClick);

// add
// parent.addEventListener('click',(e)=>{
//     // console.log(e.target);
//     e.target.textContent = "I am clicked";
    
// })

// bubbling

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click' , (e)=> {
//     // console.log("Grandparent is cicked");
//     console.log(e);
    
// },true)
// const parent = document.getElementById("parent");
// parent.addEventListener('click' , (e)=> {
//     // console.log("parent is cicked");
//     console.log(e);
//     e.stopPropagation();
    
    
// },true) //by default false
// const child = document.getElementById("child");
// child.addEventListener('click' , (e)=> {
//     // console.log("child is cicked");
//     console.log(e);
    
// },true)

