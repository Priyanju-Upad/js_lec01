const myObject = {
    'game1': 'Nfs',
    'game2': 'Spiderman',
    'game3':'Ironman',
    'game4':'jacksparrow'
}
// forof objects pe iterate nhi krpaa rha tha 

// forin
for (const key in myObject) {
    // console.log(key); only key
    // console.log(myObject[key]); // only value
 console.log(`${key} value is  ${myObject[key]}`);
 
    
}

const programs = ["js","rb","py","java","cpp"]
// key is 0,1,2,3,4
// value is js,rb,py,java,cpp
for (const key in programs) {
 console.log(programs[key]);
 
}


// forin is not iterable  for map
