let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector("msg-container");
let turnX=true;


const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked!!");
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

const checkWinner=()=>{
     for(patterns of winPattern){
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;

        if(pos1Val!=""&& pos2Val!=""&& pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log("winner");
            }
        }
     }   
}

const showWinner=(winner)=>{
    msg.innerText=`Winner is:${winner}`;
    msgContainer.classList.remove("hide");
}