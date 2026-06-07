const userEmail = ""
if(userEmail)
{
   console.log("got user email");
   
}
else {
    console.log("dont have user email");
    
}

// [],"0",'false'," ",{},function(){}-->true

// false,"",0,-0,BigInt 0n,null, undefined,NaN-->false

// Nullish Coalescing Operator (??):null undefined

let val1;
val1 = 5 ??10

console.log(val1);


let val2;
val2 = null ?? 10
console.log(val2);


// terniary operator condition ? true:false