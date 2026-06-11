const newElement = document.createElement("h2");
// console.log(newElement);
newElement.textContent="Strike is coming";
newElement.id = "second";

// select element
const element = document.getElementById("first");
element.after(newElement)

const newElement2=document.createElement("h3");
newElement2.textContent="Raksha Bandhan is coming sooon"
newElement2.id = "third";
// newElement2.className = "rakhi";

// multiple class names dene hai
newElement2.classList.add("rakhi");
newElement2.classList.add("holi");

newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "40px"
console.log(newElement2);

element.after(newElement2) 

console.log(newElement2.getAttribute("class"));

// //list ke andr dalna 
// const list= document.createElement("li");
// list.textContent = "Milk"

// const list1 = document.createElement("li");
// list1.textContent = "Cake";

// const list2 = document.createElement("li");
// list2.textContent = "chocolate"

// const unorderElement = document.getElementById("listing");
// unorderElement.appendChild(list);
// unorderElement.prepend("list2");
// unorderElement.append(list1);



// const arr=["milk","halwa","paneer" ,"tofu" , "tea"];
// const unorderElement = document.getElementById("listing")
// const fragment = document.createDocumentFragment();

// for (const item of arr) {
//     const list = document.createElement("li");
//     list.textContent=item;
//     fragment.append(list);
    
    
// }
// unorderElement.append(fragment);

// without fragment  
// with help of array
const arr = ['Milk','Halwa','Paneer','Tofu','Tea'];
const unorderElement = document.getElementById('listing');

const listitems=[];

for (let item of arr) {
    const list = document.createElement("li");
    list.textContent = item;
    listitems.push(list);
    
}
unorderElement.append(...listitems);

//how to delete 
const s1=document.getElementById("first");
s1.remove();