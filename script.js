//your code here

//inputs
const gameRounds = document.querySelector('[data-ns-test="game-number"]');

//game options
const gameOptions = document.querySelectorAll("[data-ns-test='user-choices']");
const roundsLeft = document.querySelector("[data-ns-test='rounds-left']");

let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[Math.floor(Math.random() * 3)];
let userChoice = null;
let totalRounds = 0;

function handlePlayBtn() {
	totalRounds = gameRounds.value;
	roundsLeft.textContent = `Rounds Left: ${totalRounds}`;
}


function handleGame(e) {
	const roundResult = document.querySelector("[data-ns-test='round-result']");
	const computerChoose = document.querySelector("[data-ns-test='computer-choose']");
	const userPoints = document.querySelector("[data-ns-test='user-points']");
	const computerPoints = document.querySelector("[data-ns-test='computer-points']");
	let compPts = 0;
	let userPts = 0;
	computerChoose.style.display = "block";
	roundResult.style.display = "block";
	computerChoose.textContent = `Computer Chooses: ${computerChoice}`;
	userChoice = e.target.id;
	totalRounds--;
	roundsLeft.textContent = `Rounds Left: ${totalRounds}`;

	if(userChoice === computerChoice){
		roundResult.textContent = "TIE";
		
	} else if(userChoice === "rock" && computerChoice === "paper"){
		roundResult.textContent = "LOSE";
		compPts++;
		computerPoints.textContent = `Computer Points: ${compPts}`;
	} else if(userChoice === "rock" && computerChoice === "scissors"){
		roundResult.textContent = "WIN";
		userPts++;
		userPoints.textContent = `User Points: ${userPts}`;
	} else if(userChoice === "paper" && computerChoice === "rock"){
		roundResult.textContent = "WIN";	
		userPts++;
		userPoints.textContent = `User Points: ${userPts}`
	} else if(userChoice === "paper" && computerChoice === "scissors"){
		roundResult.textContent = "LOSE";
		compPts++;
		computerPoints.textContent = `Computer Points: ${compPts}`;
	} else if(userChoice === "scissors" && computerChoice === "rock"){
		roundResult.textContent = "LOSE";
		compPts++;
		computerPoints.textContent = `Computer Points: ${compPts}`;
	} else if(userChoice === "scissors" && computerChoice === "paper"){
		roundResult.textContent = "WIN";
		userPts++;
		userPoints.textContent = `User Points: ${userPts}`
	};

	if(totalRounds === 0){
		const gameResult = document.querSelector("[data-ns-test='game-result']");
		if(userPts > compPts){
			gameResult.textContent = `You LOSE the game`
			return;
		} else{
			gameResult.textContent = `You WIN the game`;
			return;
		};
	};
};








