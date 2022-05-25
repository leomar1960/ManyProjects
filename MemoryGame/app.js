document.addEventListener("DOMContentLoaded", () => {
	//card options
	const cardsArray = [
		{
			name: "fries",
			img: "images/fries.png",
		},
		{
			name: "fries",
			img: "images/fries.png",
		},
		{
			name: "cheeseburger",
			img: "./images/cheeseburger.png",
		},
		{
			name: "cheeseburger",
			img: "./images/cheeseburger.png",
		},
		{
			name: "hotdog",
			img: "./images/hotdog.png",
		},
		{
			name: "hotdog",
			img: "./images/hotdog.png",
		},
		{
			name: "milkshake",
			img: "./images/milkshake.png",
		},
		{
			name: "milkshake",
			img: "./images/milkshake.png",
		},
		{
			name: "pizza",
			img: "./images/pizza.png",
		},
		{
			name: "pizza",
			img: "./images/pizza.png",
		},
		{
			name: "ice-cream",
			img: "./images/ice-cream.png",
		},
		{
			name: "ice-cream",
			img: "./images/ice-cream.png",
		},
	];
	cardsArray.sort(() => 0.5 * Math.random());

	const grid = document.querySelector(".grid");
	const resultDisplay = document.querySelector("#result");
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];

	// create you board

	function createYourBoard() {
		for (let i = 0; i < cardsArray.length; i++) {
			const card = document.createElement("img");
			card.setAttribute("src", "images/blank.png");
			card.setAttribute("data-id", i);
			card.addEventListener("click", flipCard);
			grid.appendChild(card);
		}
	}

	// check for matches
	function checkForMatch() {
		const cards = document.querySelectorAll("img");
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];

		if (optionOneId == optionTwoId) {
			cards[optionOneId].setAttribute("src", "images/blank.png");
			cards[optionTwoId].setAttribute("src", "images/blank.png");
			alert("You have clicked the same image!");
		} else if (cardsChosen[0] === cardsChosen[1]) {
			alert("You found a match");
			cards[optionOneId].setAttribute("src", "images/white.png");
			cards[optionTwoId].setAttribute("src", "images/white.png");
			cards[optionOneId].removeEventListener("click", flipCard);
			cards[optionTwoId].removeEventListener("click", flipCard);
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute("src", "images/blank.png");
			cards[optionTwoId].setAttribute("src", "images/blank.png");
			alert("Sorry, try again");
		}

		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardsArray.length / 2) {
			resultDisplay.textContent = "Congratulation You found them all!!";
		}
	}

	//flip you card
	function flipCard(e) {
		let cardId = this.getAttribute("data-id");
		cardsChosen.push(cardsArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute("src", cardsArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createYourBoard();
	let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
});
