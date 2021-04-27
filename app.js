document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  const grid = document.querySelector('.grid')
  var cardsChosen = [] //arr cards chosen
  var cardsChosenId = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      // card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }



  //check for matches
function checkForMatch(){
  var cards = documents.querSelectorAdd('img')
  const optionOneId = cardsChosenId[0]
  //this means wants the first value in the array
  const optionTwoId = cardsChosenId[1]
  if(cardChosen[0] == cardChosen[1]) {
    alert('You found a match')
     cards[optionOneId].setAttribute('src', 'images/white.png')
     cards[optionTwoId].setAttribute('src', 'images/white.png')
}




  //flip card
function flipCard(){
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name) //push the card base on their id
  cardChosenId.push(cardId)
  this.setAttribute('src', cardArray)
  //card picken - let us add img to grid base on image id it holds
  if(cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)


  }



}




  createBoard()
})
