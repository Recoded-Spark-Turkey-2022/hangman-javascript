fetch("https://random-word-api.herokuapp.com/word?number=1")
  .then((response) => response.json())
  .then((data) => {
    const word = data[0];
  });

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const buttons = document.querySelector(".buttons");

for (let i = 0; i < alphabet.length; i++) {
  const button = document.createElement("button");
  button.textContent = alphabet[i];
  button.classList.add("btn");
  buttons.appendChild(button);
}
