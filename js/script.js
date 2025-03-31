let rockEl = document.getElementById("rock");
let paperEl = document.getElementById("paper");
let scissorsEl = document.getElementById("scissors");
let humanImg = document.querySelector(".human-image");
let computerImg = document.querySelector(".computer-image");
let buttons = document.querySelectorAll(".button");
let newGameBtn = document.getElementById("newBtn");
let scoreEl1 = document.querySelector(".human-score");
let scoreEl2 = document.querySelector(".computer-score");
let humanBg = document.getElementById("human");
let computerBg = document.getElementById("computer");
let roundCounter = document.getElementById("round");

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
    computerBg.style.backgroundColor = "yellow";
    humanBg.style.backgroundColor = "yellow";
  } else if (
    (humanImg.innerHTML === '<i class="fas fa-hand-rock"></i>' &&
      computerImg.innerHTML === '<i class="fas fa-hand-scissors"></i>') ||
    (humanImg.innerHTML === '<i class="fas fa-hand-scissors"></i>' &&
      computerImg.innerHTML === '<i class="fas fa-hand-paper"></i>') ||
    (humanImg.innerHTML === '<i class="fas fa-hand-paper"></i>' &&
      computerImg.innerHTML === '<i class="fas fa-hand-rock"></i>')
  ) {
    // alert("Human wins");
    let score1 = parseInt(scoreEl1.textContent); // Convert text to number
    scoreEl1.textContent = ++score1; // Increment and update the text
    humanBg.style.backgroundColor = "green";
    computerBg.style.backgroundColor = "";
  } else {
    // alert("Computer wins");
    let score2 = parseInt(scoreEl2.textContent); // Convert text to number
    scoreEl2.textContent = ++score2; // Increment and update the text
    computerBg.style.backgroundColor = "green";
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

// Keyboard keys events
document.addEventListener("keydown", function (event) {
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
