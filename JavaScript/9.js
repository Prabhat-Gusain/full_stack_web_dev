console.log("Heyyy!");

// let a=document.getElementsByClassName("box");
// console.log(a);
// a[2].style.backgroundColor="red";

// document.getElementById("red").style.backgroundColor="red";

// document.querySelector(".box").style.backgroundColor="blue";

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor="brown";
})