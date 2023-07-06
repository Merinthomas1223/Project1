	/*----- constants -----*/
  //Array of icons 
  const cardsArr = [
    {
      title: 'facebook',
      icon: '<i class="fa-brands fa-facebook fa-6x"></i>'
    },
    {
      title: 'Google',
      icon: '<i class="fa-brands fa-google fa-6x"></i>'
    },
    {
      title: 'codepen',
      icon: '<i class="fa-brands fa-codepen fa-6x"></i>'
    },
    {
      title: 'slack',
      icon: '<i class="fa-brands fa-slack fa-6x"></i>'
    },
    {
      title: 'indeed',
      icon: '<i class="fa-brands fa-linkedin fa-6x"></i>'
    },
    {
      title: 'github',
      icon: '<i class="fa-brands fa-github fa-6x"></i>'
    },
    {
      title: 'facebook',
      icon: '<i class="fa-brands fa-facebook fa-6x"></i>'
    },
    {
      title: 'Google',
      icon: '<i class="fa-brands fa-google fa-6x"></i>'
    },
    {
      title: 'codepen',
      icon: '<i class="fa-brands fa-codepen fa-6x"></i>'
    },
    {
      title: 'slack',
      icon: '<i class="fa-brands fa-slack fa-6x"></i>'
    },
    {
      title: 'indeed',
      icon: '<i class="fa-brands fa-linkedin fa-6x"></i>'
    },
    {
      title: 'github',
      icon: '<i class="fa-brands fa-github fa-6x"></i>'
    }
  ];
  

	/*----- state variables -----*/

    let boardFlippedCards; 
    let matchedPairs;
    let wrongGuess;

	/*----- cached elements  -----*/

  let result = document.querySelector('h1');
   const gameBoard =document.getElementById('gameBoard');

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
  }


  function renderCards() {

    //iterate through array of object icons
    cardsArr.forEach((cardArr, idx) => {
      //creating new divs and append to the parent div
     const newDiv = document.createElement('div');
     newDiv.setAttribute('id', idx);
     newDiv.classList.add('facedown');
     newDiv.classList.add('matched');
     gameBoard.appendChild(newDiv);
     /*----- event listeners -----*/

    newDiv.addEventListener('click', renderFlippedCard);
   });
 }

 //Rendering the image inside each card

  function renderFlippedCard(evt) {
 //Player take turns to turn over two cards
    if(boardFlippedCards.length <=1 && evt.target.classList.contains('facedown')) {
          //grabbing clicked cards and pushing to the array for checking equality
          let cardId = evt.target.getAttribute('id');
          boardFlippedCards.push(evt.target);
          console.log(boardFlippedCards);
          evt.target.classList.remove('facedown');
          evt.target.innerHTML = cardsArr[cardId].icon;
    }

    //Render the card for few seconds when turns
    if (boardFlippedCards.length === 2) {
          setTimeout(function() {
            renderMatch();
          },800)
    }
}
//checking the match
function renderMatch() {

      const cardId1 = boardFlippedCards[0].getAttribute('id');
      const cardId2 = boardFlippedCards[1].getAttribute('id');

  //If two cards have same picture, they they will keep cards and card disappear

      if(cardsArr[cardId1].title === cardsArr[cardId2].title) {

            boardFlippedCards[0].style.backgroundColor = '#8fbc8f';
            boardFlippedCards[0].innerHTML = '';
            boardFlippedCards[0].classList.remove('matched');

            boardFlippedCards[1].style.backgroundColor = '#8fbc8f';
            boardFlippedCards[1].innerHTML = '';
            boardFlippedCards[1].classList.remove('matched');
            matchedPairs ++;
            gameOver();
            
//If two cards have different images, turn the card facedown
      }else {
            boardFlippedCards[0].innerHTML = '';
            boardFlippedCards[0].classList.add('facedown');

            boardFlippedCards[1].innerHTML = '';
            boardFlippedCards[1].classList.add('facedown');
            wrongGuess ++;
            gameOver();

           }
           boardFlippedCards = [];

}

function gameOver() {

  if (matchedPairs === (cardsArr.length/2)) {
    result.innerHTML = "You Won!!";
  }else if(wrongGuess === 6) {
    result.innerHTML = "Game Over" 
  }
}

