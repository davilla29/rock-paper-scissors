let rockEl = document.getElementById("rock");
let paperEl = document.getElementById("paper");
let scissorsEl = document.getElementById("scissors");
let humanImg = document.querySelector(".human-image");
let computerImg = document.querySelector(".computer-image");
let buttons = document.querySelectorAll(".button");
let newGameBtn = document.getElementById("newBtn");
let scoreEl1 = document.querySelector(".human-score");
let scoreEl2 = document.querySelector(".computer-score");

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
  // Storing the name and HTML markup of each icon in an array of object
  const options = [
    // '<i class="fas fa-hand-rock fa-3x"></i>', // Rock
    // '<i class="fas fa-hand-paper fa-3x"></i>', // Paper
    // '<i class="fas fa-hand-scissors fa-3x"></i>', // Scissors
    {
      name: "Rock",
      icon: `<i class="fas fa-hand-rock fa-3x"></i>`,
    },

    {
      name: "Paper",
      icon: `<i class="fas fa-hand-paper fa-3x"></i>`,
    },

    {
      name: "Scissors",
      icon: `<i class="fas fa-hand-scissors fa-3x"></i>`,
    },
  ];

  const randomNumber = Math.floor(Math.random() * options.length);
  const randomIcon = (computerImg.innerHTML = options[randomNumber].icon);
  return randomIcon;

  // return (computerImg.innerHTML =
  //   options[Math.floor(Math.random() * options.length)]);
}

// Function to check who wins
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    humanSelection(button);
    computerSelection();
  });
});

// Resetting the score and round counter to 0 and also the images
newGameBtn.addEventListener("click", () => {
  humanImg.innerHTML = "";
  computerImg.innerHTML = "";
  scoreEl1.textContent = 0;
  scoreEl2.textContent = 4;
});
