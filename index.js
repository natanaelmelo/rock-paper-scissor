let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const choiceUser = document.getElementById("us-choice");
const choiceComp = document.getElementById("comp-choice");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function convertToImg(letter) {
    if (letter === "r") return "./images/rock.png";
    if (letter === "p") return "./images/paper.png";
    return "./images/scissor.png";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!! 🔥`;
    choiceUser.src = convertToImg(userChoice);
    choiceComp.src = convertToImg(computerChoice);

}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. Computer win and you loser!! 😭`;
    choiceUser.src = convertToImg(userChoice);
    choiceComp.src = convertToImg(computerChoice);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(computerChoice)} equals ${convertToWord(userChoice)}. It's a draw!! ✋ Try again!! 😉`;
    choiceUser.src = convertToImg(userChoice);
    choiceComp.src = convertToImg(computerChoice);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r")
    })
    paper_div.addEventListener('click', function() {
        game("p")
    })
    scissor_div.addEventListener('click', function() {
        game("s")
    }) 
}

main(); 

var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}
















