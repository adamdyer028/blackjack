class Player {
    constructor(cards, funds) {
        this.cards = cards;
        this.funds = funds;
    }

    getHand() {
        let handString = "";
        for (let i = 0; i < this.cards.length; i++) {
            if (handString === "") {
                handString = this.cards[i];
            } else {
                handString += " " + this.cards[i];  
            } 
        }
        return handString;
    }

    getFunds() {
        return this.funds;
    }

    addCard(card) {
        this.cards.push(card);
    }

    bet(amount) {
        this.funds -= amount;
    }

    win(amount) {
        this.funds += amount;
    }

}

class Deck {
    constructor(cards) {
        this.cards = cards;
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let card = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = card;
        }
    }
    
    getCards() {
        return this.cards;
    }

    dealCard(player) {
        let card = this.cards.pop(); 
        player.addCard(card);
    }
}

class Game {
    constructor(deck, player, dealer) {
        this.deck = deck;
        this.player = player;
        this.dealer = dealer;
    }

    start(bet) {
        this.player.bet(bet);
        this.deck.dealCard(this.player);
        this.deck.dealCard(this.dealer);
        this.deck.dealCard(this.player);
        this.deck.dealCard(this.dealer);
    }
}

let suits = ['S', 'H', 'C', 'D'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let cards = [];
for (rank of ranks) {
    for (suit of suits) {
        cards.push(rank + suit);
    }
}
let player1 = new Player([], 1500);
let dealer = new Player([], 9999999999);
let deck = new Deck(cards);
let game = new Game(deck, player1, dealer);
game.start(50);

console.log(player1.getHand());



