let userInput = document.querySelectorAll(".btn");
let userOutput = document.getElementById("userOutput")
let computerOutput = document.getElementById("computerOutput")
let resultOutput = document.getElementById("results")

let player;
let computer;
let result;

const choices = [ "Rock", "Paper", "Scissors" ]

userInput.forEach(button => button.addEventListener('click', ()=>{
    player = button.textContent;
    computerTurn();
    userOutput.textContent = `You Choose: ${player}`;
    computerOutput.textContent = `Computer Choose: ${computer}`;
    resultOutput.textContent = checkWinner();
    document.getElementById("popup").classList.add("openPopup");
}));

document.getElementById("close").addEventListener('click', (e)=>{
    document.getElementById("popup").classList.remove("openPopup");
})
function computerTurn() {
    computer = choices[Math.floor(Math.random() * choices.length)];
    return computer;
};

function checkWinner() {
    if (computer == player) {
        return "Draw!"
    } else if (computer == "Rock") {
        return (player == "Paper") ? "You Win!" : "You Loose!";
    } else if (computer == "Paper") {
        return (player == "Scissors") ? "You Win!" : "You Loose!";
    } else if (computer == "Scissors") {
        return (player == "Rock") ? "You Win!" : "You Loose!";
    }
};