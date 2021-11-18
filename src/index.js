class Quote {
  constructor(author, phrase) {
    this.author = author;
    this.phrase = phrase;
  }
}

//Spike Spiegel
//Keiko Nobumoto
//Jet Black
//Vicious
//Faye Valentine
//londes
//Vincent Volaju
//Andy Von De Oniyate
// Laughing Bull

const randomMsg = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return `${quote.phrase} - ${quote.author}`;
};

module.exports = { randomMsg };
