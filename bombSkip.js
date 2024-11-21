function rollADice() {
  const number = Math.ceil((Math.random() * 10) % 6);
  console.log("Dice number is " + number);

  return number;
}

function moveToken(lastPosition, b1, b2, b3, b4, b5, b6) {
  if (prompt("roll the dice??🎲\nNO ❌ to quit\n","✅") === "✅") {
    return checkPosition(lastPosition + rollADice(),b1, b2, b3, b4, b5, b6);
  }

  return "BYE see you next time";
}

function positionOfBomb(range) {
  return range + Math.ceil(Math.random() * 10 % 9);
}

function ifBomb(currentPosition) {
  let bombMessage = "you are at " + currentPosition + "\n";
  bombMessage = bombMessage + "OH NOOOOO!!!!! it's a BOMB 💣\n";
  bombMessage = bombMessage + "Now you are at 1️⃣\n";

  return bombMessage + ("__________________________________________\n");
}

function checkPosition(currentPosition, b1, b2, b3, b4, b5, b6) {
  if (currentPosition === b1 || currentPosition === b2 || currentPosition === b3 || currentPosition === b4 || currentPosition === b5 || currentPosition === b6) {
    console.log(ifBomb(currentPosition));

    return moveToken(1, b1, b2, b3, b4, b5, b6);
  }

  if (currentPosition >= 80) {
    console.log("YOU ARE ABOUT TO WIN 😳");
  }
  
  if (currentPosition >= 100) {
    return "OH NOOOOOO!!!! YOU WON 🏆 😳";
  }
  
  console.log("you are at " + currentPosition + '\n');
  console.log("I know that you Cannot win 😂");
  console.log("__________________________________________\n");
  console.log("bomb is at " + b1 + " " + b2 + " " + b3 + " " + b4 + " " + b5 + " " + b6);
  
  return moveToken(currentPosition, b1, b2, b3, b4, b5, b6);
}

console.log(checkPosition(0, positionOfBomb(35), positionOfBomb(40), positionOfBomb(50), positionOfBomb(80), positionOfBomb(85), positionOfBomb(90)));
