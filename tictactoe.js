//start with player x
let player = "x";

//switch turns
let switchTurn = () => {
  if(player == "x") {
    player = "o";
  } else {
    player = "x"
  }
}

//this function is called when a square is clicked
let nextMove = (square) => {
  square.append(player);
  switchTurn();
}
