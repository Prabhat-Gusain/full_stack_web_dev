console.log("JS Functions");

//Functions are block of code that performs a specific task,can be invoked whenever needed.

function myFunction()
{
    console.log("Welcome to my js function!");
}

myFunction();


function myFunction2(msg,n){//parameters
    console.log(msg,n);
}
myFunction2("Heyyyyyyyyy Whatsupp",3);//arguments


const arrowSum=(a,b)=>{ //arrow function ,other way of writing function.
    console.log("sum is:",a+b);
}

arrowSum(3,2);

const arrowMultiply=(a,b)=>{
    console.log(`multiplication of ${a} and ${b}=`,a*b);
}

arrowMultiply(3,2);