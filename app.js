let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
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
	const smallUserWord = "user".fontsize(3).sup();
	const smallComputerWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallComputerWord}  You Win!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},500);
}

function lose(userChoice, computerChoice){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallComputerWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to  ${convertToWord(computerChoice)}${smallComputerWord}  You Lose!`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},500);
}

function draw(userChoice, computerChoice){
	const smallUserWord = "user".fontsize(3).sup();
	const smallComputerWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals  ${convertToWord(computerChoice)}${smallComputerWord}  It's a Draw!`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},500);
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
	rock_span.addEventListener('click', function() {
	game("r");
	});

paper_span.addEventListener('click', function() {
	game("p");
	});

scissors_span.addEventListener('click', function() {
	game("s");
	});
}

main();










