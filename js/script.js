let rockEl = document.getElementById("rock");
let paperEl = document.getElementById("paper");
let scissorsEl = document.getElementById("scissors");
let humanImg = document.querySelector(".human-image");
let computerImg = document.querySelector(".computer-image");
let buttons = document.querySelectorAll(".button");
let newGameBtn = document.querySelector("#newBtn");
let scoreEl = document.querySelectorAll(".score");

// Function for human selection
function humanSelection(button) {
  // alert("Button clicked");
  if (button === rockEl) {
    //   alert("Rock element clicked");
    selectedIcon = '<i class="fas fa-hand-rock fa-3x"></i>'; // Rock icon
  } else if (button === paperEl) {
    //   alert("Paper element clicked");
    selectedIcon = '<i class="fas fa-hand-paper fa-3x"></i>';
  } else {
    //   alert("Scissors element clicked");
    selectedIcon = '<i class="fas fa-hand-scissors fa-3x"></i>'; // Scissors icon
  }
  humanImg.innerHTML = `${selectedIcon}`;
}

// Function for the computer to pick at random between rock, paper and scissors
function computerSelection() {
  const icons = [
    '<i class="fas fa-hand-rock fa-3x"></i>', // Rock
    '<i class="fas fa-hand-paper fa-3x"></i>', // Paper
    '<i class="fas fa-hand-scissors fa-3x"></i>', // Scissors
  ];
  return (computerImg.innerHTML =
    icons[Math.floor(Math.random() * icons.length)]);
}

// Function to check who wins
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    humanSelection(button);
    computerSelection();
  });
});

newGameBtn.addEventListener("click", () => {
  humanImg.innerHTML = "";
  computerImg.innerHTML = "";
});
