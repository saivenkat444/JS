function takeName(number) {
  return prompt("Enter Player " + number + " Name: ");
}

function occurences(pickedCards, target) {
  let count = 0;
  for (let index = 0; index < pickedCards.length; index++){
    if (pickedCards[index] === target) {
      count = count + 1;
    }
  }

  return "" + count;
}

function countTheCards(pickedCards) {
  const taco = occurences(pickedCards, "1");
  const god = occurences(pickedCards, "2");
  const diffuse = occurences(pickedCards, "3");
  const caterMelon = occurences(pickedCards, "4");
  const hairyPotato = occurences(pickedCards, "5");
  const rainbow = occurences(pickedCards, "6");

  return taco + god + diffuse + caterMelon + hairyPotato + rainbow;
}

function displayCards(pickedCards, player) {
  if (pickedCards === "GAME OVER") {
    return player + " HAS NO DIFFUSE TO SAVE KITTENS";
  }
  const nCards = countTheCards(pickedCards);

  console.log("_________________________________________________________________________________________________________");
  let message = player + " HAVE DIFFUSE: " + nCards[2];
  message = message + "  TACOCAT 🌮:" + nCards[0];
  message = message + "  GODCAT 🐱:" + nCards[1];
  message = message + "  CATERMELON 🍉:" + nCards[3];
  message = message + "  HAIRY POTATOCAT 🥔:" + nCards[4];
  message = message + "  RAINBOWCAT 🌈:" + nCards[5];

  return message;
}

function pickCard(player) {
  if (prompt(player + " pick the next card raa....", "✅") === "✅") {
    return Math.ceil((Math.random() * 10) % 6);
  }

  if (confirm("Do you want to quit?")) {
    return pickCard();
  }

  console.log("BYE BYE");
}

function isBombExploded(card) {
  return card === 3 
}

function displayPickedCard(card, player) {
  if (card === 3) {
    return "\nOH NOOO....." + player + " you picked a BOMB CARD 💣💣💣💥💥💥\n";
  }

  switch (card) {
    case 1 :
      return "\n" + player + " you picked TACOCAT 🌮🌮\n";
    case 2 :
      return "\n" + player + " you picked GODCAT 🐱🐱\n";
    case 4 :
      return "\n" + player + " you picked CATERMELON 🍉🍉\n";
    case 5 :
      return "\n" + player + " you picked HAIRY POTATOCAT 🥔🥔\n";
    case 6 :
      return "\n" + player + " you picked RAINBOWCAT 🌈🌈\n";
  }
}

function sliceIfInRange(text , currentIndex, endIndex) {
  if (currentIndex > endIndex) {
    return ""; 
  }

  return text[currentIndex] + slice(text, currentIndex + 1, endIndex);
}

function slice(text, start, end) {
  const startIndex = start < 0 ? 0 : start;
  const endIndex = text.length <= end ? text.length - 1 : end;

  return sliceIfInRange(text, startIndex, endIndex);
}

function updateCards(isBomb, cards, lastPickedCard) {
  if (isBomb) {
    if (cards[0] === "3") {
    return "0" + slice(cards, 1, cards.length);
    }
    return "GAME OVER";
  }
  return cards + lastPickedCard;
}

function PlayerTurn(playerCards, player) {
  let cards = playerCards;
  
  const PCard = pickCard(player);
  console.log(displayPickedCard(PCard, player));
  const isBomb = isBombExploded(PCard);
  const currentCards = updateCards(isBomb, cards, PCard);
  console.log(displayCards(currentCards, player));
  return currentCards;
}

function startPicking(player1Cards, player2Cards, player1, player2) {
  let currentCardsOf1 = PlayerTurn(player1Cards, player1);
  if (currentCardsOf1 === "GAME OVER") {
    return player2 + "WON THE MATCH\n congratulationsssss🥳🥳🥳🥳🥳🥳🥳";
  }
  let currentCardsOf2 = PlayerTurn(player2Cards, player2);
  if (currentCardsOf2 === "GAME OVER") {
    return player1 + " WON THE MATCH\n congratulationsssss🥳🥳🥳🥳🥳🥳🥳";
  }
  
  return startPicking(currentCardsOf1, currentCardsOf2, player1, player2);
}

const player1 = takeName(1);
const player2 = takeName(2);
const p1Cards = "3";
const p2Cards = "3";

console.log(displayCards(p1Cards, player1));
console.log(displayCards(p2Cards, player2));
console.log(startPicking("3", "3", player1, player2));
