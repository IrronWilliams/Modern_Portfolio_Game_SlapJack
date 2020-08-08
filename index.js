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
console.log('Shuffled Deck:', discardCards)