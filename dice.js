function roll() {
  let player1 = Math.floor(Math.random() * 7);
  let player2 = Math.floor(Math.random() * 7);

  /* Edit the divs to show who rolled what */
  let p1 = document.getElementById("p1");
  let p2 = document.getElementById("p2");
  p1.innerHTML = "Player 1 rolled " + player1;
  p2.innerHTML = "Player 2 rolled " + player2;

  let result = document.getElementById("result");

  if (player1 > player2 && player2 ) {
    result.innerHTML = "Player 1 won!";
  } else if (player1 < player2) {
    result.innerHTML = "Player 2 won!";
  }
  else if (player1==0 || player2==0) {
    result.innerHTML = "You rolled a 0! You really suck";
  }
  else {
    result.innerHTML = "It's a tie!";
  }
}

