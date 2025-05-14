let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;//PLAYERX , PLAYERO
const winpattern = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
];
const resetgame = () => {
    turnO =true;
    enableboxes ();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){  //PLAYERO
            box.innerText = "O";
            turnO = false;
        } else {   //PLAYERX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});
const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText =`Congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes ();
}
const checkWinner = () => {
    for (let pattern of winpattern) {
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val == pos2Val && pos2Val == pos3Val) {
            showWinner(pos1Val);
        }
       }
    }
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);