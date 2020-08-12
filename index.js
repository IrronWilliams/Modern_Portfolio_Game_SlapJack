//Need to keep track of 3 different decks of cards. Have 3 separate arrays. 

let playerCards = []
let opponentCards = []
let discardCards = []

for (let i = 0; i < 4; i++) {
    let suit 
    // Hearts, Spades, Diamonds, and Clubs
    switch(i) {
        case 0:
            suit = `H` 
        break 
        case 1:
            suit = `S` 
        break 
        case 2:
            suit = `D` 
        break 
        default:
            suit = `C` 
    }
    
    // Create Each Card
    for (let x = 0; x < 13; x++) {
        switch(x) {
            case 0:
                discardCards.push(`A` + suit) 
            break 
            case 10:
                discardCards.push(`J` + suit) 
            break 
            case 11:
                discardCards.push(`Q` + suit) 
            break 
            case 12:
                discardCards.push(`K` + suit) 
            break 
            default:
                discardCards.push(x + suit) 
        }
    }
}

console.log('Inital Deck', discardCards) 

//Shuffle Array
function shuffleDeck(deck) {
    let currentCard = deck.length  //helps understand how big the deck is and if all the cards have been shuffled
    console.log(currentCard)
    let temporaryCard 
    let randomCard 

    /*currentCard is initially defined by the entire deck length. Continue to shuffle until currentCard =0. Durning each 
    shuffle, subtracting 1 from the currentCard value. After 52 shuffles, the currentCard will be 0 and at this point, all 
    cards have been shuffled.  */
    
    while (0 != currentCard) {
        //Pick a card 
        randomCard = Math.floor(Math.random() * currentCard) //randomly selecting a card based upon current size of deck. Can use to directly access card in array
        currentCard -=1 //decreasing deck by 1 randomCard
        console.log(randomCard)
    
     
        /*Shuffle cards: Taking a card of a random position somewhere in the deck and swapping it with the very last card.
        The original card is placed in temporaryCard. Then the original card is replaced by the randomCard. Then putting the
        randomCard back in the position of the temporaryCard  */
    
        temporaryCard = deck[currentCard] //temporary card is the last card in the deck
        deck[currentCard] = deck[randomCard] //replace randomCard where currentCard used to be
        deck[randomCard] = temporaryCard //putting something back where the randomCard was   
    }

    return deck
}

discardCards = shuffleDeck(discardCards)
//console.log('Shuffled Deck:', discardCards)

/*dealing cards to players: 
defining the iterator value and length. defining length saves time by calculate the length of array
1x vs checking the length of the array each time the loop iterates. when the loop iterates, the iterator will either
be an odd or even number. if number is even, then push the iterator to player. if iterator is odd, then push the iterator to
the opponent. using modulus to check even/odd*/
for (let i=0, l=discardCards.length; i<l; i++) {
    if(i%2 ===0){
        playerCards.push(discardCards[i])
    }else if(i%2 != 0) {
        opponentCards.push(discardCards[i])
    }
}

/*taking a card from either player deck or opponent deck and placing cards in the discard pile. take the top card in deck
and move to the discardCards. then remove the card from the players deck  */    

discardCards = []

function playCard(){
    discardCards.push(playerCards[0])  //pushes the top card, 1st element in array to the discardCards array
    playerCards.splice(0, 1)  //removes 1 element at index 0. splices out top card from players deck. avoids duplicating cards
    
    /*separating string value in discardCards into 2 separate variables in order to apply styles to the values. */ 
    const currentCard = discardCards[discardCards.length-1] //index of discardCards starts at 0. -1 prevents looking outside of range of array
    const currentValue = currentCard.substring(0,1) //returns the 1st element of the string in discardCards. 
    const suit = currentCard.substring(1,2) //returns the 2nd element of the string in discardCards
    console.log(currentCard, currentValue, suit) 

    /*displaying/updating the discardCards deck:
    the card has 3 elements (card#, artwork & flipped card#). both of the card#'s have the same class, so can easily 
    reference them in code. Need a loop to iterate thru the multiple card-number elements (right-side-up & flipped). 
    Change the inner text of the card-number elements to the card just played.
    
    Have 4 different options for a suit (H, D, S, C). Using switch/case statement to add the correct suit to card's  
    inner text. Based upon whether suit is H, D, S, C, using current value of card + a new line and suit symbol. 
    
    Additional curly bracket in switch/case statement is because of control scope. it allows me to define 
    variable within switch case. specifically limiting scope to whats between brackets. w/o the additional {}, 
    will result in error stating variable has already been declared. 
    */
    const cardNumbers = document.getElementsByClassName('card-number')
    for (let i=0; i<2; i++) {
         //cardNumbers[i].innerText = currentValue //puts card value on the card. can I use textContent instead of innerText?
         switch(suit) {
            case `H`: {
                cardNumbers[i].innerText = currentValue + "\n♥";
            }
            break;
            case `D`: {
                cardNumbers[i].innerText = currentValue + "\n♦";
            }
            break;
            case `S`: {
                cardNumbers[i].innerText = currentValue + "\n♠";
            }
            break;
            case `C`: {
                cardNumbers[i].innerText = currentValue + "\n♣";
            }
            break;
            default:
                console.error(`No recognizable suit found`);
        }
    }
    
    //Altering card art.      
    const cardArt = document.getElementsByClassName(`card-art`)[0]
    while(cardArt.children[0]) {  //while loop checks for children of cardArt and removes 1st child.
        cardArt.children[0].remove()
    }
    for (let i = 0; i < currentValue; i++) {
        let suitSymbolContainer = document.createElement(`div`)
        suitSymbolContainer.textContent = suit  //create div for each symbol and append to card art.
        cardArt.append(suitSymbolContainer)
    }
    

}

playCard()
//console.log('PlayerCards', playerCards)
//console.log('OpponentCards', opponentCards)










