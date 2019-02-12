let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user-score");
let compScore_spac = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function getComputerChoice() {
	let choices = ['r','p','s'];
	let randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
}

function lose(){
	computerScore++;
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
			lose();
			break;
		case "rr":
		case "pp":
		case "ss":
			draw();
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










