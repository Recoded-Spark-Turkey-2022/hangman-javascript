let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const buttonContainer = document.querySelector(".buttons");

for (let i = 0; i < alphabet.length; i++) {
  const button = document.createElement("button");
  button.textContent = alphabet[i];
  button.classList.add("btn");
  buttonContainer.appendChild(button);
}

let word = "";
let lives = 10;

fetch("https://random-word-api.herokuapp.com/word?number=1")
  .then((response) => response.json())
  .then((data) => {
    word = data[0];
    console.log(word);
    const wordContainer = document.querySelector(".word");
    for (let i = 0; i < word.length; i++) {
      const letter = document.createElement("span");
      letter.textContent = "_";
      letter.classList.add("letter");

      wordContainer.appendChild(letter);
    }
  });

const hintButton = document.getElementById("hint");
hintButton.addEventListener("click", () => {
  const wordContainer = document.querySelector(".word");
  const letters = wordContainer.querySelectorAll(".letter");
  for (let i = 0; i < letters.length; i++) {
    // user can only get two hints
    if (letters[i].textContent === "_") {
      letters[i].textContent = word[i];
      break;
    }
  }
});

const checkLetter = (e) => {
  const letter = e.target.textContent;
  const letters = document.querySelectorAll(".letter");

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      letters[i].textContent = letter;
    }
  }
};
let livesContainer = document.getElementById(".myLives");
let livesText = document.getElementById("lives");
livesText.textContent = `${lives}`;

const wrongLetter = (e) => {
  const letter = e.target.textContent;
  if (!word.includes(letter)) {
    lives--;
    console.log(lives);
    livesText.textContent = `${lives}`;
  }

  if (lives === 0) {
    alert("Game Over");
  }
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", checkLetter);
  button.addEventListener("click", wrongLetter);
});

const resetGame = (e) => {
  location.reload();
};

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);
