let mode=document.querySelector("#button");
let curMode="light";


mode.addEventListener("click",()=>{
    if(curMode==="light"){
        curMode="dark";
        document.querySelector("body").style.backgroundColor="Black";
    }
    else{
        curMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(curMode);
})