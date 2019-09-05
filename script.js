//Before starting the game

//Making card deck
var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];

//Creating arrays of players and sum of their card points
var player = [];
var playerSum = 0;

var dealer = [];
var dealerSum = 0;

// Shuffling the card deck
var j, x, i;
for (i = cards.length - 1; i > 0; i--) {
  j = Math.floor(Math.random() * (i + 1)); //Math.floor is to round-up the decimals.
  x = cards[i];
  cards[i] = cards[j];
  cards[j] = x;
}
console.log(cards);

// for player

document.getElementById("play").addEventListener("click", pickCardPlayer);

function pickCardPlayer() {
  player.push(cards[0]);
  var num = cards.shift();
  playerSum += num;
  document.getElementById("player_cards").innerHTML = "Your card is " + player;
  document.getElementById("player").innerHTML = "The sum of player's cards is " + playerSum;
  if (playerSum > 21) {
    document.getElementById("play").disabled = true;
    document.getElementById("show").disabled = true;
    document.getElementById("player").innerHTML = "You LOST. " + "Your score is " + playerSum;
  }
}

// for dealer

document.getElementById("show").addEventListener("click", pickCardDealer);

function pickCardDealer() {
  do {
    dealer.push(cards[0]);
    var num = cards.shift();
    dealerSum += num;

    // conditions to declare a winner
  } while (dealerSum < playerSum);
  document.getElementById("dealer_cards").innerHTML = "Your cards is " + dealer;
  document.getElementById("dealer").innerHTML = "The sum of dealer's cards is " + dealerSum;
  if (playerSum > dealerSum && playerSum <= 21) {
    document.getElementById("result").innerHTML = "Player wins";
    document.getElementById("play").disabled = true;
    document.getElementById("show").disabled = true;
  }
  if (dealerSum > playerSum && dealerSum <= 21) {
    document.getElementById("result").innerHTML = "Dealer wins";
    document.getElementById("play").disabled = true;
    document.getElementById("show").disabled = true;
  }
  if (playerSum == dealerSum) {
    document.getElementById("result").innerHTML = "Dealer wins";
    document.getElementById("play").disabled = true;
    document.getElementById("show").disabled = true;
  }
  if (playerSum > 21) {
    document.getElementById("result").innerHTML = "Dealer wins";
    document.getElementById("play").disabled = true;
    document.getElementById("show").disabled = true;
  }
  if (dealerSum > 21 && playerSum <= 21) {
    document.getElementById("result").innerHTML = "Player wins";
    document.getElementById("play").disabled = true;
    document.getElementById("show").disabled = true;
  }
}

function playAgainFunction() {
  location.reload();
}
