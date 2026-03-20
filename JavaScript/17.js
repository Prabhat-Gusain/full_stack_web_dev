let style=document.querySelector("div");
style.style.backgroundColor="black";
style.style.border="2px solid black";
style.style.height="100px";
style.style.width="300px";
style.style.color="white";

let content=document.createElement("h3");
content.innerText="Hey";

style.append(content);

let btn=document.querySelector("button");
// btn.onclick=(e)=>{
//     console.log("button was clicked");
//     console.log(e);
//     console.log(e.type);
// }

btn.addEventListener("click",(e)=>{
    console.log("button clicked -hander 1");
    console.log(e.type);
});

btn.addEventListener("click",(eve)=>{
    console.log("Handler 2 ");
});

const handler3=()=>{
    console.log("Handler 3 ");
};

btn.addEventListener("click",()=>{
    console.log("Handler 4 ");
});

style.onmouseover=()=>{
    console.log("you are inside div"); 
};

btn.removeEventListener("click",handler3);

