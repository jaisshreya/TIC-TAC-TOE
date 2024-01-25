let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");

// let playerX,playerO
let turnO=true;

// 2D array 
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach(box=>{
      box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
        draw();
      })
})


const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const diableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
         
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
         box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulations!! , Winner is ${winner} `;
    msgContainer.classList.remove("hide");
}

const checkWinner=()=>{
     for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]]);
         
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[ pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            
            if(pos1val===pos2val && pos2val===pos3val){
                // console.log("winner",pos1val);
                showWinner(pos1val);

            }
        }
     }

}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

const draw = () => {
    let count = 0;

    // Check if all boxes are filled
    for (let box of boxes) {
        if (box.innerText !== "") {
            count++;
        }
    }

    // Check if no player has won
    if (count === 9) {
        // All boxes are filled and no player has won, it's a draw
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
    }
};
