import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: this.generateDeck(),
      pickedCards: []
    };
  }
  generateDeck = () => {
    const symbols = ['Δ', 'β', 'Ψ', 'δ', 'λ', 'Σ', 'Φ', 'Ω'];
    let deck = [];
    for (let i = 0; i < 16; i++){
      deck.push({isFlipped: false, symbol: symbols[i % 8]})
    }
    this.shuffle(deck);
    return deck;
  }

  shuffle = (deck) => {
    var j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }
    return deck;
  }

  pickCard = (cardIndex) => {
    if(this.state.deck[cardIndex].isFlipped) {
      return;
    }
    let cardToFlip = this.state.deck[cardIndex];
    cardToFlip.isFlipped = true;
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if(cardIndex === index){
        return cardToFlip;
      }
      return card;
    });
    if(newPickedCards.length === 2){
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      if(this.state.deck[card1Index].symbol !== this.state.deck[card2Index].symbol){
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000);
      }
      newPickedCards = [];
    }
    this.setState({deck: newDeck, pickedCards: newPickedCards});
  }

  unflipCards = (card1Index, card2Index) => {
    let newDeck = this.state.deck.map((card, index) => {
      if(index === card1Index || index === card2Index){
        card.isFlipped = false;
      }
      return card;
    });
    this.setState({deck: newDeck});
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return (<MemoryCard 
        key = {index}
        symbol = {card.symbol}
        isFlipped = {card.isFlipped}
        pickCard = {this.pickCard.bind(this, index)}
      />);
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h3>Match Cards To Win</h3>
        </header>
        <div>
          {cardsJSX.slice(0,4)}
        </div>
        <div>
          {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;
