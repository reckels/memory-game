import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';

function generateDeck() {
  const symbols = [Δ, β, Ψ, δ, λ, Σ, Φ, Ω];
  deck = [];
  for (let i = 0; i < 16; i++){
    deck.push(card = {isFlipped: false, symbol: symbols[i % 8]})
  }
  shuffle(deck);
  return deck;
}

function shuffle(deck) {
  var j, x, i;
  for (i = deck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = deck[i];
      deck[i] = deck[j];
      deck[j] = x;
  }
  return deck;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3>Match Cards To Win</h3>
      </header>
      <div>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
      <div>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
      <div>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
      <div>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
        <MemoryCard></MemoryCard>
      </div>
    </div>
  );
}

export default App;
