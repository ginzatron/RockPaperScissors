let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user-score");
let compScore_spac = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_span = document.getElementById("r");
let paper_span = document.getElementById("p");
let scissors_span = document.getElementById("s");

function getComputerChoice() {
	let choices = ['r','p','s'];
	let randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter){
	if (letter === "r") return 'rock';
	if (letter === "p") return 'paper';
	return 'scissors';
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallComputerWord = "comp".fontsize(3).sup();
	result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallComputerWord}  You Win!`;
}

function lose(){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallComputerWord = "comp".fontsize(3).sup();
	result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to  ${convertToWord(computerChoice)}${smallComputerWord}  You Lose!`;

}

function draw(){
	console.log("DRAW!");
}

function game(userChoice) {
	let computerChoice = getComputerChoice();
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
	game("r");
	});

paper_div.addEventListener('click', function() {
	game("p");
	});

scissors_div.addEventListener('click', function() {
	game("s");
	});
}

main();









