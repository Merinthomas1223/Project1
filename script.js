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
  ];
  

	/*----- state variables -----*/

    let boardFlippedCards; 
    let matchedPairs;
    let wrongGuess;

	/*----- cached elements  -----*/

  /*----- functions -----*/

  init();

  function init() {
    boardFlippedCards = [];
    matchedPairs = 0;
    wrongGuess = 0;
    render();
  }
  
  function render() {
    renderCards();
    renderMatch();
  }


  function renderCards() {
    //iterate through array of object icons
    cardsArr.forEach((cardArr, idx, arr) => {
      //creating new divs and append to the parent div
     const newDiv = document.createElement('div');
     newDiv.setAttribute('id', idx);
     newDiv.classList.add('facedown');
     newDiv.classList.add('matched');
     gameBoard.appendChild(newDiv);
    //    /*----- event listeners -----*/

    newDiv.addEventListener('click', renderFlippedCard);
   });
 }

  function renderFlippedCard(evt) {
//     //Player take turns to turn over two cards
    if(boardFlippedCards.length <2 && evt.target.classList.contains('facedown')) {
      let cardId = evt.target.getAttribute("id");
      boardFlippedCards.push(evt.target);
      evt.target.classList.remove('matched');
      evt.target.innerHTML = cardsArr[cardId].icon;
    }
    if (boardFlippedCards.length == 2) {
      setTimeout(renderMatch, 1500);
    }
}
//checking the match
function renderMatch() {
  const cardId1 = boardFlippedCards[0].getAttribute("id");
  const cardId2 = boardFlippedCards[1].getAttribute("id");

  //If two cards have same picture, they they will keep cards and card disappear, else turn the card facedown

  if(cardsArr[cardId1].name === cardsArr[cardId2].name) {

    boardFlippedCards[0].style.border = 'none';
    boardFlippedCards[0].style.backgroundColor = '#8fbc8f';
    boardFlippedCards[0].innerHTML = '';
    boardFlippedCards[0].classList.remove('matched');

    boardFlippedCards[1].style.border = 'none';
    boardFlippedCards[1].style.backgroundColor = '#8fbc8f';
    boardFlippedCards[1].innerHTML = '';
    boardFlippedCards[1].classList.remove('matched');
    matchedPairs ++;
    gameOver();
  }else {
    boardFlippedCards[0].innerHTML = '';
    boardFlippedCards[0].classList.add('facedown');

    boardFlippedCards[1].innerHTML = '';
    boardFlippedCards[1].classList.add('facedown');
    wrongGuess ++;
  }

  boardFlippedCards = [];
}

function gameOver() {
  if (matchedPairs === cardsArr.length/2) {
    h1.innerHTML = "You Won";
  }else if(wrongGuess === 12) {
    h1.innerHTML = "Game Over"
  }
}

