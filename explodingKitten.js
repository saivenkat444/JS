function action(cardPicked) {
  if (cardPicked === 0) {
    if (confirm("Use the diffuse if there are any?")) {
      return 0;
    }
    return -1;
  }

  return 1;
}

function showPickedCard(card) {
  if (card === 3) {
    console.log("\nOH NOOO..... you picked a BOMB CARD 💣💣💣💥💥💥\n");
    return action(0);
  }

  switch (card) {
    case 1 :
      console.log("\nLUCKY FELLOW you picked TACOCAT CARD 😏😏😏😏\n");
      break;
    case 2 :
      console.log("\nLUCKY FELLOW you picked GODCAT CARD 😏😏😏😏\n");
      break;
    case 4 :
      console.log("\nLUCKY FELLOW you picked CATERMELON CARD 😏😏😏\n");
      break;
    case 5 :
      console.log("\nLUCKY FELLOW you picked HARY POTATO CARD 😏😏😏\n");
      break;
    case 6 :
      console.log("\nLUCKY FELLOW you picked RAINBOWCAT CARD 😏😏😏\n");
      break;
  }

  return action(card);
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
    let card = Math.ceil((Math.random() * 10) % 6);
    card = showPickedCard(card);
    return isBombExploded(card, player1, ndif);    
  }

}

console.log(explodingKittens(prompt("enter player 1 name:"), 1));
