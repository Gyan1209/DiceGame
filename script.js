document.querySelector("#diceButton").addEventListener("click", () => {
  for (let i = 0; i < 2; i++) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    if (i == 0) {
      var r1 = randomNumber;
    }
    if (i == 1) {
      var r2 = randomNumber;
    }
    let image = document.querySelectorAll("img");
    image[i].setAttribute("src", "images/dice" + randomNumber + ".png");
  }

  // console.log(r1+" "+r2);

  let winner = document.querySelector("h1");
  if (r1 > r2) {
    winner.addEventListener("reload", (winner.innerHTML = "🚩player 1 won!"));
  } else if (r1 < r2) {
    winner.addEventListener("reload", (winner.innerHTML = "player 2 won!🚩"));
  } else {
    winner.addEventListener("reload", (winner.innerHTML = "Draw!"));
  }
});
