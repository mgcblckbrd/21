let dealerSum = 0;
let yourSum = 0;
let dealetAceCount = 0;
let yourAceCount = 0;
let hiddenCardDealer;
let deck;
//Условие позволяющее добирать карту
let canHit = true;

window.onload = () => {
  bulidDeck();
  shuffleDesk();
  startGame();
};

function bulidDeck() {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let types = ["C", "D", "H", "S"];
  deck = [];
  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + "-" + types[i]);
    }
  }
}

function shuffleDesk() {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = decl[j];
    deck[j] = temp;
  }
}

function createCard(cardSrc) {
  let cardImg = document.createElement("img");
  cardImg.src = cardSrc;
  cardImg.classList.add('card-img')
  return cardImg
}


function startGame() {
    
}