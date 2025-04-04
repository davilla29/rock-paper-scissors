const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");
const humanImg = document.querySelector(".human-image");
const computerImg = document.querySelector(".computer-image");
const buttons = document.querySelectorAll(".icon-button");
const newGameBtn = document.getElementById("newBtn");
const scoreEl1 = document.querySelector(".human-score");
const scoreEl2 = document.querySelector(".computer-score");
const humanBg = document.getElementById("human");
const computerBg = document.getElementById("computer");
const roundCounter = document.getElementById("round");
const darkBtn = document.getElementById("dark");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelector(".shortcutBtn");
const btnCloseModal = document.querySelector(".close-modal");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Setting default values
scoreEl1.textContent = 0;
scoreEl2.textContent = 0;
roundCounter.textContent = 0;

// Function for human selection
function humanSelection(button) {
  // alert("Button clicked");
  if (button === rockEl) {
    //   alert("Rock element clicked");
    selectedIcon = '<i class="fas fa-hand-rock"></i>'; // Rock icon
  } else if (button === paperEl) {
    selectedIcon = '<i class="fas fa-hand-paper"></i>';
  } else {
    selectedIcon = '<i class="fas fa-hand-scissors"></i>'; // Scissors icon
  }
  humanImg.innerHTML = `${selectedIcon}`;
}

// Function for the computer to pick at random between rock, paper and scissors
function computerSelection() {
  // Storing the name and HTML markup of each icon in an array of object
  const options = [
    {
      name: "Rock",
      icon: '<i class="fas fa-hand-rock"></i>',
    },

    {
      name: "Paper",
      icon: '<i class="fas fa-hand-paper"></i>',
    },

    {
      name: "Scissors",
      icon: '<i class="fas fa-hand-scissors"></i>',
    },
  ];

  const randomNumber = Math.floor(Math.random() * options.length);
  const randomIcon = (computerImg.innerHTML = options[randomNumber].icon);
  return randomIcon;
}

// Function to get the winner of each round
function getWinner() {
  if (humanImg.innerHTML === computerImg.innerHTML) {
    // alert("Draw");
    // computerBg.classList.add("win");
    computerBg.style.backgroundColor = "#009688";
    humanBg.style.backgroundColor = "#009688";
  } else if (
    (humanImg.innerHTML === '<i class="fas fa-hand-rock"></i>' &&
      computerImg.innerHTML === '<i class="fas fa-hand-scissors"></i>') ||
    (humanImg.innerHTML === '<i class="fas fa-hand-scissors"></i>' &&
      computerImg.innerHTML === '<i class="fas fa-hand-paper"></i>') ||
    (humanImg.innerHTML === '<i class="fas fa-hand-paper"></i>' &&
      computerImg.innerHTML === '<i class="fas fa-hand-rock"></i>')
  ) {
    // alert("Human wins");
    // Declaring a variable and storing the converted text to number
    let score1 = parseInt(scoreEl1.textContent);
    scoreEl1.textContent = ++score1; // Increment and update the text
    humanBg.style.backgroundColor = "#4caf50";
    computerBg.style.backgroundColor = "";
  } else {
    // alert("Computer wins");
    let score2 = parseInt(scoreEl2.textContent); // Convert text to number
    scoreEl2.textContent = ++score2; // Increment and update the text
    computerBg.style.backgroundColor = "#4caf50";
    humanBg.style.backgroundColor = "";
  }

  let counter = parseInt(roundCounter.textContent);
  roundCounter.textContent = ++counter;
}

// Function to reset the game
function resetGame() {
  humanImg.innerHTML = "";
  computerImg.innerHTML = "";
  humanBg.style.backgroundColor = "";
  computerBg.style.backgroundColor = "";
  scoreEl1.textContent = 0;
  scoreEl2.textContent = 0;
  roundCounter.textContent = 0;
}

// Function to listen for keydown events on specific keys
function keyEvents(event) {
  if (event.key.toLowerCase() === "r") {
    humanSelection(rockEl);
    computerSelection();
    getWinner();
  } else if (event.key.toLowerCase() === "p") {
    humanSelection(paperEl);
    computerSelection();
    getWinner();
  } else if (event.key.toLowerCase() === "s") {
    humanSelection(scissorsEl);
    computerSelection();
    getWinner();
  } else if (event.key.toLowerCase() === "n") {
    resetGame();
  }
}

// Keyboard keys events
document.addEventListener("keydown", function (event) {
  keyEvents(event);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    humanSelection(button);
    computerSelection();
    getWinner();
  });
});

// Resetting the score counter, round counter, the images, and the background color to default
newGameBtn.addEventListener("click", () => {
  resetGame();
});

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// To open keyboard shortcuts modal
btnShowModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// To close keyboard shortcuts modal
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
