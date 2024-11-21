function action(cardPicked) {
  if (cardPicked === 0) {
    if (confirm("Use the diffuse if there are any?")) {
      return 0;
    }
    return -1;
  }

  return 1;
}

function drawCard() {
  const card = Math.ceil((Math.random() * 10) % 6);
  if (card === 3) {
    console.log("\nOH NOOO..... you picked a BOMB CARD 💣💣💣💥💥💥\n");
    return action(0);
  }
  console.log("\nLUCKY FELLOW you picked a SAFE CARD 😏😏😏😏\n");
  console.log("\nLUCKY FELLOW you picked a SAFE CARD 😏😏😏😏\n");
  console.log("\nLUCKY FELLOW you picked a SAFE CARD 😏😏😏😏\n");
  console.log("\nLUCKY FELLOW you picked a SAFE CARD 😏😏😏😏\n");
  console.log("\nLUCKY FELLOW you picked a SAFE CARD 😏😏😏😏\n");

  return action(1);
}

function isBombExploded(card,player1, ndif) {
  if (card <= 0) {
    if (ndif - 1 < 0 || card < 0) {
      return "GAME OVER\nplayer unable to diffuse so kitten died";
    }
    return explodingKittens(player1, ndif - 1);
  }
  return explodingKittens(player1, ndif);
}

function explodingKittens(player1, ndif) {
  console.log(player1 + " has " + ndif + " diffuse cards");

  if (prompt("pick next card", "✅") === "✅") {
    let card = drawCard();
    return isBombExploded(card, player1, ndif);    
  }

}

console.log(explodingKittens(prompt("enter player 1 name:"), 1));
