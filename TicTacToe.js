let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let winMsgContainer = document.querySelector(".winMsgContainer");
let winMsg = document.querySelector(".winMsg");

let turn = "player1";
let winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];

function resetGame() {
    turn = "player1";
    enableBtn();
    for(box of boxes){
        box.innerText = "";
    }
    winMsgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn == "player1") {
            box.innerText = "x";
            turn = "player2";
        }
        else {
            box.innerText = "o";
            turn = "player1";
        }
        box.disabled = true;

        checkWinner();
    });
});

function checkWinner() {
    for (let pattern of winPatterns) {
        let posi1 = boxes[pattern[0]].innerText;
        let posi2 = boxes[pattern[1]].innerText;
        let posi3 = boxes[pattern[2]].innerText;
        if (posi1 != "" && posi2 != "" && posi3 != "") {
            if (posi1 == posi2 && posi2 == posi3) {
                showWinner(posi1);
            }
        }
    }
}

function showWinner(winner) {
    winMsgContainer.classList.remove("hide")
    winMsg.innerText = `Winner is ${winner}`;
    boxes.forEach((box) => {
        disableBtn();
    });
}

function disableBtn() {
    for(box of boxes){
        box.disabled = true;
    }
}

function enableBtn() {
    for(box of boxes) {
        box.disabled = false;
    }
}

resetBtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);