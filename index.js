let computerScore = 0;
let playerScore = 0;
let roundWinner = "";

function game(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
            roundWinner =  "tie"
    }
    if (
            (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
            (playerSelection === "SCISSOR" && computerSelection === "PAPER") ||
            (playerSelection === "PAPER" && computerSelection === "ROCK")
        ) {
            playerScore++;
             roundWinner = "player";
        }
    if (
        (computerSelection === "ROCK" && playerSelection === "SCISSOR") ||
        (computerSelection === "SCISSOR" && playerSelection === "PAPER") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK")
        ) {
            computerScore++;
            roundWinner = "computer";
        }
}

function randomNum () {
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0: 
            return "ROCK";
        case 1:
            return "PAPER";
        case 2: 
            return "SCISSOR";    
    }
}

function gameOver() {
   return playerScore === 5 || computerScore === 5;
}

const roundResult = document.getElementById("roundResult");
const youResult = document.getElementById("youResult");
const computerResult = document.getElementById("computerResult");
const playerScoreG = document.getElementById("youResult");
const computerScoreG = document.getElementById("computerResult");

const stickHand = document.getElementById("stickHand");
const handS = document.getElementById("handS");
const compHand = document.getElementById("compHand");

const modalContainer = document.getElementById("modal-container");
const modal = document.getElementById("modal");
const overlay = document.getElementById("back");
const matchWinner = document.getElementById("matchWinner");

const forearm = document.getElementById("foreArm1");

$("#rockBtn").click(() => {
    mouseClick("ROCK");
    });
$("#rockBtn").click(() => {
    doAnimation();
})

$("#paperBtn").click(() => { 
    mouseClick("PAPER");
    });
$("#paperBtn").click(() => {
    doAnimation();
})

$("#scissorBtn").click(() => {
    mouseClick("SCISSOR");
    });
$("#scissorBtn").click(() => {
    doAnimation();
})

$("#resetBtn").click(restartGame);

function mouseClick (playerSelection) {
    if (gameOver()) {
        modalOpen();
        return
    }
    
    const computerSelection = randomNum();
    game(playerSelection, computerSelection);
    updateChoice(playerSelection, computerSelection);
    roundInfo();

    if (gameOver()) {
        modalOpen();
        return
    }
}

function updateChoice (playerSelection, computerSelection) {
    switch(playerSelection){
        case "ROCK" :
            stickHand.classList = "far fa-hand-rock";
            handS.classList = "stick hand";
            break;
        case "PAPER" :
            stickHand.classList = "far fa-hand-paper";
            handS.classList = "stick hand";
            break;
        case "SCISSOR" :
            stickHand.classList = "far fa-hand-scissors";
            handS.classList = "stick handScissor";
            break;
    }

    switch(computerSelection) {
        case "ROCK" :
            compHand.classList = "far fa-hand-rock";
            break;
        case "PAPER" :
            compHand.classList = "far fa-hand-paper";
            break;
        case "SCISSOR" :
            compHand.classList = "far fa-hand-scissors";
            break;
    }

}

function roundInfo () {
    if (roundWinner === "tie") {
        roundResult.textContent = "tie"
    } else if (roundWinner === "player") {
        roundResult.textContent = "you won!"
    } else if (roundWinner === "computer") {
        roundResult.textContent = "you lost..."
    }

    playerScoreG.textContent = ` ${playerScore}`;
    computerScoreG.textContent = ` ${computerScore}`
}

function doAnimation () {
    forearm.style.animation = "";
    setTimeout(() => {
        forearm.style.animation = "2s linear wave";
    }, 100)
    return
}

function modalOpen () {
    modalContainer.classList.add("modal-show");
    overlay.classList.add("back-show");
    
    if(playerScore > computerScore) {
        matchWinner.textContent = "WINNER!!"
    } else {
        matchWinner.textContent = "LOSER..."
    }
}

function modalClose () {
    modalContainer.classList.remove("modal-show");
    overlay.classList.remove("back-show");
}

function restartGame () {
    playerScore = 0;
    computerScore = 0;
    playerScoreG.textContent = `${playerScore} `;
    computerScoreG.textContent = `${computerScore}`;
    roundResult.textContent = "";
    stickHand.classList = "";
    matchWinner.textContent = "";
    modalContainer.classList.remove("modal-show");
    overlay.classList.remove("back-show");
}