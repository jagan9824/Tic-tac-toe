let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let ChoosenChoice=document.querySelector(".choice");
let temp = document.querySelector(".choice").innerHTML;
let turnO;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    // let choice = prompt("enter your choice");
    // if(choice=='o')
    turnO = true;
    // else
    // turnO = false;
    enableBoxes();
    disableBoxes();
    msgContainer.classList.add("hide");
    ChoosenChoice.innerHTML=temp;

};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
        box.classList.remove('box1');
        box.classList.add('box');
        box.innerText = "O";
        turnO = false;
        }else {
            box.innerText = "X";
            turnO = true; 
            box.classList.remove("box");
            box.classList.add('box1');
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulaion Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(pattern of winPatterns) {
        
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
    if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
         if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
         }
    }
  }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
resetGame();
disableBoxes();
function circle()
{
    turnO=true;
    enableBoxes();
    ChoosenChoice.innerHTML=`You have Choosen 'O'`;
}
function cross()
{
    turnO=false;
    enableBoxes();
    ChoosenChoice.innerHTML=`You have Choosen 'X'`;
}