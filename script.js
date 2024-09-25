let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let msgContainer = document.querySelector(".msg-container");
let winnerMsg = document.querySelector("#winner-msg");
let newGameButton = document.querySelector("#new-game-button");
let count = 0;
let winner = 0;


let turnO = true;
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6], 
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO) {
            //playerO
            box.innerText = "O";
            count++;
            turnO = false;
        }
        else {
            //playerX
            box.innerText = "X";
            count++;
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        checkDraw(count , winner);
    });
});

const showWinnerMsg = (winnerr) => {
    winnerMsg.innerText = `Congratulations, the Winner is ${winnerr}`;
    msgContainer.classList.remove("hide");
}

const showDrawMsg = () => {
    winnerMsg.innerText = "Match Draw!!";
    msgContainer.classList.remove("hide");
    
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        msgContainer.classList.add("hide");
        box.innerText = "";
        count = 0;
        winner = 0;
    }
}



const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showWinnerMsg(pos1val);
                disableBoxes();
                winner = 1;

            }
        }
    }
};

const checkDraw = (count , winner) => {
    if(count === 9 && winner === 0) {
        showDrawMsg();
    }
}



newGameButton.addEventListener("click" , enableBoxes);
resetButton.addEventListener("click" , enableBoxes);

 


 



 