import React, { useState, useEffect } from "react";
import "./styles.css";

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" }
];

function App() {
  const [quote, setQuote] = useState({});

  // Load random quote on first render
  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div id="quote-box" className="container">
      
      <p id="text">"{quote.text}"</p>
      <h4 id="author">- {quote.author}</h4>

      <div className="buttons">
        <button id="new-quote" onClick={getNewQuote}>
          New Quote
        </button>

        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>

    </div>
  );
}

export default App;