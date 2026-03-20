console.log("this is js lecture 14");

let div=document.querySelector("div");
div.style.backgroundcolor="red";
div.innerText="Hello";

let para=document.querySelector("p");


console.dir(document.body.firstChild);

let abc=document.querySelector(".list");
console.dir(abc);

let xyz=document.querySelector("#list");
console.log(xyz);

let h3=document.querySelector("h3");
console.dir(h3.innerText);

h3.innerText=h3.innerText+" from Prabhat";


//accessing css using js

let css=document.querySelector("#id");
css.style.backgroundColor= "black";
css.style.fontSize="25px";

//insert element in 2 steps
//1 step is to create element shown below

let btn=document.createElement("button");
btn.innerText="Submit";

//2 nd step is to append this node into dom tree
let d=document.querySelector(".div");
d.append(btn); //adds at the end of the node

d.prepend(btn); //adds at the start of the node


//delete element 

let del=document.querySelector("#p");
del.remove();

