let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const buttonContainer = document.querySelector(".buttons");

for (let i = 0; i < alphabet.length; i++) {
  const button = document.createElement("button");
  button.textContent = alphabet[i];
  button.classList.add("btn");
  buttonContainer.appendChild(button);
}

let word = "";

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

const checkLetter = (e) => {
  const letter = e.target.textContent;
  const letters = document.querySelectorAll(".letter");

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      letters[i].textContent = letter;
    }
  }
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", checkLetter);
});

const resetGame = (e) => {
  location.reload(); 
}


let resetButton = document.getElementById("reset");
resetButton.addEventListener("click",resetGame);

