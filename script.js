	/*----- constants -----*/

  const cardsArr = [
    {
      name: 'facebook',
      icon: '<i class="fa-brands fa-facebook"></i>'
    },
    {
      name: 'Google',
      icon: '<i class="fa-brands fa-google"></i>'
    },
    {
      name: 'codepen',
      icon: '<i class="fa-brands fa-codepen"></i>'
    },
    {
      name: 'slack',
      icon: '<i class="fa-brands fa-slack"></i>'
    },
    {
      name: 'indeed',
      icon: '<i class="fa-brands fa-linkedin"></i>'
    },
    {
      name: 'github',
      icon: '<i class="fa-brands fa-github"></i>'
    },
    {
      name: 'facebook',
      icon: '<i class="fa-brands fa-facebook"></i>'
    },
    {
      name: 'Google',
      icon: '<i class="fa-brands fa-google"></i>'
    },
    {
      name: 'codepen',
      icon: '<i class="fa-brands fa-codepen"></i>'
    },
    {
      name: 'slack',
      icon: '<i class="fa-brands fa-slack"></i>'
    },
    {
      name: 'indeed',
      icon: '<i class="fa-brands fa-linkedin"></i>'
    },
    {
      name: 'github',
      icon: '<i class="fa-brands fa-github"></i>'
    }
  ]
  
	/*----- state variables -----*/
    let boardFlippedCards; //
    let matchedPairs;
	/*----- cached elements  -----*/
    let newDiv;
    const gameBoard = document.querySelectorAll('#gameBoard > div');
    // const newDiv = document.querySelectorAll('div');
  /*----- event listeners -----*/
  gameBoard.addEventListener('click', flippedCard);

  /*----- functions -----*/

  init();

  function init() {
    boardFlippedCards = [];
    matchedPairs = 0;
    render();
  }
  
  function render() {

  }


  function renderCards() {
     cardsArr.forEach((cardArr, idx) => {
      //give icons for each div
    });
  }

  function renderFlippedCard(evt) {
    //Player take turns to turn over two cards
    if(boardFlippedCards.length <2 && evt.target.classList.contains('active')) {
      let cardId = evt.target.getAttribute('id');
      boardFlippedCards.push(evt.target);
      evt.target.classList.remove('facedown');
      evt.target.innerHTML = cardsArr[cardId].icon;
    }
    if (boardFlippedCards.length == 2) {
      setTimeout(renderMatch, 1500);
    }
}

function renderMatch() {
  const card1Id = boardFlippedCards[0].getAttribute('id');
  const card2Id = boardFlippedCards[1].getAttribute('id');

  //If two cards have same picture, they they will keep cards and card disappear, else turn the card facedown

  if(cardsArr[card1Id].name === cardsArr[card2Id].name) {

    boardFlippedCards[0].style.border = 'none';
    boardFlippedCards[0].style.backgroundColor = '8fbc8f';
    boardFlippedCards[0].innerHTML = '';
    boardFlippedCards[0].classList.remove('matched');

    boardFlippedCards[1].style.border = 'none';
    boardFlippedCards[1].style.backgroundColor = '8fbc8f';
    boardFlippedCards[1].innerHTML = '';
    boardFlippedCards[1].classList.remove('matched');
    matchedPairs ++;

  }else {
    boardFlippedCards[0].innerHTML = '';
    boardFlippedCards[0].classList.add('facedown');

    boardFlippedCards[1].innerHTML = '';
    boardFlippedCards[1].classList.add('facedown');
  }

  boardFlippedCards = [];
}

function gameOver() {
  if (matchedPairs === cardsArr.length/2) {
    h1.innerHTML = "You Won";
  }
}
function renderMessage() {

}


//Display 12 cards facedown when the page is initially displayed

//Player take turns to turn over two cards

//If two cards have same picture, they they will keep cards and card disappear, else turn the card facedown

//Need to display "wrong" guess until a timer expires or until the next click.

//Must Lose after X number of bad guesses

//If collect all then Wins!

//cardsArray[cardId].icon;