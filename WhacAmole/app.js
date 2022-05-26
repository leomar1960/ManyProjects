const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");

let hitPointID;
let timerId = null;
let results = 0;
let currentTime = 60;
function randomSquare() {
	squares.forEach((square) => {
		square.classList.remove("mole");
	});
	let randomSquare = squares[Math.floor(Math.random() * 9)];

	randomSquare.classList.add("mole");
	hitPointID = randomSquare.id;
}

squares.forEach((square) => {
	square.addEventListener("mousedown", () => {
		if (square.id === hitPointID) {
			results++;
			score.textContent = results;
			hitPointID = null;
		}
	});
});

function moveMole() {
	timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown() {
	currentTime--;
	timeLeft.textContent = currentTime;

	if (currentTime === 0) {
		clearInterval(timerId);
		clearInterval(coutDownTimer);
		alert("Game over !! Your Result is " + results);
	}
}

let coutDownTimer = setInterval(countDown, 1000);
